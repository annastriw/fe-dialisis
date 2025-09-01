"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomeScreeningInvitation() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full px-2 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8" // full-width + konsisten vertical padding
    >
      <Card className="border-0 shadow-2xl rounded-2xl bg-gradient-to-br from-white to-slate-50">
        <CardContent className="p-4 sm:p-6 md:p-10">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Text Section */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex flex-col gap-4 sm:gap-6 text-center md:text-left"
            >
              <h1 className="font-sans text-primary text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-snug sm:leading-snug md:leading-tight">
                Ayo Cek Kesehatan Anda!
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Yuk, mulai peduli dengan kesehatanmu lewat screening kesehatan sederhana ini. Hanya dengan menjawab beberapa pertanyaan ringan, kamu sudah selangkah lebih dekat untuk mengenal kondisi tubuhmu. Mudah dan bisa diakses kapan saja. Mulai sekarang, lebih peduli dengan diri sendiri itu mudah!
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href={"/login"}>
                  <Button
                    size="lg"
                    className="mt-2 min-w-[180px] sm:min-w-[200px] rounded-md font-semibold shadow-md
                               bg-primary text-white transition-all duration-300
                               hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1"
                  >
                    Mulai Sekarang
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <Image
                src={"/images/assets/doctor.png"}
                alt="Doctor"
                width={1024}
                height={1024}
                priority
                className="w-[180px] sm:w-[220px] md:w-[300px] lg:w-[350px] xl:w-[400px] drop-shadow-xl"
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
