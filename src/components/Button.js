import React from 'react';

const Button = ({ text, clickHandle }) => (
  <button className="button" onClick={clickHandle}>{ text }</button>
);

export default Button;
