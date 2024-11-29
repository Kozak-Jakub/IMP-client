"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";
import { Shield, CreditCard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CheckoutPage() {
  const router = useRouter();

  // Get booking data from sessionStorage instead of URL
  const bookingData = (() => {
    if (typeof window !== "undefined") {
      const data = sessionStorage.getItem("bookingData");
      return data ? JSON.parse(data) : null;
    }
    return null;
  })();

  if (!bookingData) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-destructive">
          Invalid booking data
        </h2>
        <Link
          href="/booking"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Return to Rooms
        </Link>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment processor
    // For now, we'll just simulate success
    router.push("/booking/confirmation");
  };

  return (
    <div className="container mx-auto p-6 max-w-5xl">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Booking Summary */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Room Details */}
              <div className="flex gap-4">
                <Image
                  src={bookingData.image || "/placeholder-image.jpg"}
                  alt={bookingData.roomName || "Room"}
                  width={120}
                  height={80}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold">{bookingData.roomName}</h3>
                  <p className="text-sm text-muted-foreground">
                    {bookingData.nights} nights
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(bookingData.checkIn), "MMM d")} -{" "}
                    {format(new Date(bookingData.checkOut), "MMM d, yyyy")}
                  </p>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Room rate × {bookingData.nights} nights
                  </span>
                  <span>{bookingData.nightsTotal} Kč</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cleaning fee</span>
                  <span>{bookingData.cleaningFee} Kč</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Service fee</span>
                  <span>{bookingData.serviceFee} Kč</span>
                </div>
                <div className="flex justify-between pt-4 border-t font-semibold">
                  <span>Total</span>
                  <span>{bookingData.total} Kč</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Form */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information Section */}
                <div className="space-y-4">
                  <h3 className="font-medium">Contact Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+420 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>

                {/* Payment Details Section */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="font-medium">Payment Details</h3>
                  <div className="grid gap-2">
                    <Label htmlFor="name">Cardholder Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="card">Card Number</Label>
                    <div className="relative">
                      <Input
                        id="card"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                      <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" placeholder="123" required />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full">
                  Pay {bookingData.total} Kč
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center">
                  <Shield className="w-4 h-4" />
                  <span>Secure payment processed by Stripe</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
