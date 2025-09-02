"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GeneralHemodialisisWrapper() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7 },
    }),
  };

  const paragraphs = [
    <>
      emodialisis adalah suatu prosedur medis yang dilakukan oleh tenaga
      kesehatan untuk mengatasi gangguan fungsi ginjal pada individu yang
      didiagnosis mengalami masalah. Prosedur ini bertujuan untuk menggantikan
      fungsi ginjal dengan melibatkan proses difusi, osmosis, dan ultrafiltrasi.
      <span className="font-semibold text-blue-700">
        Hemodialisis merupakan terapi pengganti fungsi ginjal pada pasien dengan
        gagal ginjal kronis maupun akut.
      </span>{" "}
      Terapi ini bertujuan untuk mengeliminasi zat-zat sisa metabolisme yang
      bersifat toksik, mengurangi kelebihan cairan tubuh, serta mengoreksi
      ketidakseimbangan elektrolit.
    </>,
    <>
      Hemodialisis berfungsi sebagai terapi pengganti ginjal bagi pasien yang
      mengalami gagal ginjal, dengan tujuan menghilangkan sisa toksik, kelebihan
      cairan, serta memperbaiki ketidakseimbangan elektrolit.{" "}
      <span className="font-semibold text-blue-700">
        Durasi hemodialisis biasanya berlangsung 4–5 jam dan dilakukan dua kali
        seminggu.
      </span>
    </>,
    <>
      Proses hemodialisis berfungsi untuk membersihkan darah dari akumulasi
      limbah buangan. Terapi ini digunakan untuk pasien dengan gagal ginjal
      stadium akhir atau pasien yang mengalami kondisi akut yang memerlukan
      dialisis dalam waktu singkat.{" "}
      <span className="font-semibold text-blue-700">
        Hemodialisis tidak menyembuhkan atau memulihkan fungsi ginjal, tetapi
        mencegah risiko kematian.
      </span>
    </>,
    <>
      Tujuan utama dari hemodialisis adalah untuk mengembalikan keseimbangan
      cairan ekstra dan intraseluler yang seharusnya dipertahankan oleh ginjal
      sehat. Mesin hemodialisis bekerja dengan mengeluarkan sisa metabolisme
      dalam darah seperti air, natrium, kalium, hidrogen, urea, kreatinin, asam
      urat, dan zat lainnya melalui membran semipermeabel yang memisahkan darah
      dari cairan dialisat.
    </>,
  ];

  return (
    <div className="flex min-h-screen flex-col items-center justify-start px-4">
      {/* Container gambar + artikel */}
      <div className="w-full max-w-4xl mx-auto">
        {/* Gambar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className="w-full"
        >
          <Image
            src={"/images/content/hd.jpg"}
            alt="Hemodialisis"
            width={1600}
            height={1000}
            loading="lazy"
            className="w-full h-auto rounded-xl shadow-md object-cover"
          />
        </motion.div>

        {/* Artikel */}
        <div className="flex flex-col space-y-6 md:space-y-8 text-base md:text-lg leading-loose tracking-normal text-gray-800 dark:text-gray-200 mt-6">
          {paragraphs.map((paragraph, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={i + 1}
              className="text-justify"
            >
              {i === 0 ? (
                <>
                  <span className="float-left mr-2 text-6xl md:text-7xl font-extrabold text-blue-800 leading-none">
                    H
                  </span>
                  {paragraph}
                </>
              ) : (
                paragraph
              )}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
}
