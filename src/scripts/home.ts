// Home page motion.
// 1. The window light behind the hero is a live Unicorn Studio scene (a still image shows until it loads).
// 2. Scrolling turns the pump base on its plinth. On wide screens the hero holds in place while the model
//    makes one full turn and its wall label steps through three facts.
// 3. The floor plan's walls draw themselves as it scrolls into view.
// Everything here is skipped when the visitor asks for reduced motion.
import '@google/model-viewer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mountScene } from 'unicornstudio';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveData = (navigator as any).connection?.saveData === true;

// Draco-compressed models: the decoder is self-hosted.
customElements.whenDefined('model-viewer').then(() => {
  const MV: any = customElements.get('model-viewer');
  if (MV) MV.dracoDecoderLocation = '/decoders/draco/';
});

// ---------- 1. live light ----------
// Off for now: on Unicorn Studio's free plan the embed is covered in "Unicorn" watermarks.
// With a paid plan (no watermark), set LIVE_LIGHT to true. Until then the still drifts slowly in CSS.
const LIVE_LIGHT = false;
const sceneEl = document.querySelector<HTMLElement>('[data-unicorn]');
if (LIVE_LIGHT && sceneEl && !reduce && !saveData) {
  document.documentElement.classList.add('live-light');
  mountScene(sceneEl, {
    projectId: '6e3E1DVqTYg0fE9pzmHN',
    lazyLoad: false,
    ariaLabel: 'Daylight through a window falling on a gallery wall',
    altText: 'Daylight through a window falling on a gallery wall',
  });
}

// ---------- 2. the turntable ----------
const hero = document.querySelector<HTMLElement>('[data-hero]');
const mv = document.querySelector<any>('[data-hero-model]');
const steps = Array.from(document.querySelectorAll<HTMLElement>('.hero__step'));
const bars = Array.from(document.querySelectorAll<HTMLElement>('.hero__progress i'));

const light = document.querySelector<HTMLElement>('.hero__light');

const START_THETA = 30;
const setTurn = (p: number) => {
  if (mv) mv.cameraOrbit = `${START_THETA + p * 360}deg ${72 - p * 6}deg 105%`;
};
let current = 0;
const setStep = (p: number) => {
  const n = steps.length;
  const i = Math.min(n - 1, Math.floor(p * n));
  bars.forEach((b, k) => b.style.setProperty('--p', String(gsap.utils.clamp(0, 1, p * n - k))));
  if (i === current) return;
  current = i;
  steps.forEach((s, k) => s.setAttribute('aria-hidden', k === i ? 'false' : 'true'));
};

if (hero && mv && !reduce) {
  const mm = gsap.matchMedia();

  mm.add('(min-width: 901px)', () => {
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: '+=140%',
      pin: true,
      scrub: 0.6,
      onUpdate: (self) => {
        setTurn(self.progress);
        setStep(self.progress);
        
        if (light) light.style.transform = `scale(${1 + self.progress * 0.06}) translateX(${self.progress * -2}%)`;
      },
    });
  });

  // Small screens: no holding in place, the model just turns as the hero scrolls away.
  mm.add('(max-width: 900px)', () => {
    ScrollTrigger.create({
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: 0.6,
      onUpdate: (self) => setTurn(self.progress * 0.6),
    });
  });
}

// ---------- 3. the plan draws itself ----------
const plan = document.querySelector<SVGSVGElement>('[data-plan]');
if (plan && !reduce) {
  const lines = plan.querySelectorAll<SVGGeometryElement>('.plan__outer, .plan__walls path');
  gsap.fromTo(
    lines,
    { strokeDasharray: 1, strokeDashoffset: 1 },
    {
      strokeDashoffset: 0,
      ease: 'none',
      stagger: 0.1,
      scrollTrigger: { trigger: plan, start: 'top 85%', end: 'top 35%', scrub: 0.8 },
    },
  );
  gsap.from(plan.querySelectorAll('.room, .plan__doors'), {
    opacity: 0,
    duration: 0.8,
    ease: 'expo.out',
    stagger: 0.07,
    scrollTrigger: { trigger: plan, start: 'top 55%' },
  });
}
