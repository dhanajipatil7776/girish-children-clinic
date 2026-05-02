import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { CLINIC } from "../lib/clinic";

export default function MobileStickyBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-slate-200 p-3 shadow-[0_-10px_30px_rgba(0,0,0,0.08)]"
      data-testid="mobile-sticky-bar"
    >
      <div className="flex gap-3">
        <a
          href={`tel:${CLINIC.phoneTel}`}
          data-testid="sticky-call-button"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <a
          href={CLINIC.whatsapp}
          target="_blank"
          rel="noreferrer"
          data-testid="sticky-whatsapp-button"
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/30 transition-all"
        >
          <MessageCircle className="w-4 h-4" /> WhatsApp
        </a>
      </div>
    </div>
  );
}
