import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <Navbar/>
      <div className="container mx-auto py-4 px-12">
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <Socials/>
      </div>
      <Footer/>
    </main>
  );
}
