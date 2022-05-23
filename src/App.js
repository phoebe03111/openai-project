import { useState } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import ResponseList from "./components/ResponseList/ResponseList";

export const API_URL =
  "https://api.openai.com/v1/engines/text-curie-001/completions";

function App() {
  const [resultArray, setResultArray] = useState([]);

  const handleFormSubmit = (newResult) => {
    setResultArray([newResult, ...resultArray]);
  };

  return (
    <>
      <header>
        <h1>Fun with AI</h1>
      </header>
      <Form handleFormSubmit={handleFormSubmit} />
      <ResponseList results={resultArray} />
    </>
  );
}

export default App;
