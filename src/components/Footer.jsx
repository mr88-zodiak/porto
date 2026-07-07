import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          &copy; {year} {personalInfo.name}. Built with React &amp; Anime.js
        </p>
        <button
          className="footer__top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top &uarr;
        </button>
      </div>
    </footer>
  );
}
