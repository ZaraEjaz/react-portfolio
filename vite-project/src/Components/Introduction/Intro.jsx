import React from 'react';
import './intro.css';
import Custombtn from '../LetsTalkbtn/Custombtn';
const Intro = () => {
  return (
    <>
    <div className='container' id='Intro'>
      <br/>
    </div>
<div className="container Introcontainer">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6 col-sm-12 intro-text">
          <p className="tracking-in-expand-fwd-bottom mb-5">About me .____________________</p>
          <h1 className="tracking-in-expand-fwd-bottom ">Zara Ejaz</h1>
          <p className="intro-paragraph tracking-in-expand-fwd-bottom">
          Hello, I'm Zara Ejaz — a passionate software engineering student with a flair for web design and development. My journey in the tech world is fueled by a curiosity to explore the endless possibilities of code and a drive to create seamless, user-friendly digital experiences. 
<br /><br />
Welcome to my portfolio, where you can discover the projects that reflect my growth, skills, and commitment to innovation. Let’s build something amazing together!.</p>
          
        </div>

        <div className="col-lg-5 col-md-6 col-sm-12 intro-image text-center tracking-in-expand-fwd-bottom">
          <img src="./Images/dev.jpg" alt="Zara Ejaz" className="intro-img" />
          <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
        </div>
      </div>
      
    </div>
    </>
    
  );
}

export default Intro;
