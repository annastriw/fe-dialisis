"use client";

import CardDashboardTitle from "@/components/molecules/card/CardDashboardTitle";
import { Users, UserRoundSearch } from "lucide-react";

export default function DashboardMedicalWrapper() {
  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <CardDashboardTitle
          title="Forum Komunitas"
          icon={Users}
          link="medical/discussions"
          description="Terhubung dengan pasien dan tenaga medis lain untuk berdiskusi, berbagi pengalaman, dan memberikan tips profesional."
        />

        <CardDashboardTitle
          title="Kelola Pertanyaan Private"
          icon={UserRoundSearch}
          link="medical/discussions/private"
          description="Kelola dan tanggapi pertanyaan pribadi dari pasien dengan cepat dan aman, sehingga komunikasi lebih efektif dan terpercaya."
        />
      </div>
    </>
  );
}
