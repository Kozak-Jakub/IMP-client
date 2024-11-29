import { Button } from "@/components/ui/button";
import Image from "next/image";

export const TreatmentShowcase = () => {
  const treatments = [
    {
      title: "Signature Massage",
      duration: "90 min",
      price: "$150",
      description: "A personalized massage combining various techniques",
      image: "/blueprint.webp",
    },
    {
      title: "Facial Treatment",
      duration: "60 min",
      price: "$120",
      description: "Rejuvenating facial using organic products",
      image: "/blueprint.webp",
    },
    {
      title: "Body Wrap",
      duration: "75 min",
      price: "$130",
      description: "Detoxifying wrap with natural ingredients",
      image: "/blueprint.webp",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-4">Signature Treatments</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Discover our most popular wellness treatments
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-background rounded-lg overflow-hidden shadow-sm"
            >
              <Image
                height="100"
                width="100"
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-48 object-cover"
                priority
              />
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-heading">{treatment.title}</h3>
                  <div className="text-primary font-body">
                    {treatment.price}
                  </div>
                </div>
                <p className="text-muted-foreground font-body">
                  {treatment.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground font-body">
                    Duration: {treatment.duration}
                  </span>
                  <Button variant="outline" size="sm">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
