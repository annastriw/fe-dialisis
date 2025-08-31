"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeJumbotron() {
  return (
    <section className="flex items-center justify-center px-6 py-12 md:py-20 lg:py-28">
      <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        
        {/* IMAGE SECTION (Mobile/Tablet di atas, Desktop di kanan) */}
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
            className="w-full max-w-sm md:max-w-md lg:max-w-xl"
            priority
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-left"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.h1
            className="font-paytone uppercase tracking-wide text-3xl font-bold leading-snug md:text-5xl md:leading-tight lg:text-6xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <span className="block">Platform Edukasi</span>
            <span className="from-primary to-secondary mt-2 inline-block bg-gradient-to-r bg-clip-text text-transparent">
              Dialisis Connect Edu
            </span>
          </motion.h1>

          <motion.p
            className="text-base text-muted-foreground md:text-lg lg:text-xl max-w-xl"
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
                className="mt-2 min-w-[200px] rounded-md font-semibold shadow-md
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
