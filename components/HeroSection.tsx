"use client";

import React from "react";
import { Globe, Building2, ShieldCheck } from "lucide-react";
import Image from "next/image";
import SearchBar from "./SearchBar";
// import { motion, Variants } from "framer-motion";
import { motion, fadeInUp, scaleIn, fadeInRight, staggerContainer} from "@/lib/motion";


export default function LegalDharaHero(): JSX.Element {

 
  return (
    <div className="flex flex-col mt-0">
      {/* ================== Hero Section (Desktop / Large Screens) ================== */}
      <div className="hidden lg:block flex-grow">
        <div className="lg:pl-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <motion.div 
              className="space-y-4 sm:space-y-6 text-left flex flex-col"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="space-y-2" variants={fadeInUp}>
               <p className="relative z-10 text-base sm:text-lg md:text-xl font-medium text-deep-blue">
  <span className="font-bold">Legal </span>
  <span className="text-brand-orange3 font-bold"> Dhara </span> — Simplifying Legal Solutions for You.
</p>

                <h1 className="text-xl sm:text-5xl relative z-10 md:text-4xl lg:text-5xl font-urbanist font-bold text-deep-blue leading-snug">
                  All Legal Services <br />
                  <span className="inline-block w-[16ch]">
                    Registration at <span className="font-urbanist text-brand-orange3">₹0</span>
                  </span>
                </h1>
              </motion.div>

              <motion.p 
                className="text-xl z-[5] sm:text-2xl md:text-3xl font-semibold text-deep-blue font-urbanist leading-snug"
                variants={fadeInUp}
              >
                India's First Legal Platform with{" "}
                <span className="text-brand-orange font-bold font-urbanist px-2 py-1 relative 
                  lg:inline-block hidden
                  bg-deep-blue rounded-xl transform rotate-3 hover:rotate-0 
                  shadow-lg animate-shake-blink">
                  ₹0 Service Charge.
                </span>
               <span className="relative z-[4] block text-lg sm:text-xl md:text-2xl lg:text-2xl font-medium mt-2">
  Get expert support from start to finish  — <br className="block" />fast,reliable, and hassle-free.
</span>


              </motion.p>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div 
              className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
              initial="hidden"
              animate="visible"
              variants={fadeInRight}
            >
              <div className="[filter:drop-shadow(0_15px_25px_rgba(0,0,0,0.7))]">
                <motion.div 
                  className="relative w-[700px] h-[600px] overflow-hidden border-r border-black
                    [clip-path:ellipse(90%_90%_at_100%_50%)]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                 <Image
  src="/assets/hero_boy.webp"
  alt="Professional Business Consultant"
  fill
  className="object-cover"
  priority
  fetchPriority="high"
  sizes="(max-width: 1024px) 0px, (max-width: 1280px) 699px, 800px"
/>



                  <div className="absolute bottom-16 left-2/3 -translate-x-1/2 w-3/4">
                    {/* <SearchBar /> */}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================== Hero Section (MOBILE/TABLET) ================== */}
    
      <div className="lg:hidden relative h-[700px] sm:h-[700px] overflow-hidden">
      {/* Hero background image (now discoverable and prioritized) */}
     <Image
  src="/assets/hero_boy2.webp"
  alt="All Legal Services Registration"
  fill
  priority // ensures preload in <head>
  fetchPriority="high" // modern browsers respect this for LCP
  loading="eager" // ensure early loading
  decoding="sync" // render as soon as data is available
  sizes="100vw"
  className="object-cover object-center"
  style={{ contentVisibility: "auto" }} // helps avoid render delay
/>


      {/* semi-transparent white overlay (same as before) */}
      <div className="absolute inset-0 bg-white bg-opacity-30 h-5"></div>

      {/* animated content */}
      <motion.div
        className="relative px-6 pt-8 sm:pt-12 text-white max-w-[90%]"
 initial={{ opacity: 1, y: 0 }}   // immediately visible
  animate={{ opacity: 1, y: 0 }}   // stays visible
        variants={staggerContainer}
      >
        <motion.h2
          className="text-4xl sm:text-5xl font-bold leading-tight text-deep-blue"
          variants={fadeInUp}
        >
          All Legal Services
        </motion.h2>

        <motion.p
  className="text-4xl sm:text-5xl font-bold mt-2 text-deep-blue will-change-transform"
  initial={{ opacity: 1, y: 0 }}   // text instantly visible
  animate={{ opacity: 1, y: 0 }}   // no delay on visibility
  transition={{ duration: 0 }}     // instant render
>
  Registration at{" "}
  <motion.span
    className="text-brand-orange font-bold inline-block"
    initial={{ opacity: 1, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{  duration: 0 }}
  >
    ₹0
  </motion.span>
</motion.p>


        <motion.div
          className="mt-5 space-y-10 sm:space-y-10"
          variants={fadeInUp}
        >
          <div>
            <p className="text-sm font-bold text-deep-blue sm:text-base">
              India's First Legal Platform with{" "}
              <span
                className="text-brand-orange font-bold font-urbanist px-2 py-1 relative 
                inline-block bg-deep-blue rounded-xl transform rotate-3 hover:rotate-0 
                shadow-lg animate-shake-blink"
              >
                ₹0 Service Charge.
              </span>
            </p>
            <p className="text-sm sm:text-base font-bold text-deep-blue">
              Get expert support from start to finish
            </p>
            <p className="text-sm sm:text-base font-bold text-deep-blue">
              fast, reliable and hassle-free.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>

      {/* ================== Bottom Black Bar with Icons ================== */}
      <motion.div 
        className="bg-deep-blue py-4 z-30"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{once:true}}
        transition={{ duration: 0 }}
      >
        <div className="px-4 sm:px-6 lg:px-24">
          <motion.div 
            className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-8 text-white"
            variants={staggerContainer}
            initial={{opacity:0, y:0}}
            animate="visible"
          >
            <motion.div 
              className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-4 justify-center sm:justify-start"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0 }}
            >
              <ShieldCheck className="w-6 h-6 sm:w-10 sm:h-10" />
              <div className="text-center sm:text-left">
                <h3 className="text-[10px] sm:text-base font-bold">
                  Trademark Registration
                </h3>
                <p className="text-[8px] sm:text-xs text-gray-300">File & Protect</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-4 justify-center"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0 }}
            >
              <Globe className="w-6 h-6 sm:w-10 sm:h-10" />
              <div className="text-center sm:text-left">
                <h3 className="text-[10px] sm:text-base font-bold">
                  International Trademark
                </h3>
                <p className="text-[8px] sm:text-xs text-gray-300">Global Coverage</p>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-4 justify-center sm:justify-end"
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0 }}
            >
              <Building2 className="w-6 h-6 sm:w-10 sm:h-10" />
              <div className="text-center sm:text-left">
                <h3 className="text-[10px] sm:text-base font-bold">
                  Company Incorporation
                </h3>
                <p className="text-[8px] sm:text-xs text-gray-300">Quick & Secure</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
