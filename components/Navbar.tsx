"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/listing" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Safety", href: "/safety" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${scrolled ? "py-[16px]" : "py-[18px]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-3xl border-b border-white/5 px-8 transition-all duration-500 ${scrolled ? "h-16 border border-white/10 bg-[#05070A]/95 shadow-lg shadow-black/20" : "h-[72px] border border-white/[0.08] bg-[#05070A]/80 shadow-lg shadow-black/10"}`}
        >
          <Link href="/" className="group flex cursor-pointer items-center">
            <Image
              src="/rentrik_logo.png"
              alt="Rentrik"
              width={120}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`nav-link-bright ${pathname === link.href ? "font-black text-white" : "text-white/70 shadow-sm"}`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/#waitlist" className="btn-primary px-4 py-1.5 text-[11px]">
              JOIN WAITLIST
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-1 text-white">
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
            className="absolute top-full right-6 left-6 mt-3 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#05070A]/95 p-6 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-left text-sm font-bold"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/privacy"
              className="text-left text-sm font-bold"
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/#waitlist"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full"
            >
              Join Waitlist
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
