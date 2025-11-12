// src/app/dashboard/history/screening-ckdsc/[id]/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistoryScreeningCKDSCDetailWrapper from "@/components/organisms/dashboard/history/DashboardHistoryScreeningCKDSCDetailWrapper";

// Sesuaikan tipe props dengan App Router
interface PageProps {
  params: Promise<{ id: string }>;
}

// Page component async untuk kompatibilitas server-side fetching
export default async function Page({ params }: PageProps) {
  // Tunggu params karena sekarang bertipe Promise
  const { id } = await params;

  return (
    <section className="space-y-6">
      <DashboardTitle
        head="Detail Riwayat Screening CKDSC"
        body="Menampilkan informasi lengkap mengenai hasil screening CKDSC (Chronic Kidney Disease Self-Management). Halaman ini membantu tenaga kesehatan dan pasien dalam mengevaluasi tingkat manajemen diri terhadap penyakit ginjal kronik secara menyeluruh."
      />
      <DashboardHistoryScreeningCKDSCDetailWrapper id={id} />
    </section>
  );
}
