import React from 'react';

export const ButtoN = (props) => {
  const buttonStyle = {
    backgroundColor: '#f5f5f5',
    color: '#333',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '0px',
    cursor: 'pointer',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 


    ...props.style,
  };

  return (
    <div>
      <button style={buttonStyle}>{props.text}</button>
    </div>
  );
};
