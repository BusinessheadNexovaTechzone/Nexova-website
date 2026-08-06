import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/business-digitalization");

export default function ServicesBusinessDigitalizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
