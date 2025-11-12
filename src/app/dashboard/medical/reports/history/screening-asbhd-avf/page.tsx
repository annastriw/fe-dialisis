// src/app/dashboard/medical/reports/history/screening-asbhd-avf/page.tsx

import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalReportHistoryScreeningASBHDAVFWrapper from "@/components/organisms/dashboard/medical/reports/history/screening-asbhd-avf/DashboardMedicalReportHistoryScreeningASBHDAVFWrapper";

export default function DashboardMedicalReportHistoryScreeningASBHDAVFPage() {
  return (
    <section>
      <DashboardTitle
        head="Laporan Screening ASBHD-AVF Pasien"
        body="Menampilkan daftar hasil screening ASBHD-AVF (Assessment of Self-Care Behaviours with Arteriovenous Fistula) yang telah dikerjakan oleh pasien hemodialisis."
      />
      <DashboardMedicalReportHistoryScreeningASBHDAVFWrapper />
    </section>
  );
}
