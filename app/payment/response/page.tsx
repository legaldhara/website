// 'use client';

// import { secureApi } from '@/config/apiClient';
// import { useEffect, useState } from 'react';
// import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

// // Type Definitions
// interface SplitInstrument {
//   amount: number;
//   rail: {
//     type: string;
//     authorizationCode: string;
//   };
//   instrument: {
//     type: string;
//     bankId: string;
//     arn: string;
//     brn: string;
//   };
// }

// interface PaymentDetail {
//   paymentMode: string;
//   transactionId: string;
//   timestamp: number;
//   amount: number;
//   state: string;
//   errorCode?: string;
//   detailedErrorCode?: string;
//   splitInstruments: SplitInstrument[];
// }

// interface PhonePeResponse {
//   orderId: string;
//   state: 'COMPLETED' | 'FAILED' | 'PENDING';
//   amount: number;
//   expireAt: number;
//   errorCode?: string;
//   detailedErrorCode?: string;
//   metaInfo: {
//     udf1: string;
//   };
//   paymentDetails: PaymentDetail[];
// }

// interface PaymentResponseData {
//   success: boolean;
//   message: string;
//   phonpeResponse: PhonePeResponse;
// }

// export default function PaymentResponse() {
//   const [loading, setLoading] = useState<boolean>(true);
//   const [paymentData, setPaymentData] = useState<PaymentResponseData | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [transactionReference, setTransactionReference] = useState<string>('');


//   useEffect(() => {
//     const params = new URLSearchParams(window.location.search);
//     const ref = params.get('transactionReference');
    
//     if (ref) {
//       setTransactionReference(ref);
//       fetchPaymentStatus(ref);
//     } else {
//       setError('No transaction reference found');
//       setLoading(false);
//     }
//   }, []);


// const fetchPaymentStatus = async (ref: string): Promise<void> => {
//   try {
//     setLoading(true);
//     setError(null);

//     // ✅ Now using secureApi (axios instance with correct baseURL)
//     const response = await secureApi.get(`/api/v1/payment/response/${ref}`);

//     const data: PaymentResponseData = response.data;

//     if (!data.phonpeResponse || !data.phonpeResponse.state) {
//       throw new Error("Invalid payment response structure");
//     }

//     setPaymentData(data);
//   } catch (err: any) {
//     const errorMessage =
//       err.response?.data?.message ||
//       err.message ||
//       "Failed to fetch payment status";
//     setError(errorMessage);
//     console.error("Payment fetch error:", errorMessage);
//   } finally {
//     setLoading(false);
//   }
// };


//   const formatAmount = (amount: number): string => {
//     try {
//       return `₹${(amount / 100).toLocaleString('en-IN', { 
//         minimumFractionDigits: 2, 
//         maximumFractionDigits: 2 
//       })}`;
//     } catch {
//       return `₹${(amount / 100).toFixed(2)}`;
//     }
//   };

//   const formatDate = (timestamp: number): string => {
//     try {
//       return new Date(timestamp).toLocaleString('en-IN', {
//         dateStyle: 'medium',
//         timeStyle: 'short'
//       });
//     } catch {
//       return 'Invalid date';
//     }
//   };

