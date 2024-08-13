import React from 'react';
import './Projects.css'; // Ensure this path is correct

const Projects = () => {
  return (
    <>
  
    <section className="projects-section-container" id="projects">
      <div className="projects-section-div">
        <div className="project-boxes-div">
          <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box2" id="project-box2">
              <div className="info-div">
                <article className="ProjectHeading">Library Mangment System</article>
                <p className="ProjectDescription">
                Developed in Java using Object-Oriented Programming principles, aimed at efficiently managing library resources and member activities.
                </p>
                <div className="project-buttons">
                  <a href="https://github.com/vinodjangid07/Pexelicons" target="_blank" rel="noopener noreferrer" className="github-redirect" aria-label="Visit Pexelicons on GitHub">
                    <img src="./svg/github.svg" alt="github redirect button" />
                  </a>
                  <a href="https://vinodjangid.site/Pexelicons/" target="_blank" rel="noopener noreferrer" className="cta" aria-label="Visit Pexelicons Live">
                    <span>Live view</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="image-div">
                <img src="./Images/LMS.png" alt="Pexelicon website preview image" />
              </div>
            </div>
          </div>

          {/* Repeat similar structure for other project boxes */}
          {/* Example for ComicKaze */}
          <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box5" id="project-box5">
              <div className="info-div">
                <img src="src/webp/cropped-1086600-192x192.webp" alt="comickaze website favicon" className="faviconforProject" />
                <article className="ProjectHeading">ComicKaze</article>
                <p className="ProjectDescription">
                  ComicKaze is an ecommerce website built on WordPress by me
                  as a freelancer. It specializes in selling anime
                  merchandise.
                </p>
                <div className="project-buttons">
                  <a href="https://comickaze.in" target="_blank" rel="noopener noreferrer" className="cta" aria-label="Visit Comickaze live">
                    <span>Live view</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                      <path d="M1,5 L11,5"></path>
                      <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="image-div">
                <img src="src/webp/comickaze-preview.webp" alt="comickaze website preview image" />
              </div>
            </div>
          </div>

          {/* Add other project-boxes here */}
          
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Projects;
