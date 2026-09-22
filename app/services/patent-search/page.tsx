
import { CheckCircle, Sparkles, ShieldCheck, TrendingUp, Handshake, Globe, Gavel, Phone, ArrowRight, Download, StampIcon, Gem, Rocket, GlobeLock } from 'lucide-react'

import { Button } from "@/components/ui/button" // Added Button import
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import indianPatentSearchService from "./data"
import CtaSection from '@/components/ui/CtaSection'

export default function PatentSearch() {
  const service = indianPatentSearchService // Use the directly imported service data

  // Dynamically build sections based on available data
  const sections = [
    service.details?.introductoryText || service.details?.whatIsTrademark
      ? { title: "Overview", id: "overview" }
      : null,
    service.details?.eligibilityCriteria || service.details?.whoCanApply
      ? { title: "Eligibility", id: "eligibility" }
      : null,
    service.details?.typesOfTrademarks ? { title: "Types", id: "types" } : null,
    service.price ? { title: "Fees", id: "fees" } : null,
    service.details?.requiredDocuments ? { title: "Documents", id: "documents" } : null,
    service.details?.ipComparison ? { title: "Differences", id: "differences" } : null,
    service.details?.whyRegisterDetailed ? { title: "Benefits", id: "benefits" } : null,
    service.details?.trademarkClasses ? { title: "Classes", id: "classes" } : null,
    service.details?.processSteps ? { title: "How to Register", id: "how-to-register" } : null,
    service.details?.trademarkSymbols ? { title: "Trademark Symbols", id: "trademark-symbols" } : null,
    service.details?.howWeAssist ? { title: "Why Choose Us", id: "why-choose-us" } : null,
    service.details?.faq ? { title: "FAQs", id: "faqs" } : null,
  ].filter(Boolean) as { title: string; id: string }[] // Filter out nulls and assert type

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
      {sections.length > 0 && (
        <div className="sticky py-3 top-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
          <SectionNavigation sections={sections} />
        </div>
      )}

      {/* Overview Section */}
           {/* Final CTA Section */}
      
  
      <CtaSection
  title="Ensure Your Idea is Truly Unique with a Patent Search"
  serviceName="Patent Search"
  description="Verify the originality of your innovation and avoid conflicts before filing, with India’s most reliable"
/>

    </div>
  )
}
