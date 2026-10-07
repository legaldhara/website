"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./ExpertNetwork.module.css";

const experts = [
  {
    icon: "lawyer",
    category: "Legal",
    title: "Lawyer",
    description: "Legal advice, contracts, litigation and representation.",
    action: "Talk to a Lawyer",
  },
  {
    icon: "chartered-accountant",
    category: "Finance",
    title: "Chartered Accountant",
    description: "Auditing, taxation advice and financial planning.",
    action: "Talk to a CA",
  },
  {
    icon: "company-secretary",
    category: "Compliance",
    title: "Company Secretary",
    description: "Corporate governance, regulatory compliance and secretarial services.",
    action: "Talk to a CS",
  },
  {
    icon: "ip-lawyer",
    category: "Intellectual Property",
    title: "IP Lawyer",
    description: "Trademarks, copyrights, patents and IP protection.",
    action: "Talk to an IP Lawyer",
  },
];

const Arrow = () => (
  <img src="/assets/home1-experts/arrow-right.svg" alt="" width="28" height="24" />
);

export default function ExpertNetwork() {
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
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.network} ${isRevealed ? styles.revealed : ""}`}
      aria-labelledby="expert-network-heading"
    >
      <header className={styles.header}>
        <span className={styles.shortRule} aria-hidden="true" />
        <p>Verified Expert Network</p>
        <h2 id="expert-network-heading">
          Expertise, <span>connected.</span>
        </h2>
      </header>

      <div className={styles.layout}>
        <aside className={styles.feature}>
          <h3>
            One network.
            <br />
            Four kinds of
            <br />
            expertise.
          </h3>
          <p className={styles.intro}>
            Connect with the right professional for your legal, financial and compliance needs.
          </p>
          <div className={styles.stat}>
            <strong>100+</strong>
            <span>Verified experts</span>
          </div>
          <Link className={`${styles.link} ${styles.generalLink}`} href="/contact">
            Talk to an expert <Arrow />
          </Link>
        </aside>

        <div className={styles.directory}>
          {experts.map((expert, index) => (
            <article
              key={expert.icon}
              className={styles.expert}
              style={{ "--expert-sequence": index } as CSSProperties}
            >
              <svg className={styles.graphic} viewBox="0 0 160 160" aria-hidden="true">
                <use href={`/assets/home1-experts/role-sprite.svg#${expert.icon}`} />
              </svg>
              <p className={styles.category}>{expert.category}</p>
              <h3>{expert.title}</h3>
              <p className={styles.description}>{expert.description}</p>
              <Link className={styles.link} href="/contact">
                {expert.action} <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
