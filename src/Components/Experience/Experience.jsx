import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import "./experience.css";
import AOS from "aos";

const experiences = [
  {
    company: "Quantaflix",
    role: "Frontend Developer Intern",
    duration: "1st March - 21st May 2024",
    description: "Completed internship focusing on modern UI design, React components, and responsive layouts."
  },
  {
    company: "Quantaflix",
    role: "Backend Developer",
    duration: "21st March 2024 - Jun 2025",
    description: "Worked as a web developer creating responsive web applications, react components, and API integrations."
  },
  {
    company: "Abidi Solutions",
    role: "Software Engineer",
    duration: "April - August 2025",
    description: "Developed scalable web applications, contributed to both frontend and backend, and collaborated with cross-functional teams."
  },
  {
    company: "TriTechTitan (Remote)",
    role: "Software Engineer",
    duration: "October - Still Working",
    description: "Developing scalable web applications, contributing to both frontend and backend."
  }
];

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  return (
    <div className="experience-section container" id="experience">
      <h2 className="experience-title tracking-in-expand-fwd-bottom mb-5" data-aos="fade-up">Experience ._____________</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role} <span>@ {exp.company}</span></h3>
              <p className="duration">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
