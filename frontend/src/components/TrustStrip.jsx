import React from "react";
import { GraduationCap, ShieldCheck, Star, Syringe } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "9+ Years Experience",
    desc: "Dedicated pediatric practice with thousands of little patients cared for.",
    bg: "bg-sky-50",
    ring: "ring-sky-100",
    iconBg: "bg-sky-500",
  },
  {
    icon: ShieldCheck,
    title: "KMC Registered",
    desc: "Registered with Karnataka Medical Council. Trained at Rajiv Gandhi University of Health Sciences.",
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
    iconBg: "bg-emerald-500",
  },
  {
    icon: Star,
    title: "4.7★ Rated by Parents",
    desc: "Consistently 5-star reviews for knowledgeable and friendly consultations.",
    bg: "bg-amber-50",
    ring: "ring-amber-100",
    iconBg: "bg-amber-500",
  },
  {
    icon: Syringe,
    title: "Vaccinations Available",
    desc: "Complete vaccination schedule on-site — from newborn shots to boosters.",
    bg: "bg-rose-50",
    ring: "ring-rose-100",
    iconBg: "bg-rose-500",
  },
];

export default function TrustStrip() {
  return (
    <section
      id="trust"
      className="py-16 md:py-24 bg-white"
      data-testid="trust-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
            Why Parents Trust Us
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 mt-3">
            Expert pediatric care, delivered with warmth.
          </h2>
          <p className="mt-3 text-slate-600">
            Every visit is friendly, unhurried and focused on your child&apos;s wellbeing — from their first checkup to
            every season of growth.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, idx) => (
            <div
              key={it.title}
              data-testid={`trust-card-${idx}`}
              className={`relative rounded-3xl ${it.bg} ring-1 ${it.ring} p-6 transition-all hover:-translate-y-1 hover:shadow-lg`}
            >
              <div className={`w-11 h-11 rounded-2xl ${it.iconBg} text-white inline-flex items-center justify-center shadow-md`}>
                <it.icon className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <div className="font-heading font-extrabold text-lg mt-4 text-slate-900">{it.title}</div>
              <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
