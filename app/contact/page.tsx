"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section className="mx-auto max-w-6xl px-6 pt-40 pb-20">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <span className="section-label">Get in touch</span>
          <h1 className="mb-6 text-3xl font-black tracking-tighter uppercase md:text-4xl">
            Contact Us
          </h1>
          <p className="text-muted mb-12 max-w-md text-sm leading-relaxed">
            Have questions about the platform? Our team is here to help you navigate the
            future of vehicle sharing.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Mail className="text-brand h-5 w-5" />
              </div>
              <div>
                <p className="text-muted text-[10px] font-black tracking-widest uppercase">
                  Email
                </p>
                <p className="text-sm font-bold">hr.rentrik@gmail.com</p>
              </div>
            </div>
            {/* <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <Phone className="text-brand w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted uppercase tracking-widest font-black">Phone</p>
                                <p className="text-sm font-bold">+1 (555) RENTRIK</p>
                            </div>
                        </div> */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <MapPin className="text-brand h-5 w-5" />
              </div>
              <div>
                <p className="text-muted text-[10px] font-black tracking-widest uppercase">
                  Office
                </p>
                <p className="text-sm font-bold">219K/20P, Prayagraj</p>
              </div>
            </div>
          </div>

          <div className="glass-card border-brand/20 bg-brand/5 mt-16 rounded-3xl p-8">
            <div className="mb-4 flex items-center gap-3">
              <Sparkles className="text-brand h-5 w-5" />
              <h4 className="text-sm font-black tracking-widest uppercase">AI Support</h4>
            </div>
            <p className="text-muted text-xs leading-relaxed">
              Our AI chatbot is available 24/7 for instant answers to common questions.
              Look for the chat bubble in the bottom right!
            </p>
          </div>
        </div>

        <div className="glass-card rounded-[3rem] border-white/5 p-10">
          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-full flex-col items-center justify-center space-y-6 text-center"
            >
              <div className="bg-accent-green/20 flex h-20 w-20 items-center justify-center rounded-full">
                <Send className="text-accent-green h-10 w-10" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl font-black uppercase">Message Sent</h3>
                <p className="text-muted text-sm">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </div>
              <button
                onClick={() => setSent(false)}
                className="btn-secondary px-8 py-2 text-xs font-black uppercase"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-muted text-[10px] font-black tracking-widest uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="focus:border-brand w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm transition-colors focus:outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-muted text-[10px] font-black tracking-widest uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="focus:border-brand w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm transition-colors focus:outline-none"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-muted text-[10px] font-black tracking-widest uppercase">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="focus:border-brand w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm transition-colors focus:outline-none"
                  placeholder="How can we help?"
                />
              </div>
              <button
                type="submit"
                className="btn-primary flex w-full items-center justify-center gap-2 py-4 font-black tracking-widest uppercase"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
