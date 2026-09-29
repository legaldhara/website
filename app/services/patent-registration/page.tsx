import Image from "next/image"
import { CheckCircle, Sparkles, ShieldCheck, TrendingUp,Phone, ArrowRight, Download,  } from 'lucide-react'
import { Button } from "@/components/ui/button" // Added Button import
import { Card , CardContent } from "@/components/ui/card"
import { Accordion , AccordionContent ,AccordionItem ,AccordionTrigger } from "@/components/ui/accordion"
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import patentRegistrationService from "./data"
import Link from "next/link"
import CtaSection from "@/components/ui/CtaSection"

export default function patentRegistration() {
  const service = patentRegistrationService // Use the directly imported service data

  // Dynamically build sections based on available data
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
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
          <SectionNavigation sections={sections} />
     

      {/* Overview Section */}

      {/* Overview Section */}
      <section id="overview1" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-6 py-3 rounded-full mb-6">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Protect Your Innovation</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                Understanding Patent Registration in India
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {service?.details?.introductoryText}
              </p>
            </div>

            {/* Patent Act Card */}
            <div className="bg-gradient-to-br from-deep-blue to-gray-800 rounded-3xl p-10 mb-12 text-white shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <ShieldCheck className="h-12 w-12 text-brand-orange flex-shrink-0" />
                <div>
                  <h3 className="text-3xl font-bold mb-4">{service.details?.overview11?.title}</h3>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    {service.details?.overview11?.content}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 rounded-2xl p-8 border-2 border-brand-orange/20">
                <div className="text-5xl font-bold text-brand-orange mb-4">20</div>
                <div className="text-xl font-semibold text-deep-blue mb-2">Years Protection</div>
                <p className="text-gray-600">Exclusive rights from filing date</p>
              </div>
              <div className="bg-gradient-to-br from-deep-blue/5 to-deep-blue/10 rounded-2xl p-8 border-2 border-deep-blue/20">
                <div className="text-5xl font-bold text-deep-blue mb-4">14</div>
                <div className="text-xl font-semibold text-deep-blue mb-2">Days Filing</div>
                <p className="text-gray-600">Fast-track registration process</p>
              </div>
              <div className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 rounded-2xl p-8 border-2 border-brand-orange/20">
                <div className="text-5xl font-bold text-brand-orange mb-4">100%</div>
                <div className="text-xl font-semibold text-deep-blue mb-2">Legal Support</div>
                <p className="text-gray-600">End-to-end expert assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section - Types of Patent Applications */}
      <section id="eligibility" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                {service.details?.requirements11?.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the right application type based on your invention's stage and filing strategy
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {service.details?.requirements11?.sections.map((type, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-brand-orange"
                >
                  <h3 className="text-2xl font-bold text-deep-blue mb-4">{type.heading}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.text}</p>
                </div>
              ))}
            </div>

            {/* Patentability Criteria */}
            <div className="mt-16 bg-gradient-to-br from-deep-blue to-gray-800 rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle className="h-8 w-8 text-brand-orange" />
                {service.details?.patentability?.title}
              </h3>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {service.details?.patentability?.content}
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {service.details?.patentability?.points.map((point, index) => (
                  <div key={index} className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-brand-orange mb-3">{point.heading}</h4>
                    <p className="text-gray-200 text-sm leading-relaxed">{point.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What Can/Cannot Be Patented */}
            <div className="mt-12 grid md:grid-cols-2 gap-8">
              {service.details?.operation?.sections.map((section, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 ${
                    index === 0
                      ? 'bg-green-50 border-2 border-green-500'
                      : 'bg-red-50 border-2 border-red-500'
                  }`}
                >
                  <h3 className={`text-2xl font-bold mb-4 ${
                    index === 0 ? 'text-green-700' : 'text-red-700'
                  }`}>
                    {section.heading}
                  </h3>
                  <div className="space-y-2">
                    {section.text.split('\n').map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                          index === 0 ? 'text-green-600' : 'text-red-600'
                        }`} />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Required Section */}
      <section id="documents" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-6 py-3 rounded-full mb-6">
                <Download className="h-5 w-5" />
                <span className="font-semibold">Document Checklist</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                Required Documents for Patent Filing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete documentation ensures smooth processing and faster approval
              </p>
            </div>

            {/* Initial Details */}
            <div className="bg-gradient-to-br from-brand-orange/5 to-brand-orange/10 rounded-2xl p-10 mb-10 border-2 border-brand-orange/30">
              <h3 className="text-2xl font-bold text-deep-blue mb-6">Essential Documents</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {service.details?.requiredDocuments1?.initialDetails?.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-md">
                    <CheckCircle className="h-6 w-6 text-brand-orange flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Forms */}
            <div className="bg-deep-blue rounded-2xl p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Key Forms Used in Patent Filing</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {(service?.details?.requiredDocuments1?.documentTypes?.[0]?.documents ?? []).map((form, index) => (
                  <div key={index} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm hover:bg-white/20 transition-all">
                    <span className="text-brand-orange font-semibold">{form}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits1" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                {service.details?.importance11?.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the strategic and commercial advantages of protecting your innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {service.details?.importance11?.points.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-brand-orange"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-orange/10 rounded-full p-4">
                      <TrendingUp className="h-8 w-8 text-brand-orange" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-deep-blue mb-4">{benefit.heading}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process1" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue mb-6">
                Step-by-Step Patent Registration Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our streamlined process ensures your patent application is filed accurately and efficiently
              </p>
            </div>

            <div className="space-y-6">
              {service.details?.processSteps?.map((step, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-brand-orange"
                >
                  <div className="flex items-start gap-6">
                    <div className="bg-brand-orange text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-deep-blue mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Note */}
            <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-8">
              <h4 className="text-xl font-bold text-red-700 mb-3">⚠️ Important Note</h4>
              <p className="text-gray-700 leading-relaxed">
                Objections can be raised by patent examiners if the invention is not novel or not non-obvious. 
                Applicants must respond promptly to maintain proper patent protections. Regular fee payments 
                are required after patent grant to maintain protection throughout the 20-year term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees1" className="py-20 bg-gradient-to-br from-deep-blue to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Patent Registration Pricing</h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Transparent pricing with no hidden charges
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-brand-orange/50">
                <div className="text-brand-orange font-semibold mb-2">Service Fees</div>
                <div className="text-4xl font-bold mb-4">{service.details?.pricing?.basePrice}</div>
                <p className="text-gray-300">Professional patent drafting and filing assistance</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-brand-orange/50">
                <div className="text-brand-orange font-semibold mb-2">Government Fees</div>
                <div className="text-4xl font-bold mb-4">{service?.details?.pricing?.governmentFees}</div>
                <p className="text-gray-300">Varies based on applicant type and filing mode</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 border-brand-orange/50">
                <div className="text-brand-orange font-semibold mb-2">Processing Time</div>
                <div className="text-4xl font-bold mb-4">{service.details?.pricing?.timeline}</div>
                <p className="text-gray-300">Filing to grant (with expedited options available)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-gradient-to-br from-white to-rang dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get answers to common questions about trademark registration
                </p>
              </div>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {service.details?.faqs?.map((item, index) => (
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
            </div>
          </div>
        </section>

   
     
      {/* Final CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-[#0A2342] via-[#0A2342] to-gray-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">Protect Your Invention with Patent Registration</h2>
          <p className="text-2xl text-blue-100">
            Safeguard your innovative ideas and get exclusive rights with India’s most trusted{" "}
            <span className="font-semibold">Patent Registration</span> service.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" passHref>
              <Button
                size="lg"
                className="bg-white text-[#0A2342] hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Apply for Patent Registration
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>

            <Link href="tel:9424440004" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A2342] font-bold px-12 py-6 rounded-2xl text-xl bg-transparent"
              >
                <Phone className="mr-3 h-6 w-6" />
                94244-40004
              </Button>
            </Link>
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
              <span>Guaranteed Protection</span>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    <CtaSection
      title="Protect Your Invention with Patent Registration"
      serviceName="Patent Registration"
      description="Safeguard your innovative ideas and get exclusive rights with India’s most trusted"
    />
    </div>
  )
}
