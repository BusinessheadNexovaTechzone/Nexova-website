import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/products/foodzo-lite");

export default function ProductsFoodzoLiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
