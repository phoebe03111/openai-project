import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import ResponseList from "./components/ResponseList/ResponseList";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export const API_URL =
  "https://api.openai.com/v1/engines/text-curie-001/completions";

const existingResults =
  JSON.parse(sessionStorage.getItem("searchResults")) || [];

function App() {
  const [resultArray, setResultArray] = useState(existingResults);

  // Get the results saved in sessionStorage when page loads
  useEffect(() => {
    sessionStorage.setItem("searchResults", JSON.stringify(resultArray));
  }, [resultArray]);

  const handleFormSubmit = (newResult) => {
    setResultArray([newResult, ...resultArray]);
  };

  const handleDelete = (resultId) => {
    const updatedArray = resultArray.filter((result) => result.id !== resultId);
    setResultArray(updatedArray);
  };

  return (
    <>
      <Header />

      <main>
        <Form handleFormSubmit={handleFormSubmit} />
        <ResponseList results={resultArray} handleDelete={handleDelete} />
      </main>

      <Footer />
    </>
  );
}

export default App;
