import { patchOnions } from "../utils/api";

export const Onions = ({ votes, article_id, setArticle, article }) => {
  const handleOnions = (increment) => {
    setArticle({ ...article, votes: votes + increment });
    patchOnions(article_id, increment).then(({ data }) => {
      console.log("That'll do, Donkey. That'll do.");
    });
  };

  return (
    <div className="onion-buttons">
      <button className="onion-button" onClick={() => handleOnions(1)}>
        🎁 GIVE ONION 🧅
      </button>
      <div className="onion-counter">🧅🧅🧅 {votes} 🧅🧅🧅</div>
      <button className="onion-button" onClick={() => handleOnions(-1)}>
        💥 SMASH ONION 🧅
      </button>
    </div>
  );
};

// 🧅