//   const formatPaymentMode = (mode: string): string => {
//     return mode?.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase()) || 'N/A';
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center p-4">
//         <div className="text-center">
//           <div className="relative w-16 h-16 mx-auto mb-4">
//             <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
//             <div className="absolute inset-0 border-4 border-[#EAB308] rounded-full border-t-transparent animate-spin"></div>
//           </div>
//           <h2 className="text-xl font-semibold text-gray-800 mb-1">Processing Payment</h2>
//           <p className="text-gray-500 text-sm">Please wait while we verify your transaction...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !paymentData) {
//     return (
//       <div className="min-h-screen bg-white flex items-center justify-center p-4">
//         <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 max-w-md w-full text-center">
//           <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
//             <AlertCircle className="w-7 h-7 text-red-500" />
//           </div>
//           <h2 className="text-xl font-bold text-gray-800 mb-2">Error</h2>
//           <p className="text-gray-600 text-sm mb-5">{error || 'Something went wrong'}</p>
//           <div className="flex flex-col gap-2">
//             <button
//               onClick={() => transactionReference && fetchPaymentStatus(transactionReference)}
//               className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
//             >
//               Retry
//             </button>
//             <button
//               onClick={() => window.location.href = '/'}
//               className="w-full bg-[#EAB308] hover:bg-[#d4a007] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
//             >
//               Go to Home
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   const isSuccess = paymentData.phonpeResponse.state === 'COMPLETED';
//   const isPending = paymentData.phonpeResponse.state === 'PENDING';
//   const paymentDetails = paymentData.phonpeResponse.paymentDetails?.[0];

//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center p-4">
//       <div className="max-w-lg w-full">
//         <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
//           {/* Status Header */}
//           <div className={`${
//             isSuccess 
//               ? 'bg-green-50 border-b border-green-100' 
//               : isPending
//               ? 'bg-yellow-50 border-b border-yellow-100'
//               : 'bg-red-50 border-b border-red-100'
//           } p-6 text-center`}>
//             <div className={`w-16 h-16 ${
//               isSuccess 
//                 ? 'bg-green-100' 
//                 : isPending
//                 ? 'bg-yellow-100'
//                 : 'bg-red-100'
//             } rounded-full flex items-center justify-center mx-auto mb-3`}>
//               {isSuccess ? (
//                 <CheckCircle className="w-8 h-8 text-green-600" />
//               ) : isPending ? (
//                 <AlertCircle className="w-8 h-8 text-yellow-600" />
//               ) : (
//                 <XCircle className="w-8 h-8 text-red-600" />
//               )}
//             </div>
//             <h1 className={`text-2xl font-bold mb-1 ${
//               isSuccess 
//                 ? 'text-green-700' 
//                 : isPending
//                 ? 'text-yellow-700'
//                 : 'text-red-700'
//             }`}>
//               {isSuccess 
//                 ? 'Payment Successful!' 
//                 : isPending
//                 ? 'Payment Pending'
//                 : 'Payment Failed'}
//             </h1>
//             <p className="text-gray-600 text-sm">
//               {isSuccess 
//                 ? 'Your transaction has been completed' 
//                 : isPending
//                 ? 'Your payment is being processed'
//                 : 'Payment could not be processed'}
//             </p>
//           </div>

//           {/* Payment Details */}
//           <div className="p-6 space-y-4">
//             {/* Amount */}
//             <div className="bg-[#EAB308]/5 border border-[#EAB308]/20 rounded-lg p-4 text-center">
//               <p className="text-gray-500 text-xs mb-1">Amount</p>
//               <p className="text-3xl font-bold text-[#EAB308]">
//                 {formatAmount(paymentData.phonpeResponse.amount)}
//               </p>
//             </div>

//             {/* Transaction Details */}
//             <div className="space-y-2">
//               <div className="flex justify-between items-start py-2 border-b border-gray-100">
//                 <span className="text-gray-500 text-xs">Order ID</span>
//                 <span className="text-gray-800 text-xs font-medium text-right max-w-[60%] break-all">
//                   {paymentData.phonpeResponse.orderId || 'N/A'}
//                 </span>
//               </div>

//               <div className="flex justify-between items-start py-2 border-b border-gray-100">
//                 <span className="text-gray-500 text-xs">Transaction ID</span>
//                 <span className="text-gray-800 text-xs font-medium text-right max-w-[60%] break-all">
//                   {paymentDetails?.transactionId || 'N/A'}
//                 </span>
//               </div>

