// src/app/dashboard/medical/reports/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalReportWrapper from "@/components/organisms/dashboard/medical/reports/DashboardMedicalReportWrapper";

export default function DashboardMedicalReportsPage() {
  return (
    <section>
      <DashboardTitle
        head="Laporan Keseluruhan"
        body="Pantau riwayat screening, pre-test, dan post-test pasien yang telah dikerjakan, sehingga Anda dapat memantau perkembangan dan hasilnya dengan mudah."
      />
      <DashboardMedicalReportWrapper />
    </section>
  );
}
