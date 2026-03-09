'use client';

import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const WaitlistSection: React.FC = () => {
    const [email, setEmail] = useState('');
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const scrollToSection = () => {
            if (window.location.hash === '#waitlist' && sectionRef.current) {
                sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        scrollToSection();
        const t = setTimeout(scrollToSection, 100);
        window.addEventListener('hashchange', scrollToSection);
        return () => {
            clearTimeout(t);
            window.removeEventListener('hashchange', scrollToSection);
        };
    }, []);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setSubmitted(true);
            setEmail('');
        }
    };

    return (
        <section id="waitlist" ref={sectionRef} className="py-24 px-6">
            <div className="max-w-4xl mx-auto glass-card rounded-[2.5rem] p-12 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <span className="section-label">Early Access</span>
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4 uppercase tracking-widest">Join the Network</h2>
                    <p className="text-sm text-muted mb-8 max-w-md mx-auto leading-relaxed">
                        Be the first to experience AI-powered mobility. Exclusive benefits for our first 1,000 members.
                    </p>

                    {submitted ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center gap-4">
                            <div className="w-12 h-12 bg-accent-green/20 rounded-full flex items-center justify-center">
                                <CheckCircle2 className="text-accent-green w-6 h-6" />
                            </div>
                            <p className="text-lg font-bold">You're on the list!</p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-2.5 focus:outline-none focus:border-brand transition-colors text-sm"
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
