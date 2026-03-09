import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const plusJakartaSans = localFont({
  src: "../utils/font/Plus_Jakarta_Sans/PlusJakartaSans-VariableFont_wght.ttf",
  variable: "--font-plus-jakarta-sans",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rentrik - Rental Made Simple",
    template: "%s | Rentrik",
  },
  description:
    "Rentrik helps you find and manage rentals effortlessly. AI-powered mobility and peer-to-peer vehicle network.",
  keywords: ["rental", "rent", "property", "housing", "Rentrik", "AI mobility", "P2P rental"],
  authors: [{ name: "Rentrik", url: "https://rentrik.in" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rentrik.in",
    siteName: "Rentrik",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
