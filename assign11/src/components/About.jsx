import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate=useNavigate();
  return (
    <div>
      <h1>This is About Page</h1>
      <button className="click" onClick={() => navigate("/")}>
        Redirect
      </button>
    </div>
  );
};

export default About;
