# Girish Children Clinic — Landing Page PRD

## Original Problem Statement
Create a modern, responsive landing page for **Girish Children Clinic** — a pediatric clinic in Andrahalli, Bengaluru run by **Dr. K. L. Girish** (MBBS, Pediatric Specialist, KMC registered, 9+ years experience). Goal: help parents quickly contact the clinic and book appointments via WhatsApp or phone.

## User Personas
- **New/young parents in Andrahalli & nearby areas** looking for a trusted neighborhood pediatrician
- **Parents seeking vaccinations** (newborn shots, boosters, MMR, etc.)
- **Parents with a sick child** needing fast access to fever/infection care
- **Mobile-first visitors** tapping Call / WhatsApp CTAs directly

## Core Requirements (Static)
- Mobile-first, fast-loading landing page
- Warm, child-friendly yet professional aesthetic
- Prominent Call (`tel:+919110459170`) and WhatsApp (`https://wa.me/919110459170`) CTAs everywhere
- Sections: Hero, Why Parents Trust Us, Services, About Doctor, Clinic Environment, Parent Testimonials, Clinic Timings, Contact (address + phone + WhatsApp + Google Maps)
- Appointment inquiry form with backend storage
- Clinic timings: Mon–Sat 9:30 AM–1:00 PM & 5:00 PM–9:30 PM; Sunday closed

## Architecture
- **Frontend**: React (CRA) + Tailwind + shadcn/ui + lucide-react + sonner (toasts)
  - Single route `/` rendering section components in `/app/frontend/src/components/`
  - Clinic info centralized in `/app/frontend/src/lib/clinic.js`
  - Nunito (headings) + Figtree (body) via Google Fonts
- **Backend**: FastAPI + Motor (MongoDB)
  - `POST /api/appointments` — create appointment inquiry (name, phone, preferred_time?, message?)
  - `GET /api/appointments` — list (admin-style, unprotected for now)
  - `GET /api/` — health message
  - MongoDB collection: `appointments` (id UUID, created_at ISO string, _id excluded from responses)

## What's Been Implemented (2025-12)
- Full responsive landing page with 9 sections + sticky mobile Call/WhatsApp bar
- Hero with 4.7★ & 9+ years floating badges, dual CTAs
- Trust strip (4 cards): experience, KMC registered, rating, vaccinations
- Bento-grid Services section with 7 services (newborn, vaccination, fever, growth, allergy, nutrition, infections)
- About Doctor section with qualifications, experience, approach
- Clinic Environment photo gallery (placeholder images — real photos pending)
- 3 sample 5-star parent testimonials
- Timings card (morning/evening/Sunday closed)
- Contact section: address card, call/WhatsApp CTAs, Google Maps iframe, appointment inquiry form
- Header with desktop nav + mobile hamburger menu, smooth-scroll anchors
- Footer with clinic info, address, timings, contact
- All interactive elements have `data-testid` attributes
- Backend appointment API with validation (min 7 digits phone, name required)
- **Tested**: 9/9 backend tests + full frontend E2E flows passing (iteration_1.json)

## Prioritized Backlog
### P0 (must-have before going live)
- Replace placeholder clinic photos with real interior/waiting room/certificate photos (blocker noted by user)
- Verify exact Google Maps pin — embed currently uses query string; may need a precise place_id

### P1 (valuable next)
- Lightweight admin view for `/api/appointments` (list + mark contacted)
- SMS/WhatsApp notification to clinic on new appointment (Twilio/WhatsApp Business)
- Basic rate-limiting on POST /api/appointments (abuse prevention)
- SEO: meta tags, OpenGraph image, `<title>`, local business schema.org JSON-LD
- Favicon + web app manifest

### P2 (nice-to-have)
- Blog/parent-resources section (fever care tips, vaccination schedule)
- Multilingual support (English + Kannada)
- Appointment calendar picker + day/time slots
- Replace stock hero/doctor images with authentic clinic photography

## Next Tasks
1. Collect real clinic photos from user (interior, waiting area, certificates, Dr. Girish portrait)
2. Add SEO meta tags + schema.org Local Business + Physician JSON-LD
3. (Optional) Wire appointment submissions to WhatsApp notification
