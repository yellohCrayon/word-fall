import React from 'react';

import { useState } from "react";
import logo from "./logo.svg";
import "./style.css";

import { Definition } from "./Definition";
import { Answer } from "./Answer";
import { WordSelections } from "./WordSelections";

function App() {
  const [responseWord, setResponseWord] = useState();
  const onResponse = (response) => {
    setResponseWord(response);
  };

  const generateWords = (mainWord) => {
    return mainWord;
  };

  return (
    <div className="app">
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <span className="title">ord Fall</span>
      </div>

      <Definition generateWords={generateWords} />
      <WordSelections responseWord={responseWord} />
      <Answer onResponse={onResponse} />
    </div>
  );
}

export default App;
