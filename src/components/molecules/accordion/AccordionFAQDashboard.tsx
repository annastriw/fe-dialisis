"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQDiscussion } from "@/types/faq/faq";

interface AccordionFAQDashboardProps {
  data?: FAQDiscussion[];
}

export default function AccordionFAQDashboard({
  data,
}: AccordionFAQDashboardProps) {
  return (
    <div className="w-full">
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2"
      >
        {data?.map((faq) => (
          <AccordionItem
            key={faq.id}
            value={faq.id}
            className="rounded-lg shadow-sm border border-[var(--border)] bg-[var(--card)]"
          >
            {/* Pertanyaan */}
            <AccordionTrigger
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-t-lg
                         bg-[var(--primary)] text-[var(--primary-foreground)]
                         hover:bg-[color-mix(in srgb, var(--primary) 90%, black)]
                         transition-colors font-heading text-sm sm:text-base"
            >
              {faq.question}
            </AccordionTrigger>

            {/* Jawaban dengan animasi */}
            <AccordionContent
              className="px-3 sm:px-4 py-2 sm:py-3 rounded-b-lg 
                         bg-[var(--card)] text-[var(--foreground)] 
                         border-t border-[var(--border)] font-sans text-sm sm:text-base
                         data-[state=open]:animate-accordion-down 
                         data-[state=closed]:animate-accordion-up"
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
