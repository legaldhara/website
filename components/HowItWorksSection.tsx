"use client";

import { useState } from "react";
import {
  CheckCircle,
  Phone,
  Shield,
  ArrowRight,
  Clock,
  ChevronRight,
  Zap,
  X,
  AlertTriangle,
  IndianRupee,
  FileX,
  Smile,
  MousePointerClick,
  FilePen,
  LucideIcon,
} from "lucide-react";
import { motion, fadeInUp, fadeInScale , comparisonCardVariants ,stepCardVariants , staggerContainer } from "@/lib/motion";


interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  detailedDescription: string;
  icon: JSX.Element;
  time: string;
  features: string[];
}

interface ComparisonItem {
  aspect: string;
  traditional: {
    icon: JSX.Element;
    title: string;
    description: string;
    color: string;
    bgColor: string;
  };
  ourWay: {
    icon: JSX.Element;
    title: string;
    description: string;
    color: string;
    bgColor: string;
  };
}

const howItWorksSteps: HowItWorksStep[] = [
  {
    step: "01",
    title: "Choose a Service",
    description: "Select the legal service that best fits your business needs from our comprehensive range.",
    detailedDescription:
      "Browse through our extensive catalog of legal services, compare features, and select the perfect solution for your business requirements.",
    icon: <MousePointerClick className="w-8 h-8" />,
    time: "Instant",
    features: ["100+ Services Available", "Expert Recommendations", "Instant Quotes"],
  },
  {
    step: "02",
    title: "Fill the Form",
    description: "Provide your details through our simple and secure online form process.",
    detailedDescription:
      "Complete our user-friendly form with your business details. Our secure system ensures your information is protected.",
    icon: <FilePen className="w-8 h-8" />,
    time: "Instant",
    features: ["Secure Data Handling", "Auto-Save Progress", "Mobile Friendly"],
  },
  {
    step: "03",
    title: "Get a Connected",
    description: "Our expert consultants will contact you to discuss your requirements in detail.",
    detailedDescription:
      "Within 30 minutes, our certified experts will call you to understand your specific needs and provide personalized guidance.",
    icon: <Phone className="w-8 h-8" />,
    time: "Instant",
    features: ["Certified Experts", "Free Consultation", "Personalized Advice"],
  },
  {
    step: "04",
    title: "We File for You",
    description: "Sit back and relax while our team handles all the paperwork and legal formalities.",
    detailedDescription:
      "Our experienced team takes care of all documentation, and follow-ups until completion.",
    icon: <FilePen className="w-8 h-8" />,
    time: "12-24 Hours",
    features: ["Complete Documentation", "Regular Updates"],
  },
];

