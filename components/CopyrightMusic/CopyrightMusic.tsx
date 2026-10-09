"use client"

import ServiceHeroForm  from "@/components/service-hero-form"
import SectionNavigation  from "@/components/section-navigation"

// import { submitConsultationForm } from "@/app/services/actions"

import {  Clock,  IndianRupee, FileText, Music, CheckCircle2, Shield, Award, AlertCircle, HelpCircle, Play} from "lucide-react"
import copyrightMusicService from "./data"
import Link from "next/link"

export default function CopyrightMusic() {
  const service = copyrightMusicService  
  
  const sectionss = [
  { id: "overview", title: "Overview" },
  { id: "types", title: "Types" },
  { id: "what-music-is-eligible-for-copyright-protection-", title: "Eligibiltiy" },
  { id: "benefits-of-song-copyright", title: "Benefits" },
  { id: "documents-required-for-copyright-music-in-india", title: "Documents Required" },
  { id: "how-to-copyright-music-on-youtube-", title: "Music on youtube" },
  { id: "why-legaldhara-", title: "why LegalDhara" },
  { id: "faqs", title: "FAQs" },
]


  const introduction = service?.details?.overview1?.introduction || [];
  const sections = service?.details?.sections || [];
  const faqs = service?.details?.faqs || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    
       <ServiceHeroForm service={service} />   

      {/* Navigation */}
      <SectionNavigation sections={sectionss} />

      {/* Overview Section */}
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#BC9139] rounded-2xl mb-6">
                <Music className="w-8 h-8 sm:w-10 sm:h-10 text-[#111111]" />
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                {service?.title || 'Copyright Music'}
              </h1>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                {service?.description || ''}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <FileText className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">Form XIV</div>
                <div className="text-sm text-gray-300">Required Form</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <Clock className="w-8 h-8 text-[#BC9139] mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-[#BC9139]">60 Years</div>
                <div className="text-sm text-gray-300">Protection Period</div>
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
            {introduction.length > 0 && introduction.map((para, idx) => {
              const isBullet = para.startsWith('•');
              if (isBullet) {
                return (
                  <div key={idx} className="flex items-start gap-3 ml-6">
                    <span className="text-[#BC9139] text-lg flex-shrink-0">•</span>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{para.substring(2)}</p>
                  </div>
                );
              }
              return (
                <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {para}
                </p>
              );
            })}
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl mt-6">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Good News!</h3>
                <p className="text-sm sm:text-base text-green-800 leading-relaxed">
                  Copyright protection is automatic once your song is recorded. However, registration provides additional legal benefits and proof of ownership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright Types Visual */}
        <section id="types" className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
            Two Types of Music Copyright
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
              <Music className="w-16 h-16 mx-auto mb-6 text-[#BC9139]" />
              <h3 className="text-2xl font-bold mb-4 text-center text-[#BC9139]">Musical Composition</h3>
              <p className="text-sm text-gray-300 leading-relaxed text-center mb-4">
                Covers the underlying song, melody, harmony, and lyrics
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC9139]" />
                  <span>Right to reproduce</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC9139]" />
                  <span>Right to distribute</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC9139]" />
                  <span>Right to perform</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl p-8 hover:shadow-xl transition-shadow">
              <Play className="w-16 h-16 mx-auto mb-6 text-[#BC9139]" />
              <h3 className="text-2xl font-bold mb-4 text-center text-[#BC9139]">Sound Recording</h3>
              <p className="text-sm text-gray-300 leading-relaxed text-center mb-4">
                Covers the actual recording of the song performance
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC9139]" />
                  <span>Right to reproduce</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC9139]" />
                  <span>Right to distribute</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#BC9139]" />
                  <span>Right to perform recording</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Sections */}
        {sections.map((section, sectionIdx) => {
          const sectionId = section?.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sectionIdx}`;
          const sectionType = (section as any)?.type || 'list';
          const sectionContent = (section as any)?.content || '';
          const sectionList = (section as any)?.list || [];
          
          const isStepsSection = section?.title?.toLowerCase().includes('step') || sectionList.some((item: string) => item.startsWith('Step'));
          const isDocumentsSection = section?.title?.toLowerCase().includes('documents');
          const isBenefitsSection = section?.title?.toLowerCase().includes('benefits');
          const isTypesSection = section?.title?.toLowerCase().includes('types');

          return (
            <section key={sectionIdx} id={sectionId} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#111111] mb-4 sm:mb-6 flex items-center gap-3">
                <span className="w-2 h-8 bg-[#BC9139] rounded-full"></span>
                {section?.title || 'Section'}
              </h2>

              {/* Paragraph Type */}
              {sectionType === 'paragraph' && sectionContent && (
                <div className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-6 border-l-4 border-[#BC9139]">
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                    {sectionContent}
                  </p>
                </div>
              )}

              {/* Steps Section */}
              {isStepsSection && sectionList.length > 0 ? (
                <div className="space-y-6">
                  {sectionList.map((item: string, idx: number) => {
                    if (item.startsWith('Step')) {
                      const [stepTitle, ...stepDesc] = item.split(' – ');
                      const stepNumber = stepTitle.match(/\d+/)?.[0] || (idx + 1).toString();
                      return (
                        <div key={idx} className="flex gap-4 sm:gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#BC9139] rounded-full flex items-center justify-center text-[#111111] font-bold text-base sm:text-lg shadow-md">
                              {stepNumber}
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-2">{stepTitle}</h3>
                            {stepDesc.length > 0 && (
                              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                {stepDesc.join(' – ')}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    }
                    return (
                      <p key={idx} className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {item}
                      </p>
                    );
                  })}
                </div>
              ) : isDocumentsSection ? (
                /* Documents Section */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3 p-5 bg-gradient-to-br from-[#111111] to-[#252525] text-white rounded-xl">
                      <FileText className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                      <p className="text-sm sm:text-base leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              ) : isBenefitsSection ? (
                /* Benefits Section */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => (
                    <div key={idx} className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-5 border-l-4 border-[#BC9139]">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : isTypesSection ? (
                /* Types Section */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {sectionList.map((item: string, idx: number) => {
                    const [title, ...desc] = item.split(': ');
                    return (
                      <div key={idx} className="bg-gradient-to-br from-[#E7E2D8]/20 to-[#BC9139]/10 rounded-xl p-6 border border-[#BC9139]/30 hover:shadow-lg transition-shadow">
                        <h3 className="text-base sm:text-lg font-semibold text-[#111111] mb-3">{title.trim()}</h3>
                        {desc.length > 0 && desc[0].trim() && (
                          <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : sectionList.length > 0 ? (
                /* Regular List */
                <div className="space-y-4">
                  {sectionList.map((item: string, idx: number) => {
                    const hasDescription = item.includes(':');
                    const isNote = item.startsWith('Note:');
                    
                    if (isNote) {
                      return (
                        <div key={idx} className="bg-[#BC9139]/10 border-l-4 border-[#BC9139] p-5 rounded-r-xl">
                          <div className="flex items-start gap-3">
                            <AlertCircle className="w-5 h-5 text-[#BC9139] flex-shrink-0 mt-0.5" />
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                              {item}
                            </p>
                          </div>
                        </div>
                      );
                    }
                    
                    if (hasDescription) {
                      const [title, ...desc] = item.split(': ');
                      return (
                        <div key={idx} className="bg-gradient-to-r from-[#E7E2D8]/10 to-transparent rounded-xl p-6 border-l-4 border-[#BC9139]">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <h3 className="text-base font-semibold text-[#111111] mb-2">{title.trim()}</h3>
                              {desc.length > 0 && desc[0].trim() && (
                                <p className="text-sm text-gray-700 leading-relaxed">{desc.join(': ').trim()}</p>
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
                  <p className="text-sm text-gray-700 leading-relaxed pl-9">
                    {faq?.answer || ''}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section id="cta" className="bg-gradient-to-r from-[#BC9139] to-[#E7E2D8] rounded-2xl p-6 sm:p-8 lg:p-12 text-center shadow-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111] mb-4">
            Protect Your Musical Creations Today!
          </h2>
          <p className="text-base sm:text-lg text-[#111111]/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Register your music copyright and secure legal protection for your compositions and recordings. Get started with expert assistance.
          </p>
          
          <Link href="/contact" className="bg-[#111111] text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-[#252525] transition-colors shadow-lg">
            Register Music Copyright Now
          </Link >
        </section>
      </div>
    </div>
    </div>
  )
}
