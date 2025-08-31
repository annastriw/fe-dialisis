"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah pasien HD disarankan mengonsumsi buah segar?",
    answer: (
      <ul className="list-disc pl-5 space-y-0.5 marker:text-primary marker:text-xs text-sm md:text-sm leading-snug break-words">
        <li>
          Pasien HD sebaiknya tidak mengonsumsi buah segar langsung karena
          kandungan kalium tinggi.
        </li>
        <li>
          Buah sebaiknya direndam atau dimasak terlebih dahulu untuk menurunkan
          kadar kalium.
        </li>
      </ul>
    ),
  },
  {
    question: "Apakah saya bisa berpindah dari HD ke CAPD, atau sebaliknya?",
    answer: (
      <ul className="list-disc pl-5 space-y-0.5 marker:text-primary marker:text-xs text-sm md:text-sm leading-snug break-words">
        <li>
          Pasien dapat berpindah dari HD ke CAPD atau sebaliknya jika kondisi
          medis memungkinkan.
        </li>
        <li>
          Diperlukan persetujuan dokter berdasarkan kenyamanan, efektivitas
          terapi, dan risiko komplikasi.
        </li>
      </ul>
    ),
  },
  {
    question: "Apakah kebutuhan nutrisi pada pasien CAPD dan HD sama?",
    answer: (
      <ul className="list-disc pl-5 space-y-0.5 marker:text-primary marker:text-xs text-sm md:text-sm leading-snug break-words">
        <li>
          Kebutuhan nutrisi tidak sama karena mekanisme pengeluaran cairan dan
          zat gizi berbeda.
        </li>
        <li>
          Setiap pasien memerlukan pengaturan diet spesifik untuk mengurangi
          risiko komplikasi.
        </li>
      </ul>
    ),
  },
];

export default function AccordionFAQ() {
  return (
    <div className="relative w-full">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeOut",
            }}
          >
            <AccordionItem
              value={`item-${index}`}
              className="rounded-xl border bg-white/80 shadow-md backdrop-blur-sm transition-all hover:shadow-lg"
            >
              <AccordionTrigger className="px-4 py-4 text-base md:text-lg font-medium flex items-center justify-between gap-2">
                <span>{faq.question}</span>
                <motion.span
                  className="ml-2 flex-shrink-0"
                  initial={false}
                  animate={{ rotate: 0 }}
                >
                  <ChevronDown className="h-5 w-5 text-primary transition-transform duration-300 group-data-[state=open]:rotate-180" />
                </motion.span>
              </AccordionTrigger>

              <AccordionContent>
                <AnimatePresence>
                  <motion.div
                    key={`content-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-white rounded-b-xl p-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  );
}
