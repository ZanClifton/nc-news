import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [topic]);

  if (err) return <p>{err}</p>;

  if (isLoading)
    return <h2 className="article-head">Fetching the good stuff...</h2>;

  return (
    <div className="article-container">
      <h2 className="article-head">What's New?</h2>
      <ul className="article-list">
        {articles.map(({ article_id, author, topic, title }) => {
          return (
            <li key={article_id} className="article-card">
              <h3 className="card-title">
                <Link to={`/articles/${article_id}`}>{title}</Link>
              </h3>
              <p>{author}</p>
              <p>{topic}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
