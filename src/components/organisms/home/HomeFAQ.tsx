"use client";

import SectionTitle from "@/components/atoms/typography/SectionTitle";
import AccordionFAQ from "@/components/molecules/accordion/AccordionFAQ";
import { motion } from "framer-motion";

export default function HomeFAQ() {
  return (
    <section className="mt-24 space-y-10 md:space-y-16">
      <SectionTitle title="Pertanyaan Yang Sering Ditanyakan" />
      
      {/* Fade In Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
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
