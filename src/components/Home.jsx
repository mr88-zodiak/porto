import { useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import { personalInfo, skills, rotatingRoles } from "../data/portfolio";
import { useAnimeOnMount } from "../hooks/useAnimeOnMount";
import { useRotatingText } from "../hooks/useRotatingText";
import Starfield from "./Starfield";
import "./Home.css";

export default function Home() {
  const sectionRef = useRef(null);
  const rotatingTextRef = useRotatingText(rotatingRoles);

  useAnimeOnMount(() => {
    const container = sectionRef.current;
    if (!container) return;

    const revealAll = () => {
      container.classList.add("hero--visible");
    };

    const shapes = container.querySelectorAll(".hero__shape");
    animate(shapes, {
      translateY: { from: -20, to: 20 },
      rotate: { from: 0, to: 360 },
      duration: 8000,
      ease: "inOutSine",
      loop: true,
      alternate: true,
      delay: stagger(500),
    });

    const timeline = createTimeline({
      defaults: { ease: "outExpo" },
      onComplete: revealAll,
    });

    timeline
      .add(container.querySelector(".hero__photo-wrap"), {
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 1000,
      })
      .add(
        container.querySelector(".hero__greeting"),
        {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 700,
        },
        "-=700"
      )
      .add(
        container.querySelector(".hero__name"),
        {
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 900,
        },
        "-=500"
      )
      .add(
        container.querySelector(".hero__rotating"),
        {
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
        },
        "-=600"
      )
      .add(
        container.querySelector(".hero__tagline"),
        {
          opacity: [0, 1],
          translateY: [25, 0],
          duration: 800,
        },
        "-=500"
      )
      .add(
        container.querySelector(".hero__actions"),
        {
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 700,
        },
        "-=400"
      )
      .add(
        container.querySelectorAll(".hero__skill"),
        {
          opacity: [0, 1],
          scale: [0.8, 1],
          duration: 500,
          delay: stagger(60),
        },
        "-=300"
      );

    const fallbackTimer = setTimeout(revealAll, 1500);

    return () => {
      clearTimeout(fallbackTimer);
      container.classList.remove("hero--visible");
    };
  });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero section" ref={sectionRef}>
      <Starfield />

      <div className="hero__shapes" aria-hidden="true">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      <div className="container hero__layout">
        <div className="hero__content">
          <p className="hero__greeting">
            Hello, let me introduce myself my name is
          </p>

          <h1 className="hero__name">{personalInfo.name}</h1>

          <p className="hero__rotating">
            <span className="hero__rotating-prefix">Hello, I can be </span>
            <span className="hero__rotating-text" ref={rotatingTextRef}>
              {rotatingRoles[0]}
            </span>
          </p>

          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollTo("contact")}
            >
              Contact Me
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollTo("projects")}
            >
              View project
            </button>
          </div>

          <div className="hero__skills">
            {skills.map((skill) => (
              <span key={skill} className="hero__skill">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo">
            <img
              src={personalInfo.photo}
              alt={`Portrait of ${personalInfo.name}`}
              className="hero__photo-img"
            />
            <div className="hero__photo-glow" aria-hidden="true" />
          </div>
        </div>
      </div>

      <button
        className="hero__scroll"
        onClick={() => scrollTo("education")}
        aria-label="Scroll to education"
      >
        <span className="hero__scroll-line" />
      </button>
    </section>
  );
}
