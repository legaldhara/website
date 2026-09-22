
import { Calculator, CheckCircle2, FileText, Clock, Shield, AlertCircle, HelpCircle } from 'lucide-react'

import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import incomeTaxFilingService from "./data"

export default function ItrFiling() {
  const service = incomeTaxFilingService // Use the directly imported service data


  const sectionss = [
    { id: "overview", title: "Overview" },
    { id: "sources-of-income-for-itr", title: "sources" },
    { id: "benefits-of-income-tax-return-filing", title: "Benefits" },
    { id: "who-should-file-itr-", title: "Process" },
    { id: "documents-required-for-itr-filing", title: "Documents Required" },
    { id: "eligibility-criteria-for-itr-filing", title: "Eligibility" },
    { id: "steps-income-tax-return-e-filing-procedure", title: "steps" },
    { id: "types-of-itr-forms-their-applicability", title: "Types" },
    { id: "income-tax-return-filing-deadlines-penalties", title: "Penalties" },
    { id: "why-choose-LegalDhara-for-itr-filing-", title: "Why Choose LegalDhara" },
    { id: "faqs", title: "FAQs" },
  ]

  const introduction = service?.details?.overview1?.introduction || [];
  const whatIs = service?.details?.overview1?.whatIs || [];
  const sections = service?.details?.sections || [];
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}

      <SectionNavigation sections={sectionss} />

      {/* Overview Section */}
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-[#071B34] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#EAB308] rounded-2xl mb-6">
                  <Calculator className="w-8 h-8 sm:w-10 sm:h-10 text-[#071B34]" />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  {service?.title || 'Income Tax Filing'}
                </h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  {service?.description || ''}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <Clock className="w-8 h-8 text-[#EAB308] mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">July 31</div>
                  <div className="text-sm text-gray-300">Filing Deadline</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                  <Shield className="w-8 h-8 text-[#EAB308] mb-3" />
                  <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">100%</div>
                  <div className="text-sm text-gray-300">Secure Filing</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">

          {/* Overview Section */}
          <section id="overview" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#071B34] mb-6">Overview</h2>

            <div className="space-y-6">
              {introduction.length > 0 && (
                <div>
                  <h3 className="text-xl font-semibold text-[#071B34] mb-4">Introduction</h3>
                  <div className="space-y-4">
                    {introduction.map((para, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {whatIs.length > 0 && (
                <div className="bg-[#EAB308]/10 border-l-4 border-[#EAB308] p-6 rounded-r-xl mt-6">
                  <h3 className="text-lg font-semibold text-[#071B34] mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#EAB308]" />
                    What is ITR Filing?
                  </h3>
                  <div className="space-y-2">
                    {whatIs.map((para, idx) => (
                      <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Dynamic Sections */}
          {sections.map((section, sectionIdx) => {
            const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
            const sectionList = (section as any)?.list || [];

            // Check if this is the steps section
            const isStepsSection = section?.title?.toLowerCase().includes('steps') || section?.title?.toLowerCase().includes('procedure');

            // Check if this is a simple list (5 items or less) vs detailed list
            const isSimpleList = sectionList.length <= 5 && !sectionList.some((item: any) => item.includes('–') || item.includes(':'));

            return (
              <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
                  {section?.title || 'Section'}
                </h2>

                {/* Steps Section - Special formatting */}
                {isStepsSection ? (
                  <div className="space-y-6">
                    {sectionList.map((item: any, idx: number) => {
                      if (item.startsWith('Step')) {
                        const [stepTitle, ...stepDesc] = item.split(' – ');
                        return (
                          <div key={idx} className="flex gap-6">
                            <div className="flex-shrink-0">
                              <div className="w-12 h-12 bg-[#EAB308] rounded-full flex items-center justify-center text-[#071B34] font-bold text-lg">
                                {stepTitle.match(/\d+/)?.[0]}
                              </div>
                            </div>
                            <div className="flex-1 pt-2">
                              <h3 className="text-lg font-semibold text-[#071B34] mb-2">
                                {stepTitle.replace(/^Step\s*\d+:\s*/, '')}
                              </h3>
                              {stepDesc.length > 0 && (
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                  {stepDesc.join(' – ')}
                                </p>
                              )}
                            </div>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>

                ) : isSimpleList ? (
                  /* Simple List - Grid cards */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sectionList.map((item: any, idx: number) => (
                      <div key={idx} className="bg-gradient-to-br from-[#F2C79A]/20 to-[#EAB308]/10 rounded-xl p-5 border border-[#EAB308]/30 flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0" />
                        <p className="text-sm font-medium text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* Detailed List */
                  <div className="space-y-4">
                    {sectionList.map((item: any, idx: number) => {
                      const hasDescription = item.includes('–') || item.includes(':');
                      const isBullet = item.startsWith('•');
                      const isHeading = !isBullet && !hasDescription && item.endsWith(':');

                      if (isHeading) {
                        return (
                          <h3 key={idx} className="text-base sm:text-lg font-semibold text-[#071B34] mt-4 mb-2">
                            {item}
                          </h3>
                        );
                      }

                      if (hasDescription) {
                        const [title, ...desc] = item.split(/–|:/);
                        return (
                          <div key={idx} className="bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-xl p-5 border-l-4 border-[#EAB308]">
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                              <div>
                                <h3 className="text-base font-semibold text-[#071B34] mb-1">{title.trim()}</h3>
                                {desc.length > 0 && (
                                  <p className="text-sm text-gray-700 leading-relaxed">{desc.join(':').trim()}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div key={idx} className={`flex items-start gap-3 ${isBullet ? 'ml-4' : 'p-4 bg-gradient-to-r from-[#F2C79A]/5 to-transparent rounded-lg'}`}>
                          {isBullet ? (
                            <>
                              <span className="text-[#EAB308] text-lg flex-shrink-0">•</span>
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item.substring(2)}</p>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-5 h-5 text-[#EAB308] flex-shrink-0 mt-1" />
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                            </>
                          )}
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
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {service?.details?.faqs1?.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-[#EAB308]/50 transition-colors">
                  <h3 className="text-base sm:text-lg font-semibold text-[#071B34] mb-3 flex items-start gap-3">
                    <HelpCircle className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                    {faq?.question || ''}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed pl-9">
                    {faq?.answer || ''}
                  </p>
                </div>
              ))}
            </div>
          </section>


          {/* CTA Section */}
          <section id="cta"
            className="bg-gradient-to-r from-[#071B34] via-[#0a2847] to-[#123765] rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to File Your Income Tax Return?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Get expert assistance from our CA team and file your ITR accurately before the deadline.
            </p>
            <button className="bg-[#EAB308] text-[#071B34] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-yellow-400 transition-colors shadow-lg">
              Start Filing Your ITR
            </button>
          </section>

        </div>
      </div>

    </div>
  )
}
