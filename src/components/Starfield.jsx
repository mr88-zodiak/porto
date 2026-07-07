import { useMemo, useRef } from 'react';
import { animate, stagger, random } from 'animejs';
import { useAnimeOnMount } from '../hooks/useAnimeOnMount';
import './Starfield.css';

const STAR_COUNT = 120;

export default function Starfield() {
  const containerRef = useRef(null);

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, (_, i) => ({
        id: i,
        x: random(0, 100),
        y: random(0, 100),
        size: random(1, 3.2),
        opacity: random(0.2, 0.9),
      })),
    [],
  );

  useAnimeOnMount(() => {
    const container = containerRef.current;
    if (!container) return;

    const starEls = container.querySelectorAll('.starfield__star');

    const twinkle = animate(starEls, {
      opacity: [
        { to: 0.1 },
        { to: () => random(0.5, 1) },
      ],
      scale: [
        { to: 0.6 },
        { to: () => random(0.8, 1.6) },
      ],
      duration: () => random(1200, 3500),
      delay: stagger(60, { from: 'random' }),
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });

    const drift = animate(starEls, {
      translateX: () => random(-18, 18),
      translateY: () => random(-18, 18),
      duration: () => random(6000, 14000),
      delay: stagger(100, { from: 'random' }),
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });

    return () => {
      twinkle.revert();
      drift.revert();
    };
  });

  return (
    <div className="starfield" ref={containerRef} aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="starfield__star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
