"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Bot } from "lucide-react";

interface AppDeviceMockupProps {
  src: string;
  alt: string;
  className?: string;
}

/** Phone frame with app screenshot; falls back to built-in mockup if image fails */
export const AppDeviceMockup: React.FC<AppDeviceMockupProps> = ({
  src,
  alt,
  className = "",
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`glass-card relative aspect-[9/19] w-full overflow-hidden rounded-[2.25rem] border-[5px] border-white/5 shadow-2xl ${className}`}
    >
      {imgError ? (
        <div className="flex h-full w-full flex-col bg-[#050810] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="bg-brand/20 flex h-6 w-6 items-center justify-center rounded-lg">
              <Bot className="text-brand h-3.5 w-3.5" />
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[6px] font-black tracking-widest uppercase">
              AI ACTIVE
            </div>
          </div>
          <p className="mb-2 text-base leading-none font-black tracking-tighter">
            Hello, Alex
          </p>
          <div className="mb-2 rounded-xl border border-white/10 bg-white/5 p-2">
            <p className="text-brand mb-1 text-[6px] font-black tracking-widest uppercase">
              AI SUGGESTION
            </p>
            <p className="text-[8px] leading-relaxed font-medium">
              Audi Q7 for Tahoe - 20% cheaper
            </p>
          </div>
          <div className="space-y-1.5">
            <div className="flex h-12 flex-col justify-end rounded-lg border border-white/10 bg-white/5 p-2">
              <p className="text-[7px] font-bold">Tesla Model 3</p>
              <p className="text-brand text-[6px]">$45/day</p>
            </div>
            <div className="flex h-12 flex-col justify-end rounded-lg border border-white/10 bg-white/5 p-2">
              <p className="text-[7px] font-bold">Audi Q7</p>
              <p className="text-brand text-[6px]">$65/day</p>
            </div>
          </div>
        </div>
      ) : (
        <Image
          src={encodeURI(src)}
          alt={alt}
          fill
          className="object-cover object-top"
          sizes="180px"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );
};
