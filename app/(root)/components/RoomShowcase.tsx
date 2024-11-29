"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/rooms";

export default function RoomShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading mb-4">Our Accommodations</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Choose your perfect stay from our carefully designed rooms
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {rooms.map((room, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-custom-xl
                dark:shadow-custom-sm dark:hover:shadow-glow
                transition-all duration-300 ease-in-out
                dark:bg-card/95 backdrop-blur-sm"
            >
              <div className="relative h-64 overflow-hidden group">
                <Image
                  width="100"
                  height="100"
                  src={room.image}
                  alt={room.name}
                  className="absolute inset-0 w-full h-full object-cover
                      group-hover:scale-105 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4">
                  From {room.price}Kč/night
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading mb-4">{room.name}</h3>
                <ul className="space-y-2 font-body">
                  {room.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-muted-foreground"
                    >
                      <Check className="w-4 h-4 mr-2 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/booking/${room.name
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <Button className="w-full mt-6 font-body">
                    View Details
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
