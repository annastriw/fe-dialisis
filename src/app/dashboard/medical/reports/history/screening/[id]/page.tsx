// src/app/dashboard/medical/reports/history/screening/[id]/page.tsx

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalReportHistoryScreeningWrapper from "@/components/organisms/dashboard/medical/reports/history/screening/DashboardMedicalReportHistoryScreeningWrapper";

// Sesuaikan tipe props dengan App Router
interface DashboardMedicalReportHistoryScreeningPageProps {
  params: Promise<{ id: string }>;
}

// Page component dibuat async untuk kompatibilitas server-side fetching
export default async function DashboardMedicalReportHistoryScreeningPage({
  params,
}: DashboardMedicalReportHistoryScreeningPageProps) {
  // Tunggu params karena sekarang bertipe Promise
  const { id } = await params;

  return (
    <section>
      <DashboardTitle
        head="Laporan Screening"
        body="Menampilkan detail laporan keseluruhan screening pasien"
      />
      <DashboardMedicalReportHistoryScreeningWrapper id={id} />
    </section>
  );
}
