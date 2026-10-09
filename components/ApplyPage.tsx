'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Building2, FileText, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

import toast from 'react-hot-toast';
import { secureApi } from '@/config/apiClient';

export default function ApplyPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const serviceId = searchParams.get('serviceId');
  const serviceName = searchParams.get('serviceName');
  const servicePrice = searchParams.get('servicePrice');
  const serviceGovtPrice = searchParams.get('governmentCharges');

  const [businessName, setBusinessName] = useState('');
  const [serviceFor, setServiceFor] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await secureApi.post(
        `/api/v1/application/create`,
        {
          serviceId,
          ServiceName: serviceName,
          businessName,
          serviceFor,
        }
      );

      if (response.data.success) {
        const ticketNo = response.data.application.ticketNo;
        const serviceNameFromResponse = response.data.application.serviceName;
        const chargeId = response.data.application.chargeId;
        
        setSuccess('Application submitted successfully!');
        toast.success("Application submitted successfully! Redirecting...");
        
        // Small delay to show success state
        setTimeout(() => {
          const query = new URLSearchParams({
            serviceName: serviceNameFromResponse,
            ticketNo: ticketNo,
            chargeId,
            servicePrice: servicePrice ?? "",
            governmentCharges: serviceGovtPrice ?? '',
          }).toString();

          router.push(`/onboarding?${query}`);
        }, 1000);
      } else {
        setError(response.data.message || 'Something went wrong');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Error submitting application');
    } finally {
      setLoading(false);
    }
  };

  if (!serviceId || !serviceName) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white border border-red-200 rounded-xl shadow-sm p-6 max-w-md w-full text-center">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-7 h-7 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Invalid Service</h2>
          <p className="text-gray-600 text-sm mb-5">Please go back and try again.</p>
          <Button 
            onClick={() => router.back()}
            className="w-full bg-[#BC9139] hover:bg-[#BC9139] text-white"
          >
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-deep-blue p-6 text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-1">{serviceName}</h2>
            <p className="text-white/80 text-sm">Complete your application</p>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-5">
            {/* Service Info */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-500">Service ID:</span>
                <span className="text-gray-800 font-medium">{serviceId}</span>
              </div>
              {servicePrice && (
                <div className="flex justify-between items-center text-sm mt-2 pt-2 border-t border-gray-200">
                  <span className="text-gray-500">Price:</span>
                  <span className="text-deep-blue font-bold">₹{servicePrice}</span>
                </div>
              )}
            </div>

            {/* Business Name Input */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium text-sm">
                <Building2 className="w-4 h-4 mr-2 text-deep-blue" />
                Business Name
              </label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                required
                disabled={loading}
                placeholder="Enter your business name"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC9139] focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
              />
            </div>

            {/* Service For Input */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium text-sm">
                <FileText className="w-4 h-4 mr-2 text-deep-blue" />
                Service For
              </label>
              <input
                type="text"
                value={serviceFor}
                onChange={(e) => setServiceFor(e.target.value)}
                required
                disabled={loading}
                placeholder="What is this service for?"
                className="w-full border border-gray-300 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BC9139] focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed text-sm"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-green-600 text-sm">{success}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-deep-blue text-white font-medium py-3 rounded-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting Application...
                </span>
              ) : (
                'Submit Application'
              )}
            </Button>

            {/* Help Text */}
            <p className="text-center text-gray-400 text-xs">
              By submitting, you agree to our terms and conditions
            </p>
          </div>
        </form>

        {/* Loading Overlay */}
        {loading && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm mx-4 text-center">
              <div className="relative w-16 h-16 mx-auto mb-4">
                <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-[#BC9139] rounded-full border-t-transparent animate-spin"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Processing Application</h3>
              <p className="text-gray-500 text-sm">Please wait while we submit your application...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
