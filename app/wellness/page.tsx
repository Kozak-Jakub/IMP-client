"use client";

import { HeroSection } from "@/components/HeroSection";
import { WellnessServices } from "./components/WellnessServices";
import { TreatmentShowcase } from "./components/TreatmentShowcase";
import { TeamSection } from "./components/TeamSection";

export default function WellnessPage() {
  return (
    <>
      <HeroSection
        eyebrow="Wellness & Spa"
        title="Your Journey to Wellness"
        subtitle="Discover a sanctuary of peace and rejuvenation"
        height="medium"
      />
      <WellnessServices />
      <TreatmentShowcase />
      <TeamSection />
    </>
  );
}
