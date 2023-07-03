import React from 'react';

export const Answer = ({ onResponse }) => {
  const onChange = (event) => {
    onResponse(event.target.value);
  };
  return (
    <div className="answerContainer">
      <input placeholder="answer..." className="answer" type="text" onChange={onChange} />
    </div>
  );
};
