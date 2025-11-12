// src/app/dashboard/medical/reports/history/screening-ckdsc/[id]/page.tsx

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalHistoryScreeningCKDSCDetailWrapper from "@/components/organisms/dashboard/medical/reports/history/screening-ckdsc/DashboardMedicalHistoryScreeningCKDSCDetailWrapper";

export default function Page({ params }: any) {
  const { id } = params;

  return (
    <section>
      <DashboardTitle
        head="Detail Riwayat Screening CKDSC"
        body="Menampilkan informasi lengkap mengenai riwayat screening CKDSC yang telah dilakukan oleh pasien penyakit ginjal kronis. Halaman ini berisi detail evaluasi self-care pasien untuk mendukung pemantauan dan pengelolaan kondisi kesehatan secara menyeluruh."
      />
      <DashboardMedicalHistoryScreeningCKDSCDetailWrapper id={id} />
    </section>
  );
}
