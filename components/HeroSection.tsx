"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  height?: "small" | "medium" | "large";
  eyebrow?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage = "/blueprint.webp",
  height = "medium",
  eyebrow,
}: HeroSectionProps) {
  const heights = {
    small: "h-[60vh]",
    medium: "h-[80vh]",
    large: "h-[100vh]",
  };

  return (
    <section
      className={cn(
        "relative flex items-center justify-center bg-background text-foreground overflow-hidden",
        heights[height]
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/60" />
      </div>
      <div className="relative text-center text-white space-y-6 max-w-3xl mx-auto px-4">
        {eyebrow && (
          <span className="text-sm uppercase tracking-[0.2em] font-light bg-white/10 px-4 py-2 rounded-full">
            {eyebrow}
          </span>
        )}
        <h1 className="text-4xl md:text-6xl font-heading font-bold">{title}</h1>
        <p className="text-lg md:text-xl font-body text-white/90">{subtitle}</p>
      </div>
    </section>
  );
}
