"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { fadeInUp, motion } from "@/lib/motion";
import { ChevronDown, MessageCircle, Headphones, Shield, Send } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { secureApi } from "@/config/apiClient";

interface FormData {
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  subject: string;
  message: string;
}


export default function ContactForm(): JSX.Element {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ): void => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await secureApi.post(
        "/api/v1/query/postquery",
        {
          fullName: formData.name,
          email: formData.email,
          phone: `${formData.countryCode}${formData.phone}`,
          subject: formData.subject,
          message: formData.message,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.status === 200 || res.status === 201) {
        toast.success("Query submitted successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          countryCode: "+91",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "An unexpected error occurred."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="py-8 px-4 md:px-8 lg:px-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-3 py-1 rounded-full mb-2 border border-blue-200">
            <MessageCircle className="h-3.5 w-3.5 text-deep-blue" />
            <span className="text-xs font-bold text-deep-blue tracking-wide">
              EXPERT SUPPORT
            </span>
          </div>
          <h2 className="text-xl md:text-5xl font-poppins font-semibold text-deep-blue mb-2 leading-tight">
            Still Have Questions? Talk to Our Experts!
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-snug">
            Need personalized advice? Our experienced team is{" "}
            <span className="font-semibold text-deep-blue">
              ready to help you anytime
            </span>
            .
          </p>
        </motion.div>

        {/* Form + Image */}
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          {/* Left Side - Image */}
          <motion.div
            className="flex justify-center lg:justify-end order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm aspect-square">
              <Image
                src="assets/csp.webp"
                alt="Professional business consultant illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            className="flex justify-center lg:justify-start order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-5 md:p-6 border border-gray-100 w-full max-w-md">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-gradient-to-br from-deep-blue to-[#1B4061] rounded-xl mb-2 shadow-lg">
                  <Headphones className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-deep-blue mb-0.5">
                  Talk To Our Experts
                </h3>
                <p className="text-xs md:text-sm font-medium text-gray-600">
                  We're Here To Help You
                </p>
              </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
  {/* Name */}
  <label htmlFor="name" className="sr-only">
    Name
  </label>
  <input
    id="name"
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    required
    minLength={2}
    maxLength={50}
    pattern="[A-Za-z\s]+"
    title="Please enter a valid name (letters only)"
    placeholder="Enter Your Name*"
    className="w-full px-3.5 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-deep-blue/50 focus:outline-none transition-colors placeholder:text-gray-400"
  />

  {/* Phone + Country Code */}
  <div className="flex gap-2">
    <div className="relative w-1/3">
      <label htmlFor="countryCode" className="sr-only">
        Country Code
      </label>
      <select
        id="countryCode"
        name="countryCode"
        value={formData.countryCode}
        onChange={handleChange}
        className="appearance-none w-full h-full px-2.5 py-2.5 text-xs rounded-xl border-2 border-gray-200 focus:border-deep-blue/50 focus:outline-none bg-white cursor-pointer"
      >
        <option value="+91">IN (+91)</option>
        <option value="+1">US (+1)</option>
        <option value="+44">UK (+44)</option>
        <option value="+61">AU (+61)</option>
        <option value="+971">AE (+971)</option>
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500 pointer-events-none" />
    </div>

    <label htmlFor="phone" className="sr-only">
      Phone Number
    </label>
    <input
      id="phone"
      type="tel"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      required
      pattern="[0-9]{10}"
      maxLength={10}
      title="Please enter a valid 10-digit phone number"
      placeholder="Enter your Phone No.*"
      className="flex-1 px-3.5 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-deep-blue/50 focus:outline-none transition-colors placeholder:text-gray-400"
    />
  </div>

  {/* Email */}
  <label htmlFor="email" className="sr-only">
    Email
  </label>
  <input
    id="email"
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="your.email@example.com"
    className="w-full px-3.5 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-deep-blue/50 focus:outline-none transition-colors placeholder:text-gray-400"
  />

  {/* Subject */}
  <label htmlFor="subject" className="sr-only">
    Subject
  </label>
  <select
    id="subject"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
    required
    className="w-full px-3.5 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-deep-blue/50 focus:outline-none transition-colors bg-white cursor-pointer"
  >
    <option value="">Select Subject*</option>
    <option value="Trademark">Trademark & IP</option>
    <option value="Registrations">Registrations</option>
    <option value="GST">GST</option>
    <option value="Documentation">Documentation</option>
    <option value="Others">Others</option>
  </select>

  {/* Message */}
  <label htmlFor="message" className="sr-only">
    Message
  </label>
  <div>
    <textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      minLength={10}
      maxLength={500}
      placeholder="Enter Your Message (minimum 10 characters)*"
      className="w-full px-3.5 py-2.5 text-sm rounded-xl border-2 border-gray-200 focus:border-deep-blue/50 focus:outline-none transition-colors placeholder:text-gray-400 resize-none h-20"
    />
    <p className="text-xs text-gray-500 mt-1 text-right">
      {formData.message.length}/500 characters
    </p>
  </div>

  {/* Submit Button */}
  <button
    type="submit"
    disabled={loading}
    className="w-full py-2.5 px-5 rounded-xl font-bold text-sm text-white bg-brand-orange transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] shadow-md flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
  >
    {loading ? (
      <>
        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-4 h-4" />
        Submitting...
      </>
    ) : (
      <>
        <Send className="w-3.5 h-3.5" />
        Claim Free Consultation
      </>
    )}
  </button>

  <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 mt-2 px-2">
    <Shield className="w-3.5 h-3.5 text-green-500" />
    <p>Your info is safe. We never share details.</p>
  </div>
</form>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
