import React, { Children, useState } from "react";
import App from '../App'
const Home = ({changeLog}) => {
  return (
    <div>
      <h1>This is Home Page</h1>
      <button className="click" onClick={() =>changeLog(true)}>
        Log in
      </button>
    </div>
  );
};

export default Home;


