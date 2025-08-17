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

  // Scene 1: Bus and Girl at Bus Stop (Diary of a Wimpy Kid Style)
  const Scene1 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-yellow-50 relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #fef3c7 0%, #fefce8 50%, #fef3c7 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Diary/Journal Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Paper texture lines */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gray-300 opacity-30"
              style={{ top: `${i * 40}px` }}
            ></div>
          ))}

          {/* Margin line */}
          <div className="absolute left-8 top-0 w-px h-full bg-red-500 opacity-60"></div>

          {/* Date stamp */}
          <div className="absolute top-8 left-12 text-sm font-handwriting text-gray-600">
            <div className="font-bold">Dear Diary,</div>
            <div className="text-xs mt-1">Today was AMAZING!</div>
          </div>
        </div>

        {/* Bus Window Frame - More Realistic */}
        <motion.div
          className="absolute left-16 top-1/2 transform -translate-y-1/2"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Bus window with realistic details */}
          <div className="w-40 h-32 bg-gray-100 border-4 border-gray-800 rounded-lg relative shadow-2xl">
            {/* Window glass effect */}
            <div className="absolute inset-2 bg-blue-200 border-2 border-gray-600 rounded-md opacity-80"></div>

            {/* Window frame details */}
            <div className="absolute top-2 left-2 w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="absolute top-2 right-2 w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-gray-800 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-gray-800 rounded-full"></div>

            {/* Boy's reflection in window - More detailed cartoon */}
            <div className="absolute bottom-4 left-6 w-8 h-10 bg-blue-300 border-2 border-gray-700 rounded-full opacity-90">
              {/* Eyes */}
              <div className="w-1 h-1 bg-black rounded-full absolute top-2 left-1"></div>
              <div className="w-1 h-1 bg-black rounded-full absolute top-2 right-1"></div>
              {/* Mouth */}
              <div className="w-2 h-1 bg-black rounded-full absolute bottom-2 left-1"></div>
              {/* Hair */}
              <div className="w-6 h-2 bg-brown-600 border border-black rounded-full absolute -top-1 left-1"></div>
            </div>

            {/* Other passengers in bus */}
            <div className="absolute top-4 right-4 w-6 h-8 bg-pink-200 border-2 border-black rounded-full opacity-80">
              <div className="w-1 h-1 bg-black rounded-full absolute top-1 left-1"></div>
              <div className="w-1 h-1 bg-black rounded-full absolute top-1 right-1"></div>
              <div className="w-2 h-1 bg-black rounded-full absolute bottom-1 left-1"></div>
            </div>

            <div className="absolute top-8 left-4 w-5 h-7 bg-green-200 border-2 border-black rounded-full opacity-80">
              <div className="w-1 h-1 bg-black rounded-full absolute top-1 left-1"></div>
              <div className="w-1 h-1 bg-black rounded-full absolute top-1 right-1"></div>
              <div className="w-2 h-1 bg-black rounded-full absolute bottom-1 left-1"></div>
            </div>
          </div>
        </motion.div>

        {/* Girl at Bus Stop - More Realistic */}
        <motion.div
          className="absolute right-24 top-1/2 transform -translate-y-1/2"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Girl with more realistic proportions */}
          <div className="relative">
            {/* Girl's head */}
            <div className="w-12 h-12 bg-pink-200 border-3 border-black rounded-full mx-auto relative">
              <div className="w-6 h-6 bg-white border-2 border-black rounded-full mx-auto mt-2">
                <div className="w-3 h-3 bg-black rounded-full mx-auto mt-1"></div>
              </div>
              {/* Glasses */}
              <div className="absolute top-3 left-1 w-4 h-4 border-2 border-black rounded-full"></div>
              <div className="absolute top-3 right-1 w-4 h-4 border-2 border-black rounded-full"></div>
              <div className="absolute top-4 left-2 w-2 h-1 bg-black"></div>
            </div>

            {/* Girl's body */}
            <div className="w-8 h-16 bg-blue-300 border-3 border-black rounded mx-auto mt-1 relative">
              <div className="w-6 h-3 bg-white border border-black rounded mx-auto mt-2"></div>
              {/* School uniform details */}
              <div className="absolute top-4 left-1 w-1 h-8 bg-red-500 border border-black"></div>
              <div className="absolute top-4 right-1 w-1 h-8 bg-red-500 border border-black"></div>
            </div>

            {/* Girl's hair - Long and flowing */}
            <motion.div
              className="w-10 h-24 bg-yellow-300 border-3 border-black rounded-b-full mx-auto -mt-2 origin-top relative"
              style={{ borderWidth: "3px" }}
              animate={{ rotate: [0, 3, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Hair details */}
              <div className="absolute top-2 left-2 w-2 h-4 bg-yellow-400 border border-black rounded-full"></div>
              <div className="absolute top-4 right-1 w-2 h-6 bg-yellow-400 border border-black rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bus Stop - More Realistic */}
        <div className="absolute right-32 bottom-20">
          {/* Bus stop pole */}
          <div className="w-3 h-20 bg-gray-800 border border-black mx-auto"></div>
          {/* Bus stop sign */}
          <div className="w-12 h-10 bg-red-500 border-3 border-black rounded relative">
            <div className="text-white text-xs font-bold text-center pt-1">
              BUS
            </div>
            <div className="text-white text-xs text-center">STOP</div>
          </div>
        </div>

        {/* Thought bubble from boy */}
        <motion.div
          className="absolute left-32 top-1/3 w-24 h-16 bg-white border-3 border-black rounded-full relative"
          style={{ borderWidth: "3px" }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="text-xs font-handwriting text-center pt-2 px-2">
            "She's so pretty!"
          </div>
          {/* Thought bubble tail */}
          <div className="absolute bottom-0 left-4 w-3 h-3 bg-white border-3 border-black border-t-0 border-l-0 transform rotate-45"></div>
        </motion.div>

        {/* Diary entry text */}
        <motion.div
          className="absolute bottom-16 left-16 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg">
            <div className="text-sm font-handwriting text-gray-800 leading-relaxed">
              <div className="font-bold mb-2">Scene 1: The First Sight</div>
              <div className="text-xs">
                I was sitting on the bus today, looking out the window like I
                always do. Then I saw her at the bus stop. She was wearing her
                school uniform and had these cute glasses. Her hair was so long
                and beautiful, swaying in the breeze. I couldn't take my eyes
                off her!
                <br />
                <br />I think I'm in love... 💕
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Scene 2: Festival Scene (Diary of a Wimpy Kid Style)
  const Scene2 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-yellow-50 relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #fef3c7 0%, #fefce8 50%, #fef3c7 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Diary/Journal Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Paper texture lines */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gray-300 opacity-30"
              style={{ top: `${i * 40}px` }}
            ></div>
          ))}

          {/* Margin line */}
          <div className="absolute left-8 top-0 w-px h-full bg-red-500 opacity-60"></div>

          {/* Date stamp */}
          <div className="absolute top-8 left-12 text-sm font-handwriting text-gray-600">
            <div className="font-bold">Dear Diary,</div>
            <div className="text-xs mt-1">The Festival was INCREDIBLE!</div>
          </div>
        </div>

        {/* Background crowd - Cartoon people */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                y: [0, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              {/* Cartoon person */}
              <div className="relative">
                {/* Head */}
                <div
                  className={`w-4 h-4 ${
                    i % 3 === 0
                      ? "bg-pink-200"
                      : i % 3 === 1
                      ? "bg-blue-200"
                      : "bg-yellow-200"
                  } border-2 border-black rounded-full`}
                >
                  {/* Eyes */}
                  <div className="w-1 h-1 bg-black rounded-full absolute top-1 left-1"></div>
                  <div className="w-1 h-1 bg-black rounded-full absolute top-1 right-1"></div>
                  {/* Mouth */}
                  <div className="w-2 h-1 bg-black rounded-full absolute bottom-1 left-1"></div>
                </div>
                {/* Body */}
                <div
                  className={`w-3 h-5 ${
                    i % 2 === 0 ? "bg-blue-300" : "bg-green-300"
                  } border-2 border-black rounded mx-auto mt-1`}
                >
                  {/* Arms */}
                  <div className="w-1 h-2 bg-black absolute top-1 -left-1 transform rotate-45"></div>
                  <div className="w-1 h-2 bg-black absolute top-1 -right-1 transform -rotate-45"></div>
                </div>
                {/* Legs */}
                <div className="w-1 h-3 bg-black mx-auto mt-1"></div>
                <div className="w-1 h-3 bg-black mx-auto mt-1"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Girl in center - Enhanced with kilig image */}
        <motion.div
          className="relative z-10"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.img
            src={kiligImage}
            alt="Kilig Girl"
            className="w-28 h-28 rounded-full border-4 border-pink-300 shadow-2xl"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Glasses overlay */}
          <div className="absolute top-6 left-6 w-6 h-6 border-2 border-black rounded-full bg-transparent"></div>
          <div className="absolute top-6 right-6 w-6 h-6 border-2 border-black rounded-full bg-transparent"></div>
          <div className="absolute top-7 left-5 w-2 h-1 bg-black"></div>
        </motion.div>

        {/* Fireworks/Lanterns - More realistic */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 60 + 20}%`,
            }}
            animate={{
              y: [0, -25, 0],
              scale: [1, 1.4, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          >
            {/* Firework burst */}
            <div className="w-3 h-3 bg-yellow-400 border-2 border-orange-500 rounded-full"></div>
            <div className="w-2 h-2 bg-red-400 border border-red-600 rounded-full mx-auto mt-1"></div>
          </motion.div>
        ))}

        {/* Diary entry text */}
        <motion.div
          className="absolute bottom-16 right-16 max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg">
            <div className="text-sm font-handwriting text-gray-800 leading-relaxed">
              <div className="font-bold mb-2">Scene 2: The Festival</div>
              <div className="text-xs">
                Today was the Palliperunnal festival! The whole town was there,
                and guess what? SHE was there too! She looked so beautiful in
                the middle of the crowd, smiling and laughing. I could see
                fireworks lighting up behind her, making her look like a
                princess!
                <br />
                <br />I think she noticed me too... 💫
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Scene 3: Chat Scene (Diary of a Wimpy Kid Style)
  const Scene3 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-yellow-50 relative"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #fef3c7 0%, #fefce8 50%, #fef3c7 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Diary/Journal Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Paper texture lines */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gray-300 opacity-30"
              style={{ top: `${i * 40}px` }}
            ></div>
          ))}

          {/* Margin line */}
          <div className="absolute left-8 top-0 w-px h-full bg-red-500 opacity-60"></div>

          {/* Date stamp */}
          <div className="absolute top-8 left-12 text-sm font-handwriting text-gray-600">
            <div className="font-bold">Dear Diary,</div>
            <div className="text-xs mt-1">We started chatting today!</div>
          </div>
        </div>

        {/* Phone outline - More realistic */}
        <div className="w-80 h-96 bg-gray-800 border-4 border-black rounded-3xl relative shadow-2xl">
          {/* Screen */}
          <div
            className="w-72 h-88 bg-white border-2 border-black rounded-2xl mx-auto mt-2 relative overflow-hidden"
            style={{ height: "88%" }}
          >
            {/* Chat bubbles */}
            <div className="p-4 space-y-4">
              <motion.div
                className="w-20 h-8 bg-blue-200 border-2 border-black rounded-2xl flex items-center justify-center text-sm font-handwriting"
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
                className="w-32 h-8 bg-green-200 border-2 border-black rounded-2xl flex items-center justify-center text-sm ml-auto font-handwriting"
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
                className="w-16 h-8 bg-blue-200 border-2 border-black rounded-2xl flex items-center justify-center text-sm font-handwriting"
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

        {/* Cartoon people around the phone */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Boy sitting and texting */}
          <motion.div
            className="absolute left-8 bottom-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="relative">
              {/* Head */}
              <div className="w-8 h-8 bg-blue-300 border-2 border-black rounded-full">
                {/* Eyes */}
                <div className="w-1 h-1 bg-black rounded-full absolute top-2 left-2"></div>
                <div className="w-1 h-1 bg-black rounded-full absolute top-2 right-2"></div>
                {/* Mouth */}
                <div className="w-2 h-1 bg-black rounded-full absolute bottom-2 left-3"></div>
                {/* Hair */}
                <div className="w-6 h-2 bg-brown-600 border border-black rounded-full absolute -top-1 left-1"></div>
              </div>
              {/* Body */}
              <div className="w-6 h-10 bg-blue-400 border-2 border-black rounded mx-auto mt-1">
                {/* Arms */}
                <div className="w-1 h-3 bg-black absolute top-2 -left-1 transform rotate-45"></div>
                <div className="w-1 h-3 bg-black absolute top-2 -right-1 transform -rotate-45"></div>
              </div>
              {/* Legs */}
              <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
              <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
            </div>
          </motion.div>

          {/* Girl receiving messages */}
          <motion.div
            className="absolute right-8 bottom-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="relative">
              {/* Head */}
              <div className="w-8 h-8 bg-pink-300 border-2 border-black rounded-full">
                {/* Eyes */}
                <div className="w-1 h-1 bg-black rounded-full absolute top-2 left-2"></div>
                <div className="w-1 h-1 bg-black rounded-full absolute top-2 right-2"></div>
                {/* Mouth */}
                <div className="w-2 h-1 bg-black rounded-full absolute bottom-2 left-3"></div>
                {/* Glasses */}
                <div className="w-3 h-3 border-2 border-black rounded-full absolute top-1 left-1 bg-transparent"></div>
                <div className="w-3 h-3 border-2 border-black rounded-full absolute top-1 right-1 bg-transparent"></div>
                <div className="w-1 h-1 bg-black absolute top-2 left-3"></div>
              </div>
              {/* Body */}
              <div className="w-6 h-10 bg-pink-400 border-2 border-black rounded mx-auto mt-1">
                {/* Arms */}
                <div className="w-1 h-3 bg-black absolute top-2 -left-1 transform rotate-45"></div>
                <div className="w-1 h-3 bg-black absolute top-2 -right-1 transform -rotate-45"></div>
              </div>
              {/* Legs */}
              <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
              <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
            </div>
          </motion.div>
        </div>

        {/* Diary entry text */}
        <motion.div
          className="absolute bottom-16 left-16 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg">
            <div className="text-sm font-handwriting text-gray-800 leading-relaxed">
              <div className="font-bold mb-2">Scene 3: The First Chat</div>
              <div className="text-xs">
                OMG! She actually replied to my message! We started chatting and
                she asked me about my style preferences. I was so nervous I just
                said "idk" - how embarrassing! But she's so sweet and
                understanding. I can't believe this is really happening!
                <br />
                <br />I hope she doesn't think I'm weird... 😅
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Scene 4: Drawing Scene (Diary of a Wimpy Kid Style)
  const Scene4 = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-yellow-50 relative"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #fef3c7 0%, #fefce8 50%, #fef3c7 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Diary/Journal Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Paper texture lines */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gray-300 opacity-30"
              style={{ top: `${i * 40}px` }}
            ></div>
          ))}

          {/* Margin line */}
          <div className="absolute left-8 top-0 w-px h-full bg-red-500 opacity-60"></div>

          {/* Date stamp */}
          <div className="absolute top-8 left-12 text-sm font-handwriting text-gray-600">
            <div className="font-bold">Dear Diary,</div>
            <div className="text-xs mt-1">I'm drawing her today!</div>
          </div>
        </div>

        {/* Notebook */}
        <div className="w-96 h-64 bg-yellow-50 border-4 border-black rounded-lg relative shadow-2xl">
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

          {/* Boy drawing - More detailed cartoon */}
          <motion.div
            className="absolute right-8 top-8 w-16 h-20 bg-blue-200 border-3 border-black rounded-full"
            style={{ borderWidth: "3px" }}
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Eyes */}
            <div className="w-2 h-2 bg-black rounded-full absolute top-3 left-3"></div>
            <div className="w-2 h-2 bg-black rounded-full absolute top-3 right-3"></div>
            {/* Mouth */}
            <div className="w-3 h-1 bg-black rounded-full absolute bottom-4 left-3"></div>
            {/* Hair */}
            <div className="w-8 h-2 bg-brown-600 border border-black rounded-full absolute -top-1 left-2"></div>
            {/* Pencil in hand */}
            <div className="w-1 h-4 bg-yellow-400 border border-black absolute top-8 -right-2 transform rotate-45"></div>
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

        {/* Cartoon people around the notebook */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Girl watching the drawing */}
          <motion.div
            className="absolute left-8 bottom-32"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative">
              {/* Head */}
              <div className="w-10 h-10 bg-pink-300 border-2 border-black rounded-full">
                {/* Eyes */}
                <div className="w-1 h-1 bg-black rounded-full absolute top-3 left-3"></div>
                <div className="w-1 h-1 bg-black rounded-full absolute top-3 right-3"></div>
                {/* Mouth */}
                <div className="w-2 h-1 bg-black rounded-full absolute bottom-3 left-4"></div>
                {/* Glasses */}
                <div className="w-3 h-3 border-2 border-black rounded-full absolute top-2 left-2 bg-transparent"></div>
                <div className="w-3 h-3 border-2 border-black rounded-full absolute top-2 right-2 bg-transparent"></div>
                <div className="w-1 h-1 bg-black absolute top-3 left-4"></div>
              </div>
              {/* Body */}
              <div className="w-7 h-12 bg-pink-400 border-2 border-black rounded mx-auto mt-1">
                {/* Arms */}
                <div className="w-1 h-4 bg-black absolute top-2 -left-1 transform rotate-45"></div>
                <div className="w-1 h-4 bg-black absolute top-2 -right-1 transform -rotate-45"></div>
              </div>
              {/* Legs */}
              <div className="w-1 h-5 bg-black mx-auto mt-1"></div>
              <div className="w-1 h-5 bg-black mx-auto mt-1"></div>
            </div>
          </motion.div>

          {/* Friend watching */}
          <motion.div
            className="absolute right-8 bottom-20"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 30 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Head */}
              <div className="w-8 h-8 bg-green-300 border-2 border-black rounded-full">
                {/* Eyes */}
                <div className="w-1 h-1 bg-black rounded-full absolute top-2 left-2"></div>
                <div className="w-1 h-1 bg-black rounded-full absolute top-2 right-2"></div>
                {/* Mouth */}
                <div className="w-2 h-1 bg-black rounded-full absolute bottom-2 left-3"></div>
                {/* Hair */}
                <div className="w-6 h-2 bg-brown-600 border border-black rounded-full absolute -top-1 left-1"></div>
              </div>
              {/* Body */}
              <div className="w-6 h-10 bg-green-400 border-2 border-black rounded mx-auto mt-1">
                {/* Arms */}
                <div className="w-1 h-3 bg-black absolute top-2 -left-1 transform rotate-45"></div>
                <div className="w-1 h-3 bg-black absolute top-2 -right-1 transform -rotate-45"></div>
              </div>
              {/* Legs */}
              <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
              <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
            </div>
          </motion.div>
        </div>

        {/* Diary entry text */}
        <motion.div
          className="absolute bottom-16 left-16 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg">
            <div className="text-sm font-handwriting text-gray-800 leading-relaxed">
              <div className="font-bold mb-2">Scene 4: The Artist</div>
              <div className="text-xs">
                Today I decided to draw her! I'm not the best artist, but I
                wanted to capture her beauty on paper. I drew her with her cute
                glasses and long hair. My friend was watching and said it looked
                really good! I hope she likes it when I show her.
                <br />
                <br />
                Drawing her makes me feel closer to her... 🎨
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Final Scene: Growing Heart (Diary of a Wimpy Kid Style)
  const FinalScene = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
      <motion.div
        ref={ref}
        className="h-screen w-full flex items-center justify-center bg-yellow-50 relative"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #fef3c7 0%, #fefce8 50%, #fef3c7 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Diary/Journal Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Paper texture lines */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gray-300 opacity-30"
              style={{ top: `${i * 40}px` }}
            ></div>
          ))}

          {/* Margin line */}
          <div className="absolute left-8 top-0 w-px h-full bg-red-500 opacity-60"></div>

          {/* Date stamp */}
          <div className="absolute top-8 left-12 text-sm font-handwriting text-gray-600">
            <div className="font-bold">Dear Diary,</div>
            <div className="text-xs mt-1">This is my final entry...</div>
          </div>
        </div>

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

        {/* Cartoon people around the heart */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Boy and girl together */}
          <motion.div
            className="absolute left-16 bottom-32"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <div className="relative">
              {/* Boy */}
              <div className="absolute left-0 bottom-0">
                <div className="w-8 h-8 bg-blue-300 border-2 border-black rounded-full">
                  <div className="w-1 h-1 bg-black rounded-full absolute top-2 left-2"></div>
                  <div className="w-1 h-1 bg-black rounded-full absolute top-2 right-2"></div>
                  <div className="w-2 h-1 bg-black rounded-full absolute bottom-2 left-3"></div>
                  <div className="w-6 h-2 bg-brown-600 border border-black rounded-full absolute -top-1 left-1"></div>
                </div>
                <div className="w-6 h-10 bg-blue-400 border-2 border-black rounded mx-auto mt-1">
                  <div className="w-1 h-3 bg-black absolute top-2 -left-1 transform rotate-45"></div>
                  <div className="w-1 h-3 bg-black absolute top-2 -right-1 transform -rotate-45"></div>
                </div>
                <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
                <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
              </div>

              {/* Girl */}
              <div className="absolute right-0 bottom-0">
                <div className="w-8 h-8 bg-pink-300 border-2 border-black rounded-full">
                  <div className="w-1 h-1 bg-black rounded-full absolute top-2 left-2"></div>
                  <div className="w-1 h-1 bg-black rounded-full absolute top-2 right-2"></div>
                  <div className="w-2 h-1 bg-black rounded-full absolute bottom-2 left-3"></div>
                  <div className="w-3 h-3 border-2 border-black rounded-full absolute top-1 left-1 bg-transparent"></div>
                  <div className="w-3 h-3 border-2 border-black rounded-full absolute top-1 right-1 bg-transparent"></div>
                  <div className="w-1 h-1 bg-black absolute top-2 left-3"></div>
                </div>
                <div className="w-6 h-10 bg-pink-400 border-2 border-black rounded mx-auto mt-1">
                  <div className="w-1 h-3 bg-black absolute top-2 -left-1 transform rotate-45"></div>
                  <div className="w-1 h-3 bg-black absolute top-2 -right-1 transform -rotate-45"></div>
                </div>
                <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
                <div className="w-1 h-4 bg-black mx-auto mt-1"></div>
              </div>

              {/* Love connection line */}
              <motion.div
                className="absolute top-4 left-4 w-16 h-1 bg-red-400 border border-red-600 transform rotate-12"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                transition={{ delay: 2, duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>

          {/* Friends celebrating */}
          <motion.div
            className="absolute right-16 bottom-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ delay: 1.8, duration: 1 }}
          >
            <div className="relative">
              {/* Friend 1 */}
              <div className="absolute left-0 bottom-0">
                <div className="w-6 h-6 bg-green-300 border-2 border-black rounded-full">
                  <div className="w-1 h-1 bg-black rounded-full absolute top-1 left-1"></div>
                  <div className="w-1 h-1 bg-black rounded-full absolute top-1 right-1"></div>
                  <div className="w-2 h-1 bg-black rounded-full absolute bottom-1 left-2"></div>
                </div>
                <div className="w-4 h-8 bg-green-400 border-2 border-black rounded mx-auto mt-1">
                  <div className="w-1 h-2 bg-black absolute top-1 -left-1 transform rotate-45"></div>
                  <div className="w-1 h-2 bg-black absolute top-1 -right-1 transform -rotate-45"></div>
                </div>
              </div>

              {/* Friend 2 */}
              <div className="absolute right-0 bottom-0">
                <div className="w-6 h-6 bg-yellow-300 border-2 border-black rounded-full">
                  <div className="w-1 h-1 bg-black rounded-full absolute top-1 left-1"></div>
                  <div className="w-1 h-1 bg-black rounded-full absolute top-1 right-1"></div>
                  <div className="w-2 h-1 bg-black rounded-full absolute bottom-1 left-2"></div>
                </div>
                <div className="w-4 h-8 bg-yellow-400 border-2 border-black rounded mx-auto mt-1">
                  <div className="w-1 h-2 bg-black absolute top-1 -left-1 transform rotate-45"></div>
                  <div className="w-1 h-2 bg-black absolute top-1 -right-1 transform -rotate-45"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Diary entry text */}
        <motion.div
          className="absolute bottom-16 left-16 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg">
            <div className="text-sm font-handwriting text-gray-800 leading-relaxed">
              <div className="font-bold mb-2">Final Entry: The Heart</div>
              <div className="text-xs">
                And so, dear diary, this is where my story ends... or maybe it's
                just the beginning? I've learned that love is like a growing
                heart - it starts small but gets bigger and stronger every day.
                She's become my everything, and I hope she feels the same way
                about me.
                <br />
                <br />
                Thank you for listening to my story. Love is real, and it's
                beautiful... ❤️
              </div>
            </div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.h1
          className="absolute bottom-20 text-3xl font-bold text-gray-800 text-center max-w-md font-handwriting"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          And I still think of her ❤️
        </motion.h1>

        <motion.h2
          className="absolute bottom-10 text-xl font-medium text-gray-600 font-handwriting"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 2, duration: 1 }}
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
