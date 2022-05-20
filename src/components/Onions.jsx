import { useContext, useState } from "react";
import { patchOnions } from "../utils/api";
import { UserContext } from "../Context/User";

export const Onions = ({ votes, article_id, setArticle, article }) => {
  const { isLoggedIn } = useContext(UserContext);

  const handleOnions = (increment) => {
    setArticle({ ...article, votes: votes + increment });
    patchOnions(article_id, increment).then(({ data }) => {
      console.log("That'll do, Donkey. That'll do.");
    });
  };

  return (
    <div className="onion-buttons">
      <button
        disabled={!isLoggedIn}
        className="onion-button"
        onClick={() => handleOnions(1)}
      >
        🎁 GIVE ONION 🧅
      </button>
      <div className="onion-counter">🧅🧅🧅 {votes} 🧅🧅🧅</div>
      <button
        disabled={!isLoggedIn}
        className="onion-button"
        onClick={() => handleOnions(-1)}
      >
        💥 SMASH ONION 🧅
      </button>
    </div>
  );
};

// 🧅
