"use client";

import SectionTitle from "@/components/atoms/typography/SectionTitle";
import AccordionFAQ from "@/components/molecules/accordion/AccordionFAQ";
import { motion } from "framer-motion";

export default function HomeFAQ() {
  return (
    <section className="px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 space-y-6">
      <SectionTitle title="Pertanyaan Yang Sering Ditanyakan" />
      
      {/* Fade In Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto w-full max-w-6xl"
      >
        <AccordionFAQ />
      </motion.div>
    </section>
  );
}
