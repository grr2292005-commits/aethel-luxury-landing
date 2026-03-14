'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <Hero />
      
      <div className="relative z-10 bg-background">
        <Narrative />
        
        <Gallery />
        
        <section className="py-massive bg-background px-6 md:px-24">
          <div className="max-w-[1440px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-semibold mb-8 block">Inquiry</span>
              <h2 className="text-4xl md:text-8xl font-serif text-primary leading-tight mb-16">
                Start your <br />
                <span className="italic">quiet journey.</span>
              </h2>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-off-black text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.4em] font-semibold hover:bg-primary transition-colors druation-500"
              >
                Book a Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
