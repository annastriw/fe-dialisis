import GeneralTitle from "@/components/atoms/typography/GeneralTitle";
import GeneralPGKWrapper from "@/components/organisms/general/pgk/GeneralPGKWrapper";

export default function GeneralPGKPage() {
  return (
    <section className="min-h-screen px-4 py-10 sm:px-6 lg:px-20">
      <GeneralTitle title="Penyakit Ginjal Kronik" />
      <GeneralPGKWrapper />
    </section>
  );
}
