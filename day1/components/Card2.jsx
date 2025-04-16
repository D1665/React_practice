import React from "react";

function Card2(props) {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      padding: "16px", 
      borderRadius: "8px", 
      maxWidth: "250px", 
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <img 
        src={props.image} 
        alt={props.name} 
        style={{ 
          width: "100%", 
          height: "auto", 
          borderRadius: "8px" 
        }} 
      />
      <h2>{props.name}</h2>
      <p><strong>City:</strong> {props.city}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Profession:</strong> {props.profession}</p>
    </div>
  );
}

export default Card2;
