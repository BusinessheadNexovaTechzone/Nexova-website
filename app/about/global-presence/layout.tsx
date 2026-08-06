import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/about/global-presence");

export default function AboutGlobalPresenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
