import { MdDelete } from "react-icons/md";

const ResponseList = ({ results, handleDelete }) => {
  return (
    <section>
      {results.length === 0 ? (
        <p>Write something!</p>
      ) : (
        results.map((result) => (
          <article key={result.id}>
            <h4>{result.prompt}</h4>
            <p>{result.response}</p>
            <MdDelete onClick={() => handleDelete(result.id)} />
          </article>
        ))
      )}
    </section>
  );
};

export default ResponseList;
