"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import { LegalDharaBrand } from "@/components/brand/LegalDharaBrand";
import { MobileNavigation } from "@/components/navigation/MobileNavigation";
import { navigationGroups } from "@/components/navigation/navigationData";
import { useAuthStore } from "@/store/useAuthStore";

const Header = () => {
  const { isAuthenticated, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <header className="sticky top-0 z-[100] border-b border-ledger-border bg-warm-paper/95 backdrop-blur-sm">
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Legal Dhara home" className="shrink-0">
          <LegalDharaBrand priority />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {navigationGroups.map((group) => (
            <div key={group.label} className="group relative">
              <button type="button" className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-body-text transition-colors hover:bg-white hover:text-ink">
                {group.label}
                <ChevronDown aria-hidden="true" size={15} strokeWidth={1.8} />
              </button>
              <div className="invisible absolute left-1/2 top-full w-[620px] -translate-x-1/2 translate-y-2 opacity-0 transition duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="mt-3 grid grid-cols-2 gap-8 rounded-xl border border-ledger-border bg-white p-7 shadow-[0_22px_50px_-30px_rgba(17,17,17,0.45)]">
                  {group.categories.map((category) => (
                    <div key={category.label}>
                      <p className="mb-3 border-b border-ledger-border pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-text">
                        {category.label}
                      </p>
                      <div className="grid gap-1">
                        {category.links.map((link) => (
                          <Link key={`${category.label}-${link.label}`} href={link.href} className="rounded-md px-2 py-1.5 text-sm text-body-text transition-colors hover:bg-warm-paper hover:text-ink">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <Link href="/pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-body-text hover:bg-white">
            Pricing
          </Link>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link href={isAuthenticated ? "/dashboard" : "/login"} className="rounded-lg px-4 py-2.5 text-sm font-semibold text-ink hover:bg-white">
            {isAuthenticated ? "Dashboard" : "Login"}
          </Link>
          {!isAuthenticated && (
            <Link href="/signup" className="rounded-lg bg-legal-gold px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-[#aa8231]">
              Get started
            </Link>
          )}
        </div>

        <MobileNavigation authenticated={isAuthenticated} groups={navigationGroups} />
      </div>
    </header>
  );
};

export default Header;
