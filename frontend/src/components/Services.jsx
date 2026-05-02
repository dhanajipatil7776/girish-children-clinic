import React from "react";
import { Baby, Syringe, Thermometer, Activity, Apple, Wind, Sparkles } from "lucide-react";

const IMG_NEWBORN =
  "https://static.prod-images.emergentagent.com/jobs/a70baf13-7455-4258-8f13-c9d040709667/images/f61932b8f19dade5357a69c533d0e90de66a920f6a6403af2ff28154cca5cbe9.png";
const IMG_GENERAL =
  "https://static.prod-images.emergentagent.com/jobs/a70baf13-7455-4258-8f13-c9d040709667/images/cc9a151efeaa15683a2ceedaa643bbe2d4c60411a7d5c2d204bb215bc1ef4269.png";

const Card = ({ children, className = "", ...rest }) => (
  <div
    className={`group relative rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(2,132,199,0.18)] ${className}`}
    {...rest}
  >
    {children}
  </div>
);

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-slate-50"
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
            Our Services
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 mt-3">
            Complete child healthcare, under one friendly roof.
          </h2>
          <p className="mt-3 text-slate-600">
            From your newborn&apos;s very first checkup to adolescent growth monitoring —
            evidence-based care in a warm, welcoming environment.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">
          {/* Large: Newborn */}
          <Card className="md:col-span-6 lg:col-span-7 min-h-[260px]" data-testid="service-newborn">
            <div className="grid sm:grid-cols-2 h-full">
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-sky-500 text-white inline-flex items-center justify-center shadow-md shadow-sky-500/30">
                    <Baby className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl mt-4 text-slate-900">
                    Newborn &amp; Infant Care
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Gentle checkups, feeding guidance and early developmental
                    screening for your little one&apos;s first precious months.
                  </p>
                </div>
                <div className="mt-6 text-xs text-sky-700 font-bold uppercase tracking-widest">
                  First visits welcome
                </div>
              </div>
              <div className="relative min-h-[220px] sm:min-h-full">
                <img
                  src={IMG_NEWBORN}
                  alt="Sleeping newborn baby"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Card>

          {/* Vaccination */}
          <Card className="md:col-span-3 lg:col-span-5 p-6 md:p-8" data-testid="service-vaccination">
            <div className="w-11 h-11 rounded-2xl bg-emerald-500 text-white inline-flex items-center justify-center shadow-md shadow-emerald-500/30">
              <Syringe className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <h3 className="font-heading font-extrabold text-2xl mt-4 text-slate-900">Vaccination Services</h3>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Complete IAP-recommended vaccination schedule — administered safely,
              on schedule, with personalized reminders for parents.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-700">
              {["Birth shots", "DTP / OPV", "MMR", "Boosters"].map((v) => (
                <li key={v} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {v}
                </li>
              ))}
            </ul>
          </Card>

          {/* Fever */}
          <Card className="md:col-span-3 lg:col-span-4 p-6 md:p-8" data-testid="service-fever">
            <div className="w-11 h-11 rounded-2xl bg-rose-500 text-white inline-flex items-center justify-center shadow-md shadow-rose-500/30">
              <Thermometer className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <h3 className="font-heading font-extrabold text-xl mt-4 text-slate-900">Fever &amp; Infection Care</h3>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Prompt diagnosis and treatment for viral fevers, throat infections,
              stomach bugs and common childhood illnesses.
            </p>
          </Card>

          {/* Growth */}
          <Card className="md:col-span-3 lg:col-span-4 p-6 md:p-8" data-testid="service-growth">
            <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white inline-flex items-center justify-center shadow-md shadow-amber-500/30">
              <Activity className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <h3 className="font-heading font-extrabold text-xl mt-4 text-slate-900">Growth Monitoring</h3>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Height, weight, BMI and milestone tracking — so you always know
              your child is on the right track.
            </p>
          </Card>

          {/* Allergy / Asthma */}
          <Card className="md:col-span-6 lg:col-span-4 p-6 md:p-8" data-testid="service-allergy">
            <div className="w-11 h-11 rounded-2xl bg-violet-500 text-white inline-flex items-center justify-center shadow-md shadow-violet-500/30">
              <Wind className="w-5 h-5" strokeWidth={2.2} />
            </div>
            <h3 className="font-heading font-extrabold text-xl mt-4 text-slate-900">Allergy &amp; Asthma Care</h3>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              Kind, careful management of pediatric allergies, wheezing and
              asthma — with parent-friendly action plans.
            </p>
          </Card>

          {/* Nutrition (with image) */}
          <Card className="md:col-span-6 lg:col-span-7 min-h-[240px]" data-testid="service-nutrition">
            <div className="grid sm:grid-cols-2 h-full">
              <div className="relative min-h-[200px] sm:min-h-full order-2 sm:order-1">
                <img
                  src={IMG_GENERAL}
                  alt="Pediatric stethoscope"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between order-1 sm:order-2">
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-teal-500 text-white inline-flex items-center justify-center shadow-md shadow-teal-500/30">
                    <Apple className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl mt-4 text-slate-900">
                    Nutrition &amp; Development
                  </h3>
                  <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                    Practical feeding advice, age-appropriate nutrition plans and
                    developmental milestone guidance — tailored to your child.
                  </p>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-700">
                  <Sparkles className="w-3.5 h-3.5" />
                  Personalized guidance
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
