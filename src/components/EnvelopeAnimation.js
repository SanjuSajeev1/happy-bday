import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import "./EnvelopeAnimation.css";
import pdfFile from "../assets/a.pdf"; // Import the PDF file

// Import beautiful images for enhancement
import kiligImage from "../assets/kiligsss.jpeg";
import packiligImage from "../assets/packilig.gif";
import frogImage from "../assets/frog.jpeg";

const EnvelopeAnimation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const openEnvelope = () => setIsOpen(true);
  const goToProposal = () => router.push("/proposal");

  // Function to open the local PDF
  const readPdf = () => {
    window.open(pdfFile, "_blank"); // Open the PDF in a new tab
  };

  return (
    <div>
      <div className={`envlope-wrapper ${isOpen ? "open" : "close"}`}>
        <div id="envelope" className={isOpen ? "open" : "close"}>
          <div className="front flap"></div>
          <div className="front pocket"></div>
          <div className="letter">
            <div className="words line1"></div>
            <div className="words line2">Happy Birthday..! </div>
            <div className="words line3">
              {" "}
              <center>
                {" "}
                <b> Seetha Mahalakshmi! </b>{" "}
              </center>{" "}
            </div>
            <div className="words line4"></div>
          </div>
          <div className="hearts">
            <div className="heart a1"></div>
            <div className="heart a2"></div>
            <div className="heart a3"></div>
          </div>
        </div>
      </div>
      <div className="reset">
        <button onClick={openEnvelope}>Open</button>

        <button onClick={readPdf}>
          clicke here after opening the letter !!!!!
        </button>
        <button className="navbar-button" onClick={goToProposal}>
          {" "}
          I need to ask you Something !!
        </button>
      </div>

      {/* Enhanced with beautiful images */}
      <motion.div
        className="absolute top-20 right-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <img
          src={kiligImage}
          alt="Kilig"
          className="w-20 h-20 rounded-full border-4 border-pink-300 shadow-lg"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <img
          src={packiligImage}
          alt="Packilig"
          className="w-20 h-20 rounded-full border-4 border-purple-300 shadow-lg"
        />
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-10 transform -translate-y-1/2"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <img
          src={frogImage}
          alt="Frog"
          className="w-16 h-16 rounded-full border-4 border-green-300 shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default EnvelopeAnimation;
