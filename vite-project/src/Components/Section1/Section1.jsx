import React, { useEffect, useRef, useState } from 'react';
import './Section1.css';
import Custombtn from '../LetsTalkbtn/Custombtn';

const Section1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optional: stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Adjust based on when you want the transition to trigger
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    
    <section id='Section1' className={`landingpage container ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="text-content">
        <p className={`tracking-in-expand-fwd-bottom ${isVisible ? 'animate' : ''}`}>Hello 👋 I'm</p>
        <h1 className={`name tracking-in-expand-fwd-bottom ${isVisible ? 'animate' : ''}`}>Zara Ejaz.</h1>
        <p className={`work tracking-in-expand-fwd-bottom ${isVisible ? 'animate' : ''}`}>I'm a Web Developer.</p>
      </div>
      <p className={`info-para mt-5 mb-5 ${isVisible ? 'animate' : ''}`} data-aos="fade-up" data-aos-delay="600">
        As a web developer with expertise in frontend web design, I have a passion for creating engaging web interfaces, collaborating with others, and developing innovative products. <br /><br />
        I prioritize a straightforward content structure, elegant design patterns, and meaningful interactions.
      </p>
      <Custombtn />
    </section>
  );
};

export default Section1;
