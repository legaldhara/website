import { Check } from "lucide-react";
import { ReactNode } from "react";

import { LegalDharaBrand } from "@/components/brand/LegalDharaBrand";

interface AuthShellProps {
  title: string;
  description: string;
  children: ReactNode;
  steps?: string[];
  currentStep?: number;
}

export function AuthShell({ title, description, children, steps, currentStep = 0 }: AuthShellProps) {
  return (
    <div className="min-h-[calc(100vh-5rem)] bg-warm-paper px-4 py-10 text-main-text sm:px-6 lg:py-16">
      <section className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-xl border border-ledger-border bg-white shadow-[0_28px_70px_-38px_rgba(17,17,17,0.3)] lg:min-h-[690px] lg:grid-cols-[0.84fr_1.16fr]">
        <aside className="relative hidden overflow-hidden bg-ink px-7 py-10 text-white sm:px-10 lg:block lg:px-12 lg:py-14">
          <div className="absolute bottom-0 right-10 h-4/5 w-px bg-white/10" aria-hidden="true" />
          <div className="absolute bottom-0 right-16 h-2/3 w-px bg-legal-gold/60" aria-hidden="true" />
          <div className="relative flex h-full flex-col">
            <LegalDharaBrand inverse priority />
            <div className="mt-14 max-w-md lg:mt-24">
              <h2 className="text-balance font-serif text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                Secure access to your legal desk.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-[#BEBEBE]">
                Your identity is verified before documents, applications, or payment records become available.
              </p>
            </div>
            {steps && (
              <ol className="mt-12 space-y-5" aria-label="Signup progress">
                {steps.map((step, index) => {
                  const complete = index < currentStep;
                  const active = index === currentStep;
                  return (
                    <li className="flex items-center gap-4" key={step}>
                      <span className={`grid h-8 w-8 place-items-center rounded-full border text-sm font-semibold ${complete ? "border-legal-gold bg-legal-gold text-ink" : active ? "border-white bg-white text-ink" : "border-white/25 text-white/50"}`}>
                        {complete ? <Check aria-hidden="true" size={16} /> : index + 1}
                      </span>
                      <span className={active || complete ? "font-semibold text-white" : "text-white/45"}>{step}</span>
                    </li>
                  );
                })}
              </ol>
            )}
            <p className="mt-auto max-w-sm pt-12 text-xs leading-5 text-white/45">
              Firebase identity checks and single-use verification codes protect every sign-in.
            </p>
          </div>
        </aside>
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          <div className="mx-auto w-full max-w-xl">
            {steps && (
              <div className="mb-8 lg:hidden" aria-label="Signup progress">
                <div className="flex items-center justify-between text-sm font-semibold text-main-text">
                  <span>Step {currentStep + 1} of {steps.length}</span>
                  <span>{steps[currentStep]}</span>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-ledger-border">
                  <div
                    className="h-full rounded-full bg-legal-gold transition-[width]"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            )}
            <h1 className="text-balance font-serif text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">{title}</h1>
            <p className="mt-3 max-w-lg text-base leading-7 text-secondary-text">{description}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
