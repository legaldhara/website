"use client";

import { Scale, Calculator, AtSign, Building2, ChevronRight, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import { motion, Variants } from "framer-
import { motion, fadeInUp, fadeInLeft, fadeInRight, staggerContainer, serviceCardVariants } from "@/lib/motion";


interface Service {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  href: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: Scale,
    title: "Talk to A Lawyer",
    description: "Provide legal advice, draft contracts, handle litigation, and offer legal representation.",
    color: "bg-brand-orange",
    href: "/contact",
  },
  {
    id: 2,
    icon: Calculator,
    title: "Talk to A Chartered accountant",
    description: "Provide financial auditing, taxation advice, and financial planning services.",
    color: "bg-brand-orange",
    href: "/contact",
  },
  {
    id: 3,
    icon: AtSign,
    title: "Talk to A Company secretary",
    description:
      "Advisory on corporate governance, regulatory compliance, and secretarial services for businesses and enterprises.",
    color: "bg-brand-orange",
    href: "/contact",
  },
  {
    id: 4,
    icon: Building2,
    title: "Talk to An Intellectual Property Lawyer",
    description: "Assist with trademarks, copyrights, patents, and intellectual property protection and legal matters.",
    color: "bg-brand-orange",
    href: "/contact",
  },
];

export default function ProfessionalServices(): JSX.Element {
  // Animation variants

  return (
    <section className="w-full bg-gray-50 px-4 py-12 md:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-12 text-center lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-semibold text-deep-blue mb-6 leading-tight">
            100+ Verified CAs, CSs, and Legal Experts Ready to Streamline Your Business Operations.
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Illustration */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg">
              <motion.div
                className="absolute inset-0 rounded-full bg-yellow-100/50 blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="relative aspect-square w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
              <Image
  src="/assets/v1.webp"
  alt="Professional business consultant illustration"
  fill
  className="object-contain"
  priority
  sizes="(max-width: 640px) 512px, (max-width: 1024px) 665px, 800px" // 👈 responsive sizing
  quality={75} // 👈 safe compression, huge size reduction
/>

                <div className="absolute bottom-2 left-2 bg-white/70 px-2 py-1 rounded text-xs text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Illustration by <a href="https://www.vecteezy.com/free-vector/working-man">Vecteezy</a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Services */}
          <motion.div
            className="space-y-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={serviceCardVariants}>
                <Link
                  href={service.href}
                  className="group block transform cursor-pointer rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:bg-gradient-to-r hover:from-white hover:to-yellow-50 hover:shadow-xl hover:shadow-yellow-200/30 hover:border hover:border-yellow-200"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${service.color} group-hover:shadow-lg`}
                      whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="h-8 w-8 text-white transition-all duration-300 group-hover:scale-110" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-2 text-xl font-bold text-deep-blue transition-colors duration-300 group-hover:text-yellow-600 font-inter">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-700 font-inter">
                        {service.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-yellow-600 group-hover:translate-x-1 group-hover:scale-110" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}