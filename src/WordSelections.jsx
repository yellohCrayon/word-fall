import { useRef, useState, useEffect } from "react";
const max = window.innerWidth - (40 + 100);
const min = 20;
export const WordSelections = ({
  responseWord,
  words = ["asdasdf", "asdfasdfa", "asdfasdf", "asdfadff", "asdfsgf"],
}) => {
  const prevWordsRef = useRef(null);
  const [wordPositions, setWordPositions] = useState([]);
  useEffect(() => {
    if (prevWordsRef !== words) {
      const positions = words.map((word) => {
        return { word, position: Math.random() * (max - min) + min };
      });
      console.log("positions", positions);
      setWordPositions(positions);
    }
    prevWordsRef.current = words;
  }, []);
  return (
    <div className="wordContainer">
      {wordPositions.map((word) => (
        <div
          style={{ left: word.position }}
          className={`word ${word.word.includes(responseWord) ? "found" : ""}`}
        >
          {word.word}
        </div>
      ))}
    </div>
  );
};
