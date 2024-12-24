import React, { useEffect, useRef } from 'react';
import './hero.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Nav from './Nav';

function Hero() {
  const first = useRef(null);
  const second = useRef(null);
  const slider = useRef(null);
  let xpercent = 0;
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.create({
      trigger: document.documentElement,
      scrub: 0.25,
      start: 0,
      end: window.innerHeight,
      onUpdate: (e) => {
        direction = e.direction * -1;
      },
    });

    const animate = () => {
      if (xpercent <= -100) {
        xpercent = 0;
      } else if (xpercent > 0) {
        xpercent = -100;
      }

      gsap.set(first.current, { xPercent: xpercent });
      gsap.set(second.current, { xPercent: xpercent });
      xpercent += 0.1 * direction;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div className="heromain">
        <Nav/>
        <div className="backgroundimg">
          <img src="./img.jpg" alt="" />
        </div>
      <div className="slidercontainer">
        <div ref={slider} className="slider">
          <p ref={first} className="hp1">Creative Developer-</p>
          <p ref={second} className="hp2">Creative Developer-</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
