"use client";

import SectionTitle from "@/components/atoms/typography/SectionTitle";
import CardIntroduction from "@/components/molecules/card/CardIntroduction";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Penyakit Ginjal Kronik",
    description:
      "Penyakit ginjal kronik (PGK) adalah kondisi di mana kerusakan ginjal berlangsung lama dan mengurangi kemampuan ginjal untuk menyaring darah (LFG). Banyak pasien PGK tidak menunjukkan gejala hingga fungsi ginjal menurun di bawah 15%. PGK bersifat progresif dan irreversible, sering memerlukan terapi penggantian ginjal seperti dialisis atau transplantasi.",
    href: "/general/penyakit-ginjal-kronik",
    src: "/images/content/pgk.jpg",
  },
  {
    title: "CAPD",
    description:
      "Pada perawatan CAPD, pasien penyakit ginjal kronik dipasangkan kateter melalui sayatan kecil di bawah umbilikus. Pemasangan kateter CAPD dilakukan dengan cara memasukkan cairan dialisis dan mengeluarkan effluent, serta keberhasilan perawatan CAPD bergantung pada pencegahan infeksi, kelancaran aliran, dan ketiadaan kebocoran kateter.",
    href: "/general/capd",
    src: "/images/content/capd.jpeg",
  },
  {
    title: "Hemodialisis",
    description:
      "Terapi hemodialisis adalah prosedur medis yang membantu menggantikan fungsi ginjal pada pasien penyakit ginjal kronik dengan menyaring darah menggunakan mesin dialisis. Proses ini membersihkan darah dari zat sisa seperti ureum dan kreatinin, serta mengontrol kadar cairan dan elektrolit dalam tubuh. Hemodialisis biasanya dilakukan 2-3 kali seminggu di unit khusus dengan durasi sekitar 4-5 jam per sesi.",
    href: "/general/hemodialisis",
    src: "/images/content/hd.jpg",
  },
];

export default function HomeIntroduction() {
  return (
    <section className="px-4 py-12 md:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Title dengan animasi */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <SectionTitle title="Penjelasan Secara Umum" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <CardIntroduction {...card} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
