import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminFAQWrapper from "@/components/organisms/dashboard/admin/faq/DashboardAdminFAQWrapper";

export default function DashboardAdminFAQs() {
  return (
    <section>
      <DashboardTitle
        head="FAQ"
        body="Kelola dan pantau daftar pertanyaan serta jawaban di FAQ, pastikan informasi yang tersedia jelas dan membantu pengguna."
      />
      <DashboardAdminFAQWrapper />
    </section>
  );
}

