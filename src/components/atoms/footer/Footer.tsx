"use client";

import { Instagram, Youtube, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const socialIcons = [
    {
      icon: <Mail className="h-5 w-5 text-white" />,
      href: "mailto:dialisisconnectedudev@gmail.com",
      label: "Email",
    },
    {
      icon: <Instagram className="h-5 w-5 text-white" />,
      href: "https://www.instagram.com/nursing_undip/",
      label: "@nursing_undip",
    },
    {
      icon: <Instagram className="h-5 w-5 text-white" />,
      href: "https://www.instagram.com/tekom_undip/",
      label: "@tekom_undip",
    },
    {
      icon: <Youtube className="h-5 w-5 text-white" />,
      href: "https://www.youtube.com/@nursing_undip",
      label: "YouTube",
    },
  ];

  return (
    <footer className="relative mt-20 w-full bg-footer-pattern bg-cover bg-center bg-no-repeat text-white">
      {/* Overlay biru muda semi-transparan */}
      <div className="absolute inset-0 bg-blue-500/60"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 w-full px-4 py-12 sm:px-10 md:px-14 lg:px-20"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Deskripsi Singkat */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold sm:text-xl">Dialisis Connect Edu</h2>
            <p className="text-sm leading-relaxed sm:text-base">
              Platform edukasi dan komunitas untuk pasien hemodialisis, keluarga, dan tenaga kesehatan.
              Informasi perawatan ginjal, gaya hidup sehat, serta dukungan emosional melalui artikel dan video.
            </p>
            <p className="text-sm font-semibold sm:text-base">Kami terhubung, kami peduli.</p>
          </div>

          {/* Kontak & Sosial Media */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold sm:text-xl">Kontak & Media Sosial</h2>
            <ul className="space-y-3 text-sm sm:text-base">
              {socialIcons.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-center gap-2 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {item.icon}
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="hover:underline"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Hak Cipta */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold sm:text-xl">Hak Cipta</h2>
            <p className="text-sm leading-relaxed sm:text-base">
              © 2025 Dialisis Connect Edu. All rights reserved.
            </p>
          </div>
        </div>

        {/* Footer bawah */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-10 border-t border-white/30 pt-5 text-center text-xs text-white/70 sm:text-sm"
        >
          Dibuat oleh{" "}
          <Link
            href="/about-us"
            className="text-white hover:underline hover:text-blue-200 transition-colors"
          >
            Departemen Ilmu Keperawatan & Teknik Komputer UNDIP 💻
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
}
