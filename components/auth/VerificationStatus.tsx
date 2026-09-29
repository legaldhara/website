interface VerificationStatusProps {
  message?: string | null;
  tone?: "neutral" | "success" | "error";
}

export function VerificationStatus({ message, tone = "neutral" }: VerificationStatusProps) {
  if (!message) return null;
  const tones = {
    neutral: "bg-blue-50 text-blue-950",
    success: "bg-emerald-50 text-emerald-950",
    error: "bg-red-50 text-red-950",
  };
  return (
    <p className={`rounded-xl px-4 py-3 text-sm font-medium ${tones[tone]}`} role="status" aria-live="polite">
      {message}
    </p>
  );
}
