"use client";
import CertificateSection from "@/components/CertificateSection";
import { Contact } from "@/components/Contact";
import { HeroSection } from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />

      <HeroSection />

      <SkillSection />
      <ProjectSection />

      <CertificateSection />

      <Contact />
    </main>
  );
}
