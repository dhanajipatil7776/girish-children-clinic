import React from "react";
import { Stethoscope, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CLINIC } from "../lib/clinic";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300" data-testid="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-sky-500 text-white">
                <Stethoscope className="w-5 h-5" strokeWidth={2.2} />
              </span>
              <div className="font-heading font-extrabold text-white text-lg">{CLINIC.name}</div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              {CLINIC.doctor} — MBBS, MD (Pediatrics).
              Trusted child healthcare in Andrahalli, Bengaluru.
              Vaccinations, fever care, growth monitoring &amp; more.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Visit us</div>
            <div className="mt-3 flex items-start gap-3 text-sm text-slate-300">
              <MapPin className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
              <div>
                {CLINIC.address.line1}<br />
                {CLINIC.address.line2}<br />
                {CLINIC.address.city} – {CLINIC.address.pincode}
              </div>
            </div>
            <div className="mt-3 flex items-start gap-3 text-sm text-slate-300">
              <Clock className="w-4 h-4 mt-0.5 text-sky-400 shrink-0" />
              <div>
                Mon – Sat: 9:30 AM – 1:00 PM, 5:00 PM – 9:30 PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Quick contact</div>
            <div className="mt-3 space-y-2">
              <a
                href={`tel:${CLINIC.phoneTel}`}
                className="flex items-center gap-2 text-sm text-slate-200 hover:text-sky-300"
                data-testid="footer-call-button"
              >
                <Phone className="w-4 h-4 text-sky-400" /> {CLINIC.phoneDisplay}
              </a>
              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-slate-200 hover:text-emerald-300"
                data-testid="footer-whatsapp-button"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp chat
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</div>
          <div>Designed with care for families in Andrahalli.</div>
        </div>
      </div>
    </footer>
  );
}
