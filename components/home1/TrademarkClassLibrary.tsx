import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers3, Search, Tag, Zap } from "lucide-react";
import styles from "./TrademarkClassLibrary.module.css";

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
  return (
    <section className={styles.section} aria-labelledby="class-library-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>The Trademark Class Library</p>
            <h2 id="class-library-title">A place for every business.</h2>
            <p className={styles.subtitle}>Find the trademark class that fits your product or service.</p>
          </div>

          <div className={styles.classCount} aria-label="45 classes, free to explore">
            <p>
              <strong>45</strong> classes
            </p>
            <span>Free to explore</span>
          </div>
        </header>

        <form className={styles.searchForm} action="/services/trademark-class-finder" method="get">
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

        <p className={styles.suggestions}>Try: Clothing · Advertising · Software</p>

        <div className={styles.content}>
          <figure className={styles.artwork}>
            <Image
              src="/assets/home1-classes/class-library.png"
              width={1456}
              height={976}
              sizes="(max-width: 700px) calc(100vw - 44px), (max-width: 1100px) 55vw, 56vw"
              alt="Open archival box containing trademark class folders for software, clothing and business services"
            />
            <figcaption>45 classes. Organised around what you do.</figcaption>
          </figure>

          <div className={styles.classDetails}>
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

        <footer className={styles.footer}>
          <div className={styles.benefits}>
            {benefits.map(({ icon: Icon, title, description }) => (
              <div className={styles.benefit} key={title}>
                <Icon aria-hidden="true" />
                <p>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </p>
              </div>
            ))}
          </div>
          <p className={styles.searches}>10k+ searches · Always free</p>
        </footer>
      </div>
    </section>
  );
}
