import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./LoveStory.css";

// Clean, elegant, romantic design — Option 3

const LoveStory = () => {
  const router = useRouter();

  const Section = ({ title, text, image, flip }) => (
    <div
      className={`w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-8 py-20 ${
        flip ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-center md:text-left max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          {title}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex items-center justify-center mt-10 md:mt-0"
      >
        <Image
          src={image}
          alt="story-image"
          width={480}
          height={360}
          className="rounded-2xl shadow-2xl object-cover"
        />
      </motion.div>
    </div>
  );

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* HEADER */}
      <div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-8 bg-gradient-to-b from-rose-100 to-white">
        {/* <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-gray-800"
        >
          Our Story
        </motion.h1> */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 max-w-2xl text-gray-700 text-lg md:text-xl leading-relaxed"
        >
          A small message for you… from a journey that began long before we knew
          it would matter.
        </motion.p>
      </div>

      {/* PHASE 1 */}
      <Section
        title="When Our Paths First Crossed (2016–2017)"
        text={`We studied in the same school.
Same classrooms, same hallways, same morning assemblies.

But somehow… we never really saw each other.

You still remember talking to me twice.
I don't remember it at all — and that surprises me every time.

Looking back, maybe that’s the beauty of it.
Two strangers, quietly placed in the same frame by destiny.
A beginning neither of us noticed.
A chapter waiting years to unfold.`}
        image="/phase1.jpg"
      />

      {/* PHASE 2 */}
      <Section
        flip
        title="One Message Changed Everything (2023)"
        text={`Years passed.
One random Instagram story…
One simple reply…
and suddenly, we were talking like we'd known each other forever.

We spoke about Ukraine, Georgia,
food, weather, life — everything and nothing.

And without even realizing it, we got close.
Closer than I expected.
Closer than I was prepared for.

We both bought gifts for each other
without telling the other.
We didn’t plan it.
We didn’t expect it.
But it meant something — more than I admitted.`}
        image="/phase2.jpg"
      />

      {/* AIRPORT SCENE */}
      <Section
        title="The Airport Moment"
        text={`We met for just 2 minutes.
But those 2 minutes stayed with me longer than entire days.

I went to see your flight take off.
Waited two hours just to watch the plane disappear.
Hoping you were in a window seat.
Hoping maybe… you'd see me.

And on the way back, that Malayalam song played.
And something inside me knew:
This wasn’t confusion.
This wasn’t infatuation.
It was love.
Real, steady, undeniable.`}
        image="/airport.jpg"
      />

      {/* PHASE 3 */}
      <Section
        flip
        title="The Day I Finally Told You (Oct 12, 2025)"
        text={`I confessed.
You said “no” at first.
And my heart sank — but I understood.

For you, it came out of nowhere.
For me, it was months of emotions I kept safely inside.

But instead of walking away…
you stayed.
You listened.
And you said:

"Let's try."

That one line meant more to me than you know.`}
        image="/phase3.jpg"
      />

      {/* PHASE 4 */}
      <Section
        title="Where We Are Now"
        text={`We’re not perfect.
We’re not rushing.
We’re not pretending.
We are simply… us.

Two people choosing to see where this journey goes.
Two hearts learning each other.
Two stories finally meeting in the same chapter.

And on your birthday, I want you to know something:

You are the most unexpected,
the most beautiful,
and the most important chapter of my life.`}
        image="/phase4.jpg"
      />

<div className="w-full min-h-screen flex flex-col items-center justify-center text-center px-10 py-24 bg-gradient-to-b from-white to-rose-50">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
        >
          Happy Birthday DevuT 💝
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-lg md:text-2xl text-gray-600 leading-relaxed"
        >
          On this day, the world became brighter — because you arrived.
          Thank you for existing. Thank you for being you.
          And thank you… for letting me be a small part of your story.
        </motion.p>
      </div>

      {/* BUTTON */}
      {/* <div className="w-full flex items-center justify-center py-20">
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          onClick={() => router.push("/actual-proposal")}
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold px-10 py-4 rounded-full shadow-xl text-lg"
        >
          Continue →
        </motion.button>
      </div> */}

    </div>
  );
};

export default LoveStory;
