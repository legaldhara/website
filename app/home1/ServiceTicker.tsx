"use client";

import type { CSSProperties, FocusEvent } from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Calculator,
  Copyright,
  FileText,
  Globe2,
  Handshake,
  Lightbulb,
  MessageSquareWarning,
  Music2,
  Palette,
  ReceiptIndianRupee,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  UserRound,
  UsersRound,
  Utensils,
} from "lucide-react";
import styles from "./home1.module.css";

const services = [
  ["Trademark Registration", "File & protect", "/services/trademark-registration", ShieldCheck],
  ["International Trademark", "Global brand coverage", "/services/international-trademark", Globe2],
  ["Trademark Search", "Check brand availability", "/services/trademark-search", Search],
  ["Trademark Objection", "Respond with confidence", "/services/tm-objection", MessageSquareWarning],
  ["Trademark Renewal", "Keep protection active", "/services/trademark-renewal", RefreshCw],
  ["Trademark Assignment", "Transfer ownership", "/services/trademark-assignment", ArrowLeftRight],
  ["Trademark Opposition", "Protect your rights", "/services/trademark-opposition", MessageSquareWarning],
  ["Trademark Rectification", "Correct registry records", "/services/trademark-rectification", RefreshCw],
  ["Well-Known Trademark", "Strengthen brand recognition", "/services/wellknown-trademark", BadgeCheck],
  ["Trademark Class Finder", "Find the right class", "/services/trademark-class-finder", Search],
  ["Copyright Registration", "Secure creative work", "/services/copyright-registration", Copyright],
  ["Copyright Music", "Protect music rights", "/services/copyright-music", Music2],
  ["Patent Search", "Assess invention novelty", "/services/patent-search", Search],
  ["Provisional Patent", "Secure an early filing date", "/services/provisional-patent", Lightbulb],
  ["Patent Registration", "Protect your invention", "/services/patent-registration", Lightbulb],
  ["Logo Design", "Build a distinct identity", "/services/logo-design", Palette],
  ["Design Registration", "Protect product design", "/services/design-registration", Palette],
  ["Private Limited Company", "Incorporate your business", "/services/pvt-ltd", Building2],
  ["Limited Liability Partnership", "Flexible business structure", "/services/llp", Handshake],
  ["One Person Company", "Start independently", "/services/opc", UserRound],
  ["Sole Proprietorship", "Launch a simple business", "/services/sole-proprietorship", UserRound],
  ["Partnership Firm", "Formalise your partnership", "/services/partnership-firm", UsersRound],
  ["Startup India Registration", "Unlock startup benefits", "/services/startup-india-registration", Rocket],
  ["Nidhi Company", "Build a member finance company", "/services/nidhi-company", Building2],
  ["FSSAI Registration", "License your food business", "/services/fssai-registration", Utensils],
  ["ISO Certification", "Demonstrate quality standards", "/services/iso-registration", Award],
  ["GST Registration", "Register for GST", "/services/gst-registration", ReceiptIndianRupee],
  ["GST Filing", "Stay tax compliant", "/services/gst-filing", ReceiptIndianRupee],
  ["GST Cancellation", "Close or restore registration", "/services/gst-cancellation", RefreshCw],
  ["Income Tax Filing", "File accurately and on time", "/services/itr-filing", Calculator],
  ["Tax Planning", "Plan tax efficiently", "/services/tax-planning", Calculator],
  ["Legal Documentation", "Draft reliable documents", "/services/documentation", FileText],
] as const;

const visibleRows = 3;
const tickerServices = [...services, ...services.slice(0, visibleRows)];

export default function ServiceTicker() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hasTransition, setHasTransition] = useState(true);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => currentIndex + 1);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (activeIndex !== services.length) return;

    const reset = window.setTimeout(() => {
      setHasTransition(false);
      setActiveIndex(0);
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setHasTransition(true));
      });
    }, 650);

    return () => window.clearTimeout(reset);
  }, [activeIndex]);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
  };

  return (
    <div
      className={styles.serviceList}
      aria-label="Legal Dhara services"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleBlur}
    >
      <div
        className={`${styles.serviceTrack} ${hasTransition ? "" : styles.serviceTrackStatic}`}
        style={{ "--ticker-index": activeIndex } as CSSProperties}
      >
        {tickerServices.map(([title, description, href, ServiceIcon], index) => {
          return (
            <Link key={`${href}-${index}`} href={href} className={styles.serviceRow}>
              <ServiceIcon className={styles.serviceIcon} aria-hidden="true" />
              <span className={styles.serviceName}>{title}</span>
              <span className={styles.serviceDescription}>{description}</span>
              <ArrowRight className={styles.serviceArrow} aria-hidden="true" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
