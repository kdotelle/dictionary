import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import "./Word.css";

function Word() {
  const [word, setWord] = useState("Word");
  const [definition, setDefinition] = useState(null);
  const [partOfSpeech, setPartOfSpeech] = useState(null);

  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/incredible/definitions",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "e96beec913msh200b14a276de5f0p130aaejsnf9f796cbb918",
    },
  };
  const getWord = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWord(response.data.word);
        setDefinition(response.data.definitions[0].definition);
        setPartOfSpeech(response.data.definitions[0].partOfSpeech);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div className="container">
      <div className="row word">
        <div className="col-sm-6">
          <h1>{word}</h1>
          {definition && (
            <p>
              {partOfSpeech}: {definition}
            </p>
          )}
        </div>
        <div className="col-sm-6">
          <Button
            block
            size="lg"
            color="secondary"
            onClick={getWord}
            className="button"
          >
            Get Word
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Word;
