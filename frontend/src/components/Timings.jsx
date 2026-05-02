import React from "react";
import { Sun, Moon, CalendarX, Clock } from "lucide-react";
import { CLINIC } from "../lib/clinic";

export default function Timings() {
  return (
    <section
      id="timings"
      className="py-20 md:py-28 bg-gradient-to-b from-sky-50 to-white"
      data-testid="timings-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
              Clinic Timings
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 mt-3">
              Morning &amp; evening consultations.
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Walk-in consultations are welcome. For quicker service, WhatsApp or call ahead
              — especially during evening hours.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white border border-slate-100 px-4 py-2 text-sm text-slate-700 shadow-sm">
              <Clock className="w-4 h-4 text-sky-600" />
              Open 6 days a week
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-slate-100 shadow-[0_20px_50px_-15px_rgba(2,132,199,0.15)] overflow-hidden">
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                <div className="p-7 sm:p-8" data-testid="timings-morning">
                  <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 inline-flex items-center justify-center">
                    <Sun className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">Morning</div>
                  <div className="font-heading font-extrabold text-2xl text-slate-900 mt-1">9:30 AM – 1:00 PM</div>
                  <div className="text-sm text-slate-500 mt-1">Monday – Saturday</div>
                </div>
                <div className="p-7 sm:p-8" data-testid="timings-evening">
                  <div className="w-11 h-11 rounded-2xl bg-indigo-100 text-indigo-600 inline-flex items-center justify-center">
                    <Moon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500">Evening</div>
                  <div className="font-heading font-extrabold text-2xl text-slate-900 mt-1">5:00 PM – 9:30 PM</div>
                  <div className="text-sm text-slate-500 mt-1">Monday – Saturday</div>
                </div>
              </div>
              <div className="border-t border-slate-100 p-5 bg-rose-50/60 flex items-center gap-3" data-testid="timings-sunday">
                <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-600 inline-flex items-center justify-center">
                  <CalendarX className="w-4 h-4" strokeWidth={2.4} />
                </div>
                <div className="text-sm text-slate-700">
                  <span className="font-bold">Sunday:</span> Closed — for emergencies please WhatsApp{" "}
                  <a href={CLINIC.whatsapp} target="_blank" rel="noreferrer" className="text-emerald-600 font-semibold">
                    {CLINIC.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
