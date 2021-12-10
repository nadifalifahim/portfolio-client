import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Fade from "react-reveal/Fade";

const Contact = () => {
  const form = useRef();

  const handleContactSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_23n2qks",
        "template_r2wmior",
        form.current,
        "user_6eQvqo4AWs4VW3nm3viK9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact-container">
      <Fade>
        <div className="contact-content">
          <p className="contact-heading">
            Thanks for taking the time to reach out. <br /> How can I help you
            today?
          </p>
          <div className="contact-items-container">
            {/* <div className="contact-left-items-container">
              <div className="contact-left-items">
                <i className="fas fa-map-marked-alt"></i>
                <div>
                  <h2>Address</h2>
                  <p>Dhaka Bangladesh</p>
                </div>
              </div>
              <div className="contact-left-items">
                <i className="fas fa-mobile-alt"></i>
                <div>
                  <h2>Phone</h2>
                  <p>+8801775011022</p>
                </div>
              </div>
              <div className="contact-left-items">
                <i className="fas fa-paper-plane"></i>
                <div>
                  <h2>Email</h2>
                  <p>nadifalifahim@gmail.com</p>
                </div>
              </div>
            </div> */}
            <div className="contact-form-container">
              <form ref={form} onSubmit={handleContactSubmit}>
                <div className="nameemail-container">
                  <div className="contact-form-content">
                    <label>Name</label>
                    <input type="text" name="name" />
                  </div>
                  <div className="nameemail-space"></div>
                  <div className="contact-form-content">
                    <label>Email *</label>
                    <input type="text" name="email" required />
                  </div>
                </div>
                <div className="message-space"></div>
                <div className="contact-form-content">
                  <label>Message</label>
                  <textarea name="message" className="form-text-area" />
                </div>
                <button type="submit" className="form-submit-button">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
