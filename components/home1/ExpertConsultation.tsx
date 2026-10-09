"use client";

import type { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { publicApi } from "@/config/publicApi";
import styles from "./ExpertConsultation.module.css";

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
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section className={styles.section} aria-labelledby="consultation-title">
      <div className={styles.inner}>
        <div className={styles.visual}>
          <Image
            src="/assets/home1-consultation/legal-consultant.webp"
            fill
            sizes="(max-width: 800px) 100vw, 54vw"
            alt="Legal consultant reviewing a document with a client"
          />
          <div className={styles.shade} aria-hidden="true" />
          <div className={styles.visualCopy}>
            <p className={styles.eyebrow}>Expert Support</p>
            <h2 id="consultation-title">
              Still have questions?
              <span>Talk to our experts.</span>
            </h2>
            <p>Need personalized advice? Our experienced team is ready to help you anytime.</p>
          </div>
          <p className={styles.visualNote}>A clearer next step starts with a conversation.</p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <span className={styles.formRule} aria-hidden="true" />
          <h3>Talk to our experts</h3>
          <p className={styles.formLead}>We’re here to help you.</p>

          <label>
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

          <div className={styles.phoneRow}>
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

          <label>
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

          <label>
            <span>Subject</span>
            <select name="subject" value={formData.subject} onChange={handleChange} required>
              <option value="" disabled>Select a service</option>
              {services.map((service) => <option value={service} key={service}>{service}</option>)}
            </select>
          </label>

          <label>
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

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting…" : "Claim Free Consultation"}
            {!isSubmitting && <ArrowRight aria-hidden="true" />}
          </button>

          <p className={styles.privacy}>
            <ShieldCheck aria-hidden="true" />
            Your information is safe. We never share details.
          </p>
        </form>
      </div>
    </section>
  );
}
