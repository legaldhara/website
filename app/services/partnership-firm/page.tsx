import SectionNavigation from "@/components/section-navigation"
import { partnershipFirmRegistrationService } from "./data"
import ServiceHeroForm from "@/components/service-hero-form"
import {Building2, CheckCircle2, FileText, Clock, Shield, TrendingUp, Award, AlertCircle, Users,  IndianRupee } from 'lucide-react'
import Link from "next/link"

function PartnershipFirmPage() {

    const service = partnershipFirmRegistrationService

     const sections = [
  { title: "overview", id: "Overview" },
  { title: "Benefits", id: "benefits" },
  { title: "Eligibility", id: "eligibility" },
  { title: "Documents Required", id: "documents-required" },
  { title: "Process", id: "process" },
  { title: "Partnership-deed", id: "partnership-deed" },
  { title: "Fees", id: "fees" },
  { title: "Why Choose legal dhara", id: "why-choose-us" },

  
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      <ServiceHeroForm service={service} />


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
                {service.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  < IndianRupee className="w-5 h-5 text-[#EAB308]" />
                  <span className="text-sm font-semibold">{service.price}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-[#EAB308]" />
                  <span className="text-sm font-semibold">{service.timeline}</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Users className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">2+</div>
                <div className="text-sm text-gray-300">Partners Required</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Shield className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">Legal</div>
                <div className="text-sm text-gray-300">Recognition</div>
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
            <div>
              <h3 className="text-xl font-semibold text-[#071B34] mb-4">Introduction</h3>
              <div className="space-y-4">
                {service?.details?.overview1?.introduction?.map((para, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="bg-[#EAB308]/10 border-l-4 border-[#EAB308] p-6 rounded-r-xl mt-6">
              <h3 className="text-lg font-semibold text-[#071B34] mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-[#EAB308]" />
                What is Partnership Firm Registration?
              </h3>
              <div className="space-y-3">
                {service?.details?.overview1?.whatIs?.map((para, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.sections?.[0].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service?.details?.sections?.[0]?.list?.map((item : any , idx : number) => {
              const [title, ...desc] = item.split(' – ');
              return (
                <div key={idx} className="bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-xl p-6 border-l-4 border-[#EAB308]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[#071B34] mb-2">{title}</h3>
                      {desc.length > 0 && (
                        <p className="text-sm text-gray-700 leading-relaxed">{desc.join(' – ')}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.sections?.[1].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service?.details?.sections?.[1]?.list?.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-br from-[#071B34] to-[#0a2847] text-white rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Required Section */}
        <section id="documents-required" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.sections?.[2].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.details?.sections?.[2]?.list?.map((item, idx) => {
              const [title, ...desc] = item.split(': ');
              return (
                <div key={idx} className="bg-gradient-to-br from-[#F2C79A]/20 to-[#EAB308]/10 rounded-xl p-6 border border-[#EAB308]/30">
                  <FileText className="w-8 h-8 text-[#EAB308] mb-3" />
                  <h3 className="text-base font-semibold text-[#071B34] mb-2">{title}</h3>
                  {desc.length > 0 && (
                    <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ')}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.sections?.[3].title}
          </h2>
          <div className="space-y-6">
            {service.details?.sections?.[3]?.list?.map((step, idx) => {
              const [stepTitle, ...stepDesc] = step.split(' – ');
              return (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#EAB308] rounded-full flex items-center justify-center text-[#071B34] font-bold text-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-[#071B34] mb-2">{stepTitle}</h3>
                    {stepDesc.length > 0 && (
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {stepDesc.join(' – ')}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Partnership Deed Clauses Section */}
        <section id="partnership-deed" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.sections?.[4].title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.details?.sections?.[4].list?.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-lg border-l-2 border-[#EAB308]">
                <div className="w-6 h-6 bg-[#EAB308] rounded-full flex items-center justify-center text-[#071B34] font-bold text-xs flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fees Section */}
        <section id="fees" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.sections?.[5].title}
          </h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#071B34]">
                  <th className="text-left p-4 text-white font-semibold border border-[#EAB308]/30">Component</th>
                  <th className="text-left p-4 text-white font-semibold border border-[#EAB308]/30">Fees</th>
                  <th className="text-left p-4 text-white font-semibold border border-[#EAB308]/30">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {service.details?.sections?.[5]?.table?.map((row , idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#F2C79A]/10' : 'bg-white'}>
                    <td className="p-4 border border-gray-200 text-sm font-semibold text-[#071B34]">
                      {row.component}
                    </td>
                    <td className="p-4 border border-gray-200 text-sm text-gray-700 font-medium">
                      {row.fees}
                    </td>
                    <td className="p-4 border border-gray-200 text-sm text-gray-700">
                      {row.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cost Comparison Table */}
          <h3 className="text-lg sm:text-xl font-bold text-[#071B34] mb-4 mt-8">{service.details?.sections?.[6]?.title}</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#EAB308]">
                  <th className="text-left p-4 text-[#071B34] font-semibold border border-[#071B34]/20">Type</th>
                  <th className="text-left p-4 text-[#071B34] font-semibold border border-[#071B34]/20">Cost</th>
                  <th className="text-left p-4 text-[#071B34] font-semibold border border-[#071B34]/20">Benefits/Limitations</th>
                </tr>
              </thead>
              <tbody>
                {service.details?.sections?.[6]?.table?.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#F2C79A]/10'}>
                    <td className="p-4 border border-gray-200 text-sm font-semibold text-[#071B34]">
                      {row.component}
                    </td>
                    <td className="p-4 border border-gray-200 text-sm text-gray-700 font-medium">
                      {row.fees}
                    </td>
                    <td className="p-4 border border-gray-200 text-sm text-gray-700">
                      {row.remarks}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Why Choose LegalDhara Section */}
        <section id="why-choose-us" className="bg-gradient-to-br from-[#071B34] to-[#0a2847] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.sections?.[7].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.details?.sections?.[7].list?.map((item, idx) => {
              const [title, ...desc] = item.split(': ');
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  <Award className="w-10 h-10 text-[#EAB308] mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{title}</h3>
                  {desc.length > 0 && (
                    <p className="text-sm text-gray-300 leading-relaxed">{desc.join(': ')}</p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-gradient-to-r from-[#EAB308] to-[#F2C79A] rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071B34] mb-4">
            Ready to Register Your Partnership Firm?
          </h2>
          <p className="text-base sm:text-lg text-[#071B34]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get your partnership firm registered in just 3-7 business days with complete legal support and expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2 bg-[#071B34] text-white px-6 py-3 rounded-lg">
              < IndianRupee className="w-5 h-5" />
              <span className="font-semibold">{service.price}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#071B34] text-white px-6 py-3 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">{service.timeline}</span>
            </div>
          </div>
          <Link href='#'
          className="bg-[#071B34] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#0a2847] transition-colors shadow-lg">
            Start Your Registration Now
          </Link>
        </section>
      </div>
    </div>

    </div>
  )
}

export default PartnershipFirmPage
