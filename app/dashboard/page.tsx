'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { useAuthStore } from '@/store/useAuthStore';
import { uploadImages, type UploadedAsset } from '@/lib/uploadImage';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { secureApi } from '@/config/apiClient';
import {
  User,
  FileText,
  LogOut,
  CheckCircle,
  Clock,
  AlertCircle,
  Download,
  Eye,
  Phone,
  Mail,
  Calendar,
  Plus,
  ArrowRight,
  FileCog2,
  Upload,
  X,
  Loader2,
  ChevronRight,
  IndianRupee,
  Send,
  FileBadge,
  XCircle,
  CheckCheck,
  Activity,
  File
} from 'lucide-react';
import CertificateApplications from '@/components/CertificateApplication';
import { RazorpayCheckout } from '@/components/payments/RazorpayCheckout';
import ApplicationDetailModal from '@/components/cases/ApplicationDetailModal';

// TypeScript Interfaces
interface Service {
  id: string;
  name: string;
  note?: string;
  description: string;
  price: string;
  governmentCharges: string;

  isActive: boolean;
  createdAt: string;
  _count?: {
    applications: number;
    payments: number;
  };
}

interface Application {
  id: string;
  ticketNo: string;
  userId: string;
  serviceId: string;
  serviceFor: string | null;
  ServiceName: string;
  businessName: string | null;
  applicationStatus: 'COMPLETED' | 'IN_PROGRESS' | 'AWAITING_ACTION' | 'REJECTED';
  objectionReason: string | null;
  createdAt: string;
  autoCloseAt: string | null;
  service: {
    id: string;
    name: string;
    isActive: boolean;
  };
}




interface ApplicationDetailModalProps {
  ticketNo: string;
  onClose: () => void;
}

interface UpdateHistory {
  message: string;
  newStatus: string;
  prevStatus: string;
  createdAt: string;
  type: string | null;
  UpdateType: string | null;
  updateCharges: string;
  pendingPayment: boolean;
  pendingDocs: boolean;
  updater: {
    fullName: string;
    role: string;
  };
  meta?: {
    documents?: Array<{ urls: string[]; publicIds: string[] }>;
  };
}

interface PaymentHistory {
  id: string;
  amountMinor: number;
  currency: string;
  status: string;
  purpose: string;
  category: string;
  createdAt: string;
  paidAt: string | null;
}

interface ApplicationData {
  ticketNo: string;
  applicationStatus: string;
  objectionReason: string | null;
  businessName: string;
  serviceFor: string;
  createdAt: string;
  autoCloseAt: string | null;
  isExpired: boolean | null;
  totalPaid: number;
  paymentCount: number;
  userDetails: {
    fullName: string;
    email: string;
    phone: string;
    city: string | null;
    gender: string | null;
    dob: string | null;
  };
  serviceName: string;
  paymentHistory: PaymentHistory[];
  updateHistory: UpdateHistory[];
}

// Skeleton Loaders
const SkeletonCard = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
    <div className="flex justify-between items-start mb-4">
      <div className="flex-1 space-y-3">
        <div className="flex items-center space-x-3">
          <div className="h-6 bg-gray-200 rounded w-48"></div>
          <div className="h-6 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="flex items-center space-x-4">
          <div className="h-4 bg-gray-200 rounded w-32"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
      </div>
    </div>
  </div>
);

const ServiceCardSkeleton = () => (
  <div className="bg-white border border-gray-200 rounded-xl p-6 animate-pulse">
    <div className="space-y-4">
      <div className="flex justify-between items-start">
        <div className="h-6 bg-gray-200 rounded w-48"></div>
        <div className="h-6 bg-gray-200 rounded w-20"></div>
      </div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="flex justify-between items-center pt-2">
        <div className="h-8 bg-gray-200 rounded w-24"></div>
        <div className="h-10 bg-gray-200 rounded w-32"></div>
      </div>
    </div>
  </div>
);

// Application Detail Modal Component
function LegacyApplicationDetailModal({ ticketNo, onClose }: ApplicationDetailModalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null);
  const [message, setMessage] = useState('');
  const [documents, setDocuments] = useState<UploadedAsset[]>([]);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  useEffect(() => {
    fetchApplicationDetails();
  }, [ticketNo]);
  


  

const fetchApplicationDetails = async () => {
  try {
    setLoading(true);

    // ✅ Dynamic baseURL handled inside secureApi
    const response = await secureApi.get(`/api/v1/application/${ticketNo}`);

    const data = response.data;

    if (data.success) {
      setApplicationData(data.data);
    } else {
      throw new Error(data.message || "Failed to fetch application details");
    }
  } catch (error: any) {
    alert(error.message || "Failed to fetch application details");
  } finally {
    setLoading(false);
  }
};

