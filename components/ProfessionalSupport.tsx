"use client";
import { motion, cardVariants , containerVariants } from "@/lib/motion";

import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Service {
  heading: string;
  subheading: string;
  image: string;
}

const ProfessionalSupport: React.FC = () => {
  const services: Service[] = [
    {
      heading: "Lawyers",
      subheading: "For contracts, notices, and litigation support.",
      image: "assets/G(3).webp",
    },
    {
      heading: "Chartered Accountants (CAs)",
      subheading: "For tax filings, audits, and financial planning.",
      image: "assets/G(1).webp",
    },
    {
      heading: "Company Secretaries (CSs)",
      subheading: "For regulatory compliance and governance.",
      image: "assets/G(2).webp",
    },
  ];

  // Animation variants


  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-semibold text-deep-blue mb-6 leading-tight">
            Seamless Expert Assistance on Demand
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We guide you through legal, financial, and compliance challenges.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white shadow-lg overflow-hidden border border-black rounded-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow items-center text-center gap-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.subheading}
                </p>
              </div>

              {/* Image & Button */}
              <div className="p-6 flex flex-col items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="w-full"
                >
                  <Image
                    src={service.image}
                    alt={service.heading}
                    width={500}
                    height={300}
                    className="w-full h-48 md:h-52 lg:h-56 object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                  />
                </motion.div>

                <Link
                  href="/contact"
                  className="w-full md:w-3/4 bg-deep-blue text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-brand-orange hover:text-black transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Consult Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProfessionalSupport;
