import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminUsersWrapper from "@/components/organisms/dashboard/admin/users/DashboardAdminUsersWrapper";

export default function DashboardAdminUsersPage() {
  return (
    <section>
      <DashboardTitle
        head="Pengguna"
        body="Kelola akun pengguna termasuk pasien dan tenaga medis, pantau informasi, lakukan reset password, atau hapus akun sesuai kebutuhan."
      />
      <DashboardAdminUsersWrapper />
    </section>
  );
}

