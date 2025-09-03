"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4 pt-0 pb-0 sm:px-6 md:px-10 lg:px-16">
      {/* Gambar Header */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0}
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
      <div className="max-w-4xl w-full flex flex-col space-y-6 text-gray-800 dark:text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed">
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
    </div>
  );
}
