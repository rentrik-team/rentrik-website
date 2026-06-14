import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Vehicles",
  description:
    "Browse verified vehicles available for rent on Rentrik. Cars, bikes, and more — listed by KYC-verified local owners near you.",
  alternates: {
    canonical: "https://rentrik.in/listing",
  },
  openGraph: {
    title: "Explore Vehicles | Rentrik",
    description:
      "Browse verified vehicles available for rent. Find affordable cars and bikes listed by trusted local owners near you.",
    url: "https://rentrik.in/listing",
  },
};

export default function ListingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
