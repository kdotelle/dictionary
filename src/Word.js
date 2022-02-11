import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { API_KEY } from "./key.js";
import "./Word.css";

function Word() {
  const [word, setWord] = useState("Word");
  const [definition, setDefinition] = useState(null);
  const [partOfSpeech, setPartOfSpeech] = useState(null);

  const options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/incredible/definitions`,
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": `${API_KEY}`,
    },
  };
  const getDefinition = () => {
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

  const random = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/",
    params: { random: "true" },
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": `${API_KEY}`,
    },
  };

  const getRandom = () => {
    axios
      .request(random)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data.word);
        setWord(response.data.word);

        response.data.results
          ? setDefinition(response.data.results[0].definition)
          : setDefinition(null);
        //setPartOfSpeech(response.data.definitions[0].partOfSpeech);
        response.data.results
          ? setPartOfSpeech(response.data.results[0].partOfSpeech)
          : setPartOfSpeech();
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
            onClick={getRandom}
            className="button"
          >
            Get Random Word
          </Button>
          <Button
            block
            size="lg"
            color="primary"
            onClick={getDefinition}
            className="button"
          >
            Incredible
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Word;
