import { ArrowRightLeft, CheckCircle2, FileText, Clock, Shield, Award, AlertCircle, Scale } from 'lucide-react'

import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import Link from 'next/link'
import trademarkAssignmentService from "./data"
import { Card , CardContent } from "@/components/ui/card"
import { Accordion , AccordionContent ,AccordionItem ,AccordionTrigger } from "@/components/ui/accordion"

export default function trademarkAssignment() {
  const service = trademarkAssignmentService // Use the directly imported service data

  // Dynamically build sections based on available data
const sectionss = [
    { id: "overview", title: "Overview" },
    { id: "assignment-types-visual", title: "Types" },
    { id: "definition-of-trademark-assignment-agreement", title: "Description" },
    { id: "importance-of-proper-documentation", title: "Documentation" },
    { id: "why-is-trademark-assignment-important-", title: "Benefits" },
    { id: "requirements-for-the-assignor", title: "Eligibility" },
    { id: "documents-required-for-assignment-of-trademark", title: "documents-required" },
    { id: "trademark-assignment-process-in-india", title: "process" },
    { id: "advantages-of-trademark-assignment", title: "Advantages" },
    { id: "how-to-submit-form-tm-p-for-transferring-trademark-ownership", title: "Ownership" },
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
       
      
         <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#BC9139] rounded-2xl mb-6">
                <ArrowRightLeft className="w-8 h-8 sm:w-10 sm:h-10 text-[#111111]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service?.title || 'Trademark Assignment'}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service?.description || ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <FileText className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">Form TM-P</div>
                <div className="text-sm text-gray-300">Required Form</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Clock className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">4-8</div>
                <div className="text-sm text-gray-300">Months Process</div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

          <div className="bg-[#BC9139]/10 border-l-4 border-[#BC9139] p-6 rounded-r-xl mt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-2">Important Notice</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  All trademark assignments must be filed within six months from the date of execution as per Rule 75(1) of the Trade Marks Rules, 2017. Late filing requires justification and Registrar approval.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Assignment Types Visual */}
        <section id="assignment-types-visual" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
            Types of Assignment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <ArrowRightLeft className="w-12 h-12 mx-auto mb-4 text-[#BC9139]" />
              <h3 className="text-lg font-bold mb-2">Complete</h3>
              <p className="text-sm text-gray-300">All rights transferred</p>
            </div>
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <Scale className="w-12 h-12 mx-auto mb-4 text-[#BC9139]" />
              <h3 className="text-lg font-bold mb-2">Partial</h3>
              <p className="text-sm text-gray-300">Limited rights transfer</p>
            </div>
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <Award className="w-12 h-12 mx-auto mb-4 text-[#BC9139]" />
              <h3 className="text-lg font-bold mb-2">With Goodwill</h3>
              <p className="text-sm text-gray-300">Includes reputation</p>
            </div>
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <FileText className="w-12 h-12 mx-auto mb-4 text-[#BC9139]" />
              <h3 className="text-lg font-bold mb-2">Without Goodwill</h3>
              <p className="text-sm text-gray-300">Independent transfer</p>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {sections.map((section, sectionIdx) => {
          const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
          const sectionList = (section as any)?.list || [];
          
          const isStepsSection = section?.title?.toLowerCase().includes('step') || section?.title?.toLowerCase().includes('process');
          const isTypesSection = section?.title?.toLowerCase().includes('types of');
          const isDocumentsSection = section?.title?.toLowerCase().includes('documents');
          const isAdvantagesSection = section?.title?.toLowerCase().includes('advantages');

          return (
            <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
                {section?.title || 'Section'}
              </h2>

              {isStepsSection ? (
                <div className="space-y-6">
                  {sectionList.map((item: string, idx: number) => {
                    if (item.startsWith('Step')) {
                      const [stepTitle, ...stepDesc] = item.split(' – ');
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
                                {stepDesc.join(' – ')}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    );
                  })}
                </div>
              ) : isTypesSection ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#E7E2D8]/20 to-[#BC9139]/10 rounded-xl p-6 border border-[#BC9139]/30 hover:shadow-lg transition-shadow">
                        <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-3">{title.trim()}</h3>
                        {desc.length > 0 && desc[0].trim() && (
                          <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : isDocumentsSection ? (
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-r from-[#111111] to-[#252525] text-white rounded-xl">
                      <FileText className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              ) : isAdvantagesSection ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-5 border-l-4 border-[#BC9139]">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="text-base font-semibold text-[#111111] mb-1">{title.trim()}</h3>
                            {desc.length > 0 && desc[0].trim() && (
                              <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => {
                    const isBullet = item.startsWith('•');
                    const hasDescription = item.includes(':');
                    
                    if (hasDescription && !isBullet) {
                      const [title, ...desc] = item.split(': ');
                      return (
                        <div key={idx} className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-6 border-l-4 border-[#BC9139]">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h3 className="text-base font-semibold text-[#111111] mb-2">{title.trim()}</h3>
                              {desc.length > 0 && desc[0].trim() && (
                                <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    if (isBullet) {
                      return (
                        <div key={idx} className="flex items-start gap-3 ml-6">
                          <span className="text-[#BC9139] text-lg flex-shrink-0">•</span>
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.substring(2)}</p>
                        </div>
                      );
                    }

                    return (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E7E2D8]/5 to-transparent rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#BC9139] flex-shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}

        {/* FAQs Section */}
        
          <section id="faqs" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
              Frequently Asked Questions
            </h2>
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs?.map((item, index) => (
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
          </section>
      

        {/* CTA Section */}
       <section
  id="cta"
  className="bg-deep-blue rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl"
>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
    Ready to Transfer Your Trademark Ownership?
  </h2>
  <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
    Ensure a smooth and legally compliant trademark assignment process with our expert team.
    Secure your brand ownership transfer with proper documentation and government filing support.
  </p>

  <Link
    href="/contact"
    className="inline-block bg-white text-[#111111] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg"
  >
    Start Trademark Assignment
  </Link>
</section>
      </div>
    </div>
    
     
      {/* Final CTA Section */}
     
    </div>
  )
}
