import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import ProfessionalPresentation from "@/components/ProfessionalPresentation";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustSection />
        <ProfessionalPresentation />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
