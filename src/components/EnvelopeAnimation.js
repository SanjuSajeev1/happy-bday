import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import "./EnvelopeAnimation.css";
import pdfFile from "../assets/a.pdf"; // Import the PDF file

const EnvelopeAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationEmojis, setCelebrationEmojis] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const router = useRouter();

  const openEnvelope = () => {
    if (isOpen) {
      // Close the envelope
      setIsOpen(false);
      setShowLetter(false);
      // Keep audio playing when closing envelope
      // Only stop if user manually stops it
    } else {
      // Open the envelope
      setIsOpen(true);
      // Show the letter content after a short delay
      setTimeout(() => {
        setShowLetter(true);
        // Play audio when letter is shown (will loop continuously)
        playAudio();
      }, 600);

      // Trigger celebration when opening
      triggerCelebration();
    }
  };

  const playAudio = () => {
    if (audioRef.current) {
      // Set volume to a comfortable level
      audioRef.current.volume = 0.7;

      // Try to play the audio
      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log(
              "Audio started playing successfully - will loop continuously"
            );
          })
          .catch((error) => {
            console.error("Audio play failed:", error);
            // Handle autoplay restrictions
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
      console.log("Audio manually stopped by user");
    }
  };

  const playNewSong = (newSongPath) => {
    // Stop current audio first
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Update audio source and play new song
    if (audioRef.current) {
      audioRef.current.src = newSongPath;
      audioRef.current.loop = true;
      setIsPlaying(false);

      // Play the new song
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            console.log("New song started playing - will loop continuously");
          })
          .catch((error) => {
            console.error("New song play failed:", error);
            setIsPlaying(false);
          });
      }
    }
  };

  const triggerCelebration = () => {
    setShowCelebration(true);

    // Create celebration emojis
    const emojis = [
      "💖",
      "💕",
      "💝",
      "💗",
      "💓",
      "💞",
      "💟",
      "🎉",
      "🎊",
      "🎈",
      "🎂",
      "✨",
      "🌟",
      "💫",
      "🔥",
      "💯",
      "🥳",
      "😍",
      "🥰",
      "😘",
    ];
    const newEmojis = [];

    for (let i = 0; i < 30; i++) {
      newEmojis.push({
        id: i,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        left: Math.random() * 100,
        animationDelay: Math.random() * 2,
        animationDuration: Math.random() * 3 + 2,
      });
    }

    setCelebrationEmojis(newEmojis);

    // Hide celebration after 5 seconds
    setTimeout(() => {
      setShowCelebration(false);
      setCelebrationEmojis([]);
    }, 5000);
  };

  const goToProposal = () => router.push("/proposal");

  const showLoveStoryAndProposal = () => {
    // Save audio state before navigation
    if (audioRef.current && isPlaying) {
      localStorage.setItem("audioPlaying", "true");
      localStorage.setItem("audioSrc", audioRef.current.src);
      localStorage.setItem(
        "audioCurrentTime",
        audioRef.current.currentTime.toString()
      );
    }

    // Navigate to proposal page
    router.push("/proposal");
  };

  // Function to open the local PDF
  const readPdf = () => {
    window.open(pdfFile, "_blank"); // Open the PDF in a new tab
  };

  return (
    <div className="envelope-container">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src="/Kinikilig.mp3"
        loop={true}
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
      />

      <div className={`envlope-wrapper ${isOpen ? "open" : "close"}`}>
        <div
          id="envelope"
          className={isOpen ? "open" : "close"}
          onClick={openEnvelope}
          style={{ cursor: "pointer" }}
        >
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            {showLetter ? (
              <div className="birthday-letter">
                <div className="letter-header">
                  <h2> Cheers to 19!🥹❤️ </h2>
                </div>
                <div className="letter-content"></div>
                <div className="letter-footer"></div>
              </div>
            ) : (
              <div className="empty-letter">
                <div className="letter-preview">
                  <p>💌</p>
                  <p>Click to open</p>
                </div>
              </div>
            )}
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>

      <div className="reset">
        {isOpen && (
          <>
            <button onClick={readPdf} className="pdf-button">
              📄 Read Special Message
            </button>
            <button
              className="navbar-button"
              onClick={showLoveStoryAndProposal}
            >
              💝 I need to ask you Something!!
            </button>
            {/* Audio Control Button */}
            <button
              onClick={isPlaying ? stopAudio : playAudio}
              className={`audio-button ${isPlaying ? "playing" : ""}`}
            >
              {isPlaying ? "🔇 Stop Music" : "🎵 Play Music"}
            </button>
          </>
        )}
      </div>

      {/* Celebration Emojis */}
      {showCelebration && (
        <div className="celebration-container">
          {celebrationEmojis.map((emojiObj) => (
            <div
              key={emojiObj.id}
              className="celebration-emoji"
              style={{
                left: `${emojiObj.left}%`,
                animationDelay: `${emojiObj.animationDelay}s`,
                animationDuration: `${emojiObj.animationDuration}s`,
              }}
            >
              {emojiObj.emoji}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnvelopeAnimation;
