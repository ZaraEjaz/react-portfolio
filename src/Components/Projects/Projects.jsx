
import './Projects.css'; // Ensure this path is correct
import React, { useEffect } from 'react';
import 'aos/dist/aos.css'; 
const Projects = () => {
return (
<>
<div className='container' id="projects">
      <br/>
      <br/>
</div>
<div className="col-lg-7 col-md-6 col-sm-12 intro-text mt-5">
        <p className="tracking-in-expand-fwd-bottom" data-aos="fade-up">Projects .______________________</p>
</div>
<section className="projects-section-container" >
   <div className="projects-section-div">
      <div className="project-boxes-div">
         <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box5" id="project-box5">
               <div className="info-div">
                  <article className="ProjectHeading">Quantaflix Website</article>
                  <p className="ProjectDescription">
                     I developed the official Quantaflix website based on the design shared by the team. The project was built using React (Vite) for fast performance and a modern development workflow, along with CSS for styling and responsiveness.
                  </p>
                  <div className="project-buttons">
                     <a href="https://quantaflix.com/" target="_blank" className="cta"
                        aria-label="Quantaflix Live">
                        <span>Live view</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                           <path d="M1,5 L11,5"></path>
                           <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                     </a>
                  </div>
               </div>
               <div className="image-div">
                  <img src="./Images/first.png" alt="Quantaflix" />
               </div>
            </div>
         </div>
         <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box2" id="project-box2">
               <div className="info-div">
                  <article className="ProjectHeading">My Portfolio</article>
                  <p className="ProjectDescription">
                  My portfolio website is developed using React with Vite for a fast and efficient build process, styled with modern CSS frameworks and custom animations to ensure responsiveness, interactivity, and a seamless user experience.
                  </p>
                  
               </div>
               <div className="image-div">
                  <img src="./Images/myportfolio.png" alt="Pexelicon website preview image" />
               </div>
            </div>
         </div>
         <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box2" id="project-box2">
               <div className="info-div">
                  <article className="ProjectHeading">TriTechTitan Website</article>
                  <p className="ProjectDescription">
                    Designed & Developed the official TriTechTitan website. The project was built using React (Vite) and Typescript for fast performance and a modern development workflow, along with Tailwind CSS for styling and responsiveness.
                  </p>
                  <div className="project-buttons">
                     <a href="https://tritechtitan.com/" target="_blank" className="cta"
                        aria-label="TriTechTitan Live">
                        <span>Live view</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                           <path d="M1,5 L11,5"></path>
                           <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                     </a>
                  </div>
               </div>
               <div className="image-div">
                  <img src="./Images/T3mainwebsite.png" alt="Pexelicon website preview image" />
               </div>
            </div>
         </div>
         <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box2" id="project-box2">
               <div className="info-div">
                  <article className="ProjectHeading">TriTechTitan Blog</article>
                  <p className="ProjectDescription">
                  TriTechTitan is a modern WordPress-based tech blog sharing insights, tutorials, and trends in technology and innovation.
                  </p>
                  <div className="project-buttons">
                     <a href="https://tritechtitan.blog/" target="_blank" className="cta"
                        aria-label="TriTechTitan Live">
                        <span>Live view</span>
                        <svg viewBox="0 0 13 10" height="10px" width="15px">
                           <path d="M1,5 L11,5"></path>
                           <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                     </a>
                  </div>
               </div>
               <div className="image-div">
                  <img src="./Images/T3blog.png" alt="Pexelicon website preview image" />
               </div>
            </div>
         </div>
         
         {/* Add other project-boxes here */}
         <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box5" id="project-box5">
               <div className="info-div">
                  <article className="ProjectHeading">CPU SCHEDULING SIMULAOR</article>
                  <p className="ProjectDescription">Web app using JavaScript, HTML, and CSS to simulate CPU scheduling and page replacement algorithms, providing visualization and performance metrics.</p>
                  <div className="project-buttons">
                     <a href="https://github.com/ZaraEjaz/CPU-SCHEDULAR" target="_blank" rel="noopener noreferrer" className="github-redirect" aria-label="Visit on GitHub">
                     <img src="./svg/github.svg" alt="github redirect button" />
                     </a>
                  </div>
               </div>
               <div className="image-div">
                  <img src="./Images/CPUS.jpg" alt="CPUS" />
               </div>
            </div>
         </div>
         {/* Add other project-boxes here */}
         <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box5" id="project-box5">
               <div className="info-div">
                  <article className="ProjectHeading">Algorithm Visualizer</article>
                  <p className="ProjectDescription">
                  Project demonstrates CPU scheduling and page replacement algorithms to enhance understanding of process management and memory usage in operating systems. </p>
                  <div className="project-buttons">
                     <a href="https://github.com/ZaraEjaz/Algorithm-Visualizer" target="_blank" rel="noopener noreferrer" className="github-redirect" aria-label="Visit on GitHub">
                     <img src="./svg/github.svg" alt="github redirect button" />
                     </a>
                  </div>
               </div>
               <div className="image-div">
                  <img src="./Images/AlgorithmVisualizer.png" alt="CPUS" />
               </div>
            </div>
         </div>
      </div>
   </div>
</section>

</>
);
};
export default Projects;