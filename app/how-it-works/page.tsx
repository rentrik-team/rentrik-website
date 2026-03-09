'use client';

import React, { useState } from 'react';
import {
    BarChart3,
    Bot,
    Calendar,
    Car,
    Cpu,
    Key,
    Search,
    Wallet,
    Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowItWorksPage() {
    const [activeTab, setActiveTab] = useState<'lender' | 'owner'>('lender');

    const lenderSteps = [
        {
            icon: <Search className="w-6 h-6" />,
            title: "Intelligent Search",
            description: "Our AI doesn't just filter; it understands. Tell us your destination, group size, and vibe, and we'll find the perfect match.",
            detail: "AI-driven sentiment analysis of reviews ensures you get exactly what's promised."
        },
        {
            icon: <Calendar className="w-6 h-6" />,
            title: "Dynamic Booking",
            description: "Book for as little as 4 hours or up to 15 days. Our dynamic pricing ensures you always get the neighborhood rate.",
            detail: "No paperwork. No counters. Just a digital handshake and you're ready."
        },
        {
            icon: <Key className="w-6 h-6" />,
            title: "Smart Handover",
            description: "Meet your neighbor at a convenient local spot. Use our secure app to verify vehicle condition and unlock your journey.",
            detail: "Real-time GPS tracking and 24/7 support keep you moving safely."
        }
    ];

    const ownerSteps = [
        {
            icon: <Car className="w-6 h-6" />,
            title: "Seamless Listing",
            description: "List your vehicle in under 5 minutes. Our AI automatically pulls specs and suggests professional-grade pricing.",
            detail: "Automatic VIN decoding and high-res image enhancement included."
        },
        {
            icon: <Bot className="w-6 h-6" />,
            title: "AI Vetting",
            description: "Every lender is vetted by our proprietary AI trust engine. We only match you with high-rated, verified neighbors.",
            detail: "Behavioral analysis and KYC verification happen in the background."
        },
        {
            icon: <Wallet className="w-6 h-6" />,
            title: "Automated Earnings",
            description: "Watch your idle asset generate passive income. Payments are processed instantly and deposited to your wallet.",
            detail: "Detailed tax reporting and earnings analytics at your fingertips."
        }
    ];

    return (
        <div className="min-h-screen bg-navy">
            <section className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="bg-mesh absolute inset-0 -z-10" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand/5 blur-[120px] -z-10" />
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-center lg:text-left"
                        >
                            <span className="section-label">The Blueprint</span>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 uppercase leading-none">
                                THE <span className="text-gradient">NETWORK</span> <br />
                                EFFECT.
                            </h1>
                            <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed">
                                Rentrik isn&apos;t just a rental platform. It&apos;s a decentralized mobility network powered by AI and community trust.
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
                                { value: "15 days", label: "Max Rental", Icon: Calendar }
                            ].map((stat, i) => (
                                <div key={i} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 backdrop-blur-sm hover:border-brand/30 transition-colors">
                                    <stat.Icon className="text-brand/80 mb-2" size={20} />
                                    <p className="text-2xl font-black text-white">{stat.value}</p>
                                    <p className="text-muted text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex justify-center mb-16">
                        <div className="bg-white/[0.03] p-1.5 rounded-2xl border border-white/5 flex backdrop-blur-xl">
                            <button
                                onClick={() => setActiveTab('lender')}
                                className={`px-12 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'lender' ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-muted hover:text-white'}`}
                            >
                                I want to Rent
                            </button>
                            <button
                                onClick={() => setActiveTab('owner')}
                                className={`px-12 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${activeTab === 'owner' ? 'bg-brand text-white shadow-lg shadow-brand/20' : 'text-muted hover:text-white'}`}
                            >
                                I want to Host
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 relative">
                        <div className="hidden lg:block absolute top-24 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="contents"
                            >
                                {(activeTab === 'lender' ? lenderSteps : ownerSteps).map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex flex-col items-center text-center group"
                                    >
                                        <div className="w-20 h-20 rounded-[2rem] bg-white/[0.03] border border-white/10 flex items-center justify-center mb-8 group-hover:border-brand/50 group-hover:bg-brand/5 transition-all duration-500 relative">
                                            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-navy border border-white/10 flex items-center justify-center text-[10px] font-black text-brand">
                                                0{idx + 1}
                                            </div>
                                            <div className="text-brand group-hover:scale-110 transition-transform duration-500">
                                                {step.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{step.title}</h3>
                                        <p className="text-muted text-sm leading-relaxed mb-6 px-4">{step.description}</p>
                                        <div className="mt-auto p-4 rounded-2xl bg-white/[0.02] border border-white/5 text-[10px] font-medium text-brand/80 uppercase tracking-widest leading-relaxed">
                                            {step.detail}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white/[0.01]">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="glass-card rounded-[3rem] p-12 border-brand/20 bg-brand/5 relative overflow-hidden">
                            <div className="ai-scan"></div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-brand rounded-2xl flex items-center justify-center">
                                    <Cpu className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-black uppercase tracking-widest text-brand">Core Technology</h4>
                                    <p className="text-xl font-black uppercase">Rentrik Engine v2.0</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="p-4 rounded-2xl bg-navy/50 border border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted">Trust Analysis</span>
                                        <span className="text-[10px] font-black text-accent-green">99.8% ACCURACY</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-[99.8%] bg-accent-green"></div>
                                    </div>
                                </div>
                                <div className="p-4 rounded-2xl bg-navy/50 border border-white/5">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted">Price Optimization</span>
                                        <span className="text-[10px] font-black text-brand">REAL-TIME</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-[85%] bg-brand"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <p className="text-2xl font-black tracking-tighter">1.2M+</p>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-muted">Data Points/Sec</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                                    <p className="text-2xl font-black tracking-tighter">&lt; 50ms</p>
                                    <p className="text-[9px] font-black uppercase tracking-widest text-muted">Match Latency</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand/20 blur-[60px] -z-10"></div>
                    </div>

                    <div>
                        <span className="section-label">Intelligence</span>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 uppercase">
                            NOT JUST AN APP. <br />
                            <span className="text-muted">A SMART ECOSYSTEM.</span>
                        </h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <BarChart3 className="text-brand w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-2">Predictive Pricing</h4>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Our algorithms analyze local demand, events, and weather to suggest the optimal price for owners and the best deal for lenders.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Zap className="text-brand w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-black uppercase mb-2">Instant Matching</h4>
                                    <p className="text-sm text-muted leading-relaxed">
                                        Say goodbye to waiting. Our AI matches you with available vehicles that fit your specific profile and history instantly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6">
                <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-12 text-center border-white/5">
                    <h2 className="text-3xl font-black tracking-tighter mb-8 uppercase">Radical Transparency</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <p className="text-4xl font-black tracking-tighter mb-2">0%</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted">Listing Fees</p>
                        </div>
                        <div className="relative">
                            <div className="hidden md:block absolute top-1/2 -left-4 w-px h-12 bg-white/10 -translate-y-1/2"></div>
                            <p className="text-4xl font-black tracking-tighter mb-2">15%</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted">Network Fee</p>
                            <div className="hidden md:block absolute top-1/2 -right-4 w-px h-12 bg-white/10 -translate-y-1/2"></div>
                        </div>
                        <div>
                            <p className="text-4xl font-black tracking-tighter mb-2">$1M</p>
                            <p className="text-[10px] font-black uppercase tracking-widest text-muted">Liability Cover</p>
                        </div>
                    </div>
                    <p className="mt-12 text-xs text-muted leading-relaxed max-w-md mx-auto italic">
                        &ldquo;We believe in a fair network. Owners keep 85% of every rental, and lenders pay exactly what they see. No hidden cleaning fees or service surcharges.&rdquo;
                    </p>
                </div>
            </section>
        </div>
    );
}
