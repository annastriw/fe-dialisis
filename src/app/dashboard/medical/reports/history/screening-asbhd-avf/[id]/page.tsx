// src/app/dashboard/medical/reports/history/screening-asbhd-avf/[id]/page.tsx

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalHistoryScreeningASBHDAVFDetailWrapper from "@/components/organisms/dashboard/medical/reports/history/screening-asbhd-avf/DashboardMedicalHistoryScreeningASBHDAVFDetailWrapper";

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <section>
      <DashboardTitle
        head="Detail Riwayat Screening ASBHD-AVF"
        body="Menampilkan informasi lengkap mengenai riwayat screening ASBHD-AVF yang telah dilakukan oleh pasien hemodialisis. Halaman ini berisi detail evaluasi self-care pada pasien dengan arteriovenous fistula untuk mendukung pemantauan kondisi kesehatan secara menyeluruh."
      />
      <DashboardMedicalHistoryScreeningASBHDAVFDetailWrapper id={id} />
    </section>
  );
}
