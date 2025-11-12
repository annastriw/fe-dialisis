// src/app/dashboard/medical/reports/screening/[id]/page.tsx

import DashboardTitleBold from "@/components/atoms/typography/DashboardTitleBold";
import DashboardMedicalReportScreeningDetailWrapper from "@/components/organisms/dashboard/medical/reports/screening/DashboardMedicalReportScreeningDetailWrapper";

interface DashboardMedicalDetailReportScreeningPageProps {
  params: { id: string };
}

export default function DashboardMedicalDetailReportScreeningPage({
  params,
}: DashboardMedicalDetailReportScreeningPageProps) {
  const { id } = params;

  return (
    <section>
      <DashboardTitleBold head="Detail Report Screening Pasien" />
      <DashboardMedicalReportScreeningDetailWrapper id={id} />
    </section>
  );
}
