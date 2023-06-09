import React from "react";
import App from "../App";
import { useNavigate } from "react-router-dom";
function Admin({ changeLog }) {
  const navigate = useNavigate();
  return (
    <div>
      <img
        style={{ width: "100px", height: "100px" }}
        src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1"
        alt="pic"
      />
      <h1>This is Admin Page</h1>
      <button
        className="click"
        onClick={() => {
          changeLog(false);
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Admin;
