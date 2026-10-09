import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessagesSquare } from "lucide-react";
import styles from "./ExpertGuidance.module.css";

export default function ExpertGuidance() {
  return (
    <section className={styles.section} aria-labelledby="expert-guidance-title">
      <div className={styles.grid}>
        <article className={styles.lawyerCard}>
          <Image
            src="/assets/home1-guidance/lawyer.webp"
            width={1024}
            height={1536}
            sizes="(max-width: 700px) calc(100vw - 32px), 37vw"
            alt="Lawyer holding a leather legal folio in an office"
          />
          <div className={styles.imageOverlay}>
            <h3>Lawyers</h3>
            <p>For contracts, notices and litigation support.</p>
            <Link href="/contact">
              Consult a Lawyer
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </article>

        <div className={styles.centreColumn}>
          <header className={styles.header}>
            <span className={styles.rule} aria-hidden="true" />
            <h2 id="expert-guidance-title">
              Good advice.
              <br />
              A clearer next step.
            </h2>
            <p>Legal, financial and compliance support from the right professional.</p>
          </header>

          <article className={styles.expertCard}>
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
              <h3>Chartered Accountants (CAs)</h3>
              <p>For tax filings, audits and financial planning.</p>
              <Link href="/contact">
                Consult a CA
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>
        </div>

        <div className={styles.rightColumn}>
          <article className={styles.expertCard}>
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
              <h3>Company Secretaries (CSs)</h3>
              <p>For regulatory compliance and governance.</p>
              <Link href="/contact">
                Consult a CS
                <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </article>

          <aside className={styles.guidanceCard}>
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
