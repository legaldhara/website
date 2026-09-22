import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function ExpertsCTA() {
  return (
    <section className="w-full bg-[#F4F4F4] px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-deep-blue

 px-8 py-12 md:px-12 lg:px-16 lg:py-16">
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-4xl font-urbanist">
                Have Questions ? Talk to Our Experts!
              </h2>
              <p className="text-lg text-gray-200 md:text-xl lg:max-w-3xl">
                Need personalized advice or have questions about your business registration or compliance? Our
                experienced team is ready to help you anytime.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link 
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-6 py-3 text-lg font-semibold text-deep-blue transition-all duration-200 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-transparent md:px-8 md:py-4">
                Call Us Now
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Optional: Add some subtle background decoration */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div> */}
        </div>
      </div>
    </section>
  )
}
