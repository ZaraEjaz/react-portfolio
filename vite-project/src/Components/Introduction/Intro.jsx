import React from 'react';
import './intro.css';
import Custombtn from '../LetsTalkbtn/Custombtn';
const Intro = () => {
  return (
    <div id='Intro'className="container Introcontainer">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6 col-sm-12 intro-text">
          <p className="tracking-in-expand-fwd-bottom mb-5">About me .____________________</p>
          <h1 className="tracking-in-expand-fwd-bottom mb-5">Zara Ejaz</h1>
          <p className="intro-paragraph tracking-in-expand-fwd-bottom">
          As a web developer with expertise in frontend web design, I have a passion for creating engaging web interfaces, collaborating with others, and developing innovative products. <br /><br />
          I prioritize a straightforward content structure, elegant design patterns, and meaningful interactions.</p>
          
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
  );
}

export default Intro;
