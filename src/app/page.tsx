import fs from 'fs';
import path from 'path';
import LandingPageContent from "@/components/LandingPageContent";

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

  return <LandingPageContent heroData={heroData} />;
}
