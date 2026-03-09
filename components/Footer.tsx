import React from "react";
import { Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => (
  <footer className="border-t border-white/10 bg-[#030508] px-6 pt-16 pb-8">
    <div className="mx-auto max-w-7xl">
      <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="mb-6 flex cursor-pointer items-center">
            <Image
              src="/rentrik.png"
              alt="Rentrik"
              width={140}
              height={45}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <p className="text-muted mb-6 max-w-sm text-xs leading-relaxed">
            Redefining vehicle rentals through AI and peer-to-peer trust. Experience the
            future of mobility with our seamless, secure, and smart platform.
          </p>
          <Link
            href="/#waitlist"
            className="text-brand hover:text-brand-light mb-8 inline-block text-xs font-bold tracking-wider uppercase transition-colors"
          >
            Join the waitlist →
          </Link>
          {/* <div className="flex gap-3">
            {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-muted hover:border-brand flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:text-white"
              >
                <Icon size={14} />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold tracking-wider text-white uppercase">
            Fleet
          </h4>
          <ul className="text-muted space-y-3 text-xs font-medium">
            <li>
              <Link href="/listing" className="hover:text-brand transition-colors">
                All Vehicles
              </Link>
            </li>
            <li>
              <Link
                href="/listing?type=luxury"
                className="hover:text-brand transition-colors"
              >
                Luxury Cars
              </Link>
            </li>
            <li>
              <Link
                href="/listing?type=suv"
                className="hover:text-brand transition-colors"
              >
                SUVs & Trucks
              </Link>
            </li>
            <li>
              <Link
                href="/listing?type=electric"
                className="hover:text-brand transition-colors"
              >
                Electric Fleet
              </Link>
            </li>
            <li>
              <Link
                href="/listing?type=performance"
                className="hover:text-brand transition-colors"
              >
                Performance
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold tracking-wider text-white uppercase">
            Company
          </h4>
          <ul className="text-muted space-y-3 text-xs font-medium">
            <li>
              <Link href="/about" className="hover:text-brand transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/how-it-works" className="hover:text-brand transition-colors">
                How it Works
              </Link>
            </li>
            <li>
              <Link href="/safety" className="hover:text-brand transition-colors">
                Safety First
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-brand transition-colors">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand transition-colors">
                News & Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6 text-xs font-bold tracking-wider text-white uppercase">
            Support
          </h4>
          <ul className="text-muted space-y-3 text-xs font-medium">
            <li>
              <Link href="/contact" className="hover:text-brand transition-colors">
                Help Center
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-brand transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-brand transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-brand transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <a
                href="mailto:hr.rentrik@gmail.com"
                className="hover:text-brand flex items-center gap-2 transition-colors"
              >
                <Mail size={12} /> hr.rentrik@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
        <p className="text-muted text-[10px] font-bold tracking-[0.2em] uppercase">
          © 2026 RENTRIK. ALL RIGHTS RESERVED.
        </p>
        <div className="text-muted flex gap-6 text-[10px] font-bold tracking-widest uppercase">
          <Link href="/privacy" className="transition-colors hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-white">
            Terms
          </Link>
          <Link href="/cookies" className="transition-colors hover:text-white">
            Cookies
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
