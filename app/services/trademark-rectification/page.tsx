import React from 'react';
import { PenTool, CheckCircle2, FileText, Clock, Shield, Award, AlertCircle, Users, Scale } from 'lucide-react';
import ServiceHeroForm from '@/components/service-hero-form';
import Link from 'next/link';
import SectionNavigation from '@/components/section-navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Trademark Rectification in India | Legal Dhara - Expert Legal Help for IPR Correction",
  description:
    "File trademark rectification online with Legal Dhara — India’s leading LegalTech platform for IPR and brand protection. Correct or remove wrongly registered trademarks, update existing details, and maintain legal accuracy with expert guidance from trademark professionals.",
  keywords:
    "trademark rectification India, online trademark rectification, Legal Dhara, rectify trademark record, remove wrong trademark, correct trademark details, trademark consultant India, trademark amendment, IP correction, IPR services, legal tech platform India, trademark modification, trademark removal India, startup legal solutions, intellectual property rectification, trademark registry correction",
};

const TrademarkRectificationPage = () => {
  // Using the service data structure from your file
  const service = {
    name: "Trademark Rectification",
    title: "Trademark Rectification",
    href:'/services/trademark-rectification',
    description: "Correct inaccuracies or errors in your trademark registration efficiently. LegalDhara provides end-to-end assistance in filing for rectification with the Registrar, ensuring your trademark remains accurate and compliant with legal requirements.",
    icon: "PenTool",
    price:"2999",
    timeline: "7-10 Business Days",
    zeroServiceCharges: true,
    details: {
      overview1: {
        introduction: [
          "A trademark is a distinct symbol or emblem that sets one product apart, akin to an individual's unique birthmark. To establish the trademark's uniqueness and exclusivity, it must be registered according to the regulations outlined in the Trademark Act and Rules.",
          "When applying for a trademark or even after its registration, if the applicant discovers minor errors or deems alterations necessary, they can initiate a rectification of trademark process with the Registrar to address these issues. At LegalDhara, we offer comprehensive Trademark Rectification services to guide clients through this vital aspect of trademark management.",
          "Trademark Rectification involves correcting errors or omissions in the trademark register that occur after the initial registration. This process addresses situations where a trademark may have been erroneously registered or remains on the register even after expiration.",
          "According to Section 57 of the Trademark Act of 1999, any individual associated with trademark registration or adversely affected has the right to seek rectification. In some cases, rectification can result in cancellation of the trademark registration; hence, this process must be approached carefully."
        ]
      },
      sections: [
        {
          title: "Reasons for Trademark Rectification",
          type: "list",
          list: [
            "Errors in the Application Form: Inaccuracies in the application such as incorrect address or contact information.",
            "Incorrect Information on Trademark Details: Errors in the trademark's class, description, or design.",
            "Inaccurate Information at Registration: Mistakes made during the initial registration process.",
            "Updates to Application Information: Changes in applicant's information or address.",
            "Non-Use After Five Years and Three Months: Trademarks unused for this period may be removed from the register.",
            "Registrar-Approved Grounds: Grounds for rectification approved by the Registrar.",
            "Aggrieved Party's Application: When an aggrieved party applies for rectification or removal based on valid grounds."
          ]
        },
        {
          title: "Who Can File a Trademark Rectification Application?",
          type: "list",
          list: [
            "Person Aggrieved: Any individual affected by the registration or similarity of a mark can initiate rectification.",
            "Trademark Holder: The trademark proprietor can file for rectification to correct their own trademark information.",
            "Third Party: Any third party distinct from the trademark holder can initiate rectification if the trademark causes public or societal confusion."
          ]
        },
        {
          title: "Forms for Rectification of Trademark",
          type: "list",
          list: [
            "TM-16: For correction or cancellation requested by the trademark proprietor.",
            "TM-M: When rectification or cancellation is initiated by the Registrar.",
            "TM-26: When rectification or cancellation is initiated by an aggrieved party."
          ]
        },
        {
          title: "Jurisdiction for Trademark Rectification Applications in India",
          type: "list",
          list: [
            "Applications are filed with the appropriate authority — Trademark Registry, Appellate Board, or Tribunal — depending on the case.",
            "Generally, applications are filed at the office where the original registration application was submitted.",
            "Trademark Offices handling jurisdictional matters: Mumbai, Chennai, Kolkata, Delhi, Ahmedabad."
          ]
        },
        {
          title: "The Trademark Rectification Process",
          type: "list",
          list: [
            "Drafting of Application: Carefully draft the rectification application including all necessary details.",
            "Form Filing: Submit the rectification form to the Registrar with prescribed fees.",
            "Document Submission: Attach required documents such as ID proof, address proof, and supporting evidence.",
            "Document Verification: Authorities verify the documents before proceeding.",
            "Final Order: Registrar or Appellate Court issues an order for rectification, addition, or removal after review."
          ]
        },
        {
          title: "Process for Rectification Initiated by an Aggrieved Person",
          type: "list",
          list: [
            "Filing for Rectification: The aggrieved person files Form TM–26 with reasons and fees.",
            "Notice to Trademark Holder: Registrar issues notice prompting counter statement from the trademark owner.",
            "Affidavits and Evidence: Both parties submit affidavits and relevant evidence.",
            "Verification and Decision: Registrar or Appellate Board reviews the submissions and issues the final order."
          ]
        },
        {
          title: "Consequences of Trademark Rectification",
          type: "list",
          list: [
            "A trademark can be removed from the register after due process if found unused or inaccurate.",
            "Marks unused for five years or not genuinely utilized for over three years may be deleted.",
            "Maintaining accurate and up-to-date trademark information prevents removal or cancellation."
          ]
        },
        {
          title: "Why Choose LegalDhara for Trademark Rectification?",
          type: "list",
          list: [
            "Comprehensive Legal Support: End-to-end handling of rectification filings and follow-ups.",
            "Simplified Legal Process: Clear, step-by-step assistance throughout the rectification procedure.",
            "Expert Guidance: Dedicated team of IP experts to handle all queries.",
            "Reliable and Transparent: Real-time tracking and progress updates for every client.",
            "Client-Centric Approach: Easy, digital-first experience ensuring efficiency and compliance."
          ]
        }
      ]
    }
  };

  // Safe access with fallback checks
  const introduction = service?.details?.overview1?.introduction || [];
  const sections = service?.details?.sections || [];

   const sectionss = [
    { title: "Overview", id: "overview" },
    { title: "Importance", id: "reasons-for-trademark-rectification" },
    { title: "Eligibilty", id: "who-can-file-a-trademark-rectification-application-" },
    { title: "Forms", id: "forms-for-rectification-of-trademark" },
    { title: "jurisdiction", id: "jurisdiction-for-trademark-rectification-applications-in-india" },
    { title: "Process", id: "the-trademark-rectification-process" },
    { title: "Overview", id: "consequences-of-trademark-rectification" },
    { title: "Why choose us", id: "why-choose-legaldhara-for-trademark-rectification-" },
  
    
  ]

  return (
<div className="min-h-screen bg-gradient-to-br from-rang via-white to-light-orange dark:from-gray-950 dark:via-gray-900 dark:to-deep-blue">
     
          {/* Hero Section and Form (Common for all services) */}
    <ServiceHeroForm service={service} />

    <SectionNavigation sections={sectionss} />
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <div className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#BC9139] rounded-2xl mb-6">
                <PenTool className="w-8 h-8 sm:w-10 sm:h-10 text-[#111111]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service?.title || 'Trademark Rectification'}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service?.description || ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Scale className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">Section 57</div>
                <div className="text-sm text-gray-300">Trademark Act</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Shield className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">Legal</div>
                <div className="text-sm text-gray-300">Compliance</div>
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

          <div className="bg-[#BC9139]/10 border-l-4 border-[#BC9139] p-6 rounded-r-xl mt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#111111] mb-2">Important Note</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Trademark rectification must be approached carefully as it can result in cancellation of the trademark registration in some cases. Ensure all information is accurate and consult with legal experts before proceeding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {sections.map((section, sectionIdx) => {
          const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
          // Fix TypeScript error by safely accessing list property
          const sectionList = (section as any)?.list || [];
          
          // Check if this is a process section
          const isProcessSection = section?.title?.toLowerCase().includes('process');
          
          // Check if this is a forms section (simple grid display)
          const isFormsSection = section?.title?.toLowerCase().includes('forms');
          
          // Check if this is who can file section (3 items)
          const isWhoCanFile = section?.title?.toLowerCase().includes('who can file');

          return (
            <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
                {section?.title || 'Section'}
              </h2>

              {/* Process Section - Special numbered formatting */}
              {isProcessSection ? (
                <div className="space-y-6">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    const stepNumber = (idx + 1).toString();
                    return (
                      <div key={idx} className="flex gap-4 sm:gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#BC9139] rounded-full flex items-center justify-center text-[#111111] font-bold text-base sm:text-lg shadow-md">
                            {stepNumber}
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-2">{title.trim()}</h3>
                          {desc.length > 0 && desc[0].trim() && (
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                              {desc.join(': ').trim()}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : isFormsSection ? (
                /* Forms Section - Simple cards */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sectionList.map((item: string, idx: number) => {
                    const [formName, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <FileText className="w-10 h-10 text-[#BC9139] mb-4" />
                        <h3 className="text-lg font-bold text-[#BC9139] mb-3">{formName.trim()}</h3>
                        {desc.length > 0 && (
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {desc.join(': ').trim()}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : isWhoCanFile ? (
                /* Who Can File - Large cards */
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#E7E2D8]/20 to-[#BC9139]/10 rounded-xl p-6 border border-[#BC9139]/30 hover:shadow-lg transition-shadow">
                        <Users className="w-10 h-10 text-[#BC9139] mb-4" />
                        <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-3">{title.trim()}</h3>
                        {desc.length > 0 && (
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {desc.join(': ').trim()}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Regular List Items */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => {
                    const hasDescription = item.includes(':');
                    
                    if (hasDescription) {
                      const [title, ...desc] = item.split(':');
                      return (
                        <div key={idx} className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-6 border-l-4 border-[#BC9139]">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h3 className="text-base font-semibold text-[#111111] mb-2">{title.trim()}</h3>
                              {desc.length > 0 && desc[0].trim() && (
                                <p className="text-sm text-gray-700 leading-relaxed">{desc.join(':').trim()}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#E7E2D8]/5 to-transparent rounded-lg">
                        <CheckCircle2 className="w-5 h-5 text-[#BC9139] flex-shrink-0 mt-1" />
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
          );
        })}

        {/* Key Information Section */}
        <section id="key-information" className="bg-gradient-to-br from-[#111111] to-[#252525] rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8 text-white">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
            Key Trademark Offices in India
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Mumbai', 'Chennai', 'Kolkata', 'Delhi', 'Ahmedabad'].map((city, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                <Scale className="w-8 h-8 text-[#BC9139] mx-auto mb-2" />
                <p className="text-sm font-semibold">{city}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Highlight */}
        <section id="why-choose-us-highlight" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
            Our Trademark Rectification Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#E7E2D8]/10 to-transparent rounded-xl border border-[#BC9139]/20">
              <Shield className="w-10 h-10 text-[#BC9139] flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-[#111111] mb-2">Legal Expertise</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Specialized IP attorneys with extensive trademark law experience
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#E7E2D8]/10 to-transparent rounded-xl border border-[#BC9139]/20">
              <Clock className="w-10 h-10 text-[#BC9139] flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-[#111111] mb-2">Timely Filing</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Quick and efficient submission of all required documentation
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 bg-gradient-to-br from-[#E7E2D8]/10 to-transparent rounded-xl border border-[#BC9139]/20">
              <Award className="w-10 h-10 text-[#BC9139] flex-shrink-0" />
              <div>
                <h3 className="text-base font-semibold text-[#111111] mb-2">Success Rate</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  High success rate in trademark rectification applications
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-gradient-to-r from-[#BC9139] to-[#E7E2D8] rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-4">
            File a Trademark Rectification Application ?
          </h2>
          <p className="text-base sm:text-lg text-[#111111]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get expert legal assistance to correct errors in your trademark registration. Ensure your brand remains protected and compliant.
          </p>
          <Link href='/contact'>
          <button className="bg-[#111111] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#252525] transition-colors shadow-lg">
            Start Trademark Rectification
          </button>
          </Link>
        </section>
      </div>
    </div>
    </div>
  );
};

export default TrademarkRectificationPage;
