"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ExpertNetwork.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

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
        const { desktop, reduceMotion } = context.conditions as {
          desktop: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) return;

        const cards = gsap.utils.toArray<HTMLElement>("[data-network-card]", section);
        const directions = [
          { x: -42, y: 28, rotation: -1.5 },
          { x: 44, y: 24, rotation: 1.25 },
          { x: -34, y: 42, rotation: 1.1 },
          { x: 38, y: 38, rotation: -1.25 },
        ];

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            end: desktop ? "center 28%" : "top 12%",
            scrub: 0.85,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            "[data-network-rule]",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.42 },
            0,
          )
          .fromTo(
            "[data-network-heading-copy]",
            { autoAlpha: 0, yPercent: 105 },
            { autoAlpha: 1, yPercent: 0, duration: 0.76, stagger: 0.12 },
            0.12,
          )
          .fromTo(
            "[data-network-feature]",
            { clipPath: "inset(0 0 100% 0)", y: 34 },
            { clipPath: "inset(0 0 0% 0)", y: 0, duration: 1.05 },
            0.48,
          )
          .fromTo(
            "[data-network-feature] [data-network-copy]",
            { autoAlpha: 0, y: 28 },
            { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.11 },
            0.82,
          );

        cards.forEach((card, index) => {
          const direction = directions[index] ?? directions[0];
          const position = desktop ? 1.02 + index * 0.2 : 0;
          const icon = card.querySelector("[data-network-icon]");
          const copy = card.querySelectorAll("[data-network-card-copy]");
          const cardTimeline = desktop
            ? timeline
            : gsap.timeline({
                defaults: { ease: "none" },
                scrollTrigger: {
                  trigger: card,
                  start: "top 92%",
                  end: "top 58%",
                  scrub: 0.65,
                  invalidateOnRefresh: true,
                },
              });

          cardTimeline
            .fromTo(
              card,
              {
                autoAlpha: 0,
                x: desktop ? direction.x : direction.x * 0.45,
                y: desktop ? direction.y : 24,
                rotation: desktop ? direction.rotation : 0,
                scale: 0.95,
                "--network-line-progress": 0,
              },
              {
                autoAlpha: 1,
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                "--network-line-progress": 1,
                duration: 0.92,
              },
              position,
            )
            .fromTo(
              icon,
              { autoAlpha: 0.15, scale: 0.82, strokeDashoffset: 360 },
              { autoAlpha: 1, scale: 1, strokeDashoffset: 0, duration: 0.86 },
              position + 0.14,
            )
            .fromTo(
              copy,
              { autoAlpha: 0, y: 18 },
              { autoAlpha: 1, y: 0, duration: 0.58, stagger: 0.06 },
              position + 0.3,
            );
        });
      },
    );

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={styles.network}
      aria-labelledby="expert-network-heading"
    >
      <header className={styles.header} data-network-heading>
        <span className={styles.shortRule} data-network-rule aria-hidden="true" />
        <p data-network-heading-copy>Verified Expert Network</p>
        <h2 id="expert-network-heading" data-network-heading-copy>
          Expertise, <span>connected.</span>
        </h2>
      </header>

      <div className={styles.layout}>
        <aside className={styles.feature} data-network-feature>
          <h3 data-network-copy>
            One network.
            <br />
            Four kinds of
            <br />
            expertise.
          </h3>
          <p className={styles.intro} data-network-copy>
            Connect with the right professional for your legal, financial and compliance needs.
          </p>
          <div className={styles.stat} data-network-copy>
            <strong>100+</strong>
            <span>Verified experts</span>
          </div>
          <Link className={`${styles.link} ${styles.generalLink}`} href="/contact" data-network-copy>
            Talk to an expert <Arrow />
          </Link>
        </aside>

        <div className={styles.directory}>
          {experts.map((expert) => (
            <article
              key={expert.icon}
              className={styles.expert}
              data-network-card
            >
              <svg className={styles.graphic} data-network-icon viewBox="0 0 160 160" aria-hidden="true">
                <use href={`/assets/home1-experts/role-sprite.svg#${expert.icon}`} />
              </svg>
              <p className={styles.category} data-network-card-copy>{expert.category}</p>
              <h3 data-network-card-copy>{expert.title}</h3>
              <p className={styles.description} data-network-card-copy>{expert.description}</p>
              <Link className={styles.link} href="/contact" data-network-card-copy>
                {expert.action} <Arrow />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
