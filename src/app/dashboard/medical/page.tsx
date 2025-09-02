import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalWrapper from "@/components/organisms/dashboard/medical/DashboardMedicalWrapper";

export default function MedicalDashboardPage() {
  return (
    <section>
      <DashboardTitle
        head="Beranda Nakes"
        body="Selamat datang, tenaga kesehatan! Akses informasi dan fitur utama di sini."
      />
      <DashboardMedicalWrapper />
    </section>
  );
}
