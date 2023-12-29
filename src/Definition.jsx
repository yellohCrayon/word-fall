import { useState, useEffect } from "react";
import { getRandomWord, getWordDefinition } from "./api";

export const Definition = ({ onNewWords }) => {
  const [wordDefinition, setWordDefinition] = useState();
  const [isFetching, setIsFetching] = useState();

  useEffect(() => {
    if (!wordDefinition && !isFetching) {
      (async () => {
        setIsFetching(true)
        const newWords = [];
        for (let i = 0; i < 7; i++) {
          const { word } = await getRandomWord();
          newWords[i] = word;
        }
        const response = await getWordDefinition(newWords[0]);
        setWordDefinition(
          response.results ? response.results[0].definition : "none"
        );
        onNewWords(newWords);
        setIsFetching(false)
      })();
    }
  }, [wordDefinition, onNewWords, setWordDefinition, isFetching]);

  return <div className="wordDefinition">{wordDefinition}</div>;
};
