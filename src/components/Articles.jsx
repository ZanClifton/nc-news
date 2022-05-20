import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../utils/api";

export const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { topic } = useParams();
  const sort_by = searchParams.get("sort_by");
  const order = searchParams.get("order");

  useEffect(() => {
    getArticles(topic, sort_by, order)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
        setErr(null);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [topic, sort_by, order]);

  if (err) return <p>{err}</p>;

  if (isLoading)
    return <h2 className="article-head">Fetching the good stuff...</h2>;

  return (
    <div className="article-container">
      <h2 className="article-head">What's New?</h2>
      <div className="query-container">
        <div className="query">
          <label className="query-label" forhtml="sort_by">
            Sort By:
          </label>
          <select
            className="query-selector"
            id="sort_by"
            name="sort_by"
            onChange={(event) => {
              const targetValue = {
                sort_by: event.target.value,
                order: "desc",
              };
              setSearchParams(targetValue);
            }}
          >
            <option value="comment_count">Comments</option>
            <option value="created_at">Date</option>
            <option value="votes">Onions</option>
          </select>
        </div>
        <div className="query">
          <label className="query-label" forhtml="sort_by">
            Order:
          </label>
          <select
            id="order"
            name="order"
            onChange={(event) => {
              const targetValue = {
                sort_by: "created_at",
                order: event.target.value,
              };
              setSearchParams(targetValue);
            }}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>
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
