import {
  Waves,
  Dumbbell,
  Utensils,
  Car,
  Wifi,
  Coffee,
  TreePalm,
  Wine,
  Clock,
} from "lucide-react";

export function Amenities() {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading text-foreground mb-4">
            Hotel Amenities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Experience luxury and comfort with our comprehensive range of
            facilities and services
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="group bg-card rounded-xl p-6 text-center 
                border backdrop-blur-sm
                shadow-custom-sm hover:shadow-custom-xl
                dark:shadow-custom-sm dark:hover:shadow-glow
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:bg-card/95
                dark:bg-card/95"
            >
              <div
                className="h-12 w-12 rounded-full 
                  bg-primary/10 flex items-center justify-center 
                  mb-4 mx-auto 
                  group-hover:bg-primary/20 group-hover:scale-110
                  transition-all duration-300 ease-in-out
                  shadow-custom-sm"
              >
                {amenity.icon}
              </div>
              <h3
                className="font-heading text-lg text-foreground mb-2
                group-hover:text-primary transition-colors duration-300"
              >
                {amenity.name}
              </h3>
              <p
                className="text-sm text-muted-foreground font-body
                group-hover:text-foreground transition-colors duration-300"
              >
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const amenities = [
  {
    name: "Swimming Pool",
    description: "Heated infinity pool with city views",
    icon: <Waves className="w-6 h-6 text-primary" />,
  },
  {
    name: "Fitness Center",
    description: "State-of-the-art equipment, 24/7 access",
    icon: <Dumbbell className="w-6 h-6 text-primary" />,
  },
  {
    name: "Fine Dining",
    description: "Award-winning restaurant & cuisine",
    icon: <Utensils className="w-6 h-6 text-primary" />,
  },
  {
    name: "Luxury Spa",
    description: "Full-service spa & wellness center",
    icon: <TreePalm className="w-6 h-6 text-primary" />,
  },
  {
    name: "Wine Bar",
    description: "Premium selection of wines & spirits",
    icon: <Wine className="w-6 h-6 text-primary" />,
  },
  {
    name: "Free WiFi",
    description: "High-speed internet throughout",
    icon: <Wifi className="w-6 h-6 text-primary" />,
  },
  {
    name: "Room Service",
    description: "Available 24 hours daily",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    name: "Coffee Lounge",
    description: "Complimentary premium coffee & tea",
    icon: <Coffee className="w-6 h-6 text-primary" />,
  },
  {
    name: "Valet Parking",
    description: "Secure parking with valet service",
    icon: <Car className="w-6 h-6 text-primary" />,
  },
  {
    name: "Concierge",
    description: "24/7 personalized assistance",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
];
