"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { NavigationGroup } from "./navigationData";

interface MobileNavigationProps {
  authenticated: boolean;
  groups: NavigationGroup[];
}

export function MobileNavigation({ authenticated, groups }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="grid h-11 w-11 place-items-center rounded-lg border border-ledger-border bg-white text-ink transition-colors hover:border-legal-gold"
      >
        {open ? <X aria-hidden="true" size={21} /> : <Menu aria-hidden="true" size={21} />}
      </button>

      {open && (
        <nav
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto border-b border-ledger-border bg-warm-paper px-5 pb-7 pt-4 shadow-[0_18px_40px_-28px_rgba(17,17,17,0.4)]"
        >
          <div className="mx-auto max-w-7xl space-y-2">
            {groups.map((group) => (
              <details key={group.label} className="border-b border-ledger-border py-2">
                <summary className="cursor-pointer py-2 font-medium text-ink">{group.label}</summary>
                <div className="grid gap-6 pb-4 pt-2 sm:grid-cols-2">
                  {group.categories.map((category) => (
                    <div key={category.label}>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-text">
                        {category.label}
                      </p>
                      <div className="space-y-1">
                        {category.links.map((link) => (
                          <Link key={`${category.label}-${link.label}`} href={link.href} onClick={() => setOpen(false)} className="block py-1.5 text-sm text-body-text hover:text-legal-gold">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-5">
              <Link href={authenticated ? "/dashboard" : "/login"} onClick={() => setOpen(false)} className="rounded-lg border border-ink px-4 py-3 text-center text-sm font-semibold text-ink">
                {authenticated ? "Dashboard" : "Login"}
              </Link>
              <Link href={authenticated ? "/dashboard" : "/signup"} onClick={() => setOpen(false)} className="rounded-lg bg-legal-gold px-4 py-3 text-center text-sm font-semibold text-ink hover:bg-[#aa8231]">
                {authenticated ? "Open account" : "Get started"}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
