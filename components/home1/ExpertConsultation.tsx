"use client";

import type { ChangeEvent, FormEvent } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast from "react-hot-toast";
import { publicApi } from "@/config/publicApi";
import styles from "./ExpertConsultation.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const initialForm = {
  name: "",
  countryCode: "+91",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

const countryCodes = [
  ["+91", "IN (+91)"],
  ["+1", "US (+1)"],
  ["+44", "UK (+44)"],
  ["+61", "AU (+61)"],
  ["+971", "AE (+971)"],
];

const services = ["Trademark & IP", "Registrations", "GST", "Documentation", "Others"];

export default function ExpertConsultation() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
            end: desktop ? "center 34%" : "center 46%",
            scrub: desktop ? 0.75 : 0.55,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(
            "[data-consultation-visual]",
            { clipPath: "inset(0 100% 0 0)", scale: 1.025 },
            { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.05 },
          )
          .fromTo(
            "[data-consultation-copy]",
            { autoAlpha: 0, y: desktop ? 34 : 22 },
            { autoAlpha: 1, y: 0, duration: 0.68, stagger: 0.09 },
            0.42,
          )
          .fromTo(
            "[data-consultation-form-heading]",
            { autoAlpha: 0, y: desktop ? 30 : 18 },
            { autoAlpha: 1, y: 0, duration: 0.62, stagger: 0.08 },
            0.3,
          )
          .fromTo(
            "[data-consultation-field]",
            { opacity: 0.45, y: desktop ? 26 : 16 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.055 },
            0.62,
          );
      },
    );

    return () => media.revert();
  }, { scope: sectionRef });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^\d{7,15}$/.test(formData.phone)) {
      toast.error("Enter a valid phone number using digits only.");
      return;
    }

    if (formData.message.trim().length < 10) {
      toast.error("Please provide at least 10 characters in your message.");
      return;
    }

    setIsSubmitting(true);

    try {
      await publicApi.post(
        "/api/v1/query/postquery",
        {
          fullName: formData.name.trim(),
          email: formData.email.trim(),
          phone: `${formData.countryCode}${formData.phone}`,
          subject: formData.subject,
          message: formData.message.trim(),
        },
        { headers: { "Content-Type": "application/json" } },
      );

      toast.success("Your consultation request has been submitted.");
      setFormData(initialForm);
    } catch (error: unknown) {
      const message =
        typeof error === "object" && error && "response" in error
          ? (error as { response?: { data?: { message?: string } } }).response?.data?.message
          : undefined;
      toast.error(message || "Unable to submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} className={styles.section} aria-labelledby="consultation-title">
      <div className={styles.inner}>
        <div className={styles.visual} data-consultation-visual>
          <picture>
            <source
              media="(max-width: 900px)"
              srcSet="/assets/home1-consultation/consultation-mobile.png"
            />
            <img
              src="/assets/home1-consultation/consultation-desktop.png"
              alt="Legal consultant reviewing a document with a client"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div className={styles.shade} aria-hidden="true" />

        <div className={styles.visualCopy} data-consultation-copy>
          <p className={styles.eyebrow}>Expert Support</p>
          <h2 id="consultation-title">
            Still have questions?
            <span>Talk to our experts.</span>
          </h2>
          <p>Need personalized advice? Our experienced team is ready to help you anytime.</p>
        </div>
        <p className={styles.visualNote} data-consultation-copy>A clearer next step starts with a conversation.</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <span className={styles.formRule} data-consultation-form-heading aria-hidden="true" />
          <h3 data-consultation-form-heading>Talk to our experts</h3>
          <p className={styles.formLead} data-consultation-form-heading>We’re here to help you.</p>

          <label data-consultation-field>
            <span>Name</span>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              autoComplete="name"
              required
            />
          </label>

          <div className={styles.phoneRow} data-consultation-field>
            <label>
              <span>Country code</span>
              <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
                {countryCodes.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
              </select>
            </label>
            <label>
              <span>Phone number</span>
              <input
                name="phone"
                type="tel"
                inputMode="numeric"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel-national"
                required
              />
            </label>
          </div>

          <label data-consultation-field>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              autoComplete="email"
              required
            />
          </label>

          <label data-consultation-field>
            <span>Subject</span>
            <select name="subject" value={formData.subject} onChange={handleChange} required>
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option value={service} key={service}>{service}</option>)}
            </select>
          </label>

          <label data-consultation-field>
            <span>Message</span>
            <span className={styles.messageField}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us how we can help"
                maxLength={500}
                required
              />
              <span>{formData.message.length}/500</span>
            </span>
          </label>

          <button type="submit" data-consultation-field disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Claim Free Consultation"}
            {!isSubmitting && <ArrowRight aria-hidden="true" />}
          </button>

          <p className={styles.privacy} data-consultation-field>
            <ShieldCheck aria-hidden="true" />
            Your information is safe. We never share details.
          </p>
        </form>
      </div>
    </section>
  );
}
