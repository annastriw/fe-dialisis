// DashboardAdminWrapper.tsx
"use client";

import CardDashboardTitle from "@/components/molecules/card/CardDashboardTitle";
import { CircleHelp, NotepadText, User, Users } from "lucide-react";

export default function DashboardAdminWrapper() {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardDashboardTitle
          title="Forum Komunitas"
          icon={Users}
          link="admin/discussions"
          description="Terhubung dengan pasien dan tenaga medis untuk berdiskusi dan berbagi pengalaman secara profesional."
        />
        <CardDashboardTitle
          title="Laporan Keseluruhan"
          icon={NotepadText}
          link="admin/reports"
          description="Akses laporan komprehensif mengenai aktivitas, screening, dan hasil tes seluruh pengguna."
        />
        <CardDashboardTitle
          title="Manajemen Pengguna"
          icon={User}
          link="admin/users"
          description="Atur akun pasien dan tenaga medis dengan mudah, kelola informasi pribadi, lakukan reset password, dan hapus akun dengan aman untuk mendukung kelancaran administrasi."
        />
        <CardDashboardTitle
          title="FAQ"
          icon={CircleHelp}
          link="admin/faqs"
          description="Kelola daftar pertanyaan dan jawaban yang sering diajukan untuk membantu pengguna secara efisien."
        />
      </div>
    </>
  );
}
