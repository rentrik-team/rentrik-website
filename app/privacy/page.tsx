import React from "react";

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-40 pb-20">
      <h1 className="mb-12 text-3xl font-black tracking-tighter uppercase md:text-4xl">
        Privacy Policy
      </h1>
      <div className="text-muted space-y-12 text-sm leading-relaxed">
        <p>
          At Rentrik, we prioritize your privacy and data security. This policy outlines
          how we handle your personal information.
        </p>
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase">
            1. Data Collection
          </h2>
          <p>
            We collect information necessary for vehicle verification, KYC, and rental
            processing. This includes identity documents, vehicle details, and location
            data.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase">
            2. Location Usage
          </h2>
          <p>
            Your location is used solely to provide relevant vehicle listings and ensure
            the safety of the rental process.
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold tracking-tight text-white uppercase">
            3. Security
          </h2>
          <p>
            We use industry-standard encryption and security protocols to protect your
            data from unauthorized access.
          </p>
        </div>
      </div>
    </section>
  );
}
