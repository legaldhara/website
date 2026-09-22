"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  CheckCircle,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  Handshake,
  Globe,
  Gavel,
  ArrowRight,
  StampIcon,
  GlobeLock,
  Gem,
  FileText,
  Scale,
  BadgeCheck,
  Stars,
  ThumbsUp,
  Coins,

  Shield,

  LockKeyhole,

  Banknote,
  Copyright,

  Globe2,
  Network,
  Zap,
  AlertTriangle,
  ShieldAlert,
  Users,
  Store,
  HeartHandshake,
} from "lucide-react"


import SectionNavigation from "@/components/section-navigation"
import ServiceHeroForm from "@/components/service-hero-form"
import { trademarkRegistrationService } from "./data"
import CtaSection from "@/components/ui/CtaSection"

export default function TrademarkRegistrationPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)







  const service = trademarkRegistrationService

  // const ServiceIconComponent = IconMap[service.icon as IconName] || IconMap.Default


  const sections = [
    { id: "overview", title: "Overview" },
    { id: "MCFT", title: "MCFT" },
    { id: "eligibility", title: "Eligibility" },
    { id: "types", title: "Types" },
    { id: "benefits", title: "Benefits" },
    { id: "documents", title: "Documents" },
    { id: "how-to-register", title: "How-to-register" },
    { id: "trademark-symbols", title: "Trademark Symbols" },
    { id: "differences", title: " Differences" },
    { id: "classes", title: "Classes" },
    { id: "TS", title: "Trademark Search" },
    { id: "why-choose-us", title: "Why-choose-us" },
    { id: "faq", title: "FAQ" },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">

      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}

      <SectionNavigation sections={sections} />

      {/* Enhanced Overview Section */}
      <section id="overview" className="py-16 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#071B34]">
                What is a <span className="text-[#EAB308]">Trademark?</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {service.details?.whatIsTrademark}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <Globe className="h-8 w-8 text-[#071B34] mb-3" />
                  <h3 className="text-base font-semibold text-[#071B34] mb-2">Legal Protection</h3>
                  <p className="text-gray-600 text-sm">Nationwide exclusive rights to use your brand</p>
                </div>
                <div className="p-5 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
                  <ShieldCheck className="h-8 w-8 text-[#EAB308] mb-3" />
                  <h3 className="text-base font-semibold text-[#071B34] mb-2">Brand Value</h3>
                  <p className="text-gray-600 text-sm">Increases business credibility significantly</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
              <div className="aspect-video bg-gradient-to-br from-[#071B34]/5 to-[#EAB308]/5 rounded-xl flex items-center justify-center">
                <Globe className="h-24 w-24 text-[#071B34]" />
              </div>
            </div>
          </div>

          {/* Trademark Act */}
          <div className="bg-gradient-to-br from-[#071B34] to-[#0a2847] rounded-2xl p-8 text-white text-center shadow-xl">
            <div className="w-16 h-16 bg-[#EAB308] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Gavel className="h-8 w-8 text-[#071B34]" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Trademark Act of 1999</h3>
            <p className="text-base text-gray-200 max-w-3xl mx-auto">{service.details?.trademarkAct1999}</p>
          </div>
        </div>
      </section>

      {/* Enhanced Most Commonly Filed Trademarks */}
      {service.details?.commonlyFiledTrademarks && service.details?.commonlyFiledTrademarks.length > 0 && (
        <section
          id="MCFT"
          className="py-16 px-4 bg-gradient-to-br from-[#FFF9E5] to-white"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#071B34] mb-3">
                Most Commonly Filed Trademarks
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-base">
                The brand “NIKE” is used as a sample representation of each trademark type
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.details.commonlyFiledTrademarks.map((item, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-gray-100 hover:border-[#EAB308] transition-all duration-300 transform hover:scale-105"
                >
                  {/* Image with subtle gradient hover */}
                  <div className="relative mb-4 flex items-center justify-center">
                    <Image
                      src={item.imageQuery}
                      alt={item.title}
                      width={180}
                      height={120}
                      className="object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#EAB308]/20 to-[#F2C79A]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#071B34] text-center mb-2 group-hover:text-[#EAB308] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 text-center mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Button */}
                  <Link
                    href="#"
                    className="w-full bg-gradient-to-r from-[#EAB308] to-[#F2C79A] hover:from-[#d9a307] hover:to-[#EAB308] text-[#071B34] font-semibold py-2.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1"
                  >
                    Register Now
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

      )}

      {/* Enhanced Eligibility Section */}
      {service.details?.whoCanApply && service.details?.whoCanApply.length > 0 && (
        <section id="eligibility" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="bg-[#EAB308] text-[#071B34] rounded-t-xl -m-8 mb-6 p-6 text-center">
                <h2 className="text-2xl font-bold mb-2">Who Can Apply for Trademark Registration?</h2>
                <p className="text-sm">The following entities are eligible to apply in India</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {service.details.whoCanApply.map((applicant, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#EAB308] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{applicant}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Enhanced Types Section */}
      {service.details?.typesOfTrademarks && service.details?.typesOfTrademarks.length > 0 && (
        <section id="types" className="py-12 bg-white">
  <div className="container mx-auto px-4 max-w-6xl">
    <div className="text-center mb-10">
      <h2 className="text-3xl lg:text-4xl font-semibold text-[#071B34] mb-3">
        Types of Trademarks in India
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Understanding different trademark types helps you choose the right protection
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {service.details.typesOfTrademarks.map((type, index) => {
        const IconComponent = type.icon;
        return (
          <div
            key={index}
            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all hover:border-[#EAB308]"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#EAB308] to-[#F2C79A] rounded-lg flex items-center justify-center mb-4">
              <IconComponent className="h-6 w-6 text-[#071B34]" />
            </div>
            <h3 className="text-lg font-bold text-[#071B34] mb-3 group-hover:text-[#EAB308] transition-colors">
              {type.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {type.description}
            </p>
            {type.example && (
              <div className="mt-3 p-3 bg-[#EAB308]/10 border-l-4 border-[#EAB308] rounded">
                <p className="text-xs text-gray-700">
                  <span className="font-semibold text-[#EAB308]">Example:</span> {type.example}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>
      )}


      {/* Enhanced Benefits Section */}
      <section id="benefits" className="py-12 bg-gradient-to-br from-[#071B34] to-[#0a2847] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#EAB308] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-3">Why Register Your Trademark?</h2>
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">Comprehensive legal protection and business advantages</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {service.details?.whyRegisterDetailed?.map((reason, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 text-center hover:bg-white/20 transition-all border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EAB308] to-[#F2C79A] rounded-lg flex items-center justify-center mx-auto mb-3">
  {/* Legal / Public / Record */}
  {reason.title.includes("Public") && <ShieldCheck className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Record") && <FileText className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Legal") && <Scale className="h-6 w-6 text-[#071B34]" />}

  {/* Brand / Recognition / Distinction */}
  {reason.title.includes("Brand") && <BadgeCheck className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Recognition") && <Sparkles className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Distinction") && <Stars className="h-6 w-6 text-[#071B34]" />}

  {/* Trust / Credibility */}
  {reason.title.includes("Trust") && <Handshake className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Credibility") && <ThumbsUp className="h-6 w-6 text-[#071B34]" />}

  {/* Value / Investment / Asset */}
  {reason.title.includes("Value") && <TrendingUp className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Investment") && <Coins className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Asset") && <Gem className="h-6 w-6 text-[#071B34]" />}

  {/* Counterfeiting / Protection */}
  {reason.title.includes("Protects") && <Shield className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Counterfeiting") && <GlobeLock className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Imitation") && <LockKeyhole className="h-6 w-6 text-[#071B34]" />}

  {/* Licensing / Revenue */}
  {reason.title.includes("Licensing") && <StampIcon className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Revenue") && <Banknote className="h-6 w-6 text-[#071B34]" />}

  {/* Symbol */}
  {reason.title.includes("Symbol") && <Copyright className="h-6 w-6 text-[#071B34]" />}
  {/* {reason.title.includes("®") && <Registered className="h-6 w-6 text-[#071B34]" />} */}

  {/* Global / International */}
  {reason.title.includes("Global") && <Globe className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("International") && <Globe2 className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Foundation") && <Network className="h-6 w-6 text-[#071B34]" />}

  {/* Legal Enforcement */}
  {reason.title.includes("Enforcement") && <Gavel className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Powers") && <Zap className="h-6 w-6 text-[#071B34]" />}

  {/* Deterrent / Infringers */}
  {reason.title.includes("Deterrent") && <AlertTriangle className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Infringers") && <ShieldAlert className="h-6 w-6 text-[#071B34]" />}

  {/* Customer / Market / Attraction */}
  {reason.title.includes("Customer") && <Users className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Market") && <Store className="h-6 w-6 text-[#071B34]" />}
  {reason.title.includes("Attraction") && <HeartHandshake className="h-6 w-6 text-[#071B34]" />}
</div>

                <h3 className="text-sm font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-xs text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* Enhanced Fees Section */}
      {/* <section
        id="fees"
        className="py-20 bg-gradient-to-br from-light-orange to-rang dark:from-deep-blue dark:to-indigo-950"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/5 to-indigo-500/5"></div>
              <CardContent className="relative z-10 p-12">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-deep-blue to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="h-12 w-12 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
                    Transparent Pricing
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    No hidden costs, no surprises. Get comprehensive trademark registration at an unbeatable price.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="text-6xl font-extrabold bg-gradient-to-r from-deep-blue to-indigo-600 bg-clip-text text-transparent">
                    {service.price}
                  </div>
                  <div className="text-2xl text-gray-600 dark:text-gray-300">
                    Complete Registration • Timeline: {service.timeline}
                  </div>

                  {service.zeroServiceCharges && (
                    <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-bold text-lg shadow-lg">
                      <Sparkles className="h-6 w-6 mr-2" />
                      Zero Service Charges!
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-deep-blue to-indigo-600 hover:from-deep-blue/90 hover:to-indigo-600/90 text-white font-bold px-8 py-4 rounded-2xl shadow-xl"
                    >
                      Get Detailed Quote
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-deep-blue text-deep-blue hover:bg-deep-blue hover:text-white font-bold px-8 py-4 rounded-2xl bg-transparent"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Enhanced Documents Section */}
      {service.details?.requiredDocuments && (
        <section id="documents" className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-[#071B34] to-[#0a2847] text-white text-center py-6">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-2">Required Documents</h2>
                <p className="text-sm text-gray-300">Everything needed for registration</p>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#071B34] mb-4 text-center">Initial Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.details.requiredDocuments?.initialDetails?.map((detail, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                        <CheckCircle className="h-4 w-4 text-[#EAB308] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#071B34] mb-4 text-center">By Applicant Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.details?.requiredDocuments?.documentTypes?.map((type, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="text-sm font-bold text-[#071B34] mb-3 text-center">{type.type}</h4>
                        <ul className="space-y-2">
                          {type.documents.map((doc, docIndex) => (
                            <li key={docIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                              <span className="text-xs text-gray-600">{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Enhanced Process Steps */}
      <section id="how-to-register" className="py-12 bg-gradient-to-br from-[#071B34] to-[#0a2847]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Registration Process</h2>
            <p className="text-gray-300">A streamlined process to get your trademark registered</p>
          </div>

          <div className="space-y-4">
            {service?.details?.processSteps?.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="w-10 h-10 bg-[#EAB308] rounded-full flex items-center justify-center text-[#071B34] font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New: Enhanced Trademark Symbols Section */}
      {service.details?.trademarkSymbols && service.details?.trademarkSymbols.length > 0 && (
        <section id="trademark-symbols" className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="lg:text-4xl text-3xl font-semibold text-[#071B34] mb-3">Trademark Symbols</h2>
              <p className="text-sm text-gray-600">Understanding proper symbol usage</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
              {service.details.trademarkSymbols.map((symbol, index) => (
                <div key={index} className="bg-white rounded-xl p-5 shadow-md border border-gray-200 text-center hover:shadow-lg transition-all">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#071B34] to-[#0a2847] rounded-lg flex items-center justify-center mx-auto mb-3 text-white text-3xl font-bold">
                    {symbol.symbol}
                  </div>
                  <h3 className="text-base font-bold text-[#071B34] mb-2">{symbol.name}</h3>
                  <p className="text-xs text-gray-600 mb-3">{symbol.description}</p>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-xs text-gray-600">
                      {symbol.symbol === "™" && "Use for unregistered marks"}
                      {symbol.symbol === "®" && "Only for registered marks"}
                      {symbol.symbol === "℠" && "For unregistered services"}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Legal Notice - Compressed */}
            <div className="bg-gradient-to-r from-[#071B34] to-[#0a2847] text-white rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-center">Important Legal Notice</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <h4 className="font-semibold mb-2 text-[#EAB308]">Usage Guidelines:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Place symbols in superscript</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>Use ® only after registration</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-[#EAB308]">Legal Consequences:</h4>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>Misuse can result in penalties</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-3 w-3 text-red-400 flex-shrink-0 mt-0.5" />
                      <span>False claims are prosecutable</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Enhanced Comparison Table */}
      {service.details?.ipComparison && service.details?.ipComparison.length > 0 && (
        <section id="differences" className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="lg:text-4xl text-3xl font-semibold text-[#071B34] mb-3">Trademark vs Copyright vs Patent</h2>
              <p className="text-sm text-gray-600">Understanding IP protection types</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-[#071B34] text-white">
                    <tr>
                      <th className="p-3 text-left font-semibold">Type</th>
                      <th className="p-3 text-left font-semibold">Protection</th>
                      <th className="p-3 text-left font-semibold">Duration</th>
                      <th className="p-3 text-left font-semibold">Application</th>
                      <th className="p-3 text-left font-semibold">Example</th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.details.ipComparison.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 font-bold text-[#071B34]">{item.category}</td>
                        <td className="p-3 text-gray-600">{item.protection}</td>
                        <td className="p-3 text-gray-600">{item.duration}</td>
                        <td className="p-3 text-gray-600">{item.application}</td>
                        <td className="p-3 text-gray-600">{item.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}







      {/* Enhanced Trademark Classes Section */}
      {service.details?.trademarkClasses && (
       <section
  id="classes"
  className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-white to-light-orange dark:from-gray-900 dark:to-deep-blue"
>
  <div className="container mx-auto px-4">
    <div className="text-center mb-10 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-4 sm:mb-6 px-2">
        Understanding Trademark Classes
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
        {service.details?.trademarkClasses.description}
      </p>
    </div>

    <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden max-w-6xl mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-deep-blue/5 to-gray-500/5"></div>
      <CardContent className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Goods Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-deep-blue dark:text-white">
              Classes 1-34: Goods
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              These classes cover tangible products and physical goods across various industries including
              chemicals, pharmaceuticals, machinery, vehicles, textiles, and more.
            </p>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-light-orange to-rang dark:from-gray-700 dark:to-gray-600 rounded-xl sm:rounded-2xl">
              <h4 className="text-lg sm:text-xl font-semibold text-deep-blue dark:text-white mb-2 sm:mb-3">
                Popular Goods Classes:
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Class 9: Computer software and electronics</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Class 25: Clothing and footwear</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Class 30: Food products and beverages</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-deep-blue dark:text-white">
              Classes 35-45: Services
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              These classes cover intangible services including business management, telecommunications,
              transportation, education, entertainment, and professional services.
            </p>
            <div className="p-4 sm:p-6 bg-gradient-to-r from-light-orange to-rang dark:from-gray-700 dark:to-gray-600 rounded-xl sm:rounded-2xl">
              <h4 className="text-lg sm:text-xl font-semibold text-deep-blue dark:text-white mb-2 sm:mb-3">
                Popular Service Classes:
              </h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Class 35: Business management and advertising</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Class 41: Education and entertainment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>Class 42: Technology and scientific services</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="p-6 sm:p-8 bg-gradient-to-r from-deep-blue to-gray-600 rounded-2xl sm:rounded-3xl text-white">
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 px-2">
              Need Help Choosing the Right Class?
            </h4>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-blue-100 px-2">
              Our trademark experts will help you identify the correct classes for your business to ensure
              comprehensive protection.
            </p>
            <Button className="bg-white text-deep-blue hover:bg-gray-100 font-bold 
                              px-6 sm:px-8 py-2.5 sm:py-3 
                              rounded-xl sm:rounded-2xl 
                              shadow-lg text-sm sm:text-base 
                              w-full sm:w-auto">
              <Link href="/services/trademark-class-finder" className="flex items-center justify-center gap-2">
                Get Class Recommendation
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
</section>
      )}

      {/* Enhanced Trademark Search Section */}
      <section id="TS" className="py-20 px-4 bg-gradient-to-br from-rang to-white dark:from-gray-950 dark:to-gray-800">
        <div className="container mx-auto px-4 lg:px-28">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
              Comprehensive Trademark Search
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {service.details?.trademarkSearch}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-white dark:bg-gray-800 border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-deep-blue to-gray-600 text-white text-center py-8">
                  <CardTitle className="text-2xl font-bold">Why Trademark Search is Critical</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-deep-blue dark:text-white">Avoid Conflicts</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Identify existing trademarks that could conflict with your application
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-deep-blue dark:text-white">Save Time & Money</h4>
                        <p className="text-gray-600 dark:text-gray-300">Prevent costly rejections and legal disputes</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-deep-blue dark:text-white">Strategic Planning</h4>
                        <p className="text-gray-600 dark:text-gray-300">
                          Make informed decisions about your brand strategy
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-light-orange to-rang dark:from-gray-800 dark:to-gray-700 border-0 shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-deep-blue dark:text-white mb-6 text-center">
                    Our Search Process
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-deep-blue to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue dark:text-white">Identical Mark Search</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Search for exact matches in your class
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-deep-blue to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue dark:text-white">Similar Mark Analysis</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Identify phonetically and visually similar marks
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-deep-blue to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue dark:text-white">Cross-Class Review</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Check related classes for potential conflicts
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-deep-blue to-gray-600 rounded-full flex items-center justify-center text-white font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-deep-blue dark:text-white">Detailed Report</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">
                          Comprehensive analysis with recommendations
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>



      {/* Enhanced Why Choose Us Section */}
      {service.details?.howWeAssist && service.details?.howWeAssist.length > 0 && (
        <section
          id="why-choose-us"
          className="py-12 bg-gradient-to-br from-[#071B34] via-[#071B34] to-gray-900 text-white relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-semibold mb-3">Why Choose Our Services?</h2>
              <p className="text-sm text-gray-300 max-w-2xl mx-auto">
                Trademark registration can be complex. We simplify it with expert guidance and comprehensive support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {service.details?.howWeAssist.map((assist, index) => (
                <Card
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all rounded-xl overflow-hidden"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#EAB308] rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-[#071B34]" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white mb-2">{assist.title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{assist.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Enhanced FAQ Section */}
      {service.details?.faq && service.details?.faq.length > 0 && (
        <section id="faq" className="py-20 bg-gradient-to-br from-white to-rang dark:from-gray-900 dark:to-gray-800">
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
                    {service.details?.faq.map((item, index) => (
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
      )}

      {/* Final CTA Section */}
      <CtaSection
        title="Secure Your Brand Today"
        serviceName="Trademark Registration"
        description="Don't wait — protect your valuable intellectual property with India's most trusted service for"
      />



    </div>
  )
}
