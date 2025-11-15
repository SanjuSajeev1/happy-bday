"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LoveStory from "../components/LoveStory";
import "./page.css";

export default function ProposalPage() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Always use song.mp3 for the proposal page, ignore any previous audio state
    if (audioRef.current) {
      // Clear any old audio state from localStorage
      localStorage.removeItem("audioPlaying");
      localStorage.removeItem("audioSrc");
      localStorage.removeItem("audioCurrentTime");

      // Set the new song
      audioRef.current.src = "/song.mp3";
      audioRef.current.loop = true;
      audioRef.current.volume = 0.7;
      audioRef.current.currentTime = 0;

      // Automatically play the music
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            localStorage.setItem("audioPlaying", "true");
            localStorage.setItem("audioSrc", audioRef.current.src);
            console.log("Music started automatically on proposal page");
          })
          .catch((error) => {
            console.error(
              "Auto-play failed (browser may block autoplay):",
              error
            );
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const goToActualProposal = () => {
    // Save audio state before navigation
    if (audioRef.current && isPlaying) {
      localStorage.setItem("audioPlaying", "true");
      localStorage.setItem("audioSrc", audioRef.current.src);
      localStorage.setItem(
        "audioCurrentTime",
        audioRef.current.currentTime.toString()
      );
    }

    router.push("/actual-proposal");
  };

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            localStorage.setItem("audioPlaying", "true");
            localStorage.setItem("audioSrc", audioRef.current.src);
          })
          .catch((error) => {
            console.error("Audio play failed:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      localStorage.removeItem("audioPlaying");
      localStorage.removeItem("audioSrc");
      localStorage.removeItem("audioCurrentTime");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/song.mp3"
        loop={true}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
      />

      {/* Audio Control Button */}
      <div className="audio-controls">
        <button
          onClick={isPlaying ? stopAudio : playAudio}
          className={`audio-button ${isPlaying ? "playing" : ""}`}
        >
          {isPlaying ? "🔇 Stop Music" : "🎵 Play Music"}
        </button>
      </div>

      {/* Love Story Component */}
      <div className="love-story-wrapper">
        <LoveStory />
      </div>

      {/* Button to go to actual proposal */}
    </main>
  );
}
