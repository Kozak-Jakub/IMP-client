import { Leaf, Waves, Heart, Sun } from "lucide-react";

export const WellnessServices = () => {
  const services = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Holistic Treatments",
      description:
        "Experience our signature treatments combining ancient wisdom with modern techniques",
    },
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Hydrotherapy",
      description: "Immerse yourself in our therapeutic water facilities",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Mindfulness",
      description: "Find your inner peace with our guided meditation sessions",
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: "Energy Healing",
      description:
        "Restore your natural balance with our energy healing therapies",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading mb-4">Our Wellness Journey</h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto">
            Embark on a transformative journey with our carefully curated
            wellness experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="text-center p-6 space-y-4">
              <div className="text-primary mx-auto w-12 h-12 flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-heading">{service.title}</h3>
              <p className="text-muted-foreground font-body">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
