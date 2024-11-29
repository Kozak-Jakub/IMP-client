"use client";
import { HeroSection } from "@/components/HeroSection";
import { RoomPreview } from "./components/RoomPreview";
import { PolicySection } from "./components/PolicySection";
import { Amenities } from "./components/Amenities";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";

export default function Booking() {
  return (
    <>
      <HeroSection
        eyebrow="Your Perfect Stay Awaits"
        title="Book Your Stay"
        subtitle="Reserve your perfect stay with our seamless booking process and enjoy exclusive rates"
        height="medium"
      />
      <RoomPreview />
      <Amenities />
      <PolicySection />
      <Reviews />
      <FAQ />
    </>
  );
}
