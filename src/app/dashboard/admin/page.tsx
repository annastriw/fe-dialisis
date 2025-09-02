import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminWrapper from "@/components/organisms/dashboard/admin/DashboardAdminWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Admin | Dialisis Connect Edu",
};

export default function DashboardAdminPage() {
  return (
    <>
      <DashboardTitle
        head="Beranda Admin"
        body="Selamat datang di beranda admin Dialisis Connect Edu. Kelola forum, laporan, dan akun pengguna dengan mudah untuk memastikan pengalaman pasien dan tenaga medis berjalan optimal."
      />
      <DashboardAdminWrapper />
    </>
  );
}

