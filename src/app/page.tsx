import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import AboutMe from '@/components/AboutMe'
import Projects from '@/components/Projects'
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <div className="scroll-snap-container">
      <Navbar />
      <section id='home' className="scroll-snap-section">
        <Hero />
      </section>

      <section id='about' className="scroll-snap-section">
          <AboutMe />
      </section>

      <section id='project' className="scroll-snap-section">
        <Projects />
      </section>
    </div>
    </>
  );
}
