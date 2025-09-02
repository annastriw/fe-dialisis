import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistoryScreeningDetailWrapper from "@/components/organisms/dashboard/history/DashboardHistoryScreeningDetailWrapper";

interface DashboardHistoryScreeningDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardHistoryScreeningDetailPage({
  params,
}: DashboardHistoryScreeningDetailPageProps) {
  const { id } = await params;
  return (
    <section>
      <DashboardTitle
        head="Detail Riwayat Screening"
        body="Halaman ini menampilkan informasi lengkap mengenai hasil screening yang telah Anda lakukan."
      />
      <DashboardHistoryScreeningDetailWrapper id={id} />
    </section>
  );
}
