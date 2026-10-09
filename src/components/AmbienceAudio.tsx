import { useRef, useState } from "react";
import ambience from "../assets/sound/mercredi.mp3";

export default function AmbienceAudio() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlaying(!playing);
    };

    return (
        <>
            <audio ref={audioRef} loop>
                <source src={ambience} type="audio/mpeg" />
            </audio>

            <button
                onClick={toggleAudio}
                className="
        fixed bottom-6 right-6 z-50
        text-xs tracking-widest uppercase
        border border-white/20 px-4 py-2
        hover:border-accent hover:text-accent
        transition-all duration-500
        "
            >
                {playing ? "Silence" : "Ambience"}
            </button>
        </>
    );
}
