import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./LoveStory.css";

const LoveStory = () => {
  const containerRef = useRef(null);
  const router = useRouter();
  const audioRef = useRef(null);

  const playYesNoAudio = () => {
    console.log("playYesNoAudio called");
    console.log("audioRef.current:", audioRef.current);

    if (audioRef.current) {
      audioRef.current.volume = 0.7;
      console.log("Audio source:", audioRef.current.src);

      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("YesNo audio started playing successfully");
          })
          .catch((error) => {
            console.error("YesNo audio play failed:", error);
          });
      }
    } else {
      console.error("Audio ref is null");
    }
  };

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
            <div className="text-xs mt-1">
              &ldquo;It&rsquo;s been almost two years… and I still remember that
              bus ride 🚌💨. The noise, the rush, and then — BOOM 💥— her
              👧🎒👓. Three seconds ⏳ and my heart went full drama mode ❤️‍🔥😂.
              The bus went left ⬅️, she stayed right ➡️… and my brain is still
              stuck in the middle 😵🤦‍♂️. Crazy how a stranger can stay more
              unforgettable than half my relatives 😅🙈✨.
              <br />
              <br />
              She was wearing those cute glasses that made her look like a
              character from my favorite anime 🥺. Her smile was so genuine,
              like she was genuinely happy to be alive. I wanted to say
              something, anything, but my tongue decided to go on vacation 😭.
              Now I spend every bus ride hoping to see her again, but life
              doesn&rsquo;t work that way, does it? 💔
            </div>
          </div>
        </div>

        {/* Bus Window Frame - More Realistic */}
        <motion.div
          className="absolute left-16 top-1/2 transform -translate-y-1/2"
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Bus image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Image
              src="/bus.jpeg"
              alt="Bus"
              width={192}
              height={144}
              className="w-48 h-36 object-cover rounded-lg shadow-2xl"
            />
          </motion.div>

          {/* Bus window with realistic details */}
        </motion.div>

        {/* Girl at Bus Stop - More Realistic */}
        <motion.div
          className="absolute right-24 top-1/2 transform -translate-y-1/2"
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Girl with more realistic proportions */}
        </motion.div>

        <motion.div
          className="absolute bottom-16 left-16 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ delay: 1.5, duration: 1 }}
        ></motion.div>
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
            <div className="text-xs mt-1">
              &ldquo;Bruhh… I actually saw her again 🤯. Totally unexpected! I
              thought she disappeared from Earth after Palliperunnal. Me:
              shocked Pikachu face 😳. Her: just existing, chilling like nothing
              happened. My brain: system error 💀. Life really said,
              &ldquo;Surprise, idiot!&rdquo; 😂&rdquo;
              <br />
              <br />
              She was even more beautiful than I remembered. The way she laughed
              with her friends, the way her eyes sparkled when she talked about
              something she loved. I wanted to walk up to her and say
              &ldquo;Hey, remember me from the bus?&rdquo; but my confidence was
              MIA 😅. Instead, I just stood there like a statue, watching her
              from afar like some creepy stalker 💀.
              <br />
              <br />
              Maybe next time I&rsquo;ll have the courage to actually talk to
              her. Or maybe I&rsquo;ll just continue being the king of missed
              opportunities 👑💔
            </div>
          </div>
        </div>

        {/* Background crowd - Cartoon people */}

        {/* Palliperunnal Festival Image */}
        <motion.div
          className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/palli.jpeg"
              alt="St.Ambrose Palli, Dec 06"
              width={160}
              height={128}
              className="w-40 h-32 object-cover rounded-lg border-4 border-yellow-400 shadow-2xl"
            />
          </motion.div>
          {/* Festival label */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-yellow-400 border-2 border-black rounded-lg px-3 py-1 text-xs font-bold text-black">
            St.Ambrose Palli, Dec 06
          </div>
        </motion.div>

        {/* Diary entry text */}
        <motion.div
          className="absolute bottom-16 right-16 max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ delay: 1.5, duration: 1 }}
        ></motion.div>

        {/* Fireworks/Lanterns - More realistic */}

        {/* Diary entry text */}
        <motion.div
          className="absolute bottom-16 right-16 max-w-md"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ delay: 1.5, duration: 1 }}
        ></motion.div>
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
          <div className="absolute top-8 left-12 max-w-xs text-sm font-handwriting text-gray-600">
            <div className="text-xs mt-2 leading-relaxed">
              It was late at night, and I was sitting here, sketching her from
              the photos on my phone. I don&rsquo;t even notice the time
              passing. Every detail of her face, the way her glasses sit, the
              expression she had that day — I want to get it all right.
              <br />
              <br />
              I&rsquo;ve been texting her for weeks now, and every message makes
              my heart race. She&rsquo;s so smart and funny, and she actually
              responds to my weird jokes! 😂 I never thought someone could
              understand my humor like she does. She makes me feel seen, like
              I&rsquo;m not just some random guy on the internet.
              <br />
              <br />
              Sometimes I wonder if she feels the same way about me, or if
              I&rsquo;m just another friend in her life. But then she sends me a
              message that makes me smile for hours, and I think maybe, just
              maybe, there&rsquo;s something special here 💕
            </div>
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
                className="w-20 h-8 rounded-2xl flex items-center justify-center text-sm font-handwriting"
                initial={{ opacity: 0, x: -50, scale: 0 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : -50,
                  scale: isInView ? 1 : 0,
                }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Should i get a haircut??
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
              <div className="font-bold mb-2">Social Media Bond 🛑</div>
              <div className="text-xs">
                It&rsquo;s been two years, I know you don&rsquo;t care, your
                replies are drier than the desert 🌵… and yet, here I am, still
                texting you like &lsquo;munthiri nokki nikkana kurukkan&rsquo;
                🐒💬. Self-respect? Yeah, it waved goodbye a long time ago 👋.
                Some habits die harder than my sleep schedule 🫠.
                <br />
                <br />I hope you doesn&rsquo;t think I&rsquo;m weird... 😅
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
            <div className="text-xs mt-1">
              It was late at night, and I was sitting here, sketching her from
              the photos on my phone. I don’t even notice the time passing.
              Every detail of her face, the way her glasses sit, the expression
              she had that day — I want to get it all right. I think about her
              constantly, and even when she’s not around, she fills my thoughts
              completely. I can’t help it; I realize more and more that I’m
              truly in love with her, and it feels impossible to stop thinking
              about her.
              <br />
              <br />
              Drawing her helps me remember every little thing about her. The
              way her nose crinkles when she laughs, how her eyes light up when
              she talks about something she's passionate about, the way she
              tilts her head when she's thinking. I want to capture it all,
              preserve these moments forever in my sketchbook.
              <br />
              <br />
              Sometimes I wonder if she knows how much she means to me. If she
              realizes that she's become the center of my universe, the reason I
              wake up every morning with a smile on my face. She's not just a
              crush anymore — she's my everything 🌟💖
            </div>
          </div>
        </div>

        {/* Draw image - Centered */}
        <motion.div
          className="absolute bottom-0 md:bottom-16 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Image
            src="/draw.jpeg"
            alt="Drawing"
            className="w-80 h-60 rounded-lg border-4 border-purple-400 object-cover shadow-2xl"
            width={320}
            height={240}
          />
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
          <div className="absolute top-8 left-12 text-sm font-handwriting text-pink-600"></div>
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
        ></motion.div>

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
              <div className="font-bold mb-2">Uhmmm</div>
              <div className="text-xs">
                I love you. Not in a way that expects anything back, not in a
                way that wants to change you or own you. I think about you,
                dream about you, and talk about you to myself or anyone
                who&rsquo;ll listen. Even if you don&rsquo;t notice, even if you
                don&rsquo;t care, my feelings are real and constant. I
                don&rsquo;t need anything from you — just loving you is enough.
                <br />
                <br />
                Thank you for listening to my story. Love is real, and
                it&rsquo;s beautiful... ❤️
              </div>
            </div>
          </div>
        </motion.div>

        {/* Ready for the big question button */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <button
            onClick={() => {
              playYesNoAudio();
              setTimeout(() => router.push("/actual-proposal"), 500);
            }}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white"
          >
            Click here 😶‍🌫️👀
          </button>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div ref={containerRef} className="love-story-container w-full bg-white">
      {/* Hidden Audio Element for YesNo sound */}
      <audio
        ref={audioRef}
        src="/yesno.mp3"
        preload="auto"
        onError={(e) => console.error("YesNo audio error:", e)}
        onLoadStart={() => console.log("YesNo audio loading started")}
        onCanPlay={() => console.log("YesNo audio can play")}
      />

      {/* Test Audio Button - Remove this after testing */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={playYesNoAudio}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          Test Audio 🔊
        </button>
      </div>

      <div className="love-story-scene">
        <Scene1 />
      </div>
      <div className="love-story-scene">
        <Scene2 />
      </div>
      <div className="love-story-scene">
        <Scene4 />
      </div>
      <div className="love-story-scene">
        <Scene3 />
      </div>
      <div className="love-story-scene">
        <FinalScene />
      </div>
    </div>
  );
};

export default LoveStory;
