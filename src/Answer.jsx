export const Answer = ({ onResponse }) => (
  <div className="answerContainer">
    <input
      placeholder="answer..."
      className="answer"
      type="text"
      onChange={(event) => onResponse(event.target.value)}
    />
  </div>
);
