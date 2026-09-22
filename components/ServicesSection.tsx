"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Scale,
  FileText,
  Shield,
  Calculator,
  Building,
  CheckCircle,
  ArrowRight,
  Briefcase,
  Globe,
  Award,
  BookOpen,
  CreditCard,
  Zap,
  RefreshCcw,
  Gift,
  Utensils,
} from "lucide-react"
import Link from "next/link"

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const categories = [
    { id: "all", name: "All Services", icon: <Briefcase className="h-4 w-4" /> },
    { id: "ip", name: "IP", icon: <Shield className="h-4 w-4" /> },
    { id: "registration", name: "Registration", icon: <Building className="h-4 w-4" /> },
    { id: "taxation", name: "Taxation", icon: <Calculator className="h-4 w-4" /> },
  ]

  const services = [
    {
      category: "ip",
      icon: <Scale className="h-8 w-8 text-white" />,
      title: "Trademark Registration",
      description: "Protect your brand with comprehensive trademark registration.",
      price: "₹0",
      features: ["Free Search", "Expert Consultation", "Government Filing", "Certificate"],
      href: "/services/trademark-registration",
      zeroCharge: true,
    },
    {
      category: "ip",
      icon: <RefreshCcw className="h-8 w-8 text-white" />,
      title: "Trademark Renewal",
      description: "Renew trademarks to maintain continuous protection.",
      price: "₹0",
      features: ["Renewal Filing", "Status Tracking", "Expert Support", "Reminders"],
      href: "/services/trademark-renewal",
      zeroCharge: true,
    },
    {
      category: "ip",
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "International Trademark",
      description: "Expand brand protection globally with Madrid Protocol.",
      price: "₹0",
      features: ["Madrid Protocol", "Multi-country Filing", "Global Protection", "Guidance"],
      href: "/services/international-trademark",
      zeroCharge: true,
    },
    {
      category: "ip",
      icon: <BookOpen className="h-8 w-8 text-white" />,
      title: "Copyright Registration",
      description: "Protect creative works and software with copyright.",
      price: "₹0",
      features: ["Creative Works", "Software Protection", "Content Rights", "Documentation"],
      href: "/services/copyright-registration",
      zeroCharge: true,
    },
    {
      category: "taxation",
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "GST Registration",
      description: "Complete GST registration and compliance services.",
      price: "₹0",
      features: ["GST Number", "Return Filing", "Compliance Support", "Guidance"],
      href: "/services/gst-registration",
      zeroCharge: true,
    },
    {
      category: "taxation",
      icon: <Calculator className="h-8 w-8 text-white" />,
      title: "GST Filing",
      description: "Monthly and quarterly GST return filing.",
      price: "₹0",
      features: ["Monthly Returns", "Quarterly Filing", "Error-free Process", "Compliance"],
      href: "/services/gst-filing",
      zeroCharge: true,
    },
    {
      category: "taxation",
      icon: <CreditCard className="h-8 w-8 text-white" />,
      title: "Income Tax Filing",
      description: "Professional ITR filing with maximum refunds.",
      price: "₹0",
      features: ["ITR Filing", "Tax Planning", "Refund Processing", "Support"],
      href: "/services/income-tax-filing",
      zeroCharge: true,
    },
    {
      category: "registration",
      icon: <Building className="h-8 w-8 text-white" />,
      title: "Company Registration",
      description: "Register Private Limited, LLP, or business entities.",
      price: "₹0",
      features: ["DIN & DSC", "Name Approval", "MOA & AOA", "Certificate"],
      href: "/services",
      zeroCharge: true,
    },
   {
  category: "registration",
  icon: <Utensils className="h-8 w-8 text-white" />, // You can also use 'ShieldCheck' or 'ClipboardCheck' if you prefer
  title: "FSSAI Registration",
  description: "Get your FSSAI Food License for your food business easily and quickly.",
  price: "₹1,499",
  features: [
    "Expert Consultation",
    "Document Preparation",
    "Application Filing",
    "FSSAI License Certificate"
  ],
  href: "/services/fssai-registration",
  zeroCharge: false,
}
,
    {
      category: "registration",
      icon: <Award className="h-8 w-8 text-white" />,
      title: "ISO Certification",
      description: "Get ISO certification for quality management.",
      price: "₹0",
      features: ["ISO 9001", "Quality Management", "International Recognition", "Audit"],
      href: "/services/iso-certification",
      zeroCharge: true,
    },
  ]

  const getFilteredServices = () => {
    if (activeCategory === "all") {
      return services
    }
    return services.filter((service) => service.category === activeCategory)
  }

  const filteredServices = getFilteredServices()
  const itemsPerSlide = isMobile ? 1 : 3
  // const totalSlides = Math.ceil(filteredServices.length / itemsPerSlide)

  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % totalSlides)
  // }

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  // }

  const visibleServices = filteredServices.slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide)

  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-deep-blue mb-3 md:mb-4 leading-tight">
            Smart Solutions for Modern Businesses
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Expert legal, compliance, and business services with{" "}
            <span className="font-semibold text-deep-blue">absolutely no service charges</span>
          </p>
        </div>

        {/* Zero Charge Banner */}
        <div className="bg-deep-blue rounded-xl p-5 md:p-6 mb-8 md:mb-10 relative overflow-hidden">
          {/* <div className="absolute inset-0 bg-deep-blue"></div> */}
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="h-5 w-5 md:h-6 md:w-6 text-[#FFC24F] animate-ping" />
              <h3 className="text-lg md:text-2xl font-bold text-white animate-pulse">₹0 Service Charges</h3>
              <Zap className="h-5 w-5 md:h-6 md:w-6 text-[#FFC24F] animate-ping" />
            </div>
            <p className="text-xs md:text-sm text-[#FFC24F]/90">
              Pay only Govt fees • No hidden charges • Expert consultation included
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-10">
        {categories.map((category) => (
  <button
    key={category.id}
    name="service"
    onClick={() => {
      setActiveCategory(category.id);
      setCurrentSlide(0);
    }}
    aria-label={`Select ${category.name} service`} // ✅ Screen reader label
    title={`${category.name} service`} // ✅ Tooltip for users
    className={`flex items-center gap-1.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
      activeCategory === category.id
        ? "bg-deep-blue text-white shadow-lg shadow-deep-blue/30"
        : "bg-white text-deep-blue hover:bg-deep-blue hover:text-white border-deep-blue hover:border-[#FFC24F]"
    }`}
  >
    <span aria-hidden="true">{category.icon}</span> {/* ✅ Icon ignored by screen readers */}
    <span className="hidden sm:inline">{category.name}</span>
  </button>
))}
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Services Carousel */}
          <div ref={carouselRef} className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {visibleServices.map((service, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border border-slate-200 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white hover:border-[#FFC24F]/50"
                >
                  {/* Gradient Background */}
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-deep-blue/5 to-[#FFC24F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}

                  {/* Zero Charge Badge */}
                  <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md text-xs md:text-sm">
                      <Gift className="h-3 w-3 mr-1" />
                      ₹0
                    </Badge>
                  </div>

                  <CardHeader className="pb-3 md:pb-4 relative z-10">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-lg bg-deep-blue shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-base md:text-lg text-deep-blue group-hover:text-deep-blue transition-colors mb-2 font-bold text-center">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-xs md:text-sm text-slate-600 leading-relaxed text-center">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-xs md:text-sm text-slate-600">
                          <CheckCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full bg-deep-blue hover:from-[#FFC24F] hover:to-[#FFC24F]/90 hover:text-deep-blue text-white font-semibold py-2 md:py-2.5 text-xs md:text-sm transition-all duration-300 border-0"
                    >
                      <Link href={service.href}>
                        Get Started
                        <ArrowRight className="ml-1.5 h-3.5 w-3.5 md:h-4 md:w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Carousel Controls */}
          {/* {totalSlides > 1 && (
            <div className="flex items-center justify-center gap-3 mt-6 md:mt-8">
              <button
                onClick={prevSlide}
                className="p-2 md:p-2.5 rounded-full bg-deep-blue text-white hover:bg-deep-blue/90 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>


              <div className="flex gap-1.5 md:gap-2">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? "bg-deep-blue w-6 md:w-8" : "bg-slate-300 w-2 md:w-2.5 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 md:p-2.5 rounded-full bg-deep-blue text-white hover:bg-deep-blue/90 transition-all duration-300 shadow-md hover:shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          )} */}
        </div>

        {/* View All Services Button */}
        {activeCategory !== "all" && (
          <div className="text-center mt-8 md:mt-10">
            <Button
              asChild
              className="bg-gradient-to-r from-[#FFC24F] to-[#FFC24F]/90 hover:from-deep-blue hover:to-deep-blue/90 text-deep-blue hover:text-white px-6 md:px-8 py-2 md:py-2.5 text-sm md:text-base shadow-lg hover:shadow-xl transition-all duration-300 font-semibold border-0"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ServicesSection
