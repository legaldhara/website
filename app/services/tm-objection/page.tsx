import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion , AccordionItem , AccordionContent ,AccordionTrigger } from "@/components/ui/accordion"
import {
  CheckCircle,
  Clock,
  FileText,
  Gavel,
  Scale,
  Shield,
  AlertTriangle,
  Award,
  ArrowRight,
  Phone,
  MessageSquare,
} from "lucide-react"
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import trademarkObjectionService from "./data"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Trademark Objection Reply Services | Expert Legal Response ",
  description:
    "Professional trademark objection reply service?s. Expert legal assistance to overcome trademark objections and secure your brand registration. 30-day response guarantee.",
  keywords:
    "trademark objection reply, trademark objection response, trademark legal services, brand protection, trademark registration help",
}

export default function TrademarkObjectionPage() {
  const service = trademarkObjectionService

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <ServiceHeroForm service={service} />

      {/* Section Navigation */}
      <SectionNavigation
        sections={[
          { id: "overview", title: "Overview" },
          { id: "objection-grounds", title: "Objection Grounds" },
          { id: "timeline", title: "Timeline & Fees" },
          { id: "process", title: "Our Process" },
          { id: "documents", title: "Required Documents" },
          { id: "why-choose-us", title: "Why Choose Us" },
          { id: "faq", title: "FAQ" },
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        <section id="overview" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Understanding Trademark Objection</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              A trademark objection is a formal notice from the Registrar of Trademarks indicating issues with a
              trademark application that need to be addressed before registration can proceed. It is not a rejection,
              but a request for clarification or modification. Understanding the objection process is crucial for
              successful brand protection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(service?.details?.whatIsTrademarkObjection?.keyPoints ?? []).map((point : string, index : number) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{point}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <Gavel className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">What is a Trademark Objection?</h3>
                    <p className="text-blue-600 font-medium">Legal Definition & Implications</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  A trademark objection is a formal communication from the Trademark Examiner stating reasons why your
                  trademark application cannot be registered in its current form. The reviewing officer must confirm
                  that the trademark application meets all necessary standards and regulations under the Trade Marks
                  Act, 1999. This process ensures that only distinctive, non-conflicting marks receive registration
                  protection.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      Key Understanding Points
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Not a final rejection - it's a clarification request</li>
                      <li>• Opportunity to strengthen your application</li>
                      <li>• 30-day response window is mandatory</li>
                      <li>• Professional response significantly improves success rates</li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                      Critical Consequences
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Application abandonment if no response filed</li>
                      <li>• Loss of priority date and application fees</li>
                      <li>• Need to restart entire registration process</li>
                      <li>• Potential loss of brand protection rights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="objection-grounds" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Common Grounds for Trademark Objection</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Understanding the specific reasons why trademark applications face objections helps in crafting effective
              responses. Objections typically fall under two main categories under the Trade Marks Act, 1999.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Section 9 Objections */}
            <Card className="border-2 border-red-200">
              <CardHeader className="bg-red-50">
                <CardTitle className="flex items-center text-red-700">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  {service?.details?.objectionGrounds.section9.title}
                </CardTitle>
                <CardDescription className="text-red-600">
                  {service?.details?.objectionGrounds.section9.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {service?.details?.objectionGrounds?.section9?.examples?.map((example : any, index : number) => (
                  <div key={index} className="border-l-4 border-l-red-300 pl-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">{example.type}</h4>
                    <p className="text-sm text-gray-600">{example.description}</p>
                    <p className="text-sm text-gray-500 italic">Example: {example.example}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Section 11 Objections */}
            <Card className="border-2 border-orange-200">
              <CardHeader className="bg-orange-50">
                <CardTitle className="flex items-center text-orange-700">
                  <Scale className="w-6 h-6 mr-3" />
                  {service?.details?.objectionGrounds.section11.title}
                </CardTitle>
                <CardDescription className="text-orange-600">
                  {service?.details?.objectionGrounds.section11.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {service?.details?.objectionGrounds.section11.examples.map((example : any , index : number) => (
                  <div key={index} className="border-l-4 border-l-orange-300 pl-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">{example.type}</h4>
                    <p className="text-sm text-gray-600">{example.description}</p>
                    <p className="text-sm text-gray-500 italic">Example: {example.example}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-700">Additional Common Objection Grounds</CardTitle>
              <CardDescription className="text-purple-600">
                Other frequent reasons for trademark objections beyond Sections 9 and 11
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-l-purple-300 pl-4">
                    <h4 className="font-semibold text-gray-900">Procedural Issues</h4>
                    <p className="text-sm text-gray-600">
                      Incorrect forms, inaccurate applicant name or address, or not submitting Form TM-48 (Power of
                      Attorney)
                    </p>
                  </div>
                  <div className="border-l-4 border-l-purple-300 pl-4">
                    <h4 className="font-semibold text-gray-900">Violation of Public Policy</h4>
                    <p className="text-sm text-gray-600">
                      The trademark is offensive, obscene, or goes against public policy or morality
                    </p>
                  </div>
                  <div className="border-l-4 border-l-purple-300 pl-4">
                    <h4 className="font-semibold text-gray-900">Deceptive or Confusing Mark</h4>
                    <p className="text-sm text-gray-600">
                      The trademark is misleading or could create confusion among consumers about the nature of
                      goods/service?s
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-l-purple-300 pl-4">
                    <h4 className="font-semibold text-gray-900">Lack of Distinctiveness</h4>
                    <p className="text-sm text-gray-600">
                      The mark is generic or commonly used, not capable of distinguishing your goods or service?s from
                      others
                    </p>
                  </div>
                  <div className="border-l-4 border-l-purple-300 pl-4">
                    <h4 className="font-semibold text-gray-900">Similarity to Existing Trademarks</h4>
                    <p className="text-sm text-gray-600">
                      Your mark is similar or identical to a pre-existing registered trademark or pending application,
                      potentially causing confusion
                    </p>
                  </div>
                  <div className="border-l-4 border-l-purple-300 pl-4">
                    <h4 className="font-semibold text-gray-900">Descriptive or Generic Mark</h4>
                    <p className="text-sm text-gray-600">
                      The trademark merely describes the goods or service?s, lacking the distinctiveness required for
                      registration
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Objection vs Opposition */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{service?.details?.objectionVsOpposition.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              It's essential to distinguish between "objection" and "opposition" as they have distinct meanings and
              procedures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-blue-700">Trademark Objection</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Definition:</h4>
                  <p className="text-gray-600">{service?.details?.objectionVsOpposition.objection.definition}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Raised By:</h4>
                  <p className="text-gray-600">{service?.details?.objectionVsOpposition.objection.raisedBy}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Timing:</h4>
                  <p className="text-gray-600">{service?.details?.objectionVsOpposition.objection.timing}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-purple-700">Trademark Opposition</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Definition:</h4>
                  <p className="text-gray-600">{service?.details?.objectionVsOpposition.opposition.definition}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Raised By:</h4>
                  <p className="text-gray-600">{service?.details?.objectionVsOpposition.opposition.raisedBy}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Timing:</h4>
                  <p className="text-gray-600">{service?.details?.objectionVsOpposition.opposition.timing}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Response Timeline */}
        <section id="timeline" className="space-y-8">
          <Card className="border-2 border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-800">
                <Clock className="w-6 h-6 mr-3" />
                {service?.details?.responseTimeline.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Time Limit:</h4>
                  <p className="text-gray-700">{service?.details?.responseTimeline.timeLimit}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Consequences:</h4>
                  <p className="text-gray-700">{service?.details?.responseTimeline.consequences}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Extension:</h4>
                  <p className="text-gray-700">{service?.details?.responseTimeline.extensionPossible}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="process" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Complete Process to Respond to Trademark Objection</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our systematic approach ensures thorough analysis and effective response to trademark objections,
              following the legal requirements under the Trade Marks Act, 1999.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">Understand the Objection</h3>
                    <p className="text-gray-600">
                      Carefully read the Examination Report to identify the specific grounds for objection. This
                      involves analyzing whether the objection falls under Section 9 (absolute grounds) or Section 11
                      (relative grounds) of the Trade Marks Act, 1999.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Key Analysis Points:</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Identify specific legal sections cited in the objection</li>
                        <li>• Understand the examiner's reasoning and concerns</li>
                        <li>• Assess the strength and validity of the objection</li>
                        <li>• Determine the best response strategy based on objection type</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold">2</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">Gather Evidence of Use</h3>
                    <p className="text-gray-600">
                      Collect comprehensive proof to show your brand's legitimacy and acquired distinctiveness. This
                      evidence forms the backbone of your objection response.
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">Essential Evidence Types:</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Screenshots of social media pages and website usage</li>
                        <li>• Photos of products with the trademark prominently displayed</li>
                        <li>• Invoices, bills, and sales documents showing commercial use</li>
                        <li>• Customer reviews, testimonials, and press coverage</li>
                        <li>• Marketing materials, advertisements, and promotional content</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">Draft the Reply to Examination Report</h3>
                    <p className="text-gray-600">
                      Prepare a clear, confident, and legally backed response. This is usually submitted through Form
                      TM-M, along with the reply document and annexures (evidence).
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">Reply Structure Components:</h4>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• Brief introduction acknowledging the examination report</li>
                        <li>• Point-wise rebuttal of each objection raised</li>
                        <li>• Legal arguments with relevant case law references</li>
                        <li>• Details of prior use and acquired distinctiveness</li>
                        <li>• Prayer to accept the mark for registration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-red-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold">4</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">File the Objection Reply</h3>
                    <p className="text-gray-600">
                      The response must be filed within 30 days from the date of receiving the objection. Failure to
                      respond within this timeframe may result in the application being treated as abandoned or
                      rejected.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">Critical Filing Requirements:</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Submit within mandatory 30-day deadline</li>
                        <li>• Extension of up to 30 days may be requested if needed</li>
                        <li>• Include all supporting documents and evidence</li>
                        <li>• Pay applicable government fees</li>
                        <li>• Obtain acknowledgment receipt for filing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-yellow-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold">5</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">Registrar's Review</h3>
                    <p className="text-gray-600">
                      The Registrar will review your reply and supporting evidence. If satisfied with the response, the
                      application proceeds to publication in the Trademark Journal. If not convinced, a hearing may be
                      scheduled.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">Possible Outcomes:</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Objection overcome - application proceeds to publication</li>
                        <li>• Hearing scheduled for oral arguments</li>
                        <li>• Additional clarification or evidence requested</li>
                        <li>• Application refused (can be appealed)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-indigo-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-indigo-600 font-bold">6</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">Hearing (if applicable)</h3>
                    <p className="text-gray-600">
                      If a hearing is scheduled, you or your counsel will present arguments orally with supporting
                      documents before the Trademark Hearing Officer.
                    </p>
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-indigo-900 mb-2">Hearing Preparation:</h4>
                      <ul className="text-sm text-indigo-800 space-y-1">
                        <li>• Prepare oral arguments based on written reply</li>
                        <li>• Organize supporting documents and evidence</li>
                        <li>• Professional legal representation recommended</li>
                        <li>• Present case confidently before the hearing officer</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-teal-500">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal-600 font-bold">7</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">Decision by Registrar</h3>
                    <p className="text-gray-600">
                      After considering all submissions, the Registrar will decide to grant or refuse registration. If
                      approved, the trademark is published in the Trademarks Journal for a four-month opposition period.
                    </p>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-teal-900 mb-2">Final Decision Outcomes:</h4>
                      <ul className="text-sm text-teal-800 space-y-1">
                        <li>• Registration granted - published in Trademark Journal</li>
                        <li>• Four-month opposition period begins</li>
                        <li>• Certificate issued if no opposition filed</li>
                        <li>• Appeal options available if application refused</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Detailed Process Steps */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{service?.details?.detailedProcess.title}</h2>
          </div>

          <div className="space-y-6">
            {service?.details?.detailedProcess.steps.map((step : any, index : number) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <CardTitle className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">
                      {step.step}
                    </div>
                    {step.title}
                  </CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Considerations:</h4>
                    <ul className="space-y-1">
                      {step.considerations.map((consideration : any, idx : number) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{consideration}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="documents" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Required Documents/Evidence for Objection Reply</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Comprehensive documentation is crucial for building a strong objection response. The strength of your
              evidence directly impacts the success of your reply.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {(service?.details?.requiredDocuments?.documentTypes ?? []).map((category : any, index: number) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-3 text-blue-600" />
                    {category.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {category.documents.map((item : any, idx : number) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-700">Affidavit of Use</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-blue-800 mb-4">
                  A sworn statement detailing the first use of the mark, geographical area, sales, and advertising
                  figures. This is one of the most critical documents for establishing prior use and distinctiveness.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-blue-900">Must Include:</h4>
                  <ul className="text-xs text-blue-800 space-y-1">
                    <li>• Date of first use of the trademark</li>
                    <li>• Geographical areas where mark is used</li>
                    <li>• Sales turnover and advertising expenditure</li>
                    <li>• Nature of goods/service?s provided</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-700">Supporting Documents</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-green-800 mb-4">
                  Invoices, bills, marketing materials, advertisements, media mentions, and website screenshots showing
                  the mark in commerce and establishing its distinctiveness.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-900">Key Evidence:</h4>
                  <ul className="text-xs text-green-800 space-y-1">
                    <li>• Commercial invoices and bills</li>
                    <li>• Marketing and advertising materials</li>
                    <li>• Media coverage and press mentions</li>
                    <li>• Website and social media screenshots</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-700">Legal Arguments</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-purple-800 mb-4">
                  A well-drafted reply differentiating your mark from any cited conflicting marks based on appearance,
                  sound, idea, and consumer class.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-900">Differentiation Basis:</h4>
                  <ul className="text-xs text-purple-800 space-y-1">
                    <li>• Visual appearance and design elements</li>
                    <li>• Phonetic sound and pronunciation</li>
                    <li>• Conceptual meaning and idea</li>
                    <li>• Target consumer class and market</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reply Fees */}
        <section className="space-y-8">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">{service?.details?.replyFees.title}</CardTitle>
              <CardDescription className="text-green-700">{service?.details?.replyFees.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Factors Affecting Fees:</h4>
                <ul className="space-y-2">
                  {service?.details?.replyFees.factors.map((factor : any, index : number) => (
                    <li key={index} className="flex items-start space-x-2">
                      <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us */}
        <section id="why-choose-us" className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">{service?.details?.whyChooseUs.title}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service?.details?.whyChooseUs.benefits.map((benefit : any, index : number) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How We Assist */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">How We Assist You</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service?.details?.howWeAssist?.map((assistance : any, index : number) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{assistance.title}</h3>
                  <p className="text-gray-600">{assistance.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
         <section id="faq" className="py-20 bg-gradient-to-br from-white to-rang dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get answers to common questions about Trademark Objection
                </p>
              </div>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {service?.details?.faq?.map((item : any, index : any) => (
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

        {/* CTA Section */}
        <section className="text-center space-y-8 py-16 bg-gradient-to-r from-deep-blue via-deep-blue to-[#0a2847] rounded-2xl text-white mx-4">
  <div className="space-y-4">
    <h2 className="text-3xl font-bold">Don't Let Objections Stop Your Brand</h2>
    <p className="text-xl opacity-90 max-w-2xl mx-auto">
      Get expert help to overcome trademark objections and secure your brand registration. Our legal team is
      ready to assist you.
    </p>
  </div>

   <div className="flex flex-wrap justify-center gap-4">
      <Link href="/contact" passHref>
        <Button
          size="lg"
          variant="secondary"
          className="bg-white text-[#071B34] hover:bg-gray-100 flex items-center"
        >
          <MessageSquare className="w-5 h-5 mr-2" />
          Start Your Objection Reply
        </Button>
      </Link>

      <Link href="/contact" passHref>
        <Button
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-[#071B34] bg-transparent flex items-center"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Legal Expert
        </Button>
      </Link>
    </div>
</section>

      </div>
    </div>
  )
}
