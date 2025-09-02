"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function GeneralCAPDWrapper() {
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
      ontinuous Ambulatory Peritoneal Dialysis (CAPD) merupakan jenis dialisis
      yang menggunakan membran peritoneal sebagai membran semipermeabel.{" "}
      <span className="font-semibold text-blue-700">
        Metode CAPD dilakukan dengan memanfaatkan luas peritoneum sekitar 22.000
        cm² sebagai permukaan difusi.
      </span>
    </>,
    <>
      Metode CAPD dilakukan dengan cara mengalirkan cairan pembersih melalui
      kateter ke bagian perut.{" "}
      <span className="font-semibold text-blue-700">
        Lapisan perut (peritoneum) berfungsi menyaring dan membuang sisa produk
        metabolisme.
      </span>{" "}
      Cairan yang mengandung limbah kemudian dialirkan keluar dan diganti
      beberapa kali dalam sehari. Biasanya dimasukkan sekitar 2 liter cairan
      dialisis ke dalam rongga peritoneal melalui kateter permanen.
    </>,
    <>
      Sebagai salah satu terapi pengganti ginjal, CAPD dapat dilakukan dengan
      aman di berbagai tempat.{" "}
      <span className="font-semibold text-blue-700">
        Proses memasukkan cairan dialisat berlangsung 20–30 menit, kemudian
        dibiarkan 4–6 jam (dwelling time) untuk pertukaran zat melalui difusi,
        osmosis, dan transpor aktif.
      </span>{" "}
      Walaupun praktis, prosedur ini harus dilakukan di lingkungan bersih untuk
      mencegah infeksi maupun komplikasi.
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
            src={"/images/content/capd.jpeg"}
            alt="Continuous Ambulatory Peritoneal Dialysis"
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
                    C
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
