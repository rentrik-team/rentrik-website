"use client";

import React from "react";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Eye,
  FileText,
  Fingerprint,
  Lock,
  ShieldAlert,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SafetyPage() {
  const safetyFeatures = [
    {
      icon: <Fingerprint className="h-6 w-6" />,
      title: "Biometric KYC",
      description:
        "We use advanced facial recognition and document verification to ensure every user is exactly who they say they are.",
      specs: ["AES-256 Encryption", "Liveness Detection", "Global ID Database"],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "AI Visual Inspection",
      description:
        "Our AI analyzes photos before and after every rental to detect even the smallest scratches or dents automatically.",
      specs: ["Computer Vision", "Sub-mm Precision", "Auto-Damage Logging"],
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-time Telematics",
      description:
        "Optional smart-tracking provides instant alerts for unusual driving behavior, ensuring vehicle safety and accountability.",
      specs: ["GPS Tracking", "Impact Detection", "Behavioral Analysis"],
    },
  ];

  return (
    <div className="bg-navy min-h-screen">
      <section className="relative overflow-hidden px-6 pt-40 pb-24">
        <div className="bg-mesh absolute inset-0 -z-10" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="bg-accent-green/15 absolute top-1/4 left-0 -z-10 h-80 w-80 rounded-full blur-[100px]" />
        <div className="bg-brand/10 absolute right-0 bottom-1/4 -z-10 h-80 w-80 rounded-full blur-[100px]" />

        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <div className="bg-accent-green/10 border-accent-green/20 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="bg-accent-green absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                  <span className="bg-accent-green relative inline-flex h-2 w-2 rounded-full" />
                </span>
                <span className="text-accent-green text-[10px] font-black tracking-[0.2em] uppercase">
                  Security Protocol: Active
                </span>
              </div>

              <h1 className="mb-6 text-4xl leading-[0.9] font-black tracking-tighter uppercase md:text-5xl">
                FORTRESS <br />
                <span className="from-accent-green to-brand bg-gradient-to-r via-emerald-400 bg-clip-text text-transparent">
                  SECURITY.
                </span>
              </h1>

              <p className="text-muted max-w-lg text-base leading-relaxed md:text-lg">
                Engineered with a multi-layered trust architecture for the world&apos;s
                safest peer-to-peer mobility network.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                {[
                  { icon: <Lock size={14} />, label: "E2E Encryption" },
                  { icon: <ShieldCheck size={14} />, label: "Institutional Grade" },
                  { icon: <UserCheck size={14} />, label: "KYC Verified" },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className="hover:border-accent-green/30 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-sm transition-colors"
                  >
                    <span className="text-accent-green">{badge.icon}</span>
                    <span className="text-[9px] font-black tracking-widest uppercase">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "256-bit", label: "AES Encryption", Icon: Lock },
                { value: "100%", label: "KYC Verified", Icon: UserCheck },
                { value: "24/7", label: "Support", Icon: ShieldCheck },
                { value: "$1M", label: "Liability Cover", Icon: ShieldAlert },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="hover:border-accent-green/20 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm transition-colors"
                >
                  <stat.Icon className="text-accent-green/80 mb-2" size={20} />
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

      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {safetyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group relative"
              >
                <div className="from-accent-green/20 absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-b to-transparent opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"></div>

                <div className="glass-card bg-navy/80 relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border-2 border-dashed border-white/5 p-10 backdrop-blur-xl">
                  <div className="ai-scan transition-opacity group-hover:opacity-50"></div>

                  <div className="mb-10 flex items-start justify-between">
                    <div className="group-hover:border-accent-green/50 group-hover:bg-accent-green/5 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition-all duration-500">
                      <div className="text-brand group-hover:text-accent-green transition-all duration-500 group-hover:scale-110">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="bg-accent-green/10 border-accent-green/20 text-accent-green mb-2 rounded-full border px-3 py-1 text-[8px] font-black tracking-widest uppercase">
                        Module 0{idx + 1}
                      </div>
                      <span className="text-muted font-mono text-[8px] tracking-tighter uppercase">
                        ID: RTK-SEC-{idx}X9
                      </span>
                    </div>
                  </div>

                  <h3 className="group-hover:text-accent-green mb-4 text-2xl font-black tracking-tight uppercase transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted mb-8 flex-grow text-sm leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mb-8 space-y-2">
                    {feature.specs?.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="bg-accent-green/50 h-1 w-1 rounded-full"></div>
                        <span className="text-muted font-mono text-[9px] tracking-wider uppercase">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-6">
                    <span className="text-muted text-[9px] font-black tracking-widest uppercase">
                      Verification Status
                    </span>
                    <div className="flex items-center gap-1.5">
                      <div className="bg-accent-green h-1.5 w-1.5 animate-pulse rounded-full"></div>
                      <span className="text-accent-green text-[9px] font-black tracking-widest uppercase">
                        Active
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.01] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card relative overflow-hidden rounded-[3.5rem] border-white/5 p-12">
            <div className="bg-accent-green/5 absolute top-0 right-0 -z-10 h-full w-1/2 blur-[100px]"></div>

            <div className="grid items-center gap-16 lg:grid-cols-2">
              <div>
                <span className="section-label">Reputation System</span>
                <h2 className="mb-6 text-4xl font-black tracking-tighter uppercase">
                  THE RENTRIK TRUST SCORE
                </h2>
                <p className="text-muted mb-8 text-sm leading-relaxed">
                  Every member of our community has a dynamic Trust Score. This isn&apos;t
                  just a rating; it&apos;s a comprehensive analysis of behavior,
                  reliability, and community contribution.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent-green/20 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <CheckCircle2 className="text-accent-green h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase">Verified History</h4>
                      <p className="text-muted text-xs">
                        Successful rentals and on-time returns boost your score instantly.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-accent-green/20 mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      <CheckCircle2 className="text-accent-green h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase">Community Vouching</h4>
                      <p className="text-muted text-xs">
                        High-quality reviews from other verified members add significant
                        weight.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="relative flex h-64 w-64 flex-col items-center justify-center rounded-full border-[12px] border-white/5">
                  <div className="border-accent-green absolute inset-0 rotate-45 rounded-full border-[12px] border-t-transparent shadow-[0_0_30px_rgba(34,197,94,0.2)]"></div>
                  <p className="text-4xl font-black tracking-tighter md:text-5xl">982</p>
                  <p className="text-accent-green text-[10px] font-black tracking-widest uppercase">
                    EXCELLENT
                  </p>
                </div>
                <div className="bg-navy absolute -bottom-4 rounded-full border border-white/10 px-6 py-2 text-[9px] font-black tracking-widest uppercase">
                  PRO MEMBER STATUS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="glass-card border-brand/20 bg-brand/5 rounded-xl p-6">
            <div className="bg-brand/20 mb-4 flex h-10 w-10 items-center justify-center rounded-lg">
              <ShieldAlert className="text-brand h-5 w-5" />
            </div>
            <h3 className="mb-3 text-xl font-black tracking-tighter uppercase">
              Emergency Protocol
            </h3>
            <p className="text-muted mb-4 text-xs leading-relaxed">
              In the rare event of an incident, our automated response system activates.
              We provide instant roadside assistance, legal support, and insurance
              coordination within minutes.
            </p>
            <ul className="mb-5 space-y-2">
              {[
                "24/7 Roadside Assistance",
                "Instant Accident Reporting",
                "Replacement Vehicle Support",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-[10px] font-bold tracking-tight uppercase"
                >
                  <AlertTriangle className="text-brand h-3.5 w-3.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="btn-primary w-full py-2.5 text-[10px] font-black tracking-widest uppercase">
              Emergency Guide
            </button>
          </div>

          <div className="glass-card flex flex-col justify-between rounded-xl border-white/5 p-6">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-black tracking-tighter uppercase">
                Insurance Coverage
              </h3>
              <p className="text-muted mb-4 text-xs leading-relaxed">
                Every Rentrik journey is protected by our comprehensive $1M liability
                policy. We&apos;ve partnered with industry leaders to ensure you&apos;re
                covered from pickup to drop-off.
              </p>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-muted text-[9px] font-black tracking-widest uppercase">
                  Partner
                </span>
                <span className="text-[9px] font-black tracking-widest text-white uppercase">
                  LLOYD&apos;S OF LONDON
                </span>
              </div>
              <p className="text-muted text-[9px] leading-relaxed italic">
                &ldquo;Providing institutional-grade protection for the decentralized
                mobility era.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-12 text-3xl font-black tracking-tighter uppercase">
            Community Guidelines
          </h2>
          <div className="grid gap-6 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h4 className="mb-2 text-sm font-black uppercase">Be Neighborly</h4>
              <p className="text-muted text-xs leading-relaxed">
                Treat every vehicle as if it were your own. Respect pickup times and local
                parking rules.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h4 className="mb-2 text-sm font-black uppercase">Cleanliness First</h4>
              <p className="text-muted text-xs leading-relaxed">
                Return vehicles in the same condition you received them. No smoking or
                pets unless specified.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h4 className="mb-2 text-sm font-black uppercase">Communication</h4>
              <p className="text-muted text-xs leading-relaxed">
                Keep all communication within the Rentrik app for your safety and
                record-keeping.
              </p>
            </div>
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <h4 className="mb-2 text-sm font-black uppercase">Honesty</h4>
              <p className="text-muted text-xs leading-relaxed">
                Report any issues or incidents immediately. Transparency is the foundation
                of our trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
