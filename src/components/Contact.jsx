import { useState, useRef } from 'react';
import { animate } from 'animejs';
import { personalInfo } from '../data/portfolio';
import { useAnimeOnView } from '../hooks/useAnimeOnMount';
import './Contact.css';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const sectionRef = useAnimeOnView({
    selector: '.contact__item',
    fromY: 40,
    duration: 800,
    threshold: 0.15,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    animate(formRef.current, {
      scale: [1, 1.02, 1],
      duration: 600,
      ease: 'outExpo',
    });

    setTimeout(() => {
      setFormState({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-label">Contact</span>
        <h2 className="section-title">Let&apos;s Connect</h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
        </p>

        <div className="contact__grid" ref={sectionRef}>
          <div className="contact__info">
            <div className="contact__item" style={{ opacity: 0 }}>
              <span className="contact__item-label">Email</span>
              <a href={`mailto:${personalInfo.email}`} className="contact__item-value">
                {personalInfo.email}
              </a>
            </div>
            <div className="contact__item" style={{ opacity: 0 }}>
              <span className="contact__item-label">Location</span>
              <span className="contact__item-value">{personalInfo.location}</span>
            </div>
            <div className="contact__item" style={{ opacity: 0 }}>
              <span className="contact__item-label">Social</span>
              <div className="contact__socials">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          <form className="contact__form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
              />
            </div>
            <button type="submit" className="btn btn-primary contact__submit">
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
