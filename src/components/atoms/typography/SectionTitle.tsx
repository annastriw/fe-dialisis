"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.div
      className="text-center w-full"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h1 className="from-primary to-secondary font-sans inline-block bg-gradient-to-r bg-clip-text text-xl leading-snug text-transparent sm:text-2xl md:text-3xl lg:text-4xl">
        {title}
      </h1>
    </motion.div>
  );
}
