import React from 'react';
import { useState } from "react";
import logo from "./logo.svg";
import "./style.css";

import { Definition } from "./Definition";
import { Answer } from "./Answer";
import { WordSelections } from "./WordSelections";

function App() {
  const [responseWord, setResponseWord] = useState();
  const [words, setWords] = useState(null);

  return (
    <div className="app">
      <div className="header">
        <img src={logo} alt="logo" />
        <span className="title">ord Fall</span>
      </div>

      <Definition onNewWords={setWords} />
      <WordSelections words={words} responseWord={responseWord} />
      <Answer onResponse={setResponseWord} />
    </div>
  );
}

export default App;
