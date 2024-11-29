import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactAndMapSection() {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit Us",
      content: ["123 Luxury Avenue", "Paradise City, PC 12345"],
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call Us",
      content: [
        "Front Desk: +1 (234) 567-8900",
        "Reservations: +1 (234) 567-8901",
      ],
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Write to Us",
      content: ["reservations@luxuryhotel.com", "concierge@luxuryhotel.com"],
    },
  ];

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-heading mb-2">Find Us Here</h2>
                <p className="text-muted-foreground font-body">
                  Located in the heart of the city, we&apos;re easily accessible
                  and ready to welcome you.
                </p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="mt-1 text-primary">{item.icon}</div>
                    <div>
                      <h3 className="font-medium font-heading">{item.title}</h3>
                      {item.content.map((line, i) => (
                        <p key={i} className="text-muted-foreground font-body">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[400px] rounded-lg overflow-hidden border border-muted">
              <div className="w-full h-full bg-muted/25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
