'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <span className="section-label">Get in touch</span>
                    <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-6 uppercase">Contact Us</h1>
                    <p className="text-muted text-sm mb-12 leading-relaxed max-w-md">
                        Have questions about the platform? Our team is here to help you navigate the future of vehicle sharing.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <Mail className="text-brand w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted uppercase tracking-widest font-black">Email</p>
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
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                                <MapPin className="text-brand w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-[10px] text-muted uppercase tracking-widest font-black">Office</p>
                                <p className="text-sm font-bold">219K/20P, Prayagraj</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 p-8 glass-card rounded-3xl border-brand/20 bg-brand/5">
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles className="text-brand w-5 h-5" />
                            <h4 className="text-sm font-black uppercase tracking-widest">AI Support</h4>
                        </div>
                        <p className="text-xs text-muted leading-relaxed">
                            Our AI chatbot is available 24/7 for instant answers to common questions. Look for the chat bubble in the bottom right!
                        </p>
                    </div>
                </div>

                <div className="glass-card p-10 rounded-[3rem] border-white/5">
                    {sent ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center space-y-6"
                        >
                            <div className="w-20 h-20 bg-accent-green/20 rounded-full flex items-center justify-center">
                                <Send className="text-accent-green w-10 h-10" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black uppercase mb-2">Message Sent</h3>
                                <p className="text-sm text-muted">We'll get back to you within 24 hours.</p>
                            </div>
                            <button onClick={() => setSent(false)} className="btn-secondary px-8 py-2 text-xs uppercase font-black">Send another</button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formState.name}
                                    onChange={e => setFormState({ ...formState, name: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-3 focus:outline-none focus:border-brand transition-colors text-sm"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formState.email}
                                    onChange={e => setFormState({ ...formState, email: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-3 focus:outline-none focus:border-brand transition-colors text-sm"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase tracking-widest text-muted">Message</label>
                                <textarea
                                    required
                                    rows={5}
                                    value={formState.message}
                                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand transition-colors text-sm resize-none"
                                    placeholder="How can we help?"
                                />
                            </div>
                            <button type="submit" className="w-full btn-primary py-4 uppercase tracking-widest font-black flex items-center justify-center gap-2">
                                Send Message <Send size={16} />
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
