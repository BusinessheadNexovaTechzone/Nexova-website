import type { Variants } from "framer-motion";

export const motionEasing = [0.22, 1, 0.36, 1];

export const revealTransition = {
  duration: 0.8,
  ease: motionEasing,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.98, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -60, scale: 0.98, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60, scale: 0.98, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.98, filter: "blur(8px)" },
  visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(8px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

export const rotateReveal: Variants = {
  hidden: { opacity: 0, rotate: -4, scale: 0.96, filter: "blur(8px)" },
  visible: { opacity: 1, rotate: 0, scale: 1, filter: "blur(0px)" },
};

export const pageTransition: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -20, filter: "blur(8px)" },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};
