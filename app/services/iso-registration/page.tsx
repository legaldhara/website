import Image from "next/image"
import {
  CheckCircle,
  ShieldCheck,
  TrendingUp,
  Globe,
  Phone,
  ArrowRight,
  Award,
  Users,
  FileText,
  Clock,
  Target,
  Shield,
  Building,
  Leaf,
  Heart,
  Lock,
  Utensils,
  Lightbulb,
  Stethoscope,
   IndianRupee,
} from "lucide-react"

import { Button } from "@/components/ui/button" // Added Button import
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import isoRegistrationService from "./data"
import CtaSection from "@/components/ui/CtaSection"
import Link from "next/link"
import type { Metadata } from "next"


export const metadata: Metadata = {
  title: "ISO Certification Online in India | Legal Dhara - 0 Service Charge & Expert Assistance",
  description:
    "Get ISO certification online with Legal Dhara — India’s most trusted LegalTech platform offering 0 service charge on ISO registration. We help businesses obtain ISO 9001, ISO 14001, ISO 22000, and other certifications with complete documentation and expert support. Fast, transparent, and affordable ISO certification services for startups and enterprises across India.",
  keywords:
    "ISO certification India, online ISO registration, 0 service charge ISO, free ISO certification, ISO 9001 registration, ISO 14001 certification, ISO 22000 certification, Legal Dhara, ISO consultant India, business certification, quality management certification, ISO compliance, ISO registration online, startup ISO certification, ISO documentation, legal tech platform India, ISO certificate for company, ISO registration service provider, ISO certification for small business",
};

