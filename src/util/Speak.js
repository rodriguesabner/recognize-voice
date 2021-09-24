import {socketListener} from "../services/socketListener";

function Speak(message) {
    const msg = new SpeechSynthesisUtterance(message);
    // socketListener("talk", (err, result) => {
    //     if (err) return;
    //
    //     console.log(result);
    // });

    const voices = window.speechSynthesis.getVoices();
    msg.lang = "pt-br";
    msg.voice = voices[14];

    window.speechSynthesis.speak(msg);
}

export {
    Speak
}