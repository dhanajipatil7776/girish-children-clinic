import React from "react";
import axios from "axios";
import { Phone, MessageCircle, MapPin, Mail, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { CLINIC } from "../lib/clinic";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = React.useState({ name: "", phone: "", preferred_time: "", message: "" });
  const [submitting, setSubmitting] = React.useState(false);

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(CLINIC.mapQuery)}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC.mapQuery)}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!form.name.trim() || form.name.trim().length < 2) {
      toast.error("Please enter your name");
      return;
    }
    const digits = form.phone.replace(/\D/g, "");
    if (digits.length < 7) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setSubmitting(true);
    try {
      await axios.post(`${API}/appointments`, {
        name: form.name.trim(),
        phone: form.phone.trim(),
        preferred_time: form.preferred_time.trim() || null,
        message: form.message.trim() || null,
      });
      toast.success("Appointment request sent! We'll get back to you shortly.");
      setForm({ name: "", phone: "", preferred_time: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not submit. Please try WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white"
      data-testid="contact-section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-[0.22em] text-sky-600">
            Visit or Contact Us
          </div>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl tracking-tight text-slate-900 mt-3">
            Book an appointment — we&apos;re just around the corner.
          </h2>
        </div>

        <div className="mt-10 grid lg:grid-cols-12 gap-8">
          {/* Info + CTAs */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-3xl bg-sky-50 border border-sky-100 p-6" data-testid="contact-info-card">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-white text-sky-600 inline-flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-4 h-4" strokeWidth={2.4} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Clinic Address</div>
                  <div className="font-heading font-extrabold text-slate-900 mt-1">{CLINIC.name}</div>
                  <div className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {CLINIC.address.line1}<br />
                    {CLINIC.address.line2}<br />
                    {CLINIC.address.city} – {CLINIC.address.pincode}
                  </div>
                  <a
                    href={mapLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-800"
                    data-testid="get-directions-link"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${CLINIC.phoneTel}`}
                data-testid="contact-call-button"
                className="rounded-3xl border border-slate-100 bg-white p-5 flex items-start gap-3 hover:border-sky-300 hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white inline-flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" strokeWidth={2.4} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">Call</div>
                  <div className="font-heading font-extrabold text-slate-900 text-base mt-0.5">{CLINIC.phoneDisplay}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Tap to dial</div>
                </div>
              </a>

              <a
                href={CLINIC.whatsapp}
                target="_blank"
                rel="noreferrer"
                data-testid="contact-whatsapp-button"
                className="rounded-3xl border border-emerald-100 bg-emerald-50 p-5 flex items-start gap-3 hover:border-emerald-300 hover:-translate-y-0.5 transition-all shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white inline-flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" strokeWidth={2.4} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-700">WhatsApp</div>
                  <div className="font-heading font-extrabold text-slate-900 text-base mt-0.5">Quick reply</div>
                  <div className="text-xs text-emerald-700 mt-0.5">Guidance &amp; bookings</div>
                </div>
              </a>
            </div>

            {/* Map */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm" data-testid="contact-map">
              <iframe
                title="Girish Children Clinic Location"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[260px] border-0"
                allowFullScreen
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              data-testid="appointment-form"
              className="rounded-3xl bg-white border border-slate-100 shadow-[0_20px_50px_-15px_rgba(2,132,199,0.12)] p-6 sm:p-8"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-sky-500 text-white inline-flex items-center justify-center shadow-md shadow-sky-500/30">
                  <Mail className="w-4 h-4" strokeWidth={2.4} />
                </div>
                <div>
                  <div className="font-heading font-extrabold text-xl text-slate-900">Request an appointment</div>
                  <div className="text-sm text-slate-500">We&apos;ll confirm over phone or WhatsApp</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700">Parent&apos;s name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                    data-testid="appt-name-input"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 xxxxx xxxxx"
                    value={form.phone}
                    onChange={handleChange}
                    data-testid="appt-phone-input"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="preferred_time" className="text-sm font-semibold text-slate-700">Preferred time</label>
                  <select
                    id="preferred_time"
                    name="preferred_time"
                    value={form.preferred_time}
                    onChange={handleChange}
                    data-testid="appt-time-select"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                  >
                    <option value="">Any (we&apos;ll suggest)</option>
                    <option value="Morning (9:30 AM – 1:00 PM)">Morning (9:30 AM – 1:00 PM)</option>
                    <option value="Evening (5:00 PM – 9:30 PM)">Evening (5:00 PM – 9:30 PM)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="reason" className="text-sm font-semibold text-slate-700">Reason (optional)</label>
                  <input
                    id="reason"
                    name="message"
                    type="text"
                    placeholder="E.g. vaccination, fever, checkup"
                    value={form.message}
                    onChange={handleChange}
                    data-testid="appt-message-input"
                    className="mt-1.5 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-sky-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="appt-submit-button"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitting ? "Sending..." : "Request appointment"}
                </button>
                <a
                  href={CLINIC.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="appt-whatsapp-link"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-bold text-emerald-700 hover:border-emerald-400 transition-all"
                >
                  <MessageCircle className="w-4 h-4" /> Or message on WhatsApp
                </a>
              </div>

              <p className="mt-4 text-xs text-slate-400">
                By submitting, you agree to be contacted by the clinic regarding your inquiry.
                We never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
