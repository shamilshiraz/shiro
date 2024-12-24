import './App.css';
import About from './components/About';
import Hero from './components/Hero';
import Works from './components/Works';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.1, // Adjust for scroll smoothness
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Clean up Lenis on component unmount
    };
  }, []);

  return (
    <>
      <Hero />
      <About />
      <Works />
    </>
  );
}

export default App;
