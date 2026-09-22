"use client"
import React, { useState, useEffect } from 'react';
import { X, Loader2 } from 'lucide-react';

// TypeScript Types
type PlanType = 'one-year' | 'two-year';
type PlanTier = 'silver' | 'gold' | 'diamond';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: string;
  subscribe: boolean;
  duration: number;
  benefits: string[];
  createdAt: string;
}

interface PlansResponse {
  success: boolean;
  data: Plan[];
}

interface BuyFormData {
  fullName: string;
  email: string;
  phone: string;
  amount: string;
  planId: string;
}

export default function PricingPage(): JSX.Element {
  const [planType, setPlanType] = useState<PlanType>('one-year');
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBuyForm, setShowBuyForm] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState<BuyFormData>({
    fullName: '',
    email: '',
    phone: '',
    amount: '',
    planId: ''
  });

  const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      setLoading(true);
      // Replace with axios
      const response = await fetch(`${API_URL}/api/v1/plan`, {
        credentials: 'include'
      });
      const data: PlansResponse = await response.json();
      
      if (data.success) {
        setPlans(data.data);
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const getPlansByDuration = (duration: number) => {
    return plans.filter(plan => plan.duration === duration);
  };

  const getPlanByTier = (plansList: Plan[], tier: string) => {
    return plansList.find(plan => plan.name.toLowerCase().includes(tier.toLowerCase()));
  };

  const handleBuyNow = (plan: Plan) => {
    setSelectedPlan(plan);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      amount: plan.price,
      planId: plan.id
    });
    setShowBuyForm(true);
  };

  const handleSubmitBuy = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill all required fields');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/v1/plan/buy`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include'
      });

      const data = await response.json();

      if (data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl;
      } else {
        throw new Error(data.message || 'Failed to initiate payment');
      }
    } catch (error: any) {
      console.error('Error:', error);
      alert(error.message || 'Failed to process payment');
    } finally {
      setSubmitting(false);
    }
  };

  const baseFeatures = {
    silver: [
      'Unlimited Brand Name Searching',
      'Free Consult An Expert Advocate',
      'Unlimited New Trademark File',
      'You Can Choose Any 10 Service in A Year',
      'Upto 2 Examination Reply',
      'Upto 2 Objection Remove',
      'Upto 5 Hearing Attend',
      'Upto 2 Legal Notice',
      'Upto 5 Interlocutory Petition',
      'Upto 2 Opposition File',
      'Upto 2 Opposition Reply',
      'Upto 2 Rectification File',
      'Upto 2 Rectification Reply',
      'Upto 2 Trademark Renewal',
      'Only 1 Copyright Registration',
      'Only 1 Fssai Registration',
      'Only 1 ISO Registration',
      'Pay Only Govt. Fee'
    ],
    gold: [
      'You Can Choose Any 25 Service in A Year',
      'Unlimited Brand Name Searching',
      'Free Consult An Expert Advocate',
      'Unlimited New Trademark File',
      'Upto 5 Examination Reply',
      'Upto 5 Objection Remove',
      'Upto 10 Hearing Attend',
      'Upto 10 Legal Notice',
      'Upto 5 Interlocutory Petition',
      'Upto 5 Opposition File',
      'Upto 5 Opposition Reply',
      'Upto 5 Rectification File',
      'Upto 5 Rectification Reply',
      'Upto 5 Trademark Renewal',
      'Only 3 Copyright Registration',
      'Upto 2 Fssai Registration',
      'Upto 5 ISO Registration',
      'Pay Only Govt. Fee'
    ],
    diamond: [
      'You Can Choose Any 50 Service in A Year',
      'Unlimited Brand Name Searching',
      'Free Consult An Expert Advocate',
      'Unlimited New Trademark File',
      'Upto 15 Examination Reply',
      'Upto 15 Objection Remove',
      'Upto 20 Hearing Attend',
      'Upto 20 Legal Notice',
      'Upto 10 Interlocutory Petition',
      'Upto 10 Opposition File',
      'Upto 10 Opposition Reply',
      'Upto 10 Rectification File',
      'Upto 10 Rectification Reply',
      'Upto 10 Trademark Renewal',
      'Only 5 Copyright Registration',
      'Only 5 Fssai Registration',
      'Only 5 ISO Registration',
      'Pay Only Govt. Fee'
    ]
  };

  const features = planType === 'two-year' 
    ? {
        silver: baseFeatures.silver.map(feature => {
          const match = feature.match(/(\d+)/);
          if (match) {
            const num = parseInt(match[0]);
            return feature.replace(match[0], (num * 2).toString());
          }
          return feature;
        }),
        gold: baseFeatures.gold.map(feature => {
          const match = feature.match(/(\d+)/);
          if (match) {
            const num = parseInt(match[0]);
            return feature.replace(match[0], (num * 2).toString());
          }
          return feature;
        }),
        diamond: baseFeatures.diamond.map(feature => {
          const match = feature.match(/(\d+)/);
          if (match) {
            const num = parseInt(match[0]);
            return feature.replace(match[0], (num * 2).toString());
          }
          return feature;
        })
      }
    : baseFeatures;

  const currentDuration = planType === 'one-year' ? 365 : 730;
  const currentPlans = getPlansByDuration(currentDuration);
  
  const silverPlan = getPlanByTier(currentPlans, 'silver');
  const goldPlan = getPlanByTier(currentPlans, 'gold');
  const diamondPlan = getPlanByTier(currentPlans, 'diamond');

  const formatPrice = (price: string) => {
    return parseInt(price).toLocaleString('en-IN');
  };

  const calculateDiscount = (price: string) => {
    const priceNum = parseInt(price);
    if (planType === 'one-year') {
      if (priceNum <= 20000) return { original: '49,999', discount: '60% OFF' };
      if (priceNum <= 40000) return { original: '99,999', discount: '60% OFF' };
      return { original: '1,99,999', discount: '50% OFF' };
    } else {
      if (priceNum <= 35000) return { original: '89,999', discount: '61% OFF' };
      if (priceNum <= 65000) return { original: '1,79,999', discount: '64% OFF' };
      return { original: '3,29,999', discount: '51% OFF' };
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#071B34] via-[#0a2442] to-[#071B34] flex items-center justify-center">
        <Loader2 className="h-12 w-12 text-[#EAB308] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071B34] via-[#0a2442] to-[#071B34] py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EAB308]/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-[#EAB308]/30">
            <svg className="w-4 h-4 text-[#EAB308]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-[#EAB308] font-semibold text-sm tracking-wide">PRICING PLANS</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Choose Our Annual{' '}
            <span className="text-[#EAB308]">Service Plan</span>
          </h1>
          
          <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive yearly packages for all your intellectual property and legal needs. 
            Save more with our annual plans and get priority support.
          </p>
        </div>

        {/* Plan Toggle */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-1.5 inline-flex border border-white/10 shadow-2xl">
            <div 
              className={`absolute top-1.5 bottom-1.5 rounded-xl bg-[#EAB308] transition-all duration-500 ease-out ${
                planType === 'one-year' ? 'left-1.5 right-[50%]' : 'left-[50%] right-1.5'
              }`}
            />
            <button
              onClick={() => setPlanType('one-year')}
              className={`relative z-10 px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base ${
                planType === 'one-year'
                  ? 'text-[#071B34]'
                  : 'text-white hover:text-[#EAB308]'
              }`}
            >
              ONE YEAR
            </button>
            <button
              onClick={() => setPlanType('two-year')}
              className={`relative z-10 px-8 md:px-12 py-3 md:py-4 rounded-xl font-bold transition-all duration-300 text-sm md:text-base ${
                planType === 'two-year'
                  ? 'text-[#071B34]'
                  : 'text-white hover:text-[#EAB308]'
              }`}
            >
              TWO YEAR
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Silver Plan */}
          {silverPlan && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-xl h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                      <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#071B34] mb-1">Silver</h3>
                    <p className="text-gray-500 text-xs md:text-sm">Essential Package</p>
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-[#071B34]">₹{formatPrice(silverPlan.price)}</span>
                    <span className="text-lg text-gray-500">/-</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 line-through text-sm">₹{calculateDiscount(silverPlan.price).original}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-xs font-bold">
                      {calculateDiscount(silverPlan.price).discount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    For {planType === 'one-year' ? 'one year' : 'two years'}<br />
                    +18% GST (Tax Credit)
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <div className="max-h-60 overflow-y-auto pr-2 space-y-2.5 custom-scrollbar">
                    {features.silver.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#EAB308] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleBuyNow(silverPlan)}
                  className="w-full bg-[#071B34] hover:bg-[#0a2442] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          )}

          {/* Gold Plan - Featured */}
          {goldPlan && (
            <div className="relative group lg:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#EAB308] to-[#fbbf24] rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                <div className="bg-gradient-to-r from-[#EAB308] to-[#fbbf24] text-[#071B34] px-4 py-1.5 rounded-full text-xs font-bold shadow-xl">
                  MOST POPULAR
                </div>
              </div>
              <div className="relative bg-white rounded-2xl p-6 border-2 border-[#EAB308] transition-all duration-500 shadow-2xl h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EAB308] to-[#d9a507] rounded-xl flex items-center justify-center mb-3 shadow-lg shadow-[#EAB308]/30">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#071B34] mb-1">Gold</h3>
                    <p className="text-gray-500 text-xs md:text-sm">Popular Choice</p>
                  </div>
                  <div className="bg-[#EAB308] text-white px-2.5 py-1 rounded-lg text-xs font-bold">
                    Best Value
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-[#EAB308]/30">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-[#071B34]">₹{formatPrice(goldPlan.price)}</span>
                    <span className="text-lg text-gray-500">/-</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 line-through text-sm">₹{calculateDiscount(goldPlan.price).original}</span>
                    <span className="bg-[#EAB308]/20 text-[#EAB308] px-2 py-0.5 rounded-md text-xs font-bold">
                      {calculateDiscount(goldPlan.price).discount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    For {planType === 'one-year' ? 'one year' : 'two years'}<br />
                    +18% GST (Tax Credit)
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <div className="max-h-60 overflow-y-auto pr-2 space-y-2.5 custom-scrollbar">
                    {features.gold.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#EAB308] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs leading-relaxed font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleBuyNow(goldPlan)}
                  className="w-full bg-gradient-to-r from-[#EAB308] to-[#fbbf24] hover:from-[#fbbf24] hover:to-[#EAB308] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-xl shadow-[#EAB308]/30 hover:shadow-[#EAB308]/50 hover:scale-[1.02]"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          )}

          {/* Diamond Plan */}
          {diamondPlan && (
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EAB308] to-[#fbbf24] rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
              <div className="relative bg-white rounded-2xl p-6 border border-[#EAB308]/30 hover:border-[#EAB308] transition-all duration-500 shadow-xl h-full flex flex-col">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <div className="w-12 h-12 bg-gradient-to-br from-[#EAB308]/20 to-[#fbbf24]/20 rounded-xl flex items-center justify-center mb-3 border border-[#EAB308]/30">
                      <svg className="w-6 h-6 text-[#EAB308]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#071B34] mb-1">Diamond</h3>
                    <p className="text-gray-500 text-xs md:text-sm">Premium Package</p>
                  </div>
                </div>
                
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl md:text-4xl font-bold text-[#071B34]">₹{formatPrice(diamondPlan.price)}</span>
                    <span className="text-lg text-gray-500">/-</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 line-through text-sm">₹{calculateDiscount(diamondPlan.price).original}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-md text-xs font-bold">
                      {calculateDiscount(diamondPlan.price).discount}
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs">
                    For {planType === 'one-year' ? 'one year' : 'two years'}<br />
                    +18% GST (Tax Credit)
                  </p>
                </div>

                <div className="mb-6 flex-grow">
                  <div className="max-h-60 overflow-y-auto pr-2 space-y-2.5 custom-scrollbar">
                    {features.diamond.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-[#EAB308] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 text-xs leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => handleBuyNow(diamondPlan)}
                  className="w-full bg-[#071B34] hover:bg-[#0a2442] text-white font-bold py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Trust Section */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white/5 backdrop-blur-sm px-6 py-5 rounded-2xl border border-white/10 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-center sm:text-left">
              <span className="text-2xl">🔒</span>
              <span className="text-gray-300 text-sm font-medium">Secure Payment</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-center sm:text-left sm:border-l sm:border-r border-white/20">
              <span className="text-2xl">⚖️</span>
              <span className="text-gray-300 text-sm font-medium">Trusted Legal Experts</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-center sm:text-left">
              <span className="text-2xl">🎯</span>
              <span className="text-gray-300 text-sm font-medium">Priority Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Form Modal */}
      {showBuyForm && selectedPlan && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => !submitting && setShowBuyForm(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#EAB308] to-[#fbbf24] p-6 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Complete Purchase</h3>
                  <p className="text-white/80 text-sm">{selectedPlan.name}</p>
                </div>
                <button
                  onClick={() => !submitting && setShowBuyForm(false)}
                  disabled={submitting}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-all disabled:opacity-50"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmitBuy} className="p-6 space-y-4">
              {/* Plan Details */}
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-gray-600">Plan:</span>
                  <span className="font-semibold text-gray-800">{selectedPlan.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 text-sm">Amount:</span>
                  <span className="text-2xl font-bold text-[#EAB308]">₹{formatPrice(selectedPlan.price)}</span>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  disabled={submitting}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#EAB308] focus:border-transparent transition-all disabled:bg-gray-100 text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  disabled={submitting}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#EAB308] focus:border-transparent transition-all disabled:bg-gray-100 text-sm"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  disabled={submitting}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="Enter your phone number"
                  pattern="[0-9]{10}"
                  maxLength={10}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-[#EAB308] focus:border-transparent transition-all disabled:bg-gray-100 text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">Enter 10-digit mobile number</p>
              </div>

              {/* GST Info */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-xs text-blue-800">
                  <span className="font-semibold">Note:</span> GST (18%) will be added to the final amount. You can claim tax credit on GST paid.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-[#EAB308] to-[#fbbf24] hover:from-[#fbbf24] hover:to-[#EAB308] text-white font-bold py-3 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Proceed to Payment
                  </>
                )}
              </button>

              {/* Secure Payment Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Secure payment powered by PhonePe</span>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}