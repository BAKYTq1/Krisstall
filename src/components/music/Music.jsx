import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./music.scss";
import music from './music/Элджей & Кравц - Дисконнект.mp3'; 

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [color, setColor] = useState("red");
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(music);
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
    setColor(isPlaying ? "red" : "blue"); // Исправлено условие для изменения цвета
  };

  return (
    <button onClick={toggleMusic} className="music-toggle" style={{ backgroundColor: color }}>
      {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
}
