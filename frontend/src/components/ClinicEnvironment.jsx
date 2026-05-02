import React from "react";
import { Camera } from "lucide-react";

const IMG_1 =
  "https://images.pexels.com/photos/8459996/pexels-photo-8459996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
const IMG_2 =
  "https://images.unsplash.com/photo-1762625570087-6d98fca29531?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjbGluaWMlMjB3YWl0aW5nJTIwcm9vbXxlbnwwfHx8fDE3Nzc3MzAwMjV8MA&ixlib=rb-4.1.0&q=85";
const IMG_3 =
  "https://static.prod-images.emergentagent.com/jobs/a70baf13-7455-4258-8f13-c9d040709667/images/cc9a151efeaa15683a2ceedaa643bbe2d4c60411a7d5c2d204bb215bc1ef4269.png";

const Tile = ({ src, label, testId, className = "" }) => (
  <figure
    data-testid={testId}
    className={`group relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}
  >
    <img
      src={src}
      alt={label}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 via-black/20 to-transparent text-white text-sm font-medium">
      {label}
    </figcaption>
  </figure>
);

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
              Hygienic consultation rooms, a comfortable waiting area and a child-friendly
              atmosphere that helps every visit feel reassuring.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs text-slate-500">
            <Camera className="w-4 h-4" />
            Real photos will be shared by the clinic soon
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[200px] md:auto-rows-[220px]">
          <Tile
            src={IMG_1}
            label="Comfortable waiting area"
            testId="env-tile-1"
            className="md:col-span-4 md:row-span-2"
          />
          <Tile
            src={IMG_2}
            label="Modern, hygienic interiors"
            testId="env-tile-2"
            className="md:col-span-2"
          />
          <Tile
            src={IMG_3}
            label="Well-equipped consultation room"
            testId="env-tile-3"
            className="md:col-span-2"
          />
        </div>

        <p className="mt-6 text-xs text-slate-400 italic">
          Note: Photographs shown are representative. Actual clinic photos will be updated shortly.
        </p>
      </div>
    </section>
  );
}
