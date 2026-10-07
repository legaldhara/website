"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./ReviewShowcase.module.css";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % reviews.length);
  };

  const review = reviews[activeIndex];

  return (
    <section className={styles.section} aria-labelledby="reviews-title">
      <div className={styles.inner}>
        <div className={styles.summary}>
          <p className={styles.eyebrow}>Client Experiences</p>
          <h2 id="reviews-title">What our clients have to say.</h2>
          <p className={styles.lead}>Legal Dhara helps founders start, manage and grow their business.</p>

          <div className={styles.metrics} aria-label="Client review summary">
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

          <figure className={styles.artwork}>
            <Image
              src="/assets/home1-reviews/legal-diary.png"
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
          <article className={styles.reviewCard} aria-live="polite">
            <header className={styles.reviewHeader}>
              <div>
                <Image src="/assets/home1-trust/logos/google-g.png" width={42} height={42} alt="" />
                <span>Google Review</span>
              </div>
              <span className={styles.cardStars} aria-label="5 out of 5 stars">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} aria-hidden="true" />)}
              </span>
            </header>

            <div className={styles.reviewBody} key={review.name}>
              <span className={styles.quote} aria-hidden="true">“</span>
              <blockquote>{review.content}</blockquote>
              <Link className={styles.readLink} href="/contact">
                Read full review
                <ChevronRight aria-hidden="true" />
              </Link>
            </div>

            <footer className={styles.reviewFooter}>
              <div className={styles.reviewer}>
                <span className={styles.avatar}>{review.initials}</span>
                <p>
                  <strong>{review.name}</strong>
                  <span>{review.role}</span>
                </p>
              </div>
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
                <span style={{ "--review-progress": `${((activeIndex + 1) / reviews.length) * 100}%` } as CSSProperties} />
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
