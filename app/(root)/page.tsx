"use client";

import { HeroSection } from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import RoomShowcase from "./components/RoomShowcase";
import TestimonialsSection from "./components/TestimonialsSection";
import InstagramFeed from "./components/InstagramFeed";
import { HotelHighlights } from "./components/HotelHighlights";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HotelHighlights />
      <RoomShowcase />
      <FeaturesSection />
      <TestimonialsSection />
      <InstagramFeed />
    </>
  );
}
