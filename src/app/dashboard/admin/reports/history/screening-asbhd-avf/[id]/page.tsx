// src/app/dashboard/admin/reports/history/screening-asbhd-avf/[id]/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardAdminHistoryScreeningASBHDAVFDetailWrapper from "@/components/organisms/dashboard/admin/reports/history/screening-asbhd-avf/DashboardAdminHistoryScreeningASBHDAVFDetailWrapper";

interface PageProps {
  params: { id: string };
}

// Next.js 13 App Router: page component bisa async untuk mendukung data fetching
export default async function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <section>
      <DashboardTitle
        head="Detail Riwayat Screening ASBHD-AVF"
        body="Menampilkan informasi lengkap mengenai riwayat screening ASBHD-AVF yang telah dilakukan oleh pasien hemodialisis. Halaman ini berisi detail evaluasi self-care pada pasien dengan arteriovenous fistula untuk mendukung pemantauan kondisi kesehatan secara menyeluruh."
      />
      <DashboardAdminHistoryScreeningASBHDAVFDetailWrapper id={id} />
    </section>
  );
}
