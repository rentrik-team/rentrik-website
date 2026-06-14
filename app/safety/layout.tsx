import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safety",
  description:
    "Rentrik's safety measures and KYC verification system ensure every rental is secure for both renters and owners. Your trust is our priority.",
  alternates: {
    canonical: "https://rentrik.in/safety",
  },
  openGraph: {
    title: "Safety | Rentrik",
    description:
      "Every Rentrik user is KYC-verified. Learn how we keep renters and owners safe on every transaction.",
    url: "https://rentrik.in/safety",
  },
};

export default function SafetyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
