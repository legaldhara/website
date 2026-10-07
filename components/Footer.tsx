"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Facebook,
  Instagram,
  Linkedin,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Search,
  RefreshCw,
  FileCheck,
  Globe,
  ShieldCheck,
  Building2,
  FileText,
  Landmark,
  User,
  UtensilsCrossed,
  Award,
  Calculator,
  RefreshCcwDot,
  FileSearch,
  Clock,
  Calendar,
 
} from "lucide-react"
import Image from "next/image"
import { blogData } from "@/lib/blogData" // Adjust path as needed

const Footer = () => {
  const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(null)

  const toggleMobileCategory = (categoryName: string) => {
    setOpenMobileCategory(openMobileCategory === categoryName ? null : categoryName)
  }

  // Get latest 3 blog posts

  const latestBlogs = blogData.slice(0, 3)

  




  const serviceIcons: Record<string, JSX.Element> = {
    "Trademark Registration": <FileCheck className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Trademark Search": <Search className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Respond to TM Objection": <ShieldCheck className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Trademark Watch": <FileSearch className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Trademark Renewal": <RefreshCw className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Trademark Assignment": <FileText className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "International Trademark": <Globe className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Trademark Class Finder": <Search className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Private Limited Company Registration": <Building2 className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Partnership Firm Registration": <User className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "LLP Registration": <FileCheck className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Sole Proprietorship Registration": <User className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Startup India Registration": <Award className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "One Person Company Registration": <User className="h-4 w-4 text-brand-orange inline-block mr-2" />,

    "Fssai Registration": <UtensilsCrossed className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "ISO Registration": <Award className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "GST Registration": <Landmark className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "GST Filing": <FileText className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "GST Cancellation": <RefreshCw className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Income Tax Filing": <Calculator className="h-4 w-4 text-brand-orange inline-block mr-2" />,
    "Tax Planning": <Calculator className="h-4 w-4 text-brand-orange inline-block mr-2" />,
  }

  const footerServiceSections = [
    {
      id: "Trademark & IP",
      title: "Trademark & IP",
      desktopColumns: [
        [
          { name: "Trademark Registration", href: "/services/trademark-registration" },
          { name: "Trademark Search", href: "/services/trademark-search" },
          { name: "Respond to TM Objection", href: "/services/tm-objection" },
        ],
        [
          { name: "Trademark Watch", href: "/services/trademark-watch" },
          { name: "Trademark Renewal", href: "/services/trademark-renewal" },
          { name: "Trademark Assignment", href: "/services/trademark-assignment" },
        ],
        [
          { name: "International Trademark", href: "/services/international-trademark" },
          { name: "Trademark Class Finder", href: "/services/trademark-class-finder" },
        ],
      ],
    },
    {
      id: "registrations",
      title: "Registrations",
      desktopColumns: [
        [
          { name: "Private Limited Company Registration", href: "/services/pvt-ltd" },
          { name: "Partnership Firm Registration", href: "/services/partnership" },
          { name: "LLP Registration", href: "/services/llp" },
        ],
        [
          { name: "Sole Proprietorship Registration", href: "/services/sole-proprietorship" },
          { name: "One Person Company Registration", href: "/services/opc" },
        ],
        [
          { name: "Fssai Registration", href: "/services/fssai-registration" },
          { name: "ISO Registration", href: "/services/iso-registration" },
        ],
      ],
    },
    {
      id: "Taxation & compliance",
      title: "Taxation & Compliance",
      desktopColumns: [
        [
          { name: "GST Registration", href: "/services/gst-registration" },
          { name: "GST Filing", href: "/services/gst-filing" },
          { name: "GST Cancellation", href: "/services/gst-Cancellation" },
        ],
        [
          { name: "Income Tax Filing", href: "/services/itr-filing" },
          { name: "Tax Planning", href: "tax-planning" },
        ],
      ],
    },
  ]

  const getAllServicesForSection = (section: (typeof footerServiceSections)[0]) => {
    const allServices: { name: string; href: string }[] = []
    section.desktopColumns.forEach((col) => allServices.push(...col))
    return allServices
  }

  return (
    <footer className="bg-deep-blue text-white">
      <div className="px-4 sm:px-6 lg:px-10 xl:px-20 py-12">
        {/* Main Footer Content  //grid grid-cols-1 lg:grid-cols-12 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-12"> 
          {/* Left Column: Company Info - 3 columns   //lg:col-span-3 */}
          <div className="lg:col-span-3  ">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/assets/LD2.webp"
                alt="Legal Dhara Logo"
                width={48}
                height={48}
                className="object-contain rounded-md"
                priority
              />
              <span className="text-2xl font-bold text-white">Legal <span className="text-brand-orange">Dhara</span></span>
            </div>

            {/* Address */}
            <div className="mb-6">
              <h4 className="text-brand-orange text-sm font-semibold mb-3 uppercase tracking-wide">Our Office</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                7th Floor, Rajani Bhawan,
                <br />
                Opposite High Court,
                <br />
                Mahatma Gandhi Road,
                <br />
                Indore, Madhya Pradesh
              </p>
              <Link
                href="https://www.google.com/maps/place/Rajani+Bhawan/@22.7207549,75.8736217,21z/data=!3m1!5s0x3962fd5ccd4738b7:0x43f7ab3bc8c63ba!4m14!1m7!3m6!1s0x3962fd142adf6897:0x3cc0d44dd1e68c4b!2sHigh+Court+of+Madhya+Pradesh+Bench+at+Indore!8m2!3d22.7192447!4d75.873654!16s%2Fm%2F0p8zy6h!3m5!1s0x3962fd144b8f674d:0x4731b4be84a3e4ee!8m2!3d22.7207836!4d75.873646!16s%2Fg%2F11c54dv0sf?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-orange hover:text-orange-300 transition-colors text-sm font-medium"
              >
                Open on Google Maps
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Social Media */}
            <div className="mb-6">
              <h4 className="text-brand-orange text-sm font-semibold mb-3 uppercase tracking-wide">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="/contact"  aria-label="Contact us" className="p-2 bg-white/5 rounded-lg hover:bg-brand-orange/20 transition-colors">
                  <Facebook className="h-5 w-5 text-gray-300 hover:text-brand-orange" />
                </Link>
                <Link href="https://www.instagram.com/legal_dhara?igsh=MXE2czVieDQzMW9kZw=="  aria-label="Contact us" className="p-2 bg-white/5 rounded-lg hover:bg-brand-orange/20 transition-colors">
                  <Instagram className="h-5 w-5 text-gray-300 hover:text-brand-orange" />
                </Link>
                <Link href="https://www.threads.com/@legal_dhara"  aria-label="Contact us" className="p-2 bg-white/5 rounded-lg hover:bg-brand-orange/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-gray-300 hover:text-brand-orange" />
                </Link>
              </div>
            </div>


        

            {/* Quick Links */}
            <div className="mb-6">
              <h4 className="text-brand-orange text-sm font-semibold mb-3 uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-brand-orange transition-colors text-sm inline-flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-brand-orange transition-colors text-sm inline-flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-brand-orange transition-colors text-sm inline-flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 group-hover:translate-x-1 transition-transform" />
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Middle Column: Services - 6 columns */}
          <div className="lg:col-span-6"> 
            {footerServiceSections.map((section) => (
              <div key={section.id} className="mb-8 last:mb-0">
                <h3 className="hidden lg:block text-brand-orange text-base font-bold mb-4 pb-2 border-b border-brand-orange/30 uppercase tracking-wide">
                  {section.title}
                </h3>

                <button
                  className="lg:hidden flex justify-between items-center w-full py-3 border-b border-gray-700 text-base font-semibold text-brand-orange"
                  onClick={() => toggleMobileCategory(section.id)}
                >
                  {section.title}
                  {openMobileCategory === section.id ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>

                
                <div className="hidden lg:grid lg:grid-cols-3 gap-x-8 gap-y-3">
                  {section.desktopColumns.map((column, colIndex) => (
                    <ul key={colIndex} className="space-y-2">
                      {column.map((service) => (
                        <li key={service.href} className="flex items-start">
                          {serviceIcons[service.name]}
                          <Link
                            href={service.href}
                            className="text-gray-300 hover:text-brand-orange transition-colors text-sm leading-relaxed"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>

                
                <ul
                  className={`space-y-2 ${
                    openMobileCategory === section.id ? "block" : "hidden"
                  } lg:hidden mt-4`}
                >
                  {getAllServicesForSection(section).map((service, index) => (
                    <li key={index} className="flex items-start">
                      {serviceIcons[service.name]}
                      <Link
                        href={service.href}
                        className="text-gray-300 hover:text-brand-orange transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> 

          {/* Right Column: Latest Blog Posts - 3 columns */}
           <div className="lg:col-span-3">
            <h3 className="text-brand-orange text-base font-bold mb-6 pb-2 border-b border-brand-orange/30 uppercase tracking-wide">
              Latest From Blog
            </h3>
            <div className="space-y-6">
              {latestBlogs.map((blog : any) => (
                <Link
                  key={blog.id}
                  href={`/blog`}
                  className="group block"
                >
                  <div className="flex gap-4">
                    
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-700">
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-semibold mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors leading-tight">
                        {blog.title}
                      </h4>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {blog.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {blog.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            
            <Link
              href="/blog"
              className="inline-flex items-center mt-6 text-brand-orange hover:text-orange-300 transition-colors text-sm font-semibold group"
            >
              View All Blog Posts
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div> 
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="text-center mb-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              By continuing this page you agree to our{" "}
              <Link
                href="/terms"
                className="text-brand-orange hover:text-orange-300 font-semibold underline"
              >
                Terms & Conditions
              </Link>
              ,{" "}
              <Link
                href="/privacy"
                className="text-brand-orange hover:text-orange-300 font-semibold underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/refund"
                className="text-brand-orange hover:text-orange-300 font-semibold underline"
              >
                Refund Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Legal Dhara. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-brand-orange text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-brand-orange text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/refund"
                className="text-gray-400 hover:text-brand-orange text-sm transition-colors"
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
