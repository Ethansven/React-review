import React from "react";
import "../style/Card.css"

function Card({user={}}) {
  
 return (
    <div className="card-container">
       
        <p className="text">Name: {user.name}</p>
        <p className="text">Job: {user.job}</p>
        <p className="text">Hobby: {user.hobby}</p>
      
    </div>
    
    
    
  );
}


export default Card;