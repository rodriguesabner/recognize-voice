import React, {useEffect, useState} from 'react';
import {Mic} from "react-feather";
import {BottomContent, Container, Layout, ListMessages, Message, TopWrapper} from "./styles";
import {api} from "../../services/api";

const Home = () => {
    const [speechApi, setSpeechApi] = useState();
    const [isAvailable, setIsAvailable] = useState(false);
    const [messages, setMessages] = useState([{
        message: "Seja bem-vindo lar, Abner",
        isBot: true
    }, {
        message: "Como posso te ajudar?",
        isBot: true
    }
    ]);

    useEffect(() => {
        function config() {
            if (window.SpeechRecognition || window.webkitSpeechRecognition) {
                const api = window.SpeechRecognition || window.webkitSpeechRecognition;
                setSpeechApi(new api);
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

        speechApi.onresult = async function (event) {
            await onTranscript(event);
        };

        speechApi.onspeechend = function () {
            speechApi.stop();
        }

        speechApi.start();
    }

    async function onTranscript(evt) {
        const transcript = evt.results[0][0].transcript.toLowerCase();

        setMessages(prevState => [...prevState, {message: transcript, isBot: false}]);

        const defaultNaming = "cortana";
        if (transcript.includes(defaultNaming)) {
            if (transcript.includes(`${defaultNaming} agendar evento`)) {
                const message = "Certo! O que deseja agendar?";

                const {data} = await api.post("/talk", {text: message});

                const audio = new Audio(data.file);
                await audio.play();

                setMessages(prevState => [...prevState, {message, isBot: true}]);
            }
        }

        console.log(defaultNaming);
        if (transcript.includes(defaultNaming)) {
            if (transcript.includes("spotify")) {
                window.open("https://play.spotify.com");
            }

            if(transcript.includes("facebook")) {
                window.open("fb://profile/rodriguesabner_");
            }

            if(transcript.includes("bradesco")) {
                window.open("com.bradesco://");
            }

            if(transcript.includes("bradesco")) {
                window.open("com.bradesco://");
            }
        }

    }

    return (
        <Layout>
            <Container>
                <TopWrapper className={"noselect"}>
                    <ListMessages>
                        {
                            messages.map((item, index) => (
                                <Message key={index} isBot={item.isBot}>
                                    <h1>
                                        {item.message}
                                    </h1>
                                </Message>
                            ))
                        }
                    </ListMessages>
                </TopWrapper>

                <BottomContent>
                    {
                        isAvailable &&
                        <button onClick={() => record()}>
                            <Mic/>
                        </button>
                    }
                </BottomContent>
            </Container>
        </Layout>
    );
};

export default Home;
