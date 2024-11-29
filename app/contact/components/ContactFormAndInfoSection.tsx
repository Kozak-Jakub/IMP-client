"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Mail, MessageSquare, ClipboardList } from "lucide-react";

export default function ContactFormAndInfoSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading mb-3">Ready to Connect</h2>
                <p className="text-muted-foreground font-body">
                  Have questions about your stay, our amenities, or special
                  requests? Our dedicated team is here to ensure your experience
                  is exceptional from start to finish.
                </p>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading mb-2">
                    When to Reach Us
                  </h3>
                  <div className="space-y-2 text-muted-foreground font-body">
                    <p>Weekdays: 9:00 AM - 6:00 PM</p>
                    <p>Weekends: 10:00 AM - 4:00 PM</p>
                    <p>Holidays: Limited Hours</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-heading mb-2">Our Response</h3>
                  <p className="text-muted-foreground font-body">
                    We aim to respond to all inquiries within 2-4 hours during
                    business hours. For urgent matters, please call our front
                    desk directly.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="firstName"
                      className="text-sm font-medium font-body flex items-center gap-2"
                    >
                      <User size={16} />
                      First Name
                    </label>
                    <Input id="firstName" required className="border-muted" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium font-body flex items-center gap-2"
                    >
                      <User size={16} />
                      Last Name
                    </label>
                    <Input id="lastName" required className="border-muted" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium font-body flex items-center gap-2"
                  >
                    <Mail size={16} />
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="border-muted"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium font-body flex items-center gap-2">
                    <ClipboardList size={16} />
                    Nature of Inquiry
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="reservation">
                        Reservation Inquiry
                      </SelectItem>
                      <SelectItem value="special">
                        Special Arrangements
                      </SelectItem>
                      <SelectItem value="services">Hotel Services</SelectItem>
                      <SelectItem value="feedback">Guest Feedback</SelectItem>
                      <SelectItem value="other">Other Matters</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium font-body flex items-center gap-2"
                  >
                    <MessageSquare size={16} />
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="How can we assist you today?"
                    className="border-muted"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full font-body bg-primary text-primary-foreground"
                >
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
