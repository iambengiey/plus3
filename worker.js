const LOGO_URL       = 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/logo.png';
const LOGO_WHITE_URL = 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/logo.png';
const HERO_BG_URL    = 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/bg.png';

// All partner / client logos from website/Logos/
const PARTNER_LOGOS = [
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/absa_logo.webp',           alt: 'Absa' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/capitec_logo.png',         alt: 'Capitec' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/dkms_logo.webp',           alt: 'DKMS' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/eurolab_logo_white.png',   alt: 'Eurolab' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/mediclinic.jpg',           alt: 'Mediclinic' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/mercedes_benz_logo.png',   alt: 'Mercedes-Benz' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/singular_logo.webp',       alt: 'Singular' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/standard_bank_logo.png',   alt: 'Standard Bank' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/tetrad_group_logo.jpg',    alt: 'Tetrad Group' },
  { src: 'https://raw.githubusercontent.com/iambengiey/plus3/main/website/Logos/tiltecx_logo.jpg',         alt: 'Tiltecx' },
];

// Double for seamless infinite scroll
const CAROUSEL_IMGS = [...PARTNER_LOGOS, ...PARTNER_LOGOS]
  .map(({ src, alt }) => `<img src="${src}" alt="${alt}" class="client-logo" loading="lazy">`)
  .join('');

const SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Plus3 Solutions",
  "url": "https://plus3.co.za",
  "logo": "https://raw.githubusercontent.com/iambengiey/plus3/main/website/logo",
  "description": "Plus3 is a modern technology partner delivering consulting, custom software development, team augmentation, cloud & DevOps, quality assurance and delivery enablement services across South Africa.",
  "telephone": ["+27822635227", "+27689397311"],
  "email": "info@plus3.co.za",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Work Central, Bel Air Shopping Centre, Bellairs Dr",
    "addressLocality": "Northriding, Johannesburg",
    "postalCode": "2169",
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
  <meta name="description" content="Plus3 is a modern technology partner built on 15+ years of international consulting experience. We deliver custom software, team augmentation, consulting, cloud & DevOps, QA and delivery enablement across South Africa.">
  <meta name="keywords" content="technology consulting South Africa, custom software development Johannesburg, team augmentation, staff augmentation, DevOps South Africa, cloud consulting, software outsourcing South Africa, Plus3, IT consulting Johannesburg">
  <meta name="author" content="Plus3 Solutions">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="https://plus3.co.za">
  <link rel="alternate" hreflang="en-za" href="https://plus3.co.za">
  <link rel="alternate" hreflang="en" href="https://plus3.co.za">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://plus3.co.za">
  <meta property="og:title" content="Plus3 Solutions | Tech Talent to Bring Your Ideas to Life">
  <meta property="og:description" content="Modern technology partner. Consulting, custom software, team augmentation, cloud & DevOps, QA and delivery enablement — built on 15+ years of international experience.">
  <meta property="og:image" content="${HERO_BG_URL}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:site_name" content="Plus3 Solutions">
  <meta property="og:locale" content="en_ZA">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Plus3 Solutions | Tech Talent to Bring Your Ideas to Life">
  <meta name="twitter:description" content="Modern technology partner delivering smarter, results-driven tech solutions across South Africa.">
  <meta name="twitter:image" content="${HERO_BG_URL}">

  <!-- Favicon -->
  <link rel="icon" type="image/png" href="${LOGO_URL}">
  <link rel="apple-touch-icon" href="${LOGO_URL}">

  <!-- Fonts: DM Sans (body) + Playfair Display (headings) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">

  <!-- Structured Data -->
  <script type="application/ld+json">${SCHEMA}<\/script>

  <style>
    :root {
      --black:       #000000;
      --green:       #228B22;
      --green-light: #37B34A;
      --green-hi:    #61D26B;
      --offwhite:    #F0F2ED;
      --muted:       #98A399;
      --dark-surface:#0d0d0d;
      --dark-card:   #111411;
      --dark-border: #1e2a1e;
      --nav-height:  72px;
      --font-display:'Playfair Display', Georgia, serif;
      --font-body:   'DM Sans', 'Inter', sans-serif;
      --ease-out: cubic-bezier(0.16,1,0.3,1);
      --t-fast: 180ms;
      --t-slow: 360ms;
      --radius-sm: 4px;
      --radius-md: 8px;
      --radius-lg: 12px;
      --radius-xl: 16px;
      --radius-full: 9999px;
      --content-wide: 1200px;
      --text-xs:   clamp(0.72rem, 0.7rem + 0.2vw, 0.8rem);
      --text-sm:   clamp(0.875rem, 0.85rem + 0.15vw, 1rem);
      --text-base: clamp(1rem, 0.97rem + 0.2vw, 1.125rem);
      --text-lg:   clamp(1.125rem, 1rem + 0.6vw, 1.5rem);
      --text-xl:   clamp(1.5rem, 1.2rem + 1.2vw, 2.25rem);
      --text-2xl:  clamp(2rem, 1.2rem + 2.5vw, 3.75rem);
    }

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html {
      scroll-behavior: smooth;
      scroll-padding-top: var(--nav-height);
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
    }
    body {
      font-family: var(--font-body);
      font-size: var(--text-base);
      background: var(--black);
      color: var(--offwhite);
      overflow-x: hidden;
      line-height: 1.65;
    }
    img, svg { display: block; max-width: 100%; }
    ul, ol { list-style: none; }
    input, button, textarea, select { font: inherit; color: inherit; }
    h1, h2, h3, h4 { font-family: var(--font-display); text-wrap: balance; line-height: 1.1; }
    p, li { text-wrap: pretty; }
    button { cursor: pointer; background: none; border: none; }
    a { color: inherit; text-decoration: none; }
    ::selection { background: rgba(34,139,34,0.3); }
    :focus-visible { outline: 2px solid var(--green-light); outline-offset: 3px; border-radius: var(--radius-sm); }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }
    .sr-only { position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0; }

    /* ── Layout ── */
    .container { max-width: var(--content-wide); margin-inline: auto; padding-inline: clamp(1.25rem, 5vw, 4rem); }
    .section { padding-block: clamp(5rem, 9vw, 9rem); }
    .section--dark { background: var(--black); }
    .section--surface { background: var(--dark-surface); }

    /* ── Section labels ── */
    .sec-label {
      font-family: var(--font-body);
      font-size: var(--text-xs);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--green-light);
      margin-bottom: 1rem;
    }
    .sec-heading {
      font-family: var(--font-display);
      font-size: var(--text-2xl);
      font-weight: 900;
      color: var(--offwhite);
      letter-spacing: -0.02em;
      line-height: 1.05;
    }
    .sec-heading em { font-style: normal; color: var(--green-light); }
    .sec-body {
      color: var(--muted);
      font-size: var(--text-base);
      max-width: 58ch;
      margin-top: 1rem;
      line-height: 1.75;
    }
    .sec-header { margin-bottom: clamp(3rem, 5vw, 4.5rem); }
    .green-bar {
      width: 48px; height: 3px;
      background: var(--green);
      margin-bottom: 1.5rem;
    }

    /* ── Buttons ── */
    .btn {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.85rem 1.75rem;
      font-family: var(--font-body);
      font-size: var(--text-sm);
      font-weight: 600;
      border-radius: var(--radius-sm);
      transition: all var(--t-fast) var(--ease-out);
      cursor: pointer;
    }
    .btn--green {
      background: var(--green);
      color: #fff;
      border: 2px solid var(--green);
    }
    .btn--green:hover { background: var(--green-light); border-color: var(--green-light); }
    .btn--outline {
      background: transparent;
      color: var(--offwhite);
      border: 2px solid rgba(240,242,237,0.35);
    }
    .btn--outline:hover { border-color: var(--offwhite); background: rgba(240,242,237,0.06); }

    /* ── NAVIGATION ── */
    .nav {
      position: fixed; top: 0; left: 0; right: 0;
      height: var(--nav-height); z-index: 100;
      background: rgba(0,0,0,0.88);
      backdrop-filter: blur(16px) saturate(140%);
      -webkit-backdrop-filter: blur(16px) saturate(140%);
      border-bottom: 1px solid rgba(34,139,34,0.15);
      transition: box-shadow var(--t-slow);
    }
    .nav.scrolled { box-shadow: 0 4px 32px rgba(0,0,0,0.5); }
    .nav__inner {
      max-width: var(--content-wide);
      margin-inline: auto;
      padding-inline: clamp(1.25rem, 5vw, 4rem);
      height: 100%;
      display: flex; align-items: center; justify-content: space-between; gap: 2rem;
    }
    .nav__logo img { height: 40px; width: auto; }
    .nav__links { display: flex; align-items: center; gap: 0.25rem; }
    .nav__links a {
      padding: 0.45rem 0.9rem;
      font-size: var(--text-sm);
      font-weight: 500;
      color: var(--muted);
      border-radius: var(--radius-sm);
      transition: color var(--t-fast), background var(--t-fast);
    }
    .nav__links a:hover { color: var(--offwhite); background: rgba(255,255,255,0.06); }
    .nav__cta {
      padding: 0.5rem 1.25rem;
      background: var(--green);
      color: #fff;
      border-radius: var(--radius-sm);
      font-size: var(--text-sm);
      font-weight: 700;
      transition: background var(--t-fast);
    }
    .nav__cta:hover { background: var(--green-light); }
    .nav__hamburger {
      display: none; width: 44px; height: 44px;
      align-items: center; justify-content: center;
      color: var(--offwhite); border-radius: var(--radius-sm);
    }
    .nav__hamburger:hover { background: rgba(255,255,255,0.08); }
    .nav__mobile {
      position: fixed; top: var(--nav-height); left: 0; right: 0; bottom: 0;
      background: var(--black); z-index: 99;
      padding: 2rem 1.5rem;
      display: flex; flex-direction: column; gap: 0.5rem;
      transform: translateX(100%);
      transition: transform var(--t-slow) var(--ease-out);
      border-top: 1px solid var(--dark-border);
    }
    .nav__mobile.open { transform: translateX(0); }
    .nav__mobile a {
      display: block; padding: 1rem 1.25rem;
      font-size: var(--text-lg); font-weight: 600;
      color: var(--offwhite); border-radius: var(--radius-md);
    }
    .nav__mobile a:hover { background: rgba(255,255,255,0.06); }
    .nav__mobile .btn--green { text-align: center; margin-top: 1rem; }
    @media (max-width: 768px) {
      .nav__links, .nav__actions .nav__cta { display: none; }
      .nav__hamburger { display: flex; }
    }

    /* ── HERO ── */
    .hero {
      min-height: 100dvh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      padding-top: var(--nav-height);
      position: relative;
      overflow: hidden;
    }
    @media (max-width: 900px) {
      .hero {
        grid-template-columns: 1fr;
        background-image: url('${HERO_BG_URL}');
        background-size: cover;
        background-position: center;
      }
    }
    .hero__left {
      padding: clamp(4rem, 8vw, 8rem) clamp(1.25rem, 5vw, 4rem);
      position: relative; z-index: 2;
    }
    @media (max-width: 900px) {
      .hero__left {
        background: linear-gradient(to bottom, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.65) 100%);
      }
    }
    .hero__eyebrow {
      display: inline-flex; align-items: center; gap: 0.6rem;
      font-size: var(--text-xs); font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: var(--green-light); margin-bottom: 1.75rem;
    }
    .hero__eyebrow-line { width: 32px; height: 2px; background: var(--green); }
    .hero__heading {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 1rem + 5vw, 5.5rem);
      font-weight: 900;
      line-height: 1.04;
      letter-spacing: -0.025em;
      color: var(--offwhite);
      margin-bottom: 1.5rem;
    }
    .hero__heading em { font-style: normal; color: var(--green-light); }
    .hero__sub {
      font-size: var(--text-lg);
      color: var(--muted);
      max-width: 44ch;
      line-height: 1.65;
      margin-bottom: 2.5rem;
    }
    .hero__ctas { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem; }
    .hero__tagline {
      font-size: var(--text-xs);
      color: rgba(152,163,153,0.55);
      font-style: italic;
      letter-spacing: 0.05em;
    }
    .hero__right {
      position: relative;
      height: 100%;
      min-height: 100dvh;
      overflow: hidden;
    }
    @media (max-width: 900px) { .hero__right { display: none; } }
    .hero__right img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }
    .hero__right::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(to right, var(--black) 0%, transparent 30%);
    }

    /* ── STATS BAND ── */
    .stats-band {
      background: var(--dark-surface);
      border-top: 1px solid var(--dark-border);
      border-bottom: 1px solid var(--dark-border);
      padding-block: 2.5rem;
    }
    .stats-band__inner {
      display: flex; flex-wrap: wrap;
      gap: 2rem 4rem;
      align-items: center;
      justify-content: space-between;
    }
    .stat__value {
      font-family: var(--font-display);
      font-size: clamp(2rem, 3vw, 3rem);
      font-weight: 900;
      color: var(--green-light);
      line-height: 1;
    }
    .stat__label {
      font-size: var(--text-xs);
      color: var(--muted);
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-top: 0.35rem;
    }
    .stats-band__divider {
      width: 1px; height: 40px;
      background: var(--dark-border);
    }
    @media (max-width: 640px) { .stats-band__divider { display: none; } }

    /* ── ABOUT ── */
    .about__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(3rem, 6vw, 6rem);
      align-items: start;
    }
    @media (max-width: 768px) { .about__grid { grid-template-columns: 1fr; } }
    .about__body {
      color: var(--muted);
      line-height: 1.8;
      margin-bottom: 1.25rem;
    }
    .about__pillars { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2.5rem; }
    .about__pillar { display: flex; gap: 1.25rem; align-items: flex-start; }
    .about__pillar-num {
      font-family: var(--font-display);
      font-size: var(--text-sm);
      font-weight: 900;
      color: var(--green);
      min-width: 2rem;
      padding-top: 0.1em;
    }
    .about__pillar-title { font-weight: 700; color: var(--green-hi); margin-bottom: 0.3rem; font-size: var(--text-sm); }
    .about__pillar-body { font-size: var(--text-sm); color: var(--muted); line-height: 1.7; }

    /* ── ANDREW ── */
    .andrew__img-wrap {
      position: relative;
      border-radius: var(--radius-lg);
      overflow: hidden;
      border: 1px solid var(--dark-border);
      aspect-ratio: 3/4;
      background: var(--dark-card);
      display: flex; align-items: center; justify-content: center;
    }
    .andrew__img-placeholder { font-size: 5rem; opacity: 0.15; }
    .andrew__img-wrap img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(20%); display: block; }
    .andrew__label {
      font-size: var(--text-xs); font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.12em;
      color: var(--green-light); margin-bottom: 0.75rem;
    }
    .andrew__name {
      font-family: var(--font-display);
      font-size: var(--text-xl);
      font-weight: 900;
      color: var(--offwhite);
      margin-bottom: 0.35rem;
    }
    .andrew__title { font-size: var(--text-sm); color: var(--green-light); font-weight: 600; margin-bottom: 1.75rem; }
    .andrew__bio { color: var(--muted); line-height: 1.8; font-size: var(--text-sm); margin-bottom: 1.25rem; }
    .andrew__quote {
      border-left: 3px solid var(--green);
      padding: 1rem 1.5rem; margin-top: 2rem;
      background: rgba(34,139,34,0.06);
      border-radius: 0 var(--radius-md) var(--radius-md) 0;
    }
    .andrew__quote p { font-style: italic; color: var(--offwhite); line-height: 1.7; font-size: var(--text-sm); margin-bottom: 0.5rem; }
    .andrew__quote cite { font-size: var(--text-xs); color: var(--green-light); font-style: normal; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }

    /* ── SERVICES ── */
    .services__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1px;
      background: var(--dark-border);
      border: 1px solid var(--dark-border);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }
    @media (max-width: 900px) { .services__grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 580px) { .services__grid { grid-template-columns: 1fr; } }
    .service-card {
      background: var(--dark-card);
      padding: 2.25rem 2rem;
      transition: background var(--t-fast);
    }
    .service-card:hover { background: #131813; }
    .service-card__num { font-family: var(--font-display); font-size: var(--text-xs); font-weight: 900; color: var(--green); opacity: 0.6; margin-bottom: 1.25rem; }
    .service-card__title { font-family: var(--font-display); font-size: var(--text-base); font-weight: 700; color: var(--offwhite); margin-bottom: 0.75rem; }
    .service-card:hover .service-card__title { color: var(--green-light); }
    .service-card__body { font-size: var(--text-sm); color: var(--muted); line-height: 1.7; }

    /* ── WHY PLUS3 ── */
    .why__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(3rem, 6vw, 6rem);
      align-items: center;
    }
    @media (max-width: 768px) { .why__grid { grid-template-columns: 1fr; } }
    .why__visual { position: relative; border-radius: var(--radius-xl); overflow: hidden; border: 1px solid var(--dark-border); }
    .why__visual img { width: 100%; display: block; filter: grayscale(20%) brightness(0.8); }
    .why__visual::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgba(34,139,34,0.25) 0%, transparent 60%); }
    .why__points { display: flex; flex-direction: column; gap: 2rem; }
    .why__point { display: flex; gap: 1.25rem; align-items: flex-start; }
    .why__point-icon {
      width: 40px; height: 40px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(34,139,34,0.1);
      border: 1px solid rgba(34,139,34,0.2);
      border-radius: var(--radius-md);
      color: var(--green-light);
    }
    .why__point-title { font-weight: 700; color: var(--green-hi); margin-bottom: 0.4rem; font-size: var(--text-sm); }
    .why__point-body { font-size: var(--text-sm); color: var(--muted); line-height: 1.7; }

    /* ── ENGAGEMENT MODELS ── */
    .models__grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
    }
    @media (max-width: 900px) { .models__grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 540px) { .models__grid { grid-template-columns: 1fr; } }
    .model-card {
      background: var(--dark-card);
      border: 1px solid var(--dark-border);
      border-radius: var(--radius-lg);
      padding: 2rem 1.75rem;
      transition: border-color var(--t-fast), transform var(--t-slow) var(--ease-out);
    }
    .model-card:hover { border-color: rgba(34,139,34,0.4); transform: translateY(-3px); }
    .model-card__num { font-family: var(--font-display); font-size: clamp(2.5rem,4vw,3.5rem); font-weight: 900; color: rgba(34,139,34,0.15); line-height: 1; margin-bottom: 1rem; }
    .model-card__title { font-size: var(--text-sm); font-weight: 700; color: var(--green-hi); margin-bottom: 0.75rem; }
    .model-card__body { font-size: var(--text-sm); color: var(--muted); line-height: 1.7; }

    /* ── CLIENTS CAROUSEL ── */
    .clients-section {
      padding-block: clamp(4rem, 7vw, 7rem);
      background: var(--dark-surface);
      border-top: 1px solid var(--dark-border);
    }
    .clients-carousel { overflow: hidden; position: relative; margin-top: 3rem; }
    .clients-carousel::before, .clients-carousel::after {
      content: ''; position: absolute; top: 0; bottom: 0; width: 140px; z-index: 2; pointer-events: none;
    }
    .clients-carousel::before { left: 0; background: linear-gradient(to right, var(--dark-surface), transparent); }
    .clients-carousel::after  { right: 0; background: linear-gradient(to left,  var(--dark-surface), transparent); }
    .clients-track {
      display: flex; align-items: center; gap: 5rem;
      animation: client-scroll 35s linear infinite;
      width: max-content;
    }
    .clients-track:hover { animation-play-state: paused; }
    @keyframes client-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .client-logo {
      height: 52px; width: auto; max-width: 160px;
      object-fit: contain; flex-shrink: 0;
      filter: brightness(0) invert(1);
      opacity: 0.55;
      transition: opacity var(--t-fast), transform var(--t-fast);
    }
    .client-logo:hover { opacity: 1; transform: scale(1.06); }

    /* ── CTA BAND ── */
    .cta-band {
      padding-block: clamp(5rem, 8vw, 8rem);
      background: var(--green);
      position: relative; overflow: hidden;
    }
    .cta-band::before {
      content: '';
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px);
      background-size: 48px 48px;
    }
    .cta-band__inner { position: relative; z-index: 1; text-align: center; }
    .cta-band__heading { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 900; color: #fff; margin-bottom: 1rem; letter-spacing: -0.02em; }
    .cta-band__sub { color: rgba(255,255,255,0.75); font-size: var(--text-base); margin-bottom: 2.5rem; max-width: 48ch; margin-inline: auto; }
    .cta-band__btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn--white { background: #fff; color: var(--green); border: 2px solid #fff; }
    .btn--white:hover { background: rgba(255,255,255,0.9); }
    .btn--outline-white { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.5); }
    .btn--outline-white:hover { border-color: #fff; background: rgba(255,255,255,0.1); }

    /* ── CONTACT ── */
    .contact__grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: clamp(3rem, 5vw, 5rem);
      align-items: start;
    }
    @media (max-width: 768px) { .contact__grid { grid-template-columns: 1fr; } }
    .contact__details { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 2.5rem; }
    .contact__detail { display: flex; gap: 1rem; align-items: flex-start; }
    .contact__detail-icon {
      width: 40px; height: 40px; flex-shrink: 0;
      display: flex; align-items: center; justify-content: center;
      background: rgba(34,139,34,0.1);
      border: 1px solid rgba(34,139,34,0.2);
      border-radius: var(--radius-md);
      color: var(--green-light);
    }
    .contact__detail-label { font-size: var(--text-xs); color: var(--muted); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; }
    .contact__detail-value { font-size: var(--text-sm); color: var(--offwhite); margin-top: 0.2rem; font-weight: 500; }
    .contact__detail-value a { color: var(--green-light); }
    .contact__detail-value a:hover { color: var(--green-hi); }
    .socials { display: flex; gap: 0.75rem; margin-top: 0.5rem; flex-wrap: wrap; }
    .social-btn {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0.35rem 0.9rem;
      border-radius: var(--radius-full);
      font-size: var(--text-xs); font-weight: 700;
      border: 1px solid currentColor;
      transition: background var(--t-fast), color var(--t-fast);
    }
    .social-btn--wa { color: #25d366; }
    .social-btn--wa:hover { background: #25d366; color: #fff; }
    .social-btn--li { color: #0a66c2; }
    .social-btn--li:hover { background: #0a66c2; color: #fff; }
    .form-wrap {
      background: var(--dark-card);
      border: 1px solid var(--dark-border);
      border-radius: var(--radius-xl);
      padding: 2.5rem;
    }
    .form { display: flex; flex-direction: column; gap: 1.25rem; }
    .form__group { display: flex; flex-direction: column; gap: 0.5rem; }
    .form__label { font-size: var(--text-sm); font-weight: 600; color: var(--offwhite); }
    .form__input, .form__select, .form__textarea {
      padding: 0.75rem 1rem;
      background: rgba(255,255,255,0.04);
      border: 1px solid var(--dark-border);
      border-radius: var(--radius-md);
      font-size: var(--text-sm);
      color: var(--offwhite);
      transition: border-color var(--t-fast), box-shadow var(--t-fast);
    }
    .form__input::placeholder, .form__textarea::placeholder { color: var(--muted); opacity: 0.5; }
    .form__input:focus, .form__select:focus, .form__textarea:focus {
      outline: none;
      border-color: var(--green);
      box-shadow: 0 0 0 3px rgba(34,139,34,0.15);
    }
    .form__select option { background: #111; }
    .form__textarea { resize: vertical; min-height: 120px; }
    .form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
    @media (max-width: 480px) { .form__row { grid-template-columns: 1fr; } }
    .btn-submit {
      padding: 1rem 2rem;
      background: var(--green);
      color: #fff;
      border-radius: var(--radius-sm);
      font-size: var(--text-sm);
      font-weight: 700;
      border: none; cursor: pointer;
      transition: background var(--t-fast);
    }
    .btn-submit:hover { background: var(--green-light); }
    .form-success { display: none; text-align: center; padding: 3rem 2rem; }
    .form-success.show { display: block; }
    .form-success__icon { font-size: 3rem; margin-bottom: 1rem; color: var(--green-light); }
    .form-success__title { font-family: var(--font-display); font-weight: 800; font-size: var(--text-xl); margin-bottom: 0.75rem; }
    .form-success__body { color: var(--muted); }

    /* ── FOOTER ── */
    footer {
      background: var(--dark-surface);
      border-top: 1px solid var(--dark-border);
      padding-block: clamp(3.5rem, 6vw, 5rem);
    }
    .footer__inner {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }
    @media (max-width: 768px) { .footer__inner { grid-template-columns: 1fr; gap: 2.5rem; } }
    .footer__logo { height: 40px; width: auto; margin-bottom: 1.25rem; }
    .footer__tagline { font-size: var(--text-sm); color: var(--muted); line-height: 1.7; max-width: 32ch; }
    .footer__col-title { font-family: var(--font-body); font-weight: 700; font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.1em; color: rgba(152,163,153,0.5); margin-bottom: 1.25rem; }
    .footer__links { display: flex; flex-direction: column; gap: 0.75rem; }
    .footer__links a { font-size: var(--text-sm); color: var(--muted); }
    .footer__links a:hover { color: var(--offwhite); }
    .footer__bottom {
      display: flex; align-items: center; justify-content: space-between;
      padding-top: 2rem;
      border-top: 1px solid var(--dark-border);
      gap: 1rem; flex-wrap: wrap;
    }
    .footer__copy { font-size: var(--text-xs); color: rgba(152,163,153,0.4); }
    @media (max-width: 640px) { .footer__bottom { flex-direction: column; text-align: center; } }
  </style>
</head>
<body>

<!-- NAV -->
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav__inner">
    <a href="#" class="nav__logo" aria-label="Plus3 Solutions home">
      <img src="${LOGO_WHITE_URL}" alt="Plus3 Solutions">
    </a>
    <ul class="nav__links" role="list">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#how-we-work">How We Work</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="nav__actions">
      <a href="#contact" class="nav__cta">Let's talk</a>
      <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false" id="hamburger">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
</nav>
<div class="nav__mobile" id="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <a href="#about" class="mobile-link">About</a>
  <a href="#services" class="mobile-link">Services</a>
  <a href="#how-we-work" class="mobile-link">How We Work</a>
  <a href="#contact" class="mobile-link">Contact</a>
  <a href="#contact" class="btn btn--green mobile-link">Let's talk &rarr;</a>
</div>

<main id="main-content">

  <!-- HERO -->
  <section class="hero" aria-labelledby="hero-h">
    <div class="hero__left">
      <div class="hero__eyebrow">
        <span class="hero__eyebrow-line" aria-hidden="true"></span>
        Technology Partner
      </div>
      <h1 class="hero__heading" id="hero-h">
        Tech talent to bring<br>your ideas <em>to life.</em>
      </h1>
      <p class="hero__sub">Smarter delivery, better results, and partnerships that last.</p>
      <div class="hero__ctas">
        <a href="#contact" class="btn btn--green">Start a conversation</a>
        <a href="#services" class="btn btn--outline">Explore services</a>
      </div>
      <p class="hero__tagline">Professional &middot; Personal &middot; Practical</p>
    </div>
    <div class="hero__right" aria-hidden="true">
      <img src="${HERO_BG_URL}" alt="Plus3 technology background" fetchpriority="high">
    </div>
  </section>

  <!-- STATS BAND -->
  <div class="stats-band" aria-label="Key metrics">
    <div class="container">
      <div class="stats-band__inner">
        <div class="stat"><div class="stat__value">15+</div><div class="stat__label">Years heritage</div></div>
        <div class="stats-band__divider" aria-hidden="true"></div>
        <div class="stat"><div class="stat__value">6</div><div class="stat__label">Service lines</div></div>
        <div class="stats-band__divider" aria-hidden="true"></div>
        <div class="stat"><div class="stat__value">3</div><div class="stat__label">Markets</div></div>
        <div class="stats-band__divider" aria-hidden="true"></div>
        <div class="stat"><div class="stat__value">15+</div><div class="stat__label">Team &amp; growing</div></div>
      </div>
    </div>
  </div>

  <!-- ABOUT -->
  <section class="section section--dark" id="about" aria-labelledby="about-h">
    <div class="container">
      <div class="about__grid">
        <div>
          <div class="green-bar" aria-hidden="true"></div>
          <p class="sec-label">01 &mdash; About Plus3</p>
          <h2 class="sec-heading" id="about-h">Built differently<br>from day one.</h2>
          <p class="about__body" style="margin-top:1.5rem;">Plus3 is a modern technology partner built on its founder&rsquo;s 15+ years of international consulting experience. We help organisations turn ideas into practical, scalable digital solutions &mdash; leading with outcomes, smarter delivery, better results and partnerships that last.</p>
          <p class="about__body">We&rsquo;re a relationship-driven professional services partner. We take the time to understand each unique business and tailor custom outsourcing solutions to fit. Our network of joint ventures, partners and specialists works alongside your teams across custom development, analysis and quality assurance &mdash; turning your vision into reality.</p>
          <div class="about__pillars">
            <div class="about__pillar"><div class="about__pillar-num">01</div><div><div class="about__pillar-title">Outcome-Focused</div><div class="about__pillar-body">We measure success by the results we create for your business &mdash; real outcomes, not feature counts or hours billed.</div></div></div>
            <div class="about__pillar"><div class="about__pillar-num">02</div><div><div class="about__pillar-title">Relationship-Driven</div><div class="about__pillar-body">Long-term partnerships built on trust and embedded teams that align closely with your stakeholders and goals.</div></div></div>
            <div class="about__pillar"><div class="about__pillar-num">03</div><div><div class="about__pillar-title">Senior, Yet Practical</div><div class="about__pillar-body">Senior consulting experience paired with delivery models that work within real budgets, timelines and constraints.</div></div></div>
          </div>
        </div>
        <div>
          <div class="andrew__img-wrap" style="margin-bottom:2rem;"><div class="andrew__img-placeholder" aria-hidden="true">&#128100;</div></div>
          <div class="andrew__label">Leadership</div>
          <div class="andrew__name">Andrew Essey</div>
          <div class="andrew__title">Founder</div>
          <p class="andrew__bio">Andrew started in mergers and acquisitions, followed by 10 years of financial and project consulting across the UK and Europe. A member of the Chartered Institute of Management Accountants, he has held senior roles at global organisations including ING, Wells Fargo and JP Morgan.</p>
          <p class="andrew__bio">Back in South Africa, he spent five-plus years as a senior business head at a major software company before founding Plus3.</p>
          <div class="andrew__quote"><p>&ldquo;We don&rsquo;t sell solutions. We build the right ones.&rdquo;</p><cite>Andrew Essey &mdash; Founder, Plus3</cite></div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section section--surface" id="services" aria-labelledby="services-h">
    <div class="container">
      <div class="sec-header">
        <div class="green-bar" aria-hidden="true"></div>
        <p class="sec-label">02 &mdash; Our Services</p>
        <h2 class="sec-heading" id="services-h">End-to-end delivery<br><em>capability.</em></h2>
        <p class="sec-body">From first idea to production &mdash; one partner across the whole journey.</p>
      </div>
      <div class="services__grid">
        <article class="service-card"><div class="service-card__num">01</div><h3 class="service-card__title">Consulting &amp; Roadmaps</h3><p class="service-card__body">Define direction, prioritise initiatives and design practical delivery roadmaps aligned to business goals.</p></article>
        <article class="service-card"><div class="service-card__num">02</div><h3 class="service-card__title">Custom Software Development</h3><p class="service-card__body">Tailored solutions that integrate with existing systems and support future scalability.</p></article>
        <article class="service-card"><div class="service-card__num">03</div><h3 class="service-card__title">Team Augmentation</h3><p class="service-card__body">Skilled professionals who embed directly into your teams to scale delivery without losing quality.</p></article>
        <article class="service-card"><div class="service-card__num">04</div><h3 class="service-card__title">Cloud, DevOps &amp; Data</h3><p class="service-card__body">Modern architectures and operational best practice for reliability, performance and cost efficiency.</p></article>
        <article class="service-card"><div class="service-card__num">05</div><h3 class="service-card__title">Quality Assurance</h3><p class="service-card__body">Testing and delivery enablement that keep solutions robust under real-world pressure.</p></article>
        <article class="service-card"><div class="service-card__num">06</div><h3 class="service-card__title">Delivery Enablement</h3><p class="service-card__body">Disciplined, transparent execution with shared accountability from concept to production.</p></article>
      </div>
    </div>
  </section>

  <!-- WHY PLUS3 -->
  <section class="section section--dark" id="how-we-work" aria-labelledby="why-h">
    <div class="container">
      <div class="why__grid">
        <div>
          <div class="green-bar" aria-hidden="true"></div>
          <p class="sec-label">03 &mdash; Why Plus3</p>
          <h2 class="sec-heading" id="why-h">Why clients<br><em>choose us.</em></h2>
          <div class="why__points" style="margin-top:2.5rem;">
            <div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg></div><div><div class="why__point-title">We think before we build</div><div class="why__point-body">Solutions grounded in genuine understanding, not assumptions &mdash; we solve the real business problem, not just ship outputs that look good on paper.</div></div></div>
            <div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div><div><div class="why__point-title">A delivery model built on ownership</div><div class="why__point-body">Our specialists are incentivised on delivery quality, growth and client satisfaction &mdash; creating genuine ownership and accountability on every project.</div></div></div>
            <div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><div><div class="why__point-title">Built to scale with you</div><div class="why__point-body">Practical, modern solutions engineered to grow with your business &mdash; from first build to enterprise scale.</div></div></div>
          </div>
        </div>
        <div class="why__visual"><img src="${HERO_BG_URL}" alt="Plus3 technology" loading="lazy"></div>
      </div>
    </div>
  </section>

  <!-- ENGAGEMENT MODELS -->
  <section class="section section--surface" id="engagement" aria-labelledby="models-h">
    <div class="container">
      <div class="sec-header">
        <div class="green-bar" aria-hidden="true"></div>
        <p class="sec-label">04 &mdash; How We Work</p>
        <h2 class="sec-heading" id="models-h">Flexible ways to<br><em>work together.</em></h2>
        <p class="sec-body">Choose the engagement model that fits your project, budget and timelines.</p>
      </div>
      <div class="models__grid">
        <div class="model-card"><div class="model-card__num">01</div><div class="model-card__title">Time &amp; Materials</div><p class="model-card__body">Billing on actual hours and materials used. Iterative delivery, maximum innovation, with a stringent timesheet process.</p></div>
        <div class="model-card"><div class="model-card__num">02</div><div class="model-card__title">Monthly Retainer</div><p class="model-card__body">A set number of hours committed for an agreed monthly cost. Ideal for 12+ month engagements.</p></div>
        <div class="model-card"><div class="model-card__num">03</div><div class="model-card__title">Sprint Milestones</div><p class="model-card__body">A fixed cost per completed sprint in an agile project. Requires well-established agile rituals.</p></div>
        <div class="model-card"><div class="model-card__num">04</div><div class="model-card__title">Outcome-Based</div><p class="model-card__body">Billing linked to specific results or deliverables. Requires fully defined scope and dependencies.</p></div>
      </div>
    </div>
  </section>

  <!-- CLIENTS CAROUSEL -->
  <section class="clients-section" aria-labelledby="clients-h">
    <div class="container">
      <div class="green-bar" aria-hidden="true"></div>
      <p class="sec-label">Our Clients</p>
      <h2 class="sec-heading" id="clients-h">Trusted by leading<br><em>businesses.</em></h2>
    </div>
    <div class="clients-carousel" aria-label="Client logos">
      <div class="clients-track">${CAROUSEL_IMGS}</div>
    </div>
  </section>

  <!-- CTA BAND -->
  <section class="cta-band" aria-label="Call to action">
    <div class="container cta-band__inner">
      <h2 class="cta-band__heading">Everything starts with<br>a conversation.</h2>
      <p class="cta-band__sub">No pitch, no pressure &mdash; just a conversation about what you&rsquo;re trying to achieve.</p>
      <div class="cta-band__btns">
        <a href="#contact" class="btn btn--white">Send us a message</a>
        <a href="https://wa.me/27822635227" class="btn btn--outline-white" target="_blank" rel="noopener">WhatsApp us</a>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section section--dark" id="contact" aria-labelledby="contact-h">
    <div class="container">
      <div class="contact__grid">
        <div>
          <div class="green-bar" aria-hidden="true"></div>
          <p class="sec-label">05 &mdash; Get in Touch</p>
          <h2 class="sec-heading" id="contact-h">Let&rsquo;s talk.</h2>
          <p class="sec-body">No matter what your challenge is &mdash; we&rsquo;re here to listen and help find the right solution.</p>
          <div class="contact__details">
            <div class="contact__detail">
              <div class="contact__detail-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
              <div><div class="contact__detail-label">Email</div><div class="contact__detail-value"><a href="mailto:info@plus3.co.za">info@plus3.co.za</a></div></div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l1.26-1.26a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
              <div><div class="contact__detail-label">Phone</div><div class="contact__detail-value"><a href="tel:+27822635227">+27 82 263 5227</a><br><a href="tel:+27689397311">+27 68 939 7311</a></div></div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div><div class="contact__detail-label">Address</div><div class="contact__detail-value">Work Central, Bel Air Shopping Centre<br>Bellairs Dr, Northriding, Johannesburg, 2169</div></div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 2H3v16h5l4 4 4-4h5V2z"/></svg></div>
              <div>
                <div class="contact__detail-label">Connect</div>
                <div class="socials">
                  <a href="https://wa.me/27822635227" class="social-btn social-btn--wa" target="_blank" rel="noopener">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                    WhatsApp
                  </a>
                  <a href="https://www.linkedin.com/company/plus3group/" class="social-btn social-btn--li" target="_blank" rel="noopener">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="form-wrap">
            <form class="form" id="contact-form" novalidate aria-label="Contact form">
              <div class="form__row">
                <div class="form__group"><label class="form__label" for="f-name">First Name *</label><input class="form__input" type="text" id="f-name" name="first_name" placeholder="Jane" required autocomplete="given-name"></div>
                <div class="form__group"><label class="form__label" for="f-surname">Last Name *</label><input class="form__input" type="text" id="f-surname" name="last_name" placeholder="Smith" required autocomplete="family-name"></div>
              </div>
              <div class="form__group"><label class="form__label" for="f-email">Email *</label><input class="form__input" type="email" id="f-email" name="email" placeholder="jane@company.co.za" required autocomplete="email"></div>
              <div class="form__group"><label class="form__label" for="f-company">Company</label><input class="form__input" type="text" id="f-company" name="company" placeholder="Your company" autocomplete="organization"></div>
              <div class="form__group">
                <label class="form__label" for="f-service">Service of interest</label>
                <select class="form__select" id="f-service" name="service">
                  <option value="">Select a service...</option>
                  <option value="consulting">Consulting &amp; Roadmaps</option>
                  <option value="software">Custom Software Development</option>
                  <option value="augmentation">Team Augmentation</option>
                  <option value="devops">Cloud, DevOps &amp; Data</option>
                  <option value="qa">Quality Assurance</option>
                  <option value="delivery">Delivery Enablement</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>
              <div class="form__group"><label class="form__label" for="f-message">Message *</label><textarea class="form__textarea" id="f-message" name="message" placeholder="Tell us about your project or challenge..." required></textarea></div>
              <button type="submit" class="btn-submit">Send message &rarr;</button>
            </form>
            <div class="form-success" id="form-success" role="status" aria-live="polite">
              <div class="form-success__icon">&#10003;</div>
              <div class="form-success__title">Message sent!</div>
              <div class="form-success__body">Thank you for reaching out. We&rsquo;ll be in touch shortly.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</main>

<!-- FOOTER -->
<footer>
  <div class="container">
    <div class="footer__inner">
      <div>
        <img src="${LOGO_WHITE_URL}" alt="Plus3 Solutions" class="footer__logo">
        <p class="footer__tagline">Modern technology partner. Built on 15+ years of international experience. Professional &middot; Personal &middot; Practical.</p>
      </div>
      <div>
        <div class="footer__col-title">Services</div>
        <ul class="footer__links">
          <li><a href="#services">Consulting &amp; Roadmaps</a></li>
          <li><a href="#services">Custom Software</a></li>
          <li><a href="#services">Team Augmentation</a></li>
          <li><a href="#services">Cloud &amp; DevOps</a></li>
          <li><a href="#services">Quality Assurance</a></li>
          <li><a href="#services">Delivery Enablement</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__col-title">Company</div>
        <ul class="footer__links">
          <li><a href="#about">About Plus3</a></li>
          <li><a href="#how-we-work">Why Plus3</a></li>
          <li><a href="#engagement">Engagement Models</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="mailto:info@plus3.co.za">info@plus3.co.za</a></li>
          <li><a href="https://www.linkedin.com/company/plus3group/" target="_blank" rel="noopener">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">Copyright &copy; <span id="footer-year"></span> Plus3 Solutions &mdash; All Rights Reserved.</p>
      <p class="footer__copy">Work Central, Northriding, Johannesburg, 2169</p>
    </div>
  </div>
</footer>

<script>
(function(){
  var el=document.getElementById('footer-year');
  if(el) el.textContent=new Date().getFullYear();
  var nav=document.querySelector('.nav');
  if(nav){
    function u(){ nav.classList.toggle('scrolled',window.scrollY>20); }
    window.addEventListener('scroll',u,{passive:true}); u();
  }
  var btn=document.getElementById('hamburger'),mn=document.getElementById('mobile-nav');
  if(btn&&mn){
    var open=false;
    function toggle(){
      open=!open;
      mn.classList.toggle('open',open);
      btn.setAttribute('aria-expanded',open);
      btn.innerHTML=open
        ?'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
        :'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      document.body.style.overflow=open?'hidden':'';
    }
    btn.addEventListener('click',toggle);
    document.querySelectorAll('.mobile-link').forEach(function(l){ l.addEventListener('click',function(){ if(open) toggle(); }); });
  }
  var form=document.getElementById('contact-form'),success=document.getElementById('form-success');
  if(form&&success){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var data={first_name:form.first_name.value,last_name:form.last_name.value,email:form.email.value,company:form.company.value,service:form.service.value,message:form.message.value};
      fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
        .then(function(r){return r.json();})
        .then(function(r){ if(r.ok){form.style.display='none';success.classList.add('show');}else{alert('Something went wrong. Please email info@plus3.co.za');} })
        .catch(function(){alert('Network error. Please email info@plus3.co.za');});
    });
  }
})();
</script>
</body>
</html>`;

const HEADERS = {
  'Content-Type': 'text/html; charset=UTF-8',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "font-src https://fonts.gstatic.com",
    "connect-src 'self'",
    "img-src 'self' data: https://raw.githubusercontent.com https://objects.githubusercontent.com https://camo.githubusercontent.com",
    "frame-ancestors 'none'"
  ].join('; '),
  'Cache-Control': 'public, max-age=3600, must-revalidate',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders() });
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { first_name, last_name, email, message } = body;
        if (!first_name || !last_name || !email || !message) return jsonResponse({ error: 'Required fields missing.' }, 400);
        return jsonResponse({ ok: true }, 200);
      } catch(err) {
        return jsonResponse({ error: 'Server error.' }, 500);
      }
    }
    if (request.method === 'GET') return new Response(HTML, { headers: HEADERS });
    return new Response('Method Not Allowed', { status: 405 });
  }
};

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });
}
function corsHeaders() {
  return { 'Access-Control-Allow-Origin': 'https://plus3.co.za', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
}
