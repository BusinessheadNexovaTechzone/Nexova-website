"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";

export function WhatsAppCTA() {
  const whatsappNumber = "7810001706"; 
  const whatsappMessage = "Hi! I'm interested in your services. Can you provide more information?";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Link
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 animate-bounce md:bottom-28 md:right-8"
      aria-label="Contact us on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Link>
  );
}
