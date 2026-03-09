'use client';

import React, { useState, useEffect } from 'react';
import { Car, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Explore', href: '/listing' },
        { name: 'How it Works', href: '/how-it-works' },
        { name: 'Safety', href: '/safety' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-[16px]' : 'py-[18px]'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <div className={`rounded-3xl px-8 flex justify-between items-center transition-all duration-500 border-b border-white/5 ${scrolled ? 'h-16 bg-[#05070A]/95 border border-white/10 shadow-lg shadow-black/20' : 'h-[72px] bg-[#05070A]/80 border border-white/[0.08] shadow-lg shadow-black/10'}`}>
                    <Link href="/" className="flex items-center cursor-pointer group">
                        <Image
                            src="/rentrik_logo.png"
                            alt="Rentrik"
                            width={120}
                            height={40}
                            className="h-8 w-auto object-contain"
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`nav-link-bright ${pathname === link.href ? 'text-white font-black' : 'text-white/70 shadow-sm'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/#waitlist" className="btn-primary py-1.5 px-4 text-[11px]">JOIN WAITLIST</Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-6 right-6 mt-3 bg-[#05070A]/95 border border-white/10 backdrop-blur-2xl rounded-2xl p-6 flex flex-col gap-4 shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-left font-bold text-sm"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/privacy"
                            className="text-left font-bold text-sm"
                            onClick={() => setIsOpen(false)}
                        >
                            Privacy
                        </Link>
                        <Link href="/#waitlist" onClick={() => setIsOpen(false)} className="btn-primary w-full">Join Waitlist</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
