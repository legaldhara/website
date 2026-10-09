import React, { useState, useEffect } from 'react';
import { FileText, Clock, CheckCircle, XCircle, AlertCircle, Calendar, User, BadgeCheck, CreditCard, Lock, CheckCircle2 } from 'lucide-react';
import { secureApi } from '@/config/apiClient';
import CertificateDetailsModal from './CertificateDetailsModel';

// Types
interface User {
  fullName: string;
  email: string;
  phone: string;
}

interface Update {
  message: string;
  attachmentUrl: string | null;
  createdAt: string;
  updateType: 'STATUS_CHANGE' | 'COMMENT' | 'DOCUMENT';
}

interface CertificateApplication {
  requestNo: string;
  subject: string;
  description: string;
  status: 'PENDING' | 'SUBMITTED' | 'UNDER_REVIEW' | 'ACTION_REQUIRED' | 'PAYMENT_REQUIRED' | 'APPROVED' | 'REJECTED' | 'COMPLETED' | 'CLOSED';
  isResolved: boolean;
  createdAt: string;
  resolvedAt: string | null;
  updates: Update[];
  user: User;
}

interface ApiResponse {
  success: boolean;
  data: CertificateApplication[];
}

interface StatusConfig {
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}

type FilterStatus = 'ALL' | CertificateApplication['status'];

const CertificateApplications: React.FC = () => {
  const [applications, setApplications] = useState<CertificateApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<FilterStatus>('ALL');
  const [selectedRequestNo, setSelectedRequestNo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async (): Promise<void> => {
    try {
      setLoading(true);

      const response = await secureApi.get(`/api/v1/certificate/user/all`);

      const data: ApiResponse = response.data;

      if (data.success) {
        setApplications(data.data);
      } else {
        throw new Error("Failed to fetch applications");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Failed to load applications. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

const getStatusConfig = (
  status: CertificateApplication["status"]
): StatusConfig => {
  const configs: Record<CertificateApplication["status"], StatusConfig> = {
    PENDING: {
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
      icon: Clock,
      label: "Pending",
    },
    SUBMITTED: {
      color: "bg-yellow-50 text-yellow-700 border-yellow-200",
      icon: Clock,
      label: "Submitted",
    },
    UNDER_REVIEW: {
      color: "bg-blue-50 text-blue-700 border-blue-200",
      icon: AlertCircle,
      label: "Under Review",
    },
    ACTION_REQUIRED: {
      color: "bg-orange-50 text-orange-700 border-orange-200",
      icon: AlertCircle,
      label: "Action Required",
    },
    APPROVED: {
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: BadgeCheck,
      label: "Approved",
    },
    REJECTED: {
      color: "bg-red-50 text-red-700 border-red-200",
      icon: XCircle,
      label: "Rejected",
    },
    COMPLETED: {
      color: "bg-green-50 text-green-700 border-green-200",
      icon: CheckCircle2,
      label: "Completed",
    },
    PAYMENT_REQUIRED: {
      color: "bg-orange-50 text-orange-700 border-orange-200",
      icon: CreditCard,
      label: "Payment Required",
    },
    CLOSED: {
      color: "bg-gray-50 text-gray-700 border-gray-200",
      icon: Lock,
      label: "Closed",
    },
  };

  return configs[status];
};

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleViewDetails = (requestNo: string): void => {
    setSelectedRequestNo(requestNo);
    setIsModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setIsModalOpen(false);
    setSelectedRequestNo(null);
    // Refresh applications list to get updated data
    fetchApplications();
  };

  const filteredApplications = filterStatus === 'ALL' 
    ? applications 
    : applications.filter(app => app.status === filterStatus);

  const statusCounts = applications.reduce<Record<string, number>>((acc, app) => {
    acc[app.status] = (acc[app.status] || 0) + 1;
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#BC9139]"></div>
          <p className="mt-4 text-[#111111] text-lg font-medium">Loading your applications...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <div className="bg-white border-2 border-red-200 rounded-lg shadow-lg p-6 max-w-md w-full">
          <XCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <p className="text-red-800 text-center font-medium">{error}</p>
          <button 
            onClick={fetchApplications}
            className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-lg border-2 border-gray-200 py-6 px-4 sm:px-6">
        <div>
          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
              <p className="text-gray-600 text-sm mb-1">Total Applications</p>
              <p className="text-3xl font-bold text-[#111111]">{applications.length}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-yellow-200">
              <p className="text-gray-600 text-sm mb-1">Pending</p>
              <p className="text-3xl font-bold text-yellow-600">{statusCounts.PENDING || 0}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-green-200">
              <p className="text-gray-600 text-sm mb-1">Approved</p>
              <p className="text-3xl font-bold text-green-600">{statusCounts.APPROVED || 0}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-blue-200">
              <p className="text-gray-600 text-sm mb-1">Under Review</p>
              <p className="text-3xl font-bold text-blue-600">{statusCounts.UNDER_REVIEW || 0}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap gap-2">
            {(['ALL', 'PENDING', 'UNDER_REVIEW', 'APPROVED', 'REJECTED'] as FilterStatus[]).map(status => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filterStatus === status
                    ? 'bg-[#BC9139] text-white shadow-md'
                    : 'bg-white text-[#111111] border border-gray-200 hover:border-[#BC9139] hover:shadow-md'
                }`}
              >
                {status.replace('_', ' ')}
              </button>
            ))}
          </div>

          {/* Applications List */}
          {filteredApplications.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center shadow-md border border-gray-200">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No applications found</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredApplications.map((app) => {
                const statusConfig = getStatusConfig(app.status);
                const StatusIcon = statusConfig?.icon;

                return (
                  <div 
                    key={app.requestNo}
                    className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-[#BC9139] transition"
                  >
                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-start gap-3 mb-3">
                            <FileText className="w-6 h-6 text-[#BC9139] flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg sm:text-xl font-bold text-[#111111] mb-1 break-words">
                                {app.subject}
                              </h3>
                              <p className="text-gray-500 text-sm font-mono">
                                {app.requestNo}
                              </p>
                            </div>
                          </div>

                          <p className="text-gray-700 text-sm sm:text-base mb-4 line-clamp-2">
                            {app?.description}
                          </p>

                          <div className="flex flex-wrap items-center gap-3 text-sm">
                            <div className="flex items-center gap-2 text-gray-600">
                              <Calendar className="w-4 h-4" />
                              <span className="text-xs sm:text-sm">{formatDate(app.createdAt)}</span>
                            </div>
                            {app?.updates?.length > 0 && (
                              <div className="flex items-center gap-1 bg-[#E7E2D8] px-2 py-1 rounded">
                                <AlertCircle className="w-4 h-4 text-[#111111]" />
                                <span className="text-[#111111] text-xs sm:text-sm font-medium">
                                  {app?.updates?.length} Update{app.updates.length !== 1 ? 's' : ''}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end gap-3">
                          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border ${statusConfig?.color} text-xs sm:text-sm font-semibold whitespace-nowrap`}>
                            <StatusIcon className="w-4 h-4" />
                            {statusConfig?.label}
                          </div>

                          <button
                            onClick={() => handleViewDetails(app.requestNo)}
                            className="px-4 py-2 bg-[#BC9139] hover:bg-[#BC9139] text-[#111111] font-semibold rounded-lg transition text-sm whitespace-nowrap"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Certificate Details Modal */}
      {selectedRequestNo && (
        <CertificateDetailsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          requestNo={selectedRequestNo}
        />
      )}
    </>
  );
};

export default CertificateApplications;
