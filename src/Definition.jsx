import { useState, useEffect } from "react";
import { getRandomWord, getWordDefinition } from "./api";

export const Definition = ({ onNewWords }) => {
  const [wordDefinition, setWordDefinition] = useState();
  let fetching = false

  useEffect(() => {
    if (!wordDefinition && !fetching) {
      fetching = true;
      (async () => {
<<<<<<< Updated upstream
        const response = await getRandomWord();
        setMainWord(response?.word);
        setWordDefinition(
          response.results ? response.results[0]?.definition : null
=======
        const newWords = [];
        for (let i = 0; i < 7; i++) {
          const { word } = await getRandomWord();
          newWords[i] = word
        }
        const response = await getWordDefinition(newWords[0]);
        setWordDefinition(
          response.results ? response.results[0].definition : 'none'
>>>>>>> Stashed changes
        );
        onNewWords(newWords)
        fetching = false

      })()
    }
  }, [wordDefinition, setWordDefinition, fetching]);

  return <div className="wordDefinition">{wordDefinition}</div>;
};
