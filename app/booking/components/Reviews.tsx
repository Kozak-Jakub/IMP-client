import { Star, StarHalf } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

export function Reviews() {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading text-foreground mb-4">
            Guest Reviews
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Discover what our guests have to say about their experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Card className="p-6 bg-card border flex flex-col justify-center">
            <div className="text-center mb-8">
              <div className="text-5xl font-heading text-foreground mb-2">
                4.8
              </div>
              <div className="flex justify-center text-primary mb-2">
                {Array.from({ length: 4 }, (_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary" />
                ))}

                <div className="relative w-6 h-6">
                  <Star className="absolute w-full h-full " />
                  <StarHalf className="absolute w-full h-full fill-primary" />
                </div>
              </div>

              <p className="text-muted-foreground font-body">
                Based on 128 reviews
              </p>
            </div>

            <div className="space-y-4">
              {ratings.map((rating) => (
                <div key={rating.name} className="space-y-1">
                  <div className="flex justify-between text-sm font-body">
                    <span className="text-foreground">{rating.name}</span>
                    <span className="text-muted-foreground">
                      {rating.value}%
                    </span>
                  </div>
                  <Progress value={rating.value} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          <div className="lg:col-span-2 space-y-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 bg-card border">
                <div className="flex items-start gap-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="font-body bg-primary/10 text-primary">
                      {review.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-heading text-foreground truncate">
                        {review.name}
                      </h4>
                      <span className="text-sm text-muted-foreground font-body">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex text-primary mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "fill-current"
                              : "stroke-current opacity-30"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground font-body line-clamp-3">
                      {review.comment}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ratings = [
  { name: "Cleanliness", value: 95 },
  { name: "Service", value: 92 },
  { name: "Location", value: 98 },
  { name: "Value", value: 90 },
];

const reviews = [
  {
    name: "Sarah Johnson",
    avatar: "/blueprint.webp",
    date: "March 2024",
    rating: 5,
    comment:
      "Exceptional stay! The room was immaculate and the staff went above and beyond to make our stay memorable. The attention to detail and the quality of service exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    avatar: "/blueprint.webp",
    date: "February 2024",
    rating: 4,
    comment:
      "Great location and beautiful rooms. The breakfast was outstanding and the staff was very professional. Would definitely recommend for both business and leisure travelers.",
  },
  {
    name: "Emma Davis",
    avatar: "/blueprint.webp",
    date: "February 2024",
    rating: 5,
    comment:
      "A perfect blend of luxury and comfort. The spa facilities were amazing and the room view was breathtaking. Looking forward to staying here again on our next visit.",
  },
];
