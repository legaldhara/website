"use client"
import { BadgeCheck, Sparkles, ShieldCheck, ArrowRight, Play, CheckCircle, Check, Timer , Loader2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useServicesStore } from "@/store/useServicesStore"
import toast from "react-hot-toast"
import Loader from "./Loader"

import type { Service } from "@/lib/types"
import { useEffect, useState } from "react"

interface ServiceHeroFormProps {
  service: Service
}

export default function ServiceHeroForm({ service }: ServiceHeroFormProps) {
  const router = useRouter();
  const { services, loading, error, fetchServices } = useServicesStore();
  const [Load , setLoad] = useState(false);
  const [matchedService, setMatchedService] = useState<any>(null);

  useEffect(() => {
    fetchServices();
  }, []);  

useEffect(() => {
  if (services.length > 0 && service?.name) {
    const match = services.find(
      (s: any) => s.name.toLowerCase().trim() === service.name.toLowerCase().trim()
    );
    setMatchedService(match || null);
  }
}, [services, service]);
  

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   setLoad(true);

  const formData = new FormData(e.currentTarget);
  const fullName = formData.get("fullName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string | null;
  const city = formData.get("city") as string;
  const BusinessName = formData.get("BusinessName") as string | null;

  // ✅ Step 1: Find matching service
  // const matchedService = services.find(
  //   (s: any) => s.name.toLowerCase().trim() === service.name.toLowerCase().trim()
  // );

 if (!matchedService) {
    toast.error("Service not found in list!");
    setLoad(false);
    return;
  }

  // ✅ Step 2: Use correct property name
  const price = parseFloat(matchedService.price) || 0;
  const govtCharges = parseFloat(matchedService.governmentCharges) || 0;
  const totalprice = price + govtCharges;

  // ✅ Step 3: Prepare query params
  const query = new URLSearchParams({
    serviceId: matchedService.id,
    serviceName: matchedService.name,
    servicePrice: matchedService.price,
    governmentCharges: matchedService.governmentCharges,
    serviceTotal: totalprice.toString(),
    fullName,
    email,
    phone: phone || "",
    city,
    BusinessName: BusinessName || "",
  }).toString();
  setLoad(false);
  // ✅ Step 4: Redirect with query data
  router.push(`/onboarding?${query}`);
};




  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-deep-blue via-deep-blue to-gray-800 py-10 md:py-12 lg:py-16 px-4 md:px-6 lg:px-24">
      {/* Watermark Logos - Multiple Positions */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
       
        {/* Top Left Watermark */}

        <div className="absolute top-20 left-10 w-48 h-48 opacity-[0.03]">
          <img src="/assets/LD2.webp" alt="" width={192} height={192} className="w-full h-full object-contain animate-pulse" />
        </div>
        
        {/* Center Right Watermark */}

        <div className="absolute top-1/2 -translate-y-1/2 right-20 w-64 h-64 opacity-[0.04]">
          <img src="/assets/LD2.webp" alt="" width={256} height={256} className="w-full h-full object-contain animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Bottom Left Watermark */}

        <div className="absolute bottom-20 left-1/4 w-40 h-40 opacity-[0.03]">
          <img src="/assets/LD2.webp" alt="" width={160} height={160} loading="lazy" className="w-full h-full object-contain animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      
      </div>
      
      {/* Floating Elements - Reduced */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-bounce"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-gray-400/20 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          {/* Left Content - Optimized */}
          <div className="space-y-4 md:space-y-6 text-white">
            <div className="space-y-2 md:space-y-3">
              <div className="inline-flex items-center px-3 py-1.5 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm">
                <BadgeCheck className="w-3.5 h-3.5 mr-1.5 text-brand-orange" />
                #1 {service.name} Service
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                {service.name}
                <span className="block bg-gradient-to-r from-brand-orange to-yellow-400 bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h1>
              <p className="text-sm md:text-base lg:text-lg text-blue-100 leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>

            {/* Compact Key Features - 2 columns always */}
            {service.details?.keyFeatures && service.details.keyFeatures.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                {service.details.keyFeatures.slice(0, 4).map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 p-2.5 md:p-3 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <CheckCircle className="h-4 w-4 text-green-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-xs md:text-sm leading-tight">{feature.title}</h3>
                      <p className="text-blue-100 text-[10px] md:text-xs leading-snug mt-0.5">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Compact Trust Section */}
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg p-3 md:p-4">
              <CardHeader className="pb-2 px-0">
                <CardTitle className="text-base md:text-lg font-bold text-white">Why Clients Trust Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-blue-100 px-0 pb-0">
                <p className="text-xs md:text-sm leading-relaxed">
                  Join 5,000+ businesses that trust us for their {service.name.toLowerCase()} needs.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 md:gap-2">
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-300 flex-shrink-0" />
                    <span className="text-[11px] md:text-xs">Expert consultation</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-300 flex-shrink-0" />
                    <span className="text-[11px] md:text-xs">Regular updates</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-300 flex-shrink-0" />
                    <span className="text-[11px] md:text-xs">Free objection handling</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check className="h-3.5 w-3.5 md:h-4 md:w-4 text-green-300 flex-shrink-0" />
                    <span className="text-[11px] md:text-xs">End-to-end support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CTA Buttons - Smaller */}
            {/* <div className="flex flex-col sm:flex-row gap-2 md:gap-3">
              <Button
                size="default"
                className="bg-gradient-to-r from-brand-orange to-yellow-500 hover:from-brand-orange/90 hover:to-yellow-500/90 text-deep-blue font-semibold px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-xl shadow-xl hover:shadow-brand-orange/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Registration
                <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
              </Button>
              <Button
                size="default"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-deep-blue font-semibold px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base rounded-xl backdrop-blur-sm bg-transparent"
              >
                <Play className="mr-2 h-3.5 w-3.5 md:h-4 md:w-4" />
                Watch Demo
              </Button>
            </div> */}
          </div>

          {/* Right Form Section - Compact */}
          <div className="relative lg:sticky lg:top-4">
  {/* Floating Sale Badge - Smaller */}
  <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 z-20 bg-gradient-to-r from-brand-orange to-yellow-500 text-deep-blue font-bold text-[10px] md:text-xs px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl shadow-xl animate-bounce">
    <div className="flex items-center gap-1 md:gap-1.5">
      <Timer className="h-2.5 w-2.5 md:h-3 md:w-3" />
      LIMITED TIME
    </div>
    <div className="text-center text-[9px] md:text-xs font-extrabold">Free Charges</div>
  </div>

  <Card className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-0 shadow-2xl rounded-xl md:rounded-2xl overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-light-orange to-rang dark:from-gray-800 dark:to-deep-blue opacity-50"></div>
    
    <CardHeader className="relative z-10 text-center pb-3 md:pb-4 pt-5 md:pt-6">
      <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-deep-blue to-gray-600 rounded-lg md:rounded-xl flex items-center justify-center mb-2 md:mb-3">
        <ShieldCheck className="h-5 w-5 md:h-6 md:w-6 text-white" />
      </div>
      <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-deep-blue to-gray-600 bg-clip-text text-transparent">
        Simplify Your {service.name} Process with Legal Dhara
      </CardTitle>
      <p className="text-gray-600 dark:text-gray-300 text-[10px] md:text-xs mt-1 md:mt-1.5">
        Expert Consultation • Zero Hidden Fees • Trusted by Businesses
      </p>
    </CardHeader>

    <CardContent className="relative z-10 p-4 md:p-6">
      <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
          <div className="space-y-1 md:space-y-1.5">
            <Label htmlFor="fullName" className="text-[11px] md:text-xs font-semibold text-gray-700 dark:text-gray-300">
              Full Name *
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Your name"
              required
              minLength={2}
              maxLength={50}
              pattern="[A-Za-z\s]+"
              title="Please enter a valid name (letters only)"
              className="h-9 md:h-10 text-xs md:text-sm bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-deep-blue transition-colors"
            />
          </div>
          <div className="space-y-1 md:space-y-1.5">
            <Label htmlFor="email" className="text-[11px] md:text-xs font-semibold text-gray-700 dark:text-gray-300">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              className="h-9 md:h-10 text-xs md:text-sm bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-deep-blue transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
          <div className="space-y-1 md:space-y-1.5">
            <Label htmlFor="phone" className="text-[11px] md:text-xs font-semibold text-gray-700 dark:text-gray-300">
              Mobile *
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="10-digit mobile number"
              required
              pattern="[0-9]{10}"
              maxLength={10}
              title="Please enter a valid 10-digit mobile number"
              className="h-9 md:h-10 text-xs md:text-sm bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-deep-blue transition-colors"
            />
          </div>
          <div className="space-y-1 md:space-y-1.5">
            <Label htmlFor="city" className="text-[11px] md:text-xs font-semibold text-gray-700 dark:text-gray-300">
              City *
            </Label>
            <Input
              id="city"
              name="city"
              placeholder="Your city"
              required
              minLength={2}
              maxLength={50}
              pattern="[A-Za-z\s]+"
              title="Please enter a valid city name"
              className="h-9 md:h-10 text-xs md:text-sm bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-deep-blue transition-colors"
            />
          </div>
        </div>

        <div className="space-y-1 md:space-y-1.5">
          <Label htmlFor="BusinessName" className="text-[11px] md:text-xs font-semibold text-gray-700 dark:text-gray-300">
            Brand / Business Name
          </Label>
          <Input
            id="BusinessName"
            name="BusinessName"
            placeholder="Your brand or business name"
            minLength={2}
            maxLength={100}
            className="h-9 md:h-10 text-xs md:text-sm bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-lg focus:border-deep-blue transition-colors"
          />
        </div>

        <Button
          type="submit"
          disabled={Load}
          className="w-full text-sm md:text-base py-2 md:py-2.5 h-10 md:h-11 font-bold bg-gradient-to-r from-deep-blue to-gray-600 hover:from-deep-blue/90 hover:to-gray-600/90 text-white rounded-lg md:rounded-xl shadow-xl hover:shadow-deep-blue/25 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
        >
          {Load ? (
            <>
              <Loader loading = {Load} size={20} />
              Please wait...
            </>
          ) : (
            <>
              Get Free Consultation
              <ArrowRight className="ml-2 h-3.5 w-3.5 md:h-4 md:w-4" />
            </>
          )}
        </Button>

        <div className="text-center text-[9px] md:text-[10px] text-gray-500 dark:text-gray-400 leading-relaxed">
          By submitting, you agree to our Terms & Privacy Policy.
          <br />
          <strong>100% Safe & Secure</strong> • SSL Protected
        </div>
      </form>
    </CardContent>
  </Card>
</div>
        </div>
      </div>
    </section>
  )
}
