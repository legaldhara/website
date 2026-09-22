"use client";

import { motion, Variants } from "framer-motion";
import {
  IndianRupee,
  LayoutDashboard,
  Headphones,
  Users,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function WhyCustomersLoveUs() {
  const benefits = [
    {
      icon: <IndianRupee className="h-6 w-6" />,
      title: "Affordable Professional Services",
      description:
        "Proven legal and financial solutions with senior experts, ensuring value for your investment.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Diverse Expert Network",
      description:
        "Talk to lawyers, chartered accountants (CAs), and company secretaries (CSs) to meet your legal and financial needs.",
    },
    {
      icon: <LayoutDashboard className="h-6 w-6" />,
      title: "Easy-to-Use Dashboard",
      description:
        "Streamlined navigation for service requests and tracking, making compliance simple.",
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Quick Customer Support",
      description:
        "Queries are responded to within 24 hours*, ensuring timely assistance.",
    },
  ];

  // Animation Variants
  const fadeInUp : Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  const containerStagger = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section className="py-10 md:py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="relative flex items-center justify-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-lg">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Image
                  width={600}
                  height={600}
                  src="assets/servc.webp"
                  alt="Service illustration"
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-3 -right-3 bg-gradient-to-br from-brand-orange to-[#D4A004] text-deep-blue px-5 py-2.5 rounded-full shadow-xl transform rotate-6"
                animate={{ scale: [1, 1.05, 1], rotate: [6, 4, 6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <p className="text-xs font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Trusted Service
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Benefit Cards */}
          <motion.div
            className="space-y-4 lg:pl-4 order-1 lg:order-2"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group flex items-start gap-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg hover:border-brand-orange/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-[#D4A004] text-deep-blue shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-deep-blue mb-1 group-hover:text-brand-orange transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
