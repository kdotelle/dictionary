import "./App.css";
import { useState, useEffect } from "react";
import Word from "./Word.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Word Of The Day</p>
      </header>
      <Word />
    </div>
  );
}

export default App;
