"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeJumbotron() {
  return (
    <section className="w-full m-0 p-0 pb-12 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 m-0 p-4 lg:p-12">

        {/* IMAGE SECTION */}
        <motion.div
          className="flex justify-center lg:justify-end order-first lg:order-last"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src={"/images/assets/bg-hero.png"}
            alt="Hero"
            width={600}
            height={600}
            className="w-full max-w-[500px] sm:max-w-[550px] md:max-w-[600px] lg:max-w-[650px]"
            priority
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 sm:gap-5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* HEADLINE */}
          <motion.div className="text-center lg:text-left leading-tight">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold
                         bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800
                         bg-clip-text text-transparent shadow-text"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              PLATFORM EDUKASI
            </motion.h1>
            
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold mt-1
                         bg-gradient-to-r from-[#2c7be4] via-[#58a0f2] to-[#2c7be4]/70
                         bg-clip-text text-transparent shadow-text animate-gradient-shimmer-cinematic"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              DIALISIS CONNECT EDU
            </motion.h2>
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-full md:max-w-[480px] lg:max-w-[550px] leading-relaxed mt-2"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
          >
            Website ini menyediakan informasi terpercaya tentang terapi pengganti ginjal 
            seperti dialisis dan transplantasi, untuk pasien, keluarga, dan masyarakat. 
            Dengan konten berbasis ilmu keperawatan yang mudah dipahami, kami bertujuan 
            meningkatkan kesadaran, pengetahuan, dan kepatuhan dalam perawatan gagal ginjal kronis.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Link href={"/login"}>
              <Button
                size="lg"
                className="mt-4 min-w-[180px] sm:min-w-[200px] rounded-md font-semibold shadow-md
                           bg-primary text-white transition-all duration-300
                           hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1"
              >
                Coba Sekarang
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* FONT & SOFT CINEMATIC SHIMMER */}
      <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');

        .shadow-text {
          text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
        }

        /* Soft cinematic shimmer: bergerak 2 kali, lalu berhenti */
        @keyframes gradient-shimmer-cinematic {
          0% { background-position: -150% 0; }
          100% { background-position: 150% 0; }
        }

        .animate-gradient-shimmer-cinematic {
          background-size: 300% 100%;
          animation: gradient-shimmer-cinematic 6s ease-in-out 2 forwards;
        }
      `}
      </style>
    </section>
  );
}
