import React from 'react';

const CustomComponent2 = ({ title, description, details }) => {
  return (
    <div style={{background: "yellow"}}>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{details}</p>
    </div>
  );
};

export default CustomComponent2;
