import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminTestWrapper from "@/components/organisms/dashboard/admin/test/DashboardAdminTestWrapper";

export default function DashboardAdminTestsPage() {
  return (
    <section>
      <DashboardTitle
        head="Daftar Tes"
        body="Kelola dan pantau daftar pre-test dan post-test, pastikan setiap tes tersedia dan terorganisir dengan baik untuk mendukung proses pembelajaran pengguna."
      />
      <DashboardAdminTestWrapper />
    </section>
  );
}

