"use client";

import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

export default function FeaturesSection() {
  const features = [
    {
      title: "Luxury Rooms",
      description: "Experience comfort in our thoughtfully designed rooms",
      icon: "BedDouble",
    },
    {
      title: "Fine Dining",
      description: "Savor local cuisine prepared with organic ingredients",
      icon: "UtensilsCrossed",
    },
    {
      title: "Wellness Center",
      description: "Rejuvenate your body and mind in our spa",
      icon: "Waves",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Discover what makes Biokolna a unique experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group p-6 h-full 
                backdrop-blur-sm
                shadow-custom-sm hover:shadow-custom-xl
                dark:shadow-custom-sm dark:hover:shadow-glow
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:bg-card/95
                dark:bg-card/95"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div
                  className="p-3 rounded-full bg-primary/10 
                    group-hover:bg-primary/20 group-hover:scale-110
                    transition-all duration-300 ease-in-out
                    shadow-custom-sm"
                >
                  <Icon
                    name={feature.icon}
                    className="w-8 h-8 text-primary
                      group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3
                  className="text-xl font-heading text-foreground
                    group-hover:text-primary transition-colors duration-300"
                >
                  {feature.title}
                </h3>
                <p
                  className="text-muted-foreground font-body
                    group-hover:text-foreground/80 transition-colors duration-300"
                >
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
