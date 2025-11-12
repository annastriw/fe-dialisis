import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalReportHistoryScreeningWrapper from "@/components/organisms/dashboard/medical/reports/history/screening/DashboardMedicalReportHistoryScreeningWrapper";

interface DashboardMedicalReportHistoryScreeningPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardMedicalReportHistoryScreeningPage({
  params,
}: DashboardMedicalReportHistoryScreeningPageProps) {
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
