'use client';

import React from 'react';
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
    UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function SafetyPage() {
    const safetyFeatures = [
        {
            icon: <Fingerprint className="w-6 h-6" />,
            title: "Biometric KYC",
            description: "We use advanced facial recognition and document verification to ensure every user is exactly who they say they are.",
            specs: ["AES-256 Encryption", "Liveness Detection", "Global ID Database"]
        },
        {
            icon: <Eye className="w-6 h-6" />,
            title: "AI Visual Inspection",
            description: "Our AI analyzes photos before and after every rental to detect even the smallest scratches or dents automatically.",
            specs: ["Computer Vision", "Sub-mm Precision", "Auto-Damage Logging"]
        },
        {
            icon: <Activity className="w-6 h-6" />,
            title: "Real-time Telematics",
            description: "Optional smart-tracking provides instant alerts for unusual driving behavior, ensuring vehicle safety and accountability.",
            specs: ["GPS Tracking", "Impact Detection", "Behavioral Analysis"]
        }
    ];

    return (
        <div className="min-h-screen bg-navy">
            <section className="pt-40 pb-24 px-6 relative overflow-hidden">
                <div className="bg-mesh absolute inset-0 -z-10" />
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
                <div className="absolute top-1/4 left-0 w-80 h-80 bg-accent-green/15 blur-[100px] rounded-full -z-10" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand/10 blur-[100px] rounded-full -z-10" />

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-green/10 border border-accent-green/20 mb-6 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
                                </span>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-accent-green">Security Protocol: Active</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase leading-[0.9]">
                                FORTRESS <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green via-emerald-400 to-brand">SECURITY.</span>
                            </h1>

                            <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed">
                                Engineered with a multi-layered trust architecture for the world's safest peer-to-peer mobility network.
                            </p>

                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                                {[
                                    { icon: <Lock size={14} />, label: "E2E Encryption" },
                                    { icon: <ShieldCheck size={14} />, label: "Institutional Grade" },
                                    { icon: <UserCheck size={14} />, label: "KYC Verified" }
                                ].map((badge, i) => (
                                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:border-accent-green/30 transition-colors">
                                        <span className="text-accent-green">{badge.icon}</span>
                                        <span className="text-[9px] font-black uppercase tracking-widest">{badge.label}</span>
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
                                { value: "$1M", label: "Liability Cover", Icon: ShieldAlert }
                            ].map((stat, i) => (
                                <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm hover:border-accent-green/20 transition-colors">
                                    <stat.Icon className="text-accent-green/80 mb-2" size={20} />
                                    <p className="text-2xl font-black text-white">{stat.value}</p>
                                    <p className="text-muted text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 relative">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {safetyFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.15, duration: 0.6 }}
                                className="group relative"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-accent-green/20 to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                                <div className="glass-card relative p-10 rounded-[2.5rem] border-white/5 bg-navy/80 backdrop-blur-xl h-full flex flex-col overflow-hidden border-dashed border-2">
                                    <div className="ai-scan group-hover:opacity-50 transition-opacity"></div>

                                    <div className="flex justify-between items-start mb-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent-green/50 group-hover:bg-accent-green/5 transition-all duration-500">
                                            <div className="text-brand group-hover:text-accent-green group-hover:scale-110 transition-all duration-500">
                                                {feature.icon}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <div className="px-3 py-1 rounded-full bg-accent-green/10 border border-accent-green/20 text-[8px] font-black text-accent-green uppercase tracking-widest mb-2">
                                                Module 0{idx + 1}
                                            </div>
                                            <span className="text-[8px] font-mono text-muted uppercase tracking-tighter">ID: RTK-SEC-{idx}X9</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 uppercase tracking-tight group-hover:text-accent-green transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-muted text-sm leading-relaxed mb-8 flex-grow">
                                        {feature.description}
                                    </p>

                                    <div className="space-y-2 mb-8">
                                        {feature.specs?.map((spec, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-accent-green/50"></div>
                                                <span className="text-[9px] font-mono text-muted uppercase tracking-wider">{spec}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[9px] font-black uppercase tracking-widest text-muted">Verification Status</span>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse"></div>
                                            <span className="text-[9px] font-black uppercase tracking-widest text-accent-green">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white/[0.01]">
                <div className="max-w-6xl mx-auto">
                    <div className="glass-card rounded-[3.5rem] p-12 border-white/5 overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-green/5 blur-[100px] -z-10"></div>

                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="section-label">Reputation System</span>
                                <h2 className="text-4xl font-black tracking-tighter mb-6 uppercase">THE RENTRIK TRUST SCORE</h2>
                                <p className="text-muted text-sm leading-relaxed mb-8">
                                    Every member of our community has a dynamic Trust Score. This isn't just a rating; it's a comprehensive analysis of behavior, reliability, and community contribution.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="text-accent-green w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase">Verified History</h4>
                                            <p className="text-xs text-muted">Successful rentals and on-time returns boost your score instantly.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-accent-green/20 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="text-accent-green w-4 h-4" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm uppercase">Community Vouching</h4>
                                            <p className="text-xs text-muted">High-quality reviews from other verified members add significant weight.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex justify-center">
                                <div className="w-64 h-64 rounded-full border-[12px] border-white/5 flex flex-col items-center justify-center relative">
                                    <div className="absolute inset-0 rounded-full border-[12px] border-accent-green border-t-transparent rotate-45 shadow-[0_0_30px_rgba(34,197,94,0.2)]"></div>
                                    <p className="text-4xl md:text-5xl font-black tracking-tighter">982</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-accent-green">EXCELLENT</p>
                                </div>
                                <div className="absolute -bottom-4 bg-navy px-6 py-2 rounded-full border border-white/10 text-[9px] font-black uppercase tracking-widest">
                                    PRO MEMBER STATUS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-6">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">
                    <div className="glass-card p-6 rounded-xl border-brand/20 bg-brand/5">
                        <div className="w-10 h-10 bg-brand/20 rounded-lg flex items-center justify-center mb-4">
                            <ShieldAlert className="text-brand w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Emergency Protocol</h3>
                        <p className="text-muted text-xs leading-relaxed mb-4">
                            In the rare event of an incident, our automated response system activates. We provide instant roadside assistance, legal support, and insurance coordination within minutes.
                        </p>
                        <ul className="space-y-2 mb-5">
                            {['24/7 Roadside Assistance', 'Instant Accident Reporting', 'Replacement Vehicle Support'].map(item => (
                                <li key={item} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tight">
                                    <AlertTriangle className="text-brand w-3.5 h-3.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <button className="btn-primary w-full py-2.5 text-[10px] uppercase font-black tracking-widest">Emergency Guide</button>
                    </div>

                    <div className="glass-card p-6 rounded-xl border-white/5 flex flex-col justify-between">
                        <div>
                            <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                                <FileText className="text-white w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-black mb-3 uppercase tracking-tighter">Insurance Coverage</h3>
                            <p className="text-muted text-xs leading-relaxed mb-4">
                                Every Rentrik journey is protected by our comprehensive $1M liability policy. We've partnered with industry leaders to ensure you're covered from pickup to drop-off.
                            </p>
                        </div>
                        <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[9px] font-black uppercase tracking-widest text-muted">Partner</span>
                                <span className="text-[9px] font-black uppercase tracking-widest text-white">LLOYD'S OF LONDON</span>
                            </div>
                            <p className="text-[9px] text-muted leading-relaxed italic">
                                "Providing institutional-grade protection for the decentralized mobility era."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-black tracking-tighter mb-12 uppercase">Community Guidelines</h2>
                    <div className="grid sm:grid-cols-2 gap-6 text-left">
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h4 className="font-black text-sm uppercase mb-2">Be Neighborly</h4>
                            <p className="text-xs text-muted leading-relaxed">Treat every vehicle as if it were your own. Respect pickup times and local parking rules.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h4 className="font-black text-sm uppercase mb-2">Cleanliness First</h4>
                            <p className="text-xs text-muted leading-relaxed">Return vehicles in the same condition you received them. No smoking or pets unless specified.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h4 className="font-black text-sm uppercase mb-2">Communication</h4>
                            <p className="text-xs text-muted leading-relaxed">Keep all communication within the Rentrik app for your safety and record-keeping.</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                            <h4 className="font-black text-sm uppercase mb-2">Honesty</h4>
                            <p className="text-xs text-muted leading-relaxed">Report any issues or incidents immediately. Transparency is the foundation of our trust.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
