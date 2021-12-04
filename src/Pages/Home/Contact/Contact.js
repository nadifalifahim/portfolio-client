import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

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
      <div className="contact-content">
        <h1>Get in touch</h1>
        <p>
          Thanks for taking the time to reach out. How can I help you today?
        </p>
        <div className="contact-items-container">
          <div className="contact-left-items-container">
            <div className="contact-left-items">
              <i className="fas fa-map-marked-alt"></i>
              <div>
                <h2>Reach me</h2>
                <p>Dhaka Bangladesh</p>
              </div>
            </div>
            <div className="contact-left-items">
              <i className="fas fa-mobile-alt"></i>
              <div>
                <h2>Call me</h2>
                <p>+8801775011022</p>
              </div>
            </div>
            <div className="contact-left-items">
              <i className="fas fa-paper-plane"></i>
              <div>
                <h2>Mail me</h2>
                <p>nadifalifahim@gmail.com</p>
              </div>
            </div>
          </div>
          <div>
            <form ref={form} onSubmit={handleContactSubmit}>
              <div>
                <div>
                  <label>Name</label> <br />
                  <input type="text" name="name" />
                </div>
                <div>
                  <label>Email*</label> <br />
                  <input type="text" name="email" required />
                </div>
              </div>
              <label>Your Message</label>
              <textarea name="message" className="form-text-area" />
              <button type="submit" className="form-submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
