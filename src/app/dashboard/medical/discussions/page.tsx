import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalDiscussionWrapper from "@/components/organisms/dashboard/medical/discussions/DashboardMedicalDiscussionWrapper";

export default function DashboardMedicalDiscussionPage() {
  return (
    <section>
      <DashboardTitle
        head="Forum Komunitas"
        body="Terhubung dengan pasien dan tenaga medis lain, berdiskusi, berbagi pengalaman, serta mendapatkan tips profesional untuk mendukung perawatan dan edukasi."
      />
      <DashboardMedicalDiscussionWrapper />
    </section>
  );
}

