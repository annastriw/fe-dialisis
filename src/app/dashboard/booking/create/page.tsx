import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardCreateBookingWrapper from "@/components/organisms/dashboard/booking/DashboardCreateBookingWrapper";

export default function DashboardBookingCreatePage() {
  return (
    <section>
      <DashboardTitle
        head="Tambah Booking Baru"
        body="Lengkapi form berikut untuk membuat booking baru dan akan terintegrasi dengan WhatsApp"
      />
      <DashboardCreateBookingWrapper />
    </section>
  );
}
