import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Rentrik's AI-powered peer-to-peer vehicle rental platform works. Simple steps to rent a verified vehicle or list your car for extra income.",
  alternates: {
    canonical: "https://rentrik.in/how-it-works",
  },
  openGraph: {
    title: "How It Works | Rentrik",
    description:
      "Simple, secure, and affordable vehicle rentals powered by AI. Discover how Rentrik connects renters with verified local owners.",
    url: "https://rentrik.in/how-it-works",
  },
};

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
