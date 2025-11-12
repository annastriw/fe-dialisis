import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminReportHistoryScreeningCKDSCWrapper from "@/components/organisms/dashboard/admin/reports/history/screening-ckdsc/DashboardAdminReportHistoryScreeningCKDSCWrapper";

export default function DashboardAdminReportHistoryScreeningCKDSCPage() {
  return (
    <section>
      <DashboardTitle
        head="Laporan Screening CKDSC"
        body="Menampilkan daftar hasil screening CKDSC (Chronic Kidney Disease Self-Care) yang telah dikerjakan oleh pasien penyakit ginjal kronis."
      />
      <DashboardAdminReportHistoryScreeningCKDSCWrapper />
    </section>
  );
}
