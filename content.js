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
':root{--page-bg:#EEF3EF;--surface-bg:#EEF3EF;--grey-bg:#4E524A;--card-bg:#EEF3EF;--card-grey:#3a3d37;--border-col:#d5dbd6;--border-grey:#3a3d37;--text-main:#1a1d1a;--text-muted:#4a524a;--text-on-grey:#EEF3EF;--text-muted-on-grey:#b8bdb8;--green:#228B22;--green-light:#37B34A;--green-hi:#228B22;--nav-bg:rgba(238,243,239,0.97);--nav-border:rgba(0,0,0,0.08);--nav-link-color:#3a3d37;--hero-overlay-start:rgba(238,243,239,0.92);--hero-overlay-end:rgba(238,243,239,0.75);--hero-grad:linear-gradient(to right,#EEF3EF 0%,transparent 35%);--carousel-fade-l:linear-gradient(to right,#EEF3EF,transparent);--carousel-fade-r:linear-gradient(to left,#EEF3EF,transparent);--footer-bg:#4E524A;--select-bg:#EEF3EF;--logo-filter:none;color-scheme:light;--nav-height:72px;--font-display:\'Playfair Display\',Georgia,serif;--font-body:\'DM Sans\',\'Inter\',sans-serif;--ease-out:cubic-bezier(0.16,1,0.3,1);--t-fast:180ms;--t-slow:360ms;--radius-sm:4px;--radius-md:8px;--radius-lg:12px;--radius-xl:16px;--radius-full:9999px;--content-wide:1200px;--text-xs:clamp(0.72rem,0.7rem + 0.2vw,0.8rem);--text-sm:clamp(0.875rem,0.85rem + 0.15vw,1rem);--text-base:clamp(1rem,0.97rem + 0.2vw,1.125rem);--text-lg:clamp(1.125rem,1rem + 0.6vw,1.5rem);--text-xl:clamp(1.5rem,1.2rem + 1.2vw,2.25rem);--text-2xl:clamp(2rem,1.2rem + 2.5vw,3.75rem)}\n' +
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
'.section{padding-block:clamp(5rem,9vw,9rem)}.section--light{background:var(--page-bg)}.section--grey{background:var(--grey-bg)}\n' +
'.sec-label{font-family:var(--font-body);font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green);margin-bottom:1rem}\n' +
'.sec-heading{font-family:var(--font-display);font-size:clamp(1.75rem,1rem + 2.2vw,2.75rem);font-weight:900;color:var(--text-main);letter-spacing:-0.02em;line-height:1.1;max-width:22ch}\n' +
'.sec-heading em{font-style:normal;color:var(--green)}.sec-body{color:var(--text-muted);font-size:var(--text-base);max-width:58ch;margin-top:1rem;line-height:1.75}\n' +
'.on-grey .sec-label,.section--grey .sec-label{color:#9dcc9d}.on-grey .sec-heading,.section--grey .sec-heading{color:var(--text-on-grey)}.on-grey .sec-heading em,.section--grey .sec-heading em{color:#9dcc9d}.on-grey .sec-body,.section--grey .sec-body{color:var(--text-muted-on-grey)}\n' +
'.sec-header{margin-bottom:clamp(3rem,5vw,4.5rem)}.green-bar{width:48px;height:3px;background:var(--green);margin-bottom:1.5rem}\n' +
'.btn{display:inline-flex;align-items:center;gap:0.5rem;padding:0.85rem 1.75rem;font-family:var(--font-body);font-size:var(--text-sm);font-weight:600;border-radius:var(--radius-sm);transition:all var(--t-fast) var(--ease-out);cursor:pointer}\n' +
'.btn--green{background:var(--green);color:#EEF3EF;border:2px solid var(--green)}.btn--green:hover{background:var(--green-light);border-color:var(--green-light)}\n' +
'.btn--outline{background:transparent;color:var(--text-main);border:2px solid rgba(30,50,30,0.3)}.btn--outline:hover{border-color:var(--text-main);background:rgba(30,50,30,0.05)}\n' +
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
'.hero{min-height:100dvh;display:grid;grid-template-columns:1fr 1fr;align-items:center;padding-top:var(--nav-height);position:relative;background:var(--page-bg)}\n' +
'@media(max-width:900px){.hero{grid-template-columns:1fr;min-height:100dvh;background-image:url(\'' + heroUrl + '\');background-size:cover;background-position:center top;filter:grayscale(100%)}}\n' +
'.hero__left{padding:clamp(4rem,8vw,8rem) clamp(1.25rem,5vw,4rem);position:relative;z-index:2}\n' +
'@media(max-width:900px){.hero__left{background:linear-gradient(to bottom,var(--hero-overlay-start) 0%,var(--hero-overlay-end) 100%);filter:none}}\n' +
'.hero__eyebrow{display:inline-flex;align-items:center;gap:0.6rem;font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green);margin-bottom:1.75rem}\n' +
'.hero__eyebrow-line{width:32px;height:2px;background:var(--green)}\n' +
'.hero__heading{font-family:var(--font-display);font-size:clamp(2.5rem,1rem + 5vw,5.5rem);font-weight:900;line-height:1.04;letter-spacing:-0.025em;color:var(--text-main);margin-bottom:1.5rem}\n' +
'.hero__heading em{font-style:normal;color:var(--green)}\n' +
'.hero__sub{font-size:var(--text-lg);color:var(--text-muted);max-width:44ch;line-height:1.65;margin-bottom:2.5rem}\n' +
'.hero__ctas{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:3rem}\n' +
'.hero__tagline{font-size:var(--text-xs);color:var(--text-muted);opacity:0.7;font-style:italic;letter-spacing:0.05em}\n' +
'.hero__right{position:fixed;top:0;right:0;width:50%;height:100vh;z-index:1;overflow:hidden;pointer-events:none}\n' +
'@media(max-width:900px){.hero__right{display:none}}\n' +
'.hero__right img{width:100%;height:100%;object-fit:cover;object-position:center;display:block;filter:grayscale(100%)}\n' +
'.hero__right::after{content:\'\';position:absolute;inset:0;background:var(--hero-grad)}\n' +
'.stats-band{background:var(--grey-bg);border-top:1px solid rgba(0,0,0,0.1);border-bottom:1px solid rgba(0,0,0,0.1);padding-block:2.5rem;position:relative;z-index:10}\n' +
'.stats-band__inner{display:flex;flex-wrap:wrap;gap:2rem 4rem;align-items:center;justify-content:space-between}\n' +
'.stat__value{font-family:var(--font-display);font-size:clamp(2rem,3vw,3rem);font-weight:900;color:#9dcc9d;line-height:1}\n' +
'.stat__label{font-size:var(--text-xs);color:var(--text-muted-on-grey);text-transform:uppercase;letter-spacing:0.08em;margin-top:0.35rem}\n' +
'.stats-band__divider{width:1px;height:40px;background:rgba(255,255,255,0.15)}\n' +
'@media(max-width:640px){.stats-band__divider{display:none}}\n' +
'.section,.clients-section,.kickstart,.cta-band,footer{position:relative;z-index:10}\n' +
'.about__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:start}\n' +
'@media(max-width:768px){.about__grid{grid-template-columns:1fr}}\n' +
'.about__body{color:var(--text-muted);line-height:1.8;margin-bottom:1.25rem}\n' +
'.about__pillars{display:flex;flex-direction:column;gap:1.5rem;margin-top:2.5rem}\n' +
'.about__pillar{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'.about__pillar-num{font-family:var(--font-display);font-size:var(--text-sm);font-weight:900;color:var(--green);min-width:2rem;padding-top:0.1em}\n' +
'.about__pillar-title{font-weight:700;color:var(--green);margin-bottom:0.3rem;font-size:var(--text-sm)}\n' +
'.about__pillar-body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'.andrew__img-wrap{position:relative;width:100%;border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border-col);aspect-ratio:3/4;background:#e8ede9}\n' +
'.andrew__img-wrap img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:grayscale(100%);display:block}\n' +
'.andrew__label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green);margin-bottom:0.75rem}\n' +
'.andrew__name{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:var(--text-main);margin-bottom:0.35rem}\n' +
'.andrew__title{font-size:var(--text-sm);color:var(--green);font-weight:600;margin-bottom:1.75rem}\n' +
'.andrew__bio{color:var(--text-muted);line-height:1.8;font-size:var(--text-sm);margin-bottom:1.25rem}\n' +
'.andrew__quote{border-left:3px solid var(--green);padding:1rem 1.5rem;margin-top:2rem;background:rgba(34,139,34,0.06);border-radius:0 var(--radius-md) var(--radius-md) 0}\n' +
'.andrew__quote p{font-style:italic;color:var(--text-main);line-height:1.7;font-size:var(--text-sm);margin-bottom:0.5rem}\n' +
'.andrew__quote cite{font-size:var(--text-xs);color:var(--green);font-style:normal;font-weight:700;text-transform:uppercase;letter-spacing:0.08em}\n' +
'.services__grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.1);border-radius:var(--radius-lg);overflow:hidden}\n' +
'@media(max-width:900px){.services__grid{grid-template-columns:1fr 1fr}}@media(max-width:580px){.services__grid{grid-template-columns:1fr}}\n' +
'.service-card{background:var(--card-grey);padding:2.25rem 2rem;transition:background var(--t-fast),color var(--t-fast)}.service-card:hover{background:#EEF3EF}\n' +
'.service-card__num{font-family:var(--font-display);font-size:var(--text-xs);font-weight:900;color:#9dcc9d;opacity:0.8;margin-bottom:1.25rem;transition:color var(--t-fast)}\n' +
'.service-card:hover .service-card__num{color:var(--green)}\n' +
'.service-card__title{font-family:var(--font-display);font-size:var(--text-base);font-weight:700;color:#EEF3EF;margin-bottom:0.75rem;transition:color var(--t-fast)}\n' +
'.service-card:hover .service-card__title{color:var(--green)}.service-card__body{font-size:var(--text-sm);color:var(--text-muted-on-grey);line-height:1.7;transition:color var(--t-fast)}\n' +
'.service-card:hover .service-card__body{color:var(--text-muted)}\n' +
'.why__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:center}\n' +
'@media(max-width:768px){.why__grid{grid-template-columns:1fr}}\n' +
'.why__points{display:flex;flex-direction:column;gap:2rem}.why__point{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'.why__point-icon{width:40px;height:40px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(34,139,34,0.08);border:1px solid rgba(34,139,34,0.2);border-radius:var(--radius-md);color:var(--green)}\n' +
'.why__point-title{font-weight:700;color:var(--green);margin-bottom:0.4rem;font-size:var(--text-sm)}.why__point-body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7}\n' +
'.case-studies{margin-top:clamp(4rem,6vw,5rem);padding-top:clamp(3rem,5vw,4rem);border-top:1px solid var(--border-col)}\n' +
'.case-studies__header{display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;margin-bottom:2.5rem;flex-wrap:wrap}\n' +
'.case-studies__nav{display:flex;gap:0.5rem}\n' +
'.cs-nav-btn{width:40px;height:40px;border-radius:var(--radius-full);border:2px solid var(--border-col);background:transparent;display:flex;align-items:center;justify-content:center;color:var(--text-muted);cursor:pointer;transition:all var(--t-fast)}\n' +
'.cs-nav-btn:hover{border-color:var(--green);color:var(--green)}\n' +
'.cs-track-wrap{overflow:hidden}\n' +
'.cs-track{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;transition:opacity var(--t-slow)}\n' +
'@media(max-width:900px){.cs-track{grid-template-columns:1fr 1fr}}@media(max-width:560px){.cs-track{grid-template-columns:1fr}}\n' +
'.cs-card{background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-lg);padding:2rem 1.75rem;display:flex;flex-direction:column;gap:1rem;transition:border-color var(--t-fast),transform var(--t-slow) var(--ease-out),background var(--t-fast)}\n' +
'.cs-card:hover{border-color:var(--green);background:var(--green);transform:translateY(-3px)}\n' +
'.cs-card__sector{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--green);transition:color var(--t-fast)}\n' +
'.cs-card:hover .cs-card__sector{color:#9dcc9d}\n' +
'.cs-card__title{font-family:var(--font-display);font-size:var(--text-lg);font-weight:700;color:var(--text-main);line-height:1.2;transition:color var(--t-fast)}\n' +
'.cs-card:hover .cs-card__title{color:#EEF3EF}\n' +
'.cs-card__body{font-size:var(--text-sm);color:var(--text-muted);line-height:1.7;flex:1;transition:color var(--t-fast)}\n' +
'.cs-card:hover .cs-card__body{color:rgba(238,243,239,0.8)}\n' +
'.cs-card__tag{display:inline-block;padding:0.25rem 0.75rem;border-radius:var(--radius-full);font-size:var(--text-xs);font-weight:600;background:rgba(34,139,34,0.08);color:var(--green);border:1px solid rgba(34,139,34,0.2);transition:background var(--t-fast),color var(--t-fast),border-color var(--t-fast)}\n' +
'.cs-card:hover .cs-card__tag{background:rgba(238,243,239,0.15);color:#EEF3EF;border-color:rgba(238,243,239,0.3)}\n' +
'.testi-ticker{margin-top:clamp(4rem,6vw,5rem);padding-top:clamp(3rem,5vw,4rem);border-top:1px solid var(--border-col)}\n' +
'.testi-ticker__label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:var(--green);margin-bottom:0.75rem}\n' +
'.testi-ticker__heading{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:var(--text-main);margin-bottom:2.5rem}\n' +
'.testi-track-wrap{overflow:hidden;position:relative}\n' +
'.testi-track-wrap::before,.testi-track-wrap::after{content:\'\';position:absolute;top:0;bottom:0;width:100px;z-index:2;pointer-events:none}\n' +
'.testi-track-wrap::before{left:0;background:linear-gradient(to right,var(--page-bg),transparent)}.testi-track-wrap::after{right:0;background:linear-gradient(to left,var(--page-bg),transparent)}\n' +
'.testi-track{display:flex;gap:2rem;animation:testi-scroll 40s linear infinite;width:max-content}\n' +
'.testi-track:hover{animation-play-state:paused}\n' +
'@keyframes testi-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n' +
'.testi-item{width:340px;flex-shrink:0;background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-lg);padding:1.75rem;display:flex;flex-direction:column;gap:1rem}\n' +
'.testi-item__stars{color:var(--green);font-size:0.85rem;letter-spacing:0.1em}\n' +
'.testi-item__quote{font-style:italic;color:var(--text-muted);font-size:var(--text-sm);line-height:1.7;flex:1}\n' +
'.testi-item__quote::before{content:"\\u201C"}.testi-item__quote::after{content:"\\u201D"}\n' +
'.testi-item__role{font-size:var(--text-xs);font-weight:700;color:var(--green);text-transform:uppercase;letter-spacing:0.08em}\n' +
'.testi-item__company{font-size:var(--text-xs);color:var(--text-muted);margin-top:0.2rem}\n' +
'.models__grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}\n' +
'@media(max-width:900px){.models__grid{grid-template-columns:1fr 1fr}}@media(max-width:540px){.models__grid{grid-template-columns:1fr}}\n' +
'.model-card{background:var(--card-grey);border:1px solid rgba(255,255,255,0.08);border-radius:var(--radius-lg);padding:2rem 1.75rem;transition:border-color var(--t-fast),transform var(--t-slow) var(--ease-out)}\n' +
'.model-card:hover{border-color:rgba(157,204,157,0.5);transform:translateY(-3px)}\n' +
'.model-card__num{font-family:var(--font-display);font-size:clamp(2.5rem,4vw,3.5rem);font-weight:900;color:rgba(157,204,157,0.2);line-height:1;margin-bottom:1rem}\n' +
'.model-card__title{font-size:var(--text-sm);font-weight:700;color:#9dcc9d;margin-bottom:0.75rem}.model-card__body{font-size:var(--text-sm);color:var(--text-muted-on-grey);line-height:1.7}\n' +
'.clients-section{padding-block:clamp(4rem,7vw,7rem);background:var(--page-bg);border-top:1px solid var(--border-col)}\n' +
'.clients-carousel{overflow:hidden;position:relative;margin-top:3rem}\n' +
'.clients-carousel::before,.clients-carousel::after{content:\'\';position:absolute;top:0;bottom:0;width:140px;z-index:2;pointer-events:none}\n' +
'.clients-carousel::before{left:0;background:var(--carousel-fade-l)}.clients-carousel::after{right:0;background:var(--carousel-fade-r)}\n' +
'.clients-track{display:flex;align-items:center;gap:5rem;animation:client-scroll 35s linear infinite;width:max-content}\n' +
'.clients-track:hover{animation-play-state:paused}\n' +
'@keyframes client-scroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}\n' +
'.client-logo{height:52px;width:auto;max-width:160px;object-fit:contain;flex-shrink:0;filter:var(--logo-filter);opacity:0.55;transition:opacity var(--t-fast),transform var(--t-fast)}\n' +
'.client-logo:hover{opacity:1;transform:scale(1.06)}\n' +
'.kickstart{padding-block:clamp(5rem,8vw,8rem);background:var(--grey-bg)}\n' +
'.kickstart__inner{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:center}\n' +
'@media(max-width:768px){.kickstart__inner{grid-template-columns:1fr}}\n' +
'.kickstart__steps{display:flex;flex-direction:column;gap:2rem;margin-top:2.5rem}\n' +
'.kickstart__step{display:flex;gap:1.5rem;align-items:flex-start}\n' +
'.kickstart__step-num{font-family:var(--font-display);font-size:clamp(2rem,3vw,2.5rem);font-weight:900;color:rgba(157,204,157,0.25);line-height:1;min-width:3rem}\n' +
'.kickstart__step-title{font-size:var(--text-sm);font-weight:700;color:#9dcc9d;margin-bottom:0.4rem}\n' +
'.kickstart__step-body{font-size:var(--text-sm);color:var(--text-muted-on-grey);line-height:1.7}\n' +
'.kickstart__cta{margin-top:3rem;display:flex;gap:1rem;flex-wrap:wrap}\n' +
'.kickstart__visual{position:relative;border-radius:var(--radius-xl);overflow:hidden;border:1px solid rgba(255,255,255,0.08);background:var(--card-grey)}\n' +
'.kickstart__visual img{width:100%;display:block;filter:grayscale(100%)}\n' +
'.kickstart__visual::after{content:\'\';position:absolute;inset:0;background:linear-gradient(135deg,rgba(34,139,34,0.15) 0%,transparent 60%)}\n' +
'.cta-band{padding-block:clamp(5rem,8vw,8rem);background:var(--green)}\n' +
'.cta-band__inner{display:grid;grid-template-columns:1fr auto;gap:3rem;align-items:center}\n' +
'@media(max-width:768px){.cta-band__inner{grid-template-columns:1fr}}\n' +
'.cta-band__heading{font-family:var(--font-display);font-size:var(--text-xl);font-weight:900;color:#EEF3EF;line-height:1.1;margin-bottom:1rem}\n' +
'.cta-band__sub{color:rgba(238,243,239,0.8);font-size:var(--text-base);max-width:52ch;line-height:1.7}\n' +
'.cta-band .btn--outline{color:#EEF3EF;border-color:rgba(238,243,239,0.5)}.cta-band .btn--outline:hover{border-color:#EEF3EF;background:rgba(238,243,239,0.1)}\n' +
'.contact-section{padding-block:clamp(5rem,8vw,8rem);background:var(--page-bg)}\n' +
'.contact__grid{display:grid;grid-template-columns:1fr 1fr;gap:clamp(3rem,6vw,6rem);align-items:start}\n' +
'@media(max-width:768px){.contact__grid{grid-template-columns:1fr}}\n' +
'.contact__info{display:flex;flex-direction:column;gap:2rem;margin-top:2.5rem}\n' +
'.contact__item{display:flex;gap:1.25rem;align-items:flex-start}\n' +
'.contact__item-icon{width:44px;height:44px;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:rgba(34,139,34,0.08);border:1px solid rgba(34,139,34,0.2);border-radius:var(--radius-md);color:var(--green)}\n' +
'.contact__item-label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--green);margin-bottom:0.35rem}\n' +
'.contact__item-value{font-size:var(--text-sm);color:var(--text-muted);line-height:1.6}\n' +
'.contact__item-value a{color:var(--green);text-decoration:underline;text-underline-offset:3px}\n' +
'.contact-form{background:var(--card-bg);border:1px solid var(--border-col);border-radius:var(--radius-xl);padding:clamp(2rem,4vw,3rem)}\n' +
'.form-row{display:grid;grid-template-columns:1fr 1fr;gap:1.25rem}\n' +
'@media(max-width:540px){.form-row{grid-template-columns:1fr}}\n' +
'.form-group{display:flex;flex-direction:column;gap:0.5rem;margin-bottom:1.25rem}\n' +
'.form-group label{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted)}\n' +
'.form-group input,.form-group textarea,.form-group select{width:100%;padding:0.8rem 1rem;background:var(--page-bg);border:1px solid var(--border-col);border-radius:var(--radius-md);font-size:var(--text-sm);color:var(--text-main);transition:border-color var(--t-fast),box-shadow var(--t-fast);resize:vertical}\n' +
'.form-group input:focus,.form-group textarea:focus,.form-group select:focus{outline:none;border-color:var(--green);box-shadow:0 0 0 3px rgba(34,139,34,0.1)}\n' +
'.form-group select{appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%234a524a\' stroke-width=\'1.5\' fill=\'none\' stroke-linecap=\'round\'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 1rem center}\n' +
'footer{background:var(--footer-bg);padding-block:clamp(3rem,5vw,5rem)}\n' +
'.footer__inner{display:grid;grid-template-columns:2fr 1fr 1fr;gap:3rem}\n' +
'@media(max-width:768px){.footer__inner{grid-template-columns:1fr 1fr}}@media(max-width:480px){.footer__inner{grid-template-columns:1fr}}\n' +
'.footer__brand img{height:36px;margin-bottom:1.25rem;filter:brightness(0) invert(1)}\n' +
'.footer__tagline{font-size:var(--text-sm);color:rgba(238,243,239,0.65);line-height:1.7;max-width:32ch}\n' +
'.footer__col-title{font-size:var(--text-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(238,243,239,0.5);margin-bottom:1.25rem}\n' +
'.footer__links{display:flex;flex-direction:column;gap:0.6rem}\n' +
'.footer__links a{font-size:var(--text-sm);color:rgba(238,243,239,0.7);transition:color var(--t-fast)}.footer__links a:hover{color:#EEF3EF}\n' +
'.footer__bottom{margin-top:3rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}\n' +
'.footer__copy{font-size:var(--text-xs);color:rgba(238,243,239,0.45)}\n' +
'.footer__social{display:flex;gap:1rem}\n' +
'.footer__social a{width:36px;height:36px;display:flex;align-items:center;justify-content:center;border-radius:var(--radius-full);border:1px solid rgba(255,255,255,0.15);color:rgba(238,243,239,0.6);transition:all var(--t-fast)}.footer__social a:hover{border-color:rgba(238,243,239,0.5);color:#EEF3EF}\n' +
'</style>\n' +
'</head>\n' +
'<body>\n' +
'<nav class="nav" id="nav" role="navigation" aria-label="Main navigation">\n' +
'<div class="nav__inner">\n' +
'<a class="nav__logo" href="#home" aria-label="Plus3 Solutions home"><img src="' + logoUrl + '" alt="Plus3 Solutions" width="120" height="40"></a>\n' +
'<div class="nav__links" role="menubar">\n' +
'<a href="#about" role="menuitem">About</a>\n' +
'<a href="#services" role="menuitem">Services</a>\n' +
'<a href="#why" role="menuitem">Why Us</a>\n' +
'<a href="#engagement" role="menuitem">Engagement</a>\n' +
'<a href="#contact" role="menuitem">Contact</a>\n' +
'</div>\n' +
'<div class="nav__actions">\n' +
'<a href="#contact" class="nav__cta">Get Started</a>\n' +
'</div>\n' +
'<button class="nav__hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">\n' +
'<svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="19" y2="6"/><line x1="3" y1="11" x2="19" y2="11"/><line x1="3" y1="16" x2="19" y2="16"/></svg>\n' +
'</button>\n' +
'</div>\n' +
'</nav>\n' +
'<div class="nav__mobile" id="mobileMenu" role="dialog" aria-modal="true" aria-label="Mobile navigation">\n' +
'<a href="#about" onclick="closeMobile()">About</a>\n' +
'<a href="#services" onclick="closeMobile()">Services</a>\n' +
'<a href="#why" onclick="closeMobile()">Why Us</a>\n' +
'<a href="#engagement" onclick="closeMobile()">Engagement</a>\n' +
'<a href="#contact" onclick="closeMobile()">Contact</a>\n' +
'<a href="#contact" class="btn btn--green" onclick="closeMobile()">Get Started</a>\n' +
'</div>\n' +
'<main>\n' +
'<section class="hero" id="home" aria-label="Hero">\n' +
'<div class="hero__left">\n' +
'<div class="hero__eyebrow"><span class="hero__eyebrow-line" aria-hidden="true"></span>South Africa\'s Modern Tech Partner</div>\n' +
'<h1 class="hero__heading">Tech Talent to<br><em>Bring Your Ideas</em><br>to Life</h1>\n' +
'<p class="hero__sub">We embed with your team to deliver real results — from strategy through to shipping software that works.</p>\n' +
'<div class="hero__ctas">\n' +
'<a href="#contact" class="btn btn--green">Start a Conversation</a>\n' +
'<a href="#services" class="btn btn--outline">Our Services</a>\n' +
'</div>\n' +
'<p class="hero__tagline">Trusted by Absa, Capitec, Mediclinic, Mercedes-Benz &amp; more</p>\n' +
'</div>\n' +
'<div class="hero__right" aria-hidden="true"><img src="' + heroUrl + '" alt="" width="900" height="1200" fetchpriority="high"></div>\n' +
'</section>\n' +
'<div class="stats-band" role="region" aria-label="Key statistics">\n' +
'<div class="container stats-band__inner">\n' +
'<div class="stat"><div class="stat__value">15+</div><div class="stat__label">Years Experience</div></div>\n' +
'<div class="stats-band__divider" aria-hidden="true"></div>\n' +
'<div class="stat"><div class="stat__value">50+</div><div class="stat__label">Projects Delivered</div></div>\n' +
'<div class="stats-band__divider" aria-hidden="true"></div>\n' +
'<div class="stat"><div class="stat__value">10+</div><div class="stat__label">Enterprise Clients</div></div>\n' +
'<div class="stats-band__divider" aria-hidden="true"></div>\n' +
'<div class="stat"><div class="stat__value">4</div><div class="stat__label">Countries Served</div></div>\n' +
'</div>\n' +
'</div>\n' +
'<section class="section section--light" id="about" aria-labelledby="about-heading">\n' +
'<div class="container">\n' +
'<div class="about__grid">\n' +
'<div>\n' +
'<div class="sec-label">Our Story</div>\n' +
'<div class="green-bar" aria-hidden="true"></div>\n' +
'<h2 class="sec-heading" id="about-heading">Built on <em>Hands-On</em> Experience</h2>\n' +
'<p class="about__body">Plus3 was founded to bridge the gap between business ambition and technology execution. We combine deep technical expertise with a practical, outcomes-first mindset — because we\'ve sat on both sides of the table.</p>\n' +
'<p class="about__body">Our name reflects our promise: we don\'t just deliver what\'s asked for, we go beyond — adding the extra insight, rigour and care that turns good projects into great ones.</p>\n' +
'<div class="about__pillars">\n' +
'<div class="about__pillar"><div class="about__pillar-num">01</div><div><div class="about__pillar-title">Outcomes Over Outputs</div><div class="about__pillar-body">We measure success by business impact, not lines of code or hours billed.</div></div></div>\n' +
'<div class="about__pillar"><div class="about__pillar-num">02</div><div><div class="about__pillar-title">Embedded Partnership</div><div class="about__pillar-body">We work inside your team, learning your context deeply before prescribing solutions.</div></div></div>\n' +
'<div class="about__pillar"><div class="about__pillar-num">03</div><div><div class="about__pillar-title">Senior-Led Delivery</div><div class="about__pillar-body">Every engagement is led by a senior practitioner — no bait-and-switch with juniors.</div></div></div>\n' +
'</div>\n' +
'</div>\n' +
'<div>\n' +
'<div class="andrew__img-wrap"><img src="' + cdnBase + '/website/andrew.jpg" alt="Andrew Essey, Founder of Plus3 Solutions" width="600" height="800" loading="lazy"></div>\n' +
'<div style="margin-top:2rem">\n' +
'<div class="andrew__label">Meet the Founder</div>\n' +
'<div class="andrew__name">Andrew Essey</div>\n' +
'<div class="andrew__title">Founder &amp; Managing Director</div>\n' +
'<p class="andrew__bio">With over 15 years of experience spanning the UK, Europe and South Africa, Andrew has led technology transformations for some of the world\'s most demanding organisations — from investment banks to global insurers.</p>\n' +
'<p class="andrew__bio">He founded Plus3 to make that calibre of expertise accessible to South African businesses of every size.</p>\n' +
'<blockquote class="andrew__quote"><p>Great technology is only as good as the people behind it. Our job is to be the team that makes yours unstoppable.</p><cite>Andrew Essey — Founder</cite></blockquote>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'</section>\n' +
'<section class="section section--grey" id="services" aria-labelledby="services-heading">\n' +
'<div class="container">\n' +
'<div class="sec-header on-grey">\n' +
'<div class="sec-label">What We Do</div>\n' +
'<div class="green-bar" aria-hidden="true"></div>\n' +
'<h2 class="sec-heading" id="services-heading">Services Built for <em>Real Challenges</em></h2>\n' +
'<p class="sec-body">From shaping strategy to deploying production systems, we cover the full technology lifecycle.</p>\n' +
'</div>\n' +
'<div class="services__grid" role="list">\n' +
'<div class="service-card" role="listitem"><div class="service-card__num">01</div><h3 class="service-card__title">Technology Consulting</h3><p class="service-card__body">Strategic advisory and architecture guidance to align technology investment with business goals.</p></div>\n' +
'<div class="service-card" role="listitem"><div class="service-card__num">02</div><h3 class="service-card__title">Custom Software Development</h3><p class="service-card__body">End-to-end design and build of web, mobile and data platforms — from MVP to enterprise scale.</p></div>\n' +
'<div class="service-card" role="listitem"><div class="service-card__num">03</div><h3 class="service-card__title">Team Augmentation</h3><p class="service-card__body">Senior specialists embedded into your team to accelerate delivery and uplift internal capability.</p></div>\n' +
'<div class="service-card" role="listitem"><div class="service-card__num">04</div><h3 class="service-card__title">Cloud &amp; DevOps</h3><p class="service-card__body">Cloud migration, infrastructure-as-code, CI/CD pipelines and SRE practices that reduce risk and toil.</p></div>\n' +
'<div class="service-card" role="listitem"><div class="service-card__num">05</div><h3 class="service-card__title">Quality Assurance</h3><p class="service-card__body">Test strategy, automation frameworks and performance testing that catch problems before your users do.</p></div>\n' +
'<div class="service-card" role="listitem"><div class="service-card__num">06</div><h3 class="service-card__title">Delivery Enablement</h3><p class="service-card__body">Agile coaching, process design and tooling to help teams ship faster with fewer surprises.</p></div>\n' +
'</div>\n' +
'</div>\n' +
'</section>\n' +
'<section class="section section--light" id="why" aria-labelledby="why-heading">\n' +
'<div class="container">\n' +
'<div class="sec-header">\n' +
'<div class="sec-label">Why Plus3</div>\n' +
'<div class="green-bar" aria-hidden="true"></div>\n' +
'<h2 class="sec-heading" id="why-heading">The Difference That <em>Actually Matters</em></h2>\n' +
'<p class="sec-body">We\'re not the biggest. We\'re the most invested. Here\'s what that means in practice.</p>\n' +
'</div>\n' +
'<div class="why__grid">\n' +
'<div class="why__points">\n' +
'<div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg></div><div><div class="why__point-title">No Juniors on Your Problem</div><div class="why__point-body">Senior-led on every engagement. You get the expertise you were sold, not a graduate with a Jira board.</div></div></div>\n' +
'<div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><div><div class="why__point-title">Fast to Value</div><div class="why__point-body">We shortcut the learning curve. Our team has seen your problem before — in Johannesburg, London and Frankfurt.</div></div></div>\n' +
'<div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div><div><div class="why__point-title">We Work as Your Team</div><div class="why__point-body">No us-and-them dynamic. We embed, we align and we care about your roadmap as if it\'s our own.</div></div></div>\n' +
'<div class="why__point"><div class="why__point-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div><div><div class="why__point-title">International Standards, Local Insight</div><div class="why__point-body">Practices honed in top-tier global organisations, applied with an understanding of the South African market.</div></div></div>\n' +
'</div>\n' +
'<div>\n' +
'<div class="case-studies">\n' +
'<div class="case-studies__header">\n' +
'<div>\n' +
'<div class="sec-label" style="margin-bottom:0.5rem">Case Studies</div>\n' +
'<h3 class="sec-heading" style="font-size:clamp(1.4rem,1rem + 1.5vw,2rem);max-width:none">Proof in <em>Practice</em></h3>\n' +
'</div>\n' +
'<div class="case-studies__nav">\n' +
'<button class="cs-nav-btn" id="csPrev" aria-label="Previous case studies"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="15 18 9 12 15 6"/></svg></button>\n' +
'<button class="cs-nav-btn" id="csNext" aria-label="Next case studies"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg></button>\n' +
'</div>\n' +
'</div>\n' +
'<div class="cs-track-wrap"><div class="cs-track" id="csTrack">\n' +
'<div class="cs-card"><div class="cs-card__sector">Financial Services</div><h4 class="cs-card__title">Core Banking API Modernisation</h4><p class="cs-card__body">Replaced a legacy SOAP integration layer at a major South African bank with a modern REST/event-driven architecture, reducing integration time from weeks to hours.</p><span class="cs-card__tag">Team Augmentation</span></div>\n' +
'<div class="cs-card"><div class="cs-card__sector">Healthcare</div><h4 class="cs-card__title">Patient Data Platform</h4><p class="cs-card__body">Designed and delivered a POPI-compliant data platform for a private hospital group, enabling real-time clinical dashboards across 15 facilities.</p><span class="cs-card__tag">Custom Software</span></div>\n' +
'<div class="cs-card"><div class="cs-card__sector">Automotive</div><h4 class="cs-card__title">Dealer Portal Rebuild</h4><p class="cs-card__body">Rebuilt a Mercedes-Benz dealer portal from the ground up, cutting page load times by 70% and reducing support tickets by half within three months of launch.</p><span class="cs-card__tag">Consulting + Build</span></div>\n' +
'<div class="cs-card"><div class="cs-card__sector">Non-Profit</div><h4 class="cs-card__title">Global Donor Registry</h4><p class="cs-card__body">Built a multilingual donor-matching platform for DKMS, supporting registrations across five countries and integrating with laboratory LIMS systems.</p><span class="cs-card__tag">Custom Software</span></div>\n' +
'<div class="cs-card"><div class="cs-card__sector">Insurance</div><h4 class="cs-card__title">DevOps Transformation</h4><p class="cs-card__body">Introduced CI/CD pipelines, infrastructure-as-code and automated testing for a life insurer, compressing release cycles from monthly to daily.</p><span class="cs-card__tag">Cloud &amp; DevOps</span></div>\n' +
'<div class="cs-card"><div class="cs-card__sector">Retail Banking</div><h4 class="cs-card__title">QA Centre of Excellence</h4><p class="cs-card__body">Established a QA CoE for a retail bank, delivering an automation framework that achieved 85% regression coverage and cut UAT duration by 60%.</p><span class="cs-card__tag">Quality Assurance</span></div>\n' +
'</div></div>\n' +
'</div>\n' +
'<div class="testi-ticker">\n' +
'<div class="testi-ticker__label">What Clients Say</div>\n' +
'<div class="testi-ticker__heading">Trusted by Teams Who <em>Deliver</em></div>\n' +
'<div class="testi-track-wrap"><div class="testi-track" id="testiTrack">\n' +
'<div class="testi-item"><div class="testi-item__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-item__quote">Plus3 embedded seamlessly into our squad. Within two weeks they were leading stand-ups and shipping features independently.</p><div class="testi-item__role">Head of Engineering</div><div class="testi-item__company">Major South African Bank</div></div>\n' +
'<div class="testi-item"><div class="testi-item__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-item__quote">Andrew\'s team brought a level of rigour we hadn\'t experienced before. They challenged our assumptions in the best possible way.</p><div class="testi-item__role">CTO</div><div class="testi-item__company">Private Healthcare Group</div></div>\n' +
'<div class="testi-item"><div class="testi-item__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-item__quote">We\'ve worked with other consultancies. Plus3 is the only one that genuinely felt like an extension of our own team.</p><div class="testi-item__role">VP Technology</div><div class="testi-item__company">Global Automotive OEM</div></div>\n' +
'<div class="testi-item"><div class="testi-item__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-item__quote">The QA framework they built has saved us more hours than we can count. Our releases are finally something to look forward to.</p><div class="testi-item__role">Delivery Manager</div><div class="testi-item__company">Retail Banking Group</div></div>\n' +
'<div class="testi-item"><div class="testi-item__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-item__quote">Plus3 embedded seamlessly into our squad. Within two weeks they were leading stand-ups and shipping features independently.</p><div class="testi-item__role">Head of Engineering</div><div class="testi-item__company">Major South African Bank</div></div>\n' +
'<div class="testi-item"><div class="testi-item__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-item__quote">Andrew\'s team brought a level of rigour we hadn\'t experienced before. They challenged our assumptions in the best possible way.</p><div class="testi-item__role">CTO</div><div class="testi-item__company">Private Healthcare Group</div></div>\n' +
'<div class="testi-item"><div class="testi-item__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-item__quote">We\'ve worked with other consultancies. Plus3 is the only one that genuinely felt like an extension of our own team.</p><div class="testi-item__role">VP Technology</div><div class="testi-item__company">Global Automotive OEM</div></div>\n' +
'<div class="testi-item"><div class="testi-item__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div><p class="testi-item__quote">The QA framework they built has saved us more hours than we can count. Our releases are finally something to look forward to.</p><div class="testi-item__role">Delivery Manager</div><div class="testi-item__company">Retail Banking Group</div></div>\n' +
'</div></div>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'</section>\n' +
'<section class="section section--grey" id="engagement" aria-labelledby="engagement-heading">\n' +
'<div class="container">\n' +
'<div class="sec-header on-grey">\n' +
'<div class="sec-label">How We Work</div>\n' +
'<div class="green-bar" aria-hidden="true"></div>\n' +
'<h2 class="sec-heading" id="engagement-heading">Engagement Models Built for <em>Flexibility</em></h2>\n' +
'<p class="sec-body">Whether you need a single expert or a full delivery team, we have a model that fits.</p>\n' +
'</div>\n' +
'<div class="models__grid" role="list">\n' +
'<div class="model-card" role="listitem"><div class="model-card__num">01</div><h3 class="model-card__title">Staff Augmentation</h3><p class="model-card__body">Senior specialists placed directly into your team on a time-and-materials basis. Ideal for filling skill gaps or scaling up for a sprint.</p></div>\n' +
'<div class="model-card" role="listitem"><div class="model-card__num">02</div><h3 class="model-card__title">Project-Based</h3><p class="model-card__body">Fixed-scope delivery with a defined outcome, timeline and budget. Best for greenfield builds or discrete transformation initiatives.</p></div>\n' +
'<div class="model-card" role="listitem"><div class="model-card__num">03</div><h3 class="model-card__title">Retained Advisory</h3><p class="model-card__body">A senior technology advisor on retainer — available for architecture reviews, board-level input and fractional CTO work.</p></div>\n' +
'<div class="model-card" role="listitem"><div class="model-card__num">04</div><h3 class="model-card__title">Managed Squad</h3><p class="model-card__body">A fully managed, cross-functional delivery team including PM, engineers, QA and DevOps — operating as a product team within your organisation.</p></div>\n' +
'</div>\n' +
'</div>\n' +
'</section>\n' +
'<section class="clients-section" aria-label="Our clients">\n' +
'<div class="container">\n' +
'<div class="sec-label" style="text-align:center">Trusted By</div>\n' +
'<div class="green-bar" aria-hidden="true" style="margin-inline:auto"></div>\n' +
'<div class="clients-carousel">\n' +
'<div class="clients-track" aria-label="Client logos">' + carouselImgs + '</div>\n' +
'</div>\n' +
'</div>\n' +
'</section>\n' +
'<section class="kickstart" aria-labelledby="kickstart-heading">\n' +
'<div class="container">\n' +
'<div class="kickstart__inner">\n' +
'<div>\n' +
'<div class="sec-label on-grey" style="color:#9dcc9d">Get Started</div>\n' +
'<div class="green-bar" style="background:#9dcc9d" aria-hidden="true"></div>\n' +
'<h2 class="sec-heading" id="kickstart-heading" style="color:#EEF3EF">Kickstart Your <em style="color:#9dcc9d">Journey</em></h2>\n' +
'<p class="sec-body" style="color:var(--text-muted-on-grey)">Getting started is simpler than you think. Here\'s how we move from first conversation to first delivery.</p>\n' +
'<div class="kickstart__steps">\n' +
'<div class="kickstart__step"><div class="kickstart__step-num">01</div><div><div class="kickstart__step-title">Discovery Call</div><div class="kickstart__step-body">A 30-minute conversation to understand your challenge, your team and what success looks like for you.</div></div></div>\n' +
'<div class="kickstart__step"><div class="kickstart__step-num">02</div><div><div class="kickstart__step-title">Proposal &amp; Fit</div><div class="kickstart__step-body">We craft a tailored engagement proposal — scope, team, timeline and investment. No templates, no fluff.</div></div></div>\n' +
'<div class="kickstart__step"><div class="kickstart__step-num">03</div><div><div class="kickstart__step-title">Kickoff &amp; Embed</div><div class="kickstart__step-body">We onboard fast, align with your team and start delivering value within the first sprint.</div></div></div>\n' +
'</div>\n' +
'<div class="kickstart__cta">\n' +
'<a href="#contact" class="btn btn--green">Book a Discovery Call</a>\n' +
'<a href="https://wa.me/27822635227" class="btn btn--outline" style="color:#EEF3EF;border-color:rgba(238,243,239,0.4)" target="_blank" rel="noopener">WhatsApp Us</a>\n' +
'</div>\n' +
'</div>\n' +
'<div class="kickstart__visual"><img src="' + heroUrl + '" alt="Team collaboration" loading="lazy" width="600" height="500" style="object-fit:cover;height:500px"></div>\n' +
'</div>\n' +
'</div>\n' +
'</section>\n' +
'<div class="cta-band" role="region" aria-label="Call to action">\n' +
'<div class="container cta-band__inner">\n' +
'<div>\n' +
'<h2 class="cta-band__heading">Ready to Build Something That Lasts?</h2>\n' +
'<p class="cta-band__sub">Let\'s have a straight conversation about your technology challenges and whether we\'re the right fit to solve them.</p>\n' +
'</div>\n' +
'<div style="display:flex;gap:1rem;flex-wrap:wrap">\n' +
'<a href="#contact" class="btn" style="background:#EEF3EF;color:var(--green);border:2px solid #EEF3EF;font-weight:700">Get in Touch</a>\n' +
'<a href="https://wa.me/27822635227" class="btn btn--outline" target="_blank" rel="noopener">WhatsApp</a>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'<section class="contact-section" id="contact" aria-labelledby="contact-heading">\n' +
'<div class="container">\n' +
'<div class="sec-header">\n' +
'<div class="sec-label">Contact Us</div>\n' +
'<div class="green-bar" aria-hidden="true"></div>\n' +
'<h2 class="sec-heading" id="contact-heading">Let\'s Start a <em>Conversation</em></h2>\n' +
'<p class="sec-body">No hard sell. Just a straight conversation about your challenges and how we might help.</p>\n' +
'</div>\n' +
'<div class="contact__grid">\n' +
'<div>\n' +
'<div class="contact__info">\n' +
'<div class="contact__item"><div class="contact__item-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/></svg></div><div><div class="contact__item-label">Phone</div><div class="contact__item-value"><a href="tel:+27822635227">+27 82 263 5227</a><br><a href="tel:+27689397311">+27 68 939 7311</a></div></div></div>\n' +
'<div class="contact__item"><div class="contact__item-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div><div><div class="contact__item-label">Email</div><div class="contact__item-value"><a href="mailto:info@plus3.co.za">info@plus3.co.za</a></div></div></div>\n' +
'<div class="contact__item"><div class="contact__item-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div><div><div class="contact__item-label">Address</div><div class="contact__item-value">50 Christo Avenue, Olivedale<br>Johannesburg, 2188</div></div></div>\n' +
'<div class="contact__item"><div class="contact__item-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></div><div><div class="contact__item-label">LinkedIn</div><div class="contact__item-value"><a href="https://www.linkedin.com/company/plus3group/" target="_blank" rel="noopener">plus3group</a></div></div></div>\n' +
'</div>\n' +
'</div>\n' +
'<div class="contact-form">\n' +
'<form id="contactForm" novalidate>\n' +
'<div class="form-row">\n' +
'<div class="form-group"><label for="firstName">First Name</label><input type="text" id="firstName" name="firstName" placeholder="Jane" required autocomplete="given-name"></div>\n' +
'<div class="form-group"><label for="lastName">Last Name</label><input type="text" id="lastName" name="lastName" placeholder="Smith" required autocomplete="family-name"></div>\n' +
'</div>\n' +
'<div class="form-group"><label for="email">Email Address</label><input type="email" id="email" name="email" placeholder="jane@company.co.za" required autocomplete="email"></div>\n' +
'<div class="form-group"><label for="company">Company</label><input type="text" id="company" name="company" placeholder="Your Organisation" autocomplete="organization"></div>\n' +
'<div class="form-group"><label for="service">Service of Interest</label>\n' +
'<select id="service" name="service">\n' +
'<option value="">Select a service...</option>\n' +
'<option>Technology Consulting</option>\n' +
'<option>Custom Software Development</option>\n' +
'<option>Team Augmentation</option>\n' +
'<option>Cloud &amp; DevOps</option>\n' +
'<option>Quality Assurance</option>\n' +
'<option>Delivery Enablement</option>\n' +
'<option>Not sure yet</option>\n' +
'</select>\n' +
'</div>\n' +
'<div class="form-group"><label for="message">Message</label><textarea id="message" name="message" rows="4" placeholder="Tell us about your challenge or project..." required></textarea></div>\n' +
'<button type="submit" class="btn btn--green" style="width:100%;justify-content:center" id="submitBtn">Send Message</button>\n' +
'<div id="formStatus" role="status" aria-live="polite" style="margin-top:1rem;font-size:var(--text-sm);text-align:center"></div>\n' +
'</form>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'</section>\n' +
'</main>\n' +
'<footer role="contentinfo">\n' +
'<div class="container">\n' +
'<div class="footer__inner">\n' +
'<div class="footer__brand">\n' +
'<img src="' + logoUrl + '" alt="Plus3 Solutions" width="120" height="36">\n' +
'<p class="footer__tagline">Tech talent to bring your ideas to life. Johannesburg-based, globally experienced.</p>\n' +
'</div>\n' +
'<div>\n' +
'<div class="footer__col-title">Services</div>\n' +
'<nav class="footer__links" aria-label="Services links">\n' +
'<a href="#services">Technology Consulting</a>\n' +
'<a href="#services">Custom Software</a>\n' +
'<a href="#services">Team Augmentation</a>\n' +
'<a href="#services">Cloud &amp; DevOps</a>\n' +
'<a href="#services">Quality Assurance</a>\n' +
'</nav>\n' +
'</div>\n' +
'<div>\n' +
'<div class="footer__col-title">Company</div>\n' +
'<nav class="footer__links" aria-label="Company links">\n' +
'<a href="#about">About</a>\n' +
'<a href="#why">Why Plus3</a>\n' +
'<a href="#engagement">Engagement</a>\n' +
'<a href="#contact">Contact</a>\n' +
'<a href="https://wa.me/27822635227" target="_blank" rel="noopener">WhatsApp</a>\n' +
'</nav>\n' +
'</div>\n' +
'</div>\n' +
'<div class="footer__bottom">\n' +
'<div class="footer__copy">&copy; 2025 Plus3 Solutions (Pty) Ltd. All rights reserved. Registered in South Africa.</div>\n' +
'<div class="footer__social">\n' +
'<a href="https://www.linkedin.com/company/plus3group/" target="_blank" rel="noopener" aria-label="Plus3 on LinkedIn"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>\n' +
'<a href="https://wa.me/27822635227" target="_blank" rel="noopener" aria-label="Plus3 on WhatsApp"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></a>\n' +
'</div>\n' +
'</div>\n' +
'</div>\n' +
'</footer>\n' +
'<script>\n' +
'(function(){\n' +
'var nav=document.getElementById("nav");\n' +
'var hamburger=document.getElementById("hamburger");\n' +
'var mobileMenu=document.getElementById("mobileMenu");\n' +
'window.addEventListener("scroll",function(){nav.classList.toggle("scrolled",window.scrollY>20);},{passive:true});\n' +
'hamburger.addEventListener("click",function(){var open=mobileMenu.classList.toggle("open");hamburger.setAttribute("aria-expanded",open);});\n' +
'window.closeMobile=function(){mobileMenu.classList.remove("open");hamburger.setAttribute("aria-expanded","false");};\n' +
'document.addEventListener("keydown",function(e){if(e.key==="Escape")window.closeMobile();});\n' +
'var csPrev=document.getElementById("csPrev");\n' +
'var csNext=document.getElementById("csNext");\n' +
'var csTrack=document.getElementById("csTrack");\n' +
'var csPage=0;\n' +
'var csTotal=2;\n' +
'function csShow(p){\n' +
'csPage=Math.max(0,Math.min(p,csTotal-1));\n' +
'var cards=csTrack.querySelectorAll(".cs-card");\n' +
'var perPage=window.innerWidth<560?1:window.innerWidth<900?2:3;\n' +
'cards.forEach(function(c,i){c.style.display=(i>=csPage*perPage&&i<(csPage+1)*perPage)?"flex":"none";});\n' +
'csPrev.disabled=csPage===0;\n' +
'csNext.disabled=csPage===csTotal-1;\n' +
'}\n' +
'csShow(0);\n' +
'csPrev.addEventListener("click",function(){csShow(csPage-1);});\n' +
'csNext.addEventListener("click",function(){csShow(csPage+1);});\n' +
'window.addEventListener("resize",function(){csShow(csPage);});\n' +
'var contactForm=document.getElementById("contactForm");\n' +
'if(contactForm){\n' +
'contactForm.addEventListener("submit",function(e){\n' +
'e.preventDefault();\n' +
'var btn=document.getElementById("submitBtn");\n' +
'var status=document.getElementById("formStatus");\n' +
'btn.disabled=true;btn.textContent="Sending...";\n' +
'var data={firstName:contactForm.firstName.value,lastName:contactForm.lastName.value,email:contactForm.email.value,company:contactForm.company.value,service:contactForm.service.value,message:contactForm.message.value};\n' +
'fetch("https://formspree.io/f/xpwzgvkj",{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},body:JSON.stringify(data)})\n' +
'.then(function(r){return r.json();})\n' +
'.then(function(d){\n' +
'if(d.ok||d.next==="thanks"){status.style.color="var(--green)";status.textContent="Message sent! We\'ll be in touch shortly.";contactForm.reset();}\n' +
'else{status.style.color="#c0392b";status.textContent="Something went wrong. Please email info@plus3.co.za directly.";}\n' +
'btn.disabled=false;btn.textContent="Send Message";\n' +
'})\n' +
'.catch(function(){status.style.color="#c0392b";status.textContent="Network error. Please email info@plus3.co.za directly.";btn.disabled=false;btn.textContent="Send Message";});\n' +
'});\n' +
'}\n' +
'})();\n' +
'<\/script>\n' +
'</body>\n' +
'</html>';\n' +
'}\n'
