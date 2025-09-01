import Footer from "@/components/atoms/footer/Footer";
import Navbar from "@/components/organisms/navbar/Navbar";

export default async function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="pad-x-xl py-6 md:py-8 lg:py-10">
        {children}
      </div>
      <Footer />
    </>
  );
}
