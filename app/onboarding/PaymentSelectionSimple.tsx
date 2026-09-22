'use client';

import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

interface Props {
  serviceName: string;
  servicePrice: number;
  governmentCharges: number;
  onProceedToPay: (plan: any) => void;
}

const PaymentSelectionSimple: React.FC<Props> = ({
  serviceName,
  servicePrice,
  governmentCharges,
  onProceedToPay,
}) => {
  const [showGovtFeeStandard, setShowGovtFeeStandard] = useState(false);
  const [showGovtFeeExpress, setShowGovtFeeExpress] = useState(false);

  const handleProceed = (planType: string, price: number) => {
    const plan = {
      id: planType,
      title: `${planType === 'express' ? 'Express' : 'Standard'} ${serviceName}`,
      finalPrice: price,
    };
    onProceedToPay(plan);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#071B34] mb-2">
            Choose the right plan for {serviceName}
          </h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
            <span className="text-xl">👍</span>
            <span>Secure & Transparent Filing</span>
            <a href="#" className="text-blue-600 underline">T&C</a>
          </div>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* ✅ Standard Plan */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden relative">
            <div className="p-6">
              <div className="mb-3">
                <span className="inline-block bg-deep-blue text-brand-orange text-xs font-bold px-3 py-1 rounded">
                  ⚡ Standard
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#071B34] mb-2">
                Standard {serviceName}
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Traditional method for filing your {serviceName.toLowerCase()} application.
              </p>

              {/* Pricing */}
              <div className="mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base line-through text-gray-500">₹1999</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-green-100 text-green-700">
                    only for online payment
                  </span>
                </div>

                <div className="flex items-baseline gap-2 relative">
                  <span className="text-3xl font-bold text-[#071B34]">
                    ₹{servicePrice.toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => setShowGovtFeeStandard((prev) => !prev)}
                    onMouseEnter={() => setShowGovtFeeStandard(true)}
                    onMouseLeave={() => setShowGovtFeeStandard(false)}
                    className="text-xs flex items-center gap-1 text-gray-600 relative focus:outline-none"
                  >
                    + Govt. Fee <Info className="w-3 h-3" />
                    {showGovtFeeStandard && (
                      <div className="absolute top-6 left-0 bg-white border border-gray-300 text-gray-700 text-xs rounded-md shadow-md px-3 py-1 z-10 whitespace-nowrap">
                        Govt. Fee: ₹{governmentCharges.toLocaleString('en-IN')}
                      </div>
                    )}
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleProceed('standard', servicePrice)}
                className="w-full mt-6 py-3 rounded-lg bg-deep-blue text-white font-semibold hover:bg-[#0a2545] transition-colors"
              >
                Proceed to Pay
              </button>
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-4 text-[#071B34]">What you'll get</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>5-minute consultation with Our Experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Application filing within 3 days</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Certification*</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ✅ Express Plan */}
          <div className="bg-deep-blue text-white rounded-xl shadow-lg overflow-hidden border-2 border-brand-orange relative">
            <div className="p-6">
              <div className="mb-3">
                <span className="inline-block bg-brand-orange text-deep-blue text-xs font-bold px-3 py-1 rounded">
                  ⚡ Express
                </span>
              </div>

              <h2 className="text-xl font-bold mb-2">Express {serviceName}</h2>
              <p className="text-sm text-gray-300 mb-6">
                Faster method within 6 hours and start using your registered IP faster.
              </p>

              <div className="mt-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-base line-through text-gray-400">₹2999</span>
                  <span className="text-xs font-semibold px-2 py-1 rounded bg-green-500 text-white">
                    off
                  </span>
                </div>

                <div className="flex items-baseline gap-2 relative">
                  <span className="text-3xl font-bold text-white">
                    ₹{(servicePrice + 1000).toLocaleString('en-IN')}
                  </span>
                  <button
                    onClick={() => setShowGovtFeeExpress((prev) => !prev)}
                    onMouseEnter={() => setShowGovtFeeExpress(true)}
                    onMouseLeave={() => setShowGovtFeeExpress(false)}
                    className="text-xs flex items-center gap-1 text-gray-300 relative focus:outline-none"
                  >
                    + Govt. Fee <Info className="w-3 h-3" />
                    {showGovtFeeExpress && (
                      <div className="absolute top-6 left-0 bg-white border border-gray-300 text-gray-800 text-xs rounded-md shadow-md px-3 py-1 z-10 whitespace-nowrap">
                        Govt. Fee: ₹{governmentCharges.toLocaleString('en-IN')}
                      </div>
                    )}
                  </button>
                </div>
              </div>

              <button
                onClick={() => handleProceed('express', servicePrice + 1000)}
                className="w-full mt-6 py-3 rounded-lg bg-brand-orange text-deep-blue font-semibold hover:bg-[#d4a307] transition-colors"
              >
                Proceed to Pay
              </button>
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-4 text-white">What you'll get</h3>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>30-minute consultation with Our Experts</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Application filing within 12 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-400" />
                  <span>Certification*</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-gray-600">
          Government charges are additional to the above fee. Refer{' '}
          <a href="#" className="text-blue-600 underline">T&C</a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSelectionSimple;
