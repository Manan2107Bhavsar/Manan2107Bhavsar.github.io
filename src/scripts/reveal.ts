// Fades and lifts elements marked data-reveal as they scroll into view.
// Siblings that share a data-reveal-group arrive one after another.
const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduce || !('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const group = el.dataset.revealGroup;
        if (group) {
          const peers = els.filter((p) => p.dataset.revealGroup === group);
          el.style.setProperty('--reveal-delay', `${Math.min(peers.indexOf(el), 5) * 90}ms`);
        }
        el.classList.add('is-in');
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
  );
  els.forEach((el) => io.observe(el));
}
