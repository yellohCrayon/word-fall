import { useState, useEffect } from "react";
import { getWordDefinition, getRandomWord } from "./api";

export const Definition = ({ generateWords }) => {
  const [wordDefinition, setWordDefinition] = useState();
  const [mainWord, setMainWord] = useState();

  useEffect(() => {
    if (!mainWord) {
      (async () => {
        const response = await getRandomWord();
        setMainWord(response?.word);
        setWordDefinition(
          response.results ? response.results[0]?.definition : null
        );
        generateWords(mainWord);
      })();
    }
  }, [setMainWord, setWordDefinition, generateWords, mainWord]);

  return <div className="wordDefinition">{wordDefinition}</div>;
};
