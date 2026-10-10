"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import AnimatedIcon from "./AnimatedIcon";
import { SITE_CONFIG } from "@/lib/content";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name (at least 2 characters)"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service or solution"),
  message: z.string().min(10, "Please provide some details (at least 10 characters)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const SERVICE_OPTIONS = [
  "Odoo ERP Implementation",
  "AI Process Automation",
  "Aramco Cybersecurity Compliance",
  "Brand Identity & UI/UX Design",
  "Web Application & CRM Development",
  "Performance Marketing & SEO",
  "Other / Custom Consultation",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Post to internal API route stub
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Unable to send message to the server.");
      }

      // 2. Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#7c5cff", "#c58bff", "#06b6d4", "#25D366"],
      });

      // 3. Open WhatsApp with pre-filled message
      const text = encodeURIComponent(
        `*New Strategy Inquiry via Analytix Website*\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n*Interested In:* ${data.service}\n\n*Message:* ${data.message}`
      );
      const whatsappUrl = `https://wa.me/971504813114?text=${text}`;

      // Open in a new tab
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again or WhatsApp us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="rounded-[22px] border border-white/[0.14] bg-white/[0.06] backdrop-blur-xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
      {isSuccess ? (
        <div className="py-12 text-center flex flex-col items-center">
          <div className="h-16 w-16 rounded-full bg-[#25D366]/20 border border-[#25D366] flex items-center justify-center text-[#25D366] mb-5 shadow-[0_0_30px_rgba(37,211,102,0.35)]">
            <AnimatedIcon type="check" glowColor="green">
              <CheckCircle2 className="h-8 w-8" />
            </AnimatedIcon>
          </div>
          <h3 className="font-heading text-2xl font-bold text-white mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-[#b9b4cc] max-w-md mx-auto mb-6">
            We have opened WhatsApp for instant live connection with our senior solutions engineers. You can also expect an email response within 2 hours.
          </p>
          <button
            type="button"
            onClick={() => setIsSuccess(false)}
            className="rounded-full border border-white/20 bg-white/[0.08] px-6 py-2.5 text-sm font-medium text-white hover:bg-white/[0.14] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {errorMessage && (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300 flex items-center gap-3">
              <AnimatedIcon type="default" glowColor="purple">
                <AlertCircle className="h-5 w-5 shrink-0" />
              </AnimatedIcon>
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Your Full Name <span className="text-[#168BFF]">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Faisal Al-Rashidi"
              {...register("name")}
              className={`w-full rounded-xl border bg-[#0A1930]/80 px-4 py-3.5 text-white placeholder-white/30 backdrop-blur-md outline-none transition-all ${
                errors.name
                  ? "border-red-400 focus:border-red-400"
                  : "border-[rgba(72,139,255,0.25)] focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]"
              }`}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Work Email Address <span className="text-[#168BFF]">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="faisal@company.com"
              {...register("email")}
              className={`w-full rounded-xl border bg-[#0A1930]/80 px-4 py-3.5 text-white placeholder-white/30 backdrop-blur-md outline-none transition-all ${
                errors.email
                  ? "border-red-400 focus:border-red-400"
                  : "border-[rgba(72,139,255,0.25)] focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]"
              }`}
            />
            {errors.email && (
              <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>

          {/* Service Dropdown */}
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
              Service or Solution of Interest <span className="text-[#168BFF]">*</span>
            </label>
            <select
              id="service"
              {...register("service")}
              className={`w-full rounded-xl border bg-[#0A1930] px-4 py-3.5 text-white backdrop-blur-md outline-none transition-all ${
                errors.service
                  ? "border-red-400 focus:border-red-400"
                  : "border-[rgba(72,139,255,0.25)] focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]"
              }`}
            >
              <option value="" disabled className="text-white/40">
                Select an option...
              </option>
              {SERVICE_OPTIONS.map((opt) => (
                <option key={opt} value={opt} className="bg-[#071426] text-white">
                  {opt}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1.5 text-xs text-red-400">{errors.service.message}</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
              Project Scope or Message <span className="text-[#168BFF]">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your timeline, team size, current systems, or key objectives..."
              {...register("message")}
              className={`w-full rounded-xl border bg-[#0A1930]/80 px-4 py-3.5 text-white placeholder-white/30 backdrop-blur-md outline-none transition-all resize-none ${
                errors.message
                  ? "border-red-400 focus:border-red-400"
                  : "border-[rgba(72,139,255,0.25)] focus:border-[#168BFF] focus:ring-1 focus:ring-[#168BFF]"
              }`}
            />
            {errors.message && (
              <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#1677FF] via-[#1d65d4] to-[#168BFF] py-4 text-base font-semibold text-white shadow-[0_0_25px_rgba(22,119,255,0.45)] border border-blue-400/40 transition-all hover:shadow-[0_0_40px_rgba(22,139,255,0.75)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <AnimatedIcon type="cta" glowColor="cyan">
                  <Send className="h-4 w-4" />
                </AnimatedIcon>
                <span>Submit & Connect on WhatsApp</span>
              </>
            )}
          </button>

          <p className="text-center text-xs text-[#b9b4cc] flex items-center justify-center gap-1.5">
            <AnimatedIcon type="cta" glowColor="green">
              <MessageSquare className="h-3.5 w-3.5 text-[#25D366]" />
            </AnimatedIcon>
            <span>Opens direct WhatsApp chat with our Dubai & Riyadh engineering office.</span>
          </p>
        </form>
      )}
    </div>
  );
}
