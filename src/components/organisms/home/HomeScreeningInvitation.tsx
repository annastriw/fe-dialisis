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
      className="mt-24"
    >
      <Card className="border-0 shadow-2xl md:p-10 rounded-2xl bg-gradient-to-br from-white to-slate-50">
        <CardContent>
          <div className="flex h-full flex-col-reverse items-center justify-between gap-10 md:flex-row">
            {/* Text Section */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:w-1/2 flex flex-col gap-6 text-center md:text-left"
            >
              <h1 className="font-paytone text-primary text-3xl md:text-4xl leading-snug">
                Ayo Cek Kesehatan Anda!
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Yuk, mulai peduli dengan kesehatanmu lewat screening kesehatan
                sederhana ini. Hanya dengan menjawab beberapa pertanyaan ringan,
                kamu sudah selangkah lebih dekat untuk mengenal kondisi tubuhmu.
                Mudah dan bisa diakses kapan saja. Mulai sekarang, lebih peduli
                dengan diri sendiri itu mudah!
              </p>
              <div className="flex justify-center md:justify-start">
                <Link href={"/login"}>
                  <Button
                    size="lg"
                    className="mt-2 min-w-[200px] rounded-md font-semibold shadow-md
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
              className="lg:w-1/2 flex justify-center"
            >
              <Image
                src={"/images/assets/doctor.png"}
                alt="Doctor"
                width={1024}
                height={1024}
                priority
                className="max-w-[220px] sm:max-w-[280px] md:max-w-[350px] lg:max-w-[400px] drop-shadow-xl"
              />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
