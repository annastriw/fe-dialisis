// src/app/dashboard/medical/reports/history/screening-ckdsc/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalReportHistoryScreeningCKDSCWrapper from "@/components/organisms/dashboard/medical/reports/history/screening-ckdsc/DashboardMedicalReportHistoryScreeningCKDSCWrapper";

export default function DashboardMedicalReportHistoryScreeningCKDSCPage() {
  return (
    <section>
      <DashboardTitle
        head="Laporan Screening CKDSC"
        body="Menampilkan daftar hasil screening CKDSC (Chronic Kidney Disease Self-Care) yang telah dikerjakan oleh pasien penyakit ginjal kronis."
      />
      <DashboardMedicalReportHistoryScreeningCKDSCWrapper />
    </section>
  );
}
