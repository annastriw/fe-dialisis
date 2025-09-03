"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function AboutUsWrapper() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7 },
    }),
  };

  const paragraphs = [
    <>
      <span className="font-bold text-blue-700">Dialisis Connect Edu</span> adalah
      platform edukasi dan komunitas untuk pasien hemodialisis, keluarga, serta
      tenaga kesehatan. Kami menyediakan informasi seputar{" "}
      <span className="font-bold text-blue-700">perawatan ginjal</span>,{" "}
      <span className="font-bold text-blue-700">gaya hidup sehat</span>, dan
      dukungan emosional melalui{" "}
      <span className="font-bold text-blue-700">
        video, artikel, dan forum interaktif
      </span>.
    </>,
    <>
      Website ini dikelola oleh{" "}
      <span className="font-bold text-blue-700">
        Departemen Ilmu Keperawatan
      </span>{" "}
      dan{" "}
      <span className="font-bold text-blue-700">
        Departemen Teknik Komputer Universitas Diponegoro
      </span>
      , bekerja sama dengan{" "}
      <span className="font-bold text-blue-700">
        Ikatan Perawat Dialisis Indonesia (IPDI) Jawa Tengah
      </span>
      .
    </>,
    <>
      Kami percaya bahwa setiap pasien berhak mendapatkan{" "}
      <span className="font-bold text-blue-700">
        edukasi yang mudah dipahami
      </span>{" "}
      dan{" "}
      <span className="font-bold text-blue-700">dukungan yang bermakna</span>.
      Bersama Dialisis Connect, kita{" "}
      <span className="font-bold text-blue-700">
        saling terhubung, saling menguatkan
      </span>
      .
    </>,
    <>
      <span className="font-bold text-blue-700">
        Kami terhubung, kami peduli.
      </span>
    </>,
  ];

  const teamMembers = [
    {
      name: "Annas Tri Widagdo",
      image: "/images/foto-profile/annas.jpg",
      instagram: "https://www.instagram.com/annastriw/",
    },
    {
      name: "Alex Bahrus Syarif",
      image: "/images/foto-profile/alex.jpg",
      instagram: "https://www.instagram.com/alex_bhrsyrf/",
    },
    {
      name: "Rendy Akbar Permana",
      image: "/images/foto-profile/rendy.jpg",
      instagram: "https://www.instagram.com/rendyakbar013/",
    },
    {
      name: "Dhanu Satria Atmaja",
      image: "/images/foto-profile/dhanu.jpg",
      instagram: "https://www.instagram.com/dhanuatmaja_/",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4 pt-0 pb-0 sm:px-6 md:px-10 lg:px-16">
      {/* Gambar Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="flex justify-center mb-10 w-full"
      >
        <Image
          src="/images/assets/bg-about-us.png"
          alt="Universitas Diponegoro"
          width={1000}
          height={1000}
          className="h-32 w-auto sm:h-40 md:h-52 lg:h-60 object-cover"
        />
      </motion.div>

      {/* Konten Paragraf */}
      <div className="max-w-4xl w-full flex flex-col space-y-6 text-gray-800 dark:text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed mb-16">
        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-justify"
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Tim IT Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        className="max-w-6xl w-full text-center mb-20"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          Tim IT Dialisis Connect Edu
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center text-center"
            >
              {/* Foto Profil */}
              <div className="w-full aspect-[3/4] relative overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Nama */}
              <p className="mt-4 text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100">
                {member.name}
              </p>

              {/* Instagram */}
              <motion.a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="mt-2 flex items-center gap-2 text-blue-600 hover:text-pink-600 dark:text-blue-400 dark:hover:text-pink-400 transition-colors duration-300 text-sm sm:text-base"
              >
                <Instagram size={18} /> Instagram
              </motion.a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
