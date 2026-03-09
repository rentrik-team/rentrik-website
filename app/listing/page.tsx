'use client';

import React, { useState } from 'react';
import { MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { MOCK_VEHICLES } from '@/lib/mockData';
import Link from 'next/link';
import Image from 'next/image';

type FilterType = 'All' | 'Car' | 'Bike' | 'SUV';

export default function ListingPage() {
    const [filter, setFilter] = useState<FilterType>('All');

    const filtered = filter === 'All' ? MOCK_VEHICLES : MOCK_VEHICLES.filter(v => v.type === filter);

    return (
        <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                <div>
                    <span className="section-label">Fleet</span>
                    <h2 className="text-3xl font-black tracking-tighter uppercase">Explore Vehicles</h2>
                </div>
                <div className="flex flex-wrap gap-2 bg-white/[0.03] p-1 rounded-full border border-white/5 self-start">
                    {['All', 'Car', 'Bike', 'SUV'].map((t) => (
                        <button
                            key={t}
                            onClick={() => setFilter(t as FilterType)}
                            className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest transition-all ${filter === t ? 'bg-white text-navy' : 'text-muted hover:text-white'}`}
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((v) => (
                    <motion.div
                        key={v.id}
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="glass-card rounded-2xl overflow-hidden group"
                    >
                        <Link href={`/listing/${v.id}`}>
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={v.image}
                                    alt={v.name}
                                    fill
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div className="absolute top-3 right-3 bg-navy/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold">
                                    ${v.price}/day
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="font-bold text-sm">{v.name}</h3>
                                    <div className="flex items-center gap-1 text-[10px] text-accent-amber">
                                        <Star size={10} fill="currentColor" /> {v.rating}
                                    </div>
                                </div>
                                <p className="text-[10px] text-muted mb-4 flex items-center gap-1">
                                    <MapPin size={10} /> {v.location}
                                </p>
                                <div className="w-full btn-secondary py-2 text-[10px] font-black uppercase tracking-widest text-center">
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
