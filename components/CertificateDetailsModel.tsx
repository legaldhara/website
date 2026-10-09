"use client";

import axios from "axios";
import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { secureApi } from "@/config/apiClient";
import { lifecycleFromResponse, type LifecycleResponse } from "@/lib/cases";
import { CaseReplyForm } from "./cases/CaseReplyForm";
import { CaseRequirements } from "./cases/CaseRequirements";
import { CaseTimeline } from "./cases/CaseTimeline";

interface Props { isOpen: boolean; onClose: () => void; requestNo: string; }
interface CertificateDetails { requestNo: string; subject: string; description: string; lifecycle?: LifecycleResponse | null; }

export default function CertificateDetailsModal({ isOpen, onClose, requestNo }: Props) {
  const [details, setDetails] = useState<CertificateDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const refresh = useCallback(async () => {
    setLoading(true); setError(null);
    try {
      const response = await secureApi.get(`/api/v1/certificate/${requestNo}`);
      setDetails({ ...response.data.data, lifecycle: lifecycleFromResponse(response.data) });
    } catch (caught) {
      setError(axios.isAxiosError<{ message?: string }>(caught) ? caught.response?.data?.message ?? "Failed to load certificate request." : "Failed to load certificate request.");
    } finally { setLoading(false); }
  }, [requestNo]);

  useEffect(() => { if (isOpen) void refresh(); }, [isOpen, refresh]);
  if (!isOpen) return null;
  const lifecycle = details?.lifecycle;

  return <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
    <div className="max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
      <header className="sticky top-0 z-10 flex items-start justify-between bg-[#111111] p-5 text-white">
        <div><h2 className="text-xl font-bold">Certificate request</h2><p className="text-sm text-[#BC9139]">{requestNo}</p></div>
        <button type="button" aria-label="Close" onClick={onClose}><X /></button>
      </header>
      <div className="space-y-6 p-5">
        {loading && <p>Loading certificate request…</p>}
        {error && <p role="alert" className="text-red-700">{error}</p>}
        {!loading && details && <div className="rounded-lg bg-[#F7F5F0] p-4"><h3 className="font-bold">{details.subject}</h3><p className="mt-1 text-sm text-[#747474]">{details.description}</p>{lifecycle && <p className="mt-2 font-semibold">{lifecycle.case.status.replace(/_/g, " ")}</p>}</div>}
        {!loading && details && !lifecycle && <p role="alert" className="text-red-700">Lifecycle details are unavailable.</p>}
        {lifecycle && <>
          <section><h3 className="mb-3 text-lg font-bold">Open requirements</h3><CaseRequirements lifecycle={lifecycle} onRefresh={refresh} /></section>
          <section><h3 className="mb-3 text-lg font-bold">Message the LegalDhara team</h3><CaseReplyForm lifecycle={lifecycle} onRefresh={refresh} /></section>
          <section><h3 className="mb-3 text-lg font-bold">Activity timeline</h3><CaseTimeline events={lifecycle.timeline} /></section>
          {lifecycle.deliverables.length > 0 && <section><h3 className="mb-3 text-lg font-bold">Certificate files</h3><ul>{lifecycle.deliverables.map((asset) => <li key={asset.id}><a className="text-[#252525] underline" href={asset.secureUrl} target="_blank" rel="noreferrer">{asset.label || asset.originalName}</a></li>)}</ul></section>}
        </>}
      </div>
    </div>
  </div>;
}
