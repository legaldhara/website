"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MessagesSquare } from "lucide-react";
import styles from "./ExpertGuidance.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ExpertGuidance() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    if (!section) return;

    const media = gsap.matchMedia();
    media.add(
      {
        desktop: "(min-width: 701px)",
        mobile: "(max-width: 700px)",
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
      (context) => {
        const { desktop, reduceMotion } = context.conditions as {
          desktop: boolean;
          mobile: boolean;
          reduceMotion: boolean;
        };

        if (reduceMotion) return;

        const travel = desktop ? 96 : 48;
        const lawyer = section.querySelector<HTMLElement>("[data-guidance-lawyer]");
        const heading = section.querySelector<HTMLElement>("[data-guidance-heading]");
        const caCard = section.querySelector<HTMLElement>("[data-guidance-ca]");
        const csCard = section.querySelector<HTMLElement>("[data-guidance-cs]");
        const support = section.querySelector<HTMLElement>("[data-guidance-support]");

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top 88%",
            end: desktop ? "center 28%" : "bottom 20%",
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            lawyer,
            { autoAlpha: 0, x: -travel, clipPath: "inset(0 100% 0 0)" },
            { autoAlpha: 1, x: 0, clipPath: "inset(0 0% 0 0)", duration: 1.25 },
            0,
          )
          .fromTo(
            "[data-guidance-lawyer] [data-guidance-copy]",
            { autoAlpha: 0, x: -travel * 0.35 },
            { autoAlpha: 1, x: 0, duration: 0.75, stagger: 0.1 },
            0.55,
          )
          .fromTo(
            heading,
            { autoAlpha: 0, x: travel * 0.7, y: -24 },
            { autoAlpha: 1, x: 0, y: 0, duration: 1.05 },
            0.18,
          )
          .fromTo(
            "[data-guidance-heading] [data-guidance-copy]",
            { autoAlpha: 0, x: travel * 0.32 },
            { autoAlpha: 1, x: 0, duration: 0.72, stagger: 0.09 },
            0.5,
          )
          .fromTo(
            caCard,
            { autoAlpha: 0, x: -travel * 0.72, y: 42 },
            { autoAlpha: 1, x: 0, y: 0, duration: 1.05 },
            0.72,
          )
          .fromTo(
            "[data-guidance-ca] [data-guidance-copy]",
            { autoAlpha: 0, x: travel * 0.28 },
            { autoAlpha: 1, x: 0, duration: 0.66, stagger: 0.08 },
            1.05,
          )
          .fromTo(
            csCard,
            { autoAlpha: 0, x: travel, y: 24 },
            { autoAlpha: 1, x: 0, y: 0, duration: 1.05 },
            0.92,
          )
          .fromTo(
            "[data-guidance-cs] [data-guidance-copy]",
            { autoAlpha: 0, x: -travel * 0.28 },
            { autoAlpha: 1, x: 0, duration: 0.66, stagger: 0.08 },
            1.25,
          )
          .fromTo(
            support,
            { autoAlpha: 0, y: 60, scale: 0.97 },
            { autoAlpha: 1, y: 0, scale: 1, duration: 0.9 },
            1.35,
          );
      },
    );

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="expert-guidance-title">
      <div className={styles.grid}>
        <article className={styles.lawyerCard} data-guidance-lawyer>
          <Image
            src="/assets/home1-guidance/lawyer.webp"
            width={1024}
            height={1536}
            sizes="(max-width: 700px) calc(100vw - 32px), 37vw"
            alt="Lawyer holding a leather legal folio in an office"
          />
          <div className={styles.imageOverlay}>
            <h3 data-guidance-copy>Lawyers</h3>
            <p data-guidance-copy>For contracts, notices and litigation support.</p>
            <Link href="/contact" data-guidance-copy>
              Consult a Lawyer
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </article>

        <div className={styles.centreColumn}>
          <header className={styles.header} data-guidance-heading>
            <span className={styles.rule} data-guidance-copy aria-hidden="true" />
            <h2 id="expert-guidance-title" data-guidance-copy>
              Good advice.
              <br />
              A clearer next step.
            </h2>
            <p data-guidance-copy>Legal, financial and compliance support from the right professional.</p>
          </header>

          <article className={styles.expertCard} data-guidance-ca>
            <div className={styles.landscapeImage}>
              <Image
                src="/assets/home1-guidance/chartered-accountant.webp"
                width={1448}
                height={1086}
                sizes="(max-width: 700px) calc(100vw - 32px), 30vw"
                alt="Chartered accountant working at a desk"
              />
            </div>
            <div className={styles.expertCopy}>
              <h3 data-guidance-copy>Chartered Accountants (CAs)</h3>
              <p data-guidance-copy>For tax filings, audits and financial planning.</p>
              <Link href="/contact" data-guidance-copy>
                Consult a CA
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>

        <div className={styles.rightColumn}>
          <article className={styles.expertCard} data-guidance-cs>
            <div className={styles.landscapeImage}>
              <Image
                src="/assets/home1-guidance/company-secretary.webp"
                width={1449}
                height={1086}
                sizes="(max-width: 700px) calc(100vw - 32px), 30vw"
                alt="Company secretary seated at a desk in a modern office"
              />
            </div>
            <div className={styles.expertCopy}>
              <h3 data-guidance-copy>Company Secretaries (CSs)</h3>
              <p data-guidance-copy>For regulatory compliance and governance.</p>
              <Link href="/contact" data-guidance-copy>
                Consult a CS
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>

          <aside className={styles.guidanceCard} data-guidance-support>
            <MessagesSquare aria-hidden="true" />
            <div>
              <h3>Not sure who to speak to?</h3>
              <p>Tell us what you need. We’ll guide you.</p>
              <Link href="/contact">
                Talk to our team
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
