// src/app/dashboard/medical/reports/history/pre-test/[id]/page.tsx
import DashboardMedicalReportHistoryPreTestWrapper from "@/components/organisms/dashboard/medical/reports/history/pre-test/DashboardMedicalReportHistoryScreeningWrapper";

interface DashboardMedicalReportHistoryPreTestPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardMedicalReportHistoryPreTestPage({
  params,
}: DashboardMedicalReportHistoryPreTestPageProps) {
  const { id } = await params;
  return (
    <section>
      <DashboardMedicalReportHistoryPreTestWrapper id={id} />
    </section>
  );
}
