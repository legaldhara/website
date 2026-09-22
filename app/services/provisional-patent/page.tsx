"use client"

import { CheckCircle,Phone, ArrowRight, Download,  } from 'lucide-react'
import { Clock, CheckCircle2, FileText, Shield, Award, AlertCircle, HelpCircle, Calendar, Lightbulb, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button" // Added Button import
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import provisionalPatentService from "./data"
import CtaSection from '@/components/ui/CtaSection'

export default function provisionalPatent() {
  const service = provisionalPatentService // Use the directly imported service data

  // Dynamically build sections based on available data
  const sectionss = [
    { id: "overview", title: "Overview" },
    { id: "timeline-visual", title: "Timeline-Visual" },
    { id: "what-is-a-provisional-patent-application-", title: "what is a provisional patent" },
    { id: "purpose-of-filing-a-provisional-patent", title: "Who Need this" },
    { id: "legal-framework-in-india", title: "Legal Framework in india" },
    { id: "how-provisional-patents-work-in-india", title: "how work in india" },
    { id: "comparison-with-international-and-indian-systems", title: "comparison " },
    { id: "understanding-provisional-patent-applications", title: "understanding " },
    { id: "difference-between-provisional-and-complete-patents", title: "Differences" },
    { id: "why-file-a-provisional-patent-", title: " Why File this ?" },
    { id: "benefits-of-filing-a-provisional-patent-application", title: "Benefits" },
    { id: "eligibility-criteria-for-provisional-patent-applications", title: "Eligibilty" },
    { id: "cost-and-timeline-for-filing-a-provisional-patent-application-in-india", title: "Pricing" },
    { id: "faqs", title: "FAQs" },
  ]

 const introduction = service?.details?.overview1?.introduction || [];
  const sections = service?.details?.sections || [];
  const faqs = service?.details?.faqs || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
     
          <SectionNavigation sections={sectionss} />
        
    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <div className="bg-[#071B34] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#EAB308] rounded-2xl mb-6">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-[#071B34]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service?.title || 'Provisional Patent Application'}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service?.description || ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Calendar className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">12 Months</div>
                <div className="text-sm text-gray-300">Priority Period</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <TrendingUp className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">Low Cost</div>
                <div className="text-sm text-gray-300">Filing Option</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Overview Section */}
        <section id="overview" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#071B34] mb-6">Overview</h2>
          
          <div className="space-y-4">
            {introduction.length > 0 && introduction.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl mt-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Patent Pending Status</h3>
                <p className="text-sm sm:text-base text-blue-800 leading-relaxed">
                  Filing a provisional patent grants you 'Patent Pending' status, deterring competitors and establishing your priority rights while you develop your invention further.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Visual */}
        <section id="timeline-visual" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            12-Month Priority Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Month 0</div>
              <p className="text-sm font-semibold mb-2">File Provisional</p>
              <p className="text-xs opacity-90">Secure your priority date</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <Lightbulb className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Months 1-11</div>
              <p className="text-sm font-semibold mb-2">Develop & Test</p>
              <p className="text-xs opacity-90">Refine your invention</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <AlertCircle className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Month 12</div>
              <p className="text-sm font-semibold mb-2">File Complete</p>
              <p className="text-xs opacity-90">Deadline - No extensions</p>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {sections.map((section, sectionIdx) => {
          const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
          const sectionType = (section as any)?.type || 'list';
          const sectionContent = (section as any)?.content || '';
          const sectionList = (section as any)?.list || [];
          
          const isBenefitsSection = section?.title?.toLowerCase().includes('benefits');
          const isDifferenceSection = section?.title?.toLowerCase().includes('difference');
          const isComparisonSection = section?.title?.toLowerCase().includes('comparison');
          const isEligibilitySection = section?.title?.toLowerCase().includes('eligibility');
          const isCostSection = section?.title?.toLowerCase().includes('cost');

          return (
            <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
                {section?.title || 'Section'}
              </h2>

              {/* Paragraph Type */}
              {sectionType === 'paragraph' && sectionContent && (
                <div className="bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-xl p-6 border-l-4 border-[#EAB308]">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {sectionContent}
                  </p>
                </div>
              )}

              {/* Benefits Section - Grid layout */}
              {isBenefitsSection && sectionList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-xl p-5 border-l-4 border-[#EAB308]">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-base font-semibold text-[#071B34] mb-1">{title.trim()}</h3>
                            {desc.length > 0 && desc[0].trim() && (
                              <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : isDifferenceSection && sectionList.length > 0 ? (
                /* Difference Section - Comparison cards */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-r from-[#071B34] to-[#0a2847] text-white rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-base font-semibold mb-2">{title.trim()}</h3>
                            {desc.length > 0 && desc[0].trim() && (
                              <p className="text-sm text-gray-300 leading-relaxed">{desc.join(': ').trim()}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : isComparisonSection && sectionList.length > 0 ? (
                /* Comparison Section */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#F2C79A]/20 to-[#EAB308]/10 rounded-xl p-5 border border-[#EAB308]/30 hover:shadow-lg transition-shadow">
                        <h3 className="text-base font-semibold text-[#071B34] mb-3">{title.trim()}</h3>
                        {desc.length > 0 && desc[0].trim() && (
                          <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : isEligibilitySection && sectionList.length > 0 ? (
                /* Eligibility Section - Cards with icons */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#071B34] to-[#0a2847] text-white rounded-xl p-6">
                        <Shield className="w-10 h-10 text-[#EAB308] mb-4" />
                        <h3 className="text-base sm:text-lg font-semibold mb-3">{title.trim()}</h3>
                        {desc.length > 0 && desc[0].trim() && (
                          <p className="text-sm text-gray-300 leading-relaxed">{desc.join(': ').trim()}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : isCostSection && sectionList.length > 0 ? (
                /* Cost Section - Highlighted cards */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-r from-[#EAB308]/10 to-transparent rounded-xl p-6 border-l-4 border-[#EAB308]">
                        <div className="flex items-start gap-3">
                          <Award className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-base font-semibold text-[#071B34] mb-2">{title.trim()}</h3>
                            {desc.length > 0 && desc[0].trim() && (
                              <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : sectionList.length > 0 ? (
                /* Regular List */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => {
                    const hasDescription = item.includes(':');
                    
                    if (hasDescription) {
                      const [title, ...desc] = item.split(': ');
                      return (
                        <div key={idx} className="bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-xl p-6 border-l-4 border-[#EAB308]">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h3 className="text-base font-semibold text-[#071B34] mb-2">{title.trim()}</h3>
                              {desc.length > 0 && desc[0].trim() && (
                                <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F2C79A]/5 to-transparent rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#EAB308] flex-shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </section>
          );
        })}

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <section id="faqs" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
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
          </section>
        )}

      </div>
    </div>
    
     
      {/* Final CTA Section */}
     <CtaSection
  title="Secure Your Innovation Early with a Provisional Patent Application"
  serviceName="Provisional Patent Application"
  description="Protect your invention’s concept and establish priority before full patent filing with India’s leading"
/>

    </div>
  )
}
