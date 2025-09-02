import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardModulesWrapper from "@/components/organisms/dashboard/modules/DashboardModulesWrapper";

export default function DashboardModulesPage() {
  return (
    <section>
      <DashboardTitle
        head="Modul Materi"
        body="Akses berbagai modul edukasi tentang penyakit ginjal, CAPD, dan Hemodialisis dalam bentuk video, booklet, dan artikel untuk mendukung pemahaman dan perawatan diri Anda."
      />
      <DashboardModulesWrapper />
    </section>
  );
}