const comparisonData: ComparisonItem[] = [
  {
    aspect: "Service Charges",
    traditional: {
      icon: <IndianRupee className="w-6 h-6" />,
      title: "Heavy Service Fees",
      description: "₹5,000 - ₹25,000 in service charges",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    ourWay: {
      icon: <IndianRupee className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />,
      title: "Zero Service Charges",
      description: "Pay only Govt fees",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  },
  {
    aspect: "Processing Time",
    traditional: {
      icon: <Clock className="w-6 h-6" />,
      title: "Slow & Delayed",
      description: "30-60 days with multiple follow-ups",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    ourWay: {
      icon: <Zap className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />,
      title: "Lightning Fast",
      description: "7-15 days with real-time updates",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  },
  {
    aspect: "Documentation",
    traditional: {
      icon: <FileX className="w-6 h-6 " />,
      title: "Complex Paperwork",
      description: "Confusing forms and manual processes",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    ourWay: {
      icon: <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />,
      title: "Digital & Simple",
      description: "Online forms with guided assistance",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  },
  {
    aspect: "Expert Support",
    traditional: {
      icon: <AlertTriangle className="w-6 h-6 " />,
      title: "Limited Guidance",
      description: "Basic support with extra charges",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    ourWay: {
      icon: <Shield className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />,
      title: "24/7 Expert Help",
      description: "Dedicated experts at every step",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  },
];

export default function HowItWorksSection(): JSX.Element {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  // Animation variants
 


  return (
    <div className="py-12 sm:py-16 lg:py-10 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <motion.div
        className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#FFC24F]/10 to-[#1B4061]/5 rounded-full blur-3xl opacity-60 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#1B4061]/10 to-[#FFC24F]/5 rounded-full blur-3xl opacity-60 -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      <div className="px-4 sm:px-6 lg:px-32">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFC24F]/20 to-[#1B4061]/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-3 border border-[#FFC24F]/30"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Zap className="h-4 w-4 text-[#1B4061]" />
            <span className="text-xs font-bold text-[#1B4061] tracking-wide">Our 4 steps process</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-poppins font-semibold text-deep-blue mb-3 leading-tight px-4">
            Make Your Legal Journey Simple
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-snug px-4">
            Experience the <span className="font-bold text-[#1B4061]">fastest and most affordable</span> way to handle
            your legal requirements with our revolutionary 4-step process
          </p>
        </motion.div>

        {/* Step Navigation Bar */}
        <motion.div
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInScale}
        >
          <div className="flex items-center">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="flex items-center" style={{ flex: index === howItWorksSteps.length - 1 ? '0 0 auto' : '1' }}>
                {/* Step Circle */}
                <motion.button
                  onClick={() => setActiveStep(index)}
                  className="relative flex flex-col items-center group transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className={`lg:w-11 lg:h-11 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      activeStep === index
                        ? 'bg-gradient-to-r from-[#FFC24F] to-[#FFC24F]/80 text-[#1B4061] shadow-lg shadow-[#FFC24F]/30 scale-110'
                        : activeStep > index
                        ? 'bg-[#1B4061] text-white'
                        : 'bg-gray-200 text-gray-500 group-hover:bg-[#FFC24F]/30 group-hover:text-[#1B4061]'
                    }`}
                    animate={activeStep === index ? { rotate: [0, 10, -10, 0] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {activeStep > index ? <CheckCircle className="lg:w-6 lg:h-6 w-5 h-5" /> : step.step}
                  </motion.div>

                  {/* Step Label */}
                  <span
                    className={`hidden sm:block mt-1.5 text-xs font-semibold transition-colors whitespace-nowrap ${
                      activeStep === index ? 'text-[#1B4061]' : 'text-gray-500'
                    }`}
                  >
                    Step {step.step}
                  </span>
                </motion.button>

                {/* Arrow Connector */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="flex items-center flex-1 px-2 sm:px-4">
                    <motion.div
                      className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                        activeStep > index ? 'bg-gradient-to-r from-[#1B4061] to-[#FFC24F]' : 'bg-gray-200'
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                    <ChevronRight
                      className={`w-3.5 h-3.5 sm:w-4 sm:h-4 mx-1.5 flex-shrink-0 transition-colors ${
                        activeStep > index ? 'text-[#FFC24F]' : 'text-gray-300'
                      }`}
                    />
                    <motion.div
                      className={`h-0.5 flex-1 rounded-full transition-all duration-500 ${
                        activeStep > index ? 'bg-gradient-to-r from-[#FFC24F] to-[#1B4061]' : 'bg-gray-200'
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Steps Section */}
        <div className="relative mb-10">
          {/* Desktop Timeline */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1B4061]/20 via-[#FFC24F]/40 to-[#1B4061]/20 rounded-full"></div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {howItWorksSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
                variants={stepCardVariants}
              >
                {/* Mobile Timeline */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="sm:hidden absolute left-6 top-16 w-0.5 h-12 bg-gradient-to-b from-[#1B4061] to-[#FFC24F] opacity-30"></div>
                )}

                <motion.div
                  className={`bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-500 border-2 ${
                    activeStep === index
                      ? "border-[#FFC24F] shadow-[#FFC24F]/20 -translate-y-1 scale-105"
                      : "border-white/50 hover:border-[#FFC24F]/50 hover:-translate-y-0.5"
                  }`}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Number and Icon */}
                  <div className="relative mb-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all duration-300 ${
                        activeStep === index
                          ? "bg-gradient-to-r from-[#FFC24F] to-[#FFC24F]/80 shadow-lg shadow-[#FFC24F]/30"
                          : "bg-gradient-to-r from-deep-blue to-[#1B4061]/80 group-hover:from-[#FFC24F] group-hover:to-[#FFC24F]/80"
                      }`}
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div
                        className={`transition-colors duration-300 [&>svg]:w-6 [&>svg]:h-6 ${
                          activeStep === index ? "text-[#1B4061]" : "text-white group-hover:text-[#1B4061]"
                        }`}
                      >
                        {step.icon}
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-7 h-7 bg-gradient-to-r from-[#FFC24F] to-[#FFC24F]/80 rounded-full flex items-center justify-center shadow-md"
                      animate={{ rotate: activeStep === index ? 360 : 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="text-[#1B4061] font-bold text-xs">{step.step}</span>
                    </motion.div>
                  </div>

                  {/* Time Badge */}
                  <div className="inline-flex items-center gap-1 bg-[#1B4061]/10 px-2.5 py-1 rounded-full mb-3">
                    <Clock className="w-3 h-3 text-[#1B4061]" />
                    <span className="text-xs font-semibold text-[#1B4061]">{step.time}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-base sm:text-lg font-bold text-[#1B4061] mb-2 group-hover:text-[#1B4061]/90 transition-colors leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-snug mb-3">
                    {activeStep === index ? step.detailedDescription : step.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5">
                    {step.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start text-xs text-slate-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-3 h-3 text-green-500 mr-1.5 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Desktop Arrow */}
                {index < howItWorksSteps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <div className="w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center border-2 border-[#FFC24F]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#1B4061]" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Traditional vs Our Way Comparison */}
        <motion.div
          className="w-full bg-white py-8 border rounded-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Compact Header */}
            <motion.div className="text-center mb-6" variants={fadeInUp}>
              <motion.div
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1.5 rounded-full mb-3 border border-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight className="h-4 w-4 text-deep-blue" />
                <span className="text-xs font-bold text-deep-blue tracking-wide">WHY CHOOSE US?</span>
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-poppins font-semibold text-deep-blue mb-3 leading-tight">
                Traditional vs Our Modern Solution
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                See the difference between <span className="font-semibold text-gray-700">old methods</span> and our{" "}
                <span className="font-semibold text-green-600">smart approach</span>
              </p>
            </motion.div>

            {/* Compact Two Card Layout */}
            <motion.div
              className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* CONS Card - Traditional Services */}
              <motion.div
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4 sm:p-5 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={comparisonCardVariants}
                whileHover={{ y: -5 }}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-300">
                  <motion.div
                    className="p-2 bg-gray-600 rounded-xl"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <X className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-gray-800 leading-tight">
                      Traditional Legal Services
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">Expensive • Slow • Complicated</p>
                  </div>
                </div>

                {/* Cons List */}
                <motion.div className="space-y-2" variants={staggerContainer}>
                  {comparisonData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-2.5 border-l-3 border-gray-400 shadow-sm hover:shadow-md transition-all duration-200"
                      variants={fadeInScale}
                      whileHover={{ x: 5 }}
                    >
                      <div className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-gray-500 flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-gray-800 text-xs sm:text-sm mb-0.5 leading-tight">
                            {item.traditional.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-snug">{item.traditional.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Footer */}
                <div className="mt-4 p-2.5 bg-gray-200 rounded-lg border border-gray-300">
                  <p className="text-center text-gray-700 font-semibold text-xs sm:text-sm">
                    ❌ Outdated, expensive, and time-consuming
                  </p>
                </div>
              </motion.div>

              {/* PROS Card - Our Solution */}
              <motion.div
                className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-5 border-2 border-green-200 shadow-lg hover:shadow-xl transition-all duration-300"
                variants={comparisonCardVariants}
                whileHover={{ y: -5 }}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Card Header */}
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-green-200">
                  <motion.div
                    className="p-2 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Smile className="w-5 h-5 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-green-700 leading-tight">Our Smart Solution</h3>
                    <p className="text-xs text-green-600 font-medium">Free • Fast • Simple</p>
                  </div>
                </div>

                {/* Pros List */}
                <motion.div className="space-y-2" variants={staggerContainer}>
                  {comparisonData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-2.5 border-l-3 border-green-400 shadow-sm hover:shadow-md transition-all duration-200"
                      variants={fadeInScale}
                      whileHover={{ x: -5 }}
                    >
                      <div className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:text-green-500">
                          {item.ourWay.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-green-700 text-xs sm:text-sm mb-0.5 leading-tight">
                            {item.ourWay.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-snug">{item.ourWay.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Footer */}
                <div className="mt-4 p-2.5 bg-gradient-to-r from-green-200 to-emerald-200 rounded-lg border border-green-300">
                  <p className="text-center text-green-800 font-semibold text-xs sm:text-sm">
                    ✅ Modern, efficient, and user-friendly
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}