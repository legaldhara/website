"use client";

interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  disabled?: boolean;
}

export function OtpInput({ value, onChange, label, disabled = false }: OtpInputProps) {
  return (
    <label className="block text-sm font-semibold text-slate-800">
      {label}
      <input
        aria-label={label}
        autoComplete="one-time-code"
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-center text-2xl font-semibold tracking-[0.35em] text-slate-950 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100"
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
