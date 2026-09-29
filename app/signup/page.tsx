"use client";

import Link from "next/link";
import { FormEvent, useEffect, useId, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthShell } from "@/components/auth/AuthShell";
import { OtpInput } from "@/components/auth/OtpInput";
import { PasswordField } from "@/components/auth/PasswordField";
import { VerificationStatus } from "@/components/auth/VerificationStatus";
import { useAuthStore } from "@/store/useAuthStore";

const steps = ["Account", "Verify email", "Verify phone", "Profile"];

export default function SignupPage() {
  const router = useRouter();
  const auth = useAuthStore();
  const [stage, setStage] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [otpRequested, setOtpRequested] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (countdown <= 0) return;
    const timer = window.setInterval(() => setCountdown((value) => Math.max(0, value - 1)), 1_000);
    return () => window.clearInterval(timer);
  }, [countdown]);

  const createAccount = async (event: FormEvent) => {
    event.preventDefault();
    setStatus(null);
    try {
      await auth.signupWithEmail(email.trim(), password);
      setStage(1);
      setStatus("Verification email sent. Open it, then return here.");
    } catch {}
  };

  const confirmEmail = async () => {
    const verified = await auth.refreshEmailVerification();
    if (verified) {
      setStage(2);
      setStatus("Email verified. Add your mobile number.");
    } else {
      setStatus("Email is not verified yet. Open the latest email and try again.");
    }
  };

  const createGoogleAccount = async () => {
    setStatus(null);
    try {
      const result = await auth.signupWithGoogle();
      setEmail(result.email);
      setStage(2);
      setStatus("Google verified your email. Add your mobile number.");
    } catch {}
  };

  const requestOtp = async () => {
    setStatus(null);
    try {
      const retryAfterSeconds = await auth.requestSignupOtp(phone.trim());
      setOtpRequested(true);
      setCountdown(retryAfterSeconds || 60);
      setStatus("If eligible, a verification code is on its way.");
    } catch {}
  };

  const verifyPhone = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await auth.verifySignupOtp(code);
      setStage(3);
      setStatus("Phone verified. Complete your profile.");
    } catch {}
  };

  const finishSignup = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await auth.completeSignup({ fullName, city: city || undefined, termsAccepted: true });
      await auth.fetchUser();
      router.replace("/dashboard");
    } catch {}
  };

  return (
    <AuthShell
      currentStep={stage}
      description="Create your identity once, then verify both contact channels before accessing legal services."
      steps={steps}
      title={stage === 0 ? "Create your account" : stage === 1 ? "Verify your email" : stage === 2 ? "Verify your phone" : "Complete your profile"}
    >
      <VerificationStatus message={auth.error || status} tone={auth.error ? "error" : "neutral"} />

      {stage === 0 && (
        <form className="mt-6 space-y-5" onSubmit={createAccount}>
          <Field label="Email address" type="email" autoComplete="email" value={email} onChange={setEmail} />
          <PasswordField label="Create password" autoComplete="new-password" value={password} onChange={setPassword} minLength={8} required />
          <PrimaryButton disabled={auth.loading}>Create account</PrimaryButton>
          <div className="flex items-center gap-3" aria-hidden="true">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">or</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <button
            aria-label="Continue with Google"
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-5 py-3.5 font-semibold text-[#0b1f3a] transition hover:border-[#0b3b75] hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-blue-100 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400"
            disabled={auth.loading}
            onClick={createGoogleAccount}
            type="button"
          >
            <svg aria-label="Google" className="h-5 w-5 shrink-0" role="img" viewBox="0 0 24 24">
              <path d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.33 2.98-7.41Z" fill="#4285F4" />
              <path d="M12 22c2.7 0 4.98-.9 6.63-2.43l-3.24-2.54c-.9.6-2.05.96-3.39.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.62A10 10 0 0 0 12 22Z" fill="#34A853" />
              <path d="M6.39 13.86A6.01 6.01 0 0 1 6.08 12c0-.65.11-1.28.31-1.86V7.52H3.04A10 10 0 0 0 2 12c0 1.61.38 3.14 1.04 4.48l3.35-2.62Z" fill="#FBBC05" />
              <path d="M12 6.01c1.47 0 2.79.51 3.83 1.5l2.87-2.88A9.64 9.64 0 0 0 12 2a10 10 0 0 0-8.96 5.52l3.35 2.62C7.18 7.77 9.39 6.01 12 6.01Z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>
        </form>
      )}

      {stage === 1 && (
        <div className="mt-7 space-y-5">
          <div className="border-y border-slate-200 py-5">
            <p className="font-semibold text-slate-900">Sent to {email}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">Use the verification link in the latest Firebase email, then confirm here.</p>
          </div>
          <PrimaryButton disabled={auth.loading} onClick={confirmEmail} type="button">I verified my email</PrimaryButton>
        </div>
      )}

      {stage === 2 && (
        <form className="mt-7 space-y-5" onSubmit={verifyPhone}>
          <Field label="Mobile number" hint="Use E.164 format, for example +919876543210." type="tel" autoComplete="tel" value={phone} onChange={setPhone} disabled={otpRequested} />
          {!otpRequested ? (
            <PrimaryButton disabled={auth.loading} onClick={requestOtp} type="button">Send verification code</PrimaryButton>
          ) : (
            <>
              <OtpInput label="Verification code" value={code} onChange={setCode} />
              <PrimaryButton disabled={auth.loading || code.length !== 6}>Verify phone</PrimaryButton>
              <button className="w-full text-sm font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4 disabled:text-slate-400 disabled:no-underline" disabled={countdown > 0 || auth.loading} onClick={requestOtp} type="button">
                {countdown > 0 ? `Resend in ${countdown}s` : "Resend verification code"}
              </button>
            </>
          )}
        </form>
      )}

      {stage === 3 && (
        <form className="mt-7 space-y-5" onSubmit={finishSignup}>
          <Field label="Full name" type="text" autoComplete="name" value={fullName} onChange={setFullName} />
          <Field label="City" type="text" autoComplete="address-level2" value={city} onChange={setCity} required={false} />
          <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
            <input className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-800 focus:ring-blue-700" checked={termsAccepted} onChange={(event) => setTermsAccepted(event.target.checked)} required type="checkbox" />
            <span>I accept the terms and privacy policy</span>
          </label>
          <PrimaryButton disabled={auth.loading || !termsAccepted}>Finish signup</PrimaryButton>
        </form>
      )}

      <p className="mt-8 text-center text-sm text-slate-600">
        Already registered? <Link className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-4" href="/login">Sign in</Link>
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
  minLength?: number;
  required?: boolean;
  hint?: string;
}

function Field({ hint, label, onChange, required = true, ...inputProps }: FieldProps) {
  const inputId = useId();
  const hintId = useId();
  return (
    <div className="block text-sm font-semibold text-slate-800">
      <label htmlFor={inputId}>{label}</label>
      <input aria-describedby={hint ? hintId : undefined} className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-700 focus:ring-4 focus:ring-blue-100 disabled:bg-slate-100" id={inputId} onChange={(event) => onChange(event.target.value)} required={required} {...inputProps} />
      {hint && <span className="mt-2 block text-xs font-normal leading-5 text-slate-500" id={hintId}>{hint}</span>}
    </div>
  );
}

function PrimaryButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button className="w-full rounded-xl bg-[#0b3b75] px-5 py-3.5 font-semibold text-white shadow-[0_12px_24px_-14px_rgba(11,59,117,0.9)] transition hover:bg-[#082d59] focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none" {...props}>{children}</button>;
}


