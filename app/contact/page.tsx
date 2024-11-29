"use client";
import { HeroSection } from "@/components/HeroSection";
import ContactFormAndInfoSection from "./components/ContactFormAndInfoSection";
import ContactAndMapSection from "./components/ContactAndMapSelection";

export default function ContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Get in Touch"
        title="How Can We Help?"
        subtitle="Your comfort is our priority - reach out for any assistance you need"
        height="medium"
      />
      <ContactFormAndInfoSection />
      <ContactAndMapSection />
    </>
  );
}
