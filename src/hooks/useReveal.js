import { useEffect, useRef, useState } from 'react';

/**
 * Triggers .visible on elements with .reveal class when they enter the viewport.
 * Also supports a single ref for simple fade-in.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: options.threshold ?? 0.12, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

/**
 * Attaches IntersectionObserver to all .reveal elements inside a container ref.
 * When they enter the viewport, adds .visible class (stagger via CSS delay-N classes).
 */
export function useRevealChildren(containerRef) {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const els = container.querySelectorAll('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/**
 * Animated counter: counts from 0 → target when visible.
 */
export function useCounter(target, duration = 1000) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) {
        setStarted(true);
        observer.disconnect();
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3); // ease-out cubic
      setCount(Math.floor(ease * target));
      if (prog < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return [ref, count];
}
