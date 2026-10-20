/**
 * Dezente Bewegung: Einblenden beim Scrollen, Bild-Reveals, Parallaxe, Zähler.
 * Ohne JS oder mit "Bewegung reduzieren" bleibt alles statisch sichtbar.
 */
export function startMotion() {
  const root = document.documentElement;
  if (!root.classList.contains('motion')) return;
  root.classList.add('motion-ready');

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
        if (e.target instanceof HTMLElement && e.target.dataset.count) countUp(e.target);
      }
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.01 },
  );
  document.querySelectorAll('[data-reveal], [data-count]').forEach((el) => io.observe(el));

  const parallax = [...document.querySelectorAll<HTMLElement>('[data-parallax]')];
  if (parallax.length) {
    let ticking = false;
    const update = () => {
      const vh = window.innerHeight;
      for (const el of parallax) {
        const frame = (el.closest('[data-parallax-frame]') ?? el.parentElement!).getBoundingClientRect();
        if (frame.bottom < -100 || frame.top > vh + 100) continue;
        const speed = parseFloat(el.dataset.parallax || '0.15');
        const progress = (frame.top + frame.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(-progress * speed * 100).toFixed(2)}%, 0) scale(${1 + speed})`;
      }
      ticking = false;
    };
    window.addEventListener('scroll', () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }
}

function countUp(el: HTMLElement) {
  const target = Number(el.dataset.count);
  const start = performance.now();
  const duration = 1600;
  const step = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 4);
    el.textContent = Math.round(target * eased).toLocaleString('de-DE');
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
