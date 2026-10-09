"use client";

import { useState } from "react";
import { RazorpayCheckout } from "@/components/payments/RazorpayCheckout";
import { caseErrorMessage, submitRequirementDocuments, type LifecycleResponse } from "@/lib/cases";
import { uploadImages } from "@/lib/uploadImage";

export function CaseRequirements({ lifecycle, onRefresh }: { lifecycle: LifecycleResponse; onRefresh: () => Promise<void> | void }) {
  const [files, setFiles] = useState<Record<string, Record<string, File>>>({});
  const [pendingId, setPendingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const terminal = lifecycle.case.status === "CLOSED" || lifecycle.case.status === "REJECTED";
  const open = lifecycle.requirements.filter((requirement) => requirement.status === "OPEN");
  if (!open.length) return <p className="text-sm text-gray-500">No open requirements.</p>;

  return <div className="space-y-4">{open.map((requirement) => <article key={requirement.id} className="rounded-lg border border-[#E7E2D8] bg-white p-4">
    <h4 className="font-bold text-[#151515]">{requirement.title}</h4>
    {requirement.instructions && <p className="mt-1 text-sm text-[#747474]">{requirement.instructions}</p>}
    {!terminal && requirement.type === "PAYMENT" && requirement.payment?.status === "OPEN" && <div className="mt-3"><p className="mb-2 font-semibold">{(requirement.payment.amountMinor / 100).toLocaleString("en-IN", { style: "currency", currency: requirement.payment.currency })}</p><RazorpayCheckout chargeId={requirement.payment.id} onComplete={() => void onRefresh()} /></div>}
    {!terminal && requirement.type === "DOCUMENTS" && <form className="mt-3 space-y-3" onSubmit={async (event) => {
      event.preventDefault(); setPendingId(requirement.id); setError(null);
      try {
        const labelledFiles = requirement.documentLabels.map((label) => ({ label, file: files[requirement.id]?.[label] })).filter((item): item is { label: string; file: File } => Boolean(item.file));
        const uploaded = await uploadImages(labelledFiles.map((item) => item.file));
        await submitRequirementDocuments(lifecycle, requirement.id, uploaded.map((asset, index) => ({ label: labelledFiles[index].label, assetId: asset.assetId })));
        await onRefresh();
      } catch (caught) { setError(caseErrorMessage(caught, "Unable to submit documents.")); }
      finally { setPendingId(null); }
    }}>
      {requirement.documentLabels.map((label) => <label key={label} className="block text-sm font-medium">{label}<input required type="file" aria-label={label} disabled={pendingId !== null} className="mt-1 block w-full" onChange={(event) => { const file = event.target.files?.[0]; if (file) setFiles((current) => ({ ...current, [requirement.id]: { ...current[requirement.id], [label]: file } })); }} /></label>)}
      <button type="submit" disabled={pendingId !== null} className="rounded-lg bg-[#111111] px-5 py-2 text-white disabled:opacity-50">{pendingId === requirement.id ? "Submitting…" : "Submit documents"}</button>
    </form>}
    {requirement.assets.length > 0 && <ul className="mt-3 space-y-1">{requirement.assets.map((asset) => <li key={asset.id}><a className="text-sm text-[#252525] underline" href={asset.secureUrl} target="_blank" rel="noreferrer">{asset.label || asset.originalName}</a></li>)}</ul>}
    {error && pendingId === null && <p role="alert" className="mt-2 text-sm text-red-700">{error}</p>}
  </article>)}</div>;
}
