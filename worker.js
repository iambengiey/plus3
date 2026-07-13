// ============================================================
// Plus3 Solutions — Cloudflare Worker (self-contained, no bundler needed)
// Deploy via Cloudflare dashboard or: wrangler deploy
// ============================================================

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Plus3 Solutions | Professional Technology &amp; Consulting Services</title>
  <meta name="description" content="Plus3 Solutions delivers expert technology consulting, bespoke software development, staff augmentation, and DevOps services. Born from 15 years of international experience, we partner with businesses across South Africa.">
  <meta name="keywords" content="technology consulting, software development, staff augmentation, DevOps, FinOps, MLOps, South Africa, Johannesburg, outsourcing, IT solutions, Plus3">
  <meta name="author" content="Plus3 Solutions">
  <meta property="og:title" content="Plus3 Solutions | Professional Technology &amp; Consulting Services">
  <meta property="og:description" content="Dynamic solutions to meet your business needs. 15 years of international consulting experience.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://plus3.co.za">
  <link rel="canonical" href="https://plus3.co.za">
  <link rel="alternate" hreflang="en-za" href="https://plus3.co.za">
  <link rel="alternate" hreflang="en" href="https://plus3.co.za">
  <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=satoshi@300,400,500,700&display=swap" rel="stylesheet">

  <style>
    /* ── Design tokens ── */
    :root {
      --text-xs:   clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem);
      --text-sm:   clamp(0.875rem, 0.8rem  + 0.35vw, 1rem);
      --text-base: clamp(1rem,     0.95rem + 0.25vw, 1.125rem);
      --text-lg:   clamp(1.125rem, 1rem    + 0.75vw, 1.5rem);
      --text-xl:   clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem);
      --text-2xl:  clamp(2rem,     1.2rem  + 2.5vw,  3.5rem);

      /* Light mode */
      --bg:             #f5f6f8;
      --surface:        #ffffff;
      --surface-2:      #f9fafb;
      --surface-offset: #eef0f4;
      --divider:        #d4d8e2;
      --border:         #c8cdd9;
      --text:           #0f1423;
      --text-muted:     #5a6278;
      --text-faint:     #a0a8bc;
      --text-inverse:   #f8f9fc;
      --primary:        #007b88;
      --primary-hover:  #005f6a;
      --primary-hi:     #cce8ec;
      --shadow-sm: 0 1px 3px rgb(15 20 35 / 0.07);
      --shadow-md: 0 4px 16px rgb(15 20 35 / 0.09), 0 2px 6px rgb(15 20 35 / 0.06);
      --shadow-lg: 0 12px 40px rgb(15 20 35 / 0.13), 0 4px 12px rgb(15 20 35 / 0.08);
      --shadow-glow: 0 0 40px rgb(0 123 136 / 0.15);

      --nav-height: 72px;
      --radius-sm: 0.375rem; --radius-md: 0.5rem; --radius-lg: 0.75rem;
      --radius-xl: 1rem; --radius-2xl: 1.5rem; --radius-full: 9999px;
      --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
      --t-fast: 180ms; --t-slow: 380ms;
      --content-wide: 1240px; --content-default: 960px;
      --font-display: 'Cabinet Grotesk', 'Helvetica Neue', sans-serif;
      --font-body:    'Satoshi', 'Inter', sans-serif;
    }

    /* Dark mode — system auto-detect only, no JS toggle */
    @media (prefers-color-scheme: dark) {
      :root {
        --bg:             #0a0d15;
        --surface:        #0f1320;
        --surface-2:      #131828;
        --surface-offset: #161c2e;
        --divider:        #232b44;
        --border:         #2d3655;
        --text:           #e8eaf2;
        --text-muted:     #8892b0;
        --text-faint:     #4e5a78;
        --text-inverse:   #0a0d15;
        --primary:        #38b4c4;
        --primary-hover:  #5dcad7;
        --primary-hi:     #1a3040;
        --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.3);
        --shadow-md: 0 4px 16px rgb(0 0 0 / 0.45);
        --shadow-lg: 0 12px 40px rgb(0 0 0 / 0.6);
        --shadow-glow: 0 0 60px rgb(56 180 196 / 0.18);
      }
    }

    /* ── Reset ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html {
      -webkit-text-size-adjust: none; text-size-adjust: none;
      -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility;
      scroll-behavior: smooth; scroll-padding-top: var(--nav-height);
    }
    body {
      min-height: 100dvh; font-family: var(--font-body); font-size: var(--text-base);
      color: var(--text); background: var(--bg); overflow-x: hidden; line-height: 1.65;
    }
    img, svg { display: block; max-width: 100%; }
    ul, ol { list-style: none; }
    input, button, textarea, select { font: inherit; color: inherit; }
    h1, h2, h3, h4 { text-wrap: balance; line-height: 1.1; }
    p, li { text-wrap: pretty; max-width: 70ch; }
    ::selection { background: rgb(0 123 136 / 0.18); }
    :focus-visible { outline: 2px solid var(--primary); outline-offset: 3px; border-radius: var(--radius-sm); }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
    }
    button { cursor: pointer; background: none; border: none; }
    a, button { transition: color var(--t-fast) var(--ease-out), background var(--t-fast) var(--ease-out), border-color var(--t-fast) var(--ease-out), opacity var(--t-fast) var(--ease-out); }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border-width: 0; }

    /* ── Skip link ── */
    .skip-link { position: fixed; top: 1rem; left: 1rem; padding: 0.75rem 1.5rem; background: var(--primary); color: var(--text-inverse); border-radius: var(--radius-md); font-weight: 700; z-index: 1000; transform: translateY(-200%); transition: transform var(--t-fast); }
    .skip-link:focus { transform: translateY(0); }

    /* ── Layout ── */
    .container { max-width: var(--content-wide); margin-inline: auto; padding-inline: clamp(1rem, 4vw, 4rem); }
    .container--narrow { max-width: var(--content-default); margin-inline: auto; padding-inline: clamp(1rem, 4vw, 4rem); }
    .section { padding-block: clamp(4rem, 8vw, 8rem); }
    .section--alt { background: var(--surface); }

    /* ── CSS-native scroll reveal (no JS, no layout shift) ── */
    .fade-in { opacity: 1; }
    @supports (animation-timeline: scroll()) {
      .fade-in { opacity: 0; animation: reveal-fade linear both; animation-timeline: view(); animation-range: entry 0% entry 80%; }
    }
    @keyframes reveal-fade { to { opacity: 1; } }
    .reveal-up { opacity: 1; }
    @supports (animation-timeline: scroll()) {
      .reveal-up { clip-path: inset(30% 0 0 0); opacity: 0; animation: reveal-up linear both; animation-timeline: view(); animation-range: entry 0% entry 72%; }
    }
    @keyframes reveal-up { to { clip-path: inset(0 0 0 0); opacity: 1; } }

    /* ══════════════════════════════════════════
       NAVIGATION
    ══════════════════════════════════════════ */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; height: var(--nav-height); z-index: 100;
      background: rgb(from var(--bg) r g b / 0.85);
      backdrop-filter: blur(16px) saturate(160%); -webkit-backdrop-filter: blur(16px) saturate(160%);
      border-bottom: 1px solid rgb(from var(--border) r g b / 0.5);
      transition: box-shadow var(--t-slow) var(--ease-out);
    }
    .nav.scrolled { box-shadow: var(--shadow-md); }
    .nav__inner { max-width: var(--content-wide); margin-inline: auto; padding-inline: clamp(1rem, 4vw, 4rem); height: 100%; display: flex; align-items: center; justify-content: space-between; gap: 2rem; }
    .nav__logo { display: flex; align-items: center; gap: 0.75rem; text-decoration: none; color: var(--text); flex-shrink: 0; }
    .nav__logo-text { font-family: var(--font-display); font-weight: 900; font-size: var(--text-lg); letter-spacing: -0.02em; }
    .nav__logo-text span { color: var(--primary); }
    .nav__links { display: flex; align-items: center; gap: 0.25rem; list-style: none; }
    .nav__links a { padding: 0.5rem 1rem; font-size: var(--text-sm); font-weight: 500; color: var(--text-muted); text-decoration: none; border-radius: var(--radius-md); }
    .nav__links a:hover { color: var(--text); background: var(--surface-offset); }
    .nav__actions { display: flex; align-items: center; gap: 0.75rem; }
    .btn-cta-nav { padding: 0.5rem 1.25rem; background: var(--primary); color: var(--text-inverse) !important; border-radius: var(--radius-md); font-size: var(--text-sm); font-weight: 600; text-decoration: none; }
    .btn-cta-nav:hover { background: var(--primary-hover); }
    .nav__hamburger { display: none; width: 44px; height: 44px; align-items: center; justify-content: center; color: var(--text); border-radius: var(--radius-md); }
    .nav__hamburger:hover { background: var(--surface-offset); }
    .nav__mobile { display: none; }
    @media (max-width: 768px) {
      .nav__links, .nav__actions .btn-cta-nav { display: none; }
      .nav__hamburger { display: flex; }
      .nav__mobile {
        position: fixed; top: var(--nav-height); left: 0; right: 0; bottom: 0;
        background: var(--bg); z-index: 99; padding: 1.5rem;
        display: flex; flex-direction: column; gap: 0.5rem;
        transform: translateX(100%); transition: transform var(--t-slow) var(--ease-out);
      }
      .nav__mobile.open { transform: translateX(0); }
      .nav__mobile a { display: block; padding: 1rem; font-size: var(--text-lg); font-weight: 600; color: var(--text); text-decoration: none; border-radius: var(--radius-lg); }
      .nav__mobile a:hover { background: var(--surface-offset); }
      .nav__mobile .btn-cta-mobile { background: var(--primary); color: var(--text-inverse) !important; text-align: center; margin-top: 1rem; }
    }

    /* ══════════════════════════════════════════
       HERO
    ══════════════════════════════════════════ */
    .hero {
      min-height: 100dvh; display: flex; flex-direction: column; justify-content: center;
      padding-top: calc(var(--nav-height) + 4rem); padding-bottom: 6rem;
      position: relative; overflow: hidden;
    }
    .hero__bg {
      position: absolute; inset: 0; z-index: 0;
      background:
        radial-gradient(ellipse 80% 60% at 70% 40%, rgb(0 123 136 / 0.07) 0%, transparent 60%),
        radial-gradient(ellipse 60% 80% at 10% 80%, rgb(0 80 120 / 0.05) 0%, transparent 50%);
    }
    .hero__grid {
      position: absolute; inset: 0;
      background-image: linear-gradient(rgb(from var(--border) r g b / 0.3) 1px, transparent 1px), linear-gradient(90deg, rgb(from var(--border) r g b / 0.3) 1px, transparent 1px);
      background-size: 64px 64px;
      mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%);
    }
    .hero__inner { position: relative; z-index: 1; }
    .hero__badge {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.4rem 1rem; background: rgb(from var(--primary) r g b / 0.08);
      border: 1px solid rgb(from var(--primary) r g b / 0.2);
      border-radius: var(--radius-full); font-size: var(--text-xs);
      font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--primary); margin-bottom: 1.5rem;
    }
    .hero__badge-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--primary); animation: pulse 2s ease-in-out infinite; }
    @keyframes pulse { 0%,100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(0.8); } }
    .hero__heading {
      font-family: var(--font-display); font-weight: 900;
      font-size: clamp(2.8rem, 1rem + 6vw, 6.5rem);
      line-height: 1.0; letter-spacing: -0.03em;
      color: var(--text); margin-bottom: 1.5rem;
    }
    .hero__heading em { font-style: normal; color: var(--primary); }
    .hero__sub { font-size: var(--text-lg); color: var(--text-muted); max-width: 52ch; line-height: 1.6; margin-bottom: 2.5rem; }
    .hero__ctas { display: flex; gap: 1rem; flex-wrap: wrap; }
    .btn-primary {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 1rem 2rem; background: var(--primary); color: var(--text-inverse) !important;
      border-radius: var(--radius-lg); font-size: var(--text-sm); font-weight: 700; text-decoration: none;
      box-shadow: 0 1px 3px rgb(0 123 136 / 0.3), 0 4px 12px rgb(0 123 136 / 0.15);
    }
    .btn-primary:hover { background: var(--primary-hover); transform: translateY(-1px); }
    .btn-primary:active { transform: translateY(0); }
    .btn-ghost { display: inline-flex; align-items: center; gap: 0.5rem; padding: 1rem 2rem; color: var(--text-muted); border-radius: var(--radius-lg); font-size: var(--text-sm); font-weight: 600; text-decoration: none; border: 1px solid var(--border); }
    .btn-ghost:hover { color: var(--text); background: var(--surface-offset); }
    .hero__stats { display: flex; gap: 3rem; margin-top: 4rem; padding-top: 3rem; border-top: 1px solid rgb(from var(--divider) r g b / 0.7); flex-wrap: wrap; }
    .hero__stat-value { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 900; color: var(--text); line-height: 1; }
    .hero__stat-label { font-size: var(--text-xs); color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.06em; margin-top: 0.25rem; }

    /* ── Ticker ── */
    .ticker-section { padding-block: 3rem; border-top: 1px solid var(--divider); border-bottom: 1px solid var(--divider); overflow: hidden; background: var(--surface); }
    .ticker-label { text-align: center; font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-faint); margin-bottom: 2rem; }
    .ticker-track { display: flex; gap: 4rem; align-items: center; animation: ticker 28s linear infinite; width: max-content; }
    .ticker-track:hover { animation-play-state: paused; }
    @keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .ticker-item { font-family: var(--font-display); font-size: var(--text-sm); font-weight: 700; color: var(--text-faint); white-space: nowrap; opacity: 0.55; letter-spacing: 0.03em; flex-shrink: 0; }
    .ticker-sep { color: var(--primary); opacity: 0.4; flex-shrink: 0; font-weight: 900; }

    /* ── Section helpers ── */
    .sec-label { font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary); font-weight: 600; margin-bottom: 0.75rem; }
    .sec-heading { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 900; letter-spacing: -0.025em; line-height: 1.05; }
    .sec-body { color: var(--text-muted); max-width: 58ch; margin-top: 1rem; line-height: 1.7; }
    .sec-header { margin-bottom: clamp(3rem, 5vw, 4rem); }

    /* ══════════════════════════════════════════
       ABOUT
    ══════════════════════════════════════════ */
    .about__grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 6vw, 6rem); align-items: center; }
    @media (max-width: 768px) { .about__grid { grid-template-columns: 1fr; } }
    .about__body { color: var(--text-muted); line-height: 1.75; margin-bottom: 1rem; }
    .about__quote { border-left: 3px solid var(--primary); padding: 1rem 1.5rem; margin-block: 2rem; background: rgb(from var(--primary) r g b / 0.04); border-radius: 0 var(--radius-md) var(--radius-md) 0; }
    .about__quote q { font-style: italic; color: var(--text); line-height: 1.7; display: block; margin-bottom: 0.5rem; }
    .about__quote cite { font-size: var(--text-xs); color: var(--text-muted); font-style: normal; text-transform: uppercase; letter-spacing: 0.06em; }
    .about__visual { background: linear-gradient(145deg, var(--surface) 0%, var(--surface-offset) 100%); border-radius: var(--radius-2xl); padding: 2.5rem; border: 1px solid rgb(from var(--border) r g b / 0.6); box-shadow: var(--shadow-lg); }
    .about__visual-num { font-family: var(--font-display); font-size: clamp(4rem, 8vw, 7rem); font-weight: 900; line-height: 1; color: rgb(from var(--primary) r g b / 0.12); margin-bottom: 1rem; }
    .about__visual-title { font-family: var(--font-display); font-size: var(--text-xl); font-weight: 700; color: var(--text); line-height: 1.15; }
    .about__visual-sub { color: var(--text-muted); font-size: var(--text-sm); margin-top: 0.75rem; }
    .about__values { display: flex; flex-direction: column; gap: 1.25rem; margin-top: 2rem; }
    .about__value { display: flex; align-items: flex-start; gap: 1rem; }
    .about__value-dot { width: 10px; height: 10px; border-radius: 50%; background: var(--primary); flex-shrink: 0; margin-top: 0.35em; }
    .about__value-label { font-weight: 700; font-size: var(--text-sm); color: var(--text); }
    .about__value-desc { font-size: var(--text-sm); color: var(--text-muted); margin-top: 0.25rem; }

    /* ══════════════════════════════════════════
       SERVICES
    ══════════════════════════════════════════ */
    .services__grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr)); gap: 1.5rem; }
    .service-card { background: var(--bg); border: 1px solid rgb(from var(--border) r g b / 0.7); border-radius: var(--radius-xl); padding: 2rem; transition: transform var(--t-slow) var(--ease-out), box-shadow var(--t-slow) var(--ease-out), border-color var(--t-slow) var(--ease-out); position: relative; overflow: hidden; }
    .service-card::before { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, rgb(from var(--primary) r g b / 0.04) 0%, transparent 60%); opacity: 0; transition: opacity var(--t-slow); }
    .service-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-lg); border-color: rgb(from var(--primary) r g b / 0.25); }
    .service-card:hover::before { opacity: 1; }
    .service-card__icon { width: 48px; height: 48px; display: flex; align-items: center; justify-content: center; background: rgb(from var(--primary) r g b / 0.1); border-radius: var(--radius-lg); color: var(--primary); margin-bottom: 1.25rem; }
    .service-card__title { font-family: var(--font-display); font-size: var(--text-lg); font-weight: 800; margin-bottom: 0.75rem; }
    .service-card__body { font-size: var(--text-sm); color: var(--text-muted); line-height: 1.7; max-width: none; }
    .service-card__tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1.25rem; }
    .tag { padding: 0.25rem 0.75rem; background: rgb(from var(--primary) r g b / 0.08); color: var(--primary); border-radius: var(--radius-full); font-size: var(--text-xs); font-weight: 600; }

    /* ══════════════════════════════════════════
       HOW WE WORK
    ══════════════════════════════════════════ */
    .how__grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: clamp(3rem, 6vw, 6rem); align-items: start; }
    @media (max-width: 768px) { .how__grid { grid-template-columns: 1fr; } }
    .how__steps { display: flex; flex-direction: column; gap: 0.5rem; position: relative; }
    .how__steps::before { content: ''; position: absolute; left: 20px; top: 40px; bottom: 40px; width: 1px; background: var(--divider); }
    .how__step { display: flex; gap: 1.25rem; align-items: flex-start; padding: 1.5rem; border-radius: var(--radius-xl); transition: background var(--t-fast); position: relative; }
    .how__step:hover { background: var(--surface-offset); }
    .how__step-num { width: 40px; height: 40px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-full); font-family: var(--font-display); font-weight: 900; font-size: var(--text-sm); color: var(--text-muted); position: relative; z-index: 1; transition: all var(--t-fast); }
    .how__step:hover .how__step-num { background: var(--primary); color: var(--text-inverse); border-color: var(--primary); }
    .how__step-title { font-family: var(--font-display); font-size: var(--text-base); font-weight: 700; margin-bottom: 0.25rem; }
    .how__step-body { font-size: var(--text-sm); color: var(--text-muted); line-height: 1.6; max-width: none; }
    .how__visual { background: linear-gradient(145deg, var(--surface) 0%, var(--surface-offset) 100%); border-radius: var(--radius-2xl); padding: 2.5rem; border: 1px solid rgb(from var(--border) r g b / 0.6); box-shadow: var(--shadow-md), var(--shadow-glow); }
    .how__visual-title { font-family: var(--font-display); font-weight: 900; font-size: var(--text-xl); margin-bottom: 2rem; }
    .metric { margin-bottom: 1.5rem; }
    .metric__label { font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 600; }
    .metric__val { font-family: var(--font-display); font-weight: 900; font-size: var(--text-sm); color: var(--primary); float: right; margin-top: calc(-1 * var(--text-sm) - 0.5rem); }
    .metric__bar-wrap { height: 8px; background: var(--surface-offset); border-radius: var(--radius-full); overflow: hidden; }
    .metric__bar { height: 100%; background: linear-gradient(90deg, var(--primary), var(--primary-hover)); border-radius: var(--radius-full); transform-origin: left; animation: bar-grow 1.4s var(--ease-out) forwards; transform: scaleX(0); }
    .metric__bar--d1 { animation-delay: 0.15s; }
    .metric__bar--d2 { animation-delay: 0.3s; }
    .metric__bar--d3 { animation-delay: 0.45s; }
    @keyframes bar-grow { to { transform: scaleX(1); } }

    /* ══════════════════════════════════════════
       WHY PLUS3
    ══════════════════════════════════════════ */
    .why__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
    @media (max-width: 900px) { .why__grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 580px) { .why__grid { grid-template-columns: 1fr; } }
    .why-card { padding: 2rem; border: 1px solid rgb(from var(--border) r g b / 0.6); border-radius: var(--radius-xl); background: var(--surface); }
    .why-card__num { font-family: var(--font-display); font-size: clamp(3rem, 5vw, 4rem); font-weight: 900; color: rgb(from var(--primary) r g b / 0.12); line-height: 1; margin-bottom: 1rem; }
    .why-card__title { font-family: var(--font-display); font-weight: 800; font-size: var(--text-lg); margin-bottom: 0.75rem; }
    .why-card__body { font-size: var(--text-sm); color: var(--text-muted); line-height: 1.7; max-width: none; }

    /* ══════════════════════════════════════════
       CTA BAND
    ══════════════════════════════════════════ */
    .cta-band {
      padding-block: clamp(4rem, 7vw, 6rem);
      background: linear-gradient(135deg, var(--primary) 0%, var(--primary-hover) 100%);
      position: relative; overflow: hidden;
    }
    .cta-band::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgb(255 255 255 / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.04) 1px, transparent 1px); background-size: 40px 40px; }
    .cta-band__inner { position: relative; z-index: 1; text-align: center; }
    .cta-band__heading { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 900; color: #fff; margin-bottom: 1rem; letter-spacing: -0.02em; }
    .cta-band__sub { color: rgb(255 255 255 / 0.75); font-size: var(--text-base); margin-bottom: 2.5rem; max-width: 52ch; margin-inline: auto; }
    .cta-band__btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
    .btn-white { padding: 1rem 2rem; background: #fff; color: var(--primary) !important; border-radius: var(--radius-lg); font-size: var(--text-sm); font-weight: 700; text-decoration: none; }
    .btn-white:hover { background: rgb(255 255 255 / 0.92); }
    .btn-outline-white { padding: 1rem 2rem; border: 1px solid rgb(255 255 255 / 0.5); color: #fff !important; border-radius: var(--radius-lg); font-size: var(--text-sm); font-weight: 600; text-decoration: none; }
    .btn-outline-white:hover { background: rgb(255 255 255 / 0.1); border-color: rgb(255 255 255 / 0.7); }

    /* ══════════════════════════════════════════
       CONTACT
    ══════════════════════════════════════════ */
    .contact__grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(3rem, 5vw, 5rem); align-items: start; }
    @media (max-width: 768px) { .contact__grid { grid-template-columns: 1fr; } }
    .contact__heading { font-family: var(--font-display); font-size: var(--text-2xl); font-weight: 900; letter-spacing: -0.025em; margin-bottom: 1.5rem; }
    .contact__body { color: var(--text-muted); line-height: 1.7; margin-bottom: 2rem; }
    .contact__details { display: flex; flex-direction: column; gap: 1.25rem; }
    .contact__detail { display: flex; align-items: flex-start; gap: 1rem; }
    .contact__detail-icon { width: 40px; height: 40px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: rgb(from var(--primary) r g b / 0.08); border-radius: var(--radius-md); color: var(--primary); }
    .contact__detail-label { font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.07em; color: var(--text-faint); font-weight: 600; }
    .contact__detail-value { font-size: var(--text-sm); font-weight: 500; color: var(--text); margin-top: 0.2rem; }
    .form-wrap { background: var(--surface); border: 1px solid rgb(from var(--border) r g b / 0.6); border-radius: var(--radius-2xl); padding: 2.5rem; box-shadow: var(--shadow-md); }
    .form { display: flex; flex-direction: column; gap: 1.25rem; }
    .form__group { display: flex; flex-direction: column; gap: 0.5rem; }
    .form__label { font-size: var(--text-sm); font-weight: 600; color: var(--text); }
    .form__input, .form__select, .form__textarea { padding: 0.75rem 1rem; background: var(--surface-2); border: 1px solid rgb(from var(--border) r g b / 0.8); border-radius: var(--radius-md); font-size: var(--text-sm); color: var(--text); transition: border-color var(--t-fast), box-shadow var(--t-fast); }
    .form__input:focus, .form__select:focus, .form__textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgb(from var(--primary) r g b / 0.12); }
    .form__textarea { resize: vertical; min-height: 120px; }
    .form__row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem; }
    @media (max-width: 480px) { .form__row { grid-template-columns: 1fr; } }
    .btn-submit { padding: 1rem 2rem; background: var(--primary); color: var(--text-inverse) !important; border-radius: var(--radius-lg); font-size: var(--text-sm); font-weight: 700; border: none; cursor: pointer; }
    .btn-submit:hover { background: var(--primary-hover); }
    .form-success { display: none; text-align: center; padding: 2.5rem; }
    .form-success.show { display: block; }
    .form-success__icon { font-size: 3rem; margin-bottom: 1rem; }
    .form-success__title { font-family: var(--font-display); font-weight: 800; font-size: var(--text-xl); margin-bottom: 0.75rem; }
    .form-success__body { color: var(--text-muted); }

    /* ══════════════════════════════════════════
       FOOTER
    ══════════════════════════════════════════ */
    footer { background: var(--surface); border-top: 1px solid var(--divider); padding-block: 4rem; }
    .footer__inner { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 3rem; margin-bottom: 3rem; }
    @media (max-width: 768px) { .footer__inner { grid-template-columns: 1fr; gap: 2.5rem; } }
    .footer__brand { font-family: var(--font-display); font-weight: 900; font-size: var(--text-xl); letter-spacing: -0.02em; margin-bottom: 1rem; }
    .footer__brand span { color: var(--primary); }
    .footer__tagline { font-size: var(--text-sm); color: var(--text-muted); line-height: 1.65; max-width: 34ch; }
    .footer__col-title { font-family: var(--font-display); font-weight: 700; font-size: var(--text-sm); text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-faint); margin-bottom: 1.25rem; }
    .footer__links { display: flex; flex-direction: column; gap: 0.75rem; list-style: none; }
    .footer__links a { font-size: var(--text-sm); color: var(--text-muted); text-decoration: none; }
    .footer__links a:hover { color: var(--text); }
    .footer__bottom { display: flex; align-items: center; justify-content: space-between; padding-top: 2rem; border-top: 1px solid var(--divider); gap: 1rem; flex-wrap: wrap; }
    .footer__copy { font-size: var(--text-xs); color: var(--text-faint); }
    @media (max-width: 640px) { .footer__bottom { flex-direction: column; text-align: center; } }
  </style>
