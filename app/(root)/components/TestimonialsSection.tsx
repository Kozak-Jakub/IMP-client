"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "An unforgettable experience. The perfect blend of luxury and nature.",
      author: "Sarah Johnson",
      role: "Travel Blogger",
      avatar: "/blueprint.webp",
      rating: 5,
    },
    {
      text: "The eco-friendly approach doesn't compromise on comfort. Impressive!",
      author: "Michael Chen",
      role: "Environmental Consultant",
      avatar: "/blueprint.webp",
      rating: 4,
    },
    {
      text: "The staff's attention to detail made our stay truly special.",
      author: "Emma Williams",
      role: "Food Critic",
      avatar: "/blueprint.webp",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading mb-4">Guest Experiences</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            What our guests say about their stay at Biokolna
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="group bg-card p-6 
                backdrop-blur-sm
                shadow-custom-sm hover:shadow-custom-xl
                dark:shadow-custom-sm dark:hover:shadow-glow
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:bg-card/95
                dark:bg-card/95"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <Avatar
                    className="h-12 w-12 ring-2 ring-primary/10 
                    group-hover:ring-primary/20 transition-all duration-300"
                  >
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <AvatarFallback
                      className="bg-primary/10 text-primary
                        group-hover:bg-primary/20 transition-colors duration-300"
                    >
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div
                      className="font-heading text-lg text-foreground
                      group-hover:text-primary transition-colors duration-300"
                    >
                      {testimonial.author}
                    </div>
                    <div
                      className="text-sm text-muted-foreground font-body
                      group-hover:text-foreground/80 transition-colors duration-300"
                    >
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 transition-all duration-300 
                        ${
                          i < testimonial.rating
                            ? "text-primary fill-primary group-hover:scale-110"
                            : "text-muted-foreground/20"
                        }`}
                    />
                  ))}
                </div>
              </div>
              <blockquote
                className="text-muted-foreground font-body text-base leading-relaxed
                group-hover:text-foreground/80 transition-colors duration-300"
              >
                {testimonial.text}
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
