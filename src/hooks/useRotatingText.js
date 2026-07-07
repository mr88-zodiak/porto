import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export function useRotatingText(roles, pauseMs = 2800) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el || roles.length === 0) return;

    let index = 0;
    let timeoutId;
    let cancelled = false;
    let activeAnim = null;

    const showNext = () => {
      if (cancelled) return;

      activeAnim = animate(el, {
        opacity: [1, 0],
        translateY: [0, -12],
        duration: 450,
        ease: 'inExpo',
        onComplete: () => {
          if (cancelled) return;
          index = (index + 1) % roles.length;
          el.textContent = roles[index];

          activeAnim = animate(el, {
            opacity: [0, 1],
            translateY: [12, 0],
            duration: 550,
            ease: 'outExpo',
            onComplete: () => {
              if (!cancelled) {
                timeoutId = setTimeout(showNext, pauseMs);
              }
            },
          });
        },
      });
    };

    el.textContent = roles[0];
    timeoutId = setTimeout(showNext, pauseMs);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      activeAnim?.revert?.();
    };
  }, [roles, pauseMs]);

  return textRef;
}
