import React, { useState, useEffect } from 'react';
import { X, Upload, FileText, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { secureApi } from '@/config/apiClient';
import { uploadImages } from '@/lib/uploadImage';
import { RazorpayCheckout } from '@/components/payments/RazorpayCheckout';

interface CertificateDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestNo: string;
}

interface UpdateHistory {
  chargesRequired: string | null;
  message: string;
  transactionId: string | null;
  attachmentUrl: string | null;
  attachmentPublicId: string | null;
  updateType: string;
  createdAt: string;
  updater: {
    fullName: string;
    role: string;
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

interface CertificateData {
  requestNo: string;
  subject: string;
  description: string;
  status: string;
  docRequired: boolean;
  pendingPayment: boolean;
  isResolved: boolean;
  createdAt: string;
  resolvedAt: string | null;
  totalPaid: number;
  paymentCount: number;
  latestUpdate: UpdateHistory;
  userDetails: {
    fullName: string;
    email: string;
    phone: string;
  };
  paymentHistory: PaymentHistory[];
  updateHistory: UpdateHistory[];
}

const statusConfig = {
  PENDING: { color: 'bg-yellow-500', icon: Clock, label: 'Pending' },
  UNDER_REVIEW: { color: 'bg-blue-500', icon: Clock, label: 'Under Review' },
  APPROVED: { color: 'bg-green-500', icon: CheckCircle, label: 'Approved' },
  REJECTED: { color: 'bg-red-500', icon: XCircle, label: 'Rejected' },
  COMPLETED: { color: 'bg-green-600', icon: CheckCircle, label: 'Completed' },
  CLOSED: { color: 'bg-gray-500', icon: XCircle, label: 'Closed' },
};

export default function CertificateDetailsModal({
  isOpen,
  onClose,
  requestNo,
}: CertificateDetailsModalProps) {
  const [data, setData] = useState<CertificateData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [isSubmittingDoc, setIsSubmittingDoc] = useState(false);
  
  
  useEffect(() => {
    if (isOpen && requestNo) {
      fetchCertificateDetails();
    }
  }, [isOpen, requestNo]);

  const fetchCertificateDetails = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await secureApi.get(`/api/v1/certificate/${requestNo}`);
      if (response.data.success) {
        setData(response.data.data);
        console.log(response.data);
      } else {
        setError(response.data.message || 'Failed to fetch details');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to fetch certificate details');
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };



const handleDocumentSubmit = async () => {
  if (!message.trim() && selectedFiles.length === 0) {
    alert("Please provide a message or upload a document");
    return;
  }

  setIsSubmittingDoc(true);

  try {
    let attachmentAssetId: string | undefined;

    if (selectedFiles.length > 0) {
      setIsUploading(true);

      const uploadedAssets = await uploadImages(
        selectedFiles,
        setUploadProgress
      );
      attachmentAssetId = uploadedAssets[0]?.assetId;

      setIsUploading(false);
    }

    const response = await secureApi.put(
      `/api/v1/certificate/${requestNo}/update`,
      {
        message: message.trim(),
        attachmentAssetId,
      }
    );

    if (response.data.success) {
      setMessage("");
      setSelectedFiles([]);
      setUploadProgress(0);
      fetchCertificateDetails();
      alert("Document submitted successfully");
    }
  } catch (err: any) {
    alert(err.response?.data?.message || "Failed to submit document");
  } finally {
    setIsSubmittingDoc(false);
  }
};





  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-deep-blue text-white px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Certificate Request Details</h2>
            <p className="text-sm text-brand-orange2">{requestNo}</p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white/10 rounded-full p-2 transition"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-brand-orange border-t-transparent"></div>
            </div>
          ) : error ? (
            <div className="p-6 text-center text-red-600">
              <AlertCircle className="w-12 h-12 mx-auto mb-3" />
              <p>{error}</p>
            </div>
          ) : data ? (
            <div className="p-6 space-y-6">
              {/* Basic Info */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <h3 className="font-semibold text-deep-blue text-lg">{data.subject}</h3>
                <p className="text-gray-600">{data.description}</p>
                <div className="flex items-center gap-2 mt-3">
                  <span className="text-sm font-medium text-gray-700">Status:</span>
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      statusConfig[data.status as keyof typeof statusConfig]?.color || 'bg-gray-500'
                    }`}
                  >
                    {statusConfig[data.status as keyof typeof statusConfig]?.label || data.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-3 text-sm">
                  <div>
                    <span className="text-gray-600">Created:</span>
                    <span className="ml-2 font-medium">{formatDate(data.createdAt)}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Total Paid:</span>
                    <span className="ml-2 font-medium text-green-600">₹{data.totalPaid}</span>
                  </div>
                </div>
              </div>

              {/* User Details */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-deep-blue mb-2">Applicant Details</h4>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Name:</span> {data.userDetails.fullName}</p>
                  <p><span className="font-medium">Email:</span> {data.userDetails.email}</p>
                  <p><span className="font-medium">Phone:</span> {data.userDetails.phone}</p>
                </div>
              </div>

              {/* Payment Required */}
              {data.pendingPayment && data.latestUpdate?.chargesRequired && (
                <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-deep-blue mb-1">Payment Required</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        Additional charges: <span className="font-bold text-lg">₹{data.latestUpdate.chargesRequired}</span>
                      </p>
                      <p className="text-sm text-gray-600">{data.latestUpdate.message}</p>
                    </div>
                    {data.paymentHistory.find((payment) => payment.status === "OPEN") ? (
                      <RazorpayCheckout
                        chargeId={data.paymentHistory.find((payment) => payment.status === "OPEN")!.id}
                        onComplete={() => fetchCertificateDetails()}
                      />
                    ) : <p className="text-sm text-red-600">No payable charge is available.</p>}
                  </div>
                </div>
              )}

              {/* Document Upload */}
              {data.docRequired && (
                <div className="bg-orange-50 border-2 border-brand-orange rounded-lg p-4">
                  <h4 className="font-semibold text-deep-blue mb-3 flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Document Required
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange resize-none"
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Upload Document
                      </label>
                      <input
                        type="file"
                        onChange={handleFileSelect}
                        accept="image/*,.pdf"
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-brand-orange file:text-deep-blue hover:file:bg-brand-orange/90"
                      />
                      {selectedFiles.length > 0 && (
                        <p className="mt-2 text-sm text-gray-600">
                          {selectedFiles.length} file(s) selected
                        </p>
                      )}
                    </div>

                    {isUploading && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-brand-orange h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    )}

                    <button
                      onClick={handleDocumentSubmit}
                      disabled={isSubmittingDoc || isUploading}
                      className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white font-semibold px-6 py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmittingDoc ? 'Submitting...' : isUploading ? 'Uploading...' : 'Submit Document'}
                    </button>
                  </div>
                </div>
              )}

              {/* Update History with Dynamic Stepper */}
              <div>
                <h4 className="font-semibold text-deep-blue mb-4 text-lg">Update History</h4>
                <div className="relative">
                  {data.updateHistory.map((update, index) => {
                    const isLast = index === data.updateHistory.length - 1;
                    const isStatusChange = update.updateType === 'STATUS_CHANGE';
                    const isUserMessage = update.updateType === 'USER_MESSAGE';
                    const isAdminMessage = update.updateType === 'ADMIN_MESSAGE';

                    return (
                      <div key={index} className="relative pb-8">
                        {!isLast && (
                          <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-gray-300" />
                        )}
                        
                        <div className="flex gap-4">
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center z-10 ${
                              isStatusChange
                                ? 'bg-brand-orange text-white'
                                : isUserMessage
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-400 text-white'
                            }`}
                          >
                            {isStatusChange ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : isUserMessage ? (
                              <Upload className="w-4 h-4" />
                            ) : (
                              <FileText className="w-4 h-4" />
                            )}
                          </div>

                          <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <p className="font-semibold text-deep-blue">
                                  {update.updater.fullName}
                                </p>
                                <span className="text-xs text-gray-500">
                                  {update.updater.role}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                {formatDate(update.createdAt)}
                              </span>
                            </div>

                            <p className="text-gray-700 text-sm mb-2">{update.message}</p>

                            {update.chargesRequired && parseFloat(update.chargesRequired) > 0 && (
                              <div className="bg-yellow-100 px-3 py-1 rounded inline-block text-sm font-medium text-yellow-800">
                                Charges: ₹{update.chargesRequired}
                              </div>
                            )}

                            {update.attachmentUrl && (
                              <a
                                href={update.attachmentUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-2 text-sm text-brand-orange hover:underline"
                              >
                                <FileText className="w-4 h-4" />
                                View Attachment
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Payment History */}
              {data.paymentHistory.length > 0 && (
                <div>
                  <h4 className="font-semibold text-deep-blue mb-3 text-lg">Payment History</h4>
                  <div className="space-y-2">
                    {data.paymentHistory.map((payment, index) => (
                      <div
                        key={index}
                        className="bg-green-50 border border-green-200 rounded-lg p-3 flex justify-between items-center"
                      >
                        <div>
                          <p className="font-medium text-gray-800">₹{(payment.amountMinor / 100).toFixed(2)}</p>
                          <p className="text-sm text-gray-600">{payment.purpose}</p>
                          <p className="text-xs text-gray-500">
                            {payment.category} • {formatDate(payment.createdAt)}
                          </p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            payment.status === 'PENDING'
                              ? 'bg-yellow-200 text-yellow-800'
                              : payment.status === 'PAID'
                              ? 'bg-green-200 text-green-800'
                              : 'bg-gray-200 text-gray-800'
                          }`}
                        >
                          {payment.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
