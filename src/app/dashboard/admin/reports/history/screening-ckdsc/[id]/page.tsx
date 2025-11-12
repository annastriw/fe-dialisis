// src/app/dashboard/admin/reports/history/screening-ckdsc/[id]/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminHistoryScreeningCKDSCDetailWrapper from "@/components/organisms/dashboard/admin/reports/history/screening-ckdsc/DashboardAdminHistoryScreeningCKDSCDetailWrapper";

interface PageProps {
  params: { id: string };
}

// Page component async untuk kompatibilitas App Router
export default async function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <section className="space-y-6">
      <DashboardTitle
        head="Detail Riwayat Screening CKDSC"
        body="Menampilkan informasi lengkap mengenai riwayat screening CKDSC yang telah dilakukan oleh pasien penyakit ginjal kronis. Halaman ini berisi detail evaluasi self-care pasien untuk mendukung pemantauan dan pengelolaan kondisi kesehatan secara menyeluruh."
      />
      <DashboardAdminHistoryScreeningCKDSCDetailWrapper id={id} />
    </section>
  );
}