const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
  const files = e.target.files;
  if (!files || files.length === 0) return;
  setUploading(true);
  const toastId = toast.loading("Uploading files...");
  try {
    const uploadedAssets = await uploadImages(Array.from(files));
    if (uploadedAssets.length === 0) throw new Error("No files were uploaded");
    setDocuments((previous) => [...previous, ...uploadedAssets]);
    toast.success("Files uploaded successfully!", { id: toastId });
  } catch {
    toast.error("Upload failed.", { id: toastId });
  } finally {
    setUploading(false);
  }
};

const handleSubmitUpdate = async () => {
  if (!message.trim()) return;
  setSubmitting(true);
  try {
    await secureApi.post(`/api/v1/application/update/${ticketNo}`, {
      message: message.trim(),
      updateType: "USER_MESSAGE",
      ...(documents.length ? { meta: { documents: documents.map(({ assetId }) => ({ assetId })) } } : {}),
    });
    setMessage("");
    setDocuments([]);
    await fetchApplicationDetails();
  } finally {
    setSubmitting(false);
  }
};


  // Major Milestones - Simplified to 4 phases
  const getMajorMilestones = (status: string) => {
    const milestones = [
      { 
        label: 'Submitted', 
        phase: 'SUBMITTED',
        icon: FileText,
        statuses: ['AWAITING_ACTION']
      },
      { 
        label: 'In Progress', 
        phase: 'IN_PROGRESS',
        icon: Activity,
        statuses: ['PAYMENT_REQUIRED', 'DATA_REQUIRED', 'UNDER_REVIEW']
      },
      { 
        label: 'Decision', 
        phase: 'DECISION',
        icon: CheckCheck,
        statuses: ['APPROVED', 'REJECTED']
      },
      { 
        label: 'Closed', 
        phase: 'CLOSED',
        icon: CheckCircle,
        statuses: ['COMPLETED', 'CLOSED']
      }
    ];

    const currentPhaseIndex = milestones.findIndex(m => 
      m.statuses.includes(status)
    );

    return milestones.map((milestone, index) => ({
      ...milestone,
      completed: index < currentPhaseIndex || (index === currentPhaseIndex && status === 'COMPLETED'),
      current: index === currentPhaseIndex
    }));
  };

  // Status Card Configuration
  const getStatusConfig = (status: string) => {
    const configs: Record<string, any> = {
      AWAITING_ACTION: {
        icon: Clock,
        color: 'blue',
        bgColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        textColor: 'text-blue-700',
        iconColor: 'text-blue-600',
        title: 'Awaiting Action',
        description: 'Your application has been received and is awaiting initial review.'
      },
      PAYMENT_REQUIRED: {
        icon: IndianRupee,
        color: 'orange',
        bgColor: 'bg-orange-50',
        borderColor: 'border-orange-200',
        textColor: 'text-orange-700',
        iconColor: 'text-orange-600',
        title: 'Payment Required',
        description: 'Please complete the payment to proceed with your application.',
        actionRequired: true
      },
      DATA_REQUIRED: {
        icon: File ,
        color: 'purple',
        bgColor: 'bg-purple-50',
        borderColor: 'border-purple-200',
        textColor: 'text-purple-700',
        iconColor: 'text-purple-600',
        title: 'Documents Required',
        description: 'Additional documents are needed to process your application.',
        actionRequired: true
      },
      UNDER_REVIEW: {
        icon: Clock,
        color: 'yellow',
        bgColor: 'bg-yellow-50',
        borderColor: 'border-yellow-200',
        textColor: 'text-yellow-700',
        iconColor: 'text-yellow-600',
        title: 'Under Review',
        description: 'Your application is currently being reviewed by our team.'
      },
      APPROVED: {
        icon: CheckCircle,
        color: 'green',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700',
        iconColor: 'text-green-600',
        title: 'Approved',
        description: 'Your application has been approved and is being processed.'
      },
      REJECTED: {
        icon: XCircle,
        color: 'red',
        bgColor: 'bg-red-50',
        borderColor: 'border-red-200',
        textColor: 'text-red-700',
        iconColor: 'text-red-600',
        title: 'Rejected',
        description: 'Your application has been rejected. Please check the details below.'
      },
      COMPLETED: {
        icon: CheckCheck,
        color: 'green',
        bgColor: 'bg-green-50',
        borderColor: 'border-green-200',
        textColor: 'text-green-700',
        iconColor: 'text-green-600',
        title: 'Completed',
        description: 'Your application has been successfully completed.'
      },
      CLOSED: {
        icon: CheckCircle,
        color: 'gray',
        bgColor: 'bg-gray-50',
        borderColor: 'border-gray-200',
        textColor: 'text-gray-700',
        iconColor: 'text-gray-600',
        title: 'Closed',
        description: 'This application has been closed.'
      }
    };

    return configs[status] || configs.AWAITING_ACTION;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const canUserRespond = applicationData?.applicationStatus === 'DATA_REQUIRED' || applicationData?.applicationStatus === 'PAYMENT_REQUIRED';

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-8 max-w-4xl w-full">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-12 w-12 text-yellow-500 animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  if (!applicationData) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-xl p-8 max-w-4xl w-full">
          <p className="text-center text-red-600">Failed to load application details</p>
          <button onClick={onClose} className="mt-4 w-full bg-gray-200 py-2 rounded">Close</button>
        </div>
      </div>
    );
  }

  const milestones = getMajorMilestones(applicationData.applicationStatus);
  const statusConfig = getStatusConfig(applicationData.applicationStatus);
  const StatusIcon = statusConfig.icon;
  const openPaymentCharge = applicationData.paymentHistory.find((payment) => payment.status === "OPEN");

  return (
    <div
      className="fixed z-[999] inset-0 bg-black/50 flex items-center justify-center  p-4 overflow-y-auto"
      onClick={onClose}
     >
      <div
        className="bg-white rounded-xl max-w-5xl w-full my-8 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        >
        <div className="bg-deep-blue text-white p-4 sm:p-6 sticky top-0 z-10">
          <div className="flex justify-between items-start sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 truncate">Application Details</h2>
              <p className="text-yellow-400 text-xs sm:text-sm">Ticket: {applicationData.ticketNo}</p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">{applicationData.serviceName}</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-all flex-shrink-0"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          {/* Major Milestones Progress */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 sm:mb-6">Application Journey</h3>
            <div className="relative">
              <div className="absolute top-5 left-0 right-0 h-0.5 bg-gray-300">
                <div
                  className="h-full bg-yellow-500 transition-all duration-500"
                  style={{
                    width: `${(milestones.filter(m => m.completed).length / milestones.length) * 100}%`
                  }}
                />
              </div>

              <div className="relative flex justify-between">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  return (
                    <div key={index} className="flex flex-col items-center" style={{ width: `${100 / milestones.length}%` }}>
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 bg-white ${
                          milestone.completed || milestone.current
                            ? 'border-yellow-500 text-yellow-500'
                            : 'border-gray-300 text-gray-400'
                        } ${milestone.current ? 'ring-4 ring-yellow-200' : ''}`}
                      >
                        <Icon className={`h-5 w-5 sm:h-6 sm:w-6`} />
                      </div>
                      <p
                        className={`mt-2 text-xs sm:text-sm font-medium text-center px-1 ${
                          milestone.completed || milestone.current ? 'text-gray-800' : 'text-gray-400'
                        }`}
                      >
                        {milestone.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Current Status Card */}
          <div className={`${statusConfig.bgColor} border ${statusConfig.borderColor} rounded-xl p-4 sm:p-6`}>
            <div className="flex items-start gap-4">
              <div className={`${statusConfig.bgColor} p-3 rounded-lg`}>
                <StatusIcon className={`h-6 w-6 sm:h-8 sm:w-8 ${statusConfig.iconColor}`} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className={`text-lg sm:text-xl font-bold ${statusConfig.textColor}`}>
                      {statusConfig.title}
                    </h3>
                    {statusConfig.actionRequired && (
                      <span className="inline-flex items-center gap-1 text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full mt-1">
                        <AlertCircle className="h-3 w-3" />
                        Action Required
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">{statusConfig.description}</p>
                
                {applicationData.objectionReason && (
                  <div className="bg-white rounded-lg p-3 border border-red-200 mt-3">
                    <p className="text-xs font-semibold text-red-700 mb-1">Reason:</p>
                    <p className="text-sm text-gray-700">{applicationData.objectionReason}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* User Details */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">User Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <p className="text-xs text-gray-500">Full Name</p>
                <p className="text-sm font-medium text-gray-800">{applicationData.userDetails.fullName}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-800 break-all">{applicationData.userDetails.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm font-medium text-gray-800">{applicationData.userDetails.phone}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Business Name</p>
                <p className="text-sm font-medium text-gray-800">{applicationData.businessName || 'N/A'}</p>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center">
              <IndianRupee className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-500" />
              Payment Summary
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">Total Paid</p>
                <p className="text-lg sm:text-xl font-bold text-green-600">₹{applicationData.totalPaid}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Payment Count</p>
                <p className="text-lg sm:text-xl font-bold text-gray-800">{applicationData.paymentCount}</p>
              </div>
            </div>
            
            {applicationData.paymentHistory.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-semibold text-gray-600 mb-2">Payment History</p>
                {applicationData.paymentHistory.map((payment, index) => (
                  <div key={index} className="bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-800">{payment.purpose}</p>
                        <p className="text-xs text-gray-500 mt-1">{formatDate(payment.createdAt)}</p>
                        <p className="text-xs text-gray-500 break-all">Charge: {payment.id}</p>
                      </div>
                      <div className="flex items-center gap-2 sm:flex-col sm:items-end">
                        <span className="text-base sm:text-lg font-bold text-gray-800">₹{(payment.amountMinor / 100).toFixed(2)}</span>
                        <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${
                          payment.status === 'PAID' ? 'bg-green-100 text-green-700' :
                          payment.status === 'FAILED' ? 'bg-red-100 text-red-700' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Section */}
          {canUserRespond && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 flex items-center">
                <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                Action Required
              </h3>

              {applicationData.applicationStatus === 'PAYMENT_REQUIRED' ? (
                <div className="space-y-4">
                  <p className="text-sm text-gray-700">
                    Payment of ₹{applicationData.updateHistory[0]?.updateCharges} is required to proceed with your application.
                  </p>
                  {openPaymentCharge ? (
                    <RazorpayCheckout
                      chargeId={openPaymentCharge.id}
                      onComplete={(chargeId) => router.push(`/payment/response?chargeId=${chargeId}`)}
                    />
                  ) : <p className="text-sm text-red-600">No payable charge is available.</p>}
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Enter your message..."
                      rows={3}
                      disabled={submitting}
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none disabled:bg-gray-100 text-sm"
                    />
                  </div>

                  {applicationData.applicationStatus === 'DATA_REQUIRED' && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Documents
                      </label>
                      <div className="flex items-center gap-3">
                        <label className="flex-1 border-2 border-dashed border-gray-300 rounded-lg px-4 py-3 text-center cursor-pointer hover:border-yellow-500 transition-colors">
                          <input
                            type="file"
                            multiple
                            onChange={handleFileUpload}
                            disabled={uploading || submitting}
                            className="hidden"
                            accept="image/*,.pdf,.doc,.docx"
                          />
                          <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                            <Upload className="h-4 w-4" />
                            {uploading ? 'Uploading...' : 'Click to upload documents'}
                          </div>
                        </label>
                      </div>
                      {documents.length > 0 && (
                        <div className="mt-2 text-sm text-green-600">
                          ✓ {documents.length} document(s) uploaded
                        </div>
                      )}
                    </div>
                  )}

                  <button
                    onClick={handleSubmitUpdate}
                    disabled={submitting || uploading || !message.trim()}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Submit Documents
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          )}

          {/* Activity Timeline */}
         <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
  <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-4 flex items-center">
    <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-yellow-500" />
    Activity Timeline
  </h3>
  <div className="space-y-3">
    {applicationData.updateHistory.map((update, index) => (
      <div key={index} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            update.updater.role === 'ADMIN' ? 'bg-red-100' : 'bg-blue-100'
          }`}>
            <User className={`h-4 w-4 ${
              update.updater.role === 'ADMIN' ? 'text-red-600' : 'text-blue-600'
            }`} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm text-gray-800">
                  {update.updater.fullName}
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded ${
                    update.updater.role === 'ADMIN' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {update.updater.role}
                  </span>
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{formatDate(update.createdAt)}</p>
              </div>
              {update.updateCharges && (
                <span className="text-yellow-600 font-bold text-sm whitespace-nowrap">
                  ₹{update.updateCharges}
                </span>
              )}
            </div>
            <p className="text-sm text-gray-700 mt-2">{update.message}</p>
            
            {update.UpdateType === 'STATUS_CHANGE' && update.prevStatus !== update.newStatus && (
              <div className="mt-2 flex items-center gap-2 text-xs flex-wrap">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded">
                  {update.prevStatus}
                </span>
                <span>→</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
                  {update.newStatus}
                </span>
              </div>
            )}

            {update.UpdateType && (
              <div className="mt-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  update.UpdateType === 'PAYMENT_FAILED' ? 'bg-red-100 text-red-700' :
                  update.UpdateType === 'PAYMENT_SUCCESS' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {update.UpdateType.replace(/_/g, ' ')}
                </span>
              </div>
            )}

            {update.meta?.documents && update.meta.documents.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-2">
                {Array.isArray(update?.meta?.documents) && update.meta.documents.length > 0 && (
  <div className="mt-2 flex flex-wrap gap-2">
    {update.meta.documents.map((doc: any, i: number) => {
      const url =
        Array.isArray(doc?.urls) && doc.urls.length > 0
          ? doc.urls[0]
          : doc?.url || null;

      if (!url) return null; // Skip invalid docs

      return (
        <Link
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded hover:bg-blue-100 transition-colors cursor-pointer inline-flex items-center gap-1"
        >
          <span>📎</span>
          <span>Document {i + 1}</span>
        </Link>
      );
    })}
  </div>
)}

              </div>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
        </div>

        <div className="border-t border-gray-200 p-4 bg-gray-50 flex justify-end sticky bottom-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-lg transition-colors font-medium text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

void LegacyApplicationDetailModal;


// Main Dashboard Component
export default function DashboardPage() {
  const router = useRouter();
  const { user, logout, isAuthenticated } = useAuthStore();
  const [applications, setApplications] = useState<Application[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [servicesLoading, setServicesLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('applications');
  const [selectedApplicationId, setSelectedApplicationId] = useState<string | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);


  

//   useEffect(()=>{
//   if(isAuthenticated){
//     router.push('/login');
//   }
//  },[]);

  useEffect(()=>{
    if(!isAuthenticated){
      toast.error("You have to login first !")
      router.replace('/login')
    }
  },[]);

  useEffect(() => {
    fetchApplications();
    fetchServices();
  }, []);


  const fetchApplications = async () => {
    try {
      setLoading(true);
      const response = await secureApi.get(`/api/v1/application/my?page=1&limit=30`, {
        withCredentials: true,
      });
      if (response) {
        setApplications(response.data.data || []);
      }
    } catch {
    } finally {
      setLoading(false);
    }
  };

  const fetchServices = async () => {
    try {
      setServicesLoading(true);
      const response = await secureApi.get(`/api/v1/service/services?page=1&limit=100`);
      if (response) {
        setServices(response.data.services || []);
      }
    } catch {
    } finally {
      setServicesLoading(false);
    }
  };

  const handleLogout = async () => {
    logout();
    router.push('/');
  };




 const handleFileUpload = async (files: FileList | null) => {
  if (!files || files.length === 0) {
    toast.error("Please select at least one file to upload.");
    return [];
  }

  const fileArray = Array.from(files);
  setUploadedFiles(fileArray);

  // Generate local preview URLs
  const previews = fileArray.map((file) => URL.createObjectURL(file));
  setPreviewUrls(previews);

  setUploading(true);
  const toastId = toast.loading("Uploading files...");

  try {
    const uploadedAssets = await uploadImages(fileArray);
    if (uploadedAssets.length === 0) {
      toast.dismiss(toastId);
      toast.error("No files were uploaded. Please try again.");
      return [];
    }

    const uploadResults = await Promise.all(
      uploadedAssets.map(async ({ assetId }) => {
        try {
          const payload = {
            title: "Documents",
            description: "Documents",
            assetId,
          };

          const response = await secureApi.post("/api/v1/document", payload);
          return response.data;
        } catch (err: any) {
          toast.error(err.response?.data?.message || "Failed to save document.");
          return null;
        }
      })
    );

    toast.dismiss(toastId);
    toast.success("All documents uploaded successfully!");

    return uploadResults.filter(Boolean);
  } catch (error: any) {
    toast.dismiss(toastId);
    toast.error(error.message || "Upload failed. Try again.");
    return [];
  } finally {
    setUploading(false);
  }
};



  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileUpload(e.dataTransfer.files);
  };


  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
  };

  const getStatusColor = (status: Application['applicationStatus']) => {
    switch (status) {
      case 'COMPLETED': return 'bg-green-100 text-green-800 border-green-200';
      case 'IN_PROGRESS': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'AWAITING_ACTION': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'REJECTED': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: Application['applicationStatus']) => {
    switch (status) {
      case 'COMPLETED': return <CheckCircle className="h-4 w-4" />;
      case 'IN_PROGRESS': return <Clock className="h-4 w-4" />;
      case 'AWAITING_ACTION': return <AlertCircle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const formatStatus = (status: string) => {
    return status.replace(/_/g, ' ').toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const completedCount = applications.filter(app => app.applicationStatus === 'COMPLETED').length;
  const inProgressCount = applications.filter(app => app.applicationStatus === 'IN_PROGRESS').length;
  const awaitingCount = applications.filter(app => app.applicationStatus === 'AWAITING_ACTION').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#071B34] to-[#0a2647] shadow-xl">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#EAB308] to-[#F2C79A] rounded-full flex items-center justify-center shadow-lg">
                <User className="h-8 w-8 text-[#071B34]" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Welcome Back!</h1>
                <p className="text-[#F2C79A]">{user?.name || 'User'}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-10">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-l-[#EAB308] hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Total Applications</p>
                <p className="text-4xl font-bold text-[#071B34]">{applications.length}</p>
              </div>
              <FileText className="h-12 w-12 text-[#EAB308]" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-l-green-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Completed</p>
                <p className="text-4xl font-bold text-green-600">{completedCount}</p>
              </div>
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-l-blue-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">In Progress</p>
                <p className="text-4xl font-bold text-blue-600">{inProgressCount}</p>
              </div>
              <Clock className="h-12 w-12 text-blue-500" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-l-yellow-500 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-2 font-medium">Awaiting Action</p>
                <p className="text-4xl font-bold text-yellow-600">{awaitingCount}</p>
              </div>
              <AlertCircle className="h-12 w-12 text-yellow-500" />
            </div>
          </motion.div>
        </div>

        {/* Document Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg mb-10 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-[#071B34] to-[#0a2647] p-6">
            <h2 className="text-2xl font-bold text-white flex items-center">
              <Upload className="h-6 w-6 mr-3 text-[#EAB308]" />
              Upload Documents
            </h2>
            <p className="text-[#F2C79A] mt-1">Upload documents for admin review</p>
          </div>

          <div className="p-8">
            <div
              className={`border-3 border-dashed rounded-2xl p-12 text-center transition-all ${isDragging
                  ? "border-[#EAB308] bg-yellow-50"
                  : "border-gray-300 bg-gray-50 hover:border-[#EAB308] hover:bg-yellow-50"
                }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <Upload className="h-16 w-16 text-[#EAB308] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#071B34] mb-2">
                Drag & Drop your files here
              </h3>
              <p className="text-gray-600 mb-6">or click to browse</p>

              <input
                type="file"
                multiple
                onChange={(e) => handleFileUpload(e.target.files)}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className={`inline-flex items-center px-8 py-3 rounded-xl font-semibold cursor-pointer shadow-lg hover:shadow-xl transition-all ${uploading
                    ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                    : "bg-[#EAB308] text-[#071B34] hover:bg-[#d9a307]"
                  }`}
              >
                <Plus className="h-5 w-5 mr-2" />
                {uploading ? "Uploading..." : "Choose Files"}
              </label>
            </div>

           {/* ✅ Preview Section */}
{previewUrls.length > 0 && uploadedFiles.length > 0 && (
  <div className="mt-8">
    <h4 className="font-semibold text-[#071B34] text-lg mb-4">
      Preview Files ({previewUrls.length})
    </h4>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {previewUrls.map((url, index) => {
        const file = uploadedFiles[index];
        const fileType = file?.type || "";

        const isImage = fileType.startsWith("image/");
        const isPdf = fileType === "application/pdf";

        return (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg bg-white transition-shadow"
          >
            {isImage ? (
              // ⭐ Image Preview
              <img
                src={url}
                alt="Preview"
                className="w-full h-40 object-cover"
              />
            ) : isPdf ? (
              // ⭐ PDF Preview (Icon)
              <div className="flex flex-col items-center justify-center h-40 text-red-600 bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 2a2 2 0 00-2 2v16a2..." />
                </svg>
                <p className="text-sm font-semibold mt-2">PDF File</p>
              </div>
            ) : (
              // ⭐ Generic file icon for docs, txt, zip, etc.
              <div className="flex flex-col items-center justify-center h-40 text-gray-600 bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 2H6a2 2..." />
                </svg>
                <p className="text-sm font-medium mt-2">{file?.name}</p>
              </div>
            )}

            {/* ❌ Delete Button */}
            <button
              onClick={() => removeFile(index)}
              className="absolute top-2 right-2 bg-white/80 text-red-600 rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        );
      })}
    </div>
  </div>
)}

          </div>
        </motion.div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('applications')}
              className={`flex-1 px-6 py-5 font-semibold transition-all ${activeTab === 'applications'
                  ? 'bg-[#EAB308] text-[#071B34] border-b-4 border-[#071B34]'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <FileText className="h-5 w-5 inline mr-2" />
              My Applications
            </button>
            <button
              onClick={() => setActiveTab('services')}
              className={`flex-1 px-6 py-5 font-semibold transition-all ${activeTab === 'services'
                  ? 'bg-[#EAB308] text-[#071B34] border-b-4 border-[#071B34]'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <FileCog2 className="h-5 w-5 inline mr-2" />
              Service Hub
            </button>
            
            <button
              onClick={() => setActiveTab('Certificates')}
              className={`flex-1 px-6 py-5 font-semibold transition-all ${activeTab === 'Certificates'
                  ? 'bg-[#EAB308] text-[#071B34] border-b-4 border-[#071B34]'
                  : 'text-gray-600 hover:bg-gray-50'
                }`}
            >
              <FileBadge className="h-5 w-5 inline mr-2" />
              Certificates
            </button>
          </div>

          {/* Applications Tab */}
          {activeTab === 'applications' && (
            <div className="p-4 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 sm:mb-8 gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#071B34]">My Applications</h2>
                  <p className="text-sm sm:text-base text-gray-600 mt-1">Track the status of all your service applications</p>
                </div>
              </div>

              {loading ? (
                <div className="space-y-4">
                  {[...Array(3)].map((_, i) => (
                    <SkeletonCard key={i} />
                  ))}
                </div>
              ) : applications.length === 0 ? (
                <div className="text-center py-12 sm:py-20 px-4">
                  <FileCog2 className="h-16 sm:h-20 w-16 sm:w-20 text-gray-300 mx-auto mb-4 sm:mb-6" />
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-2 sm:mb-3">No Applications Yet</h3>
                  <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">Start by applying for a service from the Service Hub</p>
                  <button
                    className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#EAB308] text-[#071B34] rounded-xl hover:bg-[#d9a307] transition-all font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
                    onClick={() => setActiveTab('services')}
                  >
                    Browse Services
                  </button>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-5">
                  {applications.map((application) => (
                    <motion.div
                      key={application.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-xl hover:border-[#EAB308] transition-all duration-300"
                    >
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                            <h3 className="font-bold text-lg sm:text-xl text-[#071B34]">
                              {application.ServiceName || application.service?.name}
                            </h3>
                            <span className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border w-fit ${getStatusColor(application.applicationStatus)}`}>
                              {getStatusIcon(application.applicationStatus)}
                              {formatStatus(application.applicationStatus)}
                            </span>
                          </div>
                          {application.businessName && (
                            <p className="text-sm sm:text-base text-gray-600 mb-3">
                              Business: <span className="font-semibold text-[#071B34]">{application.businessName}</span>
                            </p>
                          )}
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 text-gray-500 text-sm sm:text-base">
                            <span className="flex items-center">
                              <Calendar className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-[#EAB308]" />
                              {formatDate(application.createdAt)}
                            </span>
                            <span className="flex items-center">
                              <FileText className="h-4 sm:h-5 w-4 sm:w-5 mr-2 text-[#EAB308]" />
                              {application.ticketNo}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:ml-6">
                          <button
                            onClick={() => setSelectedApplicationId(application.ticketNo)}
                            className="flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#071B34] text-white rounded-lg sm:rounded-xl hover:bg-[#0a2647] transition-all font-semibold shadow-md hover:shadow-lg text-sm sm:text-base"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </button>
                          {/* {application.applicationStatus === 'COMPLETED' && (
                            <button className="flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 bg-[#EAB308] text-[#071B34] rounded-lg sm:rounded-xl hover:bg-[#d9a307] transition-all font-semibold shadow-md hover:shadow-lg text-sm sm:text-base">
                              <Download className="h-4 w-4 mr-2" />
                              Download
                            </button>
                          )} */}
                        </div>
                      </div>
                      {application.objectionReason && (
                        <div className="mt-4 p-3 sm:p-4 bg-red-50 border-2 border-red-200 rounded-lg sm:rounded-xl">
                          <p className="text-sm sm:text-base text-red-700">
                            <span className="font-bold">Objection: </span>
                            {application.objectionReason}
                          </p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[#071B34]">Service Hub</h2>
                <p className="text-gray-600 mt-1">Browse and apply for our services</p>
              </div>

              {servicesLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(6)].map((_, i) => (
                    <ServiceCardSkeleton key={i} />
                  ))}
                </div>
              ) : services.length === 0 ? (
                <div className="text-center py-20">
                  <FileCog2 className="h-20 w-20 text-gray-300 mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">No Services Available</h3>
                  <p className="text-gray-500">Please check back later for available services</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white border-2 border-gray-200 rounded-2xl p-4 md:p-6 hover:shadow-2xl hover:border-[#EAB308] transition-all duration-300 group flex flex-col"
                    >
                      {/* Header Section */}
                      <div className="space-y-3 flex-grow">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-bold text-lg md:text-xl text-[#071B34] group-hover:text-[#EAB308] transition-colors leading-tight">
                            {service.name}
                          </h3>
                          {service.isActive && (
                            <span className="px-2 md:px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full border border-green-200 whitespace-nowrap">
                              Active
                            </span>
                          )}
                        </div>

                        <p className="text-gray-600 text-sm md:text-base line-clamp-3 min-h-[60px] md:min-h-[72px]">
                          {service.description}
                        </p>

                        {service.note && (
                          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 border border-blue-200">
                            {service.note}
                          </div>
                        )}
                      </div>

                      {/* Pricing Section - Improved Layout */}
                      <div className="mt-4 pt-4 border-t-2 border-gray-100 space-y-4">
                        {/* Price Details */}
                        <div className="grid grid-cols-2 gap-3">
                          {/* Our Fee */}
                          <div className="bg-gradient-to-br from-[#EAB308]/10 to-[#EAB308]/5 rounded-lg p-3 border border-[#EAB308]/20">
                            <p className="text-xs text-gray-600 mb-1 font-medium">Our Fee</p>
                            <p className="text-xl md:text-2xl font-bold text-[#071B34] flex items-center">
                              <IndianRupee className="h-4 w-4 md:h-5 md:w-5" />
                              {service.price.toLocaleString()}
                            </p>
                          </div>

                          {/* Govt Charges */}
                          <div className="bg-gradient-to-br from-[#071B34]/10 to-[#071B34]/5 rounded-lg p-3 border border-[#071B34]/20">
                            <p className="text-xs text-gray-600 mb-1 font-medium">Govt Fee</p>
                            <p className="text-xl md:text-2xl font-bold text-[#071B34] flex items-center">
                              <IndianRupee className="h-4 w-4 md:h-5 md:w-5" />
                              {service.governmentCharges.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        {/* Total Price Banner */}
                        <div className="bg-gradient-to-r from-[#071B34] to-[#0a2347] rounded-lg p-3 text-white">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">Total Amount</span>
                            <span className="text-2xl md:text-3xl font-bold flex items-center gap-1">
                              <IndianRupee className="h-5 w-5 md:h-6 md:w-6" />
                              <span>{(Number(service.price || 0) + Number(service.governmentCharges || 0)).toLocaleString()}
                              </span>
                            </span>
                          </div>
                          <p className="text-xs text-gray-300 mt-1">Including all charges</p>
                        </div>

                        {/* Apply Button */}
                        <button
                          className="w-full flex items-center justify-center px-4 py-3 bg-[#EAB308] text-[#071B34] rounded-xl hover:bg-[#d9a307] transition-all font-semibold shadow-lg hover:shadow-xl group-hover:scale-105 text-sm md:text-base"
                          onClick={() => router.push(`/apply?serviceId=${service.id}&serviceName=${encodeURIComponent(service.name)}&servicePrice=${encodeURIComponent(service.price)}&governmentCharges=${encodeURIComponent(service.governmentCharges)}`)}
                        >
                          Apply Now
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5 ml-2" />
                        </button>
                      </div>

                      {/* Footer Info */}
                      {service._count && (
                        <div className="flex items-center justify-center text-xs text-gray-500 pt-3 mt-2 border-t border-gray-100">
                          <FileText className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                          <span>{service._count.applications} applications completed</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'Certificates' && (
            <div className="p-8">
             <div className="mb-8 flex items-center justify-between">
  <div>
    <h2 className="text-3xl font-bold text-[#071B34]">My Certificate</h2>
    <p className="text-gray-600 mt-1">Check your certificates status</p>
  </div>

 <Link
  href="/services/documentation"
  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-brand-orange rounded-lg shadow hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
>
  <Plus className="w-4 h-4" />
  Apply for Certificate
</Link>

</div>

              <CertificateApplications />
             
            </div>
          )}

          
        </div>
           {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10  max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#071B34] to-[#0a2847] rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex-1 min-w-[200px]">
                <h3 className="text-xl font-bold text-white mb-1">Need Assistance?</h3>
                <p className="text-gray-300 text-sm">We're here to help you</p>
              </div>

              <div className="flex gap-3 flex-wrap">
                <Link
                  href="tel:+919424440004"
                  className="flex items-center px-5 py-2.5 bg-white text-[#071B34] rounded-lg hover:bg-gray-100 transition-all font-medium shadow-md hover:shadow-lg group"
                >
                  <Phone className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Call Us
                </Link>

                <Link
                  href="info@legaldhara.com"
                  className="flex items-center px-5 py-2.5 bg-[#EAB308] text-[#071B34] rounded-lg hover:bg-[#fbbf24] transition-all font-medium shadow-md hover:shadow-lg group"
                >
                  <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Email Support
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Application Detail Modal */}
      <AnimatePresence>
        {selectedApplicationId && (
          <ApplicationDetailModal
            ticketNo={selectedApplicationId}
            onClose={() => setSelectedApplicationId(null)}
          />
        )}
      </AnimatePresence>

      {/* <CertificateApplications /> */}

      
     
    </div>
  );
}
