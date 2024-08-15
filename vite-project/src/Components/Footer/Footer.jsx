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
              <div className="col-md-6 mb-6">
                <section id="contact" className="d-flex justify-content-center">
                  <div className="card p-4" style={{ maxWidth: '600px', width: '100%' }}>
                    <div className="intro-text mb-4">
                      <p className="tracking-in-expand-fwd-bottom" data-aos="fade-up">
                        Contact me .______________________
                      </p>
                    </div>
                    <form id="contact-form" onSubmit={sendEmail}>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Name"
                          name="name"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Email"
                          name="email"
                          required
                        />
                      </div>
                      <div className="form-group mb-3">
                        <textarea
                          className="form-control"
                          rows="5"
                          id="message"
                          placeholder="Message"
                          name="message"
                          required
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </section>
              </div>

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
              {/* Black vertical footer at the bottom */}
              <div className="black-footer">
          <p className="text-center text-white mb-0">Made and designed by Zara</p>
        </div>
    </>
  );
};

export default Footer;
