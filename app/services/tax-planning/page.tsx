import { CheckCircle, Sparkles, ShieldCheck, TrendingUp,Phone, ArrowRight, Download,  } from 'lucide-react'
import { Button } from "@/components/ui/button" // Added Button import
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import taxPlanningService from "./data"
import CtaSection from '@/components/ui/CtaSection'

export default function TaxPlannig() {
  const service = taxPlanningService // Use the directly imported service data

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
      {/* Final CTA Section */}
     
     <CtaSection
  title="Maximize Your Savings with Expert Tax Planning"
  serviceName="Tax Planning"
  description="Plan your taxes smartly and legally reduce your tax burden with guidance from India’s most trusted"
/>

    </div>
  )
}
