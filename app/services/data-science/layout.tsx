import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/data-science");

export default function ServicesDataScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
