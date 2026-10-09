"use client";

import {
  ArrowRight,
  BarChart3,
  Check,
  CircleHelp,
  Clock3,
  FileText,
  Folder,
  IndianRupee,
  MessageCircle,
  Network,
} from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./SupportSection.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const benefits = [
  {
    icon: IndianRupee,
    title: "Affordable professional services",
    description: "Experienced legal and financial guidance, with value at every step.",
  },
  {
    icon: Network,
    title: "Diverse expert network",
    description: "Connect with lawyers, chartered accountants and company secretaries.",
  },
  {
    icon: BarChart3,
    title: "Easy-to-use dashboard",
    description: "Request services and track progress through clear, simple navigation.",
  },
  {
    icon: Clock3,
    title: "Quick customer support",
    description: "Get a response to your queries within 24 hours.",
  },
];

export default function SupportSection() {
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

        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top 86%",
            end: desktop ? "center 32%" : "center 48%",
            scrub: desktop ? 0.8 : 0.58,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            "[data-support-intro]",
            { autoAlpha: 0, y: desktop ? 38 : 22 },
            { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.09 },
          )
          .fromTo(
            "[data-support-dashboard]",
            { autoAlpha: 0, clipPath: "inset(8% 4% 8% 4%)", scale: 0.97 },
            { autoAlpha: 1, clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 0.9 },
            0.26,
          )
          .fromTo(
            "[data-support-dashboard-detail]",
            { autoAlpha: 0, y: desktop ? 26 : 16 },
            { autoAlpha: 1, y: 0, duration: 0.58, stagger: 0.07 },
            0.58,
          )
          .fromTo(
            "[data-support-progress]",
            { "--support-progress": 0, autoAlpha: 0.65 },
            { "--support-progress": 1, autoAlpha: 1, duration: 0.68 },
            0.76,
          )
          .fromTo(
            "[data-support-request]",
            { autoAlpha: 0, x: desktop ? 28 : 18 },
            { autoAlpha: 1, x: 0, duration: 0.52, stagger: 0.08 },
            0.92,
          );

        const benefitElements = gsap.utils.toArray<HTMLElement>("[data-support-benefit]", section);
        if (desktop) {
          timeline.fromTo(
            benefitElements,
            { autoAlpha: 0, y: 30 },
            { autoAlpha: 1, y: 0, duration: 0.56, stagger: 0.08 },
            1.12,
          );
          return;
        }

        benefitElements.forEach((benefit) => {
          gsap.fromTo(
            benefit,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: benefit,
                start: "top 92%",
                end: "top 68%",
                scrub: 0.5,
                invalidateOnRefresh: true,
              },
            },
          );
        });
      },
    );

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="support-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow} data-support-intro>Trusted service</p>
          <h2 id="support-title" data-support-intro>Support that keeps things moving.</h2>
          <p className={styles.lead} data-support-intro>Expertise, visibility and timely help for your business.</p>
        </div>

        <div className={styles.dashboard} data-support-dashboard aria-label="Legal Dhara dashboard preview">
          <div className={styles.dashboardTopbar} data-support-dashboard-detail>
            <span>Legal Dhara</span>
            <span className={styles.previewBadge}><i /> Dashboard preview</span>
          </div>

          <div className={styles.dashboardBody}>
            <nav className={styles.dashboardNav} data-support-dashboard-detail aria-label="Dashboard preview navigation">
              <span className={styles.activeNav}><Folder aria-hidden="true" /> My requests</span>
              <span><FileText aria-hidden="true" /> Documents</span>
              <span><MessageCircle aria-hidden="true" /> Messages</span>
              <span><CircleHelp aria-hidden="true" /> Help</span>
            </nav>

            <div className={styles.dashboardContent}>
              <div className={styles.dashboardHeading} data-support-dashboard-detail>
                <h3>Your next step, clearly.</h3>
                <p>Requests and updates in one place.</p>
              </div>

              <div className={styles.progress} data-support-progress aria-label="Request progress: review in progress">
                <span className={styles.complete}><Check aria-hidden="true" /></span>
                <i className={styles.progressDone} />
                <span className={styles.current} />
                <i />
                <span />
                <div className={styles.progressLabels}><b>Request</b><b>Review</b><b>Filing</b></div>
              </div>

              <div className={styles.requestCard} data-support-request>
                <FileText aria-hidden="true" />
                <div><strong>Trademark registration</strong></div>
                <span>In progress</span>
                <ArrowRight aria-hidden="true" />
              </div>

              <div className={styles.requestCard} data-support-request>
                <FileText aria-hidden="true" />
                <div><strong>Documents</strong><small>Application draft, ID proof, address proof</small></div>
                <span className={styles.ready}>Ready for review</span>
                <ArrowRight aria-hidden="true" />
              </div>

              <div className={styles.supportCard} data-support-request>
                <MessageCircle aria-hidden="true" />
                <div><strong>Expert support</strong><small>We&apos;re here to help.</small></div>
                <ArrowRight aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefits}>
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className={styles.benefit} data-support-benefit key={title}>
              <span className={styles.icon}><Icon aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
