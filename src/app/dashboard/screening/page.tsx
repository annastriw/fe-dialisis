import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardScreeningWrapper from "@/components/organisms/dashboard/screening/DashboardScreeningWrapper";

export default function ScreeningPage() {
  return (
    <section>
      <DashboardTitle
        head="Screening"
        body="Lakukan berbagai screening kesehatan dengan mudah untuk memahami kondisi tubuh Anda dan mendapatkan rekomendasi yang tepat."
      />
      <DashboardScreeningWrapper />
    </section>
  );
}

