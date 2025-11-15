import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardBookingWrapper from "@/components/organisms/dashboard/booking/DashboardBookingWrapper";

export default function BookingPage() {
  return (
    <section>
      <DashboardTitle
        head="Booking Konsultasi"
        body="Menampilkan data riwayat booking konsultasi."
      />
      <DashboardBookingWrapper />
    </section>
  );
}
