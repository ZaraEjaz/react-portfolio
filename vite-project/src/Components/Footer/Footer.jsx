import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
import Media from '../Media/Media';
import emailjs from 'emailjs-com';

const Footer = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <>
      <div className="container">
        <footer id="footer" className="py-5">
          <div className="container">
            <div className="row container">
              {/* Column 1: Media Component */}
              <div className="col-md-1 mb-2">
                
              </div>
              {/* Column 2: Contact Form */}
              

              {/* Column 3: Location, Email, Phone */}
              <div className="col-md-4 mb-4 ml-5">
                <div className="contact-info">
                  <h4>Contact Information</h4><br/>
               
                  <p4><strong>Location:</strong>  &nbsp;Sabir SRE Defence Phase 2 Karachi</p4>
                  
                  <p4><strong>Email:</strong> &nbsp; zaraejaz102003@gmail.com</p4>
                  <p4><strong>Phone:</strong> &nbsp;+92 327 2047558</p4>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
              
    </>
  );
};

export default Footer;
