// Yes.js
import React from "react";
import Image from "next/image";
import "./Yes.css"; // Ensure this CSS file contains the styles provided

const Yes = () => {
  return (
    <div className="yes">
      <div className="sparkle"></div>
      <Image
        src="/idk.gif"
        alt="Kilig"
        className="romantic-img"
        width={200}
        height={200}
      />
      <Image
        src="/packilig.gif"
        alt="Packilig"
        className="romantic-img"
        width={200}
        height={200}
      />
      <p className="message">
        {" "}
        Thank you Thank You Thaaaaaaaank You !!!!!! &lt;3
      </p>
      <p className="message">
        Welcome my honey bunch sugar plum loml i love you &lt;3
      </p>
      <audio controls autoPlay src="/Kinikilig.mp3" className="audio-player" />
      <Image
        src="/idk.gif"
        alt="Crykilig"
        className="romantic-img"
        width={200}
        height={200}
      />
      <div className="heart heart1"></div>
      <div className="heart heart2"></div>
      <div className="heart heart3"></div>
      <div className="heart heart4"></div>
      <div className="heart heart5"></div>

      {/* Enhanced with additional beautiful images */}
      <Image
        src="/kiligsss.jpeg"
        alt="Kiligsss"
        className="romantic-img kiligsss-img"
        width={200}
        height={200}
      />
    </div>
  );
};

export default Yes;
