"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./ServiceDirectory.module.css";

const services = [
  {
    id: "registration",
    title: "Trademark Registration",
    short: "Protect your brand",
    description: "Protect your brand with comprehensive trademark registration.",
    benefits: ["Free Search", "Expert Consultation", "Government Filing", "Certificate"],
    href: "/services/trademark-registration",
  },
  {
    id: "renewal",
    title: "Trademark Renewal",
    short: "Maintain protection",
    description: "Renew trademarks to maintain continuous protection.",
    benefits: ["Renewal Filing", "Status Tracking", "Expert Support", "Reminders"],
    href: "/services/trademark-renewal",
  },
  {
    id: "international",
    title: "International Trademark",
    short: "Expand globally",
    description: "Expand brand protection globally with Madrid Protocol.",
    benefits: ["Madrid Protocol", "Multi-country Filing", "Global Protection", "Guidance"],
    href: "/services/international-trademark",
  },
];

export default function ServiceDirectory() {
  const [selectedService, setSelectedService] = useState(services[0].id);

  return (
    <section className={styles.section} aria-labelledby="service-directory-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Our Services</p>

        <div className={styles.intro}>
          <div>
            <h2 id="service-directory-title">Find the right support.</h2>
            <p className={styles.subtitle}>Legal, compliance and business services, in one place.</p>
          </div>
          <div className={styles.fees}>
            <strong>₹0 service charges</strong>
            <p>Pay only applicable government fees.</p>
          </div>
        </div>

        <nav className={styles.categories} aria-label="Service categories">
          <a className={styles.activeCategory} href="#trademark-services" aria-current="page">
            Trademark &amp; IP
          </a>
          <Link href="/services">Registrations</Link>
          <Link href="/services">Taxation</Link>
          <Link href="/services/documentation">Documentation</Link>
        </nav>

        <div className={styles.layout} id="trademark-services">
          <nav className={styles.directory} aria-label="Trademark services">
            <p className={styles.directoryLabel}>Trademark &amp; IP</p>
            {services.map((service, index) => {
              const isSelected = selectedService === service.id;

              return (
                <a
                  key={service.id}
                  className={`${styles.serviceLink} ${isSelected ? styles.selected : ""}`}
                  href={`#service-${service.id}`}
                  aria-current={isSelected ? "true" : undefined}
                  onClick={() => setSelectedService(service.id)}
                >
                  <span className={styles.linkNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{service.title}</strong>
                    <span className={styles.linkShort}>{service.short}</span>
                  </span>
                  <img src="/assets/home1-services/arrow-right.svg" alt="" width="32" height="32" />
                </a>
              );
            })}
            <p className={styles.consultation}>Expert consultation included.</p>
          </nav>

          <figure className={styles.figure}>
            <picture>
              <source
                type="image/webp"
                srcSet="/assets/home1-services/webp/folio-480.webp 480w, /assets/home1-services/webp/folio-960.webp 960w, /assets/home1-services/webp/folio-1470.webp 1470w"
                sizes="(max-width: 700px) calc(100vw - 44px), (max-width: 1100px) 45vw, 34vw"
              />
              <img
                src="/assets/home1-services/folio-master.png"
                width="1470"
                height="1070"
                alt="Open legal folio with a trademark certificate, gold registered seal, calendar and globe"
                decoding="async"
                loading="lazy"
              />
            </picture>
          </figure>

          <div className={styles.details}>
            {services.map((service, index) => {
              const isSelected = selectedService === service.id;

              return (
                <article
                  key={service.id}
                  id={`service-${service.id}`}
                  className={`${styles.detail} ${isSelected ? styles.selectedDetail : ""}`}
                  aria-labelledby={`service-heading-${service.id}`}
                >
                  <span className={styles.detailNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.detailBody}>
                    <h3 id={`service-heading-${service.id}`}>{service.title}</h3>
                    <p>{service.description}</p>
                    <ul>
                      {service.benefits.map((benefit) => (
                        <li key={benefit}>
                          <img src="/assets/home1-services/check.svg" width="20" height="20" alt="" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link className={styles.cta} href={service.href}>
                      Get Started
                      <img src="/assets/home1-services/arrow-right.svg" width="24" height="24" alt="" />
                      <span className={styles.srOnly}>with {service.title}</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.mobileConsultation}>Expert consultation included.</p>
          <p>Only applicable government fees are payable.</p>
        </div>
      </div>
    </section>
  );
}