</head>
<body>
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- NAV -->
<nav class="nav" role="navigation" aria-label="Main navigation">
  <div class="nav__inner">
    <a href="#" class="nav__logo" aria-label="Plus3 Solutions home">
      <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect width="36" height="36" rx="8" fill="var(--primary)"/>
        <path d="M10 12h7c2.76 0 5 2.24 5 5s-2.24 5-5 5h-3v4H10V12z" fill="white"/>
        <path d="M14 16v4h3c1.1 0 2-.9 2-2s-.9-2-2-2h-3z" fill="var(--primary)"/>
        <text x="24" y="27" font-family="sans-serif" font-weight="900" font-size="10" fill="white">3</text>
      </svg>
      <span class="nav__logo-text">Plus<span>3</span></span>
    </a>
    <ul class="nav__links" role="list">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#how-we-work">How We Work</a></li>
      <li><a href="#why-plus3">Why Plus3</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div class="nav__actions">
      <a href="#contact" class="btn-cta-nav">Get in Touch</a>
      <button class="nav__hamburger" aria-label="Open menu" aria-expanded="false" id="hamburger">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </div>
</nav>
<div class="nav__mobile" role="dialog" aria-modal="true" aria-label="Mobile navigation" id="mobile-nav">
  <a href="#about" class="mobile-link">About</a>
  <a href="#services" class="mobile-link">Services</a>
  <a href="#how-we-work" class="mobile-link">How We Work</a>
  <a href="#why-plus3" class="mobile-link">Why Plus3</a>
  <a href="#contact" class="mobile-link">Contact</a>
  <a href="#contact" class="btn-cta-mobile mobile-link">Get in Touch &rarr;</a>