//               <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                 <span className="text-gray-500 text-xs">Payment Mode</span>
//                 <span className="text-gray-800 text-xs font-medium">
//                   {paymentDetails?.paymentMode ? formatPaymentMode(paymentDetails.paymentMode) : 'N/A'}
//                 </span>
//               </div>

//               <div className="flex justify-between items-center py-2 border-b border-gray-100">
//                 <span className="text-gray-500 text-xs">Bank</span>
//                 <span className="text-gray-800 text-xs font-medium">
//                   {paymentDetails?.splitInstruments?.[0]?.instrument?.bankId || 'N/A'}
//                 </span>
//               </div>

//               <div className="flex justify-between items-start py-2 border-b border-gray-100">
//                 <span className="text-gray-500 text-xs">Transaction Time</span>
//                 <span className="text-gray-800 text-xs font-medium text-right">
//                   {paymentDetails?.timestamp ? formatDate(paymentDetails.timestamp) : 'N/A'}
//                 </span>
//               </div>

//               <div className="flex justify-between items-center py-2">
//                 <span className="text-gray-500 text-xs">Status</span>
//                 <span className={`text-xs font-semibold ${
//                   isSuccess 
//                     ? 'text-green-600' 
//                     : isPending
//                     ? 'text-yellow-600'
//                     : 'text-red-600'
//                 }`}>
//                   {paymentData.phonpeResponse.state}
//                 </span>
//               </div>
//             </div>

//             {/* Error Details */}
//             {!isSuccess && paymentData.phonpeResponse.errorCode && (
//               <div className="bg-red-50 border border-red-200 rounded-lg p-3">
//                 <p className="text-gray-600 text-xs mb-1">Error Details</p>
//                 <p className="text-red-600 font-medium text-xs">
//                   {paymentData.phonpeResponse.errorCode}
//                 </p>
//                 {paymentData.phonpeResponse.detailedErrorCode && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {paymentData.phonpeResponse.detailedErrorCode}
//                   </p>
//                 )}
//               </div>
//             )}

//             {/* Action Buttons */}
//             <div className="flex gap-2 pt-2">
//               {isSuccess ? (
//                 <>
//                   <button
//                     onClick={() => window.print()}
//                     className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
//                   >
//                     Download
//                   </button>
//                   <button
//                     onClick={() => window.location.href = '/'}
//                     className="flex-1 bg-[#EAB308] hover:bg-[#d4a007] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
//                   >
//                     Home
//                   </button>
//                 </>
//               ) : isPending ? (
//                 <>
//                   <button
//                     onClick={() => fetchPaymentStatus(transactionReference)}
//                     className="flex-1 bg-[#EAB308] hover:bg-[#d4a007] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
//                   >
//                     Refresh
//                   </button>
//                   <button
//                     onClick={() => window.location.href = '/'}
//                     className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
//                   >
//                     Home
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => window.location.href = '/payment'}
//                     className="flex-1 bg-[#EAB308] hover:bg-[#d4a007] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
//                   >
//                     Retry
//                   </button>
//                   <button
//                     onClick={() => window.location.href = '/contact'}
//                     className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
//                   >
//                     Support
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <p className="text-center text-gray-400 text-xs mt-4">
//           Ref: {transactionReference || 'N/A'}
//         </p>
//       </div>
//     </div>
//   );
// }

'use client';

import { secureApi } from '@/config/apiClient';
import { useEffect, useState } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

// --------------------
// Type Definitions
// --------------------
interface SplitInstrument {
  amount: number;
  rail: {
    type: string;
    authorizationCode: string;
  };
  instrument: {
    type: string;
    bankId: string;
    arn: string;
    brn: string;
  };
}

interface PaymentDetail {
  paymentMode: string;
  transactionId: string;
  timestamp: number;
  amount: number;
  state: string;
  errorCode?: string;
  detailedErrorCode?: string;
  splitInstruments: SplitInstrument[];
}

