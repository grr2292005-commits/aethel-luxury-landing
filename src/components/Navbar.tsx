'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface NavbarProps {
  onInquire?: () => void;
}

const Navbar = ({ onInquire }: NavbarProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Architecture', href: '#architecture' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Spaces', href: '#spaces' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-center p-8"
        >
          <div className="glass px-10 py-5 rounded-full flex items-center gap-16 max-w-fit shadow-sm">
            <motion.div 
              className="text-2xl font-serif tracking-[0.1em] font-light cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              Aethel
            </motion.div>
            
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="underline-grow text-[10px] uppercase tracking-[0.3em] font-medium text-foreground/60 hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onInquire}
              className="bg-off-black text-white px-8 py-3 rounded-full text-[9px] uppercase tracking-[0.3em] font-semibold"
            >
              Inquire
            </motion.button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
