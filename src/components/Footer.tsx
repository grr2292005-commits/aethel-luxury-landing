'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-24 bg-background px-6 md:px-24 border-t border-secondary">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-3xl mb-8">Aethel</h3>
            <p className="text-sm text-foreground/50 max-w-xs leading-relaxed">
              Crafting environments that silence the noise. Based in Geneva, working globally.
            </p>
          </div>
          
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Navigate</span>
            <ul className="space-y-4">
              {['About', 'Projects', 'Philosophy', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="underline-grow text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-accent mb-6 block">Connect</span>
            <ul className="space-y-4">
              {['Instagram', 'LinkedIn', 'Journal'].map((item) => (
                <li key={item}>
                  <a href="#" className="underline-grow text-xs uppercase tracking-widest text-foreground/60 hover:text-foreground">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-24 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-secondary/50">
          <span className="text-[9px] uppercase tracking-[0.5em] text-foreground/40">
            © 2026 Aethel Studio. All rights reserved.
          </span>
          <div className="flex gap-12">
            <span className="text-[9px] uppercase tracking-[0.5em] text-foreground/40 cursor-pointer hover:text-foreground transition-colors">Privacy</span>
            <span className="text-[9px] uppercase tracking-[0.5em] text-foreground/40 cursor-pointer hover:text-foreground transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
