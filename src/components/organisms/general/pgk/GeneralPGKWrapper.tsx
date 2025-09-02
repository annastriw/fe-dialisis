"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GeneralPGKWrapper() {
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
      enyakit ginjal kronis (PGK) adalah gangguan fungsi ginjal progresif
      yang tidak dapat pulih, menyebabkan tubuh gagal menjaga keseimbangan
      metabolisme, cairan, dan elektrolit.{" "}
      <span className="font-semibold text-blue-700">
        Penyakit ginjal kronis (PGK) ditandai oleh LFG kurang dari 60 ml/menit
        dan berlangsung lebih dari tiga bulan.
      </span>{" "}
      Riskesdas pada tahun 2018 mencatat 713.783 orang di Indonesia
      terdiagnosis gagal ginjal kronis, termasuk 96.794 penderita di Jawa
      Tengah. Penderita biasanya menjalani terapi pengganti ginjal seperti
      Hemodialisis atau Continuous Ambulatory Peritoneal Dialysis (CAPD).
    </>,
    <>
      PGK seringkali berkembang perlahan dan tidak menunjukkan gejala pada
      tahap awal.{" "}
      <span className="font-semibold text-blue-700">
        Gejala umum meliputi kelelahan, pembengkakan, perubahan frekuensi buang
        air kecil, dan tekanan darah tinggi.
      </span>{" "}
      Faktor risiko utama antara lain diabetes melitus, hipertensi, riwayat
      keluarga, serta gaya hidup tidak sehat. Penting dilakukan skrining dan
      pemeriksaan rutin untuk mencegah progresivitas penyakit.
    </>,
    <>
      Penanganan PGK memerlukan pendekatan multidisiplin, termasuk pola makan
      rendah protein dan garam serta pemantauan fungsi ginjal.{" "}
      <span className="font-semibold text-blue-700">
        Pada tahap akhir, pasien membutuhkan terapi pengganti ginjal seperti
        hemodialisis, CAPD, atau transplantasi.
      </span>{" "}
      Pencegahan dengan edukasi masyarakat—cukup minum air putih, hindari
      penggunaan obat tanpa resep, serta menjaga tekanan dan gula darah tetap
      stabil—sangat penting untuk menekan angka kejadian PGK di Indonesia.
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
            src={"/images/content/pgk.jpg"}
            alt="Penyakit Ginjal Kronik"
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
                    P
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
