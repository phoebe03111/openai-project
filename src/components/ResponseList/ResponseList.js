import React from "react";

const ResponseList = ({ results }) => {
  return (
    <section>
      {results.map((result) => (
        <article key={result.id}>
          <h4>{result.prompt}</h4>
          <p>{result.response}</p>
        </article>
      ))}
    </section>
  );
};

export default ResponseList;
