// src/app/dashboard/history/screening-asbhd-avf/[id]/page.tsx
import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistoryScreeningASBHDAVFDetailWrapper from "@/components/organisms/dashboard/history/DashboardHistoryScreeningASBHDAVFDetailWrapper";

interface PageProps {
  params: { id: string };
}

// Page component dibuat async untuk kompatibilitas App Router
export default async function Page({ params }: PageProps) {
  const { id } = params;

  return (
    <section className="space-y-6">
      <DashboardTitle
        head="Detail Riwayat Screening ASBHD-AVF"
        body="Menampilkan informasi lengkap mengenai hasil screening ASBHD-AVF (Assessment of Self-Care Behaviours with Arteriovenous Fistula). Halaman ini memuat detail perilaku perawatan diri pasien dalam menjaga fistula AV untuk mendukung terapi hemodialisis yang optimal."
      />
      <DashboardHistoryScreeningASBHDAVFDetailWrapper id={id} />
    </section>
  );
}
