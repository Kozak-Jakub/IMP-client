"use client";

import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface InstagramPost {
  imageUrl: string;
  link: string;
}

export default function InstagramFeed() {
  const posts: InstagramPost[] = [
    {
      imageUrl: "/blueprint.webp",
      link: "https://instagram.com",
    },
    {
      imageUrl: "/blueprint.webp",
      link: "https://instagram.com",
    },
    {
      imageUrl: "/blueprint.webp",
      link: "https://instagram.com",
    },
    {
      imageUrl: "/blueprint.webp",
      link: "https://instagram.com",
    },
    {
      imageUrl: "/blueprint.webp",
      link: "https://instagram.com",
    },
    {
      imageUrl: "/blueprint.webp",
      link: "https://instagram.com",
    },
  ];

  return (
    <section className="pt-12 md:pt-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-heading mb-3 md:mb-4">
            Follow Our Journey
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-body">
            Share your moments with
          </p>
          <Link
            href="https://instagram.com/biokolna_resort"
            target="_blank"
            className="inline-flex items-center gap-2 text-muted-foreground 
              hover:text-primary transition-colors duration-300
              text-base md:text-lg font-body group"
          >
            <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            @biokolna_resort
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.link}
              target="_blank"
              className="relative aspect-square group overflow-hidden"
            >
              <Image
                width="100"
                height="100"
                src={post.imageUrl}
                alt="Instagram post"
                className="w-full h-full object-cover
                  group-hover:scale-110 
                  transition-transform duration-700 ease-in-out"
                priority
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
