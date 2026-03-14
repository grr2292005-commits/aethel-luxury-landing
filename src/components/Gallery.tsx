'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const images = [
    { src: '/images/gallery-1.png', size: 'col-span-12 md:col-span-7 aspect-[4/3]', title: 'Organic Textures', subtitle: 'Stone Collection' },
    { src: '/images/gallery-2.png', size: 'col-span-12 md:col-span-5 aspect-[3/4] md:mt-24', title: 'Celestial Forms', subtitle: 'Furniture' },
    { src: '/images/gallery-3.png', size: 'col-span-12 md:col-span-10 md:col-start-2 aspect-[16/9]', title: 'Lakeside Reflection', subtitle: 'Residential Architecture' },
  ];

  return (
    <section id="architecture" className="py-massive bg-background px-10 md:px-32">
      <div className="max-w-[1700px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-accent text-[10px] uppercase tracking-[0.6em] font-semibold mb-6 block">Legacy of Form</span>
            <h2 className="text-5xl md:text-7xl font-serif text-primary">Selected Observations</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="md:max-w-xs"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] font-medium text-accent leading-relaxed">
              A meticulously curated index of residential and sculptural interventions across the Mediterranean [2024–2026].
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-10 md:gap-20">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className={cn(img.size, "group")}
            >
              <div className="relative overflow-hidden w-full h-full cursor-pointer shadow-2xl shadow-black/5">
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-[2s] cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-off-black/0 group-hover:bg-off-black/20 transition-colors duration-1000" />
                
                <div className="absolute bottom-10 left-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0">
                  <div className="glass px-8 py-6 rounded-2xl">
                    <span className="text-[9px] uppercase tracking-[0.5em] text-foreground/40 block mb-2">{img.subtitle}</span>
                    <span className="text-foreground font-serif text-2xl tracking-wide">{img.title}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
