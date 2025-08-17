import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./LoveStory.css";

// Import beautiful images for enhanced scenes
import frogImage from "../assets/frog.jpeg";
import handsImage from "../assets/hands.png";
import kiligImage from "../assets/kiligsss.jpeg";
import packiligImage from "../assets/packilig.gif";
import idkImage from "../assets/idk.gif";

const LoveStory = () => {
  const containerRef = useRef(null);

  // Scene 1: Bus and Girl at Bus Stop
  const Scene1 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Bus on the left */}
        <motion.div
          className="absolute left-20 top-1/2 transform -translate-y-1/2"
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-32 h-20 bg-blue-200 border-4 border-black rounded-lg relative">
            {/* Bus windows */}
            <div className="absolute top-2 left-2 w-8 h-6 bg-blue-300 border-2 border-black rounded"></div>
            <div className="absolute top-2 right-2 w-8 h-6 bg-blue-300 border-2 border-black rounded"></div>
            {/* Boy in bus */}
            <div className="absolute bottom-2 left-4 w-6 h-8 bg-pink-200 border-2 border-black rounded-full">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mt-1"></div>
              <div className="w-4 h-1 bg-black rounded-full mx-auto mt-1"></div>
            </div>
          </div>
          {/* Bus wheels */}
          <div className="w-6 h-6 bg-gray-800 border-2 border-black rounded-full mx-auto mt-2"></div>
        </motion.div>

        {/* Girl at bus stop on the right */}
        <motion.div
          className="absolute right-20 top-1/2 transform -translate-y-1/2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Girl's head */}
          <div className="w-8 h-8 bg-pink-200 border-2 border-black rounded-full mx-auto">
            <div className="w-4 h-4 bg-white border-2 border-black rounded-full mx-auto mt-1">
              <div className="w-2 h-2 bg-black rounded-full mx-auto mt-1"></div>
            </div>
          </div>
          {/* Girl's body */}
          <div className="w-6 h-12 bg-blue-300 border-2 border-black rounded mx-auto mt-1">
            <div className="w-4 h-2 bg-white border border-black rounded mx-auto mt-1"></div>
          </div>
          {/* Girl's hair */}
          <motion.div
            className="w-8 h-16 bg-yellow-300 border-2 border-black rounded-b-full mx-auto -mt-2 origin-top"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
        </motion.div>

        {/* Bus stop sign */}
        <div className="absolute right-32 bottom-20 w-2 h-16 bg-gray-800 border border-black"></div>
        <div className="absolute right-28 bottom-36 w-10 h-8 bg-red-500 border-2 border-black rounded"></div>

        <motion.h2
          className="absolute bottom-10 text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Scene 1: The First Sight
        </motion.h2>
      </motion.div>
    );
  };

  // Scene 2: Festival Scene
  const Scene2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Background crowd (simple dots representing people) */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gray-400 border border-black rounded-full absolute"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>

        {/* Girl in center with beautiful image */}
        <motion.div
          className="relative z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Enhanced with kilig image */}
          <motion.img
            src={kiligImage}
            alt="Kilig Girl"
            className="w-24 h-24 rounded-full border-4 border-pink-300 shadow-lg"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Fireworks/Lanterns */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-6 bg-yellow-300 border-2 border-black rounded-full"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 60 + 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}

        <motion.h2
          className="absolute bottom-10 text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Scene 2: The Festival
        </motion.h2>
      </motion.div>
    );
  };

  // Scene 3: Chat Scene
  const Scene3 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-white relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Phone outline */}
        <div className="w-80 h-96 bg-gray-800 border-4 border-black rounded-3xl relative">
          {/* Screen */}
          <div
            className="w-72 h-88 bg-white border-2 border-black rounded-2xl mx-auto mt-2 relative overflow-hidden"
            style={{ height: "88%" }}
          >
            {/* Chat bubbles */}
            <div className="p-4 space-y-4">
              <motion.div
                className="w-20 h-8 bg-blue-200 border-2 border-black rounded-2xl flex items-center justify-center text-sm"
                initial={{ opacity: 0, x: -50, scale: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : -50,
                  scale: isInView ? 1 : 0,
                }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Hi
              </motion.div>

              <motion.div
                className="w-32 h-8 bg-green-200 border-2 border-black rounded-2xl flex items-center justify-center text-sm ml-auto"
                initial={{ opacity: 0, x: 50, scale: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : 50,
                  scale: isInView ? 1 : 0,
                }}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                like which style?
              </motion.div>

              <motion.div
                className="w-16 h-8 bg-blue-200 border-2 border-black rounded-2xl flex items-center justify-center text-sm"
                initial={{ opacity: 0, x: -50, scale: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : -50,
                  scale: isInView ? 1 : 0,
                }}
                transition={{ delay: 1.9, duration: 0.6 }}
              >
                idk
              </motion.div>
            </div>

            {/* Enhanced with packilig image */}
            <motion.div
              className="absolute bottom-4 right-4"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <img
                src={packiligImage}
                alt="Packilig"
                className="w-16 h-16 rounded-full border-2 border-pink-300"
              />
            </motion.div>
          </div>
        </div>

        <motion.h2
          className="absolute bottom-10 text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Scene 3: The First Chat
        </motion.h2>
      </motion.div>
    );
  };

  // Scene 4: Drawing Scene
  const Scene4 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-white relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Notebook */}
        <div className="w-96 h-64 bg-yellow-50 border-4 border-black rounded-lg relative shadow-lg">
          {/* Spiral binding */}
          <div className="absolute left-0 top-0 w-2 h-full bg-gray-400 border border-black"></div>

          {/* Lines on paper */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="w-full h-px bg-gray-300 absolute"
              style={{ top: `${20 + i * 25}px` }}
            ></div>
          ))}

          {/* Boy drawing */}
          <motion.div
            className="absolute right-8 top-8 w-16 h-20 bg-blue-200 border-3 border-black rounded-full"
            style={{ borderWidth: "3px" }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-4 h-4 bg-black rounded-full mx-auto mt-2"></div>
            <div className="w-8 h-2 bg-black rounded-full mx-auto mt-1"></div>
          </motion.div>

          {/* Drawing lines appearing */}
          <motion.path
            d="M 100 80 Q 120 60 140 80 Q 160 100 180 80"
            stroke="black"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: isInView ? 1 : 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute"
          />

          {/* Cartoon characters being drawn */}
          <motion.div
            className="absolute left-20 top-16 w-8 h-8 bg-pink-200 border-2 border-black rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isInView ? 1 : 0,
              opacity: isInView ? 1 : 0,
            }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="w-2 h-2 bg-black rounded-full mx-auto mt-1"></div>
            <div className="w-4 h-1 bg-black rounded-full mx-auto mt-1"></div>
          </motion.div>

          {/* Enhanced with frog image */}
          <motion.div
            className="absolute left-32 top-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
            transition={{ delay: 2, duration: 0.8 }}
          >
            <img
              src={frogImage}
              alt="Frog"
              className="w-12 h-12 rounded-full border-2 border-green-300"
            />
          </motion.div>

          {/* Enhanced with hands image */}
          <motion.div
            className="absolute left-48 top-16"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            <img
              src={handsImage}
              alt="Hands"
              className="w-10 h-10 rounded-full border-2 border-blue-300"
            />
          </motion.div>
        </div>

        <motion.h2
          className="absolute bottom-10 text-2xl font-bold text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Scene 4: The Artist
        </motion.h2>
      </motion.div>
    );
  };

  // Final Scene: Growing Heart
  const FinalScene = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-white relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Growing Heart */}
        <motion.div
          className="relative"
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div className="w-32 h-32 bg-red-500 border-4 border-black relative transform rotate-45">
            <div className="absolute inset-0 bg-red-400 rounded-full transform scale-75"></div>
          </div>
          <div className="w-32 h-32 bg-red-500 border-4 border-black absolute top-0 left-0 transform -rotate-45">
            <div className="absolute inset-0 bg-red-400 rounded-full transform scale-75"></div>
          </div>
        </motion.div>

        {/* Enhanced with idk image */}
        <motion.div
          className="absolute top-8 right-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <img
            src={idkImage}
            alt="IDK"
            className="w-16 h-16 rounded-full border-2 border-purple-300"
          />
        </motion.div>

        {/* Text */}
        <motion.h1
          className="absolute bottom-20 text-3xl font-bold text-gray-800 text-center max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          And I still think of her ❤️
        </motion.h1>

        <motion.h2
          className="absolute bottom-10 text-xl font-medium text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          The End
        </motion.h2>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="love-story-container w-full bg-white">
      <div className="love-story-scene">
        <Scene1 />
      </div>
      <div className="love-story-scene">
        <Scene2 />
      </div>
      <div className="love-story-scene">
        <Scene3 />
      </div>
      <div className="love-story-scene">
        <Scene4 />
      </div>
      <div className="love-story-scene">
        <FinalScene />
      </div>
    </div>
  );
};

export default LoveStory;
