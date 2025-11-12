import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardHistoryScreeningASBHDAVFDetailWrapper from "@/components/organisms/dashboard/history/DashboardHistoryScreeningASBHDAVFDetailWrapper";

export default function Page({ params }: any) {
  const { id } = params;

  return (
    <section>
      <DashboardTitle
        head="Detail Riwayat Screening ASBHD-AVF"
        body="Menampilkan informasi lengkap mengenai hasil screening ASBHD-AVF (Assessment of Self-Care Behaviours with Arteriovenous Fistula). Halaman ini memuat detail perilaku perawatan diri pasien dalam menjaga fistula AV untuk mendukung terapi hemodialisis yang optimal."
      />
      <DashboardHistoryScreeningASBHDAVFDetailWrapper id={id} />
    </section>
  );
}
