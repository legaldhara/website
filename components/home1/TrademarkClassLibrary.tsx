"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3, Search, Tag, Zap } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./TrademarkClassLibrary.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const exampleClasses = [
  { number: "35", title: "Advertising & Business" },
  { number: "09", title: "Software & Electronics" },
];

const benefits = [
  { icon: Zap, title: "Instant results", description: "Under 10 seconds" },
  { icon: Layers3, title: "45 classes covered", description: "Goods and service categories" },
  { icon: Tag, title: "100% free", description: "No hidden fees. No sign-up required." },
];

export default function TrademarkClassLibrary() {
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

        const distance = desktop ? 38 : 24;
        const timeline = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: section,
            start: "top 84%",
            end: desktop ? "center 30%" : "center 42%",
            scrub: desktop ? 0.8 : 0.6,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            "[data-class-header]",
            { autoAlpha: 0, y: distance },
            { autoAlpha: 1, y: 0, duration: 0.72, stagger: 0.1 },
          )
          .fromTo(
            "[data-class-search]",
            { opacity: 0.35, y: distance * 0.7 },
            { opacity: 1, y: 0, duration: 0.64, stagger: 0.08 },
            0.25,
          )
          .fromTo(
            "[data-class-artwork]",
            { clipPath: "inset(100% 0 0 0)", scale: 1.035 },
            { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 1.05 },
            0.55,
          )
          .fromTo(
            "[data-class-record]",
            { autoAlpha: 0, x: desktop ? 34 : 20 },
            { autoAlpha: 1, x: 0, duration: 0.66, stagger: 0.08 },
            0.72,
          )
          .fromTo(
            "[data-class-divider]",
            { "--class-divider-progress": 0 },
            { "--class-divider-progress": 1, duration: 0.5 },
            1.08,
          )
          .fromTo(
            "[data-class-benefit]",
            { autoAlpha: 0, y: distance * 0.55 },
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 },
            1.16,
          );
      },
    );

    return () => media.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="class-library-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div data-class-header>
            <p className={styles.eyebrow}>The Trademark Class Library</p>
            <h2 id="class-library-title">A place for every business.</h2>
            <p className={styles.subtitle}>Find the trademark class that fits your product or service.</p>
          </div>

          <div className={styles.classCount} data-class-header aria-label="45 classes, free to explore">
            <p>
              <strong>45</strong> classes
            </p>
            <span>Free to explore</span>
          </div>
        </header>

        <form className={styles.searchForm} data-class-search action="/services/trademark-class-finder" method="get">
          <label className={styles.searchField}>
            <span className={styles.srOnly}>What do you sell or offer?</span>
            <Search aria-hidden="true" />
            <input name="q" type="search" placeholder="What do you sell or offer?" />
          </label>
          <button type="submit">
            Find my class
            <ArrowRight aria-hidden="true" />
          </button>
        </form>

        <p className={styles.suggestions} data-class-search>Try: Clothing · Advertising · Software</p>

        <div className={styles.content}>
          <figure className={styles.artwork} data-class-artwork>
            <Image
              src="/assets/home1-classes/class-library.webp"
              width={1456}
              height={976}
              sizes="(max-width: 700px) calc(100vw - 44px), (max-width: 1100px) 55vw, 56vw"
              alt="Open archival box containing trademark class folders for software, clothing and business services"
            />
            <figcaption>45 classes. Organised around what you do.</figcaption>
          </figure>

          <div className={styles.classDetails} data-class-record>
            <p className={styles.detailLabel}>Example class</p>
            <div className={styles.featuredHeading}>
              <strong>25</strong>
              <h3>Clothing &amp; Footwear</h3>
            </div>
            <p className={styles.featuredDescription}>Explore this class for clothing and footwear.</p>
            <ul className={styles.featuredItems}>
              <li>Clothing</li>
              <li>Footwear</li>
              <li>Headwear</li>
            </ul>
            <Link className={styles.exploreLink} href="/services/trademark-class-finder?class=25">
              Explore Class 25
              <ArrowRight aria-hidden="true" />
            </Link>

            <p className={`${styles.detailLabel} ${styles.otherLabel}`}>Other example classes</p>
            <div className={styles.otherClasses}>
              {exampleClasses.map((exampleClass) => (
                <Link
                  key={exampleClass.number}
                  href={`/services/trademark-class-finder?class=${exampleClass.number}`}
                >
                  <strong>{exampleClass.number}</strong>
                  <span>{exampleClass.title}</span>
                  <ArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <footer className={styles.footer} data-class-divider>
          <div className={styles.benefits}>
            {benefits.map(({ icon: Icon, title, description }) => (
              <div className={styles.benefit} data-class-benefit key={title}>
                <Icon aria-hidden="true" />
                <p>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </p>
              </div>
            ))}
          </div>
          <p className={styles.searches} data-class-benefit>10k+ searches · Always free</p>
        </footer>
      </div>
    </section>
  );
}
