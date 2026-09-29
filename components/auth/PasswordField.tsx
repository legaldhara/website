"use client";

import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useId, useState } from "react";

interface PasswordFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "type"> {
  label: string;
  onChange: (value: string) => void;
}

export function PasswordField({ label, onChange, ...inputProps }: PasswordFieldProps) {
  const inputId = useId();
  const [visible, setVisible] = useState(false);
  const actionLabel = visible ? "Hide password" : "Show password";
  const Icon = visible ? EyeOff : Eye;

  return (
    <div className="text-sm font-semibold text-slate-800">
      <label htmlFor={inputId}>{label}</label>
      <div className="relative mt-2">
        <input
          {...inputProps}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100"
          id={inputId}
          onChange={(event) => onChange(event.target.value)}
          type={visible ? "text" : "password"}
        />
        <button
          aria-label={actionLabel}
          aria-pressed={visible}
          className="absolute inset-y-0 right-1 grid w-11 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-[#0b3b75] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-700"
          onClick={() => setVisible((current) => !current)}
          type="button"
        >
          <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
}
