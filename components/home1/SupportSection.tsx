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
import styles from "./SupportSection.module.css";

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
  return (
    <section className={styles.section} aria-labelledby="support-title">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Trusted service</p>
          <h2 id="support-title">Support that keeps things moving.</h2>
          <p className={styles.lead}>Expertise, visibility and timely help for your business.</p>
        </div>

        <div className={styles.dashboard} aria-label="Legal Dhara dashboard preview">
          <div className={styles.dashboardTopbar}>
            <span>Legal Dhara</span>
            <span className={styles.previewBadge}><i /> Dashboard preview</span>
          </div>

          <div className={styles.dashboardBody}>
            <nav className={styles.dashboardNav} aria-label="Dashboard preview navigation">
              <span className={styles.activeNav}><Folder aria-hidden="true" /> My requests</span>
              <span><FileText aria-hidden="true" /> Documents</span>
              <span><MessageCircle aria-hidden="true" /> Messages</span>
              <span><CircleHelp aria-hidden="true" /> Help</span>
            </nav>

            <div className={styles.dashboardContent}>
              <div className={styles.dashboardHeading}>
                <h3>Your next step, clearly.</h3>
                <p>Requests and updates in one place.</p>
              </div>

              <div className={styles.progress} aria-label="Request progress: review in progress">
                <span className={styles.complete}><Check aria-hidden="true" /></span>
                <i className={styles.progressDone} />
                <span className={styles.current} />
                <i />
                <span />
                <div className={styles.progressLabels}><b>Request</b><b>Review</b><b>Filing</b></div>
              </div>

              <div className={styles.requestCard}>
                <FileText aria-hidden="true" />
                <div><strong>Trademark registration</strong></div>
                <span>In progress</span>
                <ArrowRight aria-hidden="true" />
              </div>

              <div className={styles.requestCard}>
                <FileText aria-hidden="true" />
                <div><strong>Documents</strong><small>Application draft, ID proof, address proof</small></div>
                <span className={styles.ready}>Ready for review</span>
                <ArrowRight aria-hidden="true" />
              </div>

              <div className={styles.supportCard}>
                <MessageCircle aria-hidden="true" />
                <div><strong>Expert support</strong><small>We&apos;re here to help.</small></div>
                <ArrowRight aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.benefits}>
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className={styles.benefit} key={title}>
              <span className={styles.icon}><Icon aria-hidden="true" /></span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