</div>

<main id="main-content">

  <!-- HERO -->
  <section class="hero" aria-labelledby="hero-h">
    <div class="hero__bg" aria-hidden="true"></div>
    <div class="hero__grid" aria-hidden="true"></div>
    <div class="container hero__inner">
      <div class="hero__badge">
        <span class="hero__badge-dot" aria-hidden="true"></span>
        Professional Technology Services &mdash; South Africa
      </div>
      <h1 class="hero__heading" id="hero-h">
        Dynamic solutions<br>to meet your<br><em>business needs</em>
      </h1>
      <p class="hero__sub">Born from 15 years of international consulting experience. We partner with your business to deliver technology, talent, and transformation &mdash; tailored precisely to your goals.</p>
      <div class="hero__ctas">
        <a href="#services" class="btn-primary">
          Explore our services
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="#contact" class="btn-ghost">Talk to us</a>
      </div>
      <div class="hero__stats">
        <div class="hero__stat"><div class="hero__stat-value">15+</div><div class="hero__stat-label">Years experience</div></div>
        <div class="hero__stat"><div class="hero__stat-value">4</div><div class="hero__stat-label">Core service pillars</div></div>
        <div class="hero__stat"><div class="hero__stat-value">100%</div><div class="hero__stat-label">Client-focused delivery</div></div>
        <div class="hero__stat"><div class="hero__stat-value">ZA</div><div class="hero__stat-label">Headquartered, globally capable</div></div>
      </div>
    </div>
  </section>

  <!-- TICKER -->
  <div class="ticker-section" aria-hidden="true">
    <p class="ticker-label">Trusted across industries</p>
    <div style="overflow:hidden;">
      <div class="ticker-track">
        <span class="ticker-item">Consulting</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Software Development</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Staff Augmentation</span><span class="ticker-sep">+</span>
        <span class="ticker-item">DevOps &amp; FinOps</span><span class="ticker-sep">+</span>
        <span class="ticker-item">MLOps</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Cloud Architecture</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Digital Transformation</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Technology Strategy</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Consulting</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Software Development</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Staff Augmentation</span><span class="ticker-sep">+</span>
        <span class="ticker-item">DevOps &amp; FinOps</span><span class="ticker-sep">+</span>
        <span class="ticker-item">MLOps</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Cloud Architecture</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Digital Transformation</span><span class="ticker-sep">+</span>
        <span class="ticker-item">Technology Strategy</span><span class="ticker-sep">+</span>
      </div>
    </div>
  </div>

  <!-- ABOUT -->
  <section class="section" id="about" aria-labelledby="about-h">
    <div class="container">
      <div class="about__grid">
        <div class="fade-in">
          <p class="sec-label">Who we are</p>
          <h2 class="sec-heading" id="about-h">Relationship-driven.<br>Results-focused.</h2>
          <p class="about__body" style="margin-top:1.5rem;">Plus3 was born out of 15 years of international consulting experience. Through deep financial and business knowledge, we have created a unique technology business that incentivises the best available skills while passing on maximum value to our clients.</p>
          <p class="about__body">We understand that every business is unique, with its own set of challenges and goals. That is why we foster strong partnerships &mdash; taking the time to deeply understand your organisation before delivering customised solutions that drive exceptional results.</p>
          <div class="about__quote">
            <q>The value of an idea lies in the using of it.</q>
            <cite>Thomas Edison</cite>
          </div>
          <a href="#contact" class="btn-primary">Start a conversation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
        </div>
        <div class="reveal-up">
          <div class="about__visual">
            <div class="about__visual-num" aria-hidden="true">P3</div>
            <div class="about__visual-title">Your partner in technology transformation</div>
            <div class="about__visual-sub">Work Central &mdash; Office Space, Bel Air Shopping Centre, Bellairs Dr, Northriding, Johannesburg, 2169</div>
            <div class="about__values">
              <div class="about__value"><div class="about__value-dot" aria-hidden="true"></div><div><div class="about__value-label">Incentive-aligned model</div><div class="about__value-desc">Our people are rewarded for delivering results, not just billing hours.</div></div></div>
              <div class="about__value"><div class="about__value-dot" aria-hidden="true"></div><div><div class="about__value-label">Deep partnership approach</div><div class="about__value-desc">We understand your organisation before proposing any solution.</div></div></div>
              <div class="about__value"><div class="about__value-dot" aria-hidden="true"></div><div><div class="about__value-label">Maximum client value</div><div class="about__value-desc">Every decision is optimised to deliver the best outcome for your business.</div></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SERVICES -->
  <section class="section section--alt" id="services" aria-labelledby="services-h">
    <div class="container">
      <div class="sec-header fade-in">
        <p class="sec-label">What we do</p>
        <h2 class="sec-heading" id="services-h">Four pillars of expert delivery</h2>
        <p class="sec-body">Whether you require outsourcing, custom software development, consulting, or operational best practice &mdash; we tailor a solution for you.</p>
      </div>
      <div class="services__grid">
        <article class="service-card fade-in">
          <div class="service-card__icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></div>
          <h3 class="service-card__title">Consulting</h3>
          <p class="service-card__body">Strategy, operational efficiencies, technology decisions, design and project planning. We help you navigate complexity and make high-confidence decisions that move your business forward.</p>
          <div class="service-card__tags"><span class="tag">Strategy</span><span class="tag">Technology Decisions</span><span class="tag">Project Planning</span></div>
        </article>
        <article class="service-card fade-in">
          <div class="service-card__icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg></div>
          <h3 class="service-card__title">Staff Augmentation</h3>
          <p class="service-card__body">Cost-effective, efficient, and flexible solutions for businesses to boost their teams with skilled professionals as and when they need it &mdash; without the overhead of permanent hiring.</p>
          <div class="service-card__tags"><span class="tag">Flexible Talent</span><span class="tag">Skilled Professionals</span><span class="tag">On-Demand</span></div>
        </article>
        <article class="service-card fade-in">
          <div class="service-card__icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></div>
          <h3 class="service-card__title">Custom Software Development</h3>
          <p class="service-card__body">Tailor-made software solutions that address specific business requirements. Our network of skilled experts collaborate closely with you to transform your vision into a robust, scalable reality.</p>
          <div class="service-card__tags"><span class="tag">Bespoke Build</span><span class="tag">Full-Stack</span><span class="tag">Scalable Architecture</span></div>
        </article>
        <article class="service-card fade-in">
          <div class="service-card__icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg></div>
          <h3 class="service-card__title">DevOps, FinOps &amp; MLOps</h3>
          <p class="service-card__body">A holistic approach to operations emphasising collaboration between development, infrastructure, cost management, and ML model deployment &mdash; delivered at scale.</p>
          <div class="service-card__tags"><span class="tag">DevOps</span><span class="tag">FinOps</span><span class="tag">MLOps</span><span class="tag">Cloud</span></div>
        </article>
      </div>
    </div>
  </section>

  <!-- HOW WE WORK -->
  <section class="section" id="how-we-work" aria-labelledby="how-h">
    <div class="container">
      <div class="sec-header fade-in">
        <p class="sec-label">Our approach</p>
        <h2 class="sec-heading" id="how-h">How we work with you</h2>
      </div>
      <div class="how__grid">
        <div class="how__steps" role="list">
          <div class="how__step fade-in" role="listitem"><div class="how__step-num" aria-hidden="true">01</div><div><div class="how__step-title">Discovery &amp; Understanding</div><div class="how__step-body">We invest time understanding your business, its unique challenges, and the outcomes you are trying to achieve before recommending any solution.</div></div></div>
          <div class="how__step fade-in" role="listitem"><div class="how__step-num" aria-hidden="true">02</div><div><div class="how__step-title">Tailored Solution Design</div><div class="how__step-body">We design a customised approach &mdash; selecting the right combination of consulting, talent, and technology services for your specific context.</div></div></div>
          <div class="how__step fade-in" role="listitem"><div class="how__step-num" aria-hidden="true">03</div><div><div class="how__step-title">Collaborative Execution</div><div class="how__step-body">Our network of experts works side by side with your teams, embedding in your culture and operating with full transparency throughout.</div></div></div>
          <div class="how__step fade-in" role="listitem"><div class="how__step-num" aria-hidden="true">04</div><div><div class="how__step-title">Continuous Improvement</div><div class="how__step-body">We measure outcomes, iterate on feedback, and constantly look for ways to increase the value we deliver to your business over time.</div></div></div>
        </div>
        <div class="how__visual reveal-up">
          <div class="how__visual-title">Delivery quality metrics</div>
          <div class="metric"><div class="metric__label">Client satisfaction</div><div class="metric__val">98%</div><div class="metric__bar-wrap"><div class="metric__bar" style="width:98%"></div></div></div>
          <div class="metric"><div class="metric__label">On-time delivery</div><div class="metric__val">94%</div><div class="metric__bar-wrap"><div class="metric__bar metric__bar--d1" style="width:94%"></div></div></div>
          <div class="metric"><div class="metric__label">Value-to-cost ratio</div><div class="metric__val">Top 5%</div><div class="metric__bar-wrap"><div class="metric__bar metric__bar--d2" style="width:90%"></div></div></div>
          <div class="metric"><div class="metric__label">Expert network coverage</div><div class="metric__val">Full-stack</div><div class="metric__bar-wrap"><div class="metric__bar metric__bar--d3" style="width:100%"></div></div></div>
          <div style="margin-top:2rem;padding-top:2rem;border-top:1px solid var(--divider);font-size:var(--text-xs);color:var(--text-faint);line-height:1.6;">Our business model uniquely incentivises delivery excellence and client satisfaction &mdash; ensuring every project gets the absolute best from our people.</div>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY PLUS3 -->
  <section class="section section--alt" id="why-plus3" aria-labelledby="why-h">
    <div class="container">
      <div class="sec-header fade-in">
        <p class="sec-label">Why choose us</p>
        <h2 class="sec-heading" id="why-h">The Plus3 difference</h2>
        <p class="sec-body">Our innovative business model focuses on core value drivers to deliver top-tier software services at an unbeatable value.</p>
      </div>
      <div class="why__grid">
        <div class="why-card fade-in"><div class="why-card__num" aria-hidden="true">01</div><h3 class="why-card__title">Proven International Experience</h3><p class="why-card__body">15+ years of international consulting experience underpins everything we do. We bring global best practices to your local context &mdash; without the international price tag.</p></div>
        <div class="why-card fade-in"><div class="why-card__num" aria-hidden="true">02</div><h3 class="why-card__title">Unique Incentive Model</h3><p class="why-card__body">Our people are uniquely incentivised to drive delivery, personal growth, and client satisfaction. This alignment ensures your project consistently gets the best effort and outcome.</p></div>
        <div class="why-card fade-in"><div class="why-card__num" aria-hidden="true">03</div><h3 class="why-card__title">Deep Financial &amp; Business Acumen</h3><p class="why-card__body">We go beyond pure technology. Our deep financial and business knowledge means we understand the commercial context of every solution we propose or build.</p></div>
        <div class="why-card fade-in"><div class="why-card__num" aria-hidden="true">04</div><h3 class="why-card__title">Relationship-Driven Culture</h3><p class="why-card__body">We don't transact &mdash; we partner. Every client relationship is built on genuine understanding, transparent communication, and long-term commitment to your success.</p></div>
        <div class="why-card fade-in"><div class="why-card__num" aria-hidden="true">05</div><h3 class="why-card__title">Flexible &amp; Scalable Delivery</h3><p class="why-card__body">From short-term specialist engagements to long-term embedded partnerships, we scale our involvement to match your needs and budget at any point in time.</p></div>
        <div class="why-card fade-in"><div class="why-card__num" aria-hidden="true">06</div><h3 class="why-card__title">High-Quality Professional Service</h3><p class="why-card__body">No matter the budget, we pride ourselves on professional customer service and high-quality output. Excellence is not optional &mdash; it is our baseline standard.</p></div>
      </div>
    </div>
  </section>

  <!-- CTA BAND -->
  <section class="cta-band" aria-label="Call to action">
    <div class="container--narrow cta-band__inner">
      <h2 class="cta-band__heading">Ready to transform your business?</h2>
      <p class="cta-band__sub">Whether you need strategic guidance, specialised talent, or end-to-end software delivery &mdash; let us craft the right solution for you.</p>
      <div class="cta-band__btns">
        <a href="#contact" class="btn-white">Send us a message</a>
        <a href="tel:+27822635227" class="btn-outline-white">+27 82 263 5227</a>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="section" id="contact" aria-labelledby="contact-h">
    <div class="container">
      <div class="contact__grid">
        <div class="fade-in">
          <p class="sec-label">Get in touch</p>
          <h2 class="contact__heading" id="contact-h">We know that our clients have unique needs</h2>
          <p class="contact__body">Send us a message and we will get back to you soon. No matter what your challenge is, we are here to listen and help find the right solution.</p>
          <div class="contact__details">
            <div class="contact__detail">
              <div class="contact__detail-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
              <div>
                <div class="contact__detail-label">Address</div>
                <div class="contact__detail-value">Work Central &mdash; Office Space<br>Bel Air Shopping Centre, Bellairs Dr<br>Northriding, Johannesburg, 2169</div>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
              <div>
                <div class="contact__detail-label">Email</div>
                <div class="contact__detail-value"><a href="mailto:info@plus3.co.za" style="color:var(--primary);text-decoration:none;">info@plus3.co.za</a></div>
              </div>
            </div>
            <div class="contact__detail">
              <div class="contact__detail-icon" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.21h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.12 6.12l1.26-1.26a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
              <div>
                <div class="contact__detail-label">Phone</div>
                <div class="contact__detail-value"><a href="tel:+27822635227" style="color:var(--primary);text-decoration:none;">+27 82 263 5227</a></div>
              </div>
            </div>
          </div>
        </div>
        <div class="reveal-up">
          <div class="form-wrap">
            <form class="form" id="contact-form" novalidate aria-label="Contact form">
              <div class="form__row">
                <div class="form__group"><label class="form__label" for="f-name">First Name <span aria-hidden="true">*</span></label><input class="form__input" type="text" id="f-name" name="first_name" placeholder="Jane" required autocomplete="given-name"></div>
                <div class="form__group"><label class="form__label" for="f-surname">Last Name <span aria-hidden="true">*</span></label><input class="form__input" type="text" id="f-surname" name="last_name" placeholder="Smith" required autocomplete="family-name"></div>
              </div>
              <div class="form__group"><label class="form__label" for="f-email">Email Address <span aria-hidden="true">*</span></label><input class="form__input" type="email" id="f-email" name="email" placeholder="jane@company.co.za" required autocomplete="email"></div>
              <div class="form__group"><label class="form__label" for="f-company">Company</label><input class="form__input" type="text" id="f-company" name="company" placeholder="Your company name" autocomplete="organization"></div>
              <div class="form__group">
                <label class="form__label" for="f-service">Service of interest</label>
                <select class="form__select" id="f-service" name="service">
                  <option value="">Select a service...</option>
                  <option value="consulting">Consulting</option>
                  <option value="augmentation">Staff Augmentation</option>
                  <option value="software">Custom Software Development</option>
                  <option value="devops">DevOps / FinOps / MLOps</option>
                  <option value="general">General enquiry</option>
                </select>
              </div>
              <div class="form__group"><label class="form__label" for="f-message">Message <span aria-hidden="true">*</span></label><textarea class="form__textarea" id="f-message" name="message" placeholder="Tell us about your project or challenge..." required></textarea></div>
              <button type="submit" class="btn-submit">Send message &rarr;</button>
            </form>
            <div class="form-success" id="form-success" role="status" aria-live="polite">
              <div class="form-success__icon" aria-hidden="true">&#10003;</div>
              <div class="form-success__title">Message sent!</div>
              <div class="form-success__body">Thank you for reaching out. We will be in touch shortly.</div>
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
        <div class="footer__brand">Plus<span>3</span> Solutions</div>
        <p class="footer__tagline">Professional technology services built on 15 years of international experience. We partner with your business to transform vision into reality.</p>
      </div>
      <div>
        <div class="footer__col-title">Services</div>
        <ul class="footer__links" role="list">
          <li><a href="#services">Consulting</a></li>
          <li><a href="#services">Staff Augmentation</a></li>
          <li><a href="#services">Software Development</a></li>
          <li><a href="#services">DevOps &amp; FinOps</a></li>
        </ul>
      </div>
      <div>
        <div class="footer__col-title">Company</div>
        <ul class="footer__links" role="list">
          <li><a href="#about">About Plus3</a></li>
          <li><a href="#how-we-work">How We Work</a></li>
          <li><a href="#why-plus3">Why Plus3</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="mailto:info@plus3.co.za">info@plus3.co.za</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <p class="footer__copy">Copyright &copy; <span id="footer-year"></span> Plus3 Solutions &mdash; All Rights Reserved.</p>
      <p class="footer__copy">Work Central, Bel Air Shopping Centre, Northriding, Johannesburg, 2169</p>
    </div>
  </div>
