import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminBookingWrapper from "@/components/organisms/dashboard/admin/booking/DashboardAdminBookingWrapper";

export default function DashboardAdminBookingPage() {
  return (
    <section>
      <DashboardTitle
        head="Riwayat Booking"
        body="Menampilkan riwayat booking dari pengguna"
      />
      <DashboardAdminBookingWrapper />
    </section>
  );
}
