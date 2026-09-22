import Link from "next/link"
import { allServicesData } from "@/lib/services-data"
import { IconMap, type IconName } from "@/lib/icon-map"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-[#071B34] via-[#0a2442] to-[#071B34] text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#EAB308] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#EAB308] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="absolute inset-0 z-0 opacity-5">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1200 600" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#EAB308]/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-[#EAB308]/30">
            <CheckCircle className="w-4 h-4 text-[#EAB308]" />
            <span className="text-[#EAB308] font-semibold text-sm tracking-wide">COMPREHENSIVE SOLUTIONS</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 max-w-4xl mx-auto">
            Empowering Your Business with
            <span className="text-[#EAB308]"> Expert Services</span>
          </h1>
          
          <p className="mt-6 text-base md:text-lg lg:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed">
            From intellectual property to comprehensive registrations and taxation, we provide tailored solutions to help you thrive.
          </p>
          
          <div className="mt-10">
            <Link href="#services">
              <Button size="lg" className="bg-[#EAB308] hover:bg-[#d9a307] text-[#071B34] font-bold px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all group">
                Explore All Services
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Content Section */}
      <main id="services" className="flex-1 py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="space-y-20">
            {allServicesData.map((mainCategoryData) => {
              const MainIconComponent = IconMap[mainCategoryData.mainIcon as IconName]
              return (
                <section key={mainCategoryData.mainCategory} className="space-y-10">
                  {/* Category Header */}
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      {MainIconComponent && (
                        <div className="p-3 bg-[#EAB308]/10 rounded-xl">
                          <MainIconComponent className="w-8 h-8 md:w-10 md:h-10 text-[#EAB308]" />
                        </div>
                      )}
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#071B34]">
                        {mainCategoryData.mainCategory}
                      </h2>
                    </div>
                    <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                      {`Dive into our ${mainCategoryData.mainCategory} offerings, designed to secure and streamline your operations.`}
                    </p>
                  </div>

                  {/* Services Grid - Fixed Height Issue */}
                  <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                    {mainCategoryData.categories.map((categoryData) => {
                      const CategoryIconComponent = IconMap[categoryData.icon as IconName]
                      return (
                        <Card
                          key={categoryData.title}
                          className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-0 bg-white flex flex-col h-full"
                        >
                          <CardHeader className="bg-gradient-to-r from-[#071B34] to-[#0a2442] p-6 flex-shrink-0">
                            <div className="flex items-center gap-3">
                              {CategoryIconComponent && (
                                <div className="p-2 bg-[#EAB308]/20 rounded-lg flex-shrink-0">
                                  <CategoryIconComponent className="w-6 h-6 text-[#EAB308]" />
                                </div>
                              )}
                              <CardTitle className="text-xl md:text-2xl font-bold text-white">
                                {categoryData.title}
                              </CardTitle>
                            </div>
                          </CardHeader>
                          
                          <CardContent className="p-6 flex-grow">
                            <Accordion type="single" collapsible className="w-full space-y-2">
                              {categoryData.services.map((service , index) => {
                                const ServiceIconComponent = IconMap[service.icon as IconName]
                                return (
                                  <AccordionItem 
                                    key={index} 
                                    value={service.name}
                                    className="border rounded-lg px-4 hover:bg-gray-50 transition-colors"
                                  >
                                    <AccordionTrigger className="flex items-center justify-between py-4 text-base font-semibold text-[#071B34] hover:text-[#EAB308] hover:no-underline">
                                      <div className="flex items-center gap-3">
                                        {ServiceIconComponent && (
                                          <ServiceIconComponent className="h-5 w-5 text-[#EAB308] flex-shrink-0" />
                                        )}
                                        <span className="text-left">{service.name}</span>
                                      </div>
                                    </AccordionTrigger>
                                    
                                    <AccordionContent className="pt-2 pb-4">
                                      <div className="space-y-4">
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                          {service.description}
                                        </p>
                                        
                                        <div className="flex items-center justify-between gap-4 p-3 bg-gray-50 rounded-lg">
                                          <div>
                                            <p className="text-xs text-gray-500 mb-1">Starting at</p>
                                            <Badge className="bg-[#EAB308] hover:bg-[#d9a307] text-[#071B34] px-3 py-1 text-sm font-bold">
                                              {service.price}
                                            </Badge>
                                          </div>
                                          <div className="text-right">
                                            <p className="text-xs text-gray-500 mb-1">Timeline</p>
                                            <span className="text-sm font-semibold text-[#071B34]">
                                              {service.timeline}
                                            </span>
                                          </div>
                                        </div>
                                        
                                        <Link href={service.href} passHref>
                                          <Button 
                                            variant="outline" 
                                            size="sm" 
                                            className="w-full border-2 border-[#071B34] text-[#071B34] hover:bg-[#071B34] hover:text-white font-semibold transition-all group"
                                          >
                                            Learn More
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                          </Button>
                                        </Link>
                                      </div>
                                    </AccordionContent>
                                  </AccordionItem>
                                )
                              })}
                            </Accordion>
                          </CardContent>
                        </Card>
                      )
                    })}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#EAB308]/10 via-[#EAB308]/5 to-transparent rounded-2xl p-8 md:p-12 lg:p-16 text-center border-2 border-[#EAB308]/20 shadow-xl">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#071B34] mb-4">
                Need Help Choosing the Right Service?
              </h3>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">
                Our experts are here to guide you through the best options for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-[#EAB308] hover:bg-[#d9a307] text-[#071B34] font-bold px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all">
                    Talk to Expert
                  </Button>
                </Link>
                <Link href='/contact' >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#071B34] text-[#071B34] hover:bg-[#071B34] hover:text-white font-bold px-8 h-12 text-base transition-all"
                >
                  Schedule Consultation
                </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}