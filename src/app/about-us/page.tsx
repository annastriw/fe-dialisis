"use client";

import Footer from "@/components/atoms/footer/Footer";
import GeneralTitle from "@/components/atoms/typography/GeneralTitle";
import AboutUsWrapper from "@/components/organisms/about-us/AboutUsWrapper";
import Navbar from "@/components/organisms/navbar/Navbar";

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="px-4 sm:px-6 md:px-10 lg:px-16 py-12">
        <section className="max-w-6xl mx-auto space-y-10">
          <GeneralTitle title="Tentang Kami" />
          <AboutUsWrapper />
        </section>
      </main>
      <Footer />
    </>
  );
}
