import GeneralTitle from "@/components/atoms/typography/GeneralTitle";
import GeneralHemodialisisWrapper from "@/components/organisms/general/hemodialisis/GeneralHemodialisisWrapper";

export default function GeneralHemodialisisPage() {
  return (
    <section className="min-h-screen px-4 py-10 sm:px-6 lg:px-20">
      <GeneralTitle title="Hemodialisis" />
      <GeneralHemodialisisWrapper />
    </section>
  );
}
