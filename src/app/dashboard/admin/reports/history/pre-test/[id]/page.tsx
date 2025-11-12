// src/app/dashboard/admin/reports/history/pre-test/[id]/page.tsx
import DashboardAdminReportHistoryPreTestWrapper from "@/components/organisms/dashboard/admin/reports/history/pre-test/DashboardAdminReportHistoryScreeningWrapper";

interface DashboardAdminReportHistoryPreTestPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardAdminReportHistoryPreTestPage({
  params,
}: DashboardAdminReportHistoryPreTestPageProps) {
  const { id } = await params;
  return (
    <section>
      <DashboardAdminReportHistoryPreTestWrapper id={id} />
    </section>
  );
}