</footer>

<script>
// Auto year — always present, auto-refreshes at midnight
(function(){
  function setYear(){ var el=document.getElementById('footer-year'); if(el) el.textContent=new Date().getFullYear(); }
  setYear();
  function scheduleMidnight(){
    var now=new Date(), mn=new Date(now.getFullYear(),now.getMonth(),now.getDate()+1);
    setTimeout(function(){ setYear(); scheduleMidnight(); }, mn-now);
  }
  scheduleMidnight();
})();

// Mobile nav
(function(){
  var btn=document.getElementById('hamburger'), nav=document.getElementById('mobile-nav');
  if(!btn||!nav) return;
  var open=false;
  function toggle(){
    open=!open;
    nav.classList.toggle('open',open);
    btn.setAttribute('aria-expanded',open);
    btn.innerHTML=open
      ? '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    document.body.style.overflow=open?'hidden':'';
  }
  btn.addEventListener('click',toggle);
  document.querySelectorAll('.mobile-link').forEach(function(l){ l.addEventListener('click',function(){ if(open) toggle(); }); });
})();

// Nav scroll shadow
(function(){
  var nav=document.querySelector('.nav');
  if(!nav) return;
  function u(){ nav.classList.toggle('scrolled',window.scrollY>20); }
  window.addEventListener('scroll',u,{passive:true}); u();
})();

