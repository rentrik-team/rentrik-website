"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Bot,
  Calendar,
  Car,
  Cpu,
  Key,
  Search,
  Wallet,
  Zap,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function HowItWorksPage() {
  const [activeTab, setActiveTab] = useState<"lender" | "owner">("lender");

  const lenderSteps = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Intelligent Search",
      description:
        "Our AI doesn't just filter; it understands. Tell us your destination, group size, and vibe, and we'll find the perfect match.",
      detail:
        "AI-driven sentiment analysis of reviews ensures you get exactly what's promised.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Dynamic Booking",
      description:
        "Book for as little as 4 hours or up to 15 days. Our dynamic pricing ensures you always get the neighborhood rate.",
      detail: "No paperwork. No counters. Just a digital handshake and you're ready.",
    },
    {
      icon: <Key className="h-6 w-6" />,
      title: "Smart Handover",
      description:
        "Meet your neighbor at a convenient local spot. Use our secure app to verify vehicle condition and unlock your journey.",
      detail: "Real-time GPS tracking and 24/7 support keep you moving safely.",
    },
  ];

  const ownerSteps = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "Seamless Listing",
      description:
        "List your vehicle in under 5 minutes. Our AI automatically pulls specs and suggests professional-grade pricing.",
      detail: "Automatic VIN decoding and high-res image enhancement included.",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Vetting",
      description:
        "Every lender is vetted by our proprietary AI trust engine. We only match you with high-rated, verified neighbors.",
      detail: "Behavioral analysis and KYC verification happen in the background.",
    },
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Automated Earnings",
      description:
        "Watch your idle asset generate passive income. Payments are processed instantly and deposited to your wallet.",
      detail: "Detailed tax reporting and earnings analytics at your fingertips.",
    },
  ];

  return (
    <div className="bg-navy min-h-screen">
      <section className="relative overflow-hidden px-6 pt-40 pb-20">
        <div className="bg-mesh absolute inset-0 -z-10" />
        <div className="bg-brand/5 absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 blur-[120px]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <span className="section-label">The Blueprint</span>
              <h1 className="mb-6 text-4xl leading-none font-black tracking-tighter uppercase md:text-5xl">
                THE <span className="text-gradient">NETWORK</span> <br />
                EFFECT.
              </h1>
              <p className="text-muted max-w-lg text-base leading-relaxed md:text-lg">
                Rentrik isn&apos;t just a rental platform. It&apos;s a decentralized
                mobility network powered by AI and community trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "1.2M+", label: "Data Points/Sec", Icon: Zap },
                { value: "< 50ms", label: "Match Latency", Icon: Cpu },
                { value: "99.8%", label: "Trust Accuracy", Icon: BarChart3 },
                { value: "15 days", label: "Max Rental", Icon: Calendar },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="hover:border-brand/30 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-colors"
                >
                  <stat.Icon className="text-brand/80 mb-2" size={20} />
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-muted text-[10px] font-bold tracking-widest uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex justify-center">
            <div className="flex rounded-2xl border border-white/5 bg-white/[0.03] p-1.5 backdrop-blur-xl">
              <button
                onClick={() => setActiveTab("lender")}
                className={`rounded-xl px-12 py-3 text-sm font-black tracking-widest uppercase transition-all ${activeTab === "lender" ? "bg-brand shadow-brand/20 text-white shadow-lg" : "text-muted hover:text-white"}`}
              >
                I want to Rent
              </button>
              <button
                onClick={() => setActiveTab("owner")}
                className={`rounded-xl px-12 py-3 text-sm font-black tracking-widest uppercase transition-all ${activeTab === "owner" ? "bg-brand shadow-brand/20 text-white shadow-lg" : "text-muted hover:text-white"}`}
              >
                I want to Host
              </button>
            </div>
          </div>

          <div className="relative grid gap-12 lg:grid-cols-3">
            <div className="absolute top-24 left-0 -z-10 hidden h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="contents"
              >
                {(activeTab === "lender" ? lenderSteps : ownerSteps).map((step, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="group-hover:border-brand/50 group-hover:bg-brand/5 relative mb-8 flex h-20 w-20 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.03] transition-all duration-500">
                      <div className="bg-navy text-brand absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-[10px] font-black">
                        0{idx + 1}
                      </div>
                      <div className="text-brand transition-transform duration-500 group-hover:scale-110">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="mb-4 text-2xl font-black tracking-tight uppercase">
                      {step.title}
                    </h3>
                    <p className="text-muted mb-6 px-4 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="text-brand/80 mt-auto rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-[10px] leading-relaxed font-medium tracking-widest uppercase">
                      {step.detail}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="bg-white/[0.01] px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-20 lg:grid-cols-2">
          <div className="relative">
            <div className="glass-card border-brand/20 bg-brand/5 relative overflow-hidden rounded-[3rem] p-12">
              <div className="ai-scan"></div>
              <div className="mb-8 flex items-center gap-4">
                <div className="bg-brand flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Cpu className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-brand text-xs font-black tracking-widest uppercase">
                    Core Technology
                  </h4>
                  <p className="text-xl font-black uppercase">Rentrik Engine v2.0</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-navy/50 rounded-2xl border border-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-muted text-[10px] font-black tracking-widest uppercase">
                      Trust Analysis
                    </span>
                    <span className="text-accent-green text-[10px] font-black">
                      99.8% ACCURACY
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="bg-accent-green h-full w-[99.8%]"></div>
                  </div>
                </div>
                <div className="bg-navy/50 rounded-2xl border border-white/5 p-4">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-muted text-[10px] font-black tracking-widest uppercase">
                      Price Optimization
                    </span>
                    <span className="text-brand text-[10px] font-black">REAL-TIME</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                    <div className="bg-brand h-full w-[85%]"></div>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-black tracking-tighter">1.2M+</p>
                  <p className="text-muted text-[9px] font-black tracking-widest uppercase">
                    Data Points/Sec
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-2xl font-black tracking-tighter">&lt; 50ms</p>
                  <p className="text-muted text-[9px] font-black tracking-widest uppercase">
                    Match Latency
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-brand/20 absolute -right-10 -bottom-10 -z-10 h-40 w-40 blur-[60px]"></div>
          </div>

          <div>
            <span className="section-label">Intelligence</span>
            <h2 className="mb-6 text-3xl font-black tracking-tighter uppercase md:text-4xl">
              NOT JUST AN APP. <br />
              <span className="text-muted">A SMART ECOSYSTEM.</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <BarChart3 className="text-brand h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-black uppercase">
                    Predictive Pricing
                  </h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Our algorithms analyze local demand, events, and weather to suggest
                    the optimal price for owners and the best deal for lenders.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <Zap className="text-brand h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-2 text-lg font-black uppercase">Instant Matching</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    Say goodbye to waiting. Our AI matches you with available vehicles
                    that fit your specific profile and history instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="glass-card mx-auto max-w-4xl rounded-[3rem] border-white/5 p-12 text-center">
          <h2 className="mb-8 text-3xl font-black tracking-tighter uppercase">
            Radical Transparency
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-4xl font-black tracking-tighter">0%</p>
              <p className="text-muted text-[10px] font-black tracking-widest uppercase">
                Listing Fees
              </p>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 -left-4 hidden h-12 w-px -translate-y-1/2 bg-white/10 md:block"></div>
              <p className="mb-2 text-4xl font-black tracking-tighter">15%</p>
              <p className="text-muted text-[10px] font-black tracking-widest uppercase">
                Network Fee
              </p>
              <div className="absolute top-1/2 -right-4 hidden h-12 w-px -translate-y-1/2 bg-white/10 md:block"></div>
            </div>
            <div>
              <p className="mb-2 text-4xl font-black tracking-tighter">$1M</p>
              <p className="text-muted text-[10px] font-black tracking-widest uppercase">
                Liability Cover
              </p>
            </div>
          </div>
          <p className="text-muted mx-auto mt-12 max-w-md text-xs leading-relaxed italic">
            &ldquo;We believe in a fair network. Owners keep 85% of every rental, and
            lenders pay exactly what they see. No hidden cleaning fees or service
            surcharges.&rdquo;
          </p>
        </div>
      </section>
    </div>
  );
}
