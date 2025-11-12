// src/app/dashboard/medical/reports/history/screening-asbhd-avf/[id]/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardMedicalHistoryScreeningASBHDAVFDetailWrapper from "@/components/organisms/dashboard/medical/reports/history/screening-asbhd-avf/DashboardMedicalHistoryScreeningASBHDAVFDetailWrapper";

// Sesuaikan tipe props dengan App Router
interface PageProps {
  params: Promise<{ id: string }>;
}

// Page component dibuat async untuk kompatibilitas server-side fetching
export default async function Page({ params }: PageProps) {
  // Tunggu params karena sekarang bertipe Promise
  const { id } = await params;

  return (
    <section className="space-y-6">
      <DashboardTitle
        head="Detail Riwayat Screening ASBHD-AVF"
        body="Menampilkan informasi lengkap mengenai riwayat screening ASBHD-AVF yang telah dilakukan oleh pasien hemodialisis. Halaman ini berisi detail evaluasi self-care pada pasien dengan arteriovenous fistula untuk mendukung pemantauan kondisi kesehatan secara menyeluruh."
      />
      <DashboardMedicalHistoryScreeningASBHDAVFDetailWrapper id={id} />
    </section>
  );
}
