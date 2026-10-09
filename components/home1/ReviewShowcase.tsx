"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./ReviewShowcase.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type ReviewDirection = -1 | 1;

const reviewVariants = {
  enter: (direction: ReviewDirection) => ({ opacity: 0, x: direction * 28 }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: (direction: ReviewDirection) => ({
    opacity: 0,
    x: direction * -18,
    transition: { duration: 0.22, ease: "easeIn" as const },
  }),
};

const reviews = [
  {
    name: "Rajesh Kumar",
    role: "Tech Startup Founder",
    initials: "RK",
    content: "Excellent service! Got my trademark registered in just 15 days. The team was very professional and guided me through every step. Highly recommend their zero-cost trademark service.",
  },
  {
    name: "Priya Sharma",
    role: "E-commerce Business Owner",
    initials: "PS",
    content: "Best decision to choose Legal Dhara for our registration. The process was hassle-free, and the team handled everything professionally and efficiently.",
  },
  {
    name: "Amit Patel",
    role: "Manufacturing Business Owner",
    initials: "AP",
    content: "Their registration service saved us so much time and effort. The team was knowledgeable, responsive and clear throughout the entire process.",
  },
  {
    name: "Sunita Singh",
    role: "Retail Chain Owner",
    initials: "SS",
    content: "Outstanding support for our intellectual property work. They helped us secure our patents and trademarks efficiently with professional guidance.",
  },
  {
    name: "Vikram Gupta",
    role: "Software Company CEO",
    initials: "VG",
    content: "Comprehensive legal services that keep our business running smoothly. Their proactive approach to compliance management is exceptional.",
  },
];

export default function ReviewShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [direction, setDirection] = useState<ReviewDirection>(1);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateVisibility = () => setIsDocumentVisible(!document.hidden);
    const updateMotionPreference = () => setReduceMotion(motionQuery.matches);

    updateVisibility();
    updateMotionPreference();
    document.addEventListener("visibilitychange", updateVisibility);
    motionQuery.addEventListener("change", updateMotionPreference);

    return () => {
      document.removeEventListener("visibilitychange", updateVisibility);
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (isPaused || !isDocumentVisible || reduceMotion) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isDocumentVisible, isPaused, reduceMotion]);

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
            "[data-review-summary]",
            { autoAlpha: 0, y: desktop ? 38 : 22 },
            { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.09 },
          )
          .fromTo(
            "[data-review-metrics]",
            { autoAlpha: 0, x: desktop ? -34 : -20 },
            { autoAlpha: 1, x: 0, duration: 0.62 },
            0.35,
          )
          .fromTo(
            "[data-review-artwork]",
            { clipPath: "inset(0 0 100% 0)", scale: 1.03 },
            { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 0.95 },
            0.54,
          )
          .fromTo(
            "[data-review-card]",
            { autoAlpha: 0, x: desktop ? 54 : 26, scale: 0.975 },
            { autoAlpha: 1, x: 0, scale: 1, duration: 0.9 },
            0.48,
          );
      },
    );

    return () => media.revert();
  }, { scope: sectionRef });

  const showPrevious = () => {
    setDirection(-1);
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setDirection(1);
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const review = reviews[activeIndex];

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="reviews-title">
      <div className={styles.inner}>
        <div className={styles.summary}>
          <p className={styles.eyebrow} data-review-summary>Client Experiences</p>
          <h2 id="reviews-title" data-review-summary>What our clients have to say.</h2>
          <p className={styles.lead} data-review-summary>Legal Dhara helps founders start, manage and grow their business.</p>

          <div className={styles.metrics} data-review-metrics aria-label="Client review summary">
            <div>
              <strong>20,000+</strong>
              <span>Happy customers</span>
            </div>
            <span className={styles.metricDivider} aria-hidden="true" />
            <div className={styles.rating}>
              <Image src="/assets/home1-trust/logos/google-g.png" width={54} height={54} alt="Google" />
              <strong>4.5</strong>
              <span className={styles.stars} aria-label="4.5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} aria-hidden="true" />)}
              </span>
            </div>
          </div>

          <figure className={styles.artwork} data-review-artwork>
            <Image
              src="/assets/home1-reviews/legal-diary.webp"
              width={1560}
              height={970}
              sizes="(max-width: 700px) calc(100vw - 32px), 46vw"
              alt="Legal Dhara diary, legal documents, pen and office plant"
            />
            <figcaption>Legal Dhara is a Startup India registered company.</figcaption>
          </figure>
        </div>

        <div
          className={styles.carouselArea}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <article className={styles.reviewCard} data-review-card aria-live="polite">
            <header className={styles.reviewHeader}>
              <div>
                <Image src="/assets/home1-trust/logos/google-g.png" width={42} height={42} alt="" />
                <span>Google Review</span>
              </div>
              <span className={styles.cardStars} aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} aria-hidden="true" />)}
              </span>
            </header>

            <AnimatePresence initial={false} mode="wait" custom={direction}>
              <motion.div
                className={styles.reviewBody}
                key={review.name}
                custom={direction}
                variants={reviewVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={reduceMotion ? { duration: 0 } : undefined}
              >
                <span className={styles.quote} aria-hidden="true">“</span>
                <blockquote>{review.content}</blockquote>
                <Link className={styles.readLink} href="/contact">
                  Read full review
                  <ChevronRight aria-hidden="true" />
                </Link>
              </motion.div>
            </AnimatePresence>

            <footer className={styles.reviewFooter}>
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.div
                  className={styles.reviewer}
                  key={`reviewer-${review.name}`}
                  custom={direction}
                  variants={reviewVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={reduceMotion ? { duration: 0 } : undefined}
                >
                  <span className={styles.avatar}>{review.initials}</span>
                  <p>
                    <strong>{review.name}</strong>
                    <span>{review.role}</span>
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className={styles.controls}>
                <button type="button" onClick={showPrevious} aria-label="Show previous review">
                  <ChevronLeft aria-hidden="true" />
                </button>
                <button type="button" onClick={showNext} aria-label="Show next review">
                  <ChevronRight aria-hidden="true" />
                </button>
              </div>
            </footer>

            <div className={styles.progressRow}>
              <span>{String(activeIndex + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
              <span className={styles.progressTrack} aria-hidden="true">
                <span style={{ "--review-progress": (activeIndex + 1) / reviews.length } as CSSProperties} />
              </span>
            </div>
          </article>

          <Link className={styles.allReviews} href="/contact">
            See all our reviews
            <ChevronRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
