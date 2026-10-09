'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Users, Award, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import StatCounter from '@/components/StatCounter';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { secureApi } from '@/config/apiClient';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation: message should be at least 10 characters
    if (formData.message.trim().length < 10) {
      toast.error('Message must be at least 10 characters long.');
      return;
    }

    if (!formData.service) {
      toast.error('Please select a service.');
      return;
    }

    setLoading(true);

    try {
      const res = await secureApi.post(`/api/v1/query/postquery`,
        {
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.service,
          message: formData.message
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success('Query submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        toast.error('Something went wrong. Please try again.');
      }
    } catch (error: any) {
      if (error.response) {
        toast.error(error.response.data?.message || 'Something went wrong.');
      } else if (error.request) {
        toast.error('No response from server.');
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      details: ["+91 9424440004", "+91 8989389555"],
      description: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      details: ["info@legaldhara.com", "support@legaldhara.com"],
      description: "Send us your queries anytime"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Office Address",
      details: ["7th Floor, Rajani Bhawan", "Opposite High court", "Mahatma Gandhi Road", "Indore, Madhya Pradesh"],
      description: "Visit our office for in-person consultation"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
      description: "We're here when you need us"
    }
  ];

  const offices = [
    // {
    //   city: "Delhi",
    //   address: "456 Corporate Plaza, Connaught Place, New Delhi - 110001",
    //   phone: "+91 98765 43211",
    //   email: "info@legaldhara.com"
    // },
     {
      // city: "Indore",
      address: "7th Floor, Rajani Bhawan, Opposite High court, Mahatma Gandhi Road, Indore, Madhya Pradesh",
      phone: "+91 9424440004",
      email: "info@legaldhara.com"
    },
   
    {
      // city: "Tikamgarh",
      address: "Mahaveer residency, Jhansi road , Tikamgarh , 472001",
      phone: "+91 8989389555",
      email: "info@legaldhara.com"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you register my trademark?",
      answer: "Trademark registration typically takes 12-18 months. However, we file your application within 24-48 hours of receiving all documents."
    },
    {
      question: "What are your service charges?",
      answer: "Our pricing is transparent with no hidden costs. Trademark registration starts at ₹999, GST registration at ₹1,499. Contact us for detailed pricing."
    },
    {
      question: "Do you provide post-registration support?",
      answer: "Yes, we provide comprehensive post-registration support including renewal reminders, compliance updates, and ongoing legal assistance."
    },
    {
      question: "Can I track my application status?",
      answer: "Absolutely! We provide a dedicated client portal where you can track your application status in real-time with regular updates."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#111111] via-[#111111] to-[#111111] py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#BC9139] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#BC9139] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-[#BC9139]/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-[#BC9139]/30">
              <MessageCircle className="w-4 h-4 text-[#BC9139]" />
              <span className="text-[#BC9139] font-semibold text-sm tracking-wide">GET IN TOUCH</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Start Your
              <span className="text-[#BC9139]"> Legal Journey</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Connect with India's most trusted legal experts. Get personalized solutions for all your business legal needs with 24/7 support and guaranteed results.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { icon: Users, value: 10, suffix: 'k+', label: 'Happy Clients' },
              { icon: Award, value: 99, suffix: '%', label: 'Success Rate' },
              { icon: Shield, value: '24/7', suffix: '', label: 'Support', noCounter: true },
              { icon: CheckCircle, value: 5, suffix: '+', label: 'Years Experience' }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-[#BC9139] mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.noCounter ? stat.value : (
                    <StatCounter
                      endValue={stat.value}
                      duration={1500}
                      increment={Number(stat.value) > 100 ? 10 : 1}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-xs md:text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 max-w-7xl mx-auto">
            
            {/* Contact Form - Takes 3 columns */}
             <div id='contact-form' className="lg:col-span-3">
        <Card className="border-0 shadow-xl bg-white overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-[#111111] to-[#111111] text-white p-6 md:p-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-[#BC9139]/20 rounded-lg">
                <Send className="w-5 h-5 md:w-6 md:h-6 text-[#BC9139]" />
              </div>
              <CardTitle className="text-2xl md:text-3xl font-bold">Send Us a Message</CardTitle>
            </div>
            <p className="text-gray-300 text-sm md:text-base">
              Fill out the form and we'll get back to you within 24 hours
            </p>
          </CardHeader>

          <CardContent className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">Full Name *</label>
                  <Input
                    placeholder="Enter your name"
                    className="h-11 border-2 border-gray-200 focus:border-[#BC9139] focus:ring-2 focus:ring-[#BC9139]/20 transition-all"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#111111] mb-2">Phone Number *</label>
                  <Input
                    placeholder="Enter phone number"
                    className="h-11 border-2 border-gray-200 focus:border-[#BC9139] focus:ring-2 focus:ring-[#BC9139]/20 transition-all"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Email Address *</label>
                <Input
                  placeholder="Enter your email"
                  className="h-11 border-2 border-gray-200 focus:border-[#BC9139] focus:ring-2 focus:ring-[#BC9139]/20 transition-all"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Select Service *</label>
                <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                  <SelectTrigger className="h-11 border-2 border-gray-200 focus:border-[#BC9139] focus:ring-2 focus:ring-[#BC9139]/20 transition-all">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="trademark">Trademark Registration</SelectItem>
                    <SelectItem value="gst">GST Registration</SelectItem>
                    <SelectItem value="company">Company Registration</SelectItem>
                    <SelectItem value="ipr">IPR Services</SelectItem>
                    <SelectItem value="tax">Tax Filing</SelectItem>
                    <SelectItem value="compliance">Legal Compliance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#111111] mb-2">Your Message *</label>
                <Textarea
                  placeholder="Tell us about your requirements..."
                  className="border-2 border-gray-200 focus:border-[#BC9139] focus:ring-2 focus:ring-[#BC9139]/20 transition-all min-h-[120px] resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full h-12 bg-[#BC9139] hover:bg-[#BC9139] text-[#111111] font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                ) : (
                  <>
                    Send Message <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
                    </div>

            {/* Contact Info - Takes 2 columns */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white group">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-[#BC9139]/10 rounded-xl group-hover:bg-[#BC9139]/20 transition-colors">
                        <div className="text-[#BC9139]">{info.icon}</div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-[#111111] mb-2">{info.title}</h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-gray-700 font-medium break-words">{detail}</p>
                        ))}
                        <p className="text-xs text-gray-500 mt-2">{info.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* WhatsApp Card */}
              <Link
      href="https://wa.me/919424440004?text=Hi%20I%20need%20help"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className="cursor-pointer border-0 bg-gradient-to-br from-green-500 to-green-600 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <CardContent className="p-5">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 p-3 bg-white/20 backdrop-blur-sm rounded-xl group-hover:bg-white/30 transition-colors">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-1">WhatsApp Support</h3>
              <p className="text-white/90 font-semibold text-base">+91 94244 40004</p>
              <p className="text-white/80 text-xs mt-1">Get instant responses on WhatsApp</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3">Our Office Locations</h2>
            <p className="text-gray-600">Visit us at any of our branches across India</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 pb-4 border-b-2 border-[#BC9139]/20">

                    {/* <h3 className="text-xl font-bold text-[#111111] group-hover:text-[#BC9139] transition-colors">{office.city}</h3> */}
                  
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-[#BC9139] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700 leading-relaxed">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#BC9139] flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#BC9139] flex-shrink-0" />
                      <span className="text-sm text-gray-700 break-all">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to questions you may have</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#BC9139]/10 flex items-center justify-center group-hover:bg-[#BC9139]/20 transition-colors">
                      <span className="text-[#BC9139] font-bold text-sm">Q</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#111111] leading-tight">{faq.question}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#111111] to-[#111111] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#BC9139] rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-base md:text-lg text-gray-300 mb-8">Schedule a free consultation with our experts today</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link
    href="#contact-form"
    className="bg-[#BC9139] hover:bg-[#BC9139] text-[#111111] font-bold px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center rounded-lg"
  >
    Book Free Consultation
  </Link>

  <Link
    href="tel:+919424440004"
    className="border-2 border-white text-white hover:bg-white hover:text-[#111111] font-bold px-8 h-12 text-base transition-all flex items-center justify-center rounded-lg"
  >
    Call: +91 9424440004
  </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
