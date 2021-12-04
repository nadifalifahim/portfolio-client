import React from "react";
import "./InstantMessage.css";

const InstantMessage = () => {
  return (
    <div className="instantMessage-container">
      <div className="instantMessage-circle">
        <i className="far fa-comment-dots"></i>
        <div className="instantMessage-message">
          <input placeholder="Name" type="email" />
          <textarea placeholder="Your Message"></textarea>
        </div>
      </div>
    </div>
  );
};

export default InstantMessage;
