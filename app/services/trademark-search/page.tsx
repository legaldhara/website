"use client"
import {  Globe ,Search, CheckCircle2, FileText, Shield, AlertCircle,  Target,  } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, } from "@/components/ui/card"
import ServiceHeroForm from "@/components/service-hero-form"
import trademarkSearchService from "./data"
import Link from "next/link"
import CtaSection from "@/components/ui/CtaSection"
import TrademarkClassFinder from "@/components/ClassFinder/TrademarkClassFinder"


export default function TrademarkSearchPage() {
  const service = trademarkSearchService // Use the directly imported service data

  // Dynamically build sections based on available data
  const sectionss = [
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


   const introduction = service?.details?.overview1?.introduction || [];
  const sections = service?.details?.sections || [];
  const faqs = service?.details?.faqs || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
          {/* <SectionNavigation sections={sectionss} /> */}
      
      {/* Overview Section */}
     <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      {/* <div className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#BC9139] rounded-2xl mb-6">
                <Search className="w-8 h-8 sm:w-10 sm:h-10 text-[#111111]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service?.title || 'Trademark Search in India'}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                {service?.description || ''}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 bg-[#BC9139] px-4 py-2 rounded-lg">
                  <DollarSign className="w-5 h-5 text-[#111111]" />
                  <span className="text-sm font-semibold text-[#111111]">{service.price}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-[#BC9139]" />
                  <span className="text-sm font-semibold">{service.timeline}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Target className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">Fast</div>
                <div className="text-sm text-gray-300">1-2 Days Report</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Shield className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">Accurate</div>
                <div className="text-sm text-gray-300">Expert Analysis</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <TrademarkClassFinder />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Overview Section */}
        <section id="overview" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6">Overview</h2>
          
          <div className="space-y-4">
            {introduction.length > 0 && introduction.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Prevention is Better Than Cure</h3>
                <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
                  Conducting a trademark search before filing can save you from costly legal disputes, rejection fees, and rebranding expenses. Invest in a search to protect your investment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Search Types Visual */}
        <section id="search-types-visual" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
            Types of Searches We Conduct
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Wordmark Search", desc: "Brand names & slogans" },
              { icon: Target, title: "Logo Search", desc: "Visual designs & symbols" },
              { icon: Search, title: "Phonetic Search", desc: "Sound-alike marks" },
              { icon: Shield, title: "Class-Based Search", desc: "NICE Classification" },
              { icon: Globe, title: "Global Search", desc: "International databases" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#BC9139]" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dynamic Sections */}
        {sections.map((section, sectionIdx) => {
          const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
          const sectionList = (section as any)?.list || [];
          
          const isStepsSection = section?.title?.toLowerCase().includes('steps') || sectionList.some((item: string) => item.startsWith('Step'));
          const isTypesSection = section?.title?.toLowerCase().includes('types');
          const isBenefitsSection = section?.title?.toLowerCase().includes('benefits');
          const isDocumentsSection = section?.title?.toLowerCase().includes('documents');

          return (
            <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
                {section?.title || 'Section'}
              </h2>

              {/* Steps Section */}
              {isStepsSection && sectionList.length > 0 ? (
                <div className="space-y-6">
                  {sectionList.map((item: string, idx: number) => {
                    if (item.startsWith('Step')) {
                      const [stepTitle, ...stepDesc] = item.split(': ');
                      const stepNumber = stepTitle.match(/\d+/)?.[0] || (idx + 1).toString();
                      return (
                        <div key={idx} className="flex gap-4 sm:gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#BC9139] rounded-full flex items-center justify-center text-[#111111] font-bold text-base sm:text-lg shadow-md">
                              {stepNumber}
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-2">{stepTitle}</h3>
                            {stepDesc.length > 0 && (
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {stepDesc.join(': ')}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : isTypesSection && sectionList.length > 0 ? (
                /* Types Section - Cards with descriptions */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#E7E2D8]/20 to-[#BC9139]/10 rounded-xl p-6 border border-[#BC9139]/30 hover:shadow-lg transition-shadow">
                        <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-2">{title.trim()}</h3>
                        {desc.length > 0 && desc[0].trim() && (
                          <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : isDocumentsSection && sectionList.length > 0 ? (
                /* Documents Section - Simple cards */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl">
                      <FileText className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              ) : isBenefitsSection && sectionList.length > 0 ? (
                /* Benefits Section - Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-5 border-l-4 border-[#BC9139]">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : sectionList.length > 0 ? (
                /* Regular List */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-r from-[#E7E2D8]/5 to-transparent rounded-lg border-l-4 border-[#BC9139]">
                      <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}
       
      </div>

      
    </div>


      {/* FAQ Section */}
     
        <section id="faqs" className="py-20 bg-gradient-to-br from-white to-rang dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get answers to common questions about {service.name.toLowerCase()}
                </p>
              </div>
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm bg-rang dark:bg-gray-700 overflow-hidden"
                      >
                        <AccordionTrigger className="px-8 py-6 text-left hover:no-underline text-lg font-semibold text-deep-blue dark:text-white hover:text-deep-blue dark:hover:text-brand-orange transition-colors">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      

      {/* Final CTA Section */}
<CtaSection
  title="Check Your Brand Availability Today"
  serviceName="Trademark Search"
  description="Ensure your brand name is unique before registration. Conduct a professional trademark search with India's most trusted experts for accurate results."
/>


    </div>
  )
}
