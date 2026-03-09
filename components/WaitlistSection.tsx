"use client";

import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollToSection = () => {
      if (window.location.hash === "#waitlist" && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    scrollToSection();
    const t = setTimeout(scrollToSection, 100);
    window.addEventListener("hashchange", scrollToSection);
    return () => {
      clearTimeout(t);
      window.removeEventListener("hashchange", scrollToSection);
    };
  }, []);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section id="waitlist" ref={sectionRef} className="px-6 py-24">
      <div className="glass-card relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] p-12 text-center">
        <div className="relative z-10">
          <span className="section-label">Early Access</span>
          <h2 className="mb-4 text-3xl font-black tracking-tighter tracking-widest uppercase md:text-4xl">
            Join the Network
          </h2>
          <p className="text-muted mx-auto mb-8 max-w-md text-sm leading-relaxed">
            Be the first to experience AI-powered mobility. Exclusive benefits for our
            first 1,000 members.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="bg-accent-green/20 flex h-12 w-12 items-center justify-center rounded-full">
                <CheckCircle2 className="text-accent-green h-6 w-6" />
              </div>
              <p className="text-lg font-bold">You&apos;re on the list!</p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="focus:border-brand flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm transition-colors focus:outline-none"
              />
              <button type="submit" className="btn-primary">
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
