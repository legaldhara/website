" use client ";
import { CheckCircle, Sparkles, ShieldCheck, TrendingUp,Phone, ArrowRight, Download, RefreshCw, CheckCircle2, FileText, Clock, Shield, Award, AlertCircle, Calendar, IndianRupee } from 'lucide-react'

import { Button } from "@/components/ui/button" // Added Button import
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import trademarkRenewalService from "./data"
import Link from 'next/link';

export default function trademarkRenewal() {
  const service = trademarkRenewalService // Use the directly imported service data

  // Dynamically build sections based on available data
  const sectionss = [
    { title: "Overview", id: "overview" },
    { title: "Timeline", id: "renewal-timeline" },
    { title: "Eligibility", id: "trademark-validity-and-renewal-period" },
    { title: "Benefits", id: "benefits-of-renewing-a-trademark" },
    { title: "Duration", id: "duration-and-deadline-for-trademark-renewal" },
    { title: "Grace period", id: "grace-period-for-renewal" },
    { title: "Documents required", id: "documents-required-for-trademark-renewal" },
    { title: "Forms required", id: "forms-required-for-online-trademark-renewal" },
    { title: "Process", id: "step-by-step-process-to-renew-a-trademark" },
    { title: "Pricing", id: "trademark-renewal-fees" },
    { title: "late Fees", id: "late-renewal-fees" },
    { title: "Why choose us", id: "why-choose-us" },
    // { title: "Overview", id: "overview" },
  ]


  const introduction = service?.details?.overview1?.introduction || [];
  const sections = service?.details?.sections || [];
  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
          <SectionNavigation sections={sectionss} />
       
      
       <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#071B34] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#EAB308] rounded-2xl mb-6">
                <RefreshCw className="w-8 h-8 sm:w-10 sm:h-10 text-[#071B34]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service?.title || 'Trademark Renewal'}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service?.description || ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Calendar className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">10 Years</div>
                <div className="text-sm text-gray-300">Validity Period</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Clock className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">6 Months</div>
                <div className="text-sm text-gray-300">Grace Period</div>
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

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl mt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-red-900 mb-2">Critical Reminder</h3>
                <p className="text-sm sm:text-base text-red-800 leading-relaxed">
                  Failure to renew your trademark within the grace period will result in permanent deletion from the register. You will lose all exclusive rights and may need to file a new trademark application from scratch.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Visual */}
        <section id="renewal-timeline" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Renewal Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">6 Months</div>
              <p className="text-sm">Before Expiry</p>
              <p className="text-xs mt-2 opacity-90">Ideal time to renew</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl p-6 text-center">
              <AlertCircle className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">On Expiry</div>
              <p className="text-sm">Grace Period Starts</p>
              <p className="text-xs mt-2 opacity-90">Additional fees apply</p>
            </div>
            <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">6 Months</div>
              <p className="text-sm">After Expiry</p>
              <p className="text-xs mt-2 opacity-90">Last chance to renew</p>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {sections.map((section, sectionIdx) => {
          const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
          // Fix TypeScript error by safely accessing list property
          const sectionList = (section as any)?.list || [];
          
          // Check if this is a step process section
          const isStepsSection = section?.title?.toLowerCase().includes('step');
          
          // Check if it's a benefits section (display in grid)
          const isBenefitsSection = section?.title?.toLowerCase().includes('benefits');
          
          // Check if it's documents/forms section
          const isDocumentsSection = section?.title?.toLowerCase().includes('documents') || section?.title?.toLowerCase().includes('forms');
          
          // Check if it's fees section
          const isFeesSection = section?.title?.toLowerCase().includes('fees');

          return (
            <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
                {section?.title || 'Section'}
              </h2>

              {/* Steps Section - Special numbered formatting */}
              {isStepsSection ? (
                <div className="space-y-6">
                  {sectionList.map((item: string, idx: number) => {
                    if (item.startsWith('Step')) {
                      const [stepTitle, ...stepDesc] = item.split(' – ');
                      const stepNumber = stepTitle.match(/\d+/)?.[0] || (idx + 1).toString();
                      return (
                        <div key={idx} className="flex gap-4 sm:gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EAB308] rounded-full flex items-center justify-center text-[#071B34] font-bold text-base sm:text-lg shadow-md">
                              {stepNumber}
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-base sm:text-lg font-semibold text-[#071B34] mb-2">{stepTitle}</h3>
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
              ) : isBenefitsSection ? (
                /* Benefits Section - Grid cards */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-xl p-5 border-l-4 border-[#EAB308]">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                          {item}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : isDocumentsSection ? (
                /* Documents/Forms Section - Card list */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-br from-[#071B34] to-[#0a2847] text-white rounded-xl">
                      <FileText className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              ) : isFeesSection ? (
                /* Fees Section - Highlighted cards */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-r from-[#EAB308]/10 to-transparent rounded-xl border-l-4 border-[#EAB308]">
                      <IndianRupee className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                /* Regular List Items */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F2C79A]/5 to-transparent rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-[#EAB308] flex-shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="bg-gradient-to-br from-[#071B34] to-[#0a2847] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Why Choose LegalDhara for Trademark Renewal?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Shield className="w-10 h-10 text-[#EAB308] mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% Compliance</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Complete adherence to trademark laws and regulations
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Clock className="w-10 h-10 text-[#EAB308] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Timely Reminders</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Proactive notifications before renewal deadlines
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Award className="w-10 h-10 text-[#EAB308] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Specialized IP attorneys handling your renewal
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <RefreshCw className="w-10 h-10 text-[#EAB308] mb-4" />
              <h3 className="text-lg font-semibold mb-2">Hassle-Free Process</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                Complete end-to-end renewal management
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-deep-blue rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-orange mb-4">
            Don't Let Your Trademark Expire!
          </h2>
          <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
            Renew your trademark before the deadline and maintain continuous protection for your valuable brand assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">10 Years Validity</span>
            </div>
            <div className="flex items-center gap-2 bg-brand-orange text-white px-6 py-3 rounded-lg">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Continuous Protection</span>
            </div>
          </div>
         <Link href="#">
          <button className="bg-brand-orange text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#0a2847] transition-colors shadow-lg">
            Renew Your Trademark Now
          </button>
        </Link>
        </section>
      </div>
    </div>
    
     
      {/* Final CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-deep-blue via-deep-blue to-gray-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">Secure Your Brand Today</h2>
            <p className="text-2xl text-blue-100">
              Don't wait – protect your valuable intellectual property with India's most trusted{" "}
              {service.name.toLowerCase()}
              service.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-white text-deep-blue hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Register Your {service.name}
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-blue font-bold px-12 py-6 rounded-2xl text-xl bg-transparent"
              >
                <Phone className="mr-3 h-6 w-6" />
                94244-40004
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-blue-100 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Transparent Process</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Guaranteed Results</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
