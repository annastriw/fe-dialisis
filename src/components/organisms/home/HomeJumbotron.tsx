"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeJumbotron() {
  return (
    <section className="flex items-center justify-center w-full px-0 py-2 sm:py-3 md:py-4 lg:py-5">
      <div className="grid w-full items-center gap-4 sm:gap-6 md:gap-8 lg:grid-cols-2">
        
        {/* IMAGE SECTION */}
        <motion.div
          className="flex justify-center order-first lg:order-last"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={"/images/assets/bg-hero.png"}
            alt="Hero"
            width={600}
            height={600}
            className="w-full max-w-full"
            priority
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-5 text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            className="font-sans uppercase tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug md:leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <span className="block">Platform Edukasi</span>
            <span className="from-primary to-secondary mt-1 sm:mt-2 inline-block bg-gradient-to-r bg-clip-text text-transparent">
              Dialisis Connect Edu
            </span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            Website ini menyediakan informasi terpercaya tentang terapi pengganti ginjal 
            seperti dialisis dan transplantasi, untuk pasien, keluarga, dan masyarakat. 
            Dengan konten berbasis ilmu keperawatan yang mudah dipahami, kami bertujuan 
            meningkatkan kesadaran, pengetahuan, dan kepatuhan dalam perawatan gagal ginjal kronis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <Link href={"/login"}>
              <Button
                size="lg"
                className="mt-2 min-w-[180px] sm:min-w-[200px] rounded-md font-semibold shadow-md
                           bg-primary text-white transition-all duration-300
                           hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1"
              >
                Coba Sekarang
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
