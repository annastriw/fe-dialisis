import GeneralTitle from "@/components/atoms/typography/GeneralTitle";
import GeneralCAPDWrapper from "@/components/organisms/general/capd/GeneralCAPDWrapper";

export default function GeneralCAPDPage() {
  return (
    <section className="min-h-screen px-4 py-10 sm:px-6 lg:px-20">
      <GeneralTitle title="Continuous Ambulatory Peritoneal Dialysis" />
      <GeneralCAPDWrapper />
    </section>
  );
}
