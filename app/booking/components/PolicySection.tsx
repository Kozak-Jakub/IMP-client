import {
  Clock,
  CalendarCheck,
  CreditCard,
  CigaretteOff,
  Dog,
  Baby,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export function PolicySection() {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading text-foreground mb-4">
            Hotel Policies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Important information to ensure a comfortable stay
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((policy) => (
            <Card
              key={policy.title}
              className="group bg-card p-6 
                backdrop-blur-sm
                shadow-custom-sm hover:shadow-custom-xl
                dark:shadow-custom-sm dark:hover:shadow-glow
                transition-all duration-300 ease-in-out
                hover:-translate-y-1 hover:bg-card/95
                dark:bg-card/95"
            >
              <div className="flex items-start gap-4">
                <div
                  className="h-12 w-12 rounded-full 
                    bg-primary/10 flex items-center justify-center shrink-0
                    group-hover:bg-primary/20 group-hover:scale-110
                    transition-all duration-300 ease-in-out
                    shadow-custom-sm"
                >
                  {policy.icon}
                </div>
                <div>
                  <h3
                    className="text-lg font-heading text-foreground mb-2
                      group-hover:text-primary transition-colors duration-300"
                  >
                    {policy.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground font-body
                      group-hover:text-foreground transition-colors duration-300"
                  >
                    {policy.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const policies = [
  {
    title: "Check-in & Check-out",
    description:
      "Check-in from 3:00 PM, Check-out by 11:00 AM. Early check-in and late check-out available upon request.",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Cancellation Policy",
    description:
      "Free cancellation up to 24 hours before check-in. Cancellations within 24 hours may incur a one-night charge.",
    icon: <CalendarCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Payment Options",
    description:
      "We accept all major credit cards. A valid credit card is required for booking confirmation and incidentals.",
    icon: <CreditCard className="w-6 h-6 text-primary" />,
  },
  {
    title: "Smoking Policy",
    description:
      "All rooms and indoor areas are strictly non-smoking. Designated smoking areas are available outdoors.",
    icon: <CigaretteOff className="w-6 h-6 text-primary" />,
  },
  {
    title: "Pet Policy",
    description:
      "Pet-friendly rooms available with additional cleaning fee. Maximum 2 pets per room. Service animals welcome.",
    icon: <Dog className="w-6 h-6 text-primary" />,
  },
  {
    title: "Children & Extra Beds",
    description:
      "Children under 12 stay free when using existing bedding. Cribs available upon request at no additional charge.",
    icon: <Baby className="w-6 h-6 text-primary" />,
  },
];
