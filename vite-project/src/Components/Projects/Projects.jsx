
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
                  <article className="ProjectHeading">citylinkholidays</article>
                  <p className="ProjectDescription">
                     Developed with my software development team, Quantaflix.com is a collaborative project that showcases our collective expertise in creating dynamic and engaging web solutions.
                  </p>
                  <div className="project-buttons">
                     <a href="https://citylinkholidays.com/" target="_blank" className="cta"
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
                  <img src="./Images/Quantaflix.jpg" alt="Quantaflix" />
               </div>
            </div>
         </div>
         <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box2" id="project-box2">
               <div className="info-div">
                  <article className="ProjectHeading">Library Mangment System</article>
                  <p className="ProjectDescription">
                     Developed in Java using Object-Oriented Programming principles, aimed at efficiently managing library resources and member activities.
                  </p>
                  <div className="project-buttons">
                     <a href="https://github.com/ZaraEjaz/Library-Management-System" target="_blank" rel="noopener noreferrer" className="github-redirect" aria-label="Visit on GitHub">
                     <img src="./svg/github.svg" alt="github redirect button" />
                     </a>
                  </div>
               </div>
               <div className="image-div">
                  <img src="./Images/LMS.png" alt="Pexelicon website preview image" />
               </div>
            </div>
         </div>
         {/* Repeat similar structure for other project boxes */}
         {/* REPMS*/}
         <div className="project-box-wrapper" data-aos="fade-up">
            <div className="project-box project-box5" id="project-box5">
               <div className="info-div">
                  <article className="ProjectHeading">Real Estate Management System</article>
                  <p className="ProjectDescription">
                     A web app built with ASP.NET and C# that streamlines property management and automates tasks for efficiency.                
                  </p>
                  <div className="project-buttons">
                     <a href=" " target="_blank" rel="noopener noreferrer" className="github-redirect" aria-label="Visit on GitHub">
                     <img src="./svg/github.svg" alt="github redirect button" />
                     </a>
                  </div>
               </div>
               <div className="image-div">
                  <img src="./Images/PMS.jpg" alt="REMS" />
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
                  This project demonstrates CPU scheduling and page replacement algorithms to enhance understanding of process management and memory usage in operating systems. By simulating these algorithms, it highlights their impact on system performance and efficiency.</p>
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