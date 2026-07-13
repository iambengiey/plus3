# Patch notes — applied to worker.js

## 1. Hero background — real `<img>` element

Before (broken — CSS background-image on a div):
```html
<div class="hero__bg" aria-hidden="true"></div>
```
```css
.hero__bg {
  position: fixed; inset: 0; z-index: -1;
  background-image: url('...');
  background-size: cover;
}
```

After (correct — actual img element inside the fixed wrapper):
```html
<div class="hero__bg" aria-hidden="true">
  <img src="${HERO_BG_URL}" alt="" fetchpriority="high">
</div>
```
```css
.hero__bg {
  position: fixed; inset: 0; z-index: -1; overflow: hidden;
}
.hero__bg img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center center;
  display: block;
}
.hero__bg::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(135deg, rgb(0 123 136 / 0.82) 0%, rgb(0 168 107 / 0.72) 100%);
}
```

## 2. Service pillars — single row on desktop

Before (auto-fill caused 4th card to wrap):
```css
.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(320px, 100%), 1fr));
}
```

After (explicit 4 columns):
```css
.services__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}
@media (max-width: 1024px) {
  .services__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 580px) {
  .services__grid { grid-template-columns: 1fr; }
}
```

## 3. Service card improvements

```css
.service-card {
  /* ... existing ... */
  display: flex;
  flex-direction: column;
  min-height: 320px;
  padding: clamp(1.25rem, 2vw, 2rem); /* responsive padding */
}
.service-card__body { flex: 1; } /* pushes tags to bottom */
```
