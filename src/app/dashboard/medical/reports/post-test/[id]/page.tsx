// src/app/dashboard/medical/reports/post-test/[id]/page.tsx
import DashboardTitleBold from "@/components/atoms/typography/DashboardTitleBold";
import DashboardMedicalReportDetailPostTestWrapper from "@/components/organisms/dashboard/medical/reports/post-test/DashboardMedicalReportDetailPostTestWrapper";

interface DashboardMedicalDetailReportPostTestPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardMedicalDetailReportPostTestPage({
  params,
}: DashboardMedicalDetailReportPostTestPageProps) {
  const { id } = await params;
  return (
    <section>
      <DashboardTitleBold head="Detail Report Post-Test" />
      <DashboardMedicalReportDetailPostTestWrapper id={id} />
    </section>
  );
}
