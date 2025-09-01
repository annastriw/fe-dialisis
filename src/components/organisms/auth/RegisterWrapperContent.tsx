"use client";

import FormAuthRegister from "@/components/molecules/form/auth/FormAuthRegister";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RegisterWrapperContent() {
  return (
    <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      {/* Tombol Sign In Desktop */}
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute top-4 right-4 hidden md:top-8 md:right-8"
        )}
      >
        Sign In
      </Link>

      {/* Kiri: Background + Logo + Quote */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-muted relative hidden h-full flex-col p-10 text-white lg:flex dark:border-r"
      >
        {/* Background image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-primary bg-auth-pattern absolute inset-0 bg-contain bg-center bg-no-repeat" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />

        {/* Logo dan teks sebagai satu kesatuan */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="relative z-20 flex items-center gap-3 text-lg font-medium transition-all duration-300"
        >
          <Link
            href="/"
            className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
          >
            <Image
              src="/images/assets/bg-about-us.png"
              alt="Dialisis Connect"
              width={75}
              height={75}
              className="h-12 w-12 object-contain"
            />
            <span className="font-semibold tracking-tight text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-white hover:to-gray-200 hover:bg-clip-text hover:text-transparent">
              Dialisis Connect Edu
            </span>
          </Link>
        </motion.div>

        {/* Quote bawah */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative z-20 mt-auto"
        >
          <blockquote className="space-y-2">
            <p className="max-w-md text-lg">
              Website Edukatif Penyakit Ginjal Kronis
            </p>
          </blockquote>
        </motion.div>
      </motion.div>

      {/* Kanan: Form Register */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex h-full items-center p-4 lg:p-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto flex w-full flex-col justify-center gap-y-4 sm:w-[350px]"
        >
          <FormAuthRegister />
        </motion.div>
      </motion.div>
    </div>
  );
}
