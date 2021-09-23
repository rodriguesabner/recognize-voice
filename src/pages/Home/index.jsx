import React, {useEffect, useState} from 'react';
import {Mic} from "react-feather";

const Home = () => {
    const [transcription, setTranscription] = useState("");
    const [recording, setRecording] = useState(false);
    const [speechApi, setSpeechApi] = useState();
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        function config() {
            if (window.SpeechRecognition || window.webkitSpeechRecognition) {
                const Api = window.SpeechRecognition || window.webkitSpeechRecognition;
                setSpeechApi(new Api);
                setIsAvailable(true);
            } else {
                console.log("navegador não apresenta suporte a web speech api");
            }
        }

        config();

        return () => {
        };
    }, []);


    function record() {
        speechApi.continuous = false;
        speechApi.interimResults = false;
        speechApi.lang = "pt-BR";

        speechApi.onstart = function () {
            setRecording(true);
        };

        speechApi.onend = function () {
            speechApi.start();
            setRecording(false);
        };

        speechApi.onresult = async function (event) {
            await onTranscript(event);
        };

        speechApi.start();
    }

    async function onTranscript(evt) {
        const transcript = evt.results[0][0].transcript.toLowerCase();
        setTranscription(transcript.toLowerCase());

        console.log(transcript);
        const defaultNaming = "alice";

        if (transcript.includes(defaultNaming)) {
            if (transcript.includes(`${defaultNaming} agendar evento`)) {
                speak("Obaaaa, que legal! O que deseja agendar e para quando?")
            }
        }
    }

    function speak(message) {
        const msg = new SpeechSynthesisUtterance(message);

        const voices = window.speechSynthesis.getVoices();
        msg.lang = "pt-br";
        msg.voice = voices[14];

        window.speechSynthesis.speak(msg);
    }

    function stop() {
        speechApi.stop()
    }

    return (
        <div>
            <h1>
                Home
            </h1>

            {
                isAvailable && (
                    <>
                        <button onClick={() => speak()}>
                            Stop
                        </button>

                        {
                            !recording && <button onClick={() => record()}>
                                Start
                            </button>
                        }
                    </>
                )
            }

            <Mic/>
        </div>
    );
};

export default Home;