interface PhonePeResponse {
  orderId: string;
  state: 'COMPLETED' | 'FAILED' | 'PENDING';
  amount: number;
  expireAt: number;
  errorCode?: string;
  detailedErrorCode?: string;
  metaInfo: {
    udf1: string;
  };
  paymentDetails: PaymentDetail[];
}

interface PaymentResponseData {
  success: boolean;
  message: string;
  phonpeResponse: PhonePeResponse;
}

// --------------------
// Main Component
// --------------------
export default function PaymentResponse() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [paymentSource, setPaymentSource] = useState<'phonepe' | 'razorpay' | null>(null);
  const [transactionReference, setTransactionReference] = useState<string>('');
  const [paymentData, setPaymentData] = useState<PaymentResponseData | null>(null);
  const [razorpayData, setRazorpayData] = useState<any>(null);

  const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL;

  // --------------------
  // Detect Gateway & Fetch
  // --------------------
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const transactionReference = params.get('transactionReference'); // PhonePe param
    const status = params.get('status'); // Razorpay param

    if (transactionReference) {
      setPaymentSource('phonepe');
      setTransactionReference(transactionReference);
      fetchPhonePePayment(transactionReference);
    } else if (status) {
      setPaymentSource('razorpay');
      const razorData = {
        status: params.get('status'),
        transactionId: params.get('transactionId'),
        paymentId: params.get('paymentId'),
        paymentMode: params.get('paymentMode'),
        amount: params.get('amount'),
        time: params.get('time'),
        message: params.get('message'),
      };
      setRazorpayData(razorData);
      setLoading(false);
    } else {
      // fallback: domain-based
      const domain = window.location.hostname;
      if (domain.includes('legaldhara.in')) {
        setPaymentSource('phonepe');
      } else if (domain.includes('legaldhara.com')) {
        setPaymentSource('razorpay');
      } else {
        setError('Invalid payment response');
      }
      setLoading(false);
    }
  }, []);

  // --------------------
  // Fetch PhonePe Payment
  // --------------------
  const fetchPhonePePayment = async (ref: string) => {
    try {
      setLoading(true);
      setError(null);

      const response = await secureApi.get(`/api/v1/payment/response/${ref}`);
      const data: PaymentResponseData = response.data;

      if (!data.phonpeResponse || !data.phonpeResponse.state) {
        throw new Error('Invalid payment response structure');
      }

      setPaymentData(data);
    } catch (err: any) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        'Failed to fetch payment status';
      setError(errorMessage);
      console.error('Payment fetch error:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // --------------------
  // Helpers
  // --------------------
  const formatAmount = (amount: number | string): string => {
    const amt = Number(amount);
    if (isNaN(amt)) return '₹0.00';
    return `₹${(amt / 100).toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const formatDate = (timestamp: number | string): string => {
    try {
      return new Date(Number(timestamp)).toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });
    } catch {
      return 'Invalid date';
    }
  };

  const formatPaymentMode = (mode: string): string => {
    return (
      mode?.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()) || 'N/A'
    );
  };

  // --------------------
  // Loading
  // --------------------
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#EAB308] rounded-full border-t-transparent animate-spin"></div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Processing Payment</h2>
          <p className="text-gray-500 text-sm">Please wait while we verify your transaction...</p>
        </div>
      </div>
    );
  }

  // --------------------
  // Error
  // --------------------
  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 max-w-md w-full text-center">
          <div className="w-14 h-14 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-7 h-7 text-red-500" />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Error</h2>
          <p className="text-gray-600 text-sm mb-5">{error}</p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => transactionReference && fetchPhonePePayment(transactionReference)}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
            >
              Retry
            </button>
            <button
              onClick={() => (window.location.href = '/')}
              className="w-full bg-[#EAB308] hover:bg-[#d4a007] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // --------------------
  // RAZORPAY RESPONSE
  // --------------------
  if (paymentSource === 'razorpay' && razorpayData) {
    const isSuccess = razorpayData.status === 'success';

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            <div
              className={`${
                isSuccess ? 'bg-green-50' : 'bg-red-50'
              } p-6 text-center border-b`}
            >
              <div
                className={`w-16 h-16 ${
                  isSuccess ? 'bg-green-100' : 'bg-red-100'
                } rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                {isSuccess ? (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600" />
                )}
              </div>
              <h1
                className={`text-2xl font-bold mb-1 ${
                  isSuccess ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {isSuccess ? 'Payment Successful!' : 'Payment Failed'}
              </h1>
              <p className="text-gray-600 text-sm">
                {isSuccess
                  ? 'Your payment has been processed successfully.'
                  : razorpayData.message || 'Payment could not be completed.'}
              </p>
            </div>

            <div className="p-6 space-y-3">
              <div className="flex justify-between border-b py-2 text-sm">
                <span className="text-gray-500">Transaction ID</span>
                <span className="font-medium">{razorpayData.transactionId || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b py-2 text-sm">
                <span className="text-gray-500">Payment ID</span>
                <span className="font-medium">{razorpayData.paymentId || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b py-2 text-sm">
                <span className="text-gray-500">Mode</span>
                <span className="font-medium">{razorpayData.paymentMode || 'N/A'}</span>
              </div>
              <div className="flex justify-between border-b py-2 text-sm">
                <span className="text-gray-500">Amount</span>
                <span className="font-medium text-[#EAB308]">
                  {formatAmount(razorpayData.amount)}
                </span>
              </div>
              <div className="flex justify-between py-2 text-sm">
                <span className="text-gray-500">Time</span>
                <span className="font-medium">{formatDate(razorpayData.time)}</span>
              </div>

              <div className="flex gap-2 pt-3">
                {isSuccess ? (
                  <>
                    <button
                      onClick={() => window.print()}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg text-sm font-medium"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => (window.location.href = '/')}
                      className="flex-1 bg-[#EAB308] hover:bg-[#d4a007] text-white py-2.5 rounded-lg text-sm font-medium"
                    >
                      Home
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => (window.location.href = '/payment')}
                      className="flex-1 bg-[#EAB308] hover:bg-[#d4a007] text-white py-2.5 rounded-lg text-sm font-medium"
                    >
                      Retry
                    </button>
                    <button
                      onClick={() => (window.location.href = '/contact')}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2.5 rounded-lg text-sm font-medium"
                    >
                      Support
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mt-4">
            Ref: {razorpayData.transactionId || 'N/A'}
          </p>
        </div>
      </div>
    );
  }

  // --------------------
  // PHONEPE RESPONSE
  // --------------------
  if (paymentSource === 'phonepe' && paymentData) {
    const isSuccess = paymentData.phonpeResponse.state === 'COMPLETED';
    const isPending = paymentData.phonpeResponse.state === 'PENDING';
    const paymentDetails = paymentData.phonpeResponse.paymentDetails?.[0];

    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="max-w-lg w-full">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            <div
              className={`${
                isSuccess
                  ? 'bg-green-50 border-b border-green-100'
                  : isPending
                  ? 'bg-yellow-50 border-b border-yellow-100'
                  : 'bg-red-50 border-b border-red-100'
              } p-6 text-center`}
            >
              <div
                className={`w-16 h-16 ${
                  isSuccess
                    ? 'bg-green-100'
                    : isPending
                    ? 'bg-yellow-100'
                    : 'bg-red-100'
                } rounded-full flex items-center justify-center mx-auto mb-3`}
              >
                {isSuccess ? (
                  <CheckCircle className="w-8 h-8 text-green-600" />
                ) : isPending ? (
                  <AlertCircle className="w-8 h-8 text-yellow-600" />
                ) : (
                  <XCircle className="w-8 h-8 text-red-600" />
                )}
              </div>
              <h1
                className={`text-2xl font-bold mb-1 ${
                  isSuccess
                    ? 'text-green-700'
                    : isPending
                    ? 'text-yellow-700'
                    : 'text-red-700'
                }`}
              >
                {isSuccess
                  ? 'Payment Successful!'
                  : isPending
                  ? 'Payment Pending'
                  : 'Payment Failed'}
              </h1>
              <p className="text-gray-600 text-sm">
                {isSuccess
                  ? 'Your transaction has been completed'
                  : isPending
                  ? 'Your payment is being processed'
                  : 'Payment could not be processed'}
              </p>
            </div>

            <div className="p-6 space-y-4">
              {/* Amount */}
              <div className="bg-[#EAB308]/5 border border-[#EAB308]/20 rounded-lg p-4 text-center">
                <p className="text-gray-500 text-xs mb-1">Amount</p>
                <p className="text-3xl font-bold text-[#EAB308]">
                  {formatAmount(paymentData.phonpeResponse.amount)}
                </p>
              </div>

              {/* Transaction Details */}
              <div className="space-y-2">
                <div className="flex justify-between items-start py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-xs">Order ID</span>
                  <span className="text-gray-800 text-xs font-medium text-right max-w-[60%] break-all">
                    {paymentData.phonpeResponse.orderId || 'N/A'}
                  </span>
                </div>

                <div className="flex justify-between items-start py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-xs">Transaction ID</span>
                  <span className="text-gray-800 text-xs font-medium text-right max-w-[60%] break-all">
                    {paymentDetails?.transactionId || 'N/A'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-xs">Payment Mode</span>
                  <span className="text-gray-800 text-xs font-medium">
                    {paymentDetails?.paymentMode
                      ? formatPaymentMode(paymentDetails.paymentMode)
                      : 'N/A'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-xs">Bank</span>
                  <span className="text-gray-800 text-xs font-medium">
                    {paymentDetails?.splitInstruments?.[0]?.instrument?.bankId ||
                      'N/A'}
                  </span>
                </div>

                <div className="flex justify-between items-start py-2 border-b border-gray-100">
                  <span className="text-gray-500 text-xs">Transaction Time</span>
                  <span className="text-gray-800 text-xs font-medium text-right">
                    {paymentDetails?.timestamp
                      ? formatDate(paymentDetails.timestamp)
                      : 'N/A'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-500 text-xs">Status</span>
                  <span
                    className={`text-xs font-semibold ${
                      isSuccess
                        ? 'text-green-600'
                        : isPending
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                  >
                    {paymentData.phonpeResponse.state}
                  </span>
                </div>
              </div>

              {/* Error Details */}
              {!isSuccess && paymentData.phonpeResponse.errorCode && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-gray-600 text-xs mb-1">Error Details</p>
                  <p className="text-red-600 font-medium text-xs">
                    {paymentData.phonpeResponse.errorCode}
                  </p>
                  {paymentData.phonpeResponse.detailedErrorCode && (
                    <p className="text-red-500 text-xs mt-1">
                      {paymentData.phonpeResponse.detailedErrorCode}
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                {isSuccess ? (
                  <>
                    <button
                      onClick={() => window.print()}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                    >
                      Download
                    </button>
                    <button
                      onClick={() => (window.location.href = '/')}
                      className="flex-1 bg-[#EAB308] hover:bg-[#d4a007] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                    >
                      Home
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => transactionReference && fetchPhonePePayment(transactionReference)}
                      className="flex-1 bg-[#EAB308] hover:bg-[#d4a007] text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                    >
                      Retry
                    </button>
                    <button
                      onClick={() => (window.location.href = '/contact')}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm"
                    >
                      Support
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          <p className="text-center text-gray-400 text-xs mt-4">
            Ref: {paymentData.phonpeResponse.orderId || 'N/A'}
          </p>
        </div>
      </div>
    );
  }

  return null;
}
