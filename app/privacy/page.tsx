import React from 'react';

export default function PrivacyPage() {
    return (
        <section className="pt-40 pb-20 px-6 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 uppercase">Privacy Policy</h1>
            <div className="space-y-12 text-muted text-sm leading-relaxed">
                <p>At Rentrik, we prioritize your privacy and data security. This policy outlines how we handle your personal information.</p>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">1. Data Collection</h2>
                    <p>We collect information necessary for vehicle verification, KYC, and rental processing. This includes identity documents, vehicle details, and location data.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">2. Location Usage</h2>
                    <p>Your location is used solely to provide relevant vehicle listings and ensure the safety of the rental process.</p>
                </div>
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white uppercase tracking-tight">3. Security</h2>
                    <p>We use industry-standard encryption and security protocols to protect your data from unauthorized access.</p>
                </div>
            </div>
        </section>
    );
}
