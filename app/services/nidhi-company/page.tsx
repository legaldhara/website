"use client"
import { useState } from "react";
import {ChevronDown, ChevronUp,} from 'lucide-react'
import { nidhiCompanyRegistrationService } from "./data"
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation";
import Link from "next/link";

function nidhiCompanyRegistrationpage() {

    const [openFaq, setOpenFaq] = useState(null);
    
    const toggleFaq = (index : any) => {
        setOpenFaq(openFaq === index ? null : index);
      };
    const service = nidhiCompanyRegistrationService
    const details = service.details;

    const sections = [
  { id: "overview1", title: "Overview" },
  { id: "Importance", title: "Importance" },
  { id: "Requirements", title: "Documents Required" },
  { id: "Operation", title: "Operation" },
  { id: "eligibility", title: "Eligibility" },
  { id: "Features", title: "Features" },
  { id: "faqs", title: "FAQs" },
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      <ServiceHeroForm service={service} />

       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-deep-blue text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {service.name}
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-sm font-medium text-blue-200">Price</div>
                <div className="text-2xl font-bold">{service.price}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <div className="text-sm font-medium text-blue-200">Timeline</div>
                <div className="text-2xl font-bold">{service.timeline}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </section>
       {/* Enhanced Section Navigation */}
                    
                        <SectionNavigation sections={sections} />
           

      {/* Overview Section */}
      <section id="overview1" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {details?.overview11?.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {details?.overview11?.content}
            </p>
          </div>
        </div>
      </section>

      {/* What is Nidhi Company Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-indigo-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {details?.whatIs?.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {details?.whatIs?.content}
            </p>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section id="Importance" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {details?.importance11?.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {details?.importance11?.points.map((point, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-indigo-600 mb-4">
                  {point.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements and Structure Section */}
      <section id="Requirements" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {details?.requirements11?.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {details?.requirements11?.sections.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-blue-600 mb-4">
                  {section.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Benefits Section */}
      <section id="Operation" className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {details?.operation?.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {details?.operation?.sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-indigo-700 mb-4">
                  {section.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="Features" className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-purple-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {details?.features?.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {details?.features?.content}
            </p>
          </div>
        </div>
      </section>

      {/* Legal Framework Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {details?.legalFramework?.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {details?.legalFramework?.sections.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:border-indigo-200 transition-colors duration-300"
              >
                <h3 className="text-xl font-bold text-purple-600 mb-4">
                  {section.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section id="Eligibility" className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {details?.eligibility11?.title}
          </h2>
          <div className="space-y-6">
            {details?.eligibility11?.sections.map((section, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-blue-100"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-3">
                  {section.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Regulations Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            {details?.financialRegulations?.title}
          </h2>
          <div className="space-y-6">
            {details?.financialRegulations?.sections.map((section, index) => (
              <div 
                key={index}
                className="bg-gradient-to-r from-white to-indigo-50 rounded-xl shadow-lg p-8 border border-indigo-100"
              >
                <h3 className="text-xl font-bold text-indigo-700 mb-3">
                  {section.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-16 sm:py-24 bg-white">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-xl text-gray-600">
                    Everything you need to know about Startup India Registration
                  </p>
                </div>
                
                <div className="space-y-4">
                  {details?.faqs?.map((faq, index) => (
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
              </div>
            </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-deep-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Register Your Nidhi Company?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Get started with expert guidance and complete your registration in just {service.timeline?.toLowerCase()}
          </p>
          <Link
          href='#'
           className="bg-white text-deep-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
            Start Registration Now
          </Link>
        </div>
      </section>
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p className="text-sm">
            Made with ❤️ for Indian Entrepreneurs | All information is accurate as per latest Govt of india guidelines
          </p>
        </div>
      </section>
    </div>
    </div>
  )
}

export default nidhiCompanyRegistrationpage
