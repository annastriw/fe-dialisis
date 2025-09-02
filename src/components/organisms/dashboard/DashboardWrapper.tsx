"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import CardDashboardTitle from "@/components/molecules/card/CardDashboardTitle";
import { History, MessageSquare, NotebookText, Search } from "lucide-react";

export default function DashboardWrapper() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/login");
    return null;
  }

  if (session.user.role === "admin") {
    router.push("/dashboard/admin");
    return null;
  }

  if (session.user.role === "medical_personal") {
    router.push("/dashboard/medical");
    return null;
  }

  return (
    <>
      <DashboardTitle
        head="Beranda"
        body="Selamat datang! Mari jelajahi fitur dan informasi kesehatan yang dapat membantu Anda menjaga kesehatan secara lebih baik di Dialisis Connect Edu"
      />

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardDashboardTitle
          title="Screening"
          icon={Search}
          description="Lakukan berbagai screening kesehatan secara menyeluruh untuk memahami kondisi tubuh Anda dengan lebih baik."
          link="screening"
        />
        <CardDashboardTitle
          title="Modul Materi"
          icon={NotebookText}
          description="Akses materi edukasi lengkap seputar penyakit ginjal, CAPD, dan Hemodialisis melalui video, booklet, dan artikel terpercaya."
          link="modules"
        />
        <CardDashboardTitle
          title="Riwayat Pengerjaan"
          icon={History}
          description="Telusuri riwayat screening dan hasil tes modul materi Anda, agar kemajuan dan pencapaian dapat mudah dipantau."
          link="history"
        />
        <CardDashboardTitle
          title="Forum Komunitas"
          icon={MessageSquare}
          description="Terhubung dengan pasien lain dan tenaga medis untuk berdiskusi, berbagi pengalaman, dan mendapatkan tips bermanfaat."
          link="discussions"
        />
      </div>
    </>
  );
}
