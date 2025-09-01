"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CardComunity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full"
    >
      <div className="text-card-foreground relative flex w-full flex-col justify-between overflow-hidden rounded-2xl shadow-2xl">
        {/* Gradient Header */}
        <div className="from-primary to-secondary relative flex min-h-[250px] md:min-h-[300px] lg:min-h-[350px] items-center justify-center overflow-hidden rounded-lg bg-gradient-to-tr p-6 sm:p-10 lg:p-16">
          <div className="flex flex-col gap-6 text-center max-w-2xl">
            <h3 className="font-sans text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Bergabung di Forum Komunitas
            </h3>
            <p className="text-base sm:text-lg lg:text-xl text-white/90">
              Berbagi pengalaman dan saling bertanya bersama komunitas kami ✨
            </p>
            <div className="flex justify-center">
              <Link href={"/login"}>
                <Button
                  size="lg"
                  className="mt-2 min-w-[200px] rounded-md font-semibold shadow-md
                            bg-white text-primary transition-all duration-300
                            hover:bg-white/90 hover:shadow-lg hover:-translate-y-1"
                >
                  Bergabung Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative gradient circle */}
        <div className="from-secondary/30 to-primary/30 absolute -top-10 right-0 h-52 w-60 rotate-45 rounded-full bg-gradient-to-r blur-3xl"></div>
      </div>
    </motion.div>
  );
}
