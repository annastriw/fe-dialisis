// src/app/dashboard/medical/reports/screening/[id]/page.tsx

import DashboardTitleBold from "@/components/atoms/typography/DashboardTitleBold";
import DashboardMedicalReportScreeningDetailWrapper from "@/components/organisms/dashboard/medical/reports/screening/DashboardMedicalReportScreeningDetailWrapper";

// Sesuaikan tipe props dengan App Router
interface DashboardMedicalDetailReportScreeningPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardMedicalDetailReportScreeningPage({
  params,
}: DashboardMedicalDetailReportScreeningPageProps) {
  // Tunggu params karena sekarang bertipe Promise
  const { id } = await params;

  return (
    <section>
      <DashboardTitleBold head="Detail Report Screening Pasien" />
      <DashboardMedicalReportScreeningDetailWrapper id={id} />
    </section>
  );
}
