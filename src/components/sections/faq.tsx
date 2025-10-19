"use client";

import * as React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What types of dance performances does V.PAG offer?",
    answer:
      "V.PAG specializes in a wide range of Pakistani cultural dances, including authentic Sufi whirling (Raqs), classical dances like Kathak, and various vibrant folk dances from different regions of Pakistan. We tailor our performances for cultural festivals, corporate events, weddings, and private functions.",
  },
  {
    question: "How far in advance should I book a performance?",
    answer:
      "We recommend booking at least 4-6 weeks in advance, especially for large-scale events or during peak seasons like wedding season. However, we can sometimes accommodate last-minute requests depending on our schedule.",
  },
  {
    question: "Do you provide performances outside of Lahore?",
    answer:
      "Yes, we perform all across Pakistan and internationally. Travel and accommodation costs will be included in the final quotation for performances outside of Lahore.",
  },
  {
    question: "Can you customize performances for specific themes or events?",
    answer:
      "Absolutely. We excel at creating bespoke performances tailored to your event's theme, duration, and audience. Whether it's a corporate gala, a wedding celebration, or a cultural festival, we can design a show that fits your vision.",
  },
  {
    question: "What is included in your training programs?",
    answer:
      "Our training programs cover everything from foundational techniques to advanced choreography in Kathak and other cultural dances. Classes are led by certified instructors and include theoretical knowledge, practical training, and performance opportunities.",
  },
  {
    question: "How many performers are typically included in a show?",
    answer:
      "The number of performers can range from a solo artist for an intimate gathering to a full troupe of 20+ dancers for a grand stage production. The number depends on the type of dance, your budget, and the scale of the event.",
  },
  {
    question: "What are your performance fees?",
    answer:
      "Performance fees vary based on the type of performance, number of dancers, duration, and location. Please contact us for a custom quote tailored to your specific requirements.",
  },
  {
    question: "Do you provide costumes and music for performances?",
    answer:
      "Yes, all our performances are all-inclusive. We provide authentic, high-quality costumes, props, and professionally mixed music to ensure a complete and immersive cultural experience.",
  },
  {
    question: "Can you perform for both indoor and outdoor venues?",
    answer:
      "Yes, our performances are adaptable to both indoor and outdoor settings. We will require information about the stage size, flooring, and available technical support to ensure the safety and quality of the performance.",
  },
  {
    question: "What makes V.PAG different from other dance companies?",
    answer:
      "With over 22 years of experience and founded by the renowned Sir Muhammad Fayyaz, V.PAG is dedicated to preserving cultural authenticity while delivering world-class, professional performances. Our award-winning artists and commitment to excellence set us apart.",
  },
  {
    question: "Do you offer workshops for corporate team building?",
    answer:
      "Yes, we offer engaging and interactive dance workshops that serve as unique team-building activities. They are a great way to introduce teams to Pakistani culture, encourage creativity, and boost morale.",
  },
  {
    question: "How do I get started with dance training at V.PAG?",
    answer:
      "To join our dance academy, you can visit our studio, call us, or fill out the contact form on our website. We offer classes for all skill levels, from beginners to advanced performers.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="bg-background-primary py-24 sm:py-32">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Have questions about our performances, training programs, or booking
            process? Find answers to the most common questions about working with
            V.PAG Dance Company.
          </p>
        </div>

        <Accordion type="multiple" className="w-full max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {faqData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary border border-border rounded-lg"
              >
                <AccordionTrigger className="flex w-full items-center justify-between p-6 text-left font-semibold text-lg hover:no-underline">
                  <span className="flex-1">{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>

        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Still have questions? We're here to help!
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;