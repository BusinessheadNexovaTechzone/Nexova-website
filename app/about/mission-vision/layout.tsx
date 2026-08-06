import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/about/mission-vision");

export default function AboutMissionVisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
