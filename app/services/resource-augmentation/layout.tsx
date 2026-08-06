import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/resource-augmentation");

export default function ServicesResourceAugmentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
