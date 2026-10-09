import React from 'react';
import { Star, CheckCircle2, FileText, Shield, Award, AlertCircle, HelpCircle, Scale, TrendingUp, Globe, Clock, IndianRupee } from 'lucide-react';
import ServiceHeroForm from '@/components/service-hero-form';
import SectionNavigation from '@/components/section-navigation';
// Import your data file
// import wellKnownTrademarkService from '@/data/wellKnownTrademarkService';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Well-Known Trademark Registration in India | Legal Dhara - IPR Experts for Brand Recognition",
  description:
    "Apply for Well-Known Trademark recognition with Legal Dhara — India’s most trusted LegalTech platform for trademark and IPR protection. Get expert legal support to secure nationwide brand recognition under Section 11 of the Trademark Act. Trusted by established brands and businesses across India.",
  keywords:
    "well known trademark registration India, well known trademark application, Legal Dhara, well known mark recognition, Section 11 trademark, IPR services India, trademark protection, famous brand registration, intellectual property rights, trademark consultant India, online legal platform, brand recognition India, trademark registry India, legal assistance for trademark, well known mark certificate, nationwide brand protection, intellectual property consultancy",
};

const WellKnownTrademarkPage = () => {
  // Using the service data structure from your file
  const service = {
    name: "Well-Known Trademark",
    title: "Well-Known Trademark Registration in India",
    description: "Secure exclusive recognition and protection for your brand by registering it as a well-known trademark under Indian law. Learn the eligibility, process, and legal benefits of obtaining this elite status.",
    icon: "Star",
    price: "14999",
    timeline: "15-20 Business Days",
    zeroServiceCharges: true,
    details: {
      overview1: {
        introduction: [
          "A well-known trademark enjoys protection across all classes of goods and services, irrespective of its actual usage in each category. Recognition as a well-known trademark provides exclusive legal rights, preventing others from using or imitating the mark, even in unrelated fields.",
          "Under Indian law, a trademark can be recognized as 'well-known' based on its widespread recognition among the public, the duration and extent of use, advertising, and judicial precedents. This recognition enhances the brand's reputation, credibility, and protection scope.",
          "Well-known trademarks receive special protection under the Trade Marks Act, 1999, which ensures that such marks are safeguarded against misuse or dilution. The Registrar of Trademarks maintains an official list of all recognized well-known marks in India.",
          "LegalDhara assists brands in preparing, filing, and substantiating applications for well-known trademark recognition, ensuring complete compliance and documentation for approval by the Registrar."
        ],
      },
      sections: [
        {
          title: "Importance of Well-Known Trademark Registration",
          type: "list",
          list: [
            "Provides extensive protection across all classes of goods and services.",
            "Builds brand reputation, credibility, and consumer trust.",
            "Prevents dilution and imitation by competitors.",
            "Strengthens enforcement against infringements nationwide.",
            "Increases brand valuation and global recognition potential."
          ],
        },
        {
          title: "Legal Framework for Well-Known Trademarks",
          type: "content",
          content: "The Trade Marks Act, 1999, and Trade Marks Rules, 2017, govern well-known trademark recognition in India. Section 11(6)–11(9) specifies criteria such as the degree of recognition, geographical reach, and duration of use that help determine whether a mark qualifies as well-known. The Registrar may declare a trademark as well-known upon examining the evidence and public representations.",
        },
        {
          title: "Judicial Recognition and Case Precedents",
          type: "list",
          list: [
            "Daimler Benz AG v. Hybo Hindustan (Mercedes Benz Case) – Protected 'Mercedes Benz' mark across all goods.",
            "Whirlpool Co. v. N.R. Dongre – Recognized 'Whirlpool' as a well-known mark despite no direct sales in India.",
            "Rolex SA v. Alex Jewellery Pvt. Ltd. – Recognized 'Rolex' as a well-known trademark due to global reputation.",
            "Bajaj Electricals Ltd. v. Metals & Allied Products – Extended protection of the 'Bajaj' mark to prevent misuse."
          ],
        },
        {
          title: "Process for Obtaining Well-Known Trademark Recognition",
          type: "list",
          list: [
            "Prepare and compile all evidence of the mark's recognition, use, and enforcement history.",
            "Submit an application under Form TM-M to the Registrar of Trademarks along with supporting documents.",
            "Registrar reviews and may invite public objections or representations.",
            "After evaluation, the Registrar declares the mark as a 'Well-Known Trademark' and publishes it in the official journal."
          ],
        },
        {
          title: "Documents Required",
          type: "list",
          list: [
            "Copy of trademark registration certificate.",
            "Proof of extensive use and recognition (sales data, media mentions, and marketing materials).",
            "Judicial or administrative decisions recognizing the mark as well-known.",
            "Affidavit supporting the claim with relevant details.",
            "Details of international registrations or recognitions, if any."
          ],
        },
        {
          title: "Benefits of Well-Known Trademark Recognition",
          type: "list",
          list: [
            "Exclusive protection across all product and service categories.",
            "Stronger legal enforcement against infringement and passing off.",
            "Enhanced brand reputation and trust among consumers.",
            "Prevention of misuse and dilution in global markets.",
            "Permanent listing in the official well-known trademarks database of India."
          ],
        },
        {
          title: "Why Choose LegalDhara?",
          type: "list",
          list: [
            "End-to-end legal assistance from documentation to submission.",
            "Experienced IP experts specializing in trademark protection and brand recognition.",
            "Accurate preparation of TM-M applications with strong evidentiary support.",
            "Transparent pricing and timeline with zero hidden charges.",
            "High success rate in securing well-known trademark recognition for clients."
          ],
        }
      ],
    },
    faqs: [
      { question: "What is a well-known trademark?", answer: "A well-known trademark is a mark that has gained significant recognition among the relevant section of the public in India, enjoying protection across all classes of goods and services." },
      { question: "Who can apply for well-known trademark status?", answer: "Any trademark owner with substantial evidence of extensive use, reputation, and recognition in the market can apply for well-known trademark recognition." },
      { question: "What are the criteria for well-known trademark recognition?", answer: "The criteria include the degree of recognition, duration and extent of use, promotional investment, market presence, and enforcement history of the mark." },
      { question: "How long does the recognition process take?", answer: "The process typically takes 15-20 business days after submission, though it may vary depending on the complexity of evidence and any objections raised." },
      { question: "What protection does well-known status provide?", answer: "It provides cross-class protection, preventing unauthorized use across all goods and services, not just the registered classes, and offers stronger legal remedies against infringement." },
      { question: "Can a foreign trademark be recognized as well-known in India?", answer: "Yes, foreign trademarks can be recognized as well-known in India if they demonstrate substantial recognition among the relevant Indian public." },
      { question: "Is registration mandatory for well-known trademark protection?", answer: "No, courts have recognized well-known marks even without formal registration, though registration provides stronger statutory protection." },
      { question: "What is the cost of well-known trademark recognition?", answer: "The service is available starting at ₹14,999 with zero hidden charges, covering complete documentation and submission support." },
    ],
  };

  // Safe access with fallback checks
  const introduction = service?.details?.overview1?.introduction || [];
  const sections = service?.details?.sections || [];
  const faqs = service?.faqs || [];

   const sectionss = [
    { title: "Overview", id: "overview" },
    { title: "Protection-scope", id: "protection-scope" },
    { title: "Importance", id: "importance-of-well-known-trademark-registration" },
    { title: "Legal- framework", id: "legal-framework-for-well-known-trademarks" },
    { title: "Recogniton", id: "judicial-recognition-and-case-precedents" },
    { title: "Process", id: "process-for-obtaining-well-known-trademark-recognition" },
    { title: "Documents required", id: "documents-required" },
    { title: "Benefits", id: "benefits-of-well-known-trademark-recognition" },
    { title: "Why choose us", id: "why-choose-legaldhara-" },
    { title: "Faqs", id: "faqs" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
         
              {/* Hero Section and Form (Common for all services) */}
        <ServiceHeroForm service={service} />
    
      <SectionNavigation sections={sectionss} />



    <div className="min-h-screen bg-gray-200">
      {/* Hero Section */}
      <div className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#BC9139] rounded-2xl mb-6">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-[#111111]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service?.title || 'Well-Known Trademark Registration'}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                {service?.description || ''}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <IndianRupee className="w-5 h-5 text-[#BC9139]" />
                  <span className="text-sm font-semibold">Starting from ₹{service.price}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-[#BC9139]" />
                  <span className="text-sm font-semibold">{service.timeline}</span>
                </div>
                {service.zeroServiceCharges && (
                  <div className="flex items-center gap-2 bg-[#BC9139] px-4 py-2 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-[#111111]" />
                    <span className="text-sm font-semibold text-[#111111]">Zero Hidden Charges</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Globe className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">All Classes</div>
                <div className="text-sm text-gray-300">Protection</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Award className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">Elite</div>
                <div className="text-sm text-gray-300">Status</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Overview Section */}
        <section id="overview" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111111] mb-6">Overview</h2>
          
          <div className="space-y-4">
            {introduction.length > 0 && introduction.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#BC9139]/10 to-[#E7E2D8]/20 border-l-4 border-[#BC9139] p-6 rounded-r-xl mt-6">
            <div className="flex items-start gap-3">
              <Star className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-2">Elite Brand Recognition</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Well-known trademark status represents the highest level of brand protection in India, offering cross-class protection and enhanced legal remedies against infringement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protection Scope Visual */}
        <section id="protection-scope" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
            Scope of Protection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <Shield className="w-16 h-16 mx-auto mb-4 text-[#BC9139]" />
              <h3 className="text-xl font-bold mb-3">Cross-Class Protection</h3>
              <p className="text-sm text-gray-300">Protection across all goods and services classes</p>
            </div>
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <Globe className="w-16 h-16 mx-auto mb-4 text-[#BC9139]" />
              <h3 className="text-xl font-bold mb-3">Global Recognition</h3>
              <p className="text-sm text-gray-300">Enhanced international brand prestige</p>
            </div>
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 text-center hover:shadow-xl transition-shadow">
              <Scale className="w-16 h-16 mx-auto mb-4 text-[#BC9139]" />
              <h3 className="text-xl font-bold mb-3">Legal Strength</h3>
              <p className="text-sm text-gray-300">Stronger enforcement and deterrent power</p>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {sections.map((section, sectionIdx) => {
          const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
          const sectionType = (section as any)?.type || 'list';
          const sectionContent = (section as any)?.content || '';
          const sectionList = (section as any)?.list || [];
          
          const isContentSection = sectionType === 'content';
          const isCaseLawSection = section?.title?.toLowerCase().includes('case') || section?.title?.toLowerCase().includes('judicial');
          const isProcessSection = section?.title?.toLowerCase().includes('process');

          return (
            <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
                {section?.title || 'Section'}
              </h2>

              {/* Content Type */}
              {isContentSection && sectionContent && (
                <div className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-6 border-l-4 border-[#BC9139]">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {sectionContent}
                  </p>
                </div>
              )}

              {/* Process Section - Numbered steps */}
              {isProcessSection && sectionList.length > 0 ? (
                <div className="space-y-6">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="flex gap-4 sm:gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#BC9139] rounded-full flex items-center justify-center text-[#111111] font-bold text-base sm:text-lg shadow-md">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : isCaseLawSection && sectionList.length > 0 ? (
                /* Case Law Section - Dark cards */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sectionList.map((item: string, idx: number) => {
                    const [caseName, ...desc] = item.split(' – ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <Scale className="w-8 h-8 text-[#BC9139] mb-3" />
                        <h3 className="text-base font-semibold text-[#BC9139] mb-2">{caseName}</h3>
                        {desc.length > 0 && (
                          <p className="text-sm text-gray-300 leading-relaxed">{desc.join(' – ')}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : sectionList.length > 0 ? (
                /* Regular List - Grid layout */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-5 border-l-4 border-[#BC9139]">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </section>
          );
        })}

        {/* FAQs Section */}
        {faqs.length > 0 && (
          <section id="faqs" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-4 sm:mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-xl p-6 hover:border-[#BC9139]/50 transition-colors hover:shadow-md">
                  <div className="flex items-start gap-3 mb-3">
                    <HelpCircle className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                    <h3 className="text-base font-semibold text-[#111111]">
                      {faq?.question || ''}
                    </h3>
                  </div>
                  {faq?.answer && (
                    <p className="text-sm text-gray-700 leading-relaxed pl-9">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section id="cta" className="bg-gradient-to-r from-[#BC9139] to-[#E7E2D8] rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-4">
            Elevate Your Brand to Elite Status
          </h2>
          <p className="text-base sm:text-lg text-[#111111]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Secure well-known trademark recognition and protect your brand across all classes with comprehensive legal support and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-lg">
              <IndianRupee className="w-5 h-5" />
              <span className="font-semibold">Starting from ₹{service.price}</span>
            </div>
            <div className="flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-lg">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">{service.timeline}</span>
            </div>
          </div>
          <button className="bg-[#111111] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#252525] transition-colors shadow-lg">
            Apply for Well-Known Status
          </button>
        </section>
      </div>
    </div>
    </div>
  );
};

export default WellKnownTrademarkPage;
