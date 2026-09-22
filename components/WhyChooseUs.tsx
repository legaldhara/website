"use client";
import { motion, fadeUp} from "@/lib/motion";

import { IndianRupee, FileCheck, Headphones, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function TrademarkFilingSection() {
  const logos: string[] = [
    "/ama.webp",
    "/google.webp",
    "/g_logo.png",
    "/icons8-hp-48.png",
    "/icons8-phone-pe-48.png",
    "/ama.webp",
    "/google.webp",
    "/g_logo.png",
    "/icons8-hp-48.png",
    "/icons8-phone-pe-48.png",
  ];

  const benefits = [
    { icon: IndianRupee, text: "Affordable" },
    { icon: FileCheck, text: "Compliance Ensured" },
    { icon: Headphones, text: "Industry Experts" },
    { icon: Clock, text: "On-time Service" },
  ];

 
 

  return (
    <section className="bg-deep-blue text-white py-16 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-24">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          custom={0}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Why Choose Legal Dhara ?
          </h2>
          <Link
            href="#contact-us"
            className="bg-brand-orange hover:bg-orange-600 text-gray-800 px-6 py-3 rounded-lg font-semibold w-full sm:w-auto inline-flex items-center justify-center transition-all"
          >
            Get Started
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Left - Benefits */}
          <motion.div
            className="bg-[linear-gradient(181.75deg,hsla(0,0%,44%,0.3)-57.28%,rgba(17,39,60,0.3)97.45%)] rounded-2xl p-6 sm:p-8 border-dark-blue border-t-2 border-r-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {benefits.map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-center space-x-4"
                >
                  <div className="bg-slate-600 rounded-full p-3">
                    <Icon className="h-6 w-6 text-brand-orange" />
                  </div>
                  <span className="text-lg sm:text-xl font-medium">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Certifications */}
          <motion.div
            className="bg-[linear-gradient(181.75deg,hsla(0,0%,44%,0.3)-57.28%,rgba(17,39,60,0.3)97.45%)] rounded-2xl p-6 sm:p-8 border-dark-blue border-t-2 border-r-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-8 leading-tight">
              Obtain Authorization from
              <br />
              Government Regulatory Authorities
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 place-items-center">
              {["/assets/ISO.webp", "/assets/FSSAI.webp", "/assets/MSME.webp", "/assets/IP.webp"].map(
                (src, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-full w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center"
                  >
                    <Image
                      src={src}
                      alt={`Certification ${i + 1}`}
                      width={96}
                      height={96}
                      className="object-contain w-16 h-16 sm:w-24 sm:h-24"
                      priority
                    />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </div>

        {/* Trusted Partners */}
        <motion.div
          className="relative overflow-hidden bg-[linear-gradient(181.75deg,hsla(0,0%,44%,0.3)-57.28%,rgba(17,39,60,0.3)97.45%)] 
          rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-dark-blue border-t-2 border-r-2"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-white mb-4 sm:mb-6 px-4">
            Our Trusted Partners
          </h3>

          {/* gradient fades */}
          <div className="absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20 
            bg-gradient-to-r from-[#071B34]/80 via-[#071B34]/40 to-transparent 
            backdrop-blur-[2px] z-10 pointer-events-none"></div>

          <div className="absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20 
            bg-gradient-to-l from-[#071B34]/80 via-[#071B34]/40 to-transparent 
            backdrop-blur-[2px] z-10 pointer-events-none"></div>

          {/* marquee */}
          <div className="overflow-hidden px-2 sm:px-4">
            <motion.div
              className="flex w-max animate-scroll gap-6 sm:gap-8 md:gap-12"
              initial={{ x: 0 }}
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px] 
                    h-[60px] sm:h-[70px] md:h-[80px] rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl 
                    transform transition-all duration-300"
                >
                  <Image
                    src={logo}
                    alt={`Partner ${idx}`}
                    width={90}
                    height={60}
                    className="object-contain p-2 w-[70px] sm:w-[80px] md:w-[90px]"
                    priority
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
