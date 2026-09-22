import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  Clock,
  FileText,
  Users,
  Calculator,
  TrendingUp,
  AlertTriangle,
  Shield,
  Target,
} from "lucide-react"
import ServiceHeroForm from "@/components/service-hero-form"
import SectionNavigation from "@/components/section-navigation"
import gstFilingService from "./data"

export const metadata: Metadata = {
  title: "GST Filing Services - Professional GST Return Filing | Expert Compliance",
  description:
    "Professional GST return filing services for all types of GST returns. Expert guidance, timely compliance, automated reconciliation, and dedicated support to avoid penalties.",
}

const sections = [
  { id: "overview", title: "Overview" },
  { id: "importance", title: "Importance" },
  { id: "returns-types", title: "GST Returns Types" },
  { id: "filing-process", title: "Filing Process" },
  { id: "due-dates", title: "Due Dates" },
  { id: "penalties", title: "Penalties" },
  { id: "reconciliation", title: "ITC Reconciliation" },
  { id: "benefits", title: "Benefits" },
  { id: "services", title: "Our Services" },
  { id: "faq", title: "FAQs" },
]


export default function GSTFilingPage() {
  return (
    <div className="min-h-screen bg-white">
      <ServiceHeroForm
        service={gstFilingService}
      />

      <SectionNavigation sections={sections} />

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Overview Section */}
        <section id="overview" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">What is GST Return Filing?</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-deep-blue">
                  <FileText className="h-6 w-6 text-blue-600" />
                  GST Return Definition
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  A GST Return is a detailed statement that captures all the financial transactions of a person
                  registered under GST, reflecting revenues and expenditures. GST filing online is a mandatory
                  submission for every holder of GSTIN to the tax authorities, allowing them to determine the net tax
                  liability with precision.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-deep-blue">Purchases</p>
                      <p className="text-sm text-gray-600">Records in detail the purchases the taxpayer has made</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-deep-blue">Sales</p>
                      <p className="text-sm text-gray-600">
                        Provides a comprehensive log of the taxpayer's sales activities
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-deep-blue">Output GST (On Sales)</p>
                      <p className="text-sm text-gray-600">Notes the GST charged on the taxpayer's sales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-deep-blue">Input Tax Credit</p>
                      <p className="text-sm text-gray-600">
                        Lists the GST paid on purchases, eligible to be deducted from GST owed on sales
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-deep-blue">
                  <Users className="h-6 w-6 text-blue-600" />
                  Who Should File GST Returns?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  GST returns must be filed by any business or individual registered under the GST regime. This
                  obligation applies to entities whose annual aggregate turnover surpasses the specified threshold,
                  which is set by the tax authorities and may differ for various classifications of taxpayers.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      Standard Taxpayers
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Composition Scheme
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                      Non-Resident Taxpayers
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                      E-commerce Operators
                    </Badge>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Important:</strong> All applicable entities must file GST returns before the due date to
                    avoid late GST filing charges and penalties.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Importance Section */}
        <section id="importance" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">Importance of GST Filing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-deep-blue">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Legal Compliance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  GST filing is mandatory for all registered taxpayers. Every registered taxpayer has to file GST
                  returns regularly, even if there's no business activity during the period.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-deep-blue">
                  <Calculator className="h-6 w-6 text-blue-600" />
                  Tax Liability Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  GST returns allow tax authorities to determine the net tax liability with precision by capturing all
                  financial transactions, revenues, and expenditures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-deep-blue">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  Penalty Avoidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Timely filing prevents penalties and interest charges. Delays lead to cascading effects where you
                  can't file subsequent returns until previous ones are completed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* GST Returns Types Section */}
        <section id="returns-types" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">13 Types of GST Returns</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Within the Goods and Services Tax (GST) system, 13 returns cater to different facets of a taxpayer's
              financial dealings. Not all taxpayers must file every type of return; the specific returns depend on the
              taxpayer's category and GST registration particulars.
            </p>
          </div>

          <div className="grid gap-6">
            {/* Primary Returns */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-deep-blue">Primary GST Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-1 (Outward Supplies)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Filed for disclosing details of outward supplies, essentially the sales.
                      </p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>
                          <strong>Monthly:</strong> 11th of following month (turnover &gt;₹5 crore)
                        </p>
                        <p>
                          <strong>Quarterly:</strong> 13th of month following quarter (QRMP scheme)
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-3B (Summary Return)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        A summarised return that outlines both sales and purchases, inclusive of tax payments.
                      </p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>
                          <strong>Monthly:</strong> 20th of following month
                        </p>
                        <p>
                          <strong>Quarterly:</strong> 22nd/24th based on state group
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-4 (Composition Scheme)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Applicable to those under the Composition Scheme, summarizing turnover and corresponding tax.
                      </p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>
                          <strong>Annual:</strong> 30th April following financial year
                        </p>
                        <p>
                          <strong>Quarterly Challan:</strong> CMP-08 by 18th following quarter
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-9 (Annual Return)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        An annual comprehensive return summarizing all periodical filings over the fiscal year.
                      </p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>
                          <strong>Due Date:</strong> 31st December following financial year
                        </p>
                        <p>
                          <strong>Optional:</strong> For turnover &lt;₹2 crore
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-2A &amp; GSTR-2B</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Auto-generated returns for inward supplies reconciliation and ITC claims.
                      </p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>
                          <strong>GSTR-2A:</strong> Dynamic, real-time updates
                        </p>
                        <p>
                          <strong>GSTR-2B:</strong> Static, generated on 14th of month
                        </p>
                      </div>
                    </div>

                    <div className="border-l-4 border-teal-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-10 (Final Return)</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        The final return upon cancellation or surrender of GST registration.
                      </p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>
                          Due Date: Within 3 months of cancellation
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Specialized Returns */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-deep-blue">Specialized GST Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-3">
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-5</h4>
                      <p className="text-sm text-gray-600">
                        For non-resident taxpayers conducting taxable transactions in India.
                      </p>
                      <p className="text-xs text-gray-500">Due: 20th of following month</p>
                    </div>

                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-5A</h4>
                      <p className="text-sm text-gray-600">
                        For providers of online information and database access services.
                      </p>
                      <p className="text-xs text-gray-500">Due: 20th of following month</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="border-l-4 border-cyan-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-6</h4>
                      <p className="text-sm text-gray-600">
                        Used by Input Service Distributors for detailing input tax credit distribution.
                      </p>
                      <p className="text-xs text-gray-500">Due: 13th of following month</p>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-7</h4>
                      <p className="text-sm text-gray-600">For entities required to deduct TDS under GST.</p>
                      <p className="text-xs text-gray-500">Due: 10th of following month</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="border-l-4 border-emerald-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-8</h4>
                      <p className="text-sm text-gray-600">
                        To be filed by e-commerce operators reporting transactions on their platform.
                      </p>
                      <p className="text-xs text-gray-500">Due: 10th of following month</p>
                    </div>

                    <div className="border-l-4 border-violet-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">GSTR-11</h4>
                      <p className="text-sm text-gray-600">
                        For those with a Unique Identity Number, claiming refunds on their purchases.
                      </p>
                      <p className="text-xs text-gray-500">Due: 28th of following month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Additional Returns */}
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-deep-blue">Additional Returns &amp; Statements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-rose-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">CMP-08</h4>
                      <p className="text-sm text-gray-600">
                        A quarterly statement for Composition Scheme taxpayers detailing tax liability.
                      </p>
                      <p className="text-xs text-gray-500">Due: 18th following each quarter's end</p>
                    </div>

                    <div className="border-l-4 border-lime-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">ITC-04</h4>
                      <p className="text-sm text-gray-600">
                        For manufacturers to declare details about goods dispatched to and received from a job worker.
                      </p>
                      <p className="text-xs text-gray-500">Due: 25th of following month</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="border-l-4 border-amber-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Invoice Furnishing Facility (IFF)</h4>
                      <p className="text-sm text-gray-600">
                        For QRMP scheme taxpayers to declare B2B sales during first two months of quarter.
                      </p>
                      <p className="text-xs text-gray-500">Due: 13th of succeeding month</p>
                    </div>

                    <div className="border-l-4 border-slate-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">PMT-06</h4>
                      <p className="text-sm text-gray-600">Monthly tax payment challan for QRMP scheme taxpayers.</p>
                      <p className="text-xs text-gray-500">Due: 25th of following month</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Filing Process Section */}
        <section id="filing-process" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">GST Filing Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-deep-blue to-slate-700 mx-auto mb-6"></div>
          </div>

          <div className="grid gap-6">
            {gstFilingService.details?.process?.map((step, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-deep-blue to-slate-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-deep-blue mb-2">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 mt-8">
            <CardHeader>
              <CardTitle className="text-xl text-deep-blue">Detailed GSTR-1 Filing Process</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  GSTR-1 can be filed online or offline on the GST Portal. It requires entering comprehensive details
                  including:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">B2B invoices with recipient details</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">B2C (Large) invoices above ₹2.5 lakh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Credit/Debit Notes issued</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Export Invoices with shipping details</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Nil Rated, Exempted supplies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Advances Received and Adjusted</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">HSN-wise summary of outward supplies</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Documents Issued during the period</span>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
                  <p className="text-sm text-blue-800">
                    <strong>Important:</strong> A return once filed cannot be revised, but mistakes can be rectified in
                    GSTR-1A for the same period before filing GSTR-3B, or in the GSTR-1 of the next tax period.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Due Dates Section */}
        <section id="due-dates" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">GST Return Due Dates 2024-25</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-deep-blue">Complete Due Dates Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left p-3 font-semibold text-deep-blue">GST Return</th>
                      <th className="text-left p-3 font-semibold text-deep-blue">Type of Taxpayer</th>
                      <th className="text-left p-3 font-semibold text-deep-blue">Due Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-1</td>
                      <td className="p-3 text-gray-700">Regular Taxpayer</td>
                      <td className="p-3 text-gray-700">
                        <div className="space-y-1">
                          <div>Monthly: 11th of following month</div>
                          <div className="text-sm text-gray-500">Quarterly: 13th of month following quarter</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-2A</td>
                      <td className="p-3 text-gray-700">All Taxpayers</td>
                      <td className="p-3 text-gray-700">Auto-generated, utilized for reconciliation</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-3B</td>
                      <td className="p-3 text-gray-700">Regular Taxpayer</td>
                      <td className="p-3 text-gray-700">
                        <div className="space-y-1">
                          <div>Monthly: 20th of following month</div>
                          <div className="text-sm text-gray-500">Quarterly: 22nd/24th based on state</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-4</td>
                      <td className="p-3 text-gray-700">Composition Scheme Dealer</td>
                      <td className="p-3 text-gray-700">Annually: 30th April following financial year</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-5</td>
                      <td className="p-3 text-gray-700">Non-Resident Foreign Taxpayer</td>
                      <td className="p-3 text-gray-700">20th of following month</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-6</td>
                      <td className="p-3 text-gray-700">Input Service Distributor</td>
                      <td className="p-3 text-gray-700">13th of following month</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-7</td>
                      <td className="p-3 text-gray-700">Tax Deducted at Source (TDS)</td>
                      <td className="p-3 text-gray-700">10th of following month</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-8</td>
                      <td className="p-3 text-gray-700">E-commerce Operator</td>
                      <td className="p-3 text-gray-700">10th of following month</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-9</td>
                      <td className="p-3 text-gray-700">Regular Taxpayer (Annual)</td>
                      <td className="p-3 text-gray-700">31st December following financial year</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-deep-blue">GSTR-9C</td>
                      <td className="p-3 text-gray-700">Regular Taxpayer (Annual)</td>
                      <td className="p-3 text-gray-700">Filed with GSTR-9, by 31st December</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-deep-blue">QRMP Scheme Due Dates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 text-sm">
                    For businesses with turnover up to ₹5 crore under Quarterly Return Monthly Payment scheme:
                  </p>
                  <div className="space-y-3">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">State Group 1</h4>
                      <p className="text-sm text-gray-600">
                        Chhattisgarh, MP, Gujarat, Maharashtra, Karnataka, Goa, Kerala, Tamil Nadu, Telangana, AP, Daman
                        &amp; Diu, Puducherry, A&amp;N Islands, Lakshadweep
                      </p>
                      <p className="text-xs text-gray-500 mt-1">GSTR-3B: 22nd of month following quarter</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">State Group 2</h4>
                      <p className="text-sm text-gray-600">
                        HP, Punjab, Uttarakhand, Haryana, Rajasthan, UP, Bihar, Sikkim, Northeast states, WB, Jharkhand,
                        Odisha, J&amp;K, Ladakh, Chandigarh, Delhi
                      </p>
                      <p className="text-xs text-gray-500 mt-1">GSTR-3B: 24th of month following quarter</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-deep-blue">Invoice Furnishing Facility (IFF)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 text-sm">
                    QRMP scheme taxpayers can upload B2B invoices for first two months of quarter:
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">July 2024</span>
                      <span className="text-sm text-gray-600">13th August 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">August 2024</span>
                      <span className="text-sm text-gray-600">13th September 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">November 2024</span>
                      <span className="text-sm text-gray-600">13th December 2024</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">December 2024</span>
                      <span className="text-sm text-gray-600">15th January 2025</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Penalties Section */}
        <section id="penalties" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">Penalties for Late GST Filing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              If you submit GST returns late, you could face penalties and additional GST filing charges. Businesses
              should submit on time to avoid these costs and cascading compliance issues.
            </p>
          </div>

          <div className="grid gap-6">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-red-50 to-orange-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-900">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  Key Penalty Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Mandatory Filing</h4>
                      <p className="text-sm text-gray-600">
                        Every registered taxpayer has to file GST returns regularly, even if there's no business
                        activity during the period.
                      </p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Cascading Delays</h4>
                      <p className="text-sm text-gray-600">
                        If you miss a filing deadline, you can't file for the next period until you've filed for the
                        previous one. This leads to a pile-up of late returns.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Penalty Accumulation</h4>
                      <p className="text-sm text-gray-600">
                        If you file GSTR-1 late, the penalty shows up when you file GSTR-3B. You are required to pay GST
                        filing charges for delayed filing.
                      </p>
                    </div>
                    <div className="border-l-4 border-pink-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Interest on Late Payments</h4>
                      <p className="text-sm text-gray-600">
                        If you owe taxes and pay late, you'll be charged 18% interest per year on the amount owed,
                        starting from the day after the due date.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-deep-blue">GSTR-1 Late Filing Penalties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Non-Nil GSTR-1</h4>
                      <p className="text-sm text-gray-600 mb-2">₹50 per day (₹25 CGST + ₹25 SGST/UTGST)</p>
                      <div className="space-y-1 text-xs text-gray-500">
                        <p>• Up to ₹1.5 crore turnover: Max ₹2,000</p>
                        <p>• ₹1.5-5 crore turnover: Max ₹5,000</p>
                        <p>• Above ₹5 crore turnover: Max ₹10,000</p>
                      </div>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Nil GSTR-1</h4>
                      <p className="text-sm text-gray-600">₹20 per day (₹10 CGST + ₹10 SGST/UTGST)</p>
                      <p className="text-xs text-gray-500">Maximum penalty: ₹500</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-lg text-deep-blue">GSTR-3B Late Filing Penalties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">With Tax Liability</h4>
                      <p className="text-sm text-gray-600">₹50 per day (₹25 CGST + ₹25 SGST)</p>
                      <p className="text-xs text-gray-500">Maximum penalty: ₹5,000</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Nil Tax Liability</h4>
                      <p className="text-sm text-gray-600">₹20 per day (₹10 CGST + ₹10 SGST)</p>
                      <p className="text-xs text-gray-500">Maximum penalty: ₹5,000</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h4 className="font-semibold text-deep-blue">Interest on Late Tax Payment</h4>
                      <p className="text-sm text-gray-600">18% per annum on unpaid tax amount</p>
                      <p className="text-xs text-gray-500">Calculated from day after due date</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-deep-blue">Annual Return Late Fees</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-semibold text-deep-blue">GSTR-9 (Annual Return)</h4>
                    <p className="text-sm text-gray-600 mb-2">₹200 per day (₹100 CGST + ₹100 SGST)</p>
                    <p className="text-xs text-gray-500">Due: 31st December following financial year</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-semibold text-deep-blue">GSTR-9C (Audit Form)</h4>
                    <p className="text-sm text-gray-600 mb-2">Capped at 0.25% of turnover in state/UT</p>
                    <p className="text-xs text-gray-500">For businesses with turnover {">"}₹2 crore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* ITC Reconciliation Section */}
        <section id="reconciliation" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">Input Tax Credit (ITC) Reconciliation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ITC reconciliation is crucial for accurate GST compliance. It involves comparing the ITC claimed in
              GSTR-3B with details in GSTR-2A or GSTR-2B to ensure credit is claimed only for tax actually paid by
              suppliers.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-deep-blue">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                    GSTR-2A (Dynamic Return)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm">
                      GSTR-2A is a dynamic, auto-generated statement that shows details of all inward supplies
                      (purchases) made by a registered taxpayer, updated in real-time as suppliers file their returns.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-deep-blue text-sm">Real-time Updates</p>
                          <p className="text-xs text-gray-600">
                            Updated as suppliers file GSTR-1, GSTR-5, GSTR-6, GSTR-7, and GSTR-8
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-deep-blue text-sm">Read-only Document</p>
                          <p className="text-xs text-gray-600">Cannot be edited and does not need to be filed</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-deep-blue text-sm">Comprehensive Data</p>
                          <p className="text-xs text-gray-600">
                            Includes all inward supplies from registered GST vendors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-deep-blue">
                    <Target className="h-6 w-6 text-blue-600" />
                    GSTR-2B (Static Return)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm">
                      GSTR-2B is a static, auto-drafted statement generated monthly on the 14th of the succeeding month,
                      providing a summary of eligible and ineligible ITC based on supplier filings.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-deep-blue text-sm">Fixed Snapshot</p>
                          <p className="text-xs text-gray-600">
                            Generated on 14th of month, provides consistent data for tax period
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-deep-blue text-sm">ITC Guidance</p>
                          <p className="text-xs text-gray-600">
                            Advises on necessary actions for each invoice including reversals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-deep-blue text-sm">GSTR-3B Reference</p>
                          <p className="text-xs text-gray-600">
                            Should be used as reference for ITC claims in GSTR-3B filing
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-deep-blue">Reconciliation Process &amp; Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-deep-blue">Reconciliation Steps</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          1
                        </div>
                        <p className="text-sm text-gray-700">Compare ITC claimed in GSTR-3B with GSTR-2A/2B details</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          2
                        </div>
                        <p className="text-sm text-gray-700">Identify discrepancies and missing invoices</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          3
                        </div>
                        <p className="text-sm text-gray-700">Follow up with suppliers for missing GSTR-1 filings</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                          4
                        </div>
                        <p className="text-sm text-gray-700">Make necessary adjustments and reversals</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-deep-blue">Key Benefits</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          Ensures credit claimed only for tax actually paid to suppliers
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          Helps identify missed invoices and maximize eligible ITC
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">Allows for rectification of errors before finalization</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          Avoids GST notices, penalties, and ensures accurate compliance
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg text-deep-blue">Common Reconciliation Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-semibold text-deep-blue text-sm">Supplier Delays</h4>
                    <p className="text-xs text-gray-600">
                      Suppliers delaying GSTR-1 filings causing ITC to not appear in GSTR-2A/2B
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-semibold text-deep-blue text-sm">Incorrect Details</h4>
                    <p className="text-xs text-gray-600">
                      Wrong GSTIN, invoice numbers, or amounts in supplier filings
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-semibold text-deep-blue text-sm">Premature Claims</h4>
                    <p className="text-xs text-gray-600">
                      Claiming ITC before it appears in GSTR-2A/2B leading to mismatches
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">Benefits of Professional GST Filing</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {gstFilingService?.details?.keyFeatures?.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-deep-blue">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Services Section */}
        <section id="services" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-deep-blue mb-4">Our GST Filing Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Outsource your GST compliance to LegalDhara to ease your compliance burden and focus your efforts on
              growing your business. With our LegalDhara platform, your GST compliance will be maintained with access
              to live business data - anywhere, anytime.
            </p>
          </div>

          <div className="grid gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-xl text-deep-blue">Complete GST Compliance Package</CardTitle>
                <CardDescription>Everything you need for hassle-free GST compliance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-deep-blue">What's Included:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Dedicated GST Advisor with sector expertise</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Monthly data collection and verification</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">GSTR-1 and GSTR-3B preparation and filing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Automated ITC reconciliation with GSTR-2A/2B</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Timely filing reminders and compliance alerts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Monthly GST status reports and insights</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-deep-blue">LegalDhara Platform Features:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Customer and supplier management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">GST invoicing and estimate tracking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Accounts receivables and payables tracking</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">Automated GST return filing (GSTR-1, GSTR-3B)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">GST E-way bill generation and management</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">ICICI bank integration for seamless payments</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-deep-blue">
                    <Users className="h-6 w-6 text-blue-600" />
                    Dedicated Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">
                    A relationship manager with experience in your sector guides you through GST registration and
                    filing, helping with specific tasks and ensuring timely compliance.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Sector-specific expertise</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Invoice upload assistance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Compliance guidance</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-deep-blue">
                    <Clock className="h-6 w-6 text-blue-600" />
                    Timely Reminders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">
                    Our platform ensures timely reminders well in advance of deadlines, and your GST advisor provides
                    periodic reminders to prevent penalties.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Automated deadline alerts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Personal advisor reminders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Penalty prevention</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-deep-blue">
                    <FileText className="h-6 w-6 text-blue-600" />
                    Monthly Reports
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-sm mb-4">
                    Detailed monthly reports on GST return filing status, including GSTR-3B details and actionable
                    insights for your business growth.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Filing status updates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Compliance insights</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                      <span className="text-xs">Business recommendations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        {gstFilingService?.details?.faqs &&gstFilingService?.details?.faqs.length > 0 && (
        <section id="faq" className="py-20 bg-gradient-to-br from-white to-rang dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-deep-blue dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Get answers to common questions about GST Filing
                </p>
              </div>

              <Card className="bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {gstFilingService.details?.faqs.map((item, index) => (
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

        {/* CTA Section */}
        <section className="text-center py-16 bg-gradient-to-r from-deep-blue to-slate-700 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your GST Compliance?</h2>
          <p className="text-xl mb-8 opacity-90">
            Ensure your business stays compliant and avoids penalties with our expert GST filing services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-deep-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start GST Filing Service
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Talk to Expert
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}
