import type { Metadata } from "next";

export function createCanonicalMetadata(pathname: string): Metadata {
  const normalizedPath = pathname === "/" ? "/" : `/${pathname.replace(/^\/+|\/+$/g, "")}`;

  return {
    alternates: {
      canonical: normalizedPath,
    },
  };
}
