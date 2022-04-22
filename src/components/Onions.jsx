import { patchOnions } from "../utils/api";

export const Onions = ({ votes, article_id, setArticle, article }) => {
  console.log(article_id);
  const handleOnions = (increment) => {
    setArticle({ ...article, votes: votes + increment });
    patchOnions(article_id, increment).then(({}) => {
      // console.log(article_id, increment, "<< article_id, increment");
    });
  };

  return (
    <div className="onion-button">
      <p>🧅🧅🧅: {votes}</p>
      <button onClick={() => handleOnions(1)}>Give 🧅</button>
      <button onClick={() => handleOnions(-1)}>Smash 🧅</button>
    </div>
  );
};

// 🧅
