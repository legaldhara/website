import HomeClosingCta from "@/components/home/HomeClosingCta";
import HomeHero from "@/components/home/HomeHero";
import LazyClassFinder from "@/components/home/LazyClassFinder";
import LazyContactForm from "@/components/home/LazyContactForm";
import ProcessLedger from "@/components/home/ProcessLedger";
import ServiceFamilies from "@/components/home/ServiceFamilies";
import TrustPanel from "@/components/home/TrustPanel";
import TalkToExpertButton from "@/components/TalkToExpertButton";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeHero />
      <ServiceFamilies />
      <ProcessLedger />
      <LazyClassFinder />
      <TrustPanel />
      <LazyContactForm />
      <HomeClosingCta />
      <TalkToExpertButton />
    </main>
  );
}
