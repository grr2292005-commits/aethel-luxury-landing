'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  heroData: {
    headline: string;
    heroImagePath: string;
  };
}

const Hero = ({ heroData }: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section 
      onClick={handleTogglePlay}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden cursor-pointer selection:bg-white selection:text-black"
    >
      {/* Background Video Layer */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ zIndex: -2 }}
      >
        <source src="/Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 z-[-1]" 
        style={{ zIndex: -1 }}
      />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-5xl md:text-9xl font-serif mb-6 tracking-tighter leading-tight"
        >
          {heroData.headline}
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/70 text-lg md:text-2xl font-light tracking-[0.4em] uppercase"
        >
          Experience Ultra-Minimalist Luxury
        </motion.h2>
      </div>

      {/* Subtle interaction cue (optional but good for UX) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 text-white/30 text-[10px] uppercase tracking-[0.2em] font-medium"
      >
        Click anywhere to pause / play
      </motion.div>
    </section>
  );
};

export default Hero;

