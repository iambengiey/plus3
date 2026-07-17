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
'<link rel="icon" type="image/svg+xml" href="' + cdnBase + '/website/favicon_dark_mode.svg">\n' +
'<link rel="apple-touch-icon" href="' + logoUrl + '">\n' +
'<link rel="preconnect" href="https://fonts.googleapis.com">\n' +
'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
'<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&family=Playfair+Display:wght@700;800;900&display=swap" rel="stylesheet">\n' +
'<script type="application/ld+json">' + schema + '<\/script>\n' +
'<style>\n' +
/* ── DESIGN TOKENS ── off-white base, dark-grey accent */
':root{--page-bg:#EEF3EF;--surface-bg:#EEF3EF;--grey-bg:#4E524A;--card-bg:#ffffff;--card-grey:#3a3d37;--border-col:#d5dbd6;--border-grey:#3a3d37;--text-main:#1a1d1a;--text-muted:#4a524a;--text-on-grey:#EEF3EF;--text-muted-on-grey:#b8bdb8;--green:#228B22;--green-light:#37B34A;--green-hi:#228B22;--nav-bg:rgba(238,243,239,0.97);--nav-border:rgba(0,0,0,0.08);--nav-link-color:#3a3d37;--hero-overlay-start:rgba(238,243,239,0.92);--hero-overlay-end:rgba(238,243,239,0.75);--hero-grad:linear-gradient(to right,#EEF3EF 0%,transparent 35%);--carousel-fade-l:linear-gradient(to right,#EEF3EF,transparent);--carousel-fade-r:linear-gradient(to left,#EEF3EF,transparent);--footer-bg:#4E524A;--select-bg:#ffffff;--logo-filter:none;color-scheme:light;--nav-height:72px;--font-display:\'Playfair Display\',Georgia,serif;--font-body:\'DM Sans\',\'Inter\',sans-serif;--ease-out:cubic-bezier(0.16,1,0.3,1);--t-fast:180ms;--t-slow:360ms;--radius-sm:4px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--content-wide:1200px;--text-xs:clamp(0.72rem,0.7rem + 0.2vw,0.8rem);--text-sm:clamp(0.875rem,0.85rem + 0.15vw,1rem);--text-base:clamp(1rem,0.97rem + 0.2vw,1.125rem);--text-lg:clamp(1.125rem,1rem + 0.6vw,1.5rem);--text-xl:clamp(1.5rem,1.2rem + 1.2vw,2.25rem);--text-2xl:clamp(2rem,1.2rem + 2.5vw,3.75rem)}\n' +
'*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}\n' +
'html{scroll-behavior:smooth;scroll-padding-top:var(--nav-height);-webkit-font-smoothing:antialiased}\n' +
'body{font-family:var(--font-body);font-size:var(--text-base);background:var(--page-bg);color:var(--text-main);overflow-x:hidden;line-height:1.65}\n' +
'img,svg{display:block;max-width:100%}ul,ol{list-style:none}input,button,textarea,select{font:inherit;color:inherit}\n' +
'h1,h2,h3,h4{font-family:var(--font-display);text-wrap:balance;line-height:1.1}\n' +
'p,li{text-wrap:pretty}button{cursor:pointer;background:none;border:none}a{color:inherit;text-decoration:none}\n' +
'::selection{background:rgba(34,139,34,0.18)}\n' +
':focus-visible{outline:2px solid var(--green);outline-offset:3px;border-radius:var(--radius-sm)}\n' +
'.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}\n' +
'.container{max-width:var(--content-wide);margin-inline:auto;padding-inline:clamp(1.25rem,5vw,4rem)}\n' +
/* sections */
'.section{padding-block:clamp(5rem,9vw,9rem)}.section--light{background:var(--page-bg)}.section--grey{background:var(--grey-bg)}\n' +
/* labels / headings on light */
'.sec-label{font-family:var(--font-body);font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green);margin-bottom:1rem}\n' +
'.sec-heading{font-family:var(--font-display);font-size:var(--text-2xl);font-weight:900;color:var(--text-main);letter-spacing:-0.02em;line-height:1.05}\n' +
'.sec-heading em{font-style:normal;color:var(--green)}.sec-body{color:var(--text-muted);font-size:var(--text-base);max-width:58ch;margin-top:1rem;line-height:1.75}\n' +
/* labels / headings on grey */
'.on-grey .sec-label,.section--grey .sec-label{color:#9dcc9d}.on-grey .sec-heading,.section--grey .sec-heading{color:var(--text-on-grey)}.on-grey .sec-heading em,.section--grey .sec-heading em{color:#9dcc9d}.on-grey .sec-body,.section--grey .sec-body{color:var(--text-muted-on-grey)}\n' +
'.sec-header{margin-bottom:clamp(3rem,5vw,4.5rem)}.green-bar{width:48px;height:3px;background:var(--green);margin-bottom:1.5rem}\n' +
/* buttons */
'.btn{display:inline-flex;align-items:center;gap:0.5rem;padding:0.85rem 1.75rem;font-family:var(--font-body);font-size:var(--text-sm);font-weight:600;border-radius:var(--radius-sm);transition:all var(--t-fast) var(--ease-out);cursor:pointer}\n' +
'.btn--green{background:var(--green);color:#EEF3EF;border:2px solid var(--green)}.btn--green:hover{background:var(--green-light);border-color:var(--green-light)}\n' +
'.btn--outline{background:transparent;color:var(--text-main);border:2px solid rgba(30,50,30,0.3)}.btn--outline:hover{border-color:var(--text-main);background:rgba(30,50,30,0.05)}\n' +
/* nav */
'.nav{position:fixed;top:0;left:0;right:0;height:var(--nav-height);z-index:100;background:var(--nav-bg);backdrop-filter:blur(16px) saturate(140%);-webkit-backdrop-filter:blur(16px) saturate(140%);border-bottom:1px solid var(--nav-border);transition:box-shadow var(--t-slow)}\n' +
'.nav.scrolled{box-shadow:0 4px 24px rgba(0,0,0,0.08)}\n' +
'.nav__inner{max-width:var(--content-wide);margin-inline:auto;padding-inline:clamp(1.25rem,5vw,4rem);height:100%;display:flex;align-items:center;justify-content:space-between;gap:2rem}\n' +
'.nav__logo img{height:40px;width:auto}\n' +
'.nav__links{display:flex;align-items:center;gap:0.25rem}\n' +
'.nav__links a{padding:0.45rem 0.9rem;font-size:var(--text-sm);font-weight:500;color:var(--nav-link-color);border-radius:var(--radius-sm);transition:color var(--t-fast),background var(--t-fast)}\n' +
'.nav__links a:hover{color:#1a1d1a;background:rgba(0,0,0,0.06)}\n' +
'.nav__cta{padding:0.5rem 1.25rem;background:var(--green);color:#EEF3EF;border-radius:var(--radius-sm);font-size:var(--text-sm);font-weight:700;transition:background var(--t-fast)}.nav__cta:hover{background:var(--green-light)}\n' +
'.nav__hamburger{display:none;width:44px;height:44px;align-items:center;justify-content:center;color:#1a1d1a;border-radius:var(--radius-sm)}.nav__hamburger:hover{background:rgba(0,0,0,0.06)}\n' +
'.nav__mobile{position:fixed;top:var(--nav-height);left:0;right:0;bottom:0;background:#EEF3EF;z-index:99;padding:2rem 1.5rem;display:flex;flex-direction:column;gap:0.5rem;transform:translateX(100%);transition:transform var(--t-slow) var(--ease-out);border-top:1px solid var(--border-col);overflow-y:auto}\n' +
'.nav__mobile.open{transform:translateX(0)}.nav__mobile a{display:block;padding:1rem 1.25rem;font-size:var(--text-lg);font-weight:600;color:#1a1d1a;border-radius:var(--radius-md)}.nav__mobile a:hover{background:rgba(0,0,0,0.05)}.nav__mobile .btn--green{text-align:center;margin-top:1rem}\n' +
'@media(max-width:900px){.nav__links,.nav__actions .nav__cta{display:none}.nav__hamburger{display:flex}}\n' +
/* hero */
'.hero{min-height:100dvh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding-top:var(--nav-height);position:relative;background:var(--page-bg)}\n' +
'@media(max-width:900px){.hero{grid-template-columns:1fr;min-height:100dvh;background-image:url(\'' + heroUrl + '\');background-size:cover;background-position:center top}}\n' +
'.hero__left{padding:clamp(4rem,8vw,8rem) clamp(1.25rem,5vw,4rem);position:relative;z-index:2}\n' +
'@media(max-width:900px){.hero__left{background:linear-gradient(to bottom,var(--hero-overlay-start) 0%,var(--hero-overlay-end) 100%)}}\n' +
'.hero__eyebrow{display:inline-flex;align-items:center;gap:0.6rem;font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green);margin-bottom:1.75rem}\n' +
'.hero__eyebrow-line{width:32px;height:2px;background:var(--green)}\n' +
'.hero__heading{font-family:var(--font-display);font-size:clamp(2.5rem,1rem + 5vw,5.5rem);font-weight:900;line-height:1.04;letter-spacing:-0.025em;color:var(--text-main);margin-bottom:1.5rem}\n' +
'.hero__heading em{font-style:normal;color:var(--green)}\n' +
'.hero__sub{font-size:var(--text-lg);color:var(--text-muted);max-width:44ch;line-height:1.65;margin-bottom:2.5rem}\n' +
'.hero__ctas{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:3rem}\n' +
'.hero__tagline{font-size:var(--text-xs);color:var(--text-muted);opacity:0.7;font-style:italic;letter-spacing:0.05em}\n' +
'.hero__right{position:fixed;top:0;right:0;width:50%;height:100vh;z-index:1;overflow:hidden;pointer-events:none}\n' +
'@media(max-width:900px){.hero__right{display:none}}\n' +
'.hero__right img{width:100%;height:100%;object-fit:cover;object-position:center;display:block}\n' +
'.hero__right::after{content:\'\';position:absolute;inset:0;background:var(--hero-grad)}\n' +
/* stats band — grey */
'.stats-band{background:var(--grey-bg);border-top:1px solid rgba(0,0,0,0.1);border-bottom:1px solid rgba(0,0,0,0.1);padding-block:2.5rem;position:relative;z-index:10}\n' +
'.stats-band__inner{display:flex;flex-wrap:wrap;gap:2rem 4rem;align-items:center;justify-content:space-between}\n' +
'.stat__value{font-family:var(--font-display);font-size:clamp(2rem,3vw,3rem);font-weight:900;color:#9dcc9d;line-height:1}\n' +
'.stat__label{font-size:var(--text-xs);color:var(--text-muted-on-grey);text-transform:uppercase;letter-spacing:0.08em;margin-top:0.35rem}\n' +
'.stats-band__divider{width:1px;height:40px;background:rgba(255,255,255,0.15)}\n' +
'@media(max-width:640px){.stats-band__divider{display:none}}\n' +
'.section,.clients-section,.cta-band,footer{position:relative;z-index:10}\n' +
/* about */
'.about__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:start}\n' +
'@media(max-width:768px){.about__grid{grid-template-columns:1fr}}\n' +
'.about__body{color:var(--text-muted);line-height:1.8;margin-bottom:1.25rem}\n' +
'.about__pillars{display:flex;flex-direction:column;gap:1.5rem;margin-top:2.5rem}\n' +
'.about__pillar{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'.about__pillar-num{font-family:var(--font-display);font-size:var(--text-sm);font-weight:900;color:var(--green);min-width:2rem;padding-top:0.1em}\n' +
'.about__pillar-title{font-weight:700;color:var(--green);margin-bottom:0.3rem;font-size:var(--text-sm)}\n' +
'.about__pillar-body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'.andrew__img-wrap{position:relative;border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border-col);aspect-ratio:3/4;background:#e8ede9}\n' +
'.andrew__img-wrap img{width:100%;height:100%;object-fit:cover;filter:grayscale(100%);display:block}\n' +
'.andrew__label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green);margin-bottom:0.75rem}\n' +
'.andrew__name{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:var(--text-main);margin-bottom:0.35rem}\n' +
'.andrew__title{font-size:var(--text-sm);color:var(--green);font-weight:600;margin-bottom:1.75rem}\n' +
'.andrew__bio{color:var(--text-muted);line-height:1.8;font-size:var(--text-sm);margin-bottom:1.25rem}\n' +
'.andrew__quote{border-left:3px solid var(--green);padding:1rem 1.5rem;margin-top:2rem;background:rgba(34,139,34,0.06);border-radius:0 var(--radius-md) var(--radius-md) 0}\n' +
'.andrew__quote p{font-style:italic;color:var(--text-main);line-height:1.7;font-size:var(--text-sm);margin-bottom:0.5rem}\n' +
'.andrew__quote cite{font-size:var(--text-xs);color:var(--green);font-style:normal;font-weight:700;text-transform:uppercase;letter-spacing:0.08em}\n' +
/* services — on grey */
'.services__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-lg);overflow:hidden}\n' +
'@media(max-width:900px){.services__grid{grid-template-columns:1fr 1fr}}@media(max-width:580px){.services__grid{grid-template-columns:1fr}}\n' +
'.service-card{background:var(--card-grey);padding:2.25rem 2rem;transition:background var(--t-fast),color var(--t-fast)}.service-card:hover{background:#EEF3EF}\n' +
'.service-card__num{font-family:var(--font-display);font-size:var(--text-xs);font-weight:900;color:#9dcc9d;opacity:0.8;margin-bottom:1.25rem;transition:color var(--t-fast)}\n' +
'.service-card:hover .service-card__num{color:var(--green)}\n' +
'.service-card__title{font-family:var(--font-display);font-size:var(--text-base);font-weight:700;color:#EEF3EF;margin-bottom:0.75rem;transition:color var(--t-fast)}\n' +
'.service-card:hover .service-card__title{color:var(--green)}.service-card__body{font-size:var(--text-sm);color:var(--text-muted-on-grey);line-height:1.7;transition:color var(--t-fast)}\n' +
'.service-card:hover .service-card__body{color:var(--text-muted)}\n' +
/* why / case studies — on light */
'.why__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:center}\n' +
'@media(max-width:768px){.why__grid{grid-template-columns:1fr}}\n' +
'.why__points{display:flex;flex-direction:column;gap:2rem}.why__point{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'.why__point-icon{width:40px;height:40px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(34,139,34,0.08);border:1px solid rgba(34,139,34,0.2);border-radius:var(--radius-md);color:var(--green)}\n' +
'.why__point-title{font-weight:700;color:var(--green);margin-bottom:0.4rem;font-size:var(--text-sm)}.why__point-body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
/* case study carousel */
'.case-studies{margin-top:clamp(4rem,6vw,5rem);padding-top:clamp(3rem,5vw,4rem);border-top:1px solid var(--border-col)}\n' +
'.case-studies__header{display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;margin-bottom:2.5rem;flex-wrap:wrap}\n' +
'.case-studies__nav{display:flex;gap:0.5rem}\n' +
'.cs-nav-btn{width:40px;height:40px;border-radius:var(--radius-full);border:2px solid var(--border-col);background:transparent;display:flex;align-items:center;justify-content:center;color:var(--text-muted);cursor:pointer;transition:all var(--t-fast)}\n' +
'.cs-nav-btn:hover{border-color:var(--green);color:var(--green)}\n' +
'.cs-track-wrap{overflow:hidden}\n' +
'.cs-track{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;transition:opacity var(--t-slow)}\n' +
'@media(max-width:900px){.cs-track{grid-template-columns:1fr 1fr}}@media(max-width:560px){.cs-track{grid-template-columns:1fr}}\n' +
'.cs-card{background:#fff;border:1px solid var(--border-col);border-radius:var(--radius-lg);padding:2rem 1.75rem;display:flex;flex-direction:column;gap:1rem;transition:border-color var(--t-fast),transform var(--t-slow) var(--ease-out),background var(--t-fast)}\n' +
'.cs-card:hover{border-color:var(--green);background:var(--green);transform:translateY(-3px)}\n' +
'.cs-card__sector{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--green);transition:color var(--t-fast)}\n' +
'.cs-card:hover .cs-card__sector{color:#9dcc9d}\n' +
'.cs-card__title{font-family:var(--font-display);font-size:var(--text-lg);font-weight:700;color:var(--text-main);line-height:1.2;transition:color var(--t-fast)}\n' +
'.cs-card:hover .cs-card__title{color:#EEF3EF}\n' +
'.cs-card__body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7;flex:1;transition:color var(--t-fast)}\n' +
'.cs-card:hover .cs-card__body{color:rgba(238,243,239,0.8)}\n' +
'.cs-card__tag{display:inline-block;padding:0.25rem 0.75rem;border-radius:var(--radius-full);font-size:var(--text-xs);font-weight:600;background:rgba(34,139,34,0.08);color:var(--green);border:1px solid rgba(34,139,34,0.2);transition:background var(--t-fast),color var(--t-fast),border-color var(--t-fast)}\n' +
'.cs-card:hover .cs-card__tag{background:rgba(238,243,239,0.15);color:#EEF3EF;border-color:rgba(238,243,239,0.3)}\n' +
/* testimonial ticker */
'.testi-ticker{margin-top:clamp(4rem,6vw,5rem);padding-top:clamp(3rem,5vw,4rem);border-top:1px solid var(--border-col)}\n' +
'.testi-ticker__label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green);margin-bottom:0.75rem}\n' +
'.testi-ticker__heading{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:var(--text-main);margin-bottom:2.5rem}\n' +
'.testi-track-wrap{overflow:hidden;position:relative}\n' +
'.testi-track-wrap::before,.testi-track-wrap::after{content:\'\';position:absolute;top:0;bottom:0;width:100px;z-index:2;pointer-events:none}\n' +
'.testi-track-wrap::before{left:0;background:linear-gradient(to right,var(--page-bg),transparent)}.testi-track-wrap::after{right:0;background:linear-gradient(to left,var(--page-bg),transparent)}\n' +
'.testi-track{display:flex;gap:2rem;animation:testi-scroll 40s linear infinite;width:max-content}\n' +
'.testi-track:hover{animation-play-state:paused}\n' +
'@keyframes testi-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n' +
'.testi-item{width:340px;flex-shrink:0;background:#fff;border:1px solid var(--border-col);border-radius:var(--radius-lg);padding:1.75rem;display:flex;flex-direction:column;gap:1rem}\n' +
'.testi-item__stars{color:var(--green);font-size:0.85rem;letter-spacing:0.1em}\n' +
'.testi-item__quote{font-style:italic;color:var(--text-muted);font-size:var(--text-sm);line-height:1.7;flex:1}\n' +
'.testi-item__quote::before{content:"\\u201C"}.testi-item__quote::after{content:"\\u201D"}\n' +
'.testi-item__role{font-size:var(--text-xs);font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:0.08em}\n' +
'.testi-item__company{font-size:var(--text-xs);color:var(--text-muted);margin-top:0.2rem}\n' +
/* engagement — on grey */
'.models__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}\n' +
'@media(max-width:900px){.models__grid{grid-template-columns:1fr 1fr}}@media(max-width:540px){.models__grid{grid-template-columns:1fr}}\n' +
'.model-card{background:var(--card-grey);border:1px solid rgba(255,255,255,0.08);border-radius:var(--radius-lg);padding:2rem 1.75rem;transition:border-color var(--t-fast),transform var(--t-slow) var(--ease-out)}\n' +
'.model-card:hover{border-color:rgba(157,204,157,0.5);transform:translateY(-3px)}\n' +
'.model-card__num{font-family:var(--font-display);font-size:clamp(2.5rem,4vw,3.5rem);font-weight:900;color:rgba(157,204,157,0.2);line-height:1;margin-bottom:1rem}\n' +
'.model-card__title{font-size:var(--text-sm);font-weight:700;color:#9dcc9d;margin-bottom:0.75rem}.model-card__body{font-size:var(--text-sm);color:var(--text-muted-on-grey);line-height:1.7}\n' +
/* clients — on light */
'.clients-section{padding-block:clamp(4rem,7vw,7rem);background:var(--page-bg);border-top:1px solid var(--border-col)}\n' +
'.clients-carousel{overflow:hidden;position:relative;margin-top:3rem}\n' +
'.clients-carousel::before,.clients-carousel::after{content:\'\';position:absolute;top:0;bottom:0;width:140px;z-index:2;pointer-events:none}\n' +
'.clients-carousel::before{left:0;background:var(--carousel-fade-l)}.clients-carousel::after{right:0;background:var(--carousel-fade-r)}\n' +
'.clients-track{display:flex;align-items:center;gap:5rem;animation:client-scroll 35s linear infinite;width:max-content}\n' +
'.clients-track:hover{animation-play-state:paused}\n' +
'@keyframes client-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n' +
'.client-logo{height:52px;width:auto;max-width:160px;object-fit:contain;flex-shrink:0;filter:var(--logo-filter);opacity:0.55;transition:opacity var(--t-fast),transform var(--t-fast)}\n' +
'.client-logo:hover{opacity:1;transform:scale(1.06)}\n' +
/* kick start — on grey */
'.kickstart{padding-block:clamp(5rem,8vw,8rem);background:var(--grey-bg)}\n' +
'.kickstart__inner{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:center}\n' +
'@media(max-width:768px){.kickstart__inner{grid-template-columns:1fr}}\n' +
'.kickstart__steps{display:flex;flex-direction:column;gap:2rem;margin-top:2.5rem}\n' +
'.kickstart__step{display:flex;gap:1.5rem;align-items:flex-start