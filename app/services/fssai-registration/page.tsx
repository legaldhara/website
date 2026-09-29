import type { Metadata } from "next"
import { CheckCircle, Shield, Users, FileText, Clock, Award, AlertTriangle, Building, Truck, Store } from "lucide-react"
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import fssaiRegistrationService from "./data"
import {Card , CardContent, CardHeader, CardTitle} from "@/components/ui/card"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"


export const metadata: Metadata = {
  title: "FSSAI Registration - Apply for FSSAI Certificate Online | Expert Assistance",
  description:
    "Get your FSSAI registration fast and hassle-free. Mandatory for all food businesses in India. Expert guidance for Basic, State, and Central licenses. Apply now!",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "importance", title: "Importance" },
  { id: "types", title: "License Types" },
  { id: "eligibility", title: "Eligibility" },
  { id: "documents", title: "Documents" },
  { id: "process", title: "Process" },
  { id: "benefits", title: "Benefits" },
  { id: "compliance", title: "Compliance" },
  { id: "renewal", title: "Renewal" },
  { id: "fees", title: "Fees" },
  { id: "faq", title: "FAQ" },
]

export default function FSSAIRegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <ServiceHeroForm service={fssaiRegistrationService} />

      <SectionNavigation sections={sections} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">What is FSSAI Registration?</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-xl leading-relaxed">
                FSSAI Registration is a compulsory authorisation for individuals or entities involved in the
                manufacturing, processing, storage, distribution, or sale of food products in India. It is governed by
                the Food Safety & Standards (Licensing and Registration of Food Business) Regulations, 2011. This
                registration differs from an FSSAI License based on the size and nature of the business.
              </p>

              <p>
                Whether you're a small food vendor, a home-based kitchen, or managing a large food chain, obtaining
                FSSAI Registration is essential for building customer trust and operating legally. Regulated by the Food
                Safety and Standards Authority of India, this registration helps streamline food safety practices and
                boosts the credibility of your business.
              </p>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                <p className="font-semibold text-green-800">
                  FSSAI stands for the Food Safety and Standards Authority of India, an autonomous organisation under
                  the Ministry of Health and Family Welfare, Government of India. Established under the Food Safety and
                  Standards Act, 2006 (FSS Act), FSSAI governs the food business in India, ensuring that food products
                  meet quality standards and undergo safety checks. Its primary goal is to eliminate food adulteration
                  and the sale of substandard products while maintaining the safety of food products across the country.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section id="importance" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Importance of FSSAI Registration</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                FSSAI License registration is vital for all Food Business Operators (FBOs), including those planning to
                open restaurants, bakeries, hotels, cloud kitchens, or food stalls. It is required for anyone engaged in
                the manufacturing, preparation, sale, transportation, distribution, or storage of food products. FSSAI
                registration ensures food safety compliance and enhances your business's reputation.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-semibold text-green-800 mb-3">Key Features of FSSAI Registration</h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>14-Digit Registration Number:</strong> Every FSSAI Registration Certificate is
                        accompanied by a 14-digit number that must be displayed on all food packages.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Quality Assurance:</strong> By compelling Food Business Operators (FBOs) to display
                        their registration details, FSSAI ensures accountability for quality and safety.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Applicability:</strong> FSSAI License Registration is compulsory for all FBOs, from
                        small-scale vendors to large manufacturing units.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-semibold text-blue-800 mb-3">Who Requires FSSAI Registration?</h3>
                  <div className="grid grid-cols-1 gap-2 text-blue-700">
                    <div className="flex items-center gap-2">
                      <Store className="h-4 w-4 text-blue-600" />
                      <span>Petty retailers, Retail Shops, Snack shops</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-blue-600" />
                      <span>Hotels, Restaurants, and Bars</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4 text-blue-600" />
                      <span>Transporters of food products</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span>E-Commerce food suppliers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete FBO List */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Complete List of Food Business Operators Who Require FSSAI Registration
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Petty retailers, Retail Shops, Snack shops, Confectionery or Bakery shops",
                "Temporary stalls, fixed stalls, or food premises involved in preparing, storing, distributing, and selling food products",
                "Hawkers sell packaged or freshly prepared food by traveling from one location to another",
                "Dairy Units, including Milk Chilling Units, Petty Milkmen, and Milk Vendors",
                "Slaughtering house",
                "Fish Processing, Meat Processing, and unit",
                "All Food Manufacturing units that include Repacking food",
                "Vegetable Oil Processing Units",
                "Proprietary food and Novel food",
                "Cold/refrigerated storage facility",
                "Transporter of food products, having several specialised vehicles like insulated refrigerated vans/wagons, milk tankers, food wagons, food trucks",
                "Wholesalers, suppliers, distributors, and marketers of food products",
                "Hotels, Restaurants, and Bars",
                "Canteens and Cafeteria, including mid-day meal canteens",
                "Food Vending Agencies and Caterers",
                "Dhaba, PG provides food, a Banquet hall with food catering arrangements, Home home-based canteen, and Food stalls at fairs or religious institutions",
                "Importers and Exporters of food items and food ingredients",
                "E-Commerce food suppliers, including cloud kitchens",
              ].map((item, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span className="text-purple-800 text-sm">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Types Section */}
        <section id="types" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Types of FSSAI Registration</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-8">
              <p>
                FSSAI registrations are categorised based on a food business's turnover, production capacity, and other
                operational details. Businesses must choose from three main types of registrations—Basic, State, or
                Central—depending on their turnover and production scope. Below is an overview of each registration type
                and the corresponding eligibility criteria:
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Basic Registration */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-200 rounded-full mb-3">
                    <span className="text-2xl font-bold text-green-800">B</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-800">FSSAI Basic Registration</h3>
                </div>

                <div className="space-y-4 text-green-700">
                  <div>
                    <p className="font-semibold">Who Needs It:</p>
                    <p className="text-sm">
                      Food Business Operators (FBOs) with an annual turnover of less than INR 12 lakh.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Registration Form:</p>
                    <p className="text-sm">Form A</p>
                  </div>

                  <div>
                    <p className="font-semibold">Key Point:</p>
                    <p className="text-sm">
                      This registration is generally for small-scale or startup food ventures, such as small retailers
                      or home-based food producers.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Fee:</p>
                    <p className="text-sm">₹100 per annum</p>
                  </div>

                  <div>
                    <p className="font-semibold">Processing Time:</p>
                    <p className="text-sm">Typically issued within 7 days</p>
                  </div>
                </div>
              </div>

              {/* State License */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-200 rounded-full mb-3">
                    <span className="text-2xl font-bold text-blue-800">S</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">FSSAI State License</h3>
                </div>

                <div className="space-y-4 text-blue-700">
                  <div>
                    <p className="font-semibold">Who Needs It:</p>
                    <p className="text-sm">FBOs with an annual turnover between INR 12 lakh and INR 20 crore.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Registration Form:</p>
                    <p className="text-sm">Form B</p>
                  </div>

                  <div>
                    <p className="font-semibold">Key Point:</p>
                    <p className="text-sm">
                      Medium-sized ventures—like mid-level restaurants, small to mid-scale manufacturers, and
                      distributors—typically require the State License.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Fee:</p>
                    <p className="text-sm">₹2,000 to ₹5,000 per annum</p>
                  </div>

                  <div>
                    <p className="font-semibold">Processing Time:</p>
                    <p className="text-sm">May take up to 60 days</p>
                  </div>
                </div>
              </div>

              {/* Central License */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-200 rounded-full mb-3">
                    <span className="text-2xl font-bold text-purple-800">C</span>
                  </div>
                  <h3 className="text-xl font-bold text-purple-800">FSSAI Central License</h3>
                </div>

                <div className="space-y-4 text-purple-700">
                  <div>
                    <p className="font-semibold">Who Needs It:</p>
                    <p className="text-sm">FBOs with an annual turnover exceeding INR 20 crore.</p>
                  </div>

                  <div>
                    <p className="font-semibold">Registration Form:</p>
                    <p className="text-sm">Form B</p>
                  </div>

                  <div>
                    <p className="font-semibold">Key Point:</p>
                    <p className="text-sm">
                      Large-scale food businesses—such as major manufacturers, major retailers, and large
                      distributors—must apply for the Central License.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold">Fee:</p>
                    <p className="text-sm">₹7,500 per annum</p>
                  </div>

                  <div>
                    <p className="font-semibold">Processing Time:</p>
                    <p className="text-sm">May take up to 60 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FSSAI Basic Registration Eligibility */}
        <section id="eligibility" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-green-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">FSSAI Basic Registration Eligibility</h2>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                The FSSAI basic registration serves as a basic registration requirement for Food Business Operators
                (FBOs) who run small-scale food operations. The following categories of businesses must obtain a new
                FSSAI registration:
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-3">Annual Turnover Under INR 12 Lakh</h3>
                    <p className="text-green-700">
                      Applicable to petty retailers dealing in food products or any person manufacturing and selling
                      food articles independently.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-800 mb-3">
                      Temporary Food Stalls or Small-Scale Operations
                    </h3>
                    <p className="text-blue-700">
                      Individuals who sell food products through temporary stalls or distribute food during religious
                      and social gatherings (excluding caterers).
                    </p>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                    <h3 className="text-xl font-semibold text-purple-800 mb-3">
                      Small-Scale or Cottage Food Industries
                    </h3>
                    <p className="text-purple-700">
                      Businesses working at a minimal scale, including industries with limited production capacities in
                      food, milk, or meat.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                  <h3 className="text-xl font-semibold text-orange-800 mb-4">Capacity-Based Limits</h3>
                  <div className="space-y-3 text-orange-700">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Food Production (Other Than Milk and Meat):</strong> Up to 100 kg/liter per day.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Milk Procurement and Handling:</strong> Up to 500 liters per day.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Slaughtering:</strong> 2 large animals, 10 small animals or 50 poultry birds per day (or
                        fewer).
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Transportation:</strong> Operated by a single vehicle.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Vending Machines:</strong> Up to 12 machines within one state/UT.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-800">
                  All the above categories must meet FSSAI's basic registration requirements to operate legally under
                  the Food Safety & Standards (Licensing and Registration of Food Business) Regulations, 2011.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section id="documents" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-red-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <FileText className="h-8 w-8 text-red-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Documents for FSSAI Registration</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                To obtain FOSCOS FSSAI registration, Food Business Operators (FBOs) must submit a set of general and
                specific documents based on their business type (Basic Registration, State License, or Central License).
              </p>

              {/* General Documents */}
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-4">General FSSAI Registration Documents</h3>
                <p className="text-red-700 mb-4">
                  These documents are required for all types of FOSCOS FSSAI registrations (Basic, State, and Central):
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Photo Identity Proof: Valid ID proof of the FBO (Aadhaar card, passport, voter ID, etc.)",
                    "Business Constitution Certificate: Documents such as partnership deed, certificate of incorporation, shop and establishment license, or other business registration certificates.",
                    "Proof of Premises Possession: Rental agreement, NOC (No Objection Certificate) from the owner of the rented premises, utility bills, etc.",
                    "Food Safety Management System Plan: A detailed plan outlining food safety procedures.",
                    "List of Food Products: List of food products being manufactured or processed by the business.",
                    "Bank Account Information: Bank account details of the business.",
                    "Supporting Documents (if applicable): NOC from Municipality or Panchayat, Health NOC, copy of License from the manufacturer, etc.",
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <span className="text-red-700 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* State License Documents */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  Additional Documents for State FSSAI License
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Rental Agreement of Business Premises",
                    "ID Proof of the Concerned Person (Aadhaar Card / Driving License / Passport / Voter ID)",
                    "Government Registration Certificates (Company Incorporation Certificate / Firm Registration / Partnership Deed / Pan card / GST Registration Number / Shop and Establishment Registration / Trade License)",
                    "MOA & AOA or Partnership deed copy (if applicable)",
                    "One of the following certificates: Trade license, Shop and Establishment Registration, Panchayath License, Corporation License, Municipality License",
                    "Nature of Business",
                    "FSSAI declaration form",
                    "For manufacturing/repacker category: Manufacturing unit photos, Plant Layouts, Machinery details, Product details",
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-700 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Central License Documents */}
              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">
                  Additional Documents for Central FSSAI License
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "All documents required for State License",
                    "IE Code (Import Export Code) Certificate (for export and import categories)",
                    "Authority letter from the company letterhead to the concerned person",
                    "List of food category desired to be manufactured (for manufacturers)",
                    "For manufacturing category: Manufacturing unit photos, Plant Layouts & Product details, Machinery details",
                    "Water test report (for mineral water plants)",
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-700 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-indigo-100 rounded-xl">
                <Clock className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Procedure for Obtaining FSSAI Registration Online</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-8">
              <p>
                Food Business Operators (FBOs) can easily apply for FSSAI new registration through the official FoSCoS
                portal by following the steps below:
              </p>
            </div>

            <div className="space-y-6">
              {fssaiRegistrationService.details?.process?.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-indigo-900 mb-2">{step.title}</h3>
                    <p className="text-indigo-700">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-indigo-50 border-l-4 border-indigo-400 p-6 rounded-r-lg">
              <p className="font-semibold text-indigo-800">
                LegalDhara experts can help you at every step of the FSSAI registration process.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-emerald-100 rounded-xl">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Benefits of Procuring FSSAI License Registration</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6 mb-8">
              <p>
                Obtaining FSSAI registration offers several advantages that not only ensure legal compliance but also
                enhance your business reputation and growth prospects:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Legal Compliance",
                  description:
                    "Ensures your business complies with the Food Safety and Standards Act, 2006, which is mandatory for operating a food business in India.",
                  icon: Shield,
                },
                {
                  title: "Improved Consumer Trust",
                  description:
                    "Assures customers that your products meet safety and quality standards, helping build credibility and customer loyalty.",
                  icon: Users,
                },
                {
                  title: "Enhanced Reputation",
                  description:
                    "Demonstrates your commitment to safety and high-quality products, attracting more customers.",
                  icon: Award,
                },
                {
                  title: "Market Access",
                  description:
                    "Many retailers and distributors require FSSAI registration to source products, expanding your business opportunities.",
                  icon: Store,
                },
                {
                  title: "Competitive Advantage",
                  description:
                    "Sets your business apart from competitors who may not meet safety standards, making your products more appealing.",
                  icon: CheckCircle,
                },
                {
                  title: "International Trade Opportunities",
                  description:
                    "FSSAI registration is essential for exporting food products and meeting international regulatory requirements.",
                  icon: Truck,
                },
                {
                  title: "Prevention of Legal Issues",
                  description:
                    "Protects your business from penalties, fines, or shutdowns by ensuring compliance with food safety standards.",
                  icon: AlertTriangle,
                },
                {
                  title: "Assurance of Product Quality",
                  description:
                    "Regular quality checks ensure safe and consistent food products, reducing the risk of foodborne illnesses.",
                  icon: CheckCircle,
                },
                {
                  title: "Access to Resources and Support",
                  description:
                    "FSSAI-registered businesses receive support, workshops, and updates on food safety regulations to stay compliant.",
                  icon: FileText,
                },
                {
                  title: "Better Business Opportunities",
                  description:
                    "Opens doors to government contracts, tenders, and partnerships, helping you grow and expand your business.",
                  icon: Building,
                },
              ].map((benefit, index) => {
                const IconComponent = benefit.icon
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-emerald-100 rounded-lg">
                        <IconComponent className="h-5 w-5 text-emerald-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-emerald-800">{benefit.title}</h3>
                    </div>
                    <p className="text-emerald-700 text-sm">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section id="compliance" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-yellow-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Consequences of Non-Compliance with FSSAI Regulations
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                Food businesses registered under FSSAI are required to follow the rules and regulations outlined in the
                FSS Act, 2006. A Food Safety Officer typically conducts inspections of the business premises to assess
                compliance with these regulations, using a checklist. Based on the inspection, the officer may classify
                the business as:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-green-800">Compliance (C)</h3>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200 text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-red-800">Non-compliance (NC)</h3>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-center">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-yellow-800">Partial compliance (PC)</h3>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <FileText className="h-6 w-6 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Not applicable/Not observed (NA)</h3>
                </div>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                <p className="font-semibold text-red-800">
                  If non-compliance is identified, the officer may issue an improvement notice as per Section 32 of the
                  FSS Act, 2006. Failure to comply with the notice may result in the cancellation of the registration
                  after the operator is given an opportunity to explain their actions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Validity and Renewal Section */}
        <section id="renewal" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-teal-100 rounded-xl">
                <Clock className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Validity of FSSAI Registration & Renewal</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-teal-50 p-6 rounded-xl border border-teal-200">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">Validity of FSSAI Registration</h3>
                <p className="text-teal-700">
                  The validity of an FSSAI registration depends on the type of license granted. Typically, FSSAI
                  registration is valid for either 1 year or 5 years, based on the business's eligibility and size.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">FSSAI Registration Renewal</h3>
                <p className="text-blue-700 mb-4">
                  FSSAI registration renewal is a crucial process for Food Business Operators (FBOs) to continue
                  operating legally. Since the FSSAI registration or license is granted for a validity period of 1 to 5
                  years based on the business type, it is mandatory for FBOs to apply for renewal before the expiry
                  date.
                </p>
                <p className="text-blue-700">
                  Timely FSSAI registration renewal—preferably 120 days prior to expiry—helps avoid any legal
                  complications, penalties, or disruption in business operations.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 rounded-r-lg">
                <p className="font-semibold text-orange-800">
                  Important: Timely renewal is necessary, ideally at least 30 days before the expiry date, to avoid
                  penalties and ensure continuous legal operation of your food business.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fees Section */}
        <section id="fees" className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-pink-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-pink-100 rounded-xl">
                <FileText className="h-8 w-8 text-pink-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">FSSAI Registration Fees</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                FSSAI Registration Fees depend on the type and scale of your food business. Different categories of
                registration—Basic, State, or Central—have varying fees based on the size and turnover of the business.
                The fees cover the cost of processing your application and issuance of the registration or license.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 text-center">
                  <h3 className="text-xl font-bold text-green-800 mb-2">Basic Registration</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">₹100</div>
                  <p className="text-green-700 text-sm">per annum</p>
                  <p className="text-green-600 text-xs mt-2">Processing: 7 days</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 text-center">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">State License</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-2">₹2,000 - ₹5,000</div>
                  <p className="text-blue-700 text-sm">per annum</p>
                  <p className="text-blue-600 text-xs mt-2">Processing: Up to 60 days</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 text-center">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">Central License</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-2">₹7,500</div>
                  <p className="text-purple-700 text-sm">per annum</p>
                  <p className="text-purple-600 text-xs mt-2">Processing: Up to 60 days</p>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-gray-400 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-800">
                  LegalDhara can guide you through the fee structure and payment process to make your registration
                  smooth and hassle-free. Fees are subject to change, and it is advisable to check the official FSSAI
                  website for the most current fee structure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
       {fssaiRegistrationService.details?.faqs &&fssaiRegistrationService.details?.faqs.length > 0 && (
        <section id="faqs" className="py-20 bg-gradient-to-br from-white to-rang dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get answers to common questions about Fssai registration
                </p>
              </div>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {fssaiRegistrationService.details?.faqs.map((item, index) => (
                      <AccordionItem
                        key={index}
                        value={`faq-${index}`}
                        className="border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm bg-rang dark:bg-gray-700 overflow-hidden"
                      >
                        <AccordionTrigger className="px-8 py-6 text-left hover:no-underline text-lg font-semibold text-deep-blue dark:text-white hover:text-deep-blue dark:hover:text-brand-orange transition-colors">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="px-8 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Get Your FSSAI Registration and Renewal with LegalDhara!</h2>
            <p className="text-xl mb-6 opacity-90">
              Ensure your food business operates legally and safely with timely FOSCOS FSSAI registration and renewal.
              At LegalDhara, our experts guide you through the entire FSSAI registration process—from new applications
              to renewals—making it seamless and hassle-free.
            </p>
            <p className="text-lg mb-8 opacity-80">
              Whether you're starting a new food venture or renewing an existing FSSAI registration license, we ensure
              full compliance with food safety standards. Don't risk penalties or business disruptions—get started today
              with LegalDhara and keep your food business fully compliant.
            </p>
            <Link 
              href='/contact'
             className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Start Your FSSAI Registration Process Now
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
