import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/it-support-amc");

export default function ServicesItSupportAmcLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
