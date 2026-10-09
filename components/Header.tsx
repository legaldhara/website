"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import {
  Menu,
  ChevronDown,
  ChevronRight,
  Scale,
  Building,
  Shield,
  Calculator,
  FileText,
  Copyright,
  Lightbulb,
  Palette,
  BadgeIndianRupeeIcon,
  FilePen,
  FileBadge2,
  FileCog2,
  ReceiptIndianRupee,
  X
} from "lucide-react"
import { CUSTOMER_AUTH_CHANGED_EVENT, hasCustomerSessionHint } from "@/lib/customerSessionHint"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const syncSessionHint = () => setIsAuthenticated(hasCustomerSessionHint())
    syncSessionHint()
    window.addEventListener(CUSTOMER_AUTH_CHANGED_EVENT, syncSessionHint)
    window.addEventListener("storage", syncSessionHint)
    return () => {
      window.removeEventListener(CUSTOMER_AUTH_CHANGED_EVENT, syncSessionHint)
      window.removeEventListener("storage", syncSessionHint)
    }
  }, [])

  

  // Navigation structure with multi-level menus
  const navigationData = {
    "Trademark & IP": {
      icon: <Shield className="h-4 w-4 mr-2" />,
      categories: {
        Trademark: {
          icon: <Scale className="h-4 w-4 mr-2" />,
          services: [
            { name: "Trademark Registration  ", href: "/services/trademark-registration" },
            { name: "Trademark Search", href: "/services/trademark-search" },
            { name: "Respond to TM Objection  ", href: "/services/tm-objection" },
            { name: "Trademark Rectification", href: "/services/trademark-rectification" },
            { name: "Trademark Opposition", href: "/services/trademark-opposition" },
            { name: "WellKnown Trademark ", href: "/services/wellknown-trademark" },
            { name: "Trademark Renewal  ", href: "/services/trademark-renewal" },
            { name: "Trademark Assignment  ", href: "/services/trademark-assignment" },
            { name: "International Trademark  ", href: "/services/international-trademark" },
            { name: "Trademark Class Finder", href: "/services/trademark-class-finder" },
          ],
        },
        Copyright: {
          icon: <Copyright className="h-4 w-4 mr-2" />,
          services: [
            { name: "Copyright Registration  ", href: "/services/copyright-registration" },
            { name: "Literary Work  ", href: "/services/copyright-registration" },
            { name: "Copyright Music  ", href: "/services/copyright-music" },
            { name: "Software / Website ", href: "/services/copyright-registration" },
            { name: "Visual / Performing Art / Drama", href: "/services/copyright-registration" },
            { name: "Motion Picture", href: "/services/copyright-registration" },
          ],
        },
        Patent: {
          icon: <Lightbulb className="h-4 w-4 mr-2" />,
          services: [
            { name: "Patent Search  ", href: "/services/patent-search" },
            { name: "Provisional Patent Application  ", href: "/services/provisional-patent" },
            { name: "Patent Registration  ", href: "/services/patent-registration" },
          ],
        },
        Design: {
          icon: <Palette className="h-4 w-4 mr-2" />,
          services: [
            { name: "Logo Design  ", href: "/services/logo-design" },
            { name: "Design Registration  ", href: "/services/design-registration" },
          ],
        },
      },
    },
    Registrations: {
      icon: <Building className="h-4 w-4 mr-2" />,
      categories: {
        "Company Registration": {
          icon: <Building className="h-4 w-4 mr-2" />,
          services: [
            { name: "Private Limited Company  ", href: "/services/pvt-ltd" },
            { name: "Limited Liability Partnership  ", href: "/services/llp" },
            { name: "One Person Company  ", href: "/services/opc" },
            { name: "Sole Proprietorship  ", href: "/services/sole-proprietorship" },
            { name: "Partnership Firm  ", href: "/services/partnership-firm" },
            { name: "Startup India Registration  ", href: "/services/startup-india-registration" },
            { name: "Nidhi Company  ", href: "/services/nidhi-company" },
          ],
        },
        FSSAI: {
          icon: <FileText className="h-4 w-4 mr-2" />,
          services: [{ name: "FSSAI Registration  ", href: "/services/fssai-registration" },
                     { name: "FSSAI State License  ", href: "/services/fssai-registration" },
                     { name: "FSSAI Central License  ", href: "/services/fssai-registration" }
          ],
        },
        ISO: {
          icon: <Shield className="h-4 w-4 mr-2" />,
          services: [
            // { name: "ISO Registration  ", href: "/services/iso-registration" },
            { name: "ISO Non-IAF Certification  ", href: "/services/iso-registration" },
            { name: "ISO IAF Certification  ", href: "/services/iso-registration" },

          ],
        },
      },
    },
    Taxation: {
      icon: < ReceiptIndianRupee
 className="h-4 w-4 mr-2" />,
      categories: {
        GST: {
          icon: <Calculator className="h-4 w-4 mr-2" />,
          services: [
            { name: "GST Registration  ", href: "/services/gst-registration" },
            { name: "GST Filing  ", href: "/services/gst-filing" },
            { name: "GST Cancellation and Revocation  ", href: "/services/gst-cancellation" },
          ],
        },
        ITR: {
          icon: <FileText className="h-4 w-4 mr-2" />,
          services: [
            { name: "Income Tax Filing  ", href: "/services/itr-filing" },
            { name: "Tax Planning  ", href: "/services/tax-planning" },
          ],
        },
      },
    },
    Documentation: {
      icon: <FilePen className="h-4 w-4 mr-2" />,
      categories: {
        "Legal Documents" : {
          icon: <FileBadge2 className="h-4 w-4 mr-2" />,
          services: [
  { name: "Legal Notice", href: "/services/documentation" },
  { name: "Rental Agreement", href: "/services/documentation" },
  { name: "Commercial Rental Agreement", href: "/services/documentation" },
  { name: "Experience Letter", href: "/services/documentation" },
  { name: "Appointment Letter", href: "/services/documentation" },
  { name: "Affidavit Format", href: "/services/documentation" },
  { name: "Power Of Attorney", href: "/services/documentation" },
  { name: "Income Certificate", href: "/services/documentation" },
  { name: "No Objection Certificate", href: "/services/documentation" },
  { name: "Salary Slip", href: "/services/documentation" },
  { name: "Resignation Letter", href: "/services/documentation" },
  { name: "Legal Heir Certificate", href: "/services/documentation" },
  { name: "Relieving Letter", href: "/services/documentation" },
  { name: "Bonafide Certificate", href: "/services/documentation" },
  { name: "Partnership Deed", href: "/services/documentation" },
  { name: "GST Invoice", href: "/services/documentation" },
  { name: "Authorised Signatory In GST", href: "/services/documentation" },
  { name: "Delivery Challan", href: "/services/documentation" },
  { name: "Offer Letter", href: "/services/documentation" },
  { name: "Consent Letter For GST Registration", href: "/services/documentation" },
  { name: "Rent Receipt", href: "/services/documentation" },
]

        },
        "Business Contracts": {
          icon: <FileText className="h-4 w-4 mr-2" />,
          services: [
  { name: "Non Disclosure Agreement (NDA)", href: "/services/documentation" },
  { name: "Service Level Agreement", href: "/services/documentation" },
  { name: "Franchise Agreement", href: "/services/documentation" },
  { name: "Master Service Agreement", href: "/services/documentation" },
  { name: "Shareholders Agreement", href: "/services/documentation" },
  { name: "Joint Venture Agreement", href: "/services/documentation" },
  { name: "Founders Agreement", href: "/services/documentation" },
  { name: "Vendor Agreement", href: "/services/documentation" },
  { name: "Consultancy Agreement", href: "/services/documentation" },
  { name: "Memorandum of Understanding", href: "/services/documentation" },
  { name: "Succession Certificate", href: "/services/documentation" },
  { name: "Scope of Work Agreement", href: "/services/documentation" },
  { name: "Share Purchase Agreement", href: "/services/documentation" },
  { name: "Relinquishment Deed", href: "/services/documentation" },
  { name: "Legal Heir Certificate", href: "/services/documentation" },
  { name: "Trade License", href: "/services/documentation" },
  { name: "Noncompete Agreement", href: "/services/documentation" },
  { name: "Finance Agreement", href: "/services/documentation" },
  { name: "GDPR", href: "/services/documentation" },
]

        },
        "Personal & Family": {
          icon: <FileText className="h-4 w-4 mr-2" />,
          services:[
  { name: "Will Registration", href: "/services/documentation" },
  { name: "Probate of Will", href: "/services/documentation" },
  { name: "Power of Attorney", href: "/services/documentation" },
]
        },
        "Real Estate": {
          icon: <FileText className="h-4 w-4 mr-2" />,
          services: [
  { name: "Rental Agreement", href: "/services/documentation" },
  { name: "Sale Deed", href: "/services/documentation" },
  { name: "Gift Deed", href: "/services/documentation" },
  { name: "Rental Tenant Notice", href: "/services/documentation" },
]

        },
        
      },
    },
  }

 return (
  <header
    className="sticky top-0 z-[100] w-full bg-deep-blue shadow-md"
    style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)" }}
  >
    <nav className="mx-auto px-4 sm:px-6 lg:px-10 xl:px-20 py-3 lg:py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 shrink-0">
           <Image
             src="/assets/ld-monogram-dark.webp"
             alt="Legal Dhara"
             width={40}
             height={40}
             className="object-contain rounded-md w-10 h-10" // 👈 lock visual size
             priority
             sizes="40px" // 👈 ensures optimized small version is served
           />

          <span className="text-base sm:text-lg md:text-xl font-bold text-white truncate">
            Legal <span className="text-brand-orange">Dhara</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-6 2xl:gap-8">
          {Object.entries(navigationData).map(([mainItem, mainData]) => (
            <div key={mainItem} className="relative group">
              <div className="flex items-center text-sm xl:text-base text-white hover:text-brand-orange transition-colors cursor-pointer whitespace-nowrap">
                <span className="flex-shrink-0">{mainData.icon}</span>
                <span className="truncate">{mainItem}</span>
                <ChevronDown className="ml-1 h-4 w-4 flex-shrink-0" />
              </div>

              {/* Dropdown 1 */}
              <div className="absolute top-full left-0 mt-2 min-w-[14rem] bg-white rounded-md shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[999]">
                {Object.entries(mainData.categories).map(([category, categoryData]) => (
                  <div key={category} className="relative group/category">
                    <div className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 hover:text-brand-orange cursor-pointer">
                      <div className="flex items-center">
                        {categoryData.icon}
                        <span className="truncate">{category}</span>
                      </div>
                      <ChevronRight className="h-4 w-4" />
                    </div>

                    {/* Dropdown 2 */}
                    <div
                      className={`
                        absolute top-0 left-full ml-1 min-w-[14rem] bg-white rounded-md shadow-lg border
                        opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible
                        transition-all duration-200 z-[999]
                        ${categoryData.services.length > 10 ? "max-h-96 overflow-y-auto custom-scrollbar" : ""}
                      `}
                    >
                      {categoryData.services.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-brand-orange transition-colors first:rounded-t-md last:rounded-b-md"
                          prefetch
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <Link href="/services" className="flex items-center text-sm xl:text-base text-white hover:text-brand-orange">
            <FileCog2 className="h-4 w-4 mr-2" /> Services
          </Link>

          <Link href="/pricing" className="flex items-center text-sm xl:text-base text-white hover:text-brand-orange">
            <BadgeIndianRupeeIcon className="h-4 w-4 mr-2" /> Pricing
          </Link>

          {isAuthenticated ? (
            <Link href="/dashboard">
              <Button className="bg-brand-orange hover:bg-orange-600 w-full text-sm font-medium xl:text-base text-deep-blue">
                Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button className="bg-brand-orange hover:bg-orange-600 w-full text-sm xl:text-base text-deep-blue ">
                Login
              </Button>
            </Link>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="lg:hidden" aria-label="Toggle navigation menu">
  {isOpen ? (
    <X className="h-6 w-6 text-white transition-all duration-200" />
  ) : (
    <Menu className="h-6 w-6 text-white transition-all duration-200" />
  )}
</SheetTrigger>

          <SheetContent className="overflow-y-auto max-h-screen bg-white">
            <div className="flex flex-col space-y-4 mt-8 pb-8">
              {Object.entries(navigationData).map(([mainItem, mainData]) => (
                <div key={mainItem} className="space-y-2">
                  <div className="flex items-center text-lg font-semibold text-deep-blue">
                    {mainData.icon}
                    {mainItem}
                  </div>

                  {Object.entries(mainData.categories).map(([category, categoryData]) => (
                    <div key={category} className="ml-6 space-y-2">
                      <div className="flex items-center text-md font-medium text-gray-800">
                        {categoryData.icon}
                        {category}
                      </div>
                      <div className="ml-6 space-y-1">
                        {categoryData.services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href}
                            className="block text-sm text-gray-600 hover:text-brand-orange"
                            onClick={() => setIsOpen(false)}
                            prefetch
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}

              <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>

              {isAuthenticated ? (
                <Button className="bg-brand-orange hover:bg-orange-600 w-full text-deep-blue">
                  <Link href="/dashboard">Profile</Link>
                </Button>
              ) : (
                <Button className="bg-brand-orange hover:bg-orange-600 w-full text-deep-blue">
                  <Link href="/login">Login</Link>
                </Button>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </header>
)

}

export default Header
