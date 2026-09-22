import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"
import Link from "next/link"

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-deep-blue relative overflow-hidden">
      {/* Background Elements - Enhanced for attractiveness */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#FFC24F]/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-[#FFC24F]/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Join thousands of satisfied customers who trust us with their legal and compliance needs. Get expert
            consultation and start your business journey today.
          </p>

          {/* CTA Buttons - Enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-[#FFC24F] to-[#FFC24F]/90 hover:from-deep-blue hover:to-deep-blue/90 hover:text-white text-deep-blue px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 font-bold hover:scale-105"
            >
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-deep-blue px-8 py-4 text-lg transition-all duration-300 bg-transparent font-bold hover:scale-105"
            >
              <Link href="/services">
                <ArrowRight className="mr-2 h-5 w-5" />
                Explore All Services
              </Link>
            </Button>
          </div>

          {/* Contact Info - Enhanced presentation */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-[#FFC24F]" />
              <span className="text-xl font-semibold">+91 9424440004</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center space-x-3">
              <MessageCircle className="h-6 w-6 text-[#FFC24F]" />
              <span className="text-xl font-semibold">WhatsApp Support Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
