// src/app/dashboard/medical/reports/history/screening-ckdsc/[id]/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalHistoryScreeningCKDSCDetailWrapper from "@/components/organisms/dashboard/medical/reports/history/screening-ckdsc/DashboardMedicalHistoryScreeningCKDSCDetailWrapper";

// Sesuaikan tipe props dengan App Router
interface PageProps {
  params: Promise<{ id: string }>;
}

// Page component dibuat async untuk kompatibilitas server-side fetching
export default async function Page({ params }: PageProps) {
  // Tunggu params karena sekarang bertipe Promise
  const { id } = await params;

  return (
    <section className="space-y-6">
      <DashboardTitle
        head="Detail Riwayat Screening CKDSC"
        body="Menampilkan informasi lengkap mengenai riwayat screening CKDSC yang telah dilakukan oleh pasien penyakit ginjal kronis. Halaman ini berisi detail evaluasi self-care pasien untuk mendukung pemantauan dan pengelolaan kondisi kesehatan secara menyeluruh."
      />
      <DashboardMedicalHistoryScreeningCKDSCDetailWrapper id={id} />
    </section>
  );
}
