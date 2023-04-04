import React, { Children, useState } from "react";
import App from "../App";
import { useParams } from "react-router-dom";

const Profile = () => {
    const { studentId } = useParams();
  return (
    <div>
      <h1 >This Student ID of users is {studentId}</h1>
    </div>
  );
};

export default Profile;
