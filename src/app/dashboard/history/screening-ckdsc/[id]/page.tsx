import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistoryScreeningCKDSCDetailWrapper from "@/components/organisms/dashboard/history/DashboardHistoryScreeningCKDSCDetailWrapper";

export default function Page({ params }: any) {
  const { id } = params;

  return (
    <section>
      <DashboardTitle
        head="Detail Riwayat Screening CKDSC"
        body="Menampilkan informasi lengkap mengenai hasil screening CKDSC (Chronic Kidney Disease Self-Management). Halaman ini membantu tenaga kesehatan dan pasien dalam mengevaluasi tingkat manajemen diri terhadap penyakit ginjal kronik secara menyeluruh."
      />
      <DashboardHistoryScreeningCKDSCDetailWrapper id={id} />
    </section>
  );
}
