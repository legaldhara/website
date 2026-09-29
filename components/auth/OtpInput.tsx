"use client";

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
}

export function OtpInput({ value, onChange, label, disabled = false }: OtpInputProps) {
  return (
    <label className="block text-sm font-semibold text-main-text">
      {label}
      <input
        aria-label={label}
        autoComplete="one-time-code"
        className="mt-2 w-full rounded-md border border-ledger-border bg-white px-4 py-3 text-center text-2xl font-semibold tracking-[0.35em] text-main-text outline-none transition focus:border-legal-gold focus:ring-4 focus:ring-[#F4EBD8] disabled:bg-warm-paper"
        disabled={disabled}
        inputMode="numeric"
        maxLength={6}
        onChange={(event) => onChange(event.target.value.replace(/\D/g, "").slice(0, 6))}
        pattern="[0-9]{6}"
        value={value}
      />
    </label>
  );
}
