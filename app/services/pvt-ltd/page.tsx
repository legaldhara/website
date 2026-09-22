
import { CheckCircle, Sparkles, ShieldCheck, TrendingUp,Phone, ArrowRight, Download,Building2,Clock ,CheckCircle2,FileText } from 'lucide-react'
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import privateLimitedCompanyService from "./data"
import Link from 'next/link'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Private Limited Company Registration in India | Legal Dhara - 0 Service Charge & Expert Support",
  description:
    "Register your Private Limited Company online with Legal Dhara — India’s most trusted LegalTech platform offering 0 service charge on company registration. Get complete support for name approval, DIN, MOA, AOA, and incorporation under MCA guidelines. Fast, transparent, and affordable company registration for startups and entrepreneurs across India.",
  keywords:
    "private limited company registration India, online company registration, 0 service charge company registration, free company registration India, Legal Dhara, company incorporation India, MCA registration, startup company registration, company formation, DIN and DSC registration, MOA AOA drafting, business registration, legal tech platform, register pvt ltd company, new company setup, company compliance, startup registration services, online legal assistance, private limited registration consultant",
};

export default function privateLimitedCompany() {
  const service = privateLimitedCompanyService // Use the directly imported service data

  // Dynamically build sections based on available data
   const sections = [
  { title: "overview", id: "Overview" },
  { title: "What is ?", id: "what-is-a-private-limited-company-pvt-ltd" },
  { title: "Types", id: "types-of-private-limited-company-pvt-ltd" },
  { title: "Requirements", id: "requirements-for-private-limited-company-registration" },
  { title: "Process", id: "8-quick-steps-to-register-a-pvt-ltd-company-in-india" },
  { title: "Documents Required", id: "documents-required-for-private-limited-company-registration" },
  { title: "fees", id: "govt-fees-for-pvt-ltd-company-registration" },
  { title: "Benefits", id: "benefits-of-private-limited-company-registration" },
  // { title: "faqs", id: "FAQs" },
] // Filter out nulls and assert type

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
     
          <SectionNavigation sections={sections} />
       

       <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#071B34] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#EAB308] rounded-2xl mb-6">
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#071B34]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
            
            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Clock className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">7-10</div>
                <div className="text-sm text-gray-300">Days Process</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <FileText className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">100%</div>
                <div className="text-sm text-gray-300">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
  {/* Overview Section */}
  <div id="overview" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
    <h2 className="text-2xl sm:text-3xl font-bold text-[#071B34] mb-6">Overview</h2>
    <div className="space-y-4 sm:space-y-6">
      {service.details?.overview111?.map((para, idx) => (
        <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
          {para.content}
        </p>
      ))}
    </div>
  </div>

  {/* Main Sections */}
  {service?.details?.sections?.map((section, idx) => {
    // Generate clean id from title
    const sectionId = section.title
      ? section.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")
      : `section-${idx}`;

    return (
      <div
        key={idx}
        id={sectionId}
        className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8"
      >
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
          <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
          {section.title}
        </h2>

        {/* Paragraph Section */}
        {section.type === "paragraph" && (
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {section.content}
            </p>

            {/* Subsections */}
            {(section as any).subSections && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mt-6">
                {(section as any).subSections.map((sub: any, subIdx: number) => (
                  <div
                    key={subIdx}
                    id={`${sectionId}-sub-${subIdx}`}
                    className="bg-gradient-to-br from-[#F2C79A]/20 to-[#EAB308]/10 rounded-xl p-4 sm:p-6 border border-[#EAB308]/30 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-[#071B34] mb-3">
                      {sub.subtitle}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{sub.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* List inside Paragraph */}
            {(section as any).list && (
              <div className="mt-6 space-y-3">
                {(section as any).list.map((item: any, listIdx: number) => (
                  <div key={listIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* List Section */}
        {section.type === "list" && (
          <div className="space-y-3 sm:space-y-4">
            {(section as any).content.map((item: any, listIdx: number) => {
              const isBold = item.includes(":") && !item.startsWith("•");
              return (
                <div key={listIdx} className="flex items-start gap-3">
                  {item.startsWith("•") ? (
                    <>
                      <span className="text-[#EAB308] text-lg flex-shrink-0 mt-1">•</span>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item.substring(2)}
                      </p>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                      <p
                        className={`text-sm sm:text-base text-gray-700 leading-relaxed ${
                          isBold ? "font-semibold" : ""
                        }`}
                      >
                        {item}
                      </p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Steps Section */}
        {section.type === "steps" && (
          <div className="space-y-4 sm:space-y-6">
            {(section as any).content.slice(0, -1).map((step: any, stepIdx: number) => {
              const [stepTitle, ...stepDesc] = step.split(" — ");
              return (
                <div key={stepIdx} id={`${sectionId}-step-${stepIdx}`} className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#EAB308] rounded-full flex items-center justify-center text-[#071B34] font-bold text-base sm:text-lg">
                      {stepIdx + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-1 sm:pt-2">
                    <h3 className="text-base sm:text-lg font-semibold text-[#071B34] mb-2">
                      {stepTitle}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {stepDesc.join(" — ")}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="mt-6 bg-[#EAB308]/10 border-l-4 border-[#EAB308] p-4 sm:p-6 rounded-r-lg">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                {section.content?.[section.content.length - 1] ?? ""}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  })}

  {/* CTA Section */}
  <div id="cta" className="bg-deep-blue rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-orange mb-4">
      Ready to Register Your Company?
    </h2>
    <p className="text-base sm:text-lg text-white mb-6 sm:mb-8 max-w-2xl mx-auto">
      Get started with LegalDhara's expert guidance and complete your registration in just 7-10 days
    </p>
    <Link
      href="#"
      className="bg-brand-orange text-deep-blue px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-brand-orange2 transition-colors shadow-lg"
    >
      Start Your Registration
    </Link>
  </div>
</div>

    </div>

    
     
      
    </div>
  )
}
