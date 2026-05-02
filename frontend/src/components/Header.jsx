import React from "react";
import { Phone, MessageCircle, Stethoscope, Menu, X } from "lucide-react";
import { CLINIC } from "../lib/clinic";

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const nav = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Clinic", href: "#environment" },
    { label: "Timings", href: "#timings" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            data-testid="brand-link"
            className="flex items-center gap-2.5"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-sky-500 text-white shadow-md shadow-sky-500/30">
              <Stethoscope className="w-5 h-5" strokeWidth={2.2} />
            </span>
            <div className="leading-tight">
              <div className="font-heading font-extrabold text-slate-900 text-lg">
                {CLINIC.name}
              </div>
              <div className="text-xs text-slate-500 -mt-0.5 hidden sm:block">
                Pediatric Specialist • Andrahalli
              </div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                data-testid={`nav-${n.label.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phoneTel}`}
              data-testid="header-call-button"
              className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-sky-500 hover:text-sky-600 transition-all"
            >
              <Phone className="w-4 h-4" /> Call
            </a>
            <a
              href={CLINIC.whatsapp}
              target="_blank"
              rel="noreferrer"
              data-testid="header-whatsapp-button"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-5 py-2 text-sm font-bold text-white shadow-md shadow-emerald-500/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border border-slate-200 text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4" data-testid="mobile-menu">
            <nav className="flex flex-col gap-1">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-xl text-slate-700 hover:bg-sky-50"
                  data-testid={`mobile-nav-${n.label.toLowerCase()}`}
                >
                  {n.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
