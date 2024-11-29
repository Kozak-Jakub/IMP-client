"use client";

import { use } from "react";
import React from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Star,
  Check,
  Clock,
  Shield,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Info,
  Users,
  BedDouble,
  Maximize,
  Eye,
  MapPin,
  Train,
  Plane,
  Utensils,
  Building2,
  Landmark,
} from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { useState, useMemo } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

// Assuming you have a separate file with apartment details
import { rooms } from "@/data/rooms";

// Add this helper function at the top of your file
const formatPrice = (price: number) => {
  return new Intl.NumberFormat("cs-CZ", {
    style: "currency",
    currency: "CZK",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};

// Create a separate ImageGallery component for better performance
function ImageGallery({
  images,
  name,
  currentIndex,
  onNext,
  onPrevious,
}: {
  images: string[];
  name: string;
  currentIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative aspect-[2/1] cursor-pointer group">
          <Image
            src={images[currentIndex]}
            alt={`${name} - View Gallery`}
            fill
            className="object-cover rounded-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-background/10 group-hover:bg-background/20 transition-colors" />
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-[90vw] h-[90vh] p-0">
        <DialogTitle className="sr-only">Image Gallery - {name}</DialogTitle>
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full max-h-[85vh]">
            <Image
              src={images[currentIndex]}
              alt={`${name} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onPrevious();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function BookingDetailPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);

  // Use resolvedParams instead of params directly
  const apartment = useMemo(() => {
    return rooms.find(
      (room) =>
        room.name.replace(/\s+/g, "-").toLowerCase() === resolvedParams.name
    );
  }, [resolvedParams.name]);

  const images = useMemo(() => {
    const mainImage = apartment?.image || "";
    const additionalImages = apartment?.additionalImages || [];
    return [mainImage, ...additionalImages];
  }, [apartment]);

  const calculateTotalPrice = () => {
    if (!date || !checkOut || !apartment) return null;

    const nights = Math.ceil(
      (checkOut.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
    );

    const basePrice = apartment.price;
    const nightsTotal = nights * basePrice;

    const cleaningFee = 600;
    const serviceFee = Math.round(nightsTotal * 0.05);

    return {
      nights,
      nightsTotal,
      cleaningFee,
      serviceFee,
      total: nightsTotal + cleaningFee + serviceFee,
    };
  };

  if (!apartment) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-destructive">Room not found</h2>
        <Link
          href="/booking"
          className="text-primary hover:underline mt-4 inline-block"
        >
          Return to Rooms
        </Link>
      </div>
    );
  }

  const priceDetails = calculateTotalPrice();

  const isDateValid = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const isCheckOutValid = (checkOutDate: Date) => {
    if (!date) return false;
    return checkOutDate > date;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleReserve = () => {
    const bookingData = {
      roomName: apartment.name,
      checkIn: date,
      checkOut: checkOut,
      nightsTotal: priceDetails?.total,
      nights: priceDetails?.nights,
      cleaningFee: priceDetails?.cleaningFee,
      serviceFee: priceDetails?.serviceFee,
      total: priceDetails?.total,
      image: apartment.image,
    };

    sessionStorage.setItem("bookingData", JSON.stringify(bookingData));
    router.push("/booking/checkout");
  };

  return (
    <TooltipProvider>
      <div className="container mx-auto p-6 max-w-7xl">
        {/* Sticky Header with Actions */}
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b mb-6 -mx-6 px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link href="/booking" className="hover:text-primary">
                Rooms
              </Link>
              <span className="mx-2">→</span>
              <span className="font-medium text-foreground">
                {apartment.name}
              </span>
            </div>
          </div>
        </div>

        {/* Image Gallery - Always on top */}
        <div className="mb-8">
          <ImageGallery
            images={images}
            name={apartment.name}
            currentIndex={currentImageIndex}
            onNext={nextImage}
            onPrevious={previousImage}
          />
        </div>

        {/* Content Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-bold">
                        {apartment.price} Kč
                        <span className="text-base font-normal text-muted-foreground">
                          /night
                        </span>
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Star className="w-4 h-4 fill-chart-4 text-chart-4" />
                        <span className="font-medium">4.9</span>
                        <span className="text-muted-foreground">
                          (128 reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Improved Date Range Picker */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Check-in</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                          disabled={!isDateValid}
                        />
                      </PopoverContent>
                    </Popover>

                    <label className="text-sm font-medium">Check-out</label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                          disabled={!date}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          disabled={!isCheckOutValid}
                          fromDate={date}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Guests Selector */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Guests</label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select number of guests" />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(apartment.capacity)].map((_, i) => (
                          <SelectItem key={i + 1} value={String(i + 1)}>
                            {i + 1} {i === 0 ? "guest" : "guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Updated Price Display */}
                  {priceDetails && (
                    <div className="space-y-4">
                      {/* Price Per Night Display */}
                      <div className="flex items-center justify-between text-2xl font-semibold">
                        <span>{formatPrice(apartment.price)}</span>
                        <span className="text-muted-foreground text-base font-normal">
                          per night
                        </span>
                      </div>

                      {/* Selected Dates Summary */}
                      <div className="bg-muted p-4 rounded-lg space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Check-in
                          </span>
                          <span className="font-medium">
                            {date ? format(date, "EEE, MMM d, yyyy") : "-"}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Check-out
                          </span>
                          <span className="font-medium">
                            {checkOut
                              ? format(checkOut, "EEE, MMM d, yyyy")
                              : "-"}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            Duration
                          </span>
                          <span className="font-medium">
                            {priceDetails.nights} nights
                          </span>
                        </div>
                      </div>

                      {/* Price Breakdown */}
                      <div className="space-y-2 pt-4 border-t border-border">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {formatPrice(apartment.price)} ×{" "}
                            {priceDetails.nights} nights
                          </span>
                          <span>{formatPrice(priceDetails.nightsTotal)}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <TooltipProvider>
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">
                                Cleaning fee
                              </span>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  One-time fee for cleaning and preparation
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </TooltipProvider>
                          <span>{formatPrice(priceDetails.cleaningFee)}</span>
                        </div>

                        <div className="flex justify-between text-sm">
                          <TooltipProvider>
                            <div className="flex items-center gap-1">
                              <span className="text-muted-foreground">
                                Service fee
                              </span>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Info className="w-4 h-4 text-muted-foreground" />
                                </TooltipTrigger>
                                <TooltipContent>
                                  Helps us run our platform and offer services
                                  like 24/7 support
                                </TooltipContent>
                              </Tooltip>
                            </div>
                          </TooltipProvider>
                          <span>{formatPrice(priceDetails.serviceFee)}</span>
                        </div>

                        {/* Total */}
                        <div className="pt-4 mt-4 border-t border-border">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Total</span>
                            <div className="text-right">
                              <div className="text-xl font-semibold">
                                {formatPrice(priceDetails.total)}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                includes taxes and fees
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Reserve Button */}
                      <Button
                        size="lg"
                        className="w-full mt-6"
                        disabled={!date || !checkOut}
                        onClick={handleReserve}
                      >
                        Reserve
                      </Button>

                      {/* Trust Indicators */}
                      <div className="pt-4 space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4" />
                          <span>Secure payment</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>24/7 customer support</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start h-12 bg-muted">
                <TabsTrigger value="overview" className="text-base">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="amenities" className="text-base">
                  Amenities
                </TabsTrigger>
                <TabsTrigger value="reviews" className="text-base">
                  Reviews
                </TabsTrigger>
                <TabsTrigger value="location" className="text-base">
                  Location
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      {
                        icon: Users,
                        text: `Up to ${apartment.capacity} guests`,
                      },
                      { icon: BedDouble, text: apartment.bedType },
                      { icon: Maximize, text: apartment.size },
                      { icon: Eye, text: apartment.view },
                    ].map(({ icon: Icon, text }) => (
                      <div
                        key={text}
                        className="p-4 bg-accent rounded-lg text-center"
                      >
                        <Icon className="w-5 h-5 mx-auto mb-2 text-primary" />
                        <span className="text-sm font-medium">{text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="prose prose-slate max-w-none">
                    <p className="leading-relaxed text-center">
                      {apartment.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-w-2xl w-full">
                    {apartment.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Bedroom</h3>
                    <ul className="space-y-2">
                      {apartment.amenities.bedroom.map((amenity, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Bathroom</h3>
                    <ul className="space-y-2">
                      {apartment.amenities.bathroom.map((amenity, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Living Area</h3>
                    <ul className="space-y-2">
                      {apartment.amenities.living.map((amenity, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <Check className="w-4 h-4 text-primary" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-8 max-w-4xl mx-auto">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold">{apartment.rating}</div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={cn(
                              "w-5 h-5",
                              star <= apartment.rating
                                ? "fill-primary text-primary"
                                : "fill-muted text-muted"
                            )}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">
                        Based on {apartment.reviews.length} reviews
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-6">
                    {apartment.reviews.map((review) => (
                      <div key={review.id} className="p-4 bg-accent rounded-lg">
                        <div className="flex items-center gap-4 mb-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>{review.user[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold">{review.user}</h4>
                            <p className="text-sm text-muted-foreground">
                              {format(new Date(review.date), "MMMM d, yyyy")}
                            </p>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="location" className="mt-6">
                <div className="space-y-6 max-w-4xl mx-auto">
                  <div className="aspect-[16/9] bg-accent rounded-lg">
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-muted-foreground">
                        Map View Coming Soon
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Location Highlights</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Distance from:</h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            City Center: 0.5 km
                          </li>
                          <li className="flex items-center gap-2">
                            <Train className="w-4 h-4" />
                            Train Station: 1.2 km
                          </li>
                          <li className="flex items-center gap-2">
                            <Plane className="w-4 h-4" />
                            Airport: 15 km
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">
                          Nearby Attractions:
                        </h4>
                        <ul className="space-y-2 text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <Utensils className="w-4 h-4" />
                            Restaurants & Cafes
                          </li>
                          <li className="flex items-center gap-2">
                            <Building2 className="w-4 h-4" />
                            Shopping Centers
                          </li>
                          <li className="flex items-center gap-2">
                            <Landmark className="w-4 h-4" />
                            Tourist Attractions
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
