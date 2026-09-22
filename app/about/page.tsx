import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Clock, Shield, Target, Eye, Heart, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import StatCounter from '@/components/StatCounter';

export default function AboutPage() {
  const stats = [
    { number: 1000, label: "Happy Clients", icon: <Users className="h-8 w-8 text-brand-orange" />, suffix: "+" },
    { number: 50, label: "Expert Team", icon: <Award className="h-8 w-8 text-brand-orange" />, suffix: "+" },
    { number: 5, label: "Years Experience", icon: <Clock className="h-8 w-8 text-brand-orange" />, suffix: "+" },
    { number: 99, label: "Success Rate", icon: <Shield className="h-8 w-8 text-brand-orange" />, suffix: "%" }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-brand-orange" />,
      title: "Excellence",
      description: "We strive for excellence in every service we deliver, ensuring the highest quality standards."
    },
    {
      icon: <Shield className="h-8 w-8 text-brand-orange" />,
      title: "Trust & Security",
      description: "Your data and business information are completely secure with our ISO-certified processes."
    },
    {
      icon: <Heart className="h-8 w-8 text-brand-orange" />,
      title: "Customer First",
      description: "Every decision we make is centered around providing the best experience for our clients."
    },
    {
      icon: <Eye className="h-8 w-8 text-brand-orange" />,
      title: "Transparency",
      description: "Clear pricing, honest communication, and transparent processes - no hidden surprises."
    }
  ];

  const team = [
    {
      name: "Rajesh Sharma",
      position: "Founder & CEO",
      qualification: "CA, CS",
      experience: "15+ years",
      image: "assets/G(3).webp"
    },
    {
      name: "Priya Patel",
      position: "Head of Legal",
      qualification: "LLB, LLM",
      experience: "12+ years",
      image: "assets/G(1).webp"
    },
    {
      name: "Amit Kumar",
      position: "Tax Consultant",
      qualification: "CA",
      experience: "10+ years",
      image: "assets/G(2).webp"
    },
    {
      name: "Sunil Singh",
      position: "Compliance Head",
      qualification: "CS, LLB",
      experience: "8+ years",
      image: "assets/G(3).webp"
    }
  ];

  const milestones = [
    { year: "2019", event: "Founded Legal Dhara with a vision to simplify legal processes" },
    { year: "2020", event: "Launched online platform and served our first 1,000 clients" },
    { year: "2021", event: "Expanded services to include GST and tax compliance" },
    { year: "2022", event: "Achieved ISO certification and crossed 5,000 clients milestone" },
    { year: "2023", event: "Introduced AI-powered document processing" },
    { year: "2024", event: "Celebrating 10,000+ satisfied clients across India" }
  ];

  const whyChoose = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "100% Secure",
      description: "ISO certified processes with bank-level security for your data"
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Expert Team",
      description: "Qualified CAs, CSs, and legal experts with years of experience"
    },
    {
      icon: <Clock className="h-10 w-10" />,
      title: "Fast Processing",
      description: "Streamlined processes to get your work done in record time"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-br from-deep-blue via-deep-blue to-blue-900 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-brand-orange/20 text-brand-orange border-brand-orange/30 px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="h-4 w-4 inline mr-2" />
              About Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              India's Most Trusted
              <span className="block text-brand-orange mt-2">Legal-Tech Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make legal and compliance services accessible, affordable, and hassle-free for every business in India. Since 2019, we've been helping entrepreneurs navigate the complex world of legal compliance with ease.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section - Overlapping */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 md:p-8 shadow-xl border-0 bg-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="space-y-3 p-0">
                <div className="flex justify-center mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-deep-blue">
                  <StatCounter
                    endValue={stat.number}
                    duration={1000}
                    increment={stat.number > 100 ? 10 : 1}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 md:p-10 bg-gradient-to-br from-amber-50 to-orange-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-brand-orange/10 rounded-xl mr-4">
                    <Target className="h-8 w-8 text-brand-orange" />
                  </div>
                  <h2 className="text-3xl font-bold text-deep-blue">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To democratize access to legal and compliance services by leveraging technology, making it simple, fast, and affordable for every business to stay legally compliant and focus on growth.
                </p>
              </div>
            </Card>
            
            <Card className="p-8 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-deep-blue/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-deep-blue/10 rounded-xl mr-4">
                    <Eye className="h-8 w-8 text-deep-blue" />
                  </div>
                  <h2 className="text-3xl font-bold text-deep-blue">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To become India's leading legal-tech platform, empowering millions of entrepreneurs and businesses with seamless legal solutions while building a more compliant and transparent business ecosystem.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">Core Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">What Drives Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide our every decision and action</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-white to-gray-50 group">
                <CardContent className="space-y-4 p-0">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-brand-orange/10 rounded-2xl group-hover:bg-brand-orange/20 transition-colors duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-deep-blue">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-deep-blue/10 text-deep-blue border-deep-blue/20">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Meet Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experienced professionals dedicated to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-deep-blue mb-1">{member.name}</h3>
                  <p className="text-brand-orange font-semibold mb-3">{member.position}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-600">{member.qualification}</p>
                    <Badge variant="outline" className="text-xs border-brand-orange text-brand-orange">
                      {member.experience}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-deep-blue to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-brand-orange rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-orange/20 text-brand-orange border-brand-orange/30 backdrop-blur-sm">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Milestones That Define Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">A journey of growth, innovation, and unwavering commitment</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="flex-shrink-0 w-24 text-right pt-1">
                    <Badge className="bg-brand-orange text-white border-0 px-4 py-1.5 text-base font-bold shadow-lg">
                      {milestone.year}
                    </Badge>
                  </div>
                  <div className="flex-1 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:translate-x-2 group-hover:shadow-xl">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-brand-orange flex-shrink-0 mt-0.5" />
                      <p className="text-white leading-relaxed text-lg">{milestone.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-brand-orange/10 text-brand-orange border-brand-orange/20">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">Why Legal Dhara  ?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We combine expertise, technology, and dedication to deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChoose.map((item, index) => (
              <Card key={index} className="p-8 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-white to-gray-50 group">
                <CardContent className="space-y-4 p-0">
                  <div className="flex justify-center">
                    <div className="p-5 bg-brand-orange/10 rounded-2xl text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-deep-blue">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <Card className="bg-deep-blue text-white border-0 shadow-2xl overflow-hidden relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl"></div>
            </div>
            
            <CardContent className="p-12 md:p-16 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join thousands of businesses who trust us with their legal and compliance needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-brand-orange hover:bg-yellow-600 text-white font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <Link href="/contact" className="flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-black hover:bg-deep-blue hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}