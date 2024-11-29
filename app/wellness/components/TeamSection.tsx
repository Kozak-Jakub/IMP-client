import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const team = [
  {
    name: "Sarah Johnson",
    role: "Spa Director",
    image: "/blueprint.webp",
    experience: "15+ years",
    specialty: "Holistic Wellness, Team Leadership",
  },
  {
    name: "Michael Chen",
    role: "Senior Massage Therapist",
    image: "/blueprint.webp",
    experience: "12 years",
    specialty: "Deep Tissue, Sports Massage",
  },
  {
    name: "Emma Davis",
    role: "Skincare Specialist",
    image: "/blueprint.webp",
    experience: "8 years",
    specialty: "Anti-aging, Advanced Facials",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading text-center mb-16">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <Card key={member.name} className="p-6 text-center">
              <Avatar className="h-32 w-32 mx-auto mb-6">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback className="bg-primary/10 text-primary text-2xl">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <h3 className="font-heading text-lg mb-1">{member.name}</h3>
              <p className="text-primary font-body text-sm mb-4">
                {member.role}
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-body">
                  <span className="font-medium text-foreground">
                    Experience:
                  </span>{" "}
                  {member.experience}
                </p>
                <p className="font-body">
                  <span className="font-medium text-foreground">
                    Specialty:
                  </span>{" "}
                  {member.specialty}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
