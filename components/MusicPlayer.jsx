"use client";

import { useRef, useState } from "react";
import { Play, Pause, Music } from "lucide-react";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music/love-song.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-pink-400 px-5 py-3 text-white shadow-lg hover:bg-pink-500 transition"
      >
        <Music size={18} />
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </>
  );
}
