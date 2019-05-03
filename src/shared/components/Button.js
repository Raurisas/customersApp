import React from 'react';

const Button = props => {
  const { type, onClick, label, loading } = props;
  const placeholder = loading ? 'Loading...' : label;
  return <input className="button" type={type} value={placeholder} onClick={onClick} disabled={loading} />;
};

export default Button;
