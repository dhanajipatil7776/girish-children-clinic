import React from "react";
import { CheckCircle2, GraduationCap, Award, HeartHandshake } from "lucide-react";
import { CLINIC } from "../lib/clinic";

const DOC_IMG =
  "https://static.prod-images.emergentagent.com/jobs/a70baf13-7455-4258-8f13-c9d040709667/images/ba0289240c92039839a0b642ef4f647392ce311c4990cb7462fd023f141d5019.png";

export default function AboutDoctor() {
  const highlights = [
    { icon: GraduationCap, text: "MBBS — Pediatric Specialist" },
    { icon: Award, text: "Registered with Karnataka Medical Council" },
    { icon: CheckCircle2, text: "Rajiv Gandhi University of Health Sciences trained" },
    { icon: HeartHandshake, text: `${CLINIC.experienceYears}+ years of pediatric clinical experience` },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white"
      data-testid="about-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-3 bg-sky-100 rounded-[2.5rem] -rotate-2" />
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl bg-white">
                <img
                  src={DOC_IMG}
                  alt={CLINIC.doctor}
                  className="w-full h-[420px] sm:h-[500px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 right-4 bg-white rounded-2xl border border-slate-100 shadow-xl px-4 py-3">
                <div className="text-xs text-slate-500 uppercase tracking-widest">KMC Registered</div>
                <div className="font-heading font-extrabold text-slate-900">Pediatric Specialist</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
              Meet Your Pediatrician
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 mt-3">
              {CLINIC.doctor}
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              With over {CLINIC.experienceYears} years of dedicated pediatric practice, Dr. Girish is known
              for his calm, friendly approach and his ability to put both children and parents at ease.
              Every consultation is unhurried — he listens patiently, explains clearly, and offers
              practical, compassionate guidance you can trust.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Parents in Andrahalli choose Girish Children Clinic because care here is personal, affordable
              and genuinely child-first — from a baby&apos;s very first checkup to every season of growing up.
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-3.5">
              {highlights.map((h, i) => (
                <li
                  key={i}
                  data-testid={`about-highlight-${i}`}
                  className="flex items-start gap-3 rounded-2xl bg-sky-50/60 border border-sky-100 p-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-white text-sky-600 inline-flex items-center justify-center shrink-0 shadow-sm">
                    <h.icon className="w-4 h-4" strokeWidth={2.4} />
                  </div>
                  <span className="text-sm text-slate-700 leading-relaxed pt-1.5 font-medium">
                    {h.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
