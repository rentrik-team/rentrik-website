import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plusJakartaSans = localFont({
  src: "../utils/font/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-plus-jakarta-sans",
  weight: "200 800",
  display: "swap",
});

const BASE_URL = "https://rentrik.in";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Rentrik - Rent Smarter with AI",
    template: "%s | Rentrik",
  },
  description:
    "Rentrik is India's first AI-powered peer-to-peer vehicle rental platform. Find verified rides or earn from your idle car. Affordable, trusted, hyper-local.",
  keywords: [
    "vehicle rental",
    "car rental India",
    "peer-to-peer rental",
    "P2P car rental",
    "AI rental platform",
    "rent a car",
    "Rentrik",
    "bike rental",
    "affordable car rental",
    "KYC verified rental",
  ],
  authors: [{ name: "Rentrik", url: BASE_URL }],
  creator: "Rentrik",
  publisher: "Rentrik",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Rentrik",
    title: "Rentrik - Rent Smarter with AI",
    description:
      "India's first AI-driven peer-to-peer vehicle network. Rent verified rides or turn your idle car into a high-yield asset.",
    images: [
      {
        url: "/rentrik.png",
        width: 1200,
        height: 630,
        alt: "Rentrik - AI-Powered Vehicle Rental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rentrik - Rent Smarter with AI",
    description:
      "India's first AI-driven peer-to-peer vehicle network. Rent verified rides or turn your idle car into a high-yield asset.",
    images: ["/rentrik.png"],
    creator: "@rentrik",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5234187071328825"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
      <GoogleAnalytics gaId="G-XHR0TXE1FR" />
    </html>
  );
}
