import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image'

const Main = () => {
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    const handleAnimationComplete = () => {
      // Set state to mark that the animation has completed
      setAnimationCompleted(true);
      // Store the status in local storage
      localStorage.setItem('animationCompleted', 'true');
    };

    // Check if the animation has already completed in local storage
    const isAnimationCompleted = localStorage.getItem('animationCompleted') === 'true';

    // If the animation has already completed, mark it as completed
    if (isAnimationCompleted) {
      setAnimationCompleted(true);
    }

    // Add event listener to track animation completion
    document.addEventListener('animationComplete', handleAnimationComplete);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('animationComplete', handleAnimationComplete);
    };
  }, []);

  // Function to trigger animation
  const triggerAnimation = () => {
    if (!animationCompleted) {
      const event = new Event('animationComplete');
      document.dispatchEvent(event);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center pt-36" id="Home">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700"
        onAnimationComplete={triggerAnimation}
      >
        Octa<span className="text-blue-400">Tech</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-lg md:text-xl mt-4 px-4 text-gray-500 text-center items-center justify-center"
        onAnimationComplete={triggerAnimation}
      >  OctaTech is an innovative technology company dedicated to changing the world through advanced
      technology solutions. We were founded with a vision to bridge technology gaps, deliver beneficial
      innovations, and empower businesses and individuals to reach their full potential.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        href="#your-link-here"
        className="border hover:bg-blue-500 hover:text-white shadow-lg text-gray-500 py-3 px-6 rounded-full font-bold text-lg md:text-xl lg:text-2xl transition duration-500 ease-in-out sm:mt-4"
        onAnimationComplete={triggerAnimation}
      >
        Join Us
      </motion.a>
    </div>
  );
};

export default Main;
