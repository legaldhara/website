import { CheckCircle,  Calculator , Shield , TrendingUp , CreditCard,Globe,Award,FileText, Package,Briefcase,Truck,ShoppingCart,Clock, Users,} from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import gstRegistrationService from "./data" // Direct import
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import CtaSection from '@/components/ui/CtaSection'
import { Metadata } from 'next'



export const metadata: Metadata = {
  title: "GST Registration Online in India | Legal Dhara - 0 Service Charge & Expert Assistance",
  description:
    "Apply for GST registration online with Legal Dhara — India’s most trusted LegalTech platform offering 0 service charge on GST filing and registration. Get expert help for new GST registration, GST return filing, amendments, and compliance. Fast, reliable, and affordable GST services for startups, entrepreneurs, and businesses across India.",
  keywords:
    "GST registration India, online GST registration, 0 service charge GST, free GST registration, GST return filing, Legal Dhara, GST amendment, GST compliance, GST certificate, GST number application, business registration, startup GST services, GST consultant India, GST filing services, online legal services, legal tech platform India, tax registration India, GST advisor India, apply for GST, GST registration for startups, small business GST registration",
};


export default function GstRegistrationPage() {
 
  const getIcon = (iconName?: string ) => {
    const icons: { [key: string]: any } = {
      Package,
      Briefcase,
      Truck,
      ShoppingCart,
      CheckCircle,
      Shield,
      CreditCard,
      Globe,
      Award,
      FileText,
      TrendingUp,
      Calculator,
      Clock,
      Users,
    }
    const IconComponent = iconName ? icons[iconName] || CheckCircle : CheckCircle
    return <IconComponent className="h-6 w-6" />
  }


  const service = gstRegistrationService // Use the directly imported service data

  // Dynamically build sections based on available data
   const sections = [
    { title: "Overview", id: "overview" },
    { title: "Eligibility", id: "eligibility" },
    { title: "Benefits", id: "benefits" },
    { title: "Process", id: "process" },
    { title: "Documents", id: "documents" },
    { title: "Pricing", id: "pricing" },
    { title: "Why Choose Us", id: "why-choose-us" },
    { title: "FAQ", id: "faq" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      {/* Hero Section and Form (Common for all services) */}
      <ServiceHeroForm service={service} />

      {/* Enhanced Section Navigation */}
       <SectionNavigation sections={sections} />

     <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Overview Section */}
        <section id="overview" className="scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What is GST Registration?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
              <p className="text-xl leading-relaxed mb-6">{service.details?.introductoryText}</p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <Card className="border-l-4 border-l-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Calculator className="h-8 w-8 text-blue-500" />
                      <h3 className="font-semibold text-lg">Unified Tax System</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      One tax system replacing multiple indirect taxes across India
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="h-8 w-8 text-green-500" />
                      <h3 className="font-semibold text-lg">Legal Compliance</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Mandatory for businesses above specified turnover limits
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-l-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-8 w-8 text-purple-500" />
                      <h3 className="font-semibold text-lg">Business Growth</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enables interstate business and input tax credit benefits
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section id="eligibility" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Who Needs GST Registration?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.details?.eligibilityCriteria?.map((criteria, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      {getIcon(criteria?.icon)}
                      <CardTitle className="text-lg">{criteria.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{criteria.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Turnover Limits Table */}
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">Turnover Limits for Mandatory Registration</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  <thead className="bg-blue-50 dark:bg-blue-900/20">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Supply Type</th>
                      <th className="px-6 py-4 text-left font-semibold">Normal States</th>
                      <th className="px-6 py-4 text-left font-semibold">Special Category States</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td className="px-6 py-4 font-medium">Goods Supply</td>
                      <td className="px-6 py-4">₹40 Lakhs</td>
                      <td className="px-6 py-4">₹20 Lakhs</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium">Services Supply</td>
                      <td className="px-6 py-4">₹20 Lakhs</td>
                      <td className="px-6 py-4">₹10 Lakhs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="scroll-mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-2xl p-8"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Benefits of GST Registration
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.details?.whyRegisterDetailed?.map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      {getIcon(benefit.icon)}
                      <h3 className="font-semibold text-lg">{benefit.title}</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              GST Registration Process
            </h2>
            <div className="space-y-6">
              {service.details?.processSteps?.map((step, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {step.timeframe}
                          </Badge>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Required Documents</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.details?.requiredDocuments?.documentTypes?.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-500" />
                      {category.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.documents.map((doc, docIndex) => (
                        <li key={docIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="scroll-mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Transparent Pricing</h2>
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800">
              <CardContent className="p-8">
                <div className="text-center space-y-4">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{service.price}</div>
                  <p className="text-xl text-gray-600 dark:text-gray-400">Complete GST Registration Service</p>
                  <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-semibold">Government fees included</span>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mt-6 text-left">
                    {service.details?.keyFeatures?.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">{feature.title}:</span>
                          <span className="text-gray-600 dark:text-gray-400 ml-1">{feature.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-choose-us" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">How We Assist You</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.details?.howWeAssist?.map((assistance, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{assistance.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{assistance.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        {service?.details?.faq &&service?.details?.faq.length > 0 && (
        <section id="faq" className="py-20 bg-gradient-to-br from-white to-rang dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get answers to common questions about GST registration
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
      </div>

      {/* Final CTA Section */}
    
<CtaSection
  title="Simplify Your Tax Compliance with GST Registration"
  serviceName="GST Registration"
  description="Get your business GST registered quickly and start filing returns with India's most trusted"
/>


    </div>
  )
}
