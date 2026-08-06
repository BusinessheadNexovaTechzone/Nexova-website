"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

export default function ProcessGridClient({ steps }: { steps: string[] }) {
  const reducedMotion = useReducedMotion();
  const motionHover = reducedMotion ? {} : { y: -6, scale: 1.01 };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {steps.map((step, index) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          whileHover={motionHover}
          transition={{ duration: reducedMotion ? 0 : 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-primary/20 bg-card/80 backdrop-blur-xl p-6 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
          <p className="font-semibold text-navy">{index + 1}. {step}</p>
        </motion.div>
      ))}
    </div>
  );
}
