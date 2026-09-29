import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorksSection from '@/components/HowItWorksSection';
import ProfessionalServices from '@/components/professional-services';
import WhyCustomersLoveUs from '@/components/why-customers-love-us';
import ProfessionalSupport from '@/components/ProfessionalSupport';
import Contactform from '@/components/Contactform';
import ClassFinderTool from '@/components/ClassFinderTool';
import TalkToExpertButton from '@/components/TalkToExpertButton';


export default function Home() {
  return (
    <div className="space-y-1 lg:px-0 overflow-hidden">
      
        <HeroSection />
        <ProfessionalServices />
        <HowItWorksSection />   
        <ServicesSection />
        <ClassFinderTool />
        <ProfessionalSupport />
        <WhyChooseUs />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <Contactform />
        <WhyCustomersLoveUs />
        <CTASection />
   

      {/* Fixed Talk to Expert Button */}
      <TalkToExpertButton />
    </div>
  );
}