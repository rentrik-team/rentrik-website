import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Rentrik — Rental Made Simple",
    template: "%s | Rentrik",
  },
  description:
    "Rentrik helps you find and manage rentals effortlessly. Discover your next home with ease.",
  keywords: ["rental", "rent", "property", "housing", "Rentrik"],
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
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
