const CDN            = 'https://cdn.jsdelivr.net/gh/iambengiey/plus3@main';
const LOGO_URL       = CDN + '/website/logo.png';
const LOGO_WHITE_URL = CDN + '/website/logo.png';
const HERO_BG_URL    = CDN + '/website/bg.png';

// All partner / client logos from website/Logos/
const PARTNER_LOGOS = [
  { src: CDN + '/website/Logos/absa_logo.png',           alt: 'Absa' },
  { src: CDN + '/website/Logos/capitec_logo.png',         alt: 'Capitec' },
  { src: CDN + '/website/Logos/dkms_logo.png',           alt: 'DKMS' },
  { src: CDN + '/website/Logos/eurolab_logo_white.png',   alt: 'Eurolab' },
  { src: CDN + '/website/Logos/mediclinic.png',           alt: 'Mediclinic' },
  { src: CDN + '/website/Logos/mercedes_benz_logo.png',   alt: 'Mercedes-Benz' },
  { src: CDN + '/website/Logos/singular_logo.png',       alt: 'Singular' },
  { src: CDN + '/website/Logos/standard_bank_logo.png',   alt: 'Standard Bank' },
  { src: CDN + '/website/Logos/tetrad_group_logo.png',    alt: 'Tetrad Group' },
  { src: CDN + '/website/Logos/tiltecx_logo.png',         alt: 'Tiltecx' },
];

// Double for seamless infinite scroll
const CAROUSEL_IMGS = [...PARTNER_LOGOS, ...PARTNER_LOGOS]
  .map(({ src, alt }) => `<img src="${src}" alt="${alt}" class="client-logo" loading="lazy">`)
  .join('');

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Plus3 Solutions",
  "url": "https://www.plus3.co.za",
  "logo": CDN + "/website/logo.png",
  "description": "Plus3 is a modern technology partner delivering consulting, custom software development, team augmentation, cloud & DevOps, quality assurance and delivery enablement services across South Africa.",
  "telephone": ["+27822635227", "+27689397311"],
  "email": "info@plus3.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "50 Christo Avenue",
    "addressLocality": "Olivedale, Johannesburg",
    "postalCode": "2188",
    "addressCountry": "ZA"
  },
  "areaServed": "ZA",
  "founder": {
    "@type": "Person",
    "name": "Andrew Essey",
    "jobTitle": "Founder"
  },
  "sameAs": [
    "https://www.linkedin.com/company/plus3group/",
    "https://wa.me/27822635227"
  ],
  "serviceType": [
    "Technology Consulting",
    "Custom Software Development",
    "Team Augmentation",
    "Cloud and DevOps",
    "Quality Assurance",
    "Delivery Enablement"
  ]
});

const HTML = `<!DOCTYPE html>
<html lang="en-ZA">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Primary SEO -->
  <title>Plus3 Solutions | Tech Talent to Bring Your Ideas to Life</title>
  <meta name="description" content="Plus3 is a modern technology partner built on its founder's 15+ years of international consulting experience. We deliver custom software, team augmentation, consulting, cloud &amp; DevOps, QA and delivery enablement across South Africa.">
  <meta name="keywords" content="technology consulting South Africa, custom software development Johannesburg, team augmentation, staff augmentation, DevOps South Africa, cloud consulting, software outsourcing South Africa, Plus3, IT consulting Johannesburg">
  <meta name="author" content="Plus3 Solutions">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://www.plus3.co.za">
  <link rel="alternate" hreflang="en-za" href="https://www.plus3.co.za">
  <link rel="alternate" hreflang="en" href="https://www.plus3.co.za">

  <!-- Open Graph -->
  <meta property="og:type" content="website">