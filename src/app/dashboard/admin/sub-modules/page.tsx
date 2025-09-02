import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminSubModulesWrapper from "@/components/organisms/dashboard/admin/sub-modules/DashboardAdminSubModules";

export default function DashboardAdminSubModulesPage() {
  return (
    <section>
      <DashboardTitle
        head="Materi"
        body="Pantau dan kelola daftar materi dari modul yang tersedia agar konten tetap relevan dan bermanfaat bagi pasien."
      />
      <DashboardAdminSubModulesWrapper />
    </section>
  );
}

