import React, { useRef, useState } from "react";
import "./InstantMessage.css";
import emailjs from "emailjs-com";

const InstantMessage = () => {
  const [instantMessageOpen, setInstantMessageOpen] = useState(false);
  const instantForm = useRef();

  const handleInstantMessageOpen = () => {
    setInstantMessageOpen(!instantMessageOpen);
    if (!instantMessageOpen) {
      document
        .querySelector(".instantMessage-circle")
        .classList.add("instantMessageOpened");
    } else {
      document
        .querySelector(".instantMessage-circle")
        .classList.remove("instantMessageOpened");
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_23n2qks",
        "template_5cwfqs9",
        instantForm.current,
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
    setInstantMessageOpen(false);
  };

  const handleCloseButton = () => {
    setInstantMessageOpen(false);
  };

  return (
    <div className="instantMessage-container">
      <button
        className="instantMessage-open"
        onClick={handleInstantMessageOpen}
      >
        <div className="instantMessage-circle">
          <i className="far fa-comment-dots"></i>
        </div>
      </button>
      {instantMessageOpen && (
        <form ref={instantForm}>
          <div className="instantMessage-message">
            <div className="instantMessage-heading">
              <p>Send a message</p>
              <button onClick={handleCloseButton}>
                <i className="fas fa-times"></i>
              </button>
            </div>
            <input placeholder="Email" type="email" name="email" />
            <textarea
              rows="8"
              placeholder="Your Message"
              name="message"
            ></textarea>
            <button
              onClick={handleSendMessage}
              className="instantMessage-sendbutton"
            >
              Send <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default InstantMessage;
