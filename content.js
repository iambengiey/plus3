// content.js — all static HTML/CSS for Plus3 site
// Imported by worker.js

export function buildHTML(heroUrl, logoUrl, cdnBase, carouselImgs, schema) {
  return '<!DOCTYPE html>\n' +
'<html lang="en-ZA">\n' +
'<head>\n' +
'<meta charset="UTF-8">\n' +
'<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'<title>Plus3 Solutions | Tech Talent to Bring Your Ideas to Life</title>\n' +
'<meta name="description" content="Plus3 is a modern technology partner built on its founder&#39;s 15+ years of international consulting experience.">\n' +
'<meta name="keywords" content="technology consulting South Africa, custom software development Johannesburg, team augmentation, Plus3, IT consulting Johannesburg">\n' +
'<meta name="author" content="Plus3 Solutions">\n' +
'<meta name="robots" content="index, follow">\n' +
'<link rel="canonical" href="https://www.plus3.co.za">\n' +
'<meta property="og:type" content="website">\n' +
'<meta property="og:url" content="https://www.plus3.co.za">\n' +
'<meta property="og:title" content="Plus3 Solutions | Tech Talent to Bring Your Ideas to Life">\n' +
'<meta property="og:description" content="Modern technology partner. Consulting, custom software, team augmentation, cloud &amp; DevOps, QA and delivery enablement.">\n' +
'<meta property="og:image" content="' + heroUrl + '">\n' +
'<meta property="og:site_name" content="Plus3 Solutions">\n' +
'<meta property="og:locale" content="en_ZA">\n' +
'<meta name="twitter:card" content="summary_large_image">\n' +
'<meta name="twitter:title" content="Plus3 Solutions | Tech Talent to Bring Your Ideas to Life">\n' +
'<meta name="twitter:description" content="Modern technology partner delivering smarter, results-driven tech solutions across South Africa.">\n' +
'<meta name="twitter:image" content="' + heroUrl + '">\n' +
'<link rel="icon" type="image/png" href="' + logoUrl + '">\n' +
'<link rel="apple-touch-icon" href="' + logoUrl + '">\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">\n' +
'<script type="application/ld+json">' + schema + '<\/script>\n' +
'<style>\n' +
':root{--page-bg:#000;--surface-bg:#0d0d0d;--card-bg:#111411;--border-col:#1e2a1e;--text-main:#F0F2ED;--text-muted:#98A399;--green:#228B22;--green-light:#37B34A;--green-hi:#61D26B;--nav-bg:rgba(0,0,0,0.95);--nav-border:rgba(255,255,255,0.07);--nav-link-color:#ccc;--hero-overlay-start:rgba(0,0,0,0.80);--hero-overlay-end:rgba(0,0,0,0.65);--hero-grad:linear-gradient(to right,#000 0%,transparent 30%);--carousel-fade-l:linear-gradient(to right,#0d0d0d,transparent);--carousel-fade-r:linear-gradient(to left,#0d0d0d,transparent);--footer-bg:#0d0d0d;--select-bg:#111;--logo-filter:brightness(0) invert(1);color-scheme:dark;--nav-height:72px;--font-display:\'Playfair Display\',Georgia,serif;--font-body:\'DM Sans\',\'Inter\',sans-serif;--ease-out:cubic-bezier(0.16,1,0.3,1);--t-fast:180ms;--t-slow:360ms;--radius-sm:4px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--content-wide:1200px;--text-xs:clamp(0.72rem,0.7rem + 0.2vw,0.8rem);--text-sm:clamp(0.875rem,0.85rem + 0.15vw,1rem);--text-base:clamp(1rem,0.97rem + 0.2vw,1.125rem);--text-lg:clamp(1.125rem,1rem + 0.6vw,1.5rem);--text-xl:clamp(1.5rem,1.2rem + 1.2vw,2.25rem);--text-2xl:clamp(2rem,1.2rem + 2.5vw,3.75rem)}\n' +
'@media(prefers-color-scheme:light){:root{--page-bg:#fff;--surface-bg:#f4f6f1;--card-bg:#fff;--border-col:#d0d8ce;--text-main:#1a1f1a;--text-muted:#4a5a4b;--nav-bg:rgba(0,0,0,0.95);--nav-border:rgba(255,255,255,0.07);--nav-link-color:#ccc;--hero-overlay-start:rgba(255,255,255,0.75);--hero-overlay-end:rgba(255,255,255,0.55);--hero-grad:linear-gradient(to right,#fff 0%,transparent 35%);--carousel-fade-l:linear-gradient(to right,#f4f6f1,transparent);--carousel-fade-r:linear-gradient(to left,#f4f6f1,transparent);--footer-bg:#f4f6f1;--select-bg:#fff;--logo-filter:brightness(0) saturate(0);color-scheme:light}}\n' +
'*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\n' +
'html{scroll-behavior:smooth;scroll-padding-top:var(--nav-height);-webkit-font-smoothing:antialiased}\n' +
'body{font-family:var(--font-body);font-size:var(--text-base);background:var(--page-bg);color:var(--text-main);overflow-x:hidden;line-height:1.65}\n' +
'img,svg{display:block;max-width:100%}ul,ol{list-style:none}input,button,textarea,select{font:inherit;color:inherit}\n' +
'h1,h2,h3,h4{font-family:var(--font-display);text-wrap:balance;line-height:1.1}\n' +
'p,li{text-wrap:pretty}button{cursor:pointer;background:none;border:none}a{color:inherit;text-decoration:none}\n' +
'::selection{background:rgba(34,139,34,0.3)}\n' +
':focus-visible{outline:2px solid var(--green-light);outline-offset:3px;border-radius:var(--radius-sm)}\n' +
'.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}\n' +
'.container{max-width:var(--content-wide);margin-inline:auto;padding-inline:clamp(1.25rem,5vw,4rem)}\n' +
'.section{padding-block:clamp(5rem,9vw,9rem)}.section--dark{background:var(--page-bg)}.section--surface{background:var(--surface-bg)}\n' +
'.sec-label{font-family:var(--font-body);font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green-light);margin-bottom:1rem}\n' +
'.sec-heading{font-family:var(--font-display);font-size:var(--text-2xl);font-weight:900;color:var(--text-main);letter-spacing:-0.02em;line-height:1.05}\n' +
'.sec-heading em{font-style:normal;color:var(--green-light)}.sec-body{color:var(--text-muted);font-size:var(--text-base);max-width:58ch;margin-top:1rem;line-height:1.75}\n' +
'.sec-header{margin-bottom:clamp(3rem,5vw,4.5rem)}.green-bar{width:48px;height:3px;background:var(--green);margin-bottom:1.5rem}\n' +
'.btn{display:inline-flex;align-items:center;gap:0.5rem;padding:0.85rem 1.75rem;font-family:var(--font-body);font-size:var(--text-sm);font-weight:600;border-radius:var(--radius-sm);transition:all var(--t-fast) var(--ease-out);cursor:pointer}\n' +
'.btn--green{background:var(--green);color:#fff;border:2px solid var(--green)}.btn--green:hover{background:var(--green-light);border-color:var(--green-light)}\n' +
'.btn--outline{background:transparent;color:var(--text-main);border:2px solid rgba(100,120,100,0.35)}.btn--outline:hover{border-color:var(--text-main);background:rgba(100,120,100,0.06)}\n' +
'.nav{position:fixed;top:0;left:0;right:0;height:var(--nav-height);z-index:100;background:var(--nav-bg);backdrop-filter:blur(16px) saturate(140%);-webkit-backdrop-filter:blur(16px) saturate(140%);border-bottom:1px solid var(--nav-border);transition:box-shadow var(--t-slow)}\n' +
'.nav.scrolled{box-shadow:0 4px 32px rgba(0,0,0,0.4)}\n' +
'.nav__inner{max-width:var(--content-wide);margin-inline:auto;padding-inline:clamp(1.25rem,5vw,4rem);height:100%;display:flex;align-items:center;justify-content:space-between;gap:2rem}\n' +
'.nav__logo img{height:40px;width:auto}\n' +
'.nav__links{display:flex;align-items:center;gap:0.25rem}\n' +
'.nav__links a{padding:0.45rem 0.9rem;font-size:var(--text-sm);font-weight:500;color:var(--nav-link-color);border-radius:var(--radius-sm);transition:color var(--t-fast),background var(--t-fast)}\n' +
'.nav__links a:hover{color:#fff;background:rgba(255,255,255,0.08)}\n' +
'.nav__cta{padding:0.5rem 1.25rem;background:var(--green);color:#fff;border-radius:var(--radius-sm);font-size:var(--text-sm);font-weight:700;transition:background var(--t-fast)}.nav__cta:hover{background:var(--green-light)}\n' +
'.nav__hamburger{display:none;width:44px;height:44px;align-items:center;justify-content:center;color:#fff;border-radius:var(--radius-sm)}.nav__hamburger:hover{background:rgba(255,255,255,0.1)}\n' +
'.nav__mobile{position:fixed;top:var(--nav-height);left:0;right:0;bottom:0;background:#000;z-index:99;padding:2rem 1.5rem;display:flex;flex-direction:column;gap:0.5rem;transform:translateX(100%);transition:transform var(--t-slow) var(--ease-out);border-top:1px solid rgba(255,255,255,0.07);overflow-y:auto}\n' +
'.nav__mobile.open{transform:translateX(0)}.nav__mobile a{display:block;padding:1rem 1.25rem;font-size:var(--text-lg);font-weight:600;color:#fff;border-radius:var(--radius-md)}.nav__mobile a:hover{background:rgba(255,255,255,0.06)}.nav__mobile .btn--green{text-align:center;margin-top:1rem}\n' +
'@media(max-width:900px){.nav__links,.nav__actions .nav__cta{display:none}.nav__hamburger{display:flex}}\n' +
'.hero{min-height:100dvh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding-top:var(--nav-height);position:relative}\n' +
'@media(max-width:900px){.hero{grid-template-columns:1fr;min-height:100dvh;background-image:url(\'' + heroUrl + '\');background-size:cover;background-position:center top}}\n' +
'.hero__left{padding:clamp(4rem,8vw,8rem) clamp(1.25rem,5vw,4rem);position:relative;z-index:2}\n' +
'@media(max-width:900px){.hero__left{background:linear-gradient(to bottom,var(--hero-overlay-start) 0%,var(--hero-overlay-end) 100%)}}\n' +
'.hero__eyebrow{display:inline-flex;align-items:center;gap:0.6rem;font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green-light);margin-bottom:1.75rem}\n' +
'.hero__eyebrow-line{width:32px;height:2px;background:var(--green)}\n' +
'.hero__heading{font-family:var(--font-display);font-size:clamp(2.5rem,1rem + 5vw,5.5rem);font-weight:900;line-height:1.04;letter-spacing:-0.025em;color:var(--text-main);margin-bottom:1.5rem}\n' +
'.hero__heading em{font-style:normal;color:var(--green-light)}\n' +
'.hero__sub{font-size:var(--text-lg);color:var(--text-muted);max-width:44ch;line-height:1.65;margin-bottom:2.5rem}\n' +
'.hero__ctas{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:3rem}\n' +
'.hero__tagline{font-size:var(--text-xs);color:var(--text-muted);opacity:0.55;font-style:italic;letter-spacing:0.05em}\n' +
'.hero__right{position:fixed;top:0;right:0;width:50%;height:100vh;z-index:1;overflow:hidden;pointer-events:none}\n' +
'@media(max-width:900px){.hero__right{display:none}}\n' +
'.hero__right img{width:100%;height:100%;object-fit:cover;object-position:center;display:block}\n' +
'.hero__right::after{content:\'\';position:absolute;inset:0;background:var(--hero-grad)}\n' +
'.stats-band{background:var(--surface-bg);border-top:1px solid var(--border-col);border-bottom:1px solid var(--border-col);padding-block:2.5rem;position:relative;z-index:10}\n' +
'.stats-band__inner{display:flex;flex-wrap:wrap;gap:2rem 4rem;align-items:center;justify-content:space-between}\n' +
'.stat__value{font-family:var(--font-display);font-size:clamp(2rem,3vw,3rem);font-weight:900;color:var(--green-light);line-height:1}\n' +
'.stat__label{font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;margin-top:0.35rem}\n' +
'.stats-band__divider{width:1px;height:40px;background:var(--border-col)}\n' +
'@media(max-width:640px){.stats-band__divider{display:none}}\n' +
'.section,.clients-section,.cta-band,footer{position:relative;z-index:10}\n' +
'.about__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:start}\n' +
'@media(max-width:768px){.about__grid{grid-template-columns:1fr}}\n' +
'.about__body{color:var(--text-muted);line-height:1.8;margin-bottom:1.25rem}\n' +
'.about__pillars{display:flex;flex-direction:column;gap:1.5rem;margin-top:2.5rem}\n' +
'.about__pillar{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'.about__pillar-num{font-family:var(--font-display);font-size:var(--text-sm);font-weight:900;color:var(--green);min-width:2rem;padding-top:0.1em}\n' +
'.about__pillar-title{font-weight:700;color:var(--green-hi);margin-bottom:0.3rem;font-size:var(--text-sm)}\n' +
'.about__pillar-body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'.andrew__img-wrap{position:relative;border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border-col);aspect-ratio:3/4;background:var(--card-bg)}\n' +
'.andrew__img-wrap img{width:100%;height:100%;object-fit:cover;filter:grayscale(100%);display:block}\n' +
'.andrew__label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green-light);margin-bottom:0.75rem}\n' +
'.andrew__name{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:var(--text-main);margin-bottom:0.35rem}\n' +
'.andrew__title{font-size:var(--text-sm);color:var(--green-light);font-weight:600;margin-bottom:1.75rem}\n' +
'.andrew__bio{color:var(--text-muted);line-height:1.8;font-size:var(--text-sm);margin-bottom:1.25rem}\n' +
'.andrew__quote{border-left:3px solid var(--green);padding:1rem 1.5rem;margin-top:2rem;background:rgba(34,139,34,0.06);border-radius:0 var(--radius-md) var(--radius-md) 0}\n' +
'.andrew__quote p{font-style:italic;color:var(--text-main);line-height:1.7;font-size:var(--text-sm);margin-bottom:0.5rem}\n' +
'.andrew__quote cite{font-size:var(--text-xs);color:var(--green-light);font-style:normal;font-weight:700;text-transform:uppercase;letter-spacing:0.08em}\n' +
'.services__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--border-col);border:1px solid var(--border-col);border-radius:var(--radius-lg);overflow:hidden}\n' +
'@media(max-width:900px){.services__grid{grid-template-columns:1fr 1fr}}@media(max-width:580px){.services__grid{grid-template-columns:1fr}}\n' +
'.service-card{background:var(--card-bg);padding:2.25rem 2rem;transition:background var(--t-fast)}.service-card:hover{background:var(--surface-bg)}\n' +
'.service-card__num{font-family:var(--font-display);font-size:var(--text-xs);font-weight:900;color:var(--green);opacity:0.6;margin-bottom:1.25rem}\n' +
'.service-card__title{font-family:var(--font-display);font-size:var(--text-base);font-weight:700;color:var(--text-main);margin-bottom:0.75rem}\n' +
'.service-card:hover .service-card__title{color:var(--green-light)}.service-card__body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'.why__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:center}\n' +
'@media(max-width:768px){.why__grid{grid-template-columns:1fr}}\n' +
'.why__visual{position:relative;border-radius:var(--radius-xl);overflow:hidden;border:1px solid var(--border-col)}\n' +
'.why__visual img{width:100%;display:block;filter:grayscale(20%) brightness(0.8)}\n' +
'.why__visual::after{content:\'\';position:absolute;inset:0;background:linear-gradient(135deg,rgba(34,139,34,0.25) 0%,transparent 60%)}\n' +
'.why__points{display:flex;flex-direction:column;gap:2rem}.why__point{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'.why__point-icon{width:40px;height:40px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(34,139,34,0.1);border:1px solid rgba(34,139,34,0.2);border-radius:var(--radius-md);color:var(--green-light)}\n' +
'.why__point-title{font-weight:700;color:var(--green-hi);margin-bottom:0.4rem;font-size:var(--text-sm)}.why__point-body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'.testimonials{margin-top:clamp(4rem,6vw,5rem);padding-top:clamp(3rem,5vw,4rem);border-top:1px solid var(--border-col)}\n' +
'.testimonials__label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green-light);margin-bottom:0.75rem}\n' +
'.testimonials__heading{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:var(--text-main);margin-bottom:2.5rem}\n' +
'.testimonials__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem}\n' +
'@media(max-width:900px){.testimonials__grid{grid-template-columns:1fr 1fr}}@media(max-width:560px){.testimonials__grid{grid-template-columns:1fr}}\n' +
'.testimonial-card{background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-lg);padding:2rem 1.75rem;display:flex;flex-direction:column;gap:1.25rem;transition:border-color var(--t-fast),transform var(--t-slow) var(--ease-out)}\n' +
'.testimonial-card:hover{border-color:rgba(34,139,34,0.35);transform:translateY(-3px)}\n' +
'.testimonial-card__stars{display:flex;gap:0.25rem;color:var(--green-light);font-size:1rem}\n' +
'.testimonial-card__quote{font-style:italic;color:var(--text-muted);font-size:var(--text-sm);line-height:1.75;flex:1}\n' +
'.testimonial-card__quote::before{content:"\\u201C"}.testimonial-card__quote::after{content:"\\u201D"}\n' +
'.testimonial-card__meta{border-top:1px solid var(--border-col);padding-top:1rem}\n' +
'.testimonial-card__role{font-size:var(--text-xs);font-weight:700;color:var(--green-light);text-transform:uppercase;letter-spacing:0.08em}\n' +
'.testimonial-card__company{font-size:var(--text-xs);color:var(--text-muted);margin-top:0.2rem}\n' +
'.models__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}\n' +
'@media(max-width:900px){.models__grid{grid-template-columns:1fr 1fr}}@media(max-width:540px){.models__grid{grid-template-columns:1fr}}\n' +
'.model-card{background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-lg);padding:2rem 1.75rem;transition:border-color var(--t-fast),transform var(--t-slow) var(--ease-out)}\n' +
'.model-card:hover{border-color:rgba(34,139,34,0.4);transform:translateY(-3px)}\n' +
'.model-card__num{font-family:var(--font-display);font-size:clamp(2.5rem,4vw,3.5rem);font-weight:900;color:rgba(34,139,34,0.15);line-height:1;margin-bottom:1rem}\n' +
'.model-card__title{font-size:var(--text-sm);font-weight:700;color:var(--green-hi);margin-bottom:0.75rem}.model-card__body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'.clients-section{padding-block:clamp(4rem,7vw,7rem);background:var(--surface-bg);border-top:1px solid var(--border-col)}\n' +
'.clients-carousel{overflow:hidden;position:relative;margin-top:3rem}\n' +
'.clients-carousel::before,.clients-carousel::after{content:\'\';position:absolute;top:0;bottom:0;width:140px;z-index:2;pointer-events:none}\n' +
'.clients-carousel::before{left:0;background:var(--carousel-fade-l)}.clients-carousel::after{right:0;background:var(--carousel-fade-r)}\n' +
'.clients-track{display:flex;align-items:center;gap:5rem;animation:client-scroll 35s linear infinite;width:max-content}\n' +
'.clients-track:hover{animation-play-state:paused}\n' +
'@keyframes client-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n' +
'.client-logo{height:52px;width:auto;max-width:160px;object-fit:contain;flex-shrink:0;filter:var(--logo-filter);opacity:0.65;transition:opacity var(--t-fast),transform var(--t-fast)}\n' +
'.client-logo:hover{opacity:1;transform:scale(1.06)}\n' +
'.cta-band{padding-block:clamp(5rem,8vw,8rem);background:var(--green);position:relative;overflow:hidden}\n' +
'.cta-band::before{content:\'\';position:absolute;inset:0;background-image:linear-gradient(rgba(0,0,0,0.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,0.08) 1px,transparent 1px);background-size:48px 48px}\n' +
'.cta-band__inner{position:relative;z-index:1;text-align:center}\n' +
'.cta-band__heading{font-family:var(--font-display);font-size:var(--text-2xl);font-weight:900;color:#fff;margin-bottom:1rem;letter-spacing:-0.02em}\n' +
'.cta-band__sub{color:rgba(255,255,255,0.75);font-size:var(--text-base);margin-bottom:2.5rem;max-width:48ch;margin-inline:auto}\n' +
'.cta-band__btns{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}\n' +
'.btn--white{background:#fff;color:var(--green);border:2px solid #fff}.btn--white:hover{background:rgba(255,255,255,0.9)}\n' +
'.btn--outline-white{background:transparent;color:#fff;border:2px solid rgba(255,255,255,0.5)}.btn--outline-white:hover{border-color:#fff;background:rgba(255,255,255,0.1)}\n' +
'.contact__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,5vw,5rem);align-items:start}\n' +
'@media(max-width:768px){.contact__grid{grid-template-columns:1fr}}\n' +
'.contact__details{display:flex;flex-direction:column;gap:1.5rem;margin-top:2.5rem}\n' +
'.contact__detail{display:flex;gap:1rem;align-items:flex-start}\n' +
'.contact__detail-icon{width:40px;height:40px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(34,139,34,0.1);border:1px solid rgba(34,139,34,0.2);border-radius:var(--radius-md);color:var(--green-light)}\n' +
'.contact__detail-label{font-size:var(--text-xs);color:var(--text-muted);text-transform:uppercase;letter-spacing:0.08em;font-weight:600}\n' +
'.contact__detail-value{font-size:var(--text-sm);color:var(--text-main);margin-top:0.2rem;font-weight:500}\n' +
'.contact__detail-value a{color:var(--green-light)}.contact__detail-value a:hover{color:var(--green-hi)}\n' +
'.socials{display:flex;gap:0.75rem;margin-top:0.5rem;flex-wrap:wrap}\n' +
'.social-btn{display:inline-flex;align-items:center;gap:0.4rem;padding:0.35rem 0.9rem;border-radius:var(--radius-full);font-size:var(--text-xs);font-weight:700;border:1px solid currentColor;transition:background var(--t-fast),color var(--t-fast)}\n' +
'.social-btn--wa{color:#25d366}.social-btn--wa:hover{background:#25d366;color:#fff}.social-btn--li{color:#0a66c2}.social-btn--li:hover{background:#0a66c2;color:#fff}\n' +
'.form-wrap{background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-xl);padding:2.5rem}\n' +
'.form{display:flex;flex-direction:column;gap:1.25rem}.form__group{display:flex;flex-direction:column;gap:0.5rem}\n' +
'.form__label{font-size:var(--text-sm);font-weight:600;color:var(--text-main)}\n' +
'.form__input,.form__select,.form__textarea{padding:0.75rem 1rem;background:rgba(100,120,100,0.04);border:1px solid var(--border-col);border-radius:var(--radius-md);font-size:var(--text-sm);color:var(--text-main);transition:border-color var(--t-fast),box-shadow var(--t-fast)}\n' +
'.form__input::placeholder,.form__textarea::placeholder{color:var(--text-muted);opacity:0.5}\n' +
'.form__input:focus,.form__select:focus,.form__textarea:focus{outline:none;border-color:var(--green);box-shadow:0 0 0 3px rgba(34,139,34,0.15)}\n' +
'.form__select option{background:var(--select-bg)}.form__textarea{resize:vertical;min-height:120px}\n' +
'.form__row{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem}@media(max-width:480px){.form__row{grid-template-columns:1fr}}\n' +
'.btn-submit{padding:1rem 2rem;background:var(--green);color:#fff;border-radius:var(--radius-sm);font-size:var(--text-sm);font-weight:700;border:none;cursor:pointer;transition:background var(--t-fast)}.btn-submit:hover{background:var(--green-light)}\n' +
'.form-success{display:none;text-align:center;padding:3rem 2rem}.form-success.show{display:block}\n' +
'.form-success__icon{font-size:3rem;margin-bottom:1rem;color:var(--green-light)}\n' +
'.form-success__title{font-family:var(--font-display);font-weight:800;font-size:var(--text-xl);margin-bottom:0.75rem}.form-success__body{color:var(--text-muted)}\n' +
'footer{background:var(--footer-bg);border-top:1px solid var(--border-col);padding-block:clamp(3.5rem,6vw,5rem)}\n' +
'.footer__inner{display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem;margin-bottom:3rem}\n' +
'@media(max-width:768px){.footer__inner{grid-template-columns:1fr;gap:2.5rem}}\n' +
'.footer__logo{height:40px;width:auto;margin-bottom:1.25rem}.footer__tagline{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7;max-width:32ch}\n' +
'.footer__col-title{font-family:var(--font-body);font-weight:700;font-size:var(--text-xs);text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);opacity:0.5;margin-bottom:1.25rem}\n' +
'.footer__links{display:flex;flex-direction:column;gap:0.75rem}.footer__links a{font-size:var(--text-sm);color:var(--text-muted)}.footer__links a:hover{color:var(--text-main)}\n' +
'.footer__bottom{display:flex;align-items:center;justify-content:space-between;padding-top:2rem;border-top:1px solid var(--border-col);gap:1rem;flex-wrap:wrap}\n' +
'.footer__copy{font-size:var(--text-xs);color:var(--text-muted);opacity:0.4}\n' +
'@media(max-width:640px){.footer__bottom{flex-direction:column;text-align:center}}\n' +
'</style>\n' +
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
'  <a href="#about">About</a>\n' +
'  <a href="#services">Services</a>\n' +
'  <a href="#how-we-work">Why Plus3</a>\n' +
'  <a href="#engagement">How We Work</a>\n' +
'  <a href="#contact">Contact</a>\n' +
'  <a href="https://www.linkedin.com/company/plus3group/jobs/" target="_blank" rel="noopener">Jobs &amp; Careers</a>\n' +
'  <a href="#contact" class="btn btn--green">Let&#39;s talk &rarr;</a>\n' +
'</div>\n' +
'<main id="main-content">\n' +
'<section class="hero" aria-labelledby="hero-h">\n' +
'  <div class="hero__left">\n' +
'    <div class="hero__eyebrow"><span class="hero__eyebrow-line" aria-hidden="true"></span>Technology Partner</div>\n' +
'    <h1 class="hero__heading" id="hero-h">Tech talent to bring<br>your ideas <em>to life.</em></h1>\n' +
'    <p class="hero__sub">Smarter delivery, better results, and partnerships that last.</p>\n' +
'    <div class="hero__ctas">\n' +
'      <a href="#contact" class="btn btn--green">Start a conversation</a>\n' +
'      <a href="#services" class="btn btn--outline">Explore services</a>\n' +
'    </div>\n' +
'    <p class="hero__tagline">Professional &middot; Personal &middot; Practical</p>\n' +
'  </div>\n' +
'  <div class="hero__right" aria-hidden="true"><img src="' + heroUrl + '" alt="Plus3 technology background" fetchpriority="high"></div>\n' +
'</section>\n' +
'<div class="stats-band" aria-label="Key metrics">\n' +
'  <div class="container"><div class="stats-band__inner">\n' +
'    <div class="stat"><div class="stat__value">15+</div><div class="stat__label">Years heritage</div></div>\n' +
'    <div class="stats-band__divider" aria-hidden="true"></div>\n' +
'    <div class="stat"><div class="stat__value">6</div><div class="stat__label">Service lines</div></div>\n' +
'    <div class="stats-band__divider" aria-hidden="true"></div>\n' +
'    <div class="stat"><div class="stat__value">3</div><div class="stat__label">Markets</div></div>\n' +
'    <div class="stats-band__divider" aria-hidden="true"></div>\n' +
'    <div class="stat"><div class="stat__value">15+</div><div class="stat__label">Team &amp; growing</div></div>\n' +
'  </div></div>\n' +
'</div>\n' +
'<section class="section section--dark" id="about" aria-labelledby="about-h">\n' +
'  <div class="container"><div class="about__grid">\n' +
'    <div>\n' +
'      <div class="green-bar"></div>\n' +
'      <p class="sec-label">01 &mdash; About Plus3</p>\n' +
'      <h2 class="sec-heading" id="about-h">Built differently<br>from day one.</h2>\n' +
'      <p class="about__body" style="margin-top:1.5rem">Plus3 is a modern technology partner built on its founder&#39;s 15+ years of international consulting experience. We help organisations turn ideas into practical, scalable digital solutions.</p>\n' +
'      <p class="about__body">Our network of joint ventures, partners and specialists works alongside your teams across custom development, analysis and quality assurance.</p>\n' +
'      <div class="about__pillars">\n' +
'        <div class="about__pillar"><div class="about__pillar-num">01</div><div><div class="about__pillar-title">Outcome-Focused</div><div class="about__pillar-body">We measure success by the results we create for your business, not feature counts or hours billed.</div></div></div>\n' +
'        <div class="about__pillar"><div class="about__pillar-num">02</div><div><div class="about__pillar-title">Relationship-Driven</div><div class="about__pillar-body">We take the time to understand each unique business and tailor custom outsourcing solutions to fit.</div></div></div>\n' +
'        <div class="about__pillar"><div class="about__pillar-num">03</div><div><div class="about__pillar-title">Senior, Yet Practical</div><div class="about__pillar-body">Our network of skilled experts collaborate closely with you to ensure your vision becomes a reality.</div></div></div>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div>\n' +
'      <div class="andrew__img-wrap" style="margin-bottom:2rem"><img src="' + cdnBase + '/website/andrew_essey.png" alt="Andrew Essey, Founder of Plus3"></div>\n' +
'      <div class="andrew__label">Leadership</div>\n' +
'      <div class="andrew__name">Andrew Essey</div>\n' +
'      <div class="andrew__title">Founder</div>\n' +
'      <p class="andrew__bio">Andrew started in mergers and acquisitions, followed by 10 years of financial and project consulting across the UK and Europe. A member of the Chartered Institute of Management Accountants, he has held senior roles at ING, Wells Fargo and JP Morgan.</p>\n' +
'      <p class="andrew__bio">Back in South Africa, he spent 5+ years as a senior business head at a major software company before founding Plus3.</p>\n' +
'      <div class="andrew__quote"><p>&ldquo;We don&#39;t sell solutions. We build the right ones.&rdquo;</p><cite>Andrew Essey &mdash; Founder, Plus3</cite></div>\n' +
'    </div>\n' +
'  </div></div>\n' +
'</section>\n' +
'<section class="section section--surface" id="services" aria-labelledby="services-h">\n' +
'  <div class="container">\n' +
'    <div class="sec-header">\n' +
'      <div class="green-bar"></div>\n' +
'      <p class="sec-label">02 &mdash; Our Services</p>\n' +
'      <h2 class="sec-heading" id="services-h">End-to-end delivery<br><em>capability.</em></h2>\n' +
'      <p class="sec-body">From first idea to production, one partner across the whole journey.</p>\n' +
'    </div>\n' +
'    <div class="services__grid">\n' +
'      <article class="service-card"><div class="service-card__num">01</div><h3 class="service-card__title">Consulting &amp; Roadmaps</h3><p class="service-card__body">Define direction, prioritise initiatives and design practical delivery roadmaps aligned to business goals.</p></article>\n' +
'      <article class="service-card"><div class="service-card__num">02</div><h3 class="service-card__title">Custom Software Development</h3><p class="service-card__body">Tailored solutions that integrate with existing systems and support future scalability.</p></article>\n' +
'      <article class="service-card"><div class="service-card__num">03</div><h3 class="service-card__title">Team Augmentation</h3><p class="service-card__body">Skilled professionals who embed directly into your teams, as and when you need them.</p></article>\n' +
'      <article class="service-card"><div class="service-card__num">04</div><h3 class="service-card__title">Cloud, DevOps &amp; Data</h3><p class="service-card__body">Modern architectures and operational best practice for reliability, performance and cost efficiency.</p></article>\n' +
'      <article class="service-card"><div class="service-card__num">05</div><h3 class="service-card__title">Quality Assurance</h3><p class="service-card__body">Testing and delivery enablement that keep solutions robust under real-world pressure.</p></article>\n' +
'      <article class="service-card"><div class="service-card__num">06</div><h3 class="service-card__title">Delivery Enablement</h3><p class="service-card__body">Disciplined, transparent execution with shared accountability from concept to production.</p></article>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +
'<section class="section section--dark" id="how-we-work" aria-labelledby="why-h">\n' +
'  <div class="container"><div class="why__grid">\n' +
'    <div>\n' +
'      <div class="green-bar"></div>\n' +
'      <p class="sec-label">03 &mdash; Why Plus3</p>\n' +
'      <h2 class="sec-heading" id="why-h">Why clients<br><em>choose us.</em></h2>\n' +
'      <div class="why__points" style="margin-top:2.5rem">\n' +
'        <div class="why__point"><div class="why__point-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg></div><div><div class="why__point-title">We think before we build</div><div class="why__point-body">Solutions grounded in genuine understanding. We solve the real business problem, not just ship outputs.</div></div></div>\n' +
'        <div class="why__point"><div class="why__point-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg></div><div><div class="why__point-title">A delivery model built on ownership</div><div class="why__point-body">Our specialists are incentivised on delivery quality, growth and client satisfaction.</div></div></div>\n' +
'        <div class="why__point"><div class="why__point-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><div><div class="why__point-title">Built to scale with you</div><div class="why__point-body">Practical, modern solutions engineered to grow with your business from first build to enterprise scale.</div></div></div>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div class="why__visual"><img src="' + cdnBase + '/website/Image1.png" alt="Plus3 technology" loading="lazy"></div>\n' +
'  </div>\n' +
'  <div class="container"><div class="testimonials">\n' +
'    <p class="testimonials__label">Client Testimonials</p>\n' +
'    <h3 class="testimonials__heading">What our clients say.</h3>\n' +
'    <div class="testimonials__grid">\n' +
'      <div class="testimonial-card"><div class="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testimonial-card__quote">Plus3 didn&#39;t just deliver a solution &mdash; they took the time to understand our business first. The team embedded seamlessly and the quality of output was consistently high. We&#39;ve extended our engagement twice already.</p><div class="testimonial-card__meta"><div class="testimonial-card__role">Head of Technology</div><div class="testimonial-card__company">Financial Services &mdash; Johannesburg</div></div></div>\n' +
'      <div class="testimonial-card"><div class="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testimonial-card__quote">The honesty and transparency throughout the project set Plus3 apart. They flagged risks early, proposed practical solutions and delivered on time.</p><div class="testimonial-card__meta"><div class="testimonial-card__role">Chief Operating Officer</div><div class="testimonial-card__company">Healthcare Technology &mdash; Cape Town</div></div></div>\n' +
'      <div class="testimonial-card"><div class="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testimonial-card__quote">We came to Plus3 with a half-formed idea and a tight deadline. They helped us shape the roadmap and got us to market faster than we expected.</p><div class="testimonial-card__meta"><div class="testimonial-card__role">Founder &amp; CEO</div><div class="testimonial-card__company">SaaS Startup &mdash; Sandton</div></div></div>\n' +
'      <div class="testimonial-card"><div class="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testimonial-card__quote">What impressed us most was how quickly the Plus3 team got up to speed. Within days they were contributing at a senior level and the quality never dropped.</p><div class="testimonial-card__meta"><div class="testimonial-card__role">VP Engineering</div><div class="testimonial-card__company">FinTech Scale-up &mdash; Cape Town</div></div></div>\n' +
'    </div>\n' +
'  </div></div>\n' +
'</section>\n' +
'<section class="section section--surface" id="engagement" aria-labelledby="engagement-h">\n' +
'  <div class="container">\n' +
'    <div class="sec-header">\n' +
'      <div class="green-bar"></div>\n' +
'      <p class="sec-label">04 &mdash; How We Work</p>\n' +
'      <h2 class="sec-heading" id="engagement-h">Engagement<br><em>models.</em></h2>\n' +
'      <p class="sec-body">Flexible models designed around your needs, budget and timeline.</p>\n' +
'    </div>\n' +
'    <div class="models__grid">\n' +
'      <div class="model-card"><div class="model-card__num">01</div><div class="model-card__title">Project-Based</div><p class="model-card__body">Fixed scope, timeline and budget. Ideal for well-defined initiatives where you need a trusted delivery partner.</p></div>\n' +
'      <div class="model-card"><div class="model-card__num">02</div><div class="model-card__title">Team Augmentation</div><p class="model-card__body">Embed our specialists directly into your team. Scale up or down as your needs change.</p></div>\n' +
'      <div class="model-card"><div class="model-card__num">03</div><div class="model-card__title">Retainer</div><p class="model-card__body">Ongoing access to senior expertise for advisory, architecture, QA or delivery oversight.</p></div>\n' +
'      <div class="model-card"><div class="model-card__num">04</div><div class="model-card__title">Hybrid</div><p class="model-card__body">Combine project delivery with embedded specialists. The most flexible model for complex, evolving programmes.</p></div>\n' +
'    </div>\n' +
'  </div>\n' +
'</section>\n' +
'<section class="clients-section" aria-label="Our clients">\n' +
'  <div class="container">\n' +
'    <p class="sec-label">Trusted by</p>\n' +
'    <h2 class="sec-heading">Clients we&#39;ve<br><em>worked with.</em></h2>\n' +
'  </div>\n' +
'  <div class="clients-carousel">\n' +
'    <div class="clients-track">' + carouselImgs + '</div>\n' +
'  </div>\n' +
'</section>\n' +
'<div class="cta-band">\n' +
'  <div class="container cta-band__inner">\n' +
'    <h2 class="cta-band__heading">Ready to move faster?</h2>\n' +
'    <p class="cta-band__sub">Let&#39;s talk about what you&#39;re building and how Plus3 can help you get there.</p>\n' +
'    <div class="cta-band__btns">\n' +
'      <a href="#contact" class="btn btn--white">Start a conversation</a>\n' +
'      <a href="https://wa.me/27822635227?text=Hi%20Plus3%2C%20I%20was%20on%20your%20website%20and%20I%20need%20help%20with..." target="_blank" rel="noopener" class="btn btn--outline-white">&#128172; Drop us a WhatsApp</a>\n' +
'    </div>\n' +
'  </div>\n' +
'</div>\n' +
'<section class="section section--dark" id="contact" aria-labelledby="contact-h">\n' +
'  <div class="container"><div class="contact__grid">\n' +
'    <div>\n' +
'      <div class="green-bar"></div>\n' +
'      <p class="sec-label">05 &mdash; Contact</p>\n' +
'      <h2 class="sec-heading" id="contact-h">Let&#39;s start a<br><em>conversation.</em></h2>\n' +
'      <p class="sec-body">Whether you have a project in mind or just want to explore options, we&#39;re happy to talk.</p>\n' +
'      <div class="contact__details">\n' +
'        <div class="contact__detail"><div class="contact__detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.09a16 16 0 006 6l.56-.56a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/></svg></div><div><div class="contact__detail-label">Phone</div><div class="contact__detail-value"><a href="tel:+27822635227">+27 82 263 5227</a> &middot; <a href="tel:+27689397311">+27 68 939 7311</a></div></div></div>\n' +
'        <div class="contact__detail"><div class="contact__detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div class="contact__detail-label">Email</div><div class="contact__detail-value"><a href="mailto:info@plus3.co.za">info@plus3.co.za</a></div></div></div>\n' +
'        <div class="contact__detail"><div class="contact__detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><div class="contact__detail-label">Address</div><div class="contact__detail-value">50 Christo Avenue, Olivedale, Johannesburg, 2188</div></div></div>\n' +
'        <div class="contact__detail"><div class="contact__detail-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><div class="contact__detail-label">Hours</div><div class="contact__detail-value">Mon &ndash; Fri, 08:00 &ndash; 17:00 SAST</div></div></div>\n' +
'        <div><div class="contact__detail-label" style="margin-bottom:0.75rem">Connect</div><div class="socials"><a href="https://wa.me/27822635227" target="_blank" rel="noopener" class="social-btn social-btn--wa">WhatsApp</a><a href="https://www.linkedin.com/company/plus3group/" target="_blank" rel="noopener" class="social-btn social-btn--li">LinkedIn</a></div></div>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div class="form-wrap">\n' +
'      <div id="form-container">\n' +
'        <form class="form" id="contact-form" novalidate>\n' +
'          <div class="form__row">\n' +
'            <div class="form__group"><label class="form__label" for="fname">First name</label><input class="form__input" type="text" id="fname" name="fname" placeholder="Jane" required></div>\n' +
'            <div class="form__group"><label class="form__label" for="lname">Last name</label><input class="form__input" type="text" id="lname" name="lname" placeholder="Smith" required></div>\n' +
'          </div>\n' +
'          <div class="form__group"><label class="form__label" for="email">Email</label><input class="form__input" type="email" id="email" name="email" placeholder="jane@company.com" required></div>\n' +
'          <div class="form__group"><label class="form__label" for="company">Company</label><input class="form__input" type="text" id="company" name="company" placeholder="Your company"></div>\n' +
'          <div class="form__group"><label class="form__label" for="service">Service of interest</label>\n' +
'            <select class="form__select" id="service" name="service">\n' +
'              <option value="">Select a service</option>\n' +
'              <option>Consulting &amp; Roadmaps</option>\n' +
'              <option>Custom Software Development</option>\n' +
'              <option>Team Augmentation</option>\n' +
'              <option>Cloud, DevOps &amp; Data</option>\n' +
'              <option>Quality Assurance</option>\n' +
'              <option>Delivery Enablement</option>\n' +
'              <option>Not sure yet</option>\n' +
'            </select>\n' +
'          </div>\n' +
'          <div class="form__group"><label class="form__label" for="message">Message</label><textarea class="form__textarea" id="message" name="message" placeholder="Tell us about your project or challenge..." required></textarea></div>\n' +
'          <button type="submit" class="btn-submit">Send message &rarr;</button>\n' +
'        </form>\n' +
'        <div class="form-success" id="form-success">\n' +
'          <div class="form-success__icon">&#10003;</div>\n' +
'          <h3 class="form-success__title">Message sent!</h3>\n' +
'          <p class="form-success__body">Thanks for reaching out. We&#39;ll be in touch within one business day.</p>\n' +
'        </div>\n' +
'      </div>\n' +
'    </div>\n' +
'  </div></div>\n' +
'</section>\n' +
'</main>\n' +
'<footer>\n' +
'  <div class="container">\n' +
'    <div class="footer__inner">\n' +
'      <div>\n' +
'        <img src="' + logoUrl + '" alt="Plus3 Solutions" class="footer__logo">\n' +
'        <p class="footer__tagline">Tech talent to bring your ideas to life.</p>\n' +
'      </div>\n' +
'      <div>\n' +
'        <div class="footer__col-title">Navigate</div>\n' +
'        <ul class="footer__links">\n' +
'          <li><a href="#about">About</a></li>\n' +
'          <li><a href="#services">Services</a></li>\n' +
'          <li><a href="#how-we-work">Why Plus3</a></li>\n' +
'          <li><a href="#engagement">How We Work</a></li>\n' +
'          <li><a href="#contact">Contact</a></li>\n' +
'        </ul>\n' +
'      </div>\n' +
'      <div>\n' +
'        <div class="footer__col-title">Contact</div>\n' +
'        <ul class="footer__links">\n' +
'          <li><a href="tel:+27822635227">+27 82 263 5227</a></li>\n' +
'          <li><a href="mailto:info@plus3.co.za">info@plus3.co.za</a></li>\n' +
'          <li><a href="https://wa.me/27822635227" target="_blank" rel="noopener">WhatsApp</a></li>\n' +
'          <li><a href="https://www.linkedin.com/company/plus3group/" target="_blank" rel="noopener">LinkedIn</a></li>\n' +
'          <li><a href="https://www.linkedin.com/company/plus3group/jobs/" target="_blank" rel="noopener">Jobs &amp; Careers</a></li>\n' +
'        </ul>\n' +
'      </div>\n' +
'    </div>\n' +
'    <div class="footer__bottom">\n' +
'      <p class="footer__copy">&copy; 2025 Plus3 Solutions. All rights reserved.</p>\n' +
'      <p class="footer__copy">50 Christo Avenue, Olivedale, Johannesburg, 2188</p>\n' +
'    </div>\n' +
'  </div>\n' +
'</footer>\n' +
'<script>\n' +
'(function(){\n' +
'  var nav=document.querySelector(\'.nav\'),ham=document.getElementById(\'hamburger\'),mob=document.getElementById(\'mobile-nav\'),links=mob?mob.querySelectorAll(\'a\'):[];\n' +
'  window.addEventListener(\'scroll\',function(){if(nav)nav.classList.toggle(\'scrolled\',window.scrollY>10)},{passive:true});\n' +
'  function close(){if(mob)mob.classList.remove(\'open\');if(ham){ham.setAttribute(\'aria-expanded\',\'false\');ham.innerHTML=\'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>\';}}\n' +
'  if(ham)ham.addEventListener(\'click\',function(){var open=mob&&mob.classList.toggle(\'open\');ham.setAttribute(\'aria-expanded\',open?\'true\':\'false\');ham.innerHTML=open?\'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>\':\'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>\'});\n' +
'  links.forEach(function(l){l.addEventListener(\'click\',close)});\n' +
'  var form=document.getElementById(\'contact-form\'),succ=document.getElementById(\'form-success\');\n' +
'  if(form)form.addEventListener(\'submit\',function(e){e.preventDefault();var data=new FormData(form);fetch(\'https://formspree.io/f/xeokvpaw\',{method:\'POST\',body:data,headers:{\'Accept\':\'application/json\'}}).then(function(r){if(r.ok){form.style.display=\'none\';if(succ)succ.classList.add(\'show\')}else{alert(\'Submission failed. Please email info@plus3.co.za directly.\');}}).catch(function(){alert(\'Network error. Please email info@plus3.co.za directly.\');})});\n' +
'})();\n' +
'</script>\n' +
'</body>\n' +
'</html>';
}
