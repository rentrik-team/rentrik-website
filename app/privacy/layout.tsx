import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read Rentrik's privacy policy to understand how we collect, use, and protect your personal data on our AI-powered vehicle rental platform.",
  alternates: {
    canonical: "https://rentrik.in/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Rentrik",
    description:
      "Learn how Rentrik handles your personal data and keeps your information secure.",
    url: "https://rentrik.in/privacy",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
