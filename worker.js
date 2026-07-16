const CDN            = 'https://cdn.jsdelivr.net/gh/iambengiey/plus3@main';
const LOGO_URL       = CDN + '/website/logo.png';
const LOGO_WHITE_URL = CDN + '/website/logo.png';
const HERO_BG_URL    = CDN + '/website/bg.png';

const PARTNER_LOGOS = [
  { src: CDN + '/website/Logos/absa_logo.png',           alt: 'Absa' },
  { src: CDN + '/website/Logos/capitec_logo.png',        alt: 'Capitec' },
  { src: CDN + '/website/Logos/dkms_logo.png',           alt: 'DKMS' },
  { src: CDN + '/website/Logos/eurolab_logo_white.png',  alt: 'Eurolab' },
  { src: CDN + '/website/Logos/mediclinic.png',          alt: 'Mediclinic' },
  { src: CDN + '/website/Logos/mercedes_benz_logo.png',  alt: 'Mercedes-Benz' },
  { src: CDN + '/website/Logos/singular_logo.png',       alt: 'Singular' },
  { src: CDN + '/website/Logos/standard_bank_logo.png',  alt: 'Standard Bank' },
  { src: CDN + '/website/Logos/tetrad_group_logo.png',   alt: 'Tetrad Group' },
  { src: CDN + '/website/Logos/tiltecx_logo.png',        alt: 'Tiltecx' },
];

const CAROUSEL_IMGS = [...PARTNER_LOGOS, ...PARTNER_LOGOS]
  .map(({ src, alt }) => '<img src="' + src + '" alt="' + alt + '" class="client-logo" loading="lazy">')
  .join('');

const SCHEMA = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Plus3 Solutions',
  url: 'https://www.plus3.co.za',
  logo: CDN + '/website/logo.png',
  description: 'Plus3 is a modern technology partner delivering consulting, custom software development, team augmentation, cloud & DevOps, quality assurance and delivery enablement services across South Africa.',
  telephone: ['+27822635227', '+27689397311'],
  email: 'info@plus3.co.za',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '50 Christo Avenue',
    addressLocality: 'Olivedale, Johannesburg',
    postalCode: '2188',
    addressCountry: 'ZA'
  },
  areaServed: 'ZA',
  founder: { '@type': 'Person', name: 'Andrew Essey', jobTitle: 'Founder' },
  sameAs: ['https://www.linkedin.com/company/plus3group/', 'https://wa.me/27822635227'],
  serviceType: ['Technology Consulting','Custom Software Development','Team Augmentation','Cloud and DevOps','Quality Assurance','Delivery Enablement']
});

