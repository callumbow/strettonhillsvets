# Stretton Hills Vets — multi-page website concept

A premium, fully responsive, static website for **Stretton Hills Veterinary Practice Ltd**.

## What is included

- **19 indexable pages:** Home, About, Services, nine detailed service pages (Routine Care, Lameness & Diagnostics, Equinosis Gait Analysis, Equine Endoscopy, Equine Dentistry, Reproduction, Pre-purchase Vettings, Emergency Care, Gastroscopy), Areas We Cover, FAQs, Contact and Privacy / Website Information.
- Dedicated **404 page**.
- Page-specific SEO titles, descriptions, canonical tags, social sharing metadata, semantic headings, descriptive alt text, contextual navigation and internal links.
- Schema.org structured data: `VeterinaryCare`, `Service`, `WebPage`, and `FAQPage` where appropriate.
- `sitemap.xml`, `robots.txt`, SVG favicon and Cloudflare Pages `_headers`.
- Motion and hover details, a mobile navigation menu, native accessible FAQ controls, skip link and reduced-motion support.
- Click-to-call and click-to-email links, prominent emergency contact, location/directions link and a small, visible **Website by Little Oak Web Design** footer credit linking to `https://littleoakwebdesign.co.uk/` on every page.
- **Local bundled photography:** original equine imagery and existing logo extracted from the supplied website HTML; carefully cropped and optimised WEBP variants. No remotely hosted stock images are needed. Google Fonts are requested when connected, with system fallbacks.
- No login, backend, cookies banner, analytics scripts, fake booking form or invented testimonials. All normal contact links work without configuration.

## Deploy to Cloudflare Pages

1. Extract this ZIP. The `index.html`, `assets/`, `services/` and other page folders must sit at the **top level** of the deployed directory.
2. Open Cloudflare Dashboard → Workers & Pages → Create / select a Pages project → **Upload assets**. Upload the files at the top level (or the extracted directory contents).
3. Test the temporary `pages.dev` URL, then connect the client's custom domain once they have approved the replacement site.
4. For the existing domain, update the DNS / Pages custom domain and redirect any other URL variants consistently.
5. Submit `https://theequinevet.co.uk/sitemap.xml` to Google Search Console and request reindexing once live.

The HTML uses **`https://theequinevet.co.uk/`** as the canonical live domain, based on the practice's existing website. If the actual launch domain differs, replace all occurrences of `https://theequinevet.co.uk` within the HTML, `sitemap.xml`, and `robots.txt` before deployment.

## Important client approval checklist

- **Confirm ownership/permission to reuse the original website photographs and the existing logo.** These images were extracted from the user-supplied site, not from a third-party stock library.
- Confirm the practice's **services, current availability, fees, call-out area, appointment procedure and out-of-hours arrangements**. The copy is a carefully researched concept, not a signed-off statement from the practice.
- Confirm phone `01694 751748`, email `info@theequinevet.co.uk` and address Dudgeley Farm, Lower Wood, All Stretton, Church Stretton, Shropshire SY6 6LE.
- Confirm regular office hours (Monday–Friday 9am–5pm), and weekend **emergencies-only** arrangements; these were sourced from the practice's RCVS listing. The website intentionally avoids promising a specific emergency response time.
- Have the practice review/replace the website privacy notice with their own full data-protection policy, where required. The supplied note describes the **site's static behaviour**, not the practice's whole data-handling operations.
- Obtain client agreement to the Little Oak Web Design designer-credit link in the footer. Avoid linking from content that the practice has not approved.
- For extra authenticity, consider replacing the supplied photos with a professional set featuring the **actual staff, horses, farm and clinical equipment**, after receiving consent.
- No online appointment booking system is claimed or implemented; a live calendar requires the practice to choose a booking workflow and approve it.

## Where the data came from

Practice's original website as supplied by the project owner, plus public practice listings:

- Royal College of Veterinary Surgeons: https://www.rcvs.org.uk/animal-owners/find-a-vet/practices/stretton-hills-veterinary-practice-ltd-church-strettonsy6-6le
- Existing site: https://theequinevet.co.uk/
- Additional publicly available service summary: https://www.vet-info.co.uk/stretton-hills-veterinary-practice

## What was tested

- All indexable pages have one H1, unique page titles/descriptions and the designer-credit link.
- Every local link points to a file present in the package.
- Desktop and responsive layouts checked at **320px, 390px, 768px and 1440px**. No horizontal overflow was found at those widths.
- Local images were validated and the mobile menu interaction tested with a browser preview.

## Maintenance

The whole website is editable HTML, CSS and JavaScript. No npm installation, paid hosting tools, database or build step is necessary.

- Global styles: `assets/css/style.css`
- Navigation / scrolling behaviour: `assets/js/main.js`
- Shared header/footer are repeated in the static pages. Keep navigation, contact details and designer-credit updates consistent across pages.
- SEO metadata is stored in the `<head>` of each HTML document.
- Sitemap is `sitemap.xml`.

**This is a concept package, not a published live site.**
