import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardGeneral from "@/components/organisms/dashboard/general/DashboardGeneral";

export default function GeneralPage() {
  return (
    <section>
      <DashboardTitle
        head="Penjelasan Umum"
        body="Kenali penyakit ginjal kronis, faktor risiko, gejala, dan opsi perawatan seperti Hemodialisis dan CAPD. Panduan ini membantu Anda menjaga kesehatan ginjal dengan aman dan efektif."
      />
      <DashboardGeneral />
    </section>
  );
}

