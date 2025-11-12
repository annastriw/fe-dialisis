// src/app/dashboard/medical/reports/history/screening/[id]/page.tsx

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalReportHistoryScreeningWrapper from "@/components/organisms/dashboard/medical/reports/history/screening/DashboardMedicalReportHistoryScreeningWrapper";

interface DashboardMedicalReportHistoryScreeningPageProps {
  params: { id: string };
}

export default function DashboardMedicalReportHistoryScreeningPage({
  params,
}: DashboardMedicalReportHistoryScreeningPageProps) {
  const { id } = params;

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
