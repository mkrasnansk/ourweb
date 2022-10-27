import React from "react";
import { Link } from "react-router-dom";

const SubscribeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="form-wrapper">
      <form onClick={handleSubmit} className="position-relative">
        <input type="email" placeholder="Email address" />
        <button>
          <i className="bi bi-envelope"></i>
        </button>
      </form>

      <div className="info">
        Already a member? <Link to="/sign-in">Sign in.</Link>
      </div>
    </div>
  );
};

export default SubscribeForm;
