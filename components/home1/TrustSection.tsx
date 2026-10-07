"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./TrustSection.module.css";

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

export default function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsRevealed(true);
        observer.disconnect();
      },
      { threshold: 0.08 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isRevealed ? styles.revealed : ""}`}
      aria-labelledby="trust-section-title"
    >
      <div className={styles.inner}>
        <div className={styles.main}>
          <div className={styles.institutions}>
            <div className={styles.marks}>
              {institutionalMarks.map((mark) => (
                <div className={styles.mark} key={mark.alt}>
                  <Image src={mark.src} width={190} height={190} alt={mark.alt} loading="lazy" />
                </div>
              ))}
            </div>
            <h3>Registration &amp; certification support</h3>
            <p>Guidance for the registrations your business needs.</p>
          </div>

          <div className={styles.message}>
            <p className={styles.eyebrow}>Why Legal Dhara</p>
            <h2 id="trust-section-title">
              Confidence in
              <br />
              <span>every next step.</span>
            </h2>

            <ul className={styles.benefits}>
              {benefits.map((benefit) => (
                <li key={benefit.label}>
                  <img src={`/assets/home1-trust/${benefit.icon}`} width="62" height="62" alt="" />
                  <span>{benefit.label}</span>
                </li>
              ))}
            </ul>

            <Link className={styles.button} href="/contact">
              Get Started
              <img src="/assets/home1-trust/arrow-right.svg" width="28" height="28" alt="" />
            </Link>
          </div>
        </div>

        <div className={styles.ecosystems}>
          <p>Platforms and ecosystems we support</p>
          <ul>
            <li className={styles.amazon}>
              <Image src="/assets/home1-trust/logos/amazon-dark.png" width={160} height={71} alt="Amazon" />
            </li>
            <li className={styles.google}>
              <Image src="/assets/home1-trust/logos/google.png" width={168} height={52} alt="Google" />
            </li>
            <li className={styles.googleG}>
              <Image src="/assets/home1-trust/logos/google-g.png" width={64} height={64} alt="Google" />
            </li>
            <li className={styles.hp}>
              <Image src="/assets/home1-trust/logos/hp.png" width={48} height={48} alt="HP" />
            </li>
            <li className={styles.phonePe}>
              <Image src="/assets/home1-trust/logos/phonepe.png" width={48} height={48} alt="" />
              <span>PhonePe</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
