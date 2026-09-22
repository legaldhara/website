"use client"
import { startupindiaRegistrationService } from "./data"
import { useState } from "react";
import ServiceHeroForm from "@/components/service-hero-form"
import { Building2, CheckCircle, FileText, Clock, TrendingUp, Shield, Zap, ChevronDown, ChevronUp, Star, ArrowRight  } from 'lucide-react';
import SectionNavigation from "@/components/section-navigation";
import Link from "next/link";


function startupIndiaRegistrationPage() {
  const sections = [
  { id: "overview1", title: "Overview" },
  { id: "eligibility", title: "Eligibility" },
  { id: "documents", title: "Documents Required" },
  { id: "benefits1", title: "Benefits" },
  { id: "process1", title: "Process" },
  { id: "fees1", title: "Fees" },
  { id: "faqs", title: "FAQs" },
]
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index : any) => {
    setOpenFaq(openFaq === index ? null : index);
  };



  const faqs = [
    {
      question: "What is Startup India Registration?",
      answer: "Startup India Registration is the process of obtaining DPIIT recognition, which officially identifies your business as a startup and allows you to access tax exemptions, funding schemes, and government benefits."
    },
    {
      question: "Who is eligible for Startup India Recognition?",
      answer: "Any Private Limited Company, LLP, or Partnership Firm less than 10 years old, with turnover below ₹100 crore, and working on innovation or scalable business models is eligible."
    },
    {
      question: "Can existing companies apply for Startup India Registration?",
      answer: "Yes, existing companies can apply if they meet the eligibility criteria — they must be within 10 years of incorporation and engaged in innovative or scalable activities."
    },
    {
      question: "What documents are required to register under Startup India?",
      answer: "Documents like Certificate of Incorporation, PAN, Business Pitch Deck, and financial statements are required to verify eligibility and innovation potential."
    },
    {
      question: "How long does DPIIT recognition take under Startup India?",
      answer: "The DPIIT recognition process typically takes around 7–15 working days after document submission and verification."
    },
    {
      question: "What benefits do startups get after registration?",
      answer: "Startups receive tax exemptions, IPR support, funding access, eligibility for government tenders, and simplified compliance under various government initiatives."
    },
    {
      question: "Is there a validity period for the Startup India certificate?",
      answer: "Yes, the recognition is valid for 10 years from the date of incorporation of the business."
    },
    {
      question: "Can foreign-owned companies register under Startup India?",
      answer: "Only Indian entities with majority ownership and control can register under Startup India. However, foreign investors can participate through equity or joint ventures."
    },
    {
      question: "What is the difference between company incorporation and Startup India registration?",
      answer: "Company incorporation legally creates your business, while Startup India registration provides government recognition and access to benefits like tax exemptions and funding."
    },
    {
      question: "How can Startup India-recognised startups avail government tenders or IPR support?",
      answer: "Registered startups get priority access in government tenders and can apply for expedited and subsidized IPR filing through the Startup India portal."
    }
  ];

    const service = startupindiaRegistrationService

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
      <ServiceHeroForm service={service} />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">

         {/* Enhanced Section Navigation */}
              
          <SectionNavigation sections={sections} />
     
      {/* Overview Section */}
      <section id="overview1" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What is Startup India Registration?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl hover:shadow-2xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Official DPIIT Recognition</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Startup India registration is the procedure through which a company in India obtains official recognition from the Department for Promotion of Industry and Internal Trade (DPIIT). This recognition provides access to a range of benefits, including tax exemptions, easier regulatory compliance, and expedited processing of intellectual property rights (IPR).
              </p>
              <p className="text-gray-600 leading-relaxed">
                The DPIIT certificate is crucial in creating startup recognition, which assists startups in accessing many government programs and benefits including the India Seed Fund Scheme.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">Key Benefits You'll Receive</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Government acknowledgement as a DPIIT-registered startup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>80 IAC tax relief for sustainable growth</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Access to Startup India Seed Fund and Venture Capital Schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Accelerated and subsidised IPR filing assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Priority access to government tenders and procurement schemes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span>Enhanced credibility with investors and stakeholders</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 rounded-lg p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Why Startup India Matters</h4>
                <p className="text-gray-700 leading-relaxed">
                  Initiated as a flagship programme of the Indian government, Startup India empowers entrepreneurs by providing timely assistance for innovation, IPR protection, and investor trust. Timely registration allows startups to utilise these schemes in the right development stage. LegalDhara makes the whole Startup India registration process easy and convenient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Eligibility Criteria
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check if your startup qualifies for DPIIT recognition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Business Type</h3>
              <p className="text-gray-700">
                Must be registered as a Private Limited Company, LLP, or Partnership Firm
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Age Limit</h3>
              <p className="text-gray-700">
                Business shall not be older than 10 years from the incorporation date
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 hover:border-green-400 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Turnover Cap</h3>
              <p className="text-gray-700">
                Annual turnover shall not exceed ₹100 crore in any single financial year
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg md:col-span-2 lg:col-span-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Innovation Requirement</h3>
                  <p className="text-gray-700 mb-3">
                    Must be developing an original product, service, or process with innovation potential, employment generation, or wealth creation. Must not be created by unbundling or reconfiguring an existing business.
                  </p>
                  <p className="text-gray-600 italic text-sm">
                    Note: A trade business which looked like a 'new' business split into two institutions is not eligible since restructuring under the scheme is not permitted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section id="documents" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepare these documents to ensure a smooth registration process
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 sm:px-8 py-6">
              <h3 className="text-2xl font-bold text-white">Document Checklist</h3>
              <p className="text-blue-100 mt-2">All documents must be valid and up-to-date</p>
            </div>
            
            <div className="p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Certificate of Incorporation</h4>
                    <p className="text-gray-600">Proof of legal business existence (Pvt Ltd/LLP/Partnership)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">PAN Card</h4>
                    <p className="text-gray-600">Company/Partners/Directors - Mandatory identity and tax verification</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Business Pitch Deck</h4>
                    <p className="text-gray-600">Brief description to showcase innovation and startup model</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Financial Statements (if available)</h4>
                    <p className="text-gray-600">To confirm turnover criteria (below ₹100 Cr)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <CheckCircle className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Trademark/Patent Details (if any)</h4>
                    <p className="text-gray-600">To support IPR-based benefits and protection</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Secure Document Handling</h4>
                    <p className="text-gray-700">
                      With LegalDhara, startups can securely upload and monitor their documents in one place. We ensure complete confidentiality and data protection throughout the registration process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits1" className="py-16 sm:py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Powerful Benefits Await
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Transform your startup journey with government-backed advantages
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:transform hover:-translate-y-1">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">3-Year Tax Exemption</h3>
              <p className="text-blue-100">
                Allows startups to reinvest profits in growth years without income tax burden
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:transform hover:-translate-y-1">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">80% Patent Rebate</h3>
              <p className="text-blue-100">
                Less expensive protection for intellectual property with significant cost savings
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-bold mb-3">Express IP Registration</h3>
              <p className="text-blue-100">
                Accelerates approval of trademarks and patents for faster market entry
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:transform hover:-translate-y-1">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Government Tender Access</h3>
              <p className="text-blue-100">
                Participate in public procurement without prior experience requirements
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:transform hover:-translate-y-1">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-3">Simplified Compliance</h3>
              <p className="text-blue-100">
                Self-certification and reduced administrative burden for easier operations
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all hover:transform hover:-translate-y-1">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold mb-3">Easy Business Exit</h3>
              <p className="text-blue-100">
                Simplified closure under bankruptcy laws if operations become unsustainable
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-6 sm:p-8 border border-green-400/30">
            <div className="flex items-start gap-4">
              <TrendingUp className="w-8 h-8 text-green-300 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Real Success Story</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  A fintech startup in Pune saved lakhs in its early years by availing the 3-year income tax exemption under DPIIT recognition. This allowed them to focus on product development and market expansion without financial constraints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process1" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple 6-Step Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From incorporation to DPIIT certificate in just a few steps
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: 1,
                  title: "Register Your Business",
                  description: "Incorporate as a Private Limited Company, LLP, or Partnership",
                  icon: "📝",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  step: 2,
                  title: "Startup India Portal",
                  description: "Register yourself on the government's official platform",
                  icon: "🌐",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  step: 3,
                  title: "Upload Documents",
                  description: "Provide proof of incorporation, PAN, and business information",
                  icon: "📤",
                  color: "from-indigo-500 to-indigo-600"
                },
                {
                  step: 4,
                  title: "Self-Certify Eligibility",
                  description: "Verify turnover, innovation, and other DPIIT parameters",
                  icon: "✅",
                  color: "from-green-500 to-green-600"
                },
                {
                  step: 5,
                  title: "DPIIT Review",
                  description: "Officers verify documents and application thoroughly",
                  icon: "🔍",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  step: 6,
                  title: "Get Certificate",
                  description: "Download DPIIT recognition certificate upon approval",
                  icon: "🎉",
                  color: "from-pink-500 to-pink-600"
                }
              ].map((item) => (
                <div key={item.step} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-300">
                    <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto lg:mx-0 relative z-10`}>
                      {item.icon}
                    </div>
                    <div className="text-sm font-bold text-blue-600 mb-2">STEP {item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-500 rounded-lg p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Important Compliance Note</h4>
                <p className="text-gray-700">
                  Startup India registration guarantees compliance with principal regulatory agencies, including the Central Pollution Control Board for environmental regulations and the Employees State Insurance Act for labor compliance. For startups focusing on tax benefits, the Startup India initiative provides tax exemption and venture tax prerogatives to comply with specific requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section id="fees1" className="py-16 sm:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden charges, just straightforward pricing
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Government Fees Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-200">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-8 text-white text-center">
                <div className="text-5xl mb-4">🎁</div>
                <h3 className="text-2xl font-bold mb-2">Government Fees</h3>
                <div className="text-4xl font-bold">₹0</div>
                <p className="text-green-100 mt-2">Completely Free</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">No DPIIT registration fees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Zero government charges</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Official portal access free</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Service Card - Highlighted */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-blue-500 transform lg:-translate-y-4">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8 text-white text-center">
                <div className="inline-block bg-yellow-400 text-blue-900 px-4 py-1 rounded-full text-sm font-bold mb-4">
                  MOST POPULAR
                </div>
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold mb-2">Expert Assistance</h3>
                <div className="text-4xl font-bold">₹1,499</div>
                <p className="text-blue-100 mt-2">Starting Price</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Complete documentation support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Expert consultation included</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Application review & filing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Follow-up until approval</span>
                  </li>
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Get Started Now
                </button>
              </div>
            </div>

            {/* Timeline Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-purple-200">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-8 text-white text-center">
                <div className="text-5xl mb-4">⏱️</div>
                <h3 className="text-2xl font-bold mb-2">Processing Time</h3>
                <div className="text-4xl font-bold">7-15</div>
                <p className="text-purple-100 mt-2">Working Days</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Fast DPIIT verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Real-time status updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Quick certificate delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <div className="flex items-center gap-4 flex-wrap justify-center">
                <Zap className="w-8 h-8 text-yellow-500" />
                <p className="text-lg text-gray-700">
                  <span className="font-bold text-gray-900">Expert consultation included</span> to guide startups through eligibility and documentation before filing
                </p>
              </div>
            </div>
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
            {faqs.map((faq, index) => (
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

          {/* <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-3">Still Have Questions?</h3>
              <p className="text-blue-100 mb-6">Our experts are here to help you navigate the registration process</p>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg">
                Contact Our Team
              </button>
            </div>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-deep-blue text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Register Your Startup?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful startups that have unlocked government benefits and accelerated their growth journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
            href='#'
             className="bg-white text-deep-blue px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center gap-2">
              Start Registration
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
            href='#'
            className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Schedule Consultation
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">5000+</div>
              <div className="text-sm text-blue-200">Startups Registered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">100%</div>
              <div className="text-sm text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-sm text-blue-200">Client Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-blue-200">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p className="text-sm">
            Made with ❤️ for Indian Entrepreneurs | All information is accurate as per latest DPIIT guidelines
          </p>
        </div>
      </section>
    </div>
    </div>
  )
}

export default startupIndiaRegistrationPage
