"use client"
import Image from "next/image"
import { useState } from "react"
import { CheckCircle, Sparkles, ShieldCheck, TrendingUp, Handshake, Globe, Gavel, Phone, ArrowRight, Download, StampIcon, Gem, Rocket, GlobeLock ,CheckCircle2 , Users, Clock , Shield , FileText, Award ,ChevronDown , ChevronUp } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button" // Added Button import
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import llpService from "./data"
import Link from "next/link"

export default function LlpPage() {
  const service = llpService // Use the directly imported service data
  const [openFaq, setOpenFaq] = useState(null);
  
    const toggleFaq = (index : any) => {
      setOpenFaq(openFaq === index ? null : index);
    };

  // Dynamically build sections based on available data
    const sections = [
  { title: "overview", id: "Overview" },
  { title: "Key features", id: "key-features" },
  { title: "Why register", id: "why-register" },
  { title: "Eligibility", id: "eligibility" },
  { title: "Requirements", id: "requirements" },
  { title: "Documents Required", id: "documents-required" },
  { title: "Process", id: "process" },
  { title: "Benefits", id: "benefits" },
  { title: "fees", id: "fees" },
  { title: "Why Choose legal dhara", id: "why-choose-us" },
  
]
  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
    
          <SectionNavigation sections={sections} />
      

      {/* Overview Section */}
       <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#071B34] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#EAB308] rounded-2xl mb-6">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 text-[#071B34]" />
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
                <Clock className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">10-15</div>
                <div className="text-sm text-gray-300">Days Process</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Shield className="w-8 h-8 text-[#EAB308] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#EAB308]">Limited</div>
                <div className="text-sm text-gray-300">Liability</div>
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

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold text-[#071B34] mb-4">What is LLP?</h3>
              <div className="space-y-4">
                {service?.details?.overview1?.whatIs?.map((para, idx) => (
                  <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {service?.details?.overview111?.map((item, idx) => (
                <div key={idx} className={`p-6 rounded-xl border-l-4 ${
                  item.type === 'highlight' 
                    ? 'bg-[#EAB308]/10 border-[#EAB308]' 
                    : 'bg-[#F2C79A]/20 border-[#F2C79A]'
                }`}>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="key-features" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service?.details?.sections?.[0]?.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 mb-6">{service?.details?.sections?.[0].content}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(() => {
                const section0 = service?.details?.sections?.[0];
                if (!section0 || !('list' in section0) || !Array.isArray((section0 as any).list)) return null;
                return (section0 as any).list.map((item: any, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-lg">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ));
              })()}
            </div>
        </section>

        {/* Why Register Section */}
        <section id="why-register" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service?.details?.sections?.[1].title}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            {service?.details?.sections?.[1].content}
          </p>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Eligibility Criteria
          </h2>
          <div className="space-y-3">
            {service?.details?.eligibility?.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements Section */}
        <section id="requirements" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service?.details?.requirements11?.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.details?.requirements11?.sections.map((req, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#F2C79A]/20 to-[#EAB308]/10 rounded-xl p-6 border border-[#EAB308]/30">
                <h3 className="text-lg font-semibold text-[#071B34] mb-3">{req.heading}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{req.text}</p>
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
          
          <div className="space-y-6">
            <div className="bg-[#EAB308]/5 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-[#071B34] mb-4">Initial Details</h3>
              <div className="space-y-3">
                {service.details?.requiredDocuments1?.initialDetails?.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#EAB308] flex-shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-gray-700">{doc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service?.details?.requiredDocuments1?.documentTypes?.map((docType, idx) => (
                <div key={idx} className="border border-[#EAB308]/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#071B34] mb-4">{docType.type}</h3>
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

            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-[#071B34] mb-4">Complete Document Checklist</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service?.details?.documentsRequired?.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#EAB308] flex-shrink-0 mt-1" />
                    <p className="text-sm text-gray-700">{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Registration Process
          </h2>
          <div className="space-y-6">
            {service?.details?.process1?.map((step, idx) => {
              const [stepTitle, ...stepDesc] = step.split(': ');
              return (
                <div key={idx} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#EAB308] rounded-full flex items-center justify-center text-[#071B34] font-bold text-lg">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-[#071B34] mb-2">{stepTitle}</h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      {stepDesc.join(': ')}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.details?.howItWorksSteps?.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gradient-to-br from-[#EAB308]/10 to-[#F2C79A]/20 rounded-xl p-6 h-full border border-[#EAB308]/20">
                  <div className="text-3xl font-bold text-[#EAB308] mb-4">{idx + 1}</div>
                  <h3 className="text-lg font-semibold text-[#071B34] mb-3">{step.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed">{step.description}</p>
                </div>
                {idx < (service?.details?.howItWorksSteps?.length ?? 0) - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#EAB308]" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Benefits of LLP Registration
          </h2>
          <div className="space-y-3 mb-8">
            {service?.details?.benefits1?.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#F2C79A]/10 to-transparent rounded-lg">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {service.details?.benefitsOfRegistration?.map((benefit, idx) => (
              <div key={idx} className="bg-[#071B34] text-white rounded-xl p-6 hover:bg-[#0a2847] transition-colors">
                <Award className="w-10 h-10 text-[#EAB308] mb-4" />
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table Section */}
        <section id="comparison" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Comparison Table
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#071B34]">
                  {service?.details?.comparisonTable?.[0]?.header.map((header, idx) => (
                    <th key={idx} className="text-left p-4 text-white font-semibold border border-[#EAB308]/30">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service?.details?.comparisonTable?.[0]?.rows.map((row, rowIdx) => (
                  <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-[#F2C79A]/10' : 'bg-white'}>
                    {row.map((cell, cellIdx) => (
                      <td key={cellIdx} className={`p-4 border border-gray-200 text-sm ${cellIdx === 0 ? 'font-semibold text-[#071B34]' : 'text-gray-700'}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Fees Section */}
        <section id="fees" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Registration Fees
          </h2>
          <div className="space-y-4">
            {service?.details?.fees1?.map((fee, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#EAB308]/5 to-transparent rounded-lg border-l-4 border-[#EAB308]">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAB308] flex-shrink-0 mt-1" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{fee}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="bg-gradient-to-br from-[#071B34] to-[#0a2847] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            {service?.details?.whyChooseUs.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service?.details?.whyChooseUs.points.map((point :any, idx :number)  => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                <TrendingUp className="w-10 h-10 text-[#EAB308] mb-4" />
                <h3 className="text-lg font-semibold mb-3">{point.heading}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section id="faqs" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#071B34] mb-4 sm:mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#EAB308] rounded-full"></span>
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {service.details?.faqs1?.map((faq, index) => (
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
            Ready to Register Your LLP?
          </h2>
          <p className="text-base sm:text-lg text-[#071B34]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get started with expert guidance and complete your LLP registration in just 10-15 days with complete transparency
          </p>
          <Link 
          href='/contact'
          className="bg-[#071B34] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#0a2847] transition-colors shadow-lg">
            Start Your LLP Registration
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
