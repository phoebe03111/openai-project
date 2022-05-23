import { MdDelete } from "react-icons/md";
import "./ResponseList.scss";

const ResponseList = ({ results, handleDelete }) => {
  return (
    <section className="response">
      {results.length === 0 ? (
        <h3>Enter a text prompt in the form!</h3>
      ) : (
        results.map((result) => (
          <article key={result.id} className="response__result">
            <div className="response__content">
              <h3 className="response__prompt">💡 {result.prompt}</h3>
              <p className="response__res">{result.response}</p>
            </div>
            <div className="response__delete">
              <MdDelete onClick={() => handleDelete(result.id)} size={25} />
            </div>
          </article>
        ))
      )}
    </section>
  );
};

export default ResponseList;
