"use client";

import { BedDouble, Users, Maximize, Eye, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { rooms } from "@/data/rooms";

export function RoomPreview() {
  return (
    <>
      <section className="w-full bg-background pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading text-foreground mb-4">
              Available Rooms
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-body">
              Choose from our selection of luxurious rooms and suites, each
              designed to provide you with the ultimate comfort and relaxation
              during your stay.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="space-y-8">
            {rooms.map((room) => (
              <div
                key={room.name}
                className="w-full bg-card rounded-xl overflow-hidden border
                shadow-custom-sm hover:shadow-custom-xl
                dark:shadow-custom-sm dark:hover:shadow-glow
                transition-all duration-300 ease-in-out
                dark:bg-card/95 backdrop-blur-sm"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="relative h-72 overflow-hidden group">
                    <Image
                      width="100"
                      height="100"
                      src={room.image}
                      alt={room.name}
                      className="absolute inset-0 w-full h-full object-cover
                      group-hover:scale-105 transition-transform duration-500"
                      priority
                    />
                    <Badge
                      className="absolute top-4 right-4 bg-background/95 
                    text-foreground font-body backdrop-blur-sm
                    shadow-custom-sm"
                    >
                      From {room.price} Kč/night
                    </Badge>
                  </div>

                  <div className="md:col-span-2 p-6 space-y-4">
                    <h3
                      className="text-2xl font-heading text-foreground 
                    hover:text-primary transition-colors duration-200"
                    >
                      {room.name}
                    </h3>

                    <div className="flex flex-wrap gap-4 font-body">
                      {[
                        { icon: Users, text: `Up to ${room.capacity} guests` },
                        { icon: BedDouble, text: room.bedType },
                        { icon: Maximize, text: room.size },
                        { icon: Eye, text: room.view },
                      ].map(({ icon: Icon, text }) => (
                        <div
                          key={text}
                          className="flex items-center gap-1.5 text-sm text-muted-foreground
                          hover:text-foreground transition-colors duration-200"
                        >
                          <Icon className="w-4 h-4" />
                          {text}
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground font-body leading-relaxed">
                      {room.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      {room.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground font-body
                          hover:text-foreground transition-colors duration-200"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t mt-6">
                      <div className="font-heading text-foreground text-lg">
                        {room.price} Kč &nbsp;
                        <span className="text-sm text-muted-foreground font-body">
                          per night
                        </span>
                      </div>
                      <Link
                        href={`/booking/${room.name
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`}
                      >
                        <Button
                          className="font-body hover:shadow-custom-md 
                        transition-all duration-300"
                        >
                          Book Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
