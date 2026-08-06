import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/products/foodzo");

export default function ProductsFoodzoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
