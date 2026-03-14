'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Narrative = () => {
  return (
    <section id="philosophy" className="py- massive bg-background px-6 md:px-24">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-start-1 md:col-span-8"
          >
            <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-semibold mb-8 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-7xl font-serif text-primary leading-[1.2] mb-12">
              Spaces that breathe, <br /> 
              <span className="text-accent/50 italic">unfolding in time.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-start-6 md:col-span-6"
          >
            <p className="text-lg md:text-2xl text-foreground/70 font-light leading-relaxed">
              We believe in the power of restraint. By stripping away the non-essential, we uncover the visceral connection between the dweller and the void. Our design system is anchored in natural materiality, celestial light, and a profound respect for silence.
            </p>
            
            <motion.div 
              className="mt-12 group cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <span className="text-off-black text-xs uppercase tracking-[0.3em] font-bold border-b border-off-black pb-2 group-hover:border-accent transition-colors">
                Read the Manifesto
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Narrative;
