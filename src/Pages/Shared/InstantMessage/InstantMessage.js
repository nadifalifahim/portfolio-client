import React, { useState } from "react";
import "./InstantMessage.css";

const InstantMessage = () => {
  const [instantMessageOpen, setInstantMessageOpen] = useState(false);
  return (
    <div className="instantMessage-container">
      <button
        onClick={() => {
          setInstantMessageOpen(!instantMessageOpen);
        }}
      >
        <div className="instantMessage-circle">
          <i className="far fa-comment-dots"></i>
        </div>
      </button>
      {instantMessageOpen && (
        <div className="instantMessage-message">
          <input placeholder="Name" type="email" />
          <textarea rows="8" placeholder="Your Message"></textarea>
        </div>
      )}
    </div>
  );
};

export default InstantMessage;
