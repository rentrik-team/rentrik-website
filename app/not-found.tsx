"use client";

import Link from "next/link";
import { ArrowLeft, Car } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="relative min-h-[calc(100vh-180px)] flex flex-col items-center justify-center px-6 py-24">
      <div className="bg-mesh absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.12),transparent)]" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="section-label mx-auto">Error</span>
        <p className="text-muted mb-2 text-6xl md:text-8xl font-black tracking-tighter">
          404
        </p>
        <h1 className="mb-4 text-2xl font-black tracking-tighter text-white md:text-3xl uppercase">
          Page not found
        </h1>
        <p className="text-muted mb-10 max-w-md mx-auto text-sm leading-relaxed">
          This route doesn&apos;t exist. Head back home or explore our fleet.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary group inline-flex items-center gap-2 px-8 py-3 text-sm"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>
          <Link
            href="/listing"
            className="btn-secondary group inline-flex items-center gap-2 px-8 py-3 text-sm"
          >
            <Car size={16} className="transition-transform group-hover:scale-110" />
            Explore vehicles
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
