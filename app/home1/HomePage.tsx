import Link from "next/link";
import { Manrope } from "next/font/google";
import { ArrowRight } from "lucide-react";
import ExpertNetwork from "@/components/home1/ExpertNetwork";
import ExpertGuidance from "@/components/home1/ExpertGuidance";
import ExpertConsultation from "@/components/home1/ExpertConsultation";
import LegalComparison from "@/components/home1/LegalComparison";
import LegalJourney from "@/components/home1/LegalJourney";
import ReviewShowcase from "@/components/home1/ReviewShowcase";
import ServiceDirectory from "@/components/home1/ServiceDirectory";
import SmoothHomepageScroll from "@/components/home1/SmoothHomepageScroll";
import SupportSection from "@/components/home1/SupportSection";
import TrademarkClassLibrary from "@/components/home1/TrademarkClassLibrary";
import TrustSection from "@/components/home1/TrustSection";
import ServiceTicker from "./ServiceTicker";
import styles from "./home1.module.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-home1",
});

export default function HomePage() {
  return (
    <div className={`${manrope.variable} ${styles.page}`}>
      <SmoothHomepageScroll />
      <section className={styles.hero}>
        <div className={styles.heroStage}>
          <div className={styles.backdrop} aria-hidden="true" />
          <div className={styles.shade} aria-hidden="true" />

          <div className={styles.content}>
            <div className={styles.brandNote}>
              <span className={styles.brandRule} />
              <p>Legal Dhara</p>
              <span>Simplifying Legal Solutions for You.</span>
            </div>

            <h1 className={styles.headline}>
              <span>Legal expertise.</span>
              <strong>Without the extra fees.</strong>
            </h1>

            <p className={styles.zeroFees}>
              <span>₹0 service charges.</span>
              <span>₹0 consultation charges.</span>
            </p>

            <p className={styles.supportingCopy}>
              Pay only applicable government fees.
              <br />
              Expert guidance from consultation to filing.
            </p>

            <div className={styles.actions}>
              <Link href="/contact" className={styles.primaryAction}>
                Get Free Consultation
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/services" className={styles.secondaryAction}>
                Explore Services
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className={styles.mobileArtworkSpace} aria-hidden="true" />
        </div>

        <div className={styles.serviceChooser}>
          <div className={styles.chooserHeading}>
            <p>Start with the right service</p>
            <h2>What would you like to get done?</h2>
          </div>

          <ServiceTicker />
        </div>
      </section>
      <ExpertGuidance />
      <ExpertNetwork />
      <LegalJourney />
      <LegalComparison />
      <ServiceDirectory />
      <TrademarkClassLibrary />
      <TrustSection />
      <ReviewShowcase />
      <ExpertConsultation />
      <SupportSection />
    </div>
  );
}
