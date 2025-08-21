"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import LoveStory from "../../src/components/LoveStory";
import "./page.css";

export default function ProposalPage() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Check if there was audio playing from previous page
    const wasAudioPlaying = localStorage.getItem("audioPlaying") === "true";
    const audioSrc = localStorage.getItem("audioSrc");
    const audioTime = localStorage.getItem("audioCurrentTime");

    if (wasAudioPlaying && audioSrc) {
      // Resume the audio
      if (audioRef.current) {
        audioRef.current.src = audioSrc;
        audioRef.current.loop = true;
        audioRef.current.currentTime = parseFloat(audioTime) || 0;

        // Try to play the audio
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              console.log("Audio resumed successfully on proposal page");
            })
            .catch((error) => {
              console.error("Audio resume failed:", error);
              setIsPlaying(false);
            });
        }
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
        src="/Kinikilig.mp3"
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
