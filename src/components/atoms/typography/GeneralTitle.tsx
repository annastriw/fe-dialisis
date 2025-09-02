"use client";

import { motion } from "framer-motion";

interface GeneralTitleProps {
  title: string;
}

export default function GeneralTitle({ title }: GeneralTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-10 flex w-full justify-center text-center"
    >
      <h1 className="font-sans text-2xl font-bold leading-tight tracking-tight md:text-3xl lg:text-4xl">
        {title}
      </h1>
    </motion.div>
  );
}
