"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fadeLeft, fadeRight, fadeUp, revealTransition, zoomIn } from "@/components/animations";
import { usePrefersReducedMotion } from "@/components/hooks/use-prefers-reduced-motion";

function useSafeReducedMotion() {
  return usePrefersReducedMotion();
}

export type RevealDirection = "up" | "left" | "right" | "zoom";

export function Reveal({
  children,
  direction = "up",
  className,
  delay = 0,
  once = true,
  amount = 0.04,
}: {
  children: React.ReactNode;
  direction?: RevealDirection;
  className?: string;
  delay?: number;
  once?: boolean;
  amount?: number;
}) {
  const shouldReduceMotion = useSafeReducedMotion();

  const variants = {
    up: fadeUp,
    left: fadeLeft,
    right: fadeRight,
    zoom: zoomIn,
  }[direction];

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedImage({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  const shouldReduceMotion = useSafeReducedMotion();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const img = new window.Image();
    img.src = src as string;
    img.onload = () => setLoaded(true);
  }, [src]);

  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      onLoad={() => setLoaded(true)}
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      animate={loaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, filter: "blur(8px)" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}
