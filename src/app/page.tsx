import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import UserTypes from "@/components/UserTypes";
import StoreID from "@/components/StoreID";
import PlatformFeatures from "@/components/PlatformFeatures";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import TrustFeatures from "@/components/TrustFeatures";
import WhyAUC from "@/components/WhyAUC";
import Founder from "@/components/Founder";
import Memberships from "@/components/Memberships";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { faqs } from "@/components/faqData";
import Footer from "@/components/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Founder />
        <UserTypes />
        <StoreID />
        <PlatformFeatures />
        <Services />
        <HowItWorks />
        <TrustFeatures />
        <WhyAUC />
        <Memberships />
        <CTA />
        <FAQ />
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
