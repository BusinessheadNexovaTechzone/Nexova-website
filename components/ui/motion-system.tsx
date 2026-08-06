"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePrefersReducedMotion } from "@/components/hooks/use-prefers-reduced-motion";
import {
  motionEasing,
  pageTransition,
  revealTransition,
  fadeUp,
  fadeDown,
  fadeLeft,
  fadeRight,
  zoomIn,
  rotateReveal,
  staggerContainer,
  staggerItem,
} from "@/components/animations";

export function PageMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={pageTransition}
        transition={{ duration: 0.45, ease: motionEasing }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function StaggerContainer({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={staggerContainer}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerItem}
      transition={{ duration: 0.75, ease: motionEasing }}
    >
      {children}
    </motion.div>
  );
}

export function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={fadeUp}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function FadeDown({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={fadeDown}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideLeft({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={fadeLeft}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function SlideRight({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={fadeRight}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={zoomIn}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function BlurReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={fadeUp}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function RotateReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      variants={rotateReveal}
      transition={{ ...revealTransition, delay }}
    >
      {children}
    </motion.div>
  );
}

export function HoverCardMotion({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.25, ease: motionEasing }}
    >
      {children}
    </motion.div>
  );
}

export function MouseFollower({
  children,
  className,
  strength = 12,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setPos({
      x: ((event.clientX - rect.left) / rect.width - 0.5) * strength,
      y: ((event.clientY - rect.top) / rect.height - 0.5) * strength,
    });
  };

  return (
    <motion.div
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ duration: 0.35, ease: motionEasing }}
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={pageTransition}
      transition={{ duration: 0.45, ease: motionEasing }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, scrollTop / height) : 0);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-background/0">
      <motion.div
        className="h-full origin-left bg-primary"
        style={{ scaleX: progress }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: progress }}
        transition={{ duration: 0.2, ease: motionEasing }}
      />
    </div>
  );
}

export function AnimatedButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.button
      className={className}
      whileHover={prefersReducedMotion ? undefined : { y: -2, scale: 1.03 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.25, ease: motionEasing }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function FloatingElement({
  children,
  className,
  duration = 8,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0, 10, 0], rotate: [0, 1.2, 0, -1.2, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

export function MagneticButton({
  children,
  className,
  strength = 20,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  strength?: number;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width - 0.5) * strength;
    const y = ((clientY - rect.top) / rect.height - 0.5) * strength;
    setPosition({ x, y });
  };

  return (
    <motion.button
      className={className}
      style={{ x: position.x, y: position.y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPosition({ x: 0, y: 0 })}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: motionEasing }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
