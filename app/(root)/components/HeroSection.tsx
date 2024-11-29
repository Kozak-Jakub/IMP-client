"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = ["/blueprint.webp", "/blueprint.webp", "/blueprint.webp"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  });

  return (
    <section className="relative flex items-center justify-center bg-background text-foreground overflow-hidden min-h-[calc(100vh-4rem)]">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt="Hotel Luxury"
            layout="fill"
            className={`w-full h-full object-cover scale-105 animate-slow-zoom transition-opacity duration-1000 ${
              currentImageIndex === index ? "opacity-100" : "opacity-0"
            }`}
            priority
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
      </div>
      <div className="relative z-10 text-center text-white space-y-8 max-w-3xl mx-auto px-4">
        <span className="inline-block text-sm uppercase tracking-[0.2em] font-light bg-white/10 px-4 py-2 rounded-full">
          A Sanctuary of Elegance
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight leading-tight">
          Luxury Meets Tranquility
        </h1>
        <div className="flex justify-center pt-4">
          <Button
            size="lg"
            className="group relative overflow-hidden text-lg px-8 py-6 font-body"
            asChild
          >
            <Link href="/booking" className="flex items-center gap-2" prefetch>
              Begin Your Journey
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? "w-12 bg-white"
                : "w-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
