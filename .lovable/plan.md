## Add 4 Legal/Support Pages

Create separate routes with a shared minimal layout matching the site's dark aesthetic. Each page ends with a "Get in Touch" button that opens WhatsApp (wa.me/8143710924?text=SYSTEM), same as the main CTAs.

### New Routes
- `/support` — Customer Support
- `/terms` — Terms of Service
- `/privacy` — Privacy Policy
- `/cancellation` — Cancellation & Refund Policy

### New Files

**1. `src/components/LegalLayout.tsx`** — shared page shell
- Sticky minimal header: "Nex AI" logo (links to `/`)
- Container with `prose`-style typography (semantic h1/h2/p)
- Bottom "Get in Touch" section with WhatsApp CTA button
- Reuses existing Footer component

**2-5. Page components** in `src/pages/`:
- `Support.tsx` — Contact channels, response times (24–48h), scope of support (system setup, workflow issues, integrations), how to reach us
- `Terms.tsx` — Acceptance, services offered, client responsibilities, deliverables, IP ownership, limitation of liability, governing law (India), contact
- `Privacy.tsx` — Data collected (name, contact info, business details shared during engagement), how it's used, no third-party sale, cookies (minimal/none), retention, user rights, contact
- `Cancellation.tsx` — Engagement cancellation window, refund eligibility (custom systems non-refundable after build starts), how to request cancellation, contact

All copy will match the operator/direct tone of the main site — no hype, no filler. Placeholders: contact@nexifier.in, jurisdiction India, effective date current month.

### Router Update (`src/App.tsx`)
Add 4 routes above the catch-all `*`:
```tsx
<Route path="/support" element={<Support />} />
<Route path="/terms" element={<Terms />} />
<Route path="/privacy" element={<Privacy />} />
<Route path="/cancellation" element={<Cancellation />} />
```

### Footer Update (`src/components/sections/Footer.tsx`)
Add a small row of links (Support · Terms · Privacy · Cancellation) using `react-router-dom` `Link`, keeping the minimal aesthetic. Existing "Nex AI" + "Growth systems by Nexifier" line stays.

### Notes
- Uses `react-router-dom` (already installed via `BrowserRouter` in App.tsx)
- Each page scrolls to top on mount
- SEO: unique `<title>` set via `document.title` in a small effect on each page
- No new sections on the main landing page — only footer gets link additions