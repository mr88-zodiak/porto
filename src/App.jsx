import Navbar from './components/Navbar';
import Home from './components/Home';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />
      <div className="glow-orb glow-orb--cyan" aria-hidden="true" />
      <div className="glow-orb glow-orb--purple" aria-hidden="true" />

      <Navbar />
      <main>
        <Home />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
