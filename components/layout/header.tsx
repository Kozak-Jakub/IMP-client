"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const navigationLinks = [
    { path: "/restaurant", label: "Restaurant" },
    { path: "/wellness", label: "Wellness" },
    { path: "/contact", label: "Contact" },
    { path: "/booking", label: "Booking" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="w-full px-4 lg:px-6">
        <div className="flex h-16 justify-between">
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="lg:hidden ">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[80vw] max-w-[400px]">
                  <nav className="flex flex-col gap-4 mt-6">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.path}
                        href={link.path}
                        prefetch
                        className="text-lg font-medium px-2 py-1.5 rounded-md hover:text-primary transition-colors"
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
            <Link href="/" className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-primary whitespace-nowrap">
                Logo
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <nav className="hidden lg:flex items-center gap-1 sm:gap-2 md:gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="px-3 py-2 text-sm font-medium rounded-md hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
