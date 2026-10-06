"use client";

import { useState } from "react";
import { caseErrorMessage, postCaseMessage, type LifecycleResponse } from "@/lib/cases";

export function CaseReplyForm({ lifecycle, onRefresh }: { lifecycle: LifecycleResponse; onRefresh: () => Promise<void> | void }) {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  if (!lifecycle.availableActions.includes("POST_MESSAGE")) return null;

  return <form className="space-y-3" onSubmit={async (event) => {
    event.preventDefault();
    const value = message.trim();
    if (!value) return;
    setPending(true); setError(null);
    try { await postCaseMessage(lifecycle, value); setMessage(""); await onRefresh(); }
    catch (caught) {
      const message = caseErrorMessage(caught, "Unable to send your message.");
      setError(message);
      if (message.includes("changed")) await onRefresh();
    }
    finally { setPending(false); }
  }}>
    <label className="block text-sm font-semibold" htmlFor="case-message">Message</label>
    <textarea id="case-message" aria-label="Message" required value={message} onChange={(event) => setMessage(event.target.value)} disabled={pending} className="min-h-24 w-full rounded-lg border border-gray-300 p-3" />
    {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
    <button type="submit" disabled={pending || !message.trim()} className="rounded-lg bg-[#111111] px-5 py-2 text-white disabled:opacity-50">{pending ? "Sending…" : "Send message"}</button>
  </form>;
}
