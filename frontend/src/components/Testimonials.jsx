import React from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Anitha R.",
    location: "Andrahalli parent",
    bg: "bg-sky-50",
    ring: "ring-sky-100",
    text: "Dr. Girish is incredibly knowledgeable and so patient with children. He answered all my first-time-mom questions without rushing. My baby is always calm during visits — the best pediatrician nearby.",
  },
  {
    name: "Rakesh & Priya",
    location: "Sunkadakatte",
    bg: "bg-amber-50",
    ring: "ring-amber-100",
    text: "Affordable consultation and genuine care. We messaged on WhatsApp at night when our son had high fever and got proper guidance within minutes. Highly recommended for every family in the area.",
  },
  {
    name: "Lakshmi S.",
    location: "Mother of twins",
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
    text: "My twins had their complete vaccinations here. The clinic is clean, the waiting area is child-friendly and doctor sir explains everything clearly. Truly a trusted neighborhood pediatrician.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-white"
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
            Parent Testimonials
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 mt-3">
            Loved by parents across Andrahalli.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <article
              key={t.name}
              data-testid={`testimonial-${i}`}
              className={`relative rounded-3xl ${t.bg} ring-1 ${t.ring} p-7 transition-all hover:-translate-y-1`}
            >
              <Quote className="w-8 h-8 text-slate-900/10 absolute top-5 right-5" />
              <div className="flex items-center gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-slate-700 leading-relaxed text-[15px]">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-heading font-extrabold text-sky-600 shadow-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-heading font-bold text-slate-900 text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
