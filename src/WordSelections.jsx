import React from 'react';
import { useState, useEffect } from "react";

const spacing = 20;
const max = window.innerWidth - (spacing * 2 + 100);
const min = spacing;

export const WordSelections = ({ responseWord, words }) => {
  const [wordPositions, setWordPositions] = useState([]);

  useEffect(() => {
    if (words && words.length > 0) {
      const positions = words.map((word) => {
        return { word, position: Math.random() * (max - min) + min };
      });
      setWordPositions(positions);
    }
  }, [words]);

  return (
    <div className="wordContainer">
      {wordPositions.map((word, index) => (
        <div
          key={index}
          style={{ left: word.position }}
          className={`word ${word.word.includes(responseWord) ? "found" : ""}`}
        >
          {word.word}
        </div>
      ))}
    </div>
  );
};
