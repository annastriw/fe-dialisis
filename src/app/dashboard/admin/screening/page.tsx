import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardScreeningWrapper from "@/components/organisms/dashboard/admin/screening/DashboardScreeningWrapper";

export default function DashboardScreeningPage() {
  return (
    <section>
      <DashboardTitle
        head="Screening"
        body="Kelola daftar screening yang tersedia untuk pengguna, tambahkan atau sesuaikan jenis screening agar tetap relevan dan bermanfaat."
      />
      <DashboardScreeningWrapper />
    </section>
  );
}
