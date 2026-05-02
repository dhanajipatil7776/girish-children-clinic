import React from "react";
import { Camera, Building2, Award } from "lucide-react";

const CLINIC_COLLAGE =
  "https://customer-assets.emergentagent.com/job_dr-girish-pediatric/artifacts/wthx00nb_Dr.Girish.png";

export default function ClinicEnvironment() {
  return (
    <section
      id="environment"
      className="py-20 md:py-28 bg-slate-50"
      data-testid="environment-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
              Clinic Environment
            </div>
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 mt-3">
              A clean, calm space — made for little ones.
            </h2>
            <p className="mt-3 text-slate-600">
              Step inside Girish Children Clinic: a bright consultation room,
              comfortable waiting area, and a certificate wall that reflects years
              of trusted pediatric care.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-slate-500">
            <Camera className="w-4 h-4" />
            Real photos from our clinic
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Main collage tile */}
          <figure
            data-testid="env-main-collage"
            className="relative lg:col-span-8 group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_50px_-15px_rgba(2,132,199,0.18)]"
          >
            <img
              src={CLINIC_COLLAGE}
              alt="Girish Children Clinic — signboard, consultation room, waiting area and certificate wall"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </figure>

          {/* Side highlights */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
            <div
              data-testid="env-highlight-interior"
              className="rounded-3xl bg-white border border-slate-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="w-11 h-11 rounded-2xl bg-sky-500 text-white inline-flex items-center justify-center shadow-md shadow-sky-500/30">
                <Building2 className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <div className="font-heading font-extrabold text-lg mt-4 text-slate-900">
                Hygienic &amp; child-friendly interiors
              </div>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Freshly-maintained consultation room and a comfortable waiting
                area so every visit feels calm and reassuring.
              </p>
            </div>
            <div
              data-testid="env-highlight-certs"
              className="rounded-3xl bg-white border border-slate-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div className="w-11 h-11 rounded-2xl bg-amber-500 text-white inline-flex items-center justify-center shadow-md shadow-amber-500/30">
                <Award className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <div className="font-heading font-extrabold text-lg mt-4 text-slate-900">
                Credentials you can trust
              </div>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Karnataka Medical Council registration &amp; Rajiv Gandhi University
                of Health Sciences credentials — proudly on display.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
