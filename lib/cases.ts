import axios from "axios";
import { secureApi } from "@/config/apiClient";

export type RequestCaseStatus = "SUBMITTED" | "UNDER_REVIEW" | "ACTION_REQUIRED" | "APPROVED" | "REJECTED" | "COMPLETED" | "CLOSED";
export type CaseAction = "START_REVIEW" | "REQUEST_DOCUMENTS" | "REQUEST_PAYMENT" | "CANCEL_REQUIREMENT" | "APPROVE" | "REJECT" | "ATTACH_DELIVERABLE" | "COMPLETE" | "CLOSE" | "POST_MESSAGE";

export interface CaseAsset { id: string; label: string | null; secureUrl: string; mimeType: string; originalName: string; sizeBytes: number; }
export interface CaseEvent { id: string; type: string; message: string | null; previousStatus: RequestCaseStatus | null; newStatus: RequestCaseStatus | null; actorRole: "ADMIN" | "COADMIN" | "USER" | "SYSTEM"; createdAt: string; }
export interface CaseRequirement {
  id: string;
  type: "DOCUMENTS" | "PAYMENT";
  status: "OPEN" | "SATISFIED" | "CANCELLED";
  title: string;
  instructions: string | null;
  documentLabels: string[];
  dueAt: string | null;
  payment: { id: string; amountMinor: number; currency: string; purpose: string; status: string } | null;
  assets: CaseAsset[];
}
export interface LifecycleResponse {
  case: { id: string; type: "APPLICATION" | "CERTIFICATE"; status: RequestCaseStatus; version: number; submittedAt: string; approvedAt: string | null; rejectedAt: string | null; completedAt: string | null; closedAt: string | null };
  timeline: CaseEvent[];
  requirements: CaseRequirement[];
  deliverables: CaseAsset[];
  availableActions: CaseAction[];
}

export const createCaseCommand = (expectedVersion: number) => ({
  expectedVersion,
  idempotencyKey: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
});

export const lifecycleFromResponse = (response: { lifecycle?: LifecycleResponse | null; data?: { lifecycle?: LifecycleResponse | null } }): LifecycleResponse | null =>
  response.lifecycle ?? response.data?.lifecycle ?? null;

export const getCaseLifecycle = async (caseId: string): Promise<LifecycleResponse> => {
  const response = await secureApi.get<{ data: LifecycleResponse }>(`/api/v1/cases/${caseId}`);
  return response.data.data;
};

export const postCaseMessage = async (lifecycle: LifecycleResponse, message: string): Promise<void> => {
  await secureApi.post(`/api/v1/cases/${lifecycle.case.id}/messages`, {
    ...createCaseCommand(lifecycle.case.version),
    message,
  });
};

export const submitRequirementDocuments = async (
  lifecycle: LifecycleResponse,
  requirementId: string,
  assets: Array<{ label: string; assetId: string }>,
): Promise<void> => {
  await secureApi.post(`/api/v1/cases/${lifecycle.case.id}/requirements/${requirementId}/documents`, {
    ...createCaseCommand(lifecycle.case.version),
    assets,
  });
};

export const caseErrorMessage = (error: unknown, fallback: string): string => {
  if (!axios.isAxiosError<{ error?: string; message?: string }>(error)) return fallback;
  if (error.response?.status === 409) return "This request changed. Review the latest status and try again.";
  return error.response?.data?.error ?? error.response?.data?.message ?? fallback;
};
