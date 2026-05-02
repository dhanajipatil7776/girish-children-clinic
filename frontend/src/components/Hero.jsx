import React from "react";
import { Phone, MessageCircle, Star, ShieldCheck, Syringe, Heart } from "lucide-react";
import { CLINIC } from "../lib/clinic";

/* Replace stock image with Dr. Girish's real photo */
const HERO_IMG = "/dr-kl-girish.png";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden" data-testid="hero-section">

      {/* Decorative blobs */}
      <div className="blob bg-sky-200 w-[420px] h-[420px] -top-32 -left-24" />
      <div className="blob bg-amber-200 w-[320px] h-[320px] top-10 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-20 pb-16 md:pb-24">

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-7 fade-up">

            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 text-sky-700 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.18em]">
              <Heart className="w-3.5 h-3.5" strokeWidth={2.6} />
              Pediatric Specialist • Andrahalli
            </div>

            <h1 className="font-heading font-extrabold mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-slate-900">
              Trusted care for
              <br className="hidden sm:block" />
              your <span className="text-sky-600">little ones</span>.
            </h1>

            <p className="mt-5 text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">
              <span className="font-semibold text-slate-800">
                {CLINIC.doctor}
              </span>, MBBS, MD (Pediatrics) — {CLINIC.experienceYears}+ years
              caring for children in Andrahalli. Morning & evening consultations.
              Vaccinations, fever care, newborn checkups & growth monitoring.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex flex-wrap gap-3">

              <a
                href={`tel:${CLINIC.phoneTel}`}
                data-testid="hero-call-button"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-sky-500/30 transition-all hover:-translate-y-1"
              >
                <Phone className="w-4 h-4" strokeWidth={2.5} />
                Call Now
              </a>

              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-testid="hero-whatsapp-button"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-500/30 transition-all hover:-translate-y-1"
              >
                <MessageCircle className="w-4 h-4" strokeWidth={2.5} />
                WhatsApp Appointment
              </a>

            </div>

            {/* Trust Row */}
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-slate-800">4.7</span>
                <span>Google Rating</span>
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-300" />

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                KMC Registered Pediatrician
              </div>

              <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />

              <div className="flex items-center gap-2">
                <Syringe className="w-4 h-4 text-sky-600" />
                Vaccinations Available
              </div>

            </div>

          </div>

          {/* Right Image Section */}
          <div
            className="lg:col-span-5 relative fade-up"
            style={{ animationDelay: "120ms" }}
          >

            <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 shadow-[0_25px_80px_-15px_rgba(2,132,199,0.25)] bg-white">

              <img
                src={HERO_IMG}
                alt="Dr KL Girish Pediatrician"
                className="w-full h-[360px] sm:h-[440px] lg:h-[520px] object-cover"
                loading="eager"
              />

            </div>

            {/* Floating rating badge */}
            <div className="animate-float-soft absolute -bottom-5 -left-3 sm:left-6 bg-white rounded-2xl border border-slate-100 shadow-xl px-4 py-3 flex items-center gap-3">

              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                <Star className="w-5 h-5 fill-current" />
              </div>

              <div>
                <div className="font-heading font-extrabold text-slate-900">
                  4.7★
                </div>
                <div className="text-xs text-slate-500">
                  Loved by parents
                </div>
              </div>

            </div>

            {/* Floating experience badge */}
            <div
              className="animate-float-soft absolute -top-3 -right-3 sm:-right-2 bg-sky-500 text-white rounded-2xl shadow-xl px-4 py-3"
              style={{ animationDelay: "1.5s" }}
            >

              <div className="font-heading font-extrabold text-xl leading-none">
                {CLINIC.experienceYears}+
              </div>

              <div className="text-[11px] uppercase tracking-widest opacity-90">
                Years Experience
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
