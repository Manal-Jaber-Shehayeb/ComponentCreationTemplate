import React from 'react';

const CustomComponent1 = ({ title, description }) => {
  return (
    <div style={{background: "red"}}>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CustomComponent1;
