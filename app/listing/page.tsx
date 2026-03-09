"use client";

import React, { useState } from "react";
import { MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { MOCK_VEHICLES } from "@/lib/mockData";
import Link from "next/link";
import Image from "next/image";

type FilterType = "All" | "Car" | "Bike" | "SUV";

export default function ListingPage() {
  const [filter, setFilter] = useState<FilterType>("All");

  const filtered =
    filter === "All" ? MOCK_VEHICLES : MOCK_VEHICLES.filter((v) => v.type === filter);

  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-20">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="section-label">Fleet</span>
          <h2 className="text-3xl font-black tracking-tighter uppercase">
            Explore Vehicles
          </h2>
        </div>
        <div className="flex flex-wrap gap-2 self-start rounded-full border border-white/5 bg-white/[0.03] p-1">
          {["All", "Car", "Bike", "SUV"].map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t as FilterType)}
              className={`rounded-full px-4 py-1.5 text-[9px] font-black tracking-widest uppercase transition-all ${filter === t ? "text-navy bg-white" : "text-muted hover:text-white"}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((v) => (
          <motion.div
            key={v.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card group overflow-hidden rounded-2xl"
          >
            <Link href={`/listing/${v.id}`}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={v.image}
                  alt={v.name}
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="bg-navy/60 absolute top-3 right-3 rounded-lg px-2 py-1 text-[10px] font-bold backdrop-blur-md">
                  ${v.price}/day
                </div>
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-start justify-between">
                  <h3 className="text-sm font-bold">{v.name}</h3>
                  <div className="text-accent-amber flex items-center gap-1 text-[10px]">
                    <Star size={10} fill="currentColor" /> {v.rating}
                  </div>
                </div>
                <p className="text-muted mb-4 flex items-center gap-1 text-[10px]">
                  <MapPin size={10} /> {v.location}
                </p>
                <div className="btn-secondary w-full py-2 text-center text-[10px] font-black tracking-widest uppercase">
                  View Details
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
