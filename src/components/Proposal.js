import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Proposal.css";
import Link from "next/link";

const Proposal = () => {
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const [imageIndex, setImageIndex] = useState(-1); // Initialize with -1 to indicate no image
  const [buttonPosition, setButtonPosition] = useState(0); // Track position index
  const [noClickCount, setNoClickCount] = useState(0); // Track the number of "No" clicks
  const [backgroundText, setBackgroundText] = useState(
    "I like you a lot, talk with me everyday on whatsapp?"
  ); // Background text
  const [showYesButtons, setShowYesButtons] = useState(false); // Track when to show "Yes" buttons
  const [hearts, setHearts] = useState([]); // Track hearts for animation

  // Array of button positions - responsive
  const positions = [
    { bottom: "20px", left: "10%" },
    { bottom: "20px", left: "35%" },
    { bottom: "20px", left: "60%" },
    { bottom: "20px", left: "85%" },
  ];

  // Array of images
  const images = [
    "/sadcat.jpeg",
    "/sad-man-tik-tok-meme.gif",
    "/milk-and-mocha.gif",
    "/crykilig.jpeg",
    "/hang.jpeg",
    "/Dead.jpg",
  ];

  // Array of background texts
  const backgroundTexts = [
    "dont do it!!!",
    "please",
    "come on, pretty please?",
    "you know you want to say yes!",
    "PLEEEAAAAAASEEEEE!",
    "SATH POTTE!!!!!!",
    "YES il Njekkkkkk!!!!!",
  ];

  // Array of "Yes" phrases
  const yesPhrases = [
    "Yes",
    "Of course, yes!",
    "A little bit, yes",
    "Definitely yes",
    "Why not, yes!",
    "Absolutely yes!",
    "Sure, yes!",
    "Yup, yes!",
    "Totally yes!",
    "Without a doubt, yes!",
  ];

  const handleButtonClick = () => {
    const newImageIndex = imageIndex + 1;
    const newNoClickCount = noClickCount + 1;

    // If all texts have been displayed, show "Yes" buttons
    if (newNoClickCount >= backgroundTexts.length) {
      setShowYesButtons(true);
    } else {
      const newPosition = (buttonPosition + 1) % positions.length;

      setButtonOpacity(0.5); // Change opacity
      setImageIndex(newImageIndex); // Update image index
      setButtonPosition(newPosition); // Update button position
      setNoClickCount(newNoClickCount); // Update click count
      setBackgroundText(backgroundTexts[newNoClickCount]); // Update background text

      // Create a heart element and add it to the array
      const newHeart = (
        <span
          key={Date.now()}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 2 + 1}s`,
          }}
        >
          ❤️
        </span>
      );
      setHearts((prevHearts) => [...prevHearts, newHeart]);

      // Remove hearts after animation ends
      setTimeout(() => {
        setHearts((prevHearts) => prevHearts.slice(1));
      }, 2000);
    }
  };

  if (showYesButtons) {
    return (
      <div className="yes-buttons-container">
        {[...Array(100)].map((_, index) => (
          <Link href="/yes" key={index}>
            <button className="yes-button">
              {yesPhrases[Math.floor(Math.random() * yesPhrases.length)]}
            </button>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="proposal">
      <div className="ask">
        <p>
          <span className="crush">HEY SEETHAAA!</span> <br />
          {backgroundText}
        </p>
        <div className="buttons">
          <Link href="/yes">
            <button className="yes-button">Yes</button>
          </Link>
          <button
            className={`no-button position-${buttonPosition}`} // Dynamically apply position class
            style={{ opacity: buttonOpacity, ...positions[buttonPosition] }} // Apply opacity and position
            onClick={handleButtonClick}
          >
            NO
          </button>
        </div>
        {imageIndex !== -1 && (
          <img
            className={`image-${imageIndex}`}
            src={images[imageIndex]} // Use the current image based on index
            alt="Sad"
          />
        )}

        {/* Enhanced with additional beautiful images */}
        <motion.div
          className="absolute top-4 right-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <img
            src="/packilig.gif"
            alt="Packilig"
            className="w-16 h-16 rounded-full border-2 border-pink-300 shadow-lg"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-4 left-4"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src="/kiligsss.jpeg"
            alt="Kilig"
            className="w-16 h-16 rounded-full border-2 border-purple-300 shadow-lg"
          />
        </motion.div>
      </div>
      {hearts}
    </div>
  );
};

export default Proposal;
