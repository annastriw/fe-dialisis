import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistoryPostTestDetailWrapper from "@/components/organisms/dashboard/history/DashboardHistoryPostTestDetailWrapper";

interface DashboardHistoryPostTestPageParams {
  params: Promise<{ id: string }>;
}

export default async function DashboardHistoryPosTestDetailPage({
  params,
}: DashboardHistoryPostTestPageParams) {
  const { id } = await params;
  return (
    <section>
      <DashboardTitle
        head="Detail Riwayat Post Test"
        body="Halaman ini menampilkan informasi lengkap mengenai hasil post test yang telah Anda ikuti."
      />
      <DashboardHistoryPostTestDetailWrapper id={id} />
    </section>
  );
}
