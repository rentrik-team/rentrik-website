"use client";

import React from "react";
import {
  ArrowRight,
  Bot,
  ShieldCheck,
  TrendingUp,
  MessageSquare,
  Phone,
  Clock,
  MapPin,
  ShieldAlert,
  Zap,
  X,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import { WaitlistSection } from "@/components/WaitlistSection";
import { AppDeviceMockup } from "@/components/AppDeviceMockup";
import Link from "next/link";

const Hero: React.FC = () => (
  <section className="relative flex min-h-[80vh] items-center overflow-hidden px-6 pt-40 pb-20">
    <div className="bg-mesh absolute inset-0 -z-10"></div>

    <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <span className="section-label">AI-Powered Mobility</span>
        <h1 className="mb-6 text-4xl leading-[1] font-black tracking-tighter md:text-6xl">
          RENT <span className="text-gradient">SMARTER</span>.
        </h1>
        <p className="text-muted mb-8 max-w-md text-sm leading-relaxed">
          The world's first AI-driven peer-to-peer vehicle network. Rent verified rides or
          turn your idle car into a high-yield asset.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a href="#waitlist" className="btn-primary group px-8 py-3 text-sm">
            Join Waitlist
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <Link href="/listing" className="btn-secondary px-8 py-3 text-sm">
            Explore Vehicles
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative hidden min-h-[380px] items-center justify-center lg:flex"
      >
        <div className="relative flex items-end justify-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative z-10 w-[180px] shrink-0 origin-bottom -rotate-[14deg] transform"
          >
            <AppDeviceMockup
              src="/assets/app/Simulator Screenshot - iPhone 16 Pro - 2026-03-10 at 01.08.30.png"
              alt="Rentrik app - Home"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="relative z-20 -ml-6 w-[180px] shrink-0 origin-bottom rotate-[10deg] transform"
          >
            <AppDeviceMockup
              src="/assets/app/Simulator Screenshot - iPhone 16 Pro - 2026-03-10 at 01.10.15.png"
              alt="Rentrik app - AI suggestion"
            />
          </motion.div>
        </div>
        <div className="bg-brand/10 pointer-events-none absolute top-1/2 left-1/2 -z-0 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 blur-[100px]"></div>
      </motion.div>
    </div>
  </section>
);

const BentoFeatures: React.FC = () => (
  <section className="px-6 py-16">
    <div className="mx-auto max-w-6xl">
      <div className="mb-8">
        <span className="section-label">Features</span>
        <h2 className="text-2xl font-black tracking-tighter uppercase md:text-3xl tracking-widest">
          Smart features
        </h2>
      </div>

      <div className="bento-grid">
        <div className="bento-item border-brand/20 from-brand/10 via-brand/5 col-span-4 overflow-hidden bg-gradient-to-br to-transparent md:col-span-2">
          <div className="flex h-full flex-col">
            <div className="bg-brand/30 ring-brand/30 mb-4 flex h-10 w-10 items-center justify-center rounded-xl ring-1">
              <Bot className="text-brand h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-bold tracking-tight text-white">
              AI-first filtering
            </h3>
            <p className="text-muted flex-1 text-xs leading-relaxed">
              Our AI analyzes your needs, group size, and budget to suggest the most
              cost-effective vehicles in seconds.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="border-brand/30 bg-brand/10 text-brand rounded-md border px-2.5 py-1 text-[9px] font-semibold">
                Smart matching
              </span>
              <span className="border-brand/30 bg-brand/10 text-brand rounded-md border px-2.5 py-1 text-[9px] font-semibold">
                Price prediction
              </span>
            </div>
          </div>
        </div>

        <div className="bento-item bg-accent-green/5 border-accent-green/10 col-span-4 md:col-span-2">
          <div className="flex h-full flex-col">
            <div className="bg-accent-green/20 mb-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <ShieldCheck className="text-accent-green h-5 w-5" />
            </div>
            <h3 className="mb-2 text-base font-bold tracking-tight">
              KYC trust system
            </h3>
            <p className="text-muted mb-4 flex-1 text-xs leading-relaxed">
              Every lender and owner undergoes identity verification. Rent with peace of
              mind.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md border border-accent-green/30 bg-accent-green/10 px-2.5 py-1 text-[9px] font-semibold text-accent-green">
                Verified
              </span>
              <span className="rounded-md border border-accent-green/20 bg-accent-green/5 px-2.5 py-1 text-[9px] font-medium text-accent-green/90">
                ID verified
              </span>
            </div>
          </div>
        </div>

        <div className="bento-item bg-accent-amber/5 border-accent-amber/10 col-span-2 md:col-span-1">
          <div className="bg-accent-amber/20 mb-3 flex h-7 w-7 items-center justify-center rounded-lg">
            <Clock className="text-accent-amber" size={14} />
          </div>
          <h3 className="mb-1 text-xs font-bold tracking-tight">15-day max</h3>
          <p className="text-muted text-[10px] leading-relaxed">
            Short-term rentals that ensure availability.
          </p>
        </div>

        <div className="bento-item col-span-2 bg-white/[0.02] md:col-span-1">
          <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-lg bg-white/10">
            <MapPin className="text-white" size={14} />
          </div>
          <h3 className="mb-1 text-xs font-bold tracking-tight">Location aware</h3>
          <p className="text-muted text-[10px] leading-relaxed">
            Geo-fencing shows the most relevant results.
          </p>
        </div>

        <div className="bento-item col-span-4 border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent md:col-span-2">
          <div className="flex h-full items-center gap-5">
            <div className="flex shrink-0 gap-2">
              <div className="bg-brand/20 flex h-10 w-10 items-center justify-center rounded-xl">
                <MessageSquare size={18} className="text-brand" />
              </div>
              <div className="bg-accent-green/20 flex h-10 w-10 items-center justify-center rounded-xl">
                <Phone size={18} className="text-accent-green" />
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="mb-1 text-base font-bold tracking-tight text-white">
                Built-in chat & call
              </h3>
              <p className="text-muted text-xs leading-relaxed">
                Connect with owners instantly. Secure, encrypted, no personal numbers.
              </p>
            </div>
          </div>
        </div>

        <div className="bento-item border-brand/20 from-brand/10 col-span-4 self-start bg-gradient-to-br to-transparent px-5 py-3 md:col-span-4">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-base font-bold italic leading-snug text-white md:text-lg">
              &ldquo;The Airbnb for your garage.&rdquo;
            </p>
            <p className="text-muted shrink-0 text-[9px] font-medium uppercase tracking-wider">
              - TechCrunch (Coming Soon)
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const KeyDifferences: React.FC = () => (
  <section className="bg-white/[0.01] px-6 py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mb-16 text-center">
        <span className="section-label mx-auto">Comparison</span>
        <h2 className="mb-4 text-4xl font-black tracking-tighter uppercase md:text-5xl tracking-widest">
          <span className="text-gradient">RENTRIK</span> EDGE
        </h2>
        <p className="text-muted text-sm font-medium tracking-widest uppercase">
          Disrupting the old rental model.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card rounded-3xl border-red-500/10 p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500/10">
              <ShieldAlert className="h-5 w-5 text-red-500" />
            </div>
            <h3 className="text-lg font-black tracking-tight uppercase">
              Traditional Rental
            </h3>
          </div>
          <ul className="space-y-4">
            {[
              "High corporate markups & hidden fees",
              "Limited variety of generic vehicles",
              "Manual, tedious search & booking",
              "Anonymous, untrusted transactions",
              "Inflexible pickup/drop-off locations",
            ].map((item, idx) => (
              <li
                key={idx}
                className="text-muted flex items-center gap-3 text-xs font-medium"
              >
                <X className="h-4 w-4 shrink-0 text-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card border-brand/20 bg-brand/5 relative overflow-hidden rounded-3xl p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="bg-brand shadow-brand/40 flex h-10 w-10 items-center justify-center rounded-xl shadow-lg">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-lg font-black tracking-tight uppercase">
              Rentrik Network
            </h3>
          </div>
          <ul className="space-y-4">
            {[
              "Direct P2P pricing - 30% more affordable",
              "Vast variety from local owners",
              "AI-powered instant matching",
              "Full KYC verification for trust",
              "Hyper-local neighborhood pickups",
            ].map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-xs font-bold text-white"
              >
                <CheckCircle2 className="text-brand h-4 w-4 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <Hero />
      <BentoFeatures />
      <KeyDifferences />
      <WaitlistSection />
    </>
  );
}
