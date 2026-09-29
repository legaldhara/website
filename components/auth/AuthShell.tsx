import { Check, Scale } from "lucide-react";
import { ReactNode } from "react";

interface AuthShellProps {
  title: string;
  description: string;
  children: ReactNode;
  steps?: string[];
  currentStep?: number;
}

export function AuthShell({ title, description, children, steps, currentStep = 0 }: AuthShellProps) {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-[#edf1f5] px-4 py-10 text-slate-950 selection:bg-[#d5a643] selection:text-[#0b1f3a] sm:px-6 lg:py-16">
      <section className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-[0_28px_70px_-32px_rgba(11,31,58,0.45)] lg:min-h-[690px] lg:grid-cols-[0.84fr_1.16fr]">
        <aside className="relative overflow-hidden bg-[#0b1f3a] px-7 py-10 text-white sm:px-10 lg:px-12 lg:py-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#d5a643]/20" aria-hidden="true" />
          <div className="absolute -right-8 -top-8 h-48 w-48 rounded-full border border-[#d5a643]/30" aria-hidden="true" />
          <div className="relative flex h-full flex-col">
            <div className="flex items-center gap-3 text-[#f0c96f]">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[#d5a643]/60">
                <Scale aria-hidden="true" size={22} strokeWidth={1.7} />
              </span>
              <span className="text-lg font-semibold tracking-wide">LegalDhara</span>
            </div>
            <div className="mt-14 max-w-md lg:mt-24">
              <h2 className="text-balance text-4xl font-semibold leading-tight tracking-[-0.03em] sm:text-5xl">
                Secure access to your legal desk.
              </h2>
              <p className="mt-5 max-w-sm text-base leading-7 text-blue-100/80">
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
                      <span className={`grid h-8 w-8 place-items-center rounded-full border text-sm font-semibold ${complete ? "border-[#d5a643] bg-[#d5a643] text-[#0b1f3a]" : active ? "border-white bg-white text-[#0b1f3a]" : "border-blue-200/30 text-blue-100/60"}`}>
                        {complete ? <Check aria-hidden="true" size={16} /> : index + 1}
                      </span>
                      <span className={active || complete ? "font-semibold text-white" : "text-blue-100/55"}>{step}</span>
                    </li>
                  );
                })}
              </ol>
            )}
            <p className="mt-auto pt-12 text-xs leading-5 text-blue-100/55">
              Firebase identity checks and single-use verification codes protect every sign-in.
            </p>
          </div>
        </aside>
        <div className="flex items-center px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
          <div className="mx-auto w-full max-w-xl">
            <h1 className="text-balance text-3xl font-semibold tracking-[-0.03em] text-[#0b1f3a] sm:text-4xl">{title}</h1>
            <p className="mt-3 max-w-lg text-base leading-7 text-slate-600">{description}</p>
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