// Contact form — POSTs to /api/contact on the Worker
(function(){
  var form=document.getElementById('contact-form'), success=document.getElementById('form-success');
  if(!form||!success) return;
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var data={
      first_name:form.first_name.value, last_name:form.last_name.value,
      email:form.email.value, company:form.company.value,
      service:form.service.value, message:form.message.value
    };
    fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)})
      .then(function(r){ return r.json(); })
      .then(function(r){
        if(r.ok){ form.style.display='none'; success.classList.add('show'); }
        else { alert('Something went wrong. Please email us directly at info@plus3.co.za'); }
      })
      .catch(function(){ alert('Network error. Please email us at info@plus3.co.za'); });
  });
})();
</script>
</body>
</html>`;

// Security & cache headers
const HEADERS = {
  'Content-Type': 'text/html; charset=UTF-8',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'SAMEORIGIN',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Content-Security-Policy': [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline'",
    "style-src 'self' 'unsafe-inline' https://api.fontshare.com",
    "font-src https://api.fontshare.com https://cdn.fontshare.com",
    "connect-src 'self'",
    "img-src 'self' data:",
    "frame-ancestors 'none'"
  ].join('; '),
  'Cache-Control': 'public, max-age=3600, must-revalidate',
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    // Contact form API endpoint
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { first_name, last_name, email, message } = body;
        if (!first_name || !last_name || !email || !message) {
          return jsonResponse({ error: 'Required fields missing.' }, 400);
        }
        // Uncomment to enable MailChannels email delivery (free on Cloudflare Workers):
        // await fetch('https://api.mailchannels.net/tx/v1/send', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify({
        //     personalizations: [{ to: [{ email: 'info@plus3.co.za', name: 'Plus3 Solutions' }] }],
        //     from: { email: 'noreply@plus3.co.za', name: 'Plus3 Website' },
        //     reply_to: { email, name: first_name + ' ' + last_name },
        //     subject: 'New website enquiry from ' + first_name + ' ' + last_name,
        //     content: [{ type: 'text/plain', value:
        //       'Name: ' + first_name + ' ' + last_name + '\n' +
        //       'Email: ' + email + '\n' +
        //       'Company: ' + (body.company || '—') + '\n' +
        //       'Service: ' + (body.service || '—') + '\n\n' +
        //       'Message:\n' + body.message
        //     }]
        //   })
        // });
        return jsonResponse({ ok: true }, 200);
      } catch (err) {
        return jsonResponse({ error: 'Server error.' }, 500);
      }
    }

    // Serve HTML for all GET requests (SPA — single file, no routing needed)
    if (request.method === 'GET') {
      return new Response(HTML, { headers: HEADERS });
    }

    return new Response('Method Not Allowed', { status: 405 });
  }
};

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': 'https://plus3.co.za',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
