import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/cloud-computing");

export default function ServicesCloudComputingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
