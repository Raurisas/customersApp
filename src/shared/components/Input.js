import React from 'react';

const Input = props => {
  const { name, type, value, handleChange, placeholder, required } = props;
  return (
    <input
      className="default-input"
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
