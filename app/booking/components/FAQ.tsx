import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="w-full bg-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">
            Find answers to common questions about your stay
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question}>
              <AccordionTrigger className="font-heading text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out can be arranged based on availability.",
  },
  {
    question: "Is breakfast included in the room rate?",
    answer:
      "Yes, all our room rates include complimentary breakfast served at our restaurant from 6:30 AM to 10:30 AM.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Free cancellation is available up to 24 hours before check-in. Cancellations made within 24 hours of check-in may be subject to a one-night charge.",
  },
];
