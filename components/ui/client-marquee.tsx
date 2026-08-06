"use client";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

const clients = [
  { name: "Clusterzap.ai", src: "/assets/Clusterzap.jpeg", alt: "Clusterzap.ai" },
  { name: "Leather Working Group", src: "/assets/Leather Working Group.jpeg", alt: "Leather Working Group" },
  { name: "Triveni", src: "/assets/Triveni.jpeg", alt: "Triveni" },
  { name: "Escon", src: "/assets/Escon.jpeg", alt: "Escon" },
  { name: "Thaagam Foundation", src: "/assets/Thaagam Foundation.jpeg", alt: "Thaagam Foundation" },
];

export function ClientMarquee() {
  return (
    <div className="w-full">
      <Marquee pauseOnHover gradient={false} speed={40} className="py-2">
        {[...clients, ...clients].map((client, index) => (
          <motion.div
            key={`${client.name}-${index}`}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-3 flex min-h-[96px] items-center justify-center rounded-2xl bg-card px-6 py-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-card)] sm:mx-4"
          >
            <img
              src={client.src}
              alt={client.alt}
              className="h-12 w-auto object-contain transition-all duration-300 md:h-14"
              loading="lazy"
            />
          </motion.div>
        ))}
      </Marquee>
    </div>
  );
}
