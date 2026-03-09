'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowLeft, MessageSquare, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Vehicle } from '@/types/vehicle';

export function VehicleDetailsClient({ vehicle }: { vehicle: Vehicle }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [vehicle.image, vehicle.image, vehicle.image];

  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="mb-8"
      >
        <Link
          href="/listing"
          className="text-muted hover:text-white inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors"
        >
          <ArrowLeft size={12} />
          Back to fleet
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12"
      >
        <div className="lg:col-span-3 space-y-4">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.05]">
            <Image
              src={images[selectedImage]}
              alt={vehicle.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setSelectedImage(i)}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all ${
                  selectedImage === i
                    ? 'border-brand ring-2 ring-brand/30'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <Image
                  src={img}
                  alt={`${vehicle.name} view ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-brand/30 bg-brand/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-brand">
              {vehicle.type}
            </span>
            <div className="flex items-center gap-1.5 text-accent-amber">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-bold text-white">
                {vehicle.rating} ({vehicle.reviews} reviews)
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white">
            {vehicle.name}
          </h1>

          <p className="text-muted text-sm flex items-center gap-1.5">
            <MapPin size={14} />
            {vehicle.location}
          </p>

          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-muted text-[10px] font-bold uppercase tracking-widest mb-1">
                Daily rate
              </p>
              <p className="text-white">
                <span className="text-3xl font-black">${vehicle.price}</span>
                <span className="text-muted text-base font-medium">/day</span>
              </p>
            </div>
            <Link
              href="/#waitlist"
              className="btn-primary shrink-0 px-8 py-3 text-sm uppercase tracking-widest"
            >
              Book now
            </Link>
          </div>

          <div>
            <h3 className="text-muted text-[10px] font-bold uppercase tracking-widest mb-2">
              Description
            </h3>
            <p className="text-muted text-sm leading-relaxed">{vehicle.description}</p>
          </div>

          <div>
            <h3 className="text-muted text-[10px] font-bold uppercase tracking-widest mb-3">
              Key features
            </h3>
            <div className="flex flex-wrap gap-2">
              {vehicle.features.map((f) => (
                <span
                  key={f}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-muted text-[10px] font-bold uppercase tracking-widest mb-3">
              Hosted by
            </h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border border-white/10 bg-white/[0.03]">
                  <Image
                    src={`https://i.pravatar.cc/100?u=${vehicle.owner.replace(/\s/g, '')}`}
                    alt={vehicle.owner}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <span className="font-bold text-white">{vehicle.owner}</span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  href="/#waitlist"
                  className="text-muted hover:text-white flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-white/20"
                  aria-label="Message host"
                >
                  <MessageSquare size={18} />
                </Link>
                <Link
                  href="/#waitlist"
                  className="text-muted hover:text-white flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-white/20"
                  aria-label="Call host"
                >
                  <Phone size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
