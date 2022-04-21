import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { getArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return <div className="article-container">
    <h2 className="article-head">What's New?</h2>
    <ul className="article-list">
      {articles.map(({ article_id, author, topic, title }) => {
        return (
          <li key={article_id} className="article-card">
            <h3>{title}</h3>
            <p>{author}</p>
            <p>{topic}</p>
            {/* <Link to={`/articles/${article_id}`} className="Articles"> */}
            {/* </Link> */}
          </li>
        )
      })}
    </ul>
  </div>
};
