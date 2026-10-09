import { CheckCircle,  Phone, ArrowRight, XCircle, CheckCircle2, FileText, Clock, Shield, Award, AlertCircle, TrendingUp, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button" // Added Button import
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import gstCancellationService from "./data" // Direct import

export default function GstCancellation() {
  const service = gstCancellationService // Use the directly imported service data

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


  const introduction = service?.details?.overview1?.introduction || [];
  const whatIs = service?.details?.overview1?.whatIs || [];
  const sectionss = service?.details?.sections || [];
   
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

      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#BC9139] rounded-2xl mb-6">
                <RefreshCw className="w-8 h-8 sm:w-10 sm:h-10 text-[#111111]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service?.title || 'GST Cancellation and Revocation'}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service?.description || ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Clock className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">7-14</div>
                <div className="text-sm text-gray-300">Working Days</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <FileText className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">REG-21</div>
                <div className="text-sm text-gray-300">Form Required</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Overview Section */}
        <section id="overview" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6">Overview</h2>
          
          <div className="space-y-6">
            {introduction.length > 0 && (
              <div>
                <h3 className="text-xl font-semibold text-[#111111] mb-4">How We Help</h3>
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
              <div className="bg-[#BC9139]/10 border-l-4 border-[#BC9139] p-6 rounded-r-xl mt-6">
                <h3 className="text-lg font-semibold text-[#111111] mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-[#BC9139]" />
                  What is GST Revocation?
                </h3>
                <div className="space-y-3">
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
        {sectionss.map((section, sectionIdx) => {
          const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
          const sectionList = (section as any)?.list || [];
          
          // Check if this is the steps section
          const isStepsSection = section?.title?.toLowerCase().includes('step') || section?.title?.toLowerCase().includes('process');
          
          // Check if it's timeframe section (has colons for time breakdown)
          const isTimeframeSection = section?.title?.toLowerCase().includes('timeframe');

          return (
            <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
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
            <div className="w-12 h-12 bg-[#BC9139] rounded-full flex items-center justify-center text-[#111111] font-bold text-lg">
              {stepTitle.match(/\d+/)?.[0]}
            </div>
          </div>
          <div className="flex-1 pt-2">
            <h3 className="text-lg font-semibold text-[#111111] mb-2">
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

              ) : isTimeframeSection ? (
                /* Timeframe Section - Timeline cards */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sectionList.map((item : any, idx :  number) => {
                    const [title, ...desc] = item.split(' – ');
                    const hasColon = title.includes(':');
                    const [label, timing] = hasColon ? title.split(':') : [title, ''];
                    
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Clock className="w-8 h-8 text-[#BC9139] flex-shrink-0" />
                          <div>
                            <h3 className="text-base font-semibold text-[#BC9139]">{label.trim()}</h3>
                            {timing && <p className="text-sm text-gray-300 mt-1">{timing.trim()}</p>}
                          </div>
                        </div>
                        {desc.length > 0 && (
                          <p className="text-sm text-gray-300 leading-relaxed mt-3">
                            {desc.join(' – ')}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Regular List Items */
                <div className="space-y-4">
                  {sectionList.map((item : any, idx : number) => {
                    const hasDescription = item.includes(':') || item.includes('–');
                    
                    if (hasDescription) {
                      const separator = item.includes(' – ') ? ' – ' : ':';
                      const [title, ...desc] = item.split(separator);
                      return (
                        <div key={idx} className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-6 border-l-4 border-[#BC9139]">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h3 className="text-base font-semibold text-[#111111] mb-2">{title.trim()}</h3>
                              {desc.length > 0 && desc[0].trim() && (
                                <p className="text-sm text-gray-700 leading-relaxed">{desc.join(separator).trim()}</p>
                              )}
                            </div>
                          </div>
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

        {/* Why Choose Us Highlight */}
        <section id="why-choose-us-highlight" className="bg-gradient-to-br from-[#111111] to-[#252525] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
            Why Choose LegalDhara?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="w-10 h-10 text-[#BC9139] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Experienced GST professionals handling your case
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-10 h-10 text-[#BC9139] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Quick Process</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Fast application filing and follow-up tracking
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="w-10 h-10 text-[#BC9139] mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% Compliance</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Ensure all documentation meets GST requirements
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <TrendingUp className="w-10 h-10 text-[#BC9139] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Post-Support</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Ongoing guidance for future GST compliance
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section id="important-notice" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-[#BC9139] flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-[#111111] mb-3">Important Notice</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                GST revocation must be applied within 30 days from the date of the cancellation order. Missing this deadline may result in permanent cancellation, requiring you to apply for fresh GST registration.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                All pending GST returns must be filed, and any outstanding dues must be cleared before the revocation application can be processed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
  id="cta"
  className="bg-gradient-to-r from-deep-blue via-deep-blue to-[#252525] rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl"
>
  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
    Need Help with GST Revocation?
  </h2>
  <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
    Don't let your GST cancellation affect your business. Get expert assistance and restore your registration within 7–14 working days.
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
    <div className="flex items-center gap-2 bg-white text-[#111111] px-6 py-3 rounded-lg font-semibold shadow-md">
      <Clock className="w-5 h-5 text-[#111111]" />
      <span>7–14 Working Days</span>
    </div>
    <div className="flex items-center gap-2 bg-white text-[#111111] px-6 py-3 rounded-lg font-semibold shadow-md">
      <CheckCircle2 className="w-5 h-5 text-[#111111]" />
      <span>Expert Support</span>
    </div>
  </div>

  <button className="bg-[#BC9139] text-[#111111] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-yellow-400 transition-colors shadow-lg">
    Apply for GST Revocation Now
  </button>
</section>

      </div>
    </div>

    

     
    </div>
  )
}
