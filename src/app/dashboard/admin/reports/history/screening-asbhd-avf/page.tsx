//src/app/dashboard/admin/reports/history/screening-asbhd-avf/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminReportHistoryScreeningASBHDAVFWrapper from "@/components/organisms/dashboard/admin/reports/history/screening-asbhd-avf/DashboardAdminReportHistoryScreeningASBHDAVFWrapper";

export default function DashboardAdminReportHistoryScreeningASBHDAVFPage() {
  return (
    <section>
      <DashboardTitle
        head="Laporan Screening ASBHD-AVF"
        body="Menampilkan daftar hasil screening ASBHD-AVF (Assessment of Self-Care Behaviours with Arteriovenous Fistula) yang telah dikerjakan oleh pasien hemodialisis."
      />
      <DashboardAdminReportHistoryScreeningASBHDAVFWrapper />
    </section>
  );
}
