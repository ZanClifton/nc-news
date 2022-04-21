import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setErr(null);
      })
      .catch((err) => {
        setErr("Topic not found! 😭");
      });
  }, [topic]);

  if (err) return <p>{err}</p>;

  return (
    <div className="article-container">
      <h2 className="article-head">What's New?</h2>
      <ul className="article-list">
        {articles.map(({ article_id, author, topic, title }) => {
          return (
            <li key={article_id} className="article-card">
              <h3>{title}</h3>
              <p>{author}</p>
              <p>{topic}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
