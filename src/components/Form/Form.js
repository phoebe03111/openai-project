import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { DotWave } from "@uiball/loaders";
import { API_URL } from "../../App";
import ai from "../../assets/image/ai.svg";
import "./Form.scss";

const Form = ({ handleFormSubmit }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // Add a product description
    axios
      .post(
        API_URL,
        {
          prompt: `${input}`,
          temperature: 0.7,
          max_tokens: 64,
          top_p: 1.0,
          frequency_penalty: 0.0,
          presence_penalty: 0.0,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      )
      .then((res) => {
        const newResult = {
          id: uuid(),
          prompt: input,
          response: res.data.choices[0].text,
        };
        handleFormSubmit(newResult);
        setInput("");
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="form__container">
        <img className="form__image" src={ai} alt="artificial intelligence" />
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">Enter a text prompt</label>
          <textarea
            type="text"
            name="prompt"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form__input"
          />
          <p className="form__example">
            (i.e. Write a tagline for an ice cream shop; write a poem about
            flowers by the beach...)
          </p>
          <button type="submit" className="form__button">
            submit
          </button>
        </form>
      </div>
      {loading && <DotWave />}
    </>
  );
};

export default Form;
