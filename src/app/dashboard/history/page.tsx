import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistoryWrapper from "@/components/organisms/dashboard/history/DashboardHistoryWrapper";

export default function HistoryPage() {
  return (
    <section>
      <DashboardTitle
        head="Riwayat"
        body="Telusuri riwayat screening, pre-test, dan post-test Anda untuk memantau kemajuan kesehatan dan pembelajaran secara mudah."
      />
      <DashboardHistoryWrapper />
    </section>
  );
}

