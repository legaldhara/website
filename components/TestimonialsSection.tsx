'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "Tech Startup Founder",
      content:
        "Excellent service! Got my trademark registered in just 15 days. The team was very professional and guided me through every step. Highly recommend their zero-cost trademark service.",
      rating: 5,
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=RajeshKumar"
    },
    {
      name: "Priya Sharma",
      company: "E-commerce Business Owner",
      content:
        "Best decision to choose LegalDhara for our registration. Hassle-free process and great customer support. They handled everything professionally and efficiently.",
      rating: 5,
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=PriyaSharma"
    },
    {
      name: "Amit Patel",
      company: "Manufacturing Business",
      content:
        "Their registration service saved us so much time and effort. Highly recommend for all registration needs. The team is knowledgeable and responsive.",
      rating: 5,
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=AmitPatel"
    },
    {
      name: "Sunita Singh",
      company: "Retail Chain Owner",
      content:
        "Outstanding service for protection. They helped us secure our patents and trademarks efficiently. Professional team with deep expertise in intellectual property law.",
      rating: 5,
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=SunitaSingh"
    },
    {
      name: "Vikram Gupta",
      company: "Software Company CEO",
      content:
        "Comprehensive legal services that keep our business running smoothly. Their proactive approach to compliance management is exceptional.",
      rating: 5,
      image: "https://api.dicebear.com/9.x/adventurer/svg?seed=VikramGupta"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  return (
    <section className="py-16 bg-[#F4F4F4] relative overflow-hidden">
      <div className="px-4 md:px-6 lg:px-32">
        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl font-poppins font-bold text-deep-blue mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Have to Say
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-2xl md:text-3xl">
              <span className="font-bold text-deep-blue">Legal</span>
              <span className="font-bold text-brand-orange">Dhara</span>
              <span className="text-gray-700">
                {" "}is used by tens of thousands of founders to start, manage, and grow their business
              </span>
            </p>

            <div className="text-3xl font-bold">
              <span className="text-brand-orange">20,000+</span>
              <span className="text-deep-blue"> Happy Customers</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
  <Image
    src="g_logo.png"
    alt="Google Logo"
    width={32}
    height={32}
    className="object-contain"
  />
  <div>
    <div className="flex items-center gap-1">
      <span className="font-bold text-lg">4.5</span>
      <div className="flex">
        {[...Array(4)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
        <Star className="h-4 w-4 text-gray-300 fill-current" />
      </div>
    </div>
    <a
      href="#"
      className="text-sm text-brand-orange hover:underline"
    >
      See all our reviews
    </a>
  </div>
</div>

            </div>

            <p className="text-gray-600 leading-relaxed">
              We are one of India's highest-rated service providers, completing business incorporations
              and other compliance services in record time.
            </p>

            <p className="text-sm text-gray-700 font-medium">
              Legal-Dhara is a startup India registered company
            </p>
          </motion.div>

          {/* Right Section (Animated Carousel) */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white shadow-2xl rounded-3xl overflow-hidden border-0">
              <CardContent className="p-0 relative h-[420px] md:h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -100, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 flex flex-col p-6 md:p-8"
                  >
                    <div className="flex items-center gap-3 mb-4">
  <Image
    src="g_logo.png"
    alt="Google Logo"
    width={24}
    height={24}
    className="object-contain"
  />
  <div className="text-blue-600 font-bold text-sm">Google Review</div>
</div>


                    <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                      {testimonials[currentIndex].content}
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t mt-4">
                      <div className="relative">
                        <motion.img
                          key={testimonials[currentIndex].image}
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-14 h-14 rounded-full border-4 border-brand-orange shadow-md"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      </div>
                      <div>
                        <div className="font-bold text-base text-gray-800">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-brand-orange text-sm">
                          {/* {testimonials[currentIndex].company} */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
           <div className="absolute bottom-6 right-6 flex gap-3 z-20">
  <button
    name="prev"
    onClick={prevSlide}
    aria-label="Previous slide" // 👈 gives screen readers a name
    title="Previous slide" // 👈 shows tooltip on hover
    className="w-12 h-12 rounded-full bg-brand-orange hover:bg-orange-600 text-white shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
  >
    <ChevronLeft className="h-6 w-6" aria-hidden="true" /> {/* 👈 hides icon from screen readers */}
  </button>

  <button
    name="next"
    onClick={nextSlide}
    aria-label="Next slide" // 👈 gives accessible name
    title="Next slide"
    className="w-12 h-12 rounded-full bg-brand-orange hover:bg-orange-600 text-white shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
  >
    <ChevronRight className="h-6 w-6" aria-hidden="true" />
  </button>
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
