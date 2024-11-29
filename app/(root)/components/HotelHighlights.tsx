"use client";

import Image from "next/image";

export function HotelHighlights() {
  const features = [
    {
      title: "Fine Dining",
      description:
        "Experience culinary excellence with our award-winning chefs",
      image: "/blueprint.webp",
    },
    {
      title: "Wellness & Spa",
      description: "Relax and rejuvenate in our luxury spa facilities",
      image: "/blueprint.webp",
    },
    {
      title: "Rooftop Pool",
      description: "Enjoy panoramic city views from our infinity pool",
      image: "/blueprint.webp",
    },
  ];

  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative overflow-hidden rounded-[var(--radius)] aspect-square group"
            >
              <Image
                layout="fill"
                src={feature.image}
                alt={feature.title}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20 transition-all duration-300 group-hover:from-black/90 group-hover:to-black/40" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-heading text-white mb-2 min-h-[2rem] flex items-center">
                  {feature.title}
                </h3>
                <p className="text-white/90 font-body text-sm min-h-[2.5rem]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
