"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <div className="flex w-full justify-center">
      <motion.div
        className="relative inline-block text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Text */}
        <h1 className="from-primary to-secondary font-paytone inline-block bg-gradient-to-r bg-clip-text text-xl leading-snug text-transparent sm:text-2xl sm:leading-snug md:text-3xl md:leading-snug lg:text-4xl lg:leading-snug">
          {title}
        </h1>
      </motion.div>
    </div>
  );
}
