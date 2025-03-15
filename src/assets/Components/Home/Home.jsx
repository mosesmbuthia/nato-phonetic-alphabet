import { useState } from "react";
import "./Home.css";

const phoneticAlphabet = {
  A: "Alpha", B: "Bravo", C: "Charlie", D: "Delta", E: "Echo",
  F: "Foxtrot", G: "Golf", H: "Hotel", I: "India", J: "Juliett",
  K: "Kilo", L: "Lima", M: "Mike", N: "November", O: "Oscar",
  P: "Papa", Q: "Quebec", R: "Romeo", S: "Sierra", T: "Tango",
  U: "Uniform", V: "Victor", W: "Whiskey", X: "X-ray", Y: "Yankee",
  Z: "Zulu", "0": "Zero", "1": "One", "2": "Two", "3": "Three",
  "4": "Four", "5": "Five", "6": "Six", "7": "Seven", "8": "Eight",
  "9": "Nine", "!": "Exclamation mark", '"': "Double quote", "#": "Hash",
  "$": "Dollar sign", "%": "Percent sign", "&": "Ampersand", "'": "Apostrophe",
  "(": "Left parenthesis", ")": "Right parenthesis", "*": "Asterisk",
  "+": "Plus sign", ",": "Comma", "-": "Hyphen", ".": "Period",
  "/": "Slash", ":": "Colon", ";": "Semicolon", "<": "Less than",
  "=": "Equals sign", ">": "Greater than", "?": "Question mark",
  "@": "At symbol", "[": "Left square bracket", "\\": "Backslash",
  "]": "Right square bracket", "^": "Caret", "_": "Underscore",
  "`": "Grave accent", "{": "Left curly brace", "|": "Vertical bar",
  "}": "Right curly brace", "~": "Tilde"
};

function Home() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const convertToPhonetic = (text) => {
    return text
      .toUpperCase()
      .split("")
      .map((char) => phoneticAlphabet[char] || char)
      .join(" ");
  };

  return (
    <div className="home-page">
      <div className="home">
        <h1>nato phonetic alpabet</h1>
        <p>
          convert text to{" "}
          <a href="https://en.wikipedia.org/wiki/NATO_phonetic_alphabet">
            nato phonetic alphabet
          </a>
        </p>
        <div className="input-form">
          <input
            type="text"
            placeholder="type your text here..."
            value={input}
            onChange={handleInputChange}
          />
        </div>
        <p className="output">{input && convertToPhonetic(input)}</p>
      </div>
    </div>
  );
}

export default Home;
