import React from 'react';

const Input = props => {
  const { onSubmit, children } = props;
  return (
    <div>
      <form className="default-form" onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default Input;
