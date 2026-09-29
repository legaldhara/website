"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { OtpInput } from "@/components/auth/OtpInput";
import { PasswordField } from "@/components/auth/PasswordField";
import { VerificationStatus } from "@/components/auth/VerificationStatus";
import { useAuthStore } from "@/store/useAuthStore";

type LoginMode = "email" | "phone";

export default function LoginPage() {
  const router = useRouter();
  const auth = useAuthStore();
  const [mode, setMode] = useState<LoginMode>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [otpRequested, setOtpRequested] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (auth.isAuthenticated) router.replace("/dashboard");
  }, [auth.isAuthenticated, router]);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setInterval(() => setCountdown((value) => Math.max(0, value - 1)), 1_000);
    return () => window.clearInterval(timer);
  }, [countdown]);

  const submitEmail = async (event: FormEvent) => {
    event.preventDefault();
    setStatus(null);
    try {
      await auth.loginWithEmail(email.trim(), password);
      router.replace("/dashboard");
    } catch {}
  };

  const resetPassword = async () => {
    if (!email.trim()) {
      setStatus("Enter your email address first.");
      return;
    }
    const message = await auth.sendPasswordReset(email.trim());
    setStatus(message);
  };

  const requestOtp = async () => {
    setStatus(null);
    try {
      const retryAfterSeconds = await auth.requestLoginOtp(phone.trim());
      setOtpRequested(true);
      setCountdown(retryAfterSeconds || 60);
      setStatus("If eligible, a verification code is on its way.");
    } catch {}
  };

  const submitPhone = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await auth.loginWithPhoneOtp(code);
      router.replace("/dashboard");
    } catch {}
  };

  const selectMode = (nextMode: LoginMode) => {
    setMode(nextMode);
    setStatus(null);
  };

  return (
    <AuthShell
      description="Choose your verified email or mobile number. Both methods finish with the same protected account session."
      title="Sign in to LegalDhara"
    >
      <div className="grid grid-cols-2 border-b border-slate-200" role="tablist" aria-label="Sign in method">
        <button
          aria-selected={mode === "email"}
          className={mode === "email" ? "border-b-2 border-[#BC9139] px-3 py-3 font-semibold text-[#111111]" : "px-3 py-3 font-semibold text-slate-500 hover:text-slate-800"}
          onClick={() => selectMode("email")}
          role="tab"
          type="button"
        >
          Email
        </button>
        <button
          aria-selected={mode === "phone"}
          className={mode === "phone" ? "border-b-2 border-[#BC9139] px-3 py-3 font-semibold text-[#111111]" : "px-3 py-3 font-semibold text-slate-500 hover:text-slate-800"}
          onClick={() => selectMode("phone")}
          role="tab"
          type="button"
        >
          Phone OTP
        </button>
      </div>

      <div className="mt-6">
        <VerificationStatus message={auth.error || status} tone={auth.error ? "error" : "neutral"} />
      </div>

      {mode === "email" ? (
        <form className="mt-6 space-y-5" onSubmit={submitEmail}>
          <Field label="Email address" type="email" autoComplete="email" value={email} onChange={setEmail} />
          <PasswordField label="Password" autoComplete="current-password" value={password} onChange={setPassword} required />
          <PrimaryButton disabled={auth.loading}>Sign in with email</PrimaryButton>
          <button className="w-full text-sm font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4" onClick={resetPassword} type="button">
            Forgot password?
          </button>
        </form>
      ) : (
        <form className="mt-6 space-y-5" onSubmit={submitPhone}>
          <Field label="Mobile number" type="tel" autoComplete="tel" value={phone} onChange={setPhone} disabled={otpRequested} />
          {!otpRequested ? (
            <PrimaryButton disabled={auth.loading} onClick={requestOtp} type="button">Send verification code</PrimaryButton>
          ) : (
            <>
              <OtpInput label="Verification code" value={code} onChange={setCode} />
              <PrimaryButton disabled={auth.loading || code.length !== 6}>Verify and sign in</PrimaryButton>
              <button
                className="w-full text-sm font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4 disabled:text-slate-400 disabled:no-underline"
                disabled={countdown > 0 || auth.loading}
                onClick={requestOtp}
                type="button"
              >
                {countdown > 0 ? `Resend in ${countdown}s` : "Resend verification code"}
              </button>
            </>
          )}
        </form>
      )}

      <p className="mt-8 text-center text-sm text-slate-600">
        New to LegalDhara? <Link className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4" href="/signup">Create an account</Link>
      </p>
    </AuthShell>
  );
}

interface FieldProps {
  label: string;
  type: string;
  autoComplete: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

function Field({ label, onChange, ...inputProps }: FieldProps) {
  return (
    <label className="block text-sm font-semibold text-slate-800">
      {label}
      <input
        className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100"
        onChange={(event) => onChange(event.target.value)}
        required
        {...inputProps}
      />
    </label>
  );
}

function PrimaryButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-full rounded-xl bg-[#BC9139] px-5 py-3.5 font-semibold text-[#111111] shadow-[0_12px_24px_-14px_rgba(17,17,17,0.35)] transition hover:bg-[#BC9139] focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
      {...props}
    >
      {children}
    </button>
  );
}
