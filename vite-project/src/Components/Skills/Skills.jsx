import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Skills.css'; // Your CSS for morphism look

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Animation easing
    });
  }, []);

  return (
    <>
      <div className='container' id='Skills'>
      <br/>
      <br/>
    </div>
      <div  className='frontend-dev-section'>
        <div className="col-lg-7 col-md-6 col-sm-12 intro-text">
          <p className="tracking-in-expand-fwd-bottom" data-aos="fade-up">Skill Stack .______________________</p>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="tech-stack-wrapper">
              <li className="tech-stack-box" data-aos="fade-right">
                <img src="./Images/htmllogo.png" alt="Html skill" className="tech-stack-logo" />
                <span className="tooltip">HTML</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-right" data-aos-delay="100">
                <img src="./Images/csslogo.png" alt="css skill" className="tech-stack-logo" />
                <span className="tooltip">CSS</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-right" data-aos-delay="200">
                <img src="./Images/jslogo.png" alt="js skill" className="tech-stack-logo" />
                <span className="tooltip">JS</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-right" data-aos-delay="300">
                <img src="./Images/bootstraplogo.png" alt="bootstrap skill" className="tech-stack-logo" />
                <span className="tooltip">BOOTSTRAP</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-left" data-aos-delay="400">
                <img src="./Images/csharplogo.png" alt="c# skill" className="tech-stack-logo" />
                <span className="tooltip">C#</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-left" data-aos-delay="500">
                <img src="./Images/githublogo.png" alt="github skill" className="tech-stack-logo needtobeinvert" />
                <span className="tooltip">GITHUB</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-left" data-aos-delay="600">
                <img src="./Images/gitlogo.png" alt="git skill" className="tech-stack-logo" />
                <span className="tooltip">GIT</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-left" data-aos-delay="700">
                <img src="./Images/javalogo.png" alt="java language skill" className="tech-stack-logo" />
                <span className="tooltip">JAVA</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-left" data-aos-delay="800">
                <img src="./Images/mysqllogo.png" alt="MySQL language skill" className="tech-stack-logo" />
                <span className="tooltip">MySQL</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-left" data-aos-delay="900">
                <img src="./Images/wordpresslogo.png" alt="wordpress skill" className="tech-stack-logo" />
                <span className="tooltip">WORDPRESS</span>
              </li>
              <li className="tech-stack-box" data-aos="fade-left" data-aos-delay="900">
                <img src="./Images/python.png" alt="python skill" className="tech-stack-logo" />
                <span className="tooltip">PYTHON</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
