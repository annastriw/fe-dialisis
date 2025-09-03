"use client";

import { motion } from "framer-motion";

interface SectionTitleSecondaryProps {
  title: string;
}

export default function SectionTitleSecondary({
  title,
}: SectionTitleSecondaryProps) {
  return (
    <motion.div
      className="w-full mb-7"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="font-sans text-black dark:text-white text-lg leading-snug sm:text-xl md:text-2xl lg:text-3xl capitalize">
        {title}
      </h2>
    </motion.div>
  );
}
