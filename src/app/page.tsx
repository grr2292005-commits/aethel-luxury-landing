import fs from 'fs';
import path from 'path';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import { Metadata } from 'next';

export default async function Home() {
  let heroData = {
    headline: "A Symphony of Silence & Light",
    heroImagePath: "/images/hero.png"
  };

  try {
    const filePath = path.join(process.cwd(), 'hero-data.json');
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(fileContent);
      heroData = { ...heroData, ...jsonData };
    }
  } catch (error) {
    console.error("Error reading hero-data.json:", error);
  }

  return (
    <main className="relative min-h-screen">
      <ProgressBar />
      <Navbar />
      
      <Hero heroData={heroData} />
      
      <div className="relative z-10 bg-background">
        <Narrative />
        
        <Gallery />
        
        <section className="py-massive bg-background px-6 md:px-24">
          <div className="max-w-[1440px] mx-auto text-center">
            <div className="reveal-on-scroll">
              <span className="text-accent text-[10px] uppercase tracking-[0.5em] font-semibold mb-8 block">Inquiry</span>
              <h2 className="text-4xl md:text-8xl font-serif text-primary leading-tight mb-16">
                Start your <br />
                <span className="italic">quiet journey.</span>
              </h2>
              
              <button
                className="bg-off-black text-white px-12 py-5 rounded-full text-xs uppercase tracking-[0.4em] font-semibold hover:bg-primary transition-all duration-500 hover:scale-105 active:scale-95"
              >
                Book a Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}
