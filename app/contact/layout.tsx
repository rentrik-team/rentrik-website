import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Rentrik team. We're here to help with any questions about our AI-powered peer-to-peer vehicle rental platform.",
  alternates: {
    canonical: "https://rentrik.in/contact",
  },
  openGraph: {
    title: "Contact Us | Rentrik",
    description:
      "Have questions about Rentrik? Reach out to our team — we're happy to help.",
    url: "https://rentrik.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
