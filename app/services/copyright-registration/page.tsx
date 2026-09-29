import { CheckCircle, Sparkles, Handshake, Gavel, ArrowRight, Gem, Shield, BookOpen, FileText, Users, Clock, Award, Zap, Lock, Globe, Briefcase, Scale, FileCheck } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import copyrightRegistrationService from "./data"
import { Metadata } from "next"


export const metadata: Metadata = {
  title: "Copyright Registration in India | Legal Dhara - 0 Service Charge & Expert Legal Assistance",
  description:
    "Register your copyright online with Legal Dhara — India’s most trusted LegalTech platform offering 0 service charge on copyright filing. Protect your creative works including music, art, software, and written content with expert legal assistance. Fast, reliable, and affordable copyright registration services for creators, artists, and businesses across India.",
  keywords:
    "copyright registration India, online copyright filing, 0 service charge copyright, free copyright registration, Legal Dhara, copyright protection, intellectual property rights, IPR registration, creative work protection, copyright for music, copyright for software, copyright for art, copyright for book, copyright consultant India, legal tech platform, copyright attorney India, copyright certificate, online legal services, register copyright India, copyright office India",
};

export default function CopyrightRegistrationPage() {
  const service = copyrightRegistrationService

  const sections = [
    { id: "overview1", title: "Overview" },
    { id: "eligibility", title: "Eligibility" },
    { id: "documents", title: "Documents Required" },
    { id: "benefits1", title: "Benefits" },
    { id: "process1", title: "Process" },
    { id: "fees1", title: "Fees" },
    { id: "faqs", title: "FAQs" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section and Form */}
      <ServiceHeroForm service={service} />

      {/* Section Navigation */}
     <SectionNavigation sections={sections} />
    

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
        {/* Overview Section */}
        <section id="overview1" className="scroll-mt-24">
          <div className="space-y-16">
            
            {/* What is Copyright - Hero Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#071B34] to-[#0a2547] rounded-2xl"></div>
              <div className="relative p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#EAB308] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-[#071B34]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What is Copyright?</h2>
                    <p className="text-lg text-gray-100 leading-relaxed">
                      {service?.details?.overview11?.content}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Understanding Copyright */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#071B34] dark:text-white mb-6">
                Understanding Copyright Registration
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {service?.details?.whatIs?.content}
              </p>
            </div>

            {/* Importance of Copyright */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#071B34] dark:text-white mb-8">
                Why Copyright Registration Matters
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {service?.details?.importance11?.points.map((point, idx) => (
                  <div key={idx} className="group">
                    <div className="h-full p-6 bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl hover:border-[#EAB308] transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-[#F2C79A] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle className="w-5 h-5 text-[#071B34]" />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-[#071B34] dark:text-white mb-2">
                            {point.heading}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAB308] flex items-center justify-center">
                <Users className="w-6 h-6 text-[#071B34]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] dark:text-white">
                {service?.details?.eligibility11?.title}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg ml-16">
              Understanding who can apply for copyright registration
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service?.details?.eligibility11?.sections.map((section, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:shadow-lg transition-all">
                <h3 className="text-lg font-bold text-[#071B34] dark:text-white mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#EAB308] text-[#071B34] flex items-center justify-center text-sm font-bold">
                    {idx + 1}
                  </span>
                  {section.heading}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Required Section */}
        <section id="documents" className="scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAB308] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[#071B34]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] dark:text-white">
                Documents Required
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg ml-16">
              All documents needed for a smooth registration process
            </p>
          </div>

          <div className="space-y-6">
            {/* Initial Details */}
            <div className="bg-gradient-to-br from-[#071B34] to-[#0a2547] rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-[#EAB308]" />
                Initial Details
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service?.details?.requiredDocuments1?.initialDetails?.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white/10 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-[#EAB308] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Types */}
            {service?.details?.requiredDocuments1?.documentTypes?.map((docType, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-[#F2C79A] dark:bg-[#EAB308]/20 px-6 py-4 border-b-2 border-[#EAB308]">
                  <h3 className="text-lg font-bold text-[#071B34] dark:text-white">
                    {docType.type}
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3">
                    {docType.documents.map((doc, docIdx) => (
                      <div key={docIdx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        <CheckCircle className="w-5 h-5 text-[#EAB308] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits1" className="scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAB308] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#071B34]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] dark:text-white">
                {service.details?.benefits?.title}
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg ml-16">
              Protect your creative work and unlock exclusive rights
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {service.details?.benefits?.points.map((benefit, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:border-[#EAB308] hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#F2C79A] flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-[#071B34]" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#071B34] dark:text-white mb-8">
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {service.details?.keyFeatures?.map((feature, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-[#EAB308] flex items-center justify-center flex-shrink-0">
                        <Gem className="w-5 h-5 text-[#071B34]" />
                      </div>
                      <h4 className="text-lg font-bold text-[#071B34] dark:text-white">
                        {feature.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed ml-14">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process1" className="scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAB308] flex items-center justify-center">
                <Zap className="w-6 h-6 text-[#071B34]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] dark:text-white">
                Registration Process
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg ml-16">
              A streamlined journey to protect your creative work
            </p>
          </div>

          <div className="space-y-6">
            {service.details?.processSteps?.map((step, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:border-[#EAB308] transition-all">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#071B34] text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl text-[#071B34] dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F2C79A] dark:bg-[#EAB308]/20">
                      <Clock className="w-4 h-4 text-[#071B34] dark:text-[#EAB308]" />
                      <span className="text-sm text-[#071B34] dark:text-[#EAB308] font-medium">
                        {step.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Overview */}
          <div className="mt-8 bg-gradient-to-br from-[#071B34] to-[#0a2547] rounded-xl p-8">
            <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[#EAB308]" />
              Process Overview
            </h4>
            <p className="text-gray-100 leading-relaxed">
              {service?.details?.overview}
            </p>
          </div>
        </section>

        {/* Fees Section */}
        <section id="fees1" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] dark:text-white mb-4">
              Pricing & Timeline
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Transparent pricing with no hidden costs
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white dark:bg-gray-900 border-2 border-[#EAB308] rounded-xl p-8 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Price</h3>
              <p className="text-3xl font-bold text-[#071B34] dark:text-white">{service.price}</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border-2 border-[#EAB308] rounded-xl p-8 text-center">
              <Clock className="w-10 h-10 text-[#EAB308] mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Timeline</h3>
              <p className="text-3xl font-bold text-[#071B34] dark:text-white">{service.timeline}</p>
            </div>

            <div className="bg-white dark:bg-gray-900 border-2 border-[#EAB308] rounded-xl p-8 text-center">
              <Award className="w-10 h-10 text-[#EAB308] mx-auto mb-4" />
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Service Charges</h3>
              <p className="text-3xl font-bold text-[#071B34] dark:text-white">
                {service.zeroServiceCharges ? "Zero" : "Applicable"}
              </p>
            </div>
          </div>

          {/* How We Assist */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#071B34] dark:text-white mb-8">
              How We Assist
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {service.details?.howWeAssist?.map((assist, idx) => (
                <div key={idx} className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:border-[#EAB308] transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#F2C79A] flex items-center justify-center flex-shrink-0">
                      <Handshake className="w-5 h-5 text-[#071B34]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#071B34] dark:text-white mb-2">
                        {assist.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {assist.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Framework Section */}
        <section className="scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAB308] flex items-center justify-center">
                <Gavel className="w-6 h-6 text-[#071B34]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] dark:text-white">
                Legal Framework
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg ml-16">
              Understanding the legal foundation of copyright protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {service.details?.legalFramework?.sections.map((section, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-lg text-[#071B34] dark:text-white mb-3 flex items-center gap-2">
                  <Gavel className="w-5 h-5 text-[#EAB308]" />
                  {section.heading}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Copyright Owner Rights Section */}
        <section className="scroll-mt-24">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EAB308] flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#071B34]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] dark:text-white">
                {service.details?.operation?.title}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.details?.operation?.sections.map((section, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl p-6 hover:border-[#EAB308] transition-all">
                <h3 className="font-bold text-[#071B34] dark:text-white mb-3">
                  {section.heading}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* FAQs Section */}
        <section id="faqs" className="scroll-mt-24">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#071B34] dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Find answers to common questions about copyright registration
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 rounded-xl p-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {service.details?.faqs?.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`faq-${idx}`} 
                  className="border-2 border-gray-100 dark:border-gray-800 rounded-lg px-6 hover:border-[#EAB308] transition-all"
                >
                  <AccordionTrigger className="hover:no-underline py-4 text-left">
                    <span className="font-semibold text-[#071B34] dark:text-white pr-4">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 dark:text-gray-400 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="relative bg-gradient-to-r from-[#071B34] to-[#0a2547] rounded-2xl p-12 text-center text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-32 h-32 bg-[#EAB308] rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#EAB308] rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-xl bg-[#EAB308] flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#071B34]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Protect Your Work?
              </h3>
              <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
                Start your copyright registration process today and secure your creative assets with our expert guidance.
              </p>
            
<Link href="/contact" passHref>
  <Button 
    size="lg"
    className="bg-[#EAB308] text-[#071B34] hover:bg-[#F2C79A] font-bold px-8 py-6 text-lg"
  >
    Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
  </Button>
</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
