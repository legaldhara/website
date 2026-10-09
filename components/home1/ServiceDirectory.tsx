"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./ServiceDirectory.module.css";

type Service = {
  id: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
  href: string;
};

type ServiceCategory = {
  id: string;
  label: string;
  image: { src: string; width: number; height: number; alt: string };
  services: Service[];
};

const categories: ServiceCategory[] = [
  {
    id: "trademark",
    label: "Trademark & IP",
    image: {
      src: "/assets/home1-services/webp/folio-1470.webp",
      width: 1470,
      height: 1070,
      alt: "Open legal folio with a trademark certificate, gold registered seal, calendar and globe",
    },
    services: [
      {
        id: "trademark-registration",
        title: "Trademark Registration",
        short: "Protect your brand",
        description: "Protect your brand with comprehensive trademark registration.",
        benefits: ["Free Search", "Expert Consultation", "Government Filing", "Certificate"],
        href: "/services/trademark-registration",
      },
      {
        id: "trademark-renewal",
        title: "Trademark Renewal",
        short: "Maintain protection",
        description: "Renew your trademark on time and maintain uninterrupted brand protection.",
        benefits: ["Renewal Filing", "Status Tracking", "Expert Support", "Reminders"],
        href: "/services/trademark-renewal",
      },
      {
        id: "international-trademark",
        title: "International Trademark",
        short: "Expand globally",
        description: "Expand brand protection globally through an international trademark application.",
        benefits: ["Madrid Protocol", "Multi-country Filing", "Global Protection", "Guidance"],
        href: "/services/international-trademark",
      },
    ],
  },
  {
    id: "registrations",
    label: "Registrations",
    image: {
      src: "/assets/home1-services/webp/registrations.webp",
      width: 1200,
      height: 883,
      alt: "Company registration certificate presented in a black legal folio",
    },
    services: [
      {
        id: "private-limited-company",
        title: "Private Limited Company",
        short: "Build a scalable company",
        description: "Incorporate a private limited company with end-to-end professional support.",
        benefits: ["Name Approval", "DIN & DSC", "MOA & AOA", "Incorporation Certificate"],
        href: "/services/pvt-ltd",
      },
      {
        id: "limited-liability-partnership",
        title: "Limited Liability Partnership",
        short: "Flexible, protected structure",
        description: "Register an LLP that combines operational flexibility with limited liability.",
        benefits: ["Name Reservation", "Partner DSC", "LLP Agreement", "Registration Filing"],
        href: "/services/llp",
      },
      {
        id: "one-person-company",
        title: "One Person Company",
        short: "Start independently",
        description: "Create a corporate structure designed for a single founder with limited liability.",
        benefits: ["Name Approval", "Director DIN", "MCA Filing", "Certificate"],
        href: "/services/opc",
      },
    ],
  },
  {
    id: "taxation",
    label: "Taxation",
    image: {
      src: "/assets/home1-services/webp/taxation.webp",
      width: 1200,
      height: 883,
      alt: "Taxation certificate presented in a black legal folio",
    },
    services: [
      {
        id: "gst-registration",
        title: "GST Registration",
        short: "Register for GST",
        description: "Complete your GST registration accurately with expert document and filing support.",
        benefits: ["Eligibility Review", "Document Check", "Application Filing", "GSTIN Support"],
        href: "/services/gst-registration",
      },
      {
        id: "gst-filing",
        title: "GST Filing",
        short: "File returns on time",
        description: "Stay compliant with accurate, timely GST return preparation and filing.",
        benefits: ["Return Preparation", "Reconciliation", "Online Filing", "Compliance Support"],
        href: "/services/gst-filing",
      },
      {
        id: "income-tax-filing",
        title: "Income Tax Filing",
        short: "File with confidence",
        description: "Prepare and file your income tax return with professional guidance.",
        benefits: ["Income Review", "Deduction Check", "ITR Preparation", "E-verification"],
        href: "/services/itr-filing",
      },
    ],
  },
  {
    id: "documentation",
    label: "Documentation",
    image: {
      src: "/assets/home1-services/webp/documentation.webp",
      width: 1200,
      height: 883,
      alt: "Legal documentation certificate presented in a black legal folio",
    },
    services: [
      {
        id: "legal-documentation",
        title: "Legal Documentation",
        short: "Draft with confidence",
        description: "Get professionally drafted legal documents tailored to your specific requirements.",
        benefits: ["Expert Drafting", "Custom Clauses", "Legal Review", "Ready-to-use Copy"],
        href: "/services/documentation",
      },
    ],
  },
];

const panelTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

export default function ServiceDirectory() {
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);
  const [selectedServiceId, setSelectedServiceId] = useState(categories[0].services[0].id);
  const activeCategory = categories.find((category) => category.id === activeCategoryId) ?? categories[0];
  const selectedService =
    activeCategory.services.find((service) => service.id === selectedServiceId) ?? activeCategory.services[0];
  const selectedIndex = activeCategory.services.findIndex((service) => service.id === selectedService.id);

  const selectCategory = (category: ServiceCategory) => {
    setActiveCategoryId(category.id);
    setSelectedServiceId(category.services[0].id);
  };

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

        <div className={styles.categories} role="tablist" aria-label="Service categories">
          {categories.map((category) => {
            const isActive = category.id === activeCategory.id;

            return (
              <button
                key={category.id}
                id={`service-category-${category.id}`}
                className={isActive ? styles.activeCategory : undefined}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls="service-category-panel"
                onClick={() => selectCategory(category)}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeCategory.id}
            id="service-category-panel"
            className={styles.layout}
            role="tabpanel"
            aria-labelledby={`service-category-${activeCategory.id}`}
            initial={{ opacity: 0, y: 18, clipPath: "inset(0 0 8% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, y: -14, clipPath: "inset(8% 0 0 0)" }}
            transition={panelTransition}
          >
            <motion.nav
              className={styles.directory}
              aria-label={`${activeCategory.label} services`}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.08 } },
              }}
            >
              <p className={styles.directoryLabel}>{activeCategory.label}</p>
              {activeCategory.services.map((service, index) => {
                const isSelected = selectedService.id === service.id;

                return (
                  <motion.button
                    key={service.id}
                    className={`${styles.serviceLink} ${isSelected ? styles.selected : ""}`}
                    type="button"
                    aria-pressed={isSelected}
                    onClick={() => setSelectedServiceId(service.id)}
                    variants={{
                      hidden: { opacity: 0, x: -18 },
                      visible: { opacity: 1, x: 0, transition: panelTransition },
                    }}
                  >
                    <span className={styles.linkNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <span>
                      <strong>{service.title}</strong>
                      <span className={styles.linkShort}>{service.short}</span>
                    </span>
                    <img src="/assets/home1-services/arrow-right.svg" alt="" width="32" height="32" />
                  </motion.button>
                );
              })}
              <p className={styles.consultation}>Expert consultation included.</p>
            </motion.nav>

            <motion.figure
              className={styles.figure}
              initial={{ opacity: 0, scale: 0.94, rotate: 1.2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ ...panelTransition, delay: 0.08 }}
            >
              <img
                src={activeCategory.image.src}
                width={activeCategory.image.width}
                height={activeCategory.image.height}
                alt={activeCategory.image.alt}
                decoding="async"
                loading="lazy"
              />
            </motion.figure>

            <div className={styles.details} aria-live="polite">
              <AnimatePresence mode="wait" initial={false}>
                <motion.article
                  key={selectedService.id}
                  id={`service-${selectedService.id}`}
                  className={`${styles.detail} ${styles.selectedDetail}`}
                  aria-labelledby={`service-heading-${selectedService.id}`}
                  initial={{ opacity: 0, x: 18, clipPath: "inset(0 0 12% 0)" }}
                  animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0% 0)" }}
                  exit={{ opacity: 0, x: -14, clipPath: "inset(10% 0 0 0)" }}
                  transition={{ ...panelTransition, duration: 0.36 }}
                >
                  <span className={styles.detailNumber} aria-hidden="true">
                    {String(selectedIndex + 1).padStart(2, "0")}
                  </span>
                  <div className={styles.detailBody}>
                    <h3 id={`service-heading-${selectedService.id}`}>{selectedService.title}</h3>
                    <p>{selectedService.description}</p>
                    <ul>
                      {selectedService.benefits.map((benefit) => (
                        <li key={benefit}>
                          <img src="/assets/home1-services/check.svg" width="20" height="20" alt="" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link className={styles.cta} href={selectedService.href}>
                      Get Started
                      <img src="/assets/home1-services/arrow-right.svg" width="24" height="24" alt="" />
                      <span className={styles.srOnly}>with {selectedService.title}</span>
                    </Link>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className={styles.footer}>
          <p className={styles.mobileConsultation}>Expert consultation included.</p>
          <p>Only applicable government fees are payable.</p>
        </div>
      </div>
    </section>
  );
}
