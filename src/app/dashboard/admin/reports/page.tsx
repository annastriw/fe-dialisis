// src/app/dashboard/admin/reports/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminReportWrapper from "@/components/organisms/dashboard/admin/reports/DashboardAdminReportsWrappper";

export default function DashboardAdminReportsPage() {
  return (
    <section>
      <DashboardTitle
        head="Laporan Keseluruhan"
        body="Pantau riwayat screening, pre-test, dan post-test yang telah dikerjakan pengguna, sehingga Anda dapat memantau perkembangan dan hasilnya dengan mudah."
      />
      <DashboardAdminReportWrapper />
    </section>
  );
}