function buildHTML(heroUrl, logoUrl, cdnBase, carouselImgs, schema) {
  return '<!DOCTYPE html>\n' +
'<html lang="en-ZA">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>Plus3 Solutions | Tech Talent to Bring Your Ideas to Life</title>\n' +
'  <meta name="description" content="Plus3 is a modern technology partner built on its founder&#39;s 15+ years of international consulting experience. We deliver custom software, team augmentation, consulting, cloud &amp; DevOps, QA and delivery enablement across South Africa.">\n' +
'  <meta name="keywords" content="technology consulting South Africa, custom software development Johannesburg, team augmentation, staff augmentation, DevOps South Africa, cloud consulting, software outsourcing South Africa, Plus3, IT consulting Johannesburg">\n' +
'  <meta name="author" content="Plus3 Solutions">\n' +
'  <meta name="robots" content="index, follow">\n' +
'  <link rel="canonical" href="https://www.plus3.co.za">\n' +
'  <link rel="alternate" hreflang="en-za" href="https://www.plus3.co.za">\n' +
'  <link rel="alternate" hreflang="en" href="https://www.plus3.co.za">\n' +
'  <meta property="og:type" content="website">\n' +
'  <meta property="og:url" content="https://www.plus3.co.za">\n' +
'  <meta property="og:title" content="Plus3 Solutions | Tech Talent to Bring Your Ideas to Life">\n' +
'  <meta property="og:description" content="Modern technology partner. Consulting, custom software, team augmentation, cloud &amp; DevOps, QA and delivery enablement. Built on 15+ years of international experience.">\n' +
'  <meta property="og:image" content="' + heroUrl + '">\n' +
'  <meta property="og:image:width" content="1200">\n' +
'  <meta property="og:image:height" content="630">\n' +
'  <meta property="og:site_name" content="Plus3 Solutions">\n' +
'  <meta property="og:locale" content="en_ZA">\n' +
'  <meta name="twitter:card" content="summary_large_image">\n' +
'  <meta name="twitter:title" content="Plus3 Solutions | Tech Talent to Bring Your Ideas to Life">\n' +
'  <meta name="twitter:description" content="Modern technology partner delivering smarter, results-driven tech solutions across South Africa.">\n' +
'  <meta name="twitter:image" content="' + heroUrl + '">\n' +
'  <link rel="icon" type="image/png" href="' + logoUrl + '">\n' +
'  <link rel="apple-touch-icon" href="' + logoUrl + '">\n' +
'  <link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">\n' +
'  <script type="application/ld+json">' + schema + '<\/script>\n' +
'  <style>\n' +
'    :root {\n' +
'      --black:#000;--page-bg:#000;--surface-bg:#0d0d0d;--card-bg:#111411;--border-col:#1e2a1e;\n' +
'      --text-main:#F0F2ED;--text-muted:#98A399;--green:#228B22;--green-light:#37B34A;--green-hi:#61D26B;\n' +
'      --nav-bg:rgba(0,0,0,0.95);--nav-border:rgba(255,255,255,0.07);\n' +
'      --hero-overlay-start:rgba(0,0,0,0.80);--hero-overlay-end:rgba(0,0,0,0.65);\n' +
'      --hero-grad:linear-gradient(to right,#000 0%,transparent 30%);\n' +
'      --carousel-fade-l:linear-gradient(to right,#0d0d0d,transparent);\n' +
'      --carousel-fade-r:linear-gradient(to left,#0d0d0d,transparent);\n' +
'      --footer-bg:#0d0d0d;--select-bg:#111;\n' +
'      --logo-filter:brightness(0) invert(1);\n' +
'      --nav-link-color:#ccc;\n' +
'      color-scheme:dark;\n' +
'      --nav-height:72px;\n' +
'      --font-display:\'Playfair Display\',Georgia,serif;\n' +
'      --font-body:\'DM Sans\',\'Inter\',sans-serif;\n' +
'      --ease-out:cubic-bezier(0.16,1,0.3,1);\n' +
'      --t-fast:180ms;--t-slow:360ms;\n' +
'      --radius-sm:4px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;\n' +
'      --content-wide:1200px;\n' +
'      --text-xs:clamp(0.72rem,0.7rem + 0.2vw,0.8rem);\n' +
'      --text-sm:clamp(0.875rem,0.85rem + 0.15vw,1rem);\n' +
'      --text-base:clamp(1rem,0.97rem + 0.2vw,1.125rem);\n' +
'      --text-lg:clamp(1.125rem,1rem + 0.6vw,1.5rem);\n' +
'      --text-xl:clamp(1.5rem,1.2rem + 1.2vw,2.25rem);\n' +
'      --text-2xl:clamp(2rem,1.2rem + 2.5vw,3.75rem);\n' +
'    }\n' +
'    @media (prefers-color-scheme:light){\n' +
'      :root{\n' +
'        --page-bg:#fff;--surface-bg:#f4f6f1;--card-bg:#fff;--border-col:#d0d8ce;\n' +
'        --text-main:#1a1f1a;--text-muted:#4a5a4b;\n' +
'        --nav-bg:rgba(0,0,0,0.95);--nav-border:rgba(255,255,255,0.07);--nav-link-color:#ccc;\n' +
'        --hero-overlay-start:rgba(255,255,255,0.75);--hero-overlay-end:rgba(255,255,255,0.55);\n' +
'        --hero-grad:linear-gradient(to right,#fff 0%,transparent 35%);\n' +
'        --carousel-fade-l:linear-gradient(to right,#f4f6f1,transparent);\n' +
'        --carousel-fade-r:linear-gradient(to left,#f4f6f1,transparent);\n' +
'        --footer-bg:#f4f6f1;--select-bg:#fff;\n' +
'        --logo-filter:brightness(0) saturate(0);\n' +
'        color-scheme:light;\n' +
'      }\n' +
'    }\n' +
'    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\n' +
'    html{scroll-behavior:smooth;scroll-padding-top:var(--nav-height);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}\n' +
'    body{font-family:var(--font-body);font-size:var(--text-base);background:var(--page-bg);color:var(--text-main);overflow-x:hidden;line-height:1.65;transition:background 0.2s,color 0.2s}\n' +
'    img,svg{display:block;max-width:100%}\n' +
'    ul,ol{list-style:none}\n' +
'    input,button,textarea,select{font:inherit;color:inherit}\n' +
'    h1,h2,h3,h4{font-family:var(--font-display);text-wrap:balance;line-height:1.1}\n' +
'    p,li{text-wrap:pretty}\n' +
'    button{cursor:pointer;background:none;border:none}\n' +
'    a{color:inherit;text-decoration:none}\n' +
'    ::selection{background:rgba(34,139,34,0.3)}\n' +
'    :focus-visible{outline:2px solid var(--green-light);outline-offset:3px;border-radius:var(--radius-sm)}\n' +
'    @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:0.01ms!important;transition-duration:0.01ms!important}}\n' +
'    .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}\n' +
'    .container{max-width:var(--content-wide);margin-inline:auto;padding-inline:clamp(1.25rem,5vw,4rem)}\n' +
'    .section{padding-block:clamp(5rem,9vw,9rem)}\n' +
'    .section--dark{background:var(--page-bg)}\n' +
'    .section--surface{background:var(--surface-bg)}\n' +
'    .sec-label{font-family:var(--font-body);font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green-light);margin-bottom:1rem}\n' +
'    .sec-heading{font-family:var(--font-display);font-size:var(--text-2xl);font-weight:900;color:var(--text-main);letter-spacing:-0.02em;line-height:1.05}\n' +
'    .sec-heading em{font-style:normal;color:var(--green-light)}\n' +
'    .sec-body{color:var(--text-muted);font-size:var(--text-base);max-width:58ch;margin-top:1rem;line-height:1.75}\n' +
'    .sec-header{margin-bottom:clamp(3rem,5vw,4.5rem)}\n' +
'    .green-bar{width:48px;height:3px;background:var(--green);margin-bottom:1.5rem}\n' +
'    .btn{display:inline-flex;align-items:center;gap:0.5rem;padding:0.85rem 1.75rem;font-family:var(--font-body);font-size:var(--text-sm);font-weight:600;border-radius:var(--radius-sm);transition:all var(--t-fast) var(--ease-out);cursor:pointer}\n' +
'    .btn--green{background:var(--green);color:#fff;border:2px solid var(--green)}\n' +
'    .btn--green:hover{background:var(--green-light);border-color:var(--green-light)}\n' +
'    .btn--outline{background:transparent;color:var(--text-main);border:2px solid rgba(100,120,100,0.35)}\n' +
'    .btn--outline:hover{border-color:var(--text-main);background:rgba(100,120,100,0.06)}\n' +
'    .nav{position:fixed;top:0;left:0;right:0;height:var(--nav-height);z-index:100;background:var(--nav-bg);backdrop-filter:blur(16px) saturate(140%);-webkit-backdrop-filter:blur(16px) saturate(140%);border-bottom:1px solid var(--nav-border);transition:box-shadow var(--t-slow)}\n' +
'    .nav.scrolled{box-shadow:0 4px 32px rgba(0,0,0,0.4)}\n' +
'    .nav__inner{max-width:var(--content-wide);margin-inline:auto;padding-inline:clamp(1.25rem,5vw,4rem);height:100%;display:flex;align-items:center;justify-content:space-between;gap:2rem}\n' +
'    .nav__logo img{height:40px;width:auto}\n' +
'    .nav__links{display:flex;align-items:center;gap:0.25rem}\n' +
'    .nav__links a{padding:0.45rem 0.9rem;font-size:var(--text-sm);font-weight:500;color:var(--nav-link-color);border-radius:var(--radius-sm);transition:color var(--t-fast),background var(--t-fast)}\n' +
'    .nav__links a:hover{color:#fff;background:rgba(255,255,255,0.08)}\n' +
'    .nav__cta{padding:0.5rem 1.25rem;background:var(--green);color:#fff;border-radius:var(--radius-sm);font-size:var(--text-sm);font-weight:700;transition:background var(--t-fast)}\n' +
'    .nav__cta:hover{background:var(--green-light)}\n' +
'    .nav__hamburger{display:none;width:44px;height:44px;align-items:center;justify-content:center;color:#fff;border-radius:var(--radius-sm)}\n' +
'    .nav__hamburger:hover{background:rgba(255,255,255,0.1)}\n' +
'    .nav__mobile{position:fixed;top:var(--nav-height);left:0;right:0;bottom:0;background:#000;z-index:99;padding:2rem 1.5rem;display:flex;flex-direction:column;gap:0.5rem;transform:translateX(100%);transition:transform var(--t-slow) var(--ease-out);border-top:1px solid rgba(255,255,255,0.07);overflow-y:auto}\n' +
'    .nav__mobile.open{transform:translateX(0)}\n' +
'    .nav__mobile a{display:block;padding:1rem 1.25rem;font-size:var(--text-lg);font-weight:600;color:#fff;border-radius:var(--radius-md)}\n' +
'    .nav__mobile a:hover{background:rgba(255,255,255,0.06)}\n' +
'    .nav__mobile .btn--green{text-align:center;margin-top:1rem}\n' +
'    @media (max-width:900px){.nav__links,.nav__actions .nav__cta{display:none}.nav__hamburger{display:flex}}\n' +
'    .hero{min-height:100dvh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding-top:var(--nav-height);position:relative}\n' +
'    @media (max-width:900px){.hero{grid-template-columns:1fr;min-height:100dvh;background-image:url(\'' + heroUrl + '\');background-size:cover;background-position:center top;background-attachment:scroll}}\n' +
'    .hero__left{padding:clamp(4rem,8vw,8rem) clamp(1.25rem,5vw,4rem);position:relative;z-index:2}\n' +
'    @media (max-width:900px){.hero__left{background:linear-gradient(to bottom,var(--hero-overlay-start) 0%,var(--hero-overlay-end) 100%)}}\n' +
'    .hero__eyebrow{display:inline-flex;align-items:center;gap:0.6rem;font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green-light);margin-bottom:1.75rem}\n' +
'    .hero__eyebrow-line{width:32px;height:2px;background:var(--green)}\n' +
'    .hero__heading{font-family:var(--font-display);font-size:clamp(2.5rem,1rem + 5vw,5.5rem);font-weight:900;line-height:1.04;letter-spacing:-0.025em;color:var(--text-main);margin-bottom:1.5rem}\n' +
'    .hero__heading em{font-style:normal;color:var(--green-light)}\n' +
'    .hero__sub{font-size:var(--text-lg);color:var(--text-muted);max-width:44ch;line-height:1.65;margin-bottom:2.5rem}\n' +
'    .hero__ctas{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:3rem}\n' +
'    .hero__tagline{font-size:var(--text-xs);color:var(--text-muted);opacity:0.55;font-style:italic;letter-spacing:0.05em}\n' +
'    .hero__right{position:fixed;top:0;right:0;width:50%;height:100vh;z-index:1;overflow:hidden;pointer-events:none}\n' +
'    @media (max-width:900px){.hero__right{display:none}}\n' +
'    .hero__right img{width:100%;height:100%;object-fit:cover;object-position:center;display:block}\n' +
'    .hero__right::after{content:\'\';position:absolute;inset:0;background:var(--hero-grad)}\n' +
'    .stats-band{background:var(--surface-bg);border-top:1px solid var(--border-col);border-bottom:1px solid var(--border-col);padding-block:2.5rem;position:relative;z-index:10}\n' +
'    .stats-band__inner{display:flex;flex-wrap:wrap;gap:2rem 4rem;align-items:center;justify-content:space-between}\n' +
'    .stat__value{font-family:var(--font-display);font-size:clamp(2rem,3vw,3rem);font-weight:900;color:var(--green-light);line-height:1}\n' +
'    .stat__label{font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-top:0.35rem}\n' +
'    .stats-band__divider{width:1px;height:40px;background:var(--border-col)}\n' +
'    @media (max-width:640px){.stats-band__divider{display:none}}\n' +
'    .section,.clients-section,.cta-band,footer{position:relative;z-index:10}\n' +
'    .about__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:start}\n' +
'    @media (max-width:768px){.about__grid{grid-template-columns:1fr}}\n' +
'    .about__body{color:var(--text-muted);line-height:1.8;margin-bottom:1.25rem}\n' +
'    .about__pillars{display:flex;flex-direction:column;gap:1.5rem;margin-top:2.5rem}\n' +
'    .about__pillar{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'    .about__pillar-num{font-family:var(--font-display);font-size:var(--text-sm);font-weight:900;color:var(--green);min-width:2rem;padding-top:0.1em}\n' +
'    .about__pillar-title{font-weight:700;color:var(--green-hi);margin-bottom:0.3rem;font-size:var(--text-sm)}\n' +
'    .about__pillar-body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'    .andrew__img-wrap{position:relative;border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border-col);aspect-ratio:3/4;background:var(--card-bg);display:flex;align-items:center;justify-content:center}\n' +
'    .andrew__img-wrap img{width:100%;height:100%;object-fit:cover;filter:grayscale(100%);display:block}\n' +
'    .andrew__label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green-light);margin-bottom:0.75rem}\n' +
'    .andrew__name{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:var(--text-main);margin-bottom:0.35rem}\n' +
'    .andrew__title{font-size:var(--text-sm);color:var(--green-light);font-weight:600;margin-bottom:1.75rem}\n' +
'    .andrew__bio{color:var(--text-muted);line-height:1.8;font-size:var(--text-sm);margin-bottom:1.25rem}\n' +
'    .andrew__quote{border-left:3px solid var(--green);padding:1rem 1.5rem;margin-top:2rem;background:rgba(34,139,34,0.06);border-radius:0 var(--radius-md) var(--radius-md) 0}\n' +
'    .andrew__quote p{font-style:italic;color:var(--text-main);line-height:1.7;font-size:var(--text-sm);margin-bottom:0.5rem}\n' +
'    .andrew__quote cite{font-size:var(--text-xs);color:var(--green-light);font-style:normal;font-weight:700;text-transform:uppercase;letter-spacing:0.08em}\n' +
'    .services__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border-col);border:1px solid var(--border-col);border-radius:var(--radius-lg);overflow:hidden}\n' +
'    @media (max-width:900px){.services__grid{grid-template-columns:1fr 1fr}}\n' +
'    @media (max-width:580px){.services__grid{grid-template-columns:1fr}}\n' +
'    .service-card{background:var(--card-bg);padding:2.25rem 2rem;transition:background var(--t-fast)}\n' +
'    .service-card:hover{background:var(--surface-bg)}\n' +
'    .service-card__num{font-family:var(--font-display);font-size:var(--text-xs);font-weight:900;color:var(--green);opacity:0.6;margin-bottom:1.25rem}\n' +
'    .service-card__title{font-family:var(--font-display);font-size:var(--text-base);font-weight:700;color:var(--text-main);margin-bottom:0.75rem}\n' +
'    .service-card:hover .service-card__title{color:var(--green-light)}\n' +
'    .service-card__body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'    .why__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:center}\n' +
'    @media (max-width:768px){.why__grid{grid-template-columns:1fr}}\n' +
'    .why__visual{position:relative;border-radius:var(--radius-xl);overflow:hidden;border:1px solid var(--border-col)}\n' +
'    .why__visual img{width:100%;display:block;filter:grayscale(20%) brightness(0.8)}\n' +
'    .why__visual::after{content:\'\';position:absolute;inset:0;background:linear-gradient(135deg,rgba(34,139,34,0.25) 0%,transparent 60%)}\n' +
'    .why__points{display:flex;flex-direction:column;gap:2rem}\n' +
'    .why__point{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'    .why__point-icon{width:40px;height:40px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(34,139,34,0.1);border:1px solid rgba(34,139,34,0.2);border-radius:var(--radius-md);color:var(--green-light)}\n' +
'    .why__point-title{font-weight:700;color:var(--green-hi);margin-bottom:0.4rem;font-size:var(--text-sm)}\n' +
'    .why__point-body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'    .testimonials{margin-top:clamp(4rem,6vw,5rem);padding-top:clamp(3rem,5vw,4rem);border-top:1px solid var(--border-col)}\n' +
'    .testimonials__label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green-light);margin-bottom:0.75rem}\n' +
'    .testimonials__heading{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:var(--text-main);margin-bottom:2.5rem}\n' +
'    .testimonials__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}\n' +
'    @media (max-width:900px){.testimonials__grid{grid-template-columns:1fr 1fr}}\n' +
'    @media (max-width:560px){.testimonials__grid{grid-template-columns:1fr}}\n' +
'    .testimonial-card{background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-lg);padding:2rem 1.75rem;display:flex;flex-direction:column;gap:1.25rem;transition:border-color var(--t-fast),transform var(--t-slow) var(--ease-out)}\n' +
'    .testimonial-card:hover{border-color:rgba(34,139,34,0.35);transform:translateY(-3px)}\n' +
'    .testimonial-card__stars{display:flex;gap:0.25rem;color:var(--green-light);font-size:1rem}\n' +
'    .testimonial-card__quote{font-style:italic;color:var(--text-muted);font-size:var(--text-sm);line-height:1.75;flex:1}\n' +
'    .testimonial-card__quote::before{content:\"\\u201C\"}\n' +
'    .testimonial-card__quote::after{content:\"\\u201D\"}\n' +
'    .testimonial-card__meta{border-top:1px solid var(--border-col);padding-top:1rem}\n' +
'    .testimonial-card__role{font-size:var(--text-xs);font-weight:700;color:var(--green-light);text-transform:uppercase;letter-spacing:0.08em}\n' +
'    .testimonial-card__company{font-size:var(--text-xs);color:var(--text-muted);margin-top:0.2rem}\n' +
'    .models__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}\n' +
'    @media (max-width:900px){.models__grid{grid-template-columns:1fr 1fr}}\n' +
'    @media (max-width:540px){.models__grid{grid-template-columns:1fr}}\n' +
'    .model-card{background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-lg);padding:2rem 1.75rem;transition:border-color var(--t-fast),transform var(--t-slow) var(--ease-out)}\n' +
'    .model-card:hover{border-color:rgba(34,139,34,0.4);transform:translateY(-3px)}\n' +
'    .model-card__num{font-family:var(--font-display);font-size:clamp(2.5rem,4vw,3.5rem);font-weight:900;color:rgba(34,139,34,0.15);line-height:1;margin-bottom:1rem}\n' +
'    .model-card__title{font-size:var(--text-sm);font-weight:700;color:var(--green-hi);margin-bottom:0.75rem}\n' +
'    .model-card__body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'    .clients-section{padding-block:clamp(4rem,7vw,7rem);background:var(--surface-bg);border-top:1px solid var(--border-col)}\n' +
'    .clients-carousel{overflow:hidden;position:relative;margin-top:3rem}\n' +
'    .clients-carousel::before,.clients-carousel::after{content:\'\';position:absolute;top:0;bottom:0;width:140px;z-index:2;pointer-events:none}\n' +
'    .clients-carousel::before{left:0;background:var(--carousel-fade-l)}\n' +
'    .clients-carousel::after{right:0;background:var(--carousel-fade-r)}\n' +
'    .clients-track{display:flex;align-items:center;gap:5rem;animation:client-scroll 35s linear infinite;width:max-content}\n' +
'    .clients-track:hover{animation-play-state:paused}\n' +
'    @keyframes client-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n' +
'    .client-logo{height:52px;width:auto;max-width:160px;object-fit:contain;flex-shrink:0;filter:var(--logo-filter);opacity:0.65;transition:opacity var(--t-fast),transform var(--t-fast)}\n' +
'    .client-logo:hover{opacity:1;transform:scale(1.06)}\n' +
'    .cta-band{padding-block:clamp(5rem,8vw,8rem);background:var(--green);position:relative;overflow:hidden}\n' +
'    .cta-band::before{content:\'\';position:absolute;inset:0;background-image:linear-gradient(rgba(0,0,0,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.08) 1px,transparent 1px);background-size:48px 48px}\n' +
'    .cta-band__inner{position:relative;z-index:1;text-align:center}\n' +
'    .cta-band__heading{font-family:var(--font-display);font-size:var(--text-2xl);font-weight:900;color:#fff;margin-bottom:1rem;letter-spacing:-0.02em}\n' +
'    .cta-band__sub{color:rgba(255,255,255,0.75);font-size:var(--text-base);margin-bottom:2.5rem;max-width:48ch;margin-inline:auto}\n' +
'    .cta-band__btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}\n' +
'    .btn--white{background:#fff;color:var(--green);border:2px solid #fff}\n' +
'    .btn--white:hover{background:rgba(255,255,255,0.9)}\n' +
'    .btn--outline-white{background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.5)}\n' +
'    .btn--outline-white:hover{border-color:#fff;background:rgba(255,255,255,0.1)}\n' +
'    .contact__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,5vw,5rem);align-items:start}\n' +
'    @media (max-width:768px){.contact__grid{grid-template-columns:1fr}}\n' +
'    .contact__details{display:flex;flex-direction:column;gap:1.5rem;margin-top:2.5rem}\n' +
'    .contact__detail{display:flex;gap:1rem;align-items:flex-start}\n' +
'    .contact__detail-icon{width:40px;height:40px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(34,139,34,0.1);border:1px solid rgba(34,139,34,0.2);border-radius:var(--radius-md);color:var(--green-light)}\n' +
'    .contact__detail-label{font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;font-weight:600}\n' +
'    .contact__detail-value{font-size:var(--text-sm);color:var(--text-main);margin-top:0.2rem;font-weight:500}\n' +
'    .contact__detail-value a{color:var(--green-light)}\n' +
'    .contact__detail-value a:hover{color:var(--green-hi)}\n' +
'    .socials{display:flex;gap:0.75rem;margin-top:0.5rem;flex-wrap:wrap}\n' +
'    .social-btn{display:inline-flex;align-items:center;gap:0.4rem;padding:0.35rem 0.9rem;border-radius:var(--radius-full);font-size:var(--text-xs);font-weight:700;border:1px solid currentColor;transition:background var(--t-fast),color var(--t-fast)}\n' +
'    .social-btn--wa{color:#25d366}\n' +
'    .social-btn--wa:hover{background:#25d366;color:#fff}\n' +
'    .social-btn--li{color:#0a66c2}\n' +
'    .social-btn--li:hover{background:#0a66c2;color:#fff}\n' +
'    .form-wrap{background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-xl);padding:2.5rem}\n' +
'    .form{display:flex;flex-direction:column;gap:1.25rem}\n' +
'    .form__group{display:flex;flex-direction:column;gap:0.5rem}\n' +
'    .form__label{font-size:var(--text-sm);font-weight:600;color:var(--text-main)}\n' +
'    .form__input,.form__select,.form__textarea{padding:0.75rem 1rem;background:rgba(100,120,100,0.04);border:1px solid var(--border-col);border-radius:var(--radius-md);font-size:var(--text-sm);color:var(--text-main);transition:border-color var(--t-fast),box-shadow var(--t-fast)}\n' +
'    .form__input::placeholder,.form__textarea::placeholder{color:var(--text-muted);opacity:0.5}\n' +
'    .form__input:focus,.form__select:focus,.form__textarea:focus{outline:none;border-color:var(--green);box-shadow:0 0 0 3px rgba(34,139,34,0.15)}\n' +
'    .form__select option{background:var(--select-bg)}\n' +
'    .form__textarea{resize:vertical;min-height:120px}\n' +
'    .form__row{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem}\n' +
'    @media (max-width:480px){.form__row{grid-template-columns:1fr}}\n' +
'    .btn-submit{padding:1rem 2rem;background:var(--green);color:#fff;border-radius:var(--radius-sm);font-size:var(--text-sm);font-weight:700;border:none;cursor:pointer;transition:background var(--t-fast)}\n' +
'    .btn-submit:hover{background:var(--green-light)}\n' +
'    .form-success{display:none;text-align:center;padding:3rem 2rem}\n' +
'    .form-success.show{display:block}\n' +
'    .form-success__icon{font-size:3rem;margin-bottom:1rem;color:var(--green-light)}\n' +
'    .form-success__title{font-family:var(--font-display);font-weight:800;font-size:var(--text-xl);margin-bottom:0.75rem}\n' +
'    .form-success__body{color:var(--text-muted)}\n' +
'    footer{background:var(--footer-bg);border-top:1px solid var(--border-col);padding-block:clamp(3.5rem,6vw,5rem)}\n' +
'    .footer__inner{display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem;margin-bottom:3rem}\n' +
'    @media (max-width:768px){.footer__inner{grid-template-columns:1fr;gap:2.5rem}}\n' +
'    .footer__logo{height:40px;width:auto;margin-bottom:1.25rem}\n' +
'    .footer__tagline{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7;max-width:32ch}\n' +
'    .footer__col-title{font-family:var(--font-body);font-weight:700;font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);opacity:0.5;margin-bottom:1.25rem}\n' +
'    .footer__links{display:flex;flex-direction:column;gap:0.75rem}\n' +
'    .footer__links a{font-size:var(--text-sm);color:var(--text-muted)}\n' +
'    .footer__links a:hover{color:var(--text-main)}\n' +
'    .footer__bottom{display:flex;align-items:center;justify-content:space-between;padding-top:2rem;border-top:1px solid var(--border-col);gap:1rem;flex-wrap:wrap}\n' +
'    .footer__copy{font-size:var(--text-xs);color:var(--text-muted);opacity:0.4}\n' +
'    @media (max-width:640px){.footer__bottom{flex-direction:column;text-align:center}}\n' +
'  </style>\n' +
'</head>\n' +
'<body>\n' +
'<nav class="nav" role="navigation" aria-label="Main navigation">\n' +
'  <div class="nav__inner">\n' +
'    <a href="#" class="nav__logo" aria-label="Plus3 Solutions home"><img src="' + logoUrl + '" alt="Plus3 Solutions"></a>\n' +
'    <ul class="nav__links" role="list">\n' +
'      <li><a href="#about">About</a></li>\n' +
'      <li><a href="#services">Services</a></li>\n' +
'      <li><a href="#how-we-work">Why Plus3</a></li>\n' +
'      <li><a href="#engagement">How We Work</a></li>\n' +
'      <li><a href="#contact">Contact</a></li>\n' +
'      <li><a href="https://www.linkedin.com/company/plus3group/jobs/" target="_blank" rel="noopener">Jobs &amp; Careers</a></li>\n' +
'    </ul>\n' +
'    <div class="nav__actions">\n' +
'      <a href="#contact" class="nav__cta">Let&#39;s talk</a>\n' +
'      <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false" id="hamburger">\n' +
'        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>\n' +
'      </button>\n' +
'    </div>\n' +
'  </div>\n' +
'</nav>\n' +
'<div class="nav__mobile" id="mobile-nav" role="dialog" aria-modal="true" aria-label="Mobile navigation">\n' +
'  <a href="#about" class="mobile-link">About</a>\n' +
'  <a href="#services" class="mobile-link">Services</a>\n' +
'  <a href="#how-we-work" class="mobile-link">Why Plus3</a>\n' +
'  <a href="#engagement" class="mobile-link">How We Work</a>\n' +
'  <a href="#contact" class="mobile-link">Contact</a>\n' +
'  <a href="https://www.linkedin.com/company/plus3group/jobs/" target="_blank" rel="noopener" class="mobile-link">Jobs &amp; Careers</a>\n' +
'  <a href="#contact" class="btn btn--green mobile-link">Let&#39;s talk &rarr;</a>\n' +
'</div>\n' +
'<main id="main-content">\n' +
'  <section class="hero" aria-labelledby="hero-h">\n' +
'    <div class="hero__left">\n' +
'      <div class="hero__eyebrow"><span class="hero__eyebrow-line" aria-hidden="true"></span>Technology Partner</div>\n' +
'      <h1 class="hero__heading" id="hero-h">Tech talent to bring<br>your ideas <em>to life.</em></h1>\n' +
'      <p class="hero__sub">Smarter delivery, better results, and partnerships that last.</p>\n' +
'      <div class="hero__ctas">\n' +
'        <a href="#contact" class="btn btn--green">Start a conversation</a>\n' +
'        <a href="#services" class="btn btn--outline">Explore services</a>\n' +
'      </div>\n' +
'      <p class="hero__tagline">Professional &middot; Personal &middot; Practical</p>\n' +
'    </div>\n' +
'    <div class="hero__right" aria-hidden="true"><img src="' + heroUrl + '" alt="Plus3 technology background" fetchpriority="high"></div>\n' +
'  </section>\n' +
'  <div class="stats-band" aria-label="Key metrics">\n' +
'    <div class="container"><div class="stats-band__inner">\n' +
'      <div class="stat"><div class="stat__value">15+</div><div class="stat__label">Years heritage</div></div>\n' +
'      <div class="stats-band__divider" aria-hidden="true"></div>\n' +
'      <div class="stat"><div class="stat__value">6</div><div class="stat__label">Service lines</div></div>\n' +
'      <div class="stats-band__divider" aria-hidden="true"></div>\n' +
'      <div class="stat"><div class="stat__value">3</div><div class="stat__label">Markets</div></div>\n' +
'      <div class="stats-band__divider" aria-hidden="true"></div>\n' +
'      <div class="stat"><div class="stat__value">15+</div><div class="stat__label">Team &amp; growing</div></div>\n' +
'    </div></div>\n' +
'  </div>\n' +
'  <section class="section section--dark" id="about" aria-labelledby="about-h">\n' +
'    <div class="container"><div class="about__grid">\n' +
'      <div>\n' +
'        <div class="green-bar" aria-hidden="true"></div>\n' +
'        <p class="sec-label">01 &mdash; About Plus3</p>\n' +
'        <h2 class="sec-heading" id="about-h">Built differently<br>from day one.</h2>\n' +
'        <p class="about__body" style="margin-top:1.5rem">Plus3 is a modern technology partner built on its founder&#39;s 15+ years of international consulting experience. We help organisations turn ideas into practical, scalable digital solutions. Leading with outcomes, smarter delivery, better results and partnerships that last.</p>\n' +
'        <p class="about__body">Our network of joint ventures, partners and specialists works alongside your teams across custom development, analysis and quality assurance. Turning your vision into reality.</p>\n' +
'        <div class="about__pillars">\n' +
'          <div class="about__pillar"><div class="about__pillar-num">01</div><div><div class="about__pillar-title">Outcome-Focused</div><div class="about__pillar-body">We measure success by the results we create for your business. The focus is on real outcomes, not feature counts or hours billed.</div></div></div>\n' +
'          <div class="about__pillar"><div class="about__pillar-num">02</div><div><div class="about__pillar-title">Relationship-Driven</div><div class="about__pillar-body">We&#39;re a relationship-driven professional services partner. We understand that every business is unique, with its own set of needs and goals. Built on trust, we take the time to understand each unique business and tailor custom outsourcing solutions to fit.</div></div></div>\n' +
'          <div class="about__pillar"><div class="about__pillar-num">03</div><div><div class="about__pillar-title">Senior, Yet Practical</div><div class="about__pillar-body">Paired with delivery models that work within real budgets, timelines and constraints, our network of skilled experts collaborate closely with you and your teams to ensure your vision becomes a reality.</div></div></div>\n' +
'        </div>\n' +
'      </div>\n' +
'      <div>\n' +
'        <div class="andrew__img-wrap" style="margin-bottom:2rem"><img src="' + cdnBase + '/website/andrew_essey.png" alt="Andrew Essey, Founder of Plus3"></div>\n' +
'        <div class="andrew__label">Leadership</div>\n' +
'        <div class="andrew__name">Andrew Essey</div>\n' +
'        <div class="andrew__title">Founder</div>\n' +
'        <p class="andrew__bio">Andrew started in mergers and acquisitions, followed by 10 years of financial and project consulting across the UK and Europe. A member of the Chartered Institute of Management Accountants, he has held senior roles at global organisations including ING, Wells Fargo and JP Morgan.</p>\n' +
'        <p class="andrew__bio">Back in South Africa, he spent 5+ years as a senior business head at a major software company before founding Plus3.</p>\n' +
'        <div class="andrew__quote"><p>&ldquo;We don&#39;t sell solutions. We build the right ones.&rdquo;</p><cite>Andrew Essey &mdash; Founder, Plus3</cite></div>\n' +
'      </div>\n' +
'    </div></div>\n' +
'  </section>\n' +
'  <section class="section section--surface" id="services" aria-labelledby="services-h">\n' +
'    <div class="container">\n' +
'      <div class="sec-header">\n' +
'        <div class="green-bar" aria-hidden="true"></div>\n' +
'        <p class="sec-label">02 &mdash; Our Services</p>\n' +
'        <h2 class="sec-heading" id="services-h">End-to-end delivery<br><em>capability.</em></h2>\n' +
'        <p class="sec-body">From first idea to production, one partner across the whole journey.</p>\n' +
'      </div>\n' +
'      <div class="services__grid">\n' +
'        <article class="service-card"><div class="service-card__num">01</div><h3 class="service-card__title">Consulting &amp; Roadmaps</h3><p class="service-card__body">Define direction, prioritise initiatives and design practical delivery roadmaps aligned to business goals.</p></article>\n' +
'        <article class="service-card"><div class="service-card__num">02</div><h3 class="service-card__title">Custom Software Development</h3><p class="service-card__body">Tailored solutions that address specific business requirements, integrate with existing systems and support future scalability.</p></article>\n' +
'        <article class="service-card"><div class="service-card__num">03</div><h3 class="service-card__title">Team Augmentation</h3><p class="service-card__body">Skilled professionals who embed directly into your teams, as and when you need them, to scale delivery without losing quality.</p></article>\n' +
'        <article class="service-card"><div class="service-card__num">04</div><h3 class="service-card__title">Cloud, DevOps &amp; Data</h3><p class="service-card__body">Modern architectures and operational best practice for reliability, performance and cost efficiency.</p></article>\n' +
'        <article class="service-card"><div class="service-card__num">05</div><h3 class="service-card__title">Quality Assurance</h3><p class="service-card__body">Testing and delivery enablement that keep solutions robust under real-world pressure.</p></article>\n' +
'        <article class="service-card"><div class="service-card__num">06</div><h3 class="service-card__title">Delivery Enablement</h3><p class="service-card__body">Disciplined, transparent execution with shared accountability from concept to production.</p></article>\n' +
'      </div>\n' +
'    </div>\n' +
'  </section>\n' +
'  <section class="section section--dark" id="how-we-work" aria-labelledby="why-h">\n' +
'    <div class="container"><div class="why__grid">\n' +
'      <div>\n' +
'        <div class="green-bar" aria-hidden="true"></div>\n' +
'        <p class="sec-label">03 &mdash; Why Plus3</p>\n' +
'        <h2 class="sec-heading" id="why-h">Why clients<br><em>choose us.</em></h2>\n' +
'        <div class="why__points" style="margin-top:2.5rem">\n' +
'          <div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg></div><div><div class="why__point-title">We think before we build</div><div class="why__point-body">Solutions grounded in genuine understanding, not assumptions. We solve the real business problem, not just ship outputs that look good on paper.</div></div></div>\n' +
'          <div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div><div><div class="why__point-title">A delivery model built on ownership</div><div class="why__point-body">Our specialists are incentivised on delivery quality, growth and client satisfaction. Creating genuine ownership and accountability on every project.</div></div></div>\n' +
'          <div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><div><div class="why__point-title">Built to scale with you</div><div class="why__point-body">Practical, modern solutions engineered to grow with your business from first build to enterprise scale.</div></div></div>\n' +
'        </div>\n' +
'      </div>\n' +
'      <div class="why__visual"><img src="' + cdnBase + '/website/Image1.png" alt="Plus3 technology" loading="lazy"></div>\n' +
'    </div>\n' +
'    <div class="container"><div class="testimonials">\n' +
'      <p class="testimonials__label">Client Testimonials</p>\n' +
'      <h3 class="testimonials__heading">What our clients say.</h3>\n' +
'      <div class="testimonials__grid">\n' +
'        <div class="testimonial-card"><div class="testimonial-card__stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testimonial-card__quote">Plus3 didn&#39;t just deliver a solution &mdash; they took the time to understand our business first. The team embedded seamlessly with ours and the quality of output was consistently high. We&#39;ve extended our engagement twice already.</p><div class="testimonial-card__meta"><div class="testimonial-card__role">Head of Technology</div><div class="testimonial-card__company">Financial Services &mdash; Johannesburg</div></div></div>\n' +
'        <div class="testimonial-card"><div class="testimonial-card__stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testimonial-card__quote">The honesty and transparency throughout the project set Plus3 apart. They flagged risks early, proposed practical solutions and delivered on time. Exactly the kind of partner you want when the stakes are high.</p><div class="testimonial-card__meta"><div class="testimonial-card__role">Chief Operating Officer</div><div class="testimonial-card__company">Healthcare Technology &mdash; Cape Town</div></div></div>\n' +
'        <div class="testimonial-card"><div class="testimonial-card__stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testimonial-card__quote">We came to Plus3 with a half-formed idea and a tight deadline. They helped us shape the roadmap, assembled the right team, and got us to market faster than we expected. The ongoing support has been just as strong.</p><div class="testimonial-card__meta"><div class="testimonial-card__role">Founder &amp; CEO</div><div class="testimonial-card__company">SaaS Startup &mdash; Sandton</div></div></div>\n' +
'        <div class="testimonial-card"><div class="testimonial-card__stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testimonial-card__quote">What impressed us most was how quickly they helped us shape the roadmap, assembled the right team, and got us to market faster than we expected. The ongoing support has been just as strong.</p><div class="testimonial-card__meta"><div class="testimonial-card__role">Founder &amp; CEO</div><div class="testimonial-card__company">SaaS Startup &mdash; Sandton</div></div></div>\n' +
