import { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';

export function useAnimeOnMount(animationFn, deps = []) {
  useEffect(() => {
    let cleanup;

    const frame = requestAnimationFrame(() => {
      cleanup = animationFn();
    });

    return () => {
      cancelAnimationFrame(frame);
      if (typeof cleanup === 'function') cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

export function useAnimeOnView({
  selector,
  fromY = 40,
  duration = 800,
  delay = 0,
  staggerDelay = 0,
  ease = 'outExpo',
  threshold = 0.15,
} = {}) {
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = selector
      ? container.querySelectorAll(selector)
      : container.children;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          animate(targets, {
            opacity: { from: 0, to: 1 },
            translateY: { from: fromY, to: 0 },
            duration,
            delay: staggerDelay ? stagger(staggerDelay) : delay,
            ease,
          });
        }
      },
      { threshold },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [selector, fromY, duration, delay, staggerDelay, ease, threshold]);

  return ref;
}
