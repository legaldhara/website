"use client"

import { Users, Award, Shield, Star, Sparkles, TrendingUp, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import StatCounter from "./StatCounter"

const WhyChooseUsSection = () => {
  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Qualified chartered accountants, company secretaries, and legal experts with years of experience",
      icon: <Users className="h-8 w-8" />,
      stats: "50+ Experts",
      color: "deep-blue",
      bgGradient: "deep-blue",
      hoverColor: "hover:deep-blue",
      bcolor:"brand-orange",
    },
    {
      title: "Quick Processing",
      description: "Fast-track your applications with our streamlined processes and dedicated support team",
      icon: <Clock className="h-8 w-8" />,
      stats: "24-48 Hours",
      color: "deep-blue",
      bgGradient: "deep-blue",
      hoverColor: "deep-blue",
      bcolor:"brand-orange",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden costs. Clear, upfront pricing for all services with detailed breakdowns",
      icon: <Award className="h-8 w-8" />,
      stats: "Zero Hidden Fees",
      color: "deep-blue",
      bgGradient: "deep-blue",
      hoverColor: "deep-blue",
      bcolor:"brand-orange",
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries with dedicated account managers",
      icon: <Shield className="h-8 w-8" />,
      stats: "Always Available",
      color: "deep-blue",
      bgGradient: "deep-blue",
      hoverColor: "hover:deep-blue",
      bcolor:"brand-orange",
    },
  ]

  return (
    <section className="py-20 bg-deep-blue relative overflow-hidden">
     
      <div className=" px-4 md:px-6 lg:px-28">
     

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="group relative">
              {/* Card */}
              <div className="bg-[linear-gradient(181.75deg,hsla(0,0%,44%,0.3)-57.28%,rgba(17,39,60,0.3)97.45%)] backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-dark-blue border-t-2 border-r-2 hover:border-[#FFC24F]/50 relative overflow-hidden h-full">
                {/* Background Gradient on Hover */}
                <div
                  className={`absolute inset-0 bg- ${item.bgGradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Sparkle Effect */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles className="h-5 w-5 text-[#FFC24F] animate-pulse" />
                </div>

                <div className="flex flex-col items-center text-center relative z-10 h-full">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div
                      className={`p-4 bg-${item.color} ${item.hoverColor} rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <div className="text-brand-orange">{item.icon}</div>
                    </div>
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 bg-${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150`}
                    ></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-rang mb-4 group-hover:text-/90 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-grow">{item.description}</p>

                  {/* Stats Badge */}
                  <div className="mt-auto">
                    <Badge className="bg-gradient-to-r from-[#FFC24F]/20 to-/20 text-rang border-[#FFC24F]/30 font-semibold px-4 py-2 group-hover:from-[#FFC24F]/30 group-hover:to-/30 group-hover:scale-105 transition-all duration-300">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      {item.stats}
                    </Badge>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-${item.bcolor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}
                ></div>
              </div>

              {/* Floating Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-orange/40 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 z-20">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 bg-[linear-gradient(181.75deg,hsla(0,0%,44%,0.3)-57.28%,rgba(17,39,60,0.3)97.45%)] rounded-3xl p-8 relative overflow-hidden shadow-2xl">
    

          <div className="relative z-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-8">Trusted by Thousands</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: 500, label: "Happy Clients" ,suffix : "+"},
                { number: 1000, label: "Services Completed" ,suffix : "+" },
                { number: 99.9, label: "Success Rate"  , suffix : "%"},
                { number: 5, label: "Years Experience" , suffix : "+"},
              ].map((stat, index) => (
<div key={index} className="group text-center">
  <div className="text-4xl font-bold text-[#FFC24F] mb-2 group-hover:scale-110 transition-transform duration-300">
    <StatCounter
      endValue={stat.number}
      duration={1500}
      increment={stat.number > 100 ? 10 : 1}
      suffix={stat.suffix || ""}
    />
  </div>
  <div className="text-white/80 text-sm font-medium">{stat.label}</div>
</div>

))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUsSection
