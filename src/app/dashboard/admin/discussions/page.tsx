import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminDiscussionWrapper from "@/components/organisms/dashboard/admin/discussions/DashboardAdminDiscussions";

export default function DashboardAdminDiscussionsPage() {
  return (
    <section>
      <DashboardTitle
        head="Forum Komunitas"
        body="Kelola dan pantau daftar topik diskusi antara pasien dan tenaga medis, tambahkan topik baru, atau lihat riwayat diskusi dengan mudah."
      />
      <DashboardAdminDiscussionWrapper />
    </section>
  );
}