export default function IsoRegistration() {
  const service = isoRegistrationService // Use the directly imported service data

  const isoTypes = [
    {
      standard: "ISO 9001:2015",
      title: "Quality Management Systems",
      description: "Ensures consistent quality in products and services through systematic quality management.",
      icon: Target,
      benefits: ["Improved customer satisfaction", "Enhanced operational efficiency", "Better risk management"],
      suitableFor: "All industries and organizations",
    },
    {
      standard: "ISO 14001:2015",
      title: "Environmental Management Systems",
      description: "Helps organizations minimize environmental impact and comply with environmental regulations.",
      icon: Leaf,
      benefits: ["Reduced environmental impact", "Cost savings through efficiency", "Enhanced reputation"],
      suitableFor: "Manufacturing, construction, chemical industries",
    },
    {
      standard: "ISO 45001:2018",
      title: "Occupational Health & Safety",
      description: "Provides framework for managing workplace health and safety risks effectively.",
      icon: Heart,
      benefits: ["Reduced workplace accidents", "Lower insurance costs", "Improved employee morale"],
      suitableFor: "High-risk industries, construction, manufacturing",
    },
    {
      standard: "ISO 27001:2022",
      title: "Information Security Management",
      description: "Protects sensitive information through comprehensive information security management.",
      icon: Lock,
      benefits: ["Enhanced data security", "Regulatory compliance", "Customer trust"],
      suitableFor: "IT companies, financial services, healthcare",
    },
    {
      standard: "ISO 22000:2018",
      title: "Food Safety Management",
      description: "Ensures food safety throughout the entire food supply chain.",
      icon: Utensils,
      benefits: ["Food safety assurance", "Market access", "Consumer confidence"],
      suitableFor: "Food processing, restaurants, agriculture",
    },
    {
      standard: "ISO 50001:2018",
      title: "Energy Management Systems",
      description: "Helps organizations improve energy performance and reduce energy costs.",
      icon: Lightbulb,
      benefits: ["Energy cost reduction", "Environmental benefits", "Operational efficiency"],
      suitableFor: "Energy-intensive industries, manufacturing",
    },
    {
      standard: "ISO 13485:2016",
      title: "Medical Devices Quality",
      description: "Specialized quality management system for medical device manufacturers.",
      icon: Stethoscope,
      benefits: ["Regulatory compliance", "Market access", "Patient safety"],
      suitableFor: "Medical device manufacturers, healthcare providers",
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Standard Selection & Gap Analysis",
      description: "Identify the appropriate ISO standard and assess current processes against requirements.",
      timeframe: "1-2 weeks",
      details: ["Choose relevant ISO standard", "Conduct comprehensive gap analysis", "Identify improvement areas"],
    },
    {
      step: 2,
      title: "Documentation Development",
      description: "Create comprehensive documentation including quality manual, procedures, and work instructions.",
      timeframe: "4-6 weeks",
      details: ["Quality manual creation", "Process documentation", "Work instruction development"],
    },
    {
      step: 3,
      title: "System Implementation",
      description: "Implement the management system with employee training and process integration.",
      timeframe: "6-8 weeks",
      details: ["Employee training programs", "Process implementation", "System integration"],
    },
    {
      step: 4,
      title: "Internal Audit",
      description: "Conduct internal audits to verify system effectiveness and identify improvements.",
      timeframe: "2-3 weeks",
      details: ["Internal audit planning", "Audit execution", "Non-conformity resolution"],
    },
    {
      step: 5,
      title: "Management Review",
      description: "Review system performance and ensure continual improvement processes.",
      timeframe: "1 week",
      details: ["Performance review", "Improvement planning", "Resource allocation"],
    },
    {
      step: 6,
      title: "External Certification Audit",
      description: "Two-stage certification audit by accredited certification body.",
      timeframe: "2-4 weeks",
      details: ["Stage 1: Documentation review", "Stage 2: On-site audit", "Certificate issuance"],
    },
  ]

  const benefits = [
    {
      title: "Enhanced Credibility",
      description: "ISO certification builds trust with customers, suppliers, and stakeholders globally.",
      icon: ShieldCheck,
    },
    {
      title: "Improved Efficiency",
      description: "Streamlined processes lead to better operational efficiency and cost savings.",
      icon: TrendingUp,
    },
    {
      title: "Global Market Access",
      description: "Opens doors to international markets and government tenders.",
      icon: Globe,
    },
    {
      title: "Risk Management",
      description: "Better identification and management of business risks and opportunities.",
      icon: Shield,
    },
    {
      title: "Customer Satisfaction",
      description: "Consistent quality delivery leads to higher customer satisfaction and retention.",
      icon: Users,
    },
    {
      title: "Competitive Advantage",
      description: "Stand out from competitors with internationally recognized certification.",
      icon: Award,
    },
  ]

  const requirements = [
    {
      title: "Business Registration",
      description: "Registered entity with operational presence in India for minimum 5 years",
      icon: Building,
    },
    {
      title: "Minimum Staff",
      description: "At least 10 employees to demonstrate organizational structure",
      icon: Users,
    },
    {
      title: "Quality Management System",
      description: "Documented QMS aligned with chosen ISO standard requirements",
      icon: FileText,
    },
    {
      title: "Employee Training",
      description: "Adequate training programs for staff on quality management principles",
      icon: Users,
    },
    {
      title: "Internal Audits",
      description: "Regular internal audit processes to monitor system effectiveness",
      icon: CheckCircle,
    },
    {
      title: "Management Commitment",
      description: "Top management commitment to quality policy and continuous improvement",
      icon: Target,
    },
  ]

  const documents = [
    {
      category: "Basic Documents",
      items: [
        "Certificate of Incorporation/Registration",
        "PAN Card of the organization",
        "GST Registration Certificate",
        "Address proof of registered office",
        "List of products/services offered",
      ],
    },
    {
      category: "Quality Management Documents",
      items: [
        "Quality Manual",
        "Quality Policy and Objectives",
        "Organizational Chart",
        "Process Flow Charts",
        "Standard Operating Procedures (SOPs)",
      ],
    },
    {
      category: "Operational Documents",
      items: [
        "Employee training records",
        "Internal audit reports",
        "Management review records",
        "Customer feedback records",
        "Supplier evaluation records",
      ],
    },
  ]

  // Dynamically build sections based on available data
  const sections = [
    { title: "Overview", id: "overview" },
    { title: "Types", id: "types" },
    { title: "Benefits", id: "benefits" },
    { title: "Process", id: "process" },
    { title: "Requirements", id: "requirements" },
    { title: "Documents", id: "documents" },
    { title: "Timeline & Cost", id: "timeline-cost" },
    { title: "Why Choose Us", id: "why-choose-us" },
    { title: "FAQs", id: "faqs" },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
      
          <SectionNavigation sections={sections} />
     

      {/* Overview Section */}
         {/* Overview Section */}
      <section id="overview" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mb-6">What is ISO Certification?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                ISO certification is an internationally recognized standard that demonstrates your organization's
                commitment to quality, efficiency, and customer satisfaction. Achieving this ISO certification in India can significantly enhance your business's credibility and competitive edge, opening doors to global markets and improving overall operational effectiveness.
              </p>
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mt-6 mb-6">The objective of ISO Certification</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
               ISO certification aims to provide a framework for businesses to establish, implement, and maintain a management system that meets international standards. The ISO certification process helps companies identify and manage risks, improve operations, and demonstrate a commitment to quality and continuous improvement. ISO certificate apply online process involves document submission, audit assessment, and certification from an authorized body.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-blue-100 dark:border-blue-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-deep-blue dark:text-blue-400">
                    <Award className="h-6 w-6" />
                    International Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    ISO standards are developed by the International Organization for Standardization, bringing together
                    experts worldwide to create globally recognized benchmarks for quality and efficiency.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 dark:border-green-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-600 dark:text-green-400">
                    <Target className="h-6 w-6" />
                    Continuous Improvement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    ISO certification promotes a culture of continuous improvement, helping organizations identify
                    risks, improve operations, and demonstrate commitment to excellence.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-deep-blue rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose ISO Certification?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Global Market Access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Enhanced Credibility</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-200" />
                  <span>Operational Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section id="types" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mb-6">ISO Certification Types</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Choose the right ISO standard for your industry and business needs
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {isoTypes.map((type, index) => {
                const IconComponent = type.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          <IconComponent className="h-6 w-6 text-deep-blue dark:text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <Badge variant="outline" className="mb-2">
                            {type.standard}
                          </Badge>
                          <CardTitle className="text-xl mb-2">{type.title}</CardTitle>
                          <CardDescription className="text-base">{type.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-deep-blue dark:text-white mb-2">Key Benefits:</h4>
                          <ul className="space-y-1">
                            {type.benefits.map((benefit, idx) => (
                              <li
                                key={idx}
                                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                              >
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-deep-blue dark:text-white mb-1">Suitable For:</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{type.suitableFor}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mb-6">Benefits of ISO Certification</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Transform your business with internationally recognized standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="mx-auto p-4 bg-gradient-to-br from-deep-blue to-indigo-600 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mb-6">ISO Certification Process</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Step-by-step journey to achieve ISO certification
              </p>
            </div>

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col lg:flex-row">
                      <div className="lg:w-1/4 bg-gradient-to-br from-deep-blue to-sky-900 p-6 text-white">
                        <div className="text-center">
                          <div className="text-3xl font-bold mb-2">Step {step.step}</div>
                          <div className="flex items-center justify-center gap-2 text-blue-100">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{step.timeframe}</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:w-3/4 p-6">
                        <h3 className="text-xl font-bold text-deep-blue dark:text-white mb-3">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
                        <div className="grid md:grid-cols-3 gap-4">
                          {step.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600 dark:text-gray-300">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mb-6">ISO Certification Requirements</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Essential prerequisites for ISO certification in India
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {requirements.map((req, index) => {
                const IconComponent = req.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-deep-blue rounded-lg">
                          <IconComponent className="h-5 w-5 text-deep-blue dark:text-deep-blue" />
                        </div>
                        <CardTitle className="text-lg text-deep-blue">{req.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{req.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mb-6">Required Documents</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Complete documentation checklist for ISO certification
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {documents.map((docCategory, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <FileText className="h-5 w-5 text-deep-blue dark:text-deep-blue" />
                      {docCategory.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {docCategory.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Cost Section */}
      <section id="timeline-cost" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mb-6">Timeline & Investment</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Understanding the time and cost involved in ISO certification
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-blue-100 dark:border-blue-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-600 dark:text-blue-400">
                    <Clock className="h-6 w-6" />
                    Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <span className="font-medium">Total Duration</span>
                    <Badge variant="secondary">3-6 months</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Gap Analysis & Planning</span>
                      <span className="text-gray-500">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Documentation Development</span>
                      <span className="text-gray-500">4-6 weeks</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Implementation & Training</span>
                      <span className="text-gray-500">6-8 weeks</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Internal Audit & Review</span>
                      <span className="text-gray-500">3-4 weeks</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>External Certification Audit</span>
                      <span className="text-gray-500">2-4 weeks</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-100 dark:border-green-900">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-green-600 dark:text-green-400">
                    < IndianRupee className="h-6 w-6" />
                    Investment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg text-white">
                    <div className="text-2xl font-bold">Starting from ₹25,999</div>
                    <div className="text-sm text-green-100">Complete ISO certification package</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Consultation & Gap Analysis</span>
                      <span className="text-gray-500">Included</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Documentation Support</span>
                      <span className="text-gray-500">Included</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Training & Implementation</span>
                      <span className="text-gray-500">Included</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Certification Body Fees</span>
                      <span className="text-gray-500">Additional</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 text-center">
                    *Final cost varies based on organization size and complexity
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-deep-blue dark:text-white mb-6">
                Why Choose Our ISO Certification Services?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Expert guidance and comprehensive support throughout your certification journey
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service?.details?.keyFeatures?.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto p-3 bg-gradient-to-br from-deep-blue to-slate-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-deep-blue to-slate-700 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get ISO Certified?</h3>
              <p className="text-blue-100 mb-6">
                Join thousands of organizations that have achieved ISO certification with our expert guidance
              </p>
              <Link href='#'>
               <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3">
                Start Your ISO Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
             
            </div>
          </div>
        </div>
      </section>

      {service.details?.faqs && service.details?.faqs.length > 0 && (
        <section id="faqs" className="py-20 bg-gradient-to-br from-white to-rang dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get answers to common questions about ISO registration
                </p>
              </div>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {service.details?.faqs.map((item, index) => (
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
  title="Boost Your Business Credibility with ISO Registration"
  serviceName="ISO Registration"
  description="Get globally recognized certification and enhance customer trust with India's most reliable"
/>

    </div>
  )
}
