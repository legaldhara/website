"use client"
import { motion } from "framer-motion"
import { Search, CheckCircle, Sparkles, Target, ArrowRight } from "lucide-react"
import Link from "next/link"

function ClassFinderTool() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-deep-blue via-[#111111] to-deep-blue relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-brand-orange2/10 rounded-full blur-3xl"
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* LEFT SIDE */}
          <motion.div
            className="text-white space-y-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-brand-orange/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-brand-orange/30"
              whileHover={{ scale: 1.05 }}
            >
              <Search className="h-4 w-4 text-brand-orange" />
              <span className="text-xs font-bold text-brand-orange tracking-wide">
                FREE TOOL
              </span>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-4xl font-poppins font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Find Your Perfect{" "}
              <span className="text-brand-orange">Trademark Class</span> Instantly
            </motion.h2>

            <motion.p
              className="text-sm md:text-base text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Not sure which class your trademark belongs to? Our intelligent{" "}
              <span className="font-semibold text-white">Class Finder Tool</span> helps
              you discover the right trademark class in seconds. Simple, accurate, and
              completely free!
            </motion.p>

            {/* Features List */}
            <motion.div
              className="space-y-3 pt-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {[
                {
                  icon: Sparkles,
                  title: "Instant Results",
                  desc: "Get your trademark class in under 10 seconds",
                },
                {
                  icon: Target,
                  title: "45 Classes Coverage",
                  desc: "Search across all 45 trademark classes",
                },
                {
                  icon: CheckCircle,
                  title: "100% Free",
                  desc: "No hidden fees, no sign-up required",
                },
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-orange/20 rounded-lg flex items-center justify-center group-hover:bg-brand-orange/30 transition-colors">
                    <feature.icon className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-0.5">{feature.title}</h4>
                    <p className="text-xs text-gray-400">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA BUTTON */}
            <motion.div
              className="pt-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href="services/trademark-class-finder"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-brand-orange to-[#BC9139] rounded-xl font-bold text-sm text-deep-blue transition-all hover:shadow-2xl hover:shadow-brand-orange/30 flex items-center gap-2"
              >
                <Search className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Find Your Trademark Class Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - TOOL PREVIEW */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <motion.div
              className="relative w-full max-w-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-white/20 transform transition-transform duration-300">
                {/* Tool Mock */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2">
                      <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="w-full pl-12 pr-4 py-3.5 bg-gray-50 rounded-xl border-2 border-gray-200 text-gray-400 text-sm">
                      Enter your product or service...
                    </div>
                  </div>

                  {/* Results Mock */}
                  <div className="space-y-2">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-3 bg-gradient-to-r from-brand-orange/10 to-brand-orange2/10 rounded-lg border border-brand-orange/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center font-bold text-deep-blue text-sm">
                          25
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-deep-blue">Class 25</p>
                          <p className="text-xs text-gray-600">Clothing, Footwear</p>
                        </div>
                      </div>
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </motion.div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-500 text-sm">
                          35
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-700">Class 35</p>
                          <p className="text-xs text-gray-500">Advertising, Business</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 opacity-60">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center font-bold text-gray-500 text-sm">
                          09
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-700">Class 09</p>
                          <p className="text-xs text-gray-500">Software, Electronics</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-center gap-4 pt-2 border-t border-gray-200">
                    {[
                      { label: "Classes", value: "45+" },
                      { label: "Searches", value: "10k+" },
                      { label: "Free", value: "Always" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <p className="text-lg font-bold text-brand-orange">{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-br from-brand-orange to-[#BC9139] text-deep-blue px-4 py-2 rounded-full shadow-lg rotate-12"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs font-bold">Try Now!</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ClassFinderTool
