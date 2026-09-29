"use client"
import { UserCircle, CheckCircle2, FileText, ChevronUp,ChevronDown, Shield, Award, AlertCircle } from 'lucide-react'
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import opcService from "./data"
import { useState } from "react"
import Link from 'next/link'


export default function Opc() {
  const service = opcService // Use the directly imported service data

  // Dynamically build sections based on available data
   const sections = [
    { id: "overview", title: "Overview" },
    { id: "features", title: "Features" },
    { id: "privileges", title: "Privileges" },
    { id: "legal-status", title: "Legal-status" },
    { id: "benefits", title: "Benefits" },
    { id: "eligibility", title: "Eligibility" },
    { id: "documents-required", title: "documents-required" },
    { id: "process", title: "process" },
    { id: "compliance", title: "Compliance" },
    { id: "taxation", title: "taxation" },
    { id: "faqs", title: "FAQs" },
  ]
    const [openFaq, setOpenFaq] = useState(null);
  
    const toggleFaq = (index : any) => {
      setOpenFaq(openFaq === index ? null : index);
    };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
          <SectionNavigation sections={sections} />
        

      {/* Overview Section */}
      <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <div className="bg-[#071B34] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#EAB308] rounded-2xl mb-6">
                <UserCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#071B34]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <UserCircle className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">1</div>
                <div className="text-sm text-gray-300">Person Company</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Shield className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">100%</div>
                <div className="text-sm text-gray-300">Control</div>
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
              <h3 className="text-xl font-semibold text-[#071B34] mb-4">Introduction to OPC</h3>
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
                Legal Definition
              </h3>
              {service?.details?.overview1?.whatIs?.map((para, idx) => (
                <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service?.details?.sections?.[0].title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(() => {
              const section0 = service?.details?.sections?.[0];
              if (!section0 || !('list' in section0) || !section0.list) return null;
              return section0.list.map((item: any, idx: number) => {
                const [title, ...desc] = item.split(': ');
                return (
                  <div key={idx} className="bg-gradient-to-br from-[#F2C79A]/20 to-[#EAB308]/10 rounded-xl p-6 border border-[#EAB308]/30">
                    <h3 className="text-base sm:text-lg font-semibold text-[#071B34] mb-2">{title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ')}</p>
                  </div>
                );
              });
            })()}
          </div>
        </section>

        {/* Privileges Section */}
        <section id="privileges" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service?.details?.sections?.[1].title}
          </h2>
          <div className="space-y-4">
            {(() => {
              const section1 = service.details?.sections?.[1];
              if (!section1 || !('list' in section1) || !section1.list) return null;
              return section1.list.map((item : any, idx : number) => {
                const [title, ...desc] = item.split(': ');
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-lg">
                    <Award className="w-6 h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-base font-semibold text-[#071B34] mb-1">{title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ')}</p>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </section>

        {/* Legal Status Section */}
        <section id="legal-status" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service?.details?.sections?.[2].title}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {service?.details?.sections?.[2].content}
          </p>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Benefits of OPC Registration
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {service?.details?.benefits1?.map((benefit, idx) => {
              const [title, ...desc] = benefit.split(': ');
              return (
                <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-lg border-l-4 border-[#EAB308]">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-base font-semibold text-[#071B34] mb-1">{title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ')}</p>
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
            {service?.details?.eligibility11?.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.details?.eligibility11?.sections.map((req, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#071B34] to-[#0a2847] text-white rounded-xl p-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#EAB308] mb-3">{req.heading}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{req.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Required Section */}
        <section id="documents-required" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Documents Required
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.details?.requiredDocuments1?.documentTypes?.map((docType, idx) => (
              <div key={idx} className="border border-[#EAB308]/30 rounded-xl p-6 bg-gradient-to-br from-[#F2C79A]/5 to-transparent">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-[#EAB308]" />
                  <h3 className="text-lg font-semibold text-[#071B34]">{docType.type}</h3>
                </div>
                <div className="space-y-3">
                  {docType.documents.map((doc, docIdx) => (
                    <div key={docIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#EAB308] flex-shrink-0 mt-1" />
                      <p className="text-sm text-gray-700">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Registration Process
          </h2>
          <div className="space-y-6">
            {service.details?.process1?.map((step, idx) => {
              const [stepTitle, ...stepDesc] = step.split(' - ');
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
                        {stepDesc.join(' - ')}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.operation?.title}
          </h2>
          <div className="space-y-6">
            {service.details?.operation?.sections.map((section, idx) => (
              <div key={idx} className="bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-xl p-6 border-l-4 border-[#EAB308]">
                <h3 className="text-base sm:text-lg font-semibold text-[#071B34] mb-3">{section.heading}</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tax Section */}
        <section id="taxation" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service.details?.financialRegulations?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service?.details?.financialRegulations?.sections.map((section, idx) => (
              <div key={idx} className="bg-[#071B34] text-white rounded-xl p-6 hover:bg-[#0a2847] transition-colors">
                <h3 className="text-base sm:text-lg font-semibold text-[#EAB308] mb-3">{section.heading}</h3>
                <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>

       

         <section id="faqs" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.details?.faqs?.map((faq, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-100 overflow-hidden hover:border-blue-300 transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-2">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

         {/* CTA Section */}
        <section id="cta" className="bg-gradient-to-r from-[#EAB308] to-[#F2C79A] rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#071B34] mb-4">
            Ready to Register Your OPC?
          </h2>
          <p className="text-base sm:text-lg text-[#071B34]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Start your solo entrepreneurial journey with complete legal protection and expert guidance
          </p>
          <Link href='/contact' className="bg-[#071B34] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#0a2847] transition-colors shadow-lg">
            Start Your OPC Registration
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
