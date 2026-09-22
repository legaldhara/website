"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, CheckCircle } from "lucide-react"

interface CtaSectionProps {
  title: string
  serviceName: string
  description: string
}

export default function CtaSection({ title, serviceName, description }: CtaSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-deep-blue via-deep-blue to-gray-700 text-white shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed px-2">
            {description}{" "}
            <span className="font-semibold">{serviceName}</span>.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-2">
            <Link href="#" passHref>
              <Button
                size="lg"
                className="bg-white text-[#0A2342] hover:bg-gray-100 font-bold 
                          px-6 sm:px-8 md:px-10 lg:px-12 
                          py-4 sm:py-5 md:py-6 
                          rounded-xl sm:rounded-2xl 
                          text-base sm:text-lg md:text-xl 
                          shadow-2xl transform hover:scale-105 transition-all duration-300 
                          w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Apply for {serviceName}
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
              </Button>
            </Link>

            <Link href="tel:9424440004" passHref>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A2342] 
                          font-bold 
                          px-6 sm:px-8 md:px-10 lg:px-12 
                          py-4 sm:py-5 md:py-6 
                          rounded-xl sm:rounded-2xl 
                          text-base sm:text-lg md:text-xl 
                          bg-transparent 
                          w-full sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                  94244-40004
                </span>
              </Button>
            </Link>
          </div>

          {/* Highlights */}
          <div className="flex flex-col sm:flex-row items-center justify-center 
                          gap-4 sm:gap-6 md:gap-8 
                          text-sm sm:text-base text-blue-100 
                          pt-6 sm:pt-8 
                          px-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Expert Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Transparent Process</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Guaranteed Protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
