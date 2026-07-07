import { animate } from 'animejs';
import { timeline } from '../data/portfolio';
import { useAnimeOnView } from '../hooks/useAnimeOnMount';
import './Education.css';

export default function Education() {
  const listRef = useAnimeOnView({
    selector: '.edu-card',
    fromY: 50,
    duration: 900,
    staggerDelay: 150,
    threshold: 0.1,
  });

  const handleCardHover = (e, entering) => {
    animate(e.currentTarget, {
      translateX: entering ? 8 : 0,
      duration: 400,
      ease: 'outExpo',
    });
    animate(e.currentTarget.querySelector('.edu-card__dot'), {
      scale: entering ? 1.4 : 1,
      duration: 400,
      ease: 'outExpo',
    });
  };

  return (
    <section id="education" className="section education">
      <div className="container">
        <span className="section-label">Background</span>
        <h2 className="section-title">Education & Experience</h2>
        <p className="section-subtitle">
          Studying Informatics Engineering at Dr. Soetomo University, with professional experience in public sector software development.
        </p>

        <div className="education__timeline" ref={listRef}>
          {timeline.map((item, index) => (
            <article
              key={item.id}
              className={`edu-card ${item.type === 'experience' ? 'edu-card--experience' : ''}`}
              style={{ opacity: 0 }}
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div className="edu-card__dot" />
              {index < timeline.length - 1 && <div className="edu-card__line" />}

              <div className="edu-card__content">
                <span className="edu-card__type">
                  {item.type === 'experience' ? 'Experience' : 'Education'}
                </span>
                <span className="edu-card__period">{item.period}</span>
                <h3 className="edu-card__degree">{item.degree}</h3>
                <p className="edu-card__school">{item.school}</p>
                <p className="edu-card__desc">{item.description}</p>
                <ul className="edu-card__highlights">
                  {item.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
