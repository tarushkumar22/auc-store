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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
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
      </main>
      <Footer />
      <MobileNav />
    </>
  );
}
