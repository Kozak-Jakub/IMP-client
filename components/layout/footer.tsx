"use client";

import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com",
  },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
];

const contactInfo = {
  address: "123 Luxury Avenue, New York, NY 10001",
  phone: "+1 (234) 567-8900",
  email: "info@luxuryhotel.com",
};

export default function Footer() {
  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];
  return (
    <footer className="w-full bg-card border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-xl text-foreground mb-3">
                Luxury Hotel
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Experience unparalleled luxury in the heart of the city. Where
                every stay becomes an unforgettable memory.
              </p>
            </div>

            <div className="pt-2">
              <p className="text-sm font-medium text-foreground mb-3">
                Follow Us
              </p>
              <div className="flex items-center gap-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>{contactInfo.phone}</span>
              </li>
              <li>
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Phone: {contactInfo.phone}
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  Email: {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg text-foreground mb-6">
              Operating Hours
            </h4>
            <ul className="space-y-3 font-body">
              <li className="flex justify-between text-muted-foreground">
                <span>Check-in Time</span>
                <span>3:00 PM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Check-out Time</span>
                <span>11:00 AM</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Front Desk</span>
                <span>24/7</span>
              </li>
              <li className="flex justify-between text-muted-foreground">
                <span>Room Service</span>
                <span>24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-body">
            <p>© copyright</p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
