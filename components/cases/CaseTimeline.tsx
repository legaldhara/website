import type { CaseEvent } from "@/lib/cases";

const labels: Record<string, string> = {
  CASE_CREATED: "Request submitted", REVIEW_STARTED: "Review started", DOCUMENTS_REQUESTED: "Documents requested",
  DOCUMENTS_SUBMITTED: "Documents submitted", PAYMENT_REQUESTED: "Payment requested", PAYMENT_RECEIVED: "Payment received",
  REQUIREMENT_CANCELLED: "Requirement cancelled", MESSAGE_POSTED: "Message posted", CASE_APPROVED: "Request approved",
  CASE_REJECTED: "Request rejected", DELIVERABLE_ATTACHED: "Deliverable attached", CASE_COMPLETED: "Request completed", CASE_CLOSED: "Request closed",
};

export function CaseTimeline({ events }: { events: CaseEvent[] }) {
  if (!events.length) return <p className="text-sm text-gray-500">No activity yet.</p>;
  return <ol className="space-y-4">{events.map((event) => <li key={event.id} className="border-l-2 border-[#BC9139] pl-4">
    <div className="flex flex-wrap justify-between gap-2"><strong>{labels[event.type] ?? event.type.replace(/_/g, " ")}</strong><time className="text-xs text-gray-500">{new Date(event.createdAt).toLocaleString("en-IN")}</time></div>
    {event.message && <p className="mt-1 text-sm text-gray-700">{event.message}</p>}
  </li>)}</ol>;
}
