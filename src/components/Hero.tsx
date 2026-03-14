'use client';

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  const headline = "A Symphony of Silence & Light";
  const words = headline.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end md:items-center px-10 md:px-32">
      {/* Background with Ken Burns Effect */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/hero.png"
          alt="Minimalist Architecture"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl pb-32 md:pb-0">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-x-6 gap-y-4"
        >
          {words.map((word, index) => (
            <motion.h1
              key={index}
              variants={child}
              whileHover={{ 
                fontWeight: 900,
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
              }}
              className="text-white text-6xl md:text-[9.5rem] font-serif leading-[1.1] tracking-tight cursor-default select-none pb-4"
            >
              {word}
            </motion.h1>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 max-w-lg"
        >
          <p className="text-white/70 text-base md:text-xl font-light leading-relaxed tracking-wide">
            Redefining the essence of shelter through ultra-minimalist luxury and the quiet poetry of natural light.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 group cursor-pointer inline-flex items-center gap-6"
        >
          <div className="h-[1px] w-16 bg-white/40 group-hover:w-28 transition-all duration-700 ease-in-out" />
          <span className="text-white text-[11px] uppercase tracking-[0.5em] font-medium opacity-80 group-hover:opacity-100 transition-opacity">
            View Projects
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1.5 }}
        className="absolute bottom-16 right-16 z-10 hidden md:block"
      >
        <div className="flex flex-col items-center gap-6">
          <span className="text-white/30 text-[9px] uppercase tracking-[0.6em] [writing-mode:vertical-lr] font-semibold">Scroll</span>
          <div className="w-[1px] h-20 bg-white/10 relative overflow-hidden">
            <motion.div 
              animate={{ y: ["-100%", "400%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full h-1/4 bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
