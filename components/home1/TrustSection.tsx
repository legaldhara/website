"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TrustSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const institutionalMarks = [
  { src: "/assets/home1-trust/logos/iso.png", alt: "ISO 9001" },
  { src: "/assets/home1-trust/logos/fssai.png", alt: "FSSAI" },
  { src: "/assets/home1-trust/logos/msme.png", alt: "MSME" },
  { src: "/assets/home1-trust/logos/ip.png", alt: "Intellectual Property India" },
];

const benefits = [
  { icon: "affordable.svg", label: "Affordable" },
  { icon: "compliance.svg", label: "Compliance ensured" },
  { icon: "experts.svg", label: "Industry experts" },
  { icon: "on-time.svg", label: "On-time service" },
];

const ecosystemLogos = [
  { src: "/assets/home1-trust/logos/amazon-dark.png", alt: "Amazon", width: 160, height: 71, size: "wide" },
  { src: "/assets/home1-trust/logos/google.png", alt: "Google", width: 168, height: 52, size: "wide" },
  { src: "/assets/home1-trust/logos/google-g.png", alt: "Google", width: 64, height: 64, size: "compact" },
  { src: "/assets/home1-trust/logos/hp.png", alt: "HP", width: 48, height: 48, size: "compact" },
  { src: "/assets/home1-trust/logos/phonepe.png", alt: "PhonePe", width: 48, height: 48, size: "compact", label: "PhonePe" },
  { src: "/assets/home1-trust/ecosystems/shopify.svg", alt: "Shopify", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/woo.svg", alt: "WooCommerce", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/wordpress.svg", alt: "WordPress", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/microsoft.svg", alt: "Microsoft", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/meta.svg", alt: "Meta", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/razorpay.svg", alt: "Razorpay", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/paytm.svg", alt: "Paytm", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/flipkart.svg", alt: "Flipkart", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/meesho.svg", alt: "Meesho", width: 160, height: 64 },
  { src: "/assets/home1-trust/ecosystems/myntra.svg", alt: "Myntra", width: 160, height: 64 },
];

const EcosystemLogoGroup = ({ duplicate = false }: { duplicate?: boolean }) => (
  <ul className={styles.logoGroup} aria-hidden={duplicate ? "true" : undefined}>
    {ecosystemLogos.map((logo) => (
      <li className={styles.logoItem} key={`${duplicate ? "duplicate" : "primary"}-${logo.alt}-${logo.src}`}>
        <Image
          className={logo.size === "compact" ? styles.compactLogo : logo.size === "wide" ? styles.wideLogo : undefined}
          src={logo.src}
          width={logo.width}
          height={logo.height}
          alt={duplicate ? "" : logo.alt}
        />
        {logo.label ? <span>{logo.label}</span> : null}
      </li>
    ))}
  </ul>
);

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isInViewport, setIsInViewport] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateVisibility = () => setIsDocumentVisible(!document.hidden);
    const updateMotionPreference = () => setReduceMotion(motionQuery.matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(Boolean(entry?.isIntersecting));
      },
      { threshold: 0.08 },
    );

    updateVisibility();
    updateMotionPreference();
    observer.observe(section);
    document.addEventListener("visibilitychange", updateVisibility);
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 900px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion: shouldReduceMotion } = context.conditions as {
          desktop: boolean;
          reduceMotion: boolean;
        };

        if (shouldReduceMotion) return;

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            end: desktop ? "center 38%" : "center 48%",
            scrub: desktop ? 0.75 : 0.55,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            "[data-trust-mark]",
            { autoAlpha: 0, y: desktop ? 34 : 20, scale: 0.94 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08 },
          )
          .fromTo(
            "[data-trust-message]",
            { autoAlpha: 0, y: desktop ? 38 : 22 },
            { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.09 },
            0.28,
          )
          .fromTo(
            "[data-trust-benefit]",
            { autoAlpha: 0, y: desktop ? 24 : 16 },
            { autoAlpha: 1, y: 0, duration: 0.55, stagger: 0.07 },
            0.68,
          )
          .fromTo(
            "[data-trust-action]",
            { autoAlpha: 0, x: desktop ? -22 : -14 },
            { autoAlpha: 1, x: 0, duration: 0.5 },
            0.96,
          );
      },
    );

    return () => media.revert();
  }, { scope: sectionRef });

  const isMarqueePaused = !isInViewport || !isDocumentVisible || isInteractionPaused || reduceMotion;

  return (
    <section
      ref={sectionRef}
      className={styles.section}
      aria-labelledby="trust-section-title"
    >
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.institutions}>
            <div className={styles.marks}>
              {institutionalMarks.map((mark) => (
                <div className={styles.mark} data-trust-mark key={mark.alt}>
                  <Image src={mark.src} width={190} height={190} alt={mark.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <h3 data-trust-message>Registration &amp; certification support</h3>
            <p data-trust-message>Guidance for the registrations your business needs.</p>
          </div>

          <div className={styles.message}>
            <p className={styles.eyebrow} data-trust-message>Why Legal Dhara</p>
            <h2 id="trust-section-title" data-trust-message>
              Confidence in
              <br />
              <span>every next step.</span>
            </h2>

            <ul className={styles.benefits}>
              {benefits.map((benefit) => (
                <li data-trust-benefit key={benefit.label}>
                  <img src={`/assets/home1-trust/${benefit.icon}`} width="62" height="62" alt="" />
                  <span>{benefit.label}</span>
                </li>
              ))}
            </ul>

            <Link className={styles.button} data-trust-action href="/contact">
              Get Started
              <img src="/assets/home1-trust/arrow-right.svg" width="28" height="28" alt="" />
            </Link>
          </div>
        </div>

        <div className={styles.ecosystems}>
          <p>Platforms and ecosystems we support</p>
          <div
            className={`${styles.marqueeViewport} ${isMarqueePaused ? styles.marqueePaused : ""}`}
            tabIndex={0}
            aria-label="Supported platforms and ecosystems"
            onMouseEnter={() => setIsInteractionPaused(true)}
            onMouseLeave={() => setIsInteractionPaused(false)}
            onFocus={() => setIsInteractionPaused(true)}
            onBlur={() => setIsInteractionPaused(false)}
          >
            <div className={styles.marqueeTrack}>
              <EcosystemLogoGroup />
              <EcosystemLogoGroup duplicate />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
