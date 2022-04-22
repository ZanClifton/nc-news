import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";
import { Onions } from "./Onions";

export const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setIsLoading(false);
        setArticle(articleFromApi);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [article_id]);

  if (err) return <p>{err}</p>;

  if (isLoading)
    return <h2 className="article-head">Fetching the good stuff...</h2>;

  return (
    <div className="an-article">
      <h1 className="an-article-head">{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.topic}</p>
      <p>{article.body}</p>
      <div className="article-onions">
        <Onions
          votes={article.votes}
          article_id={article_id}
          setArticle={setArticle}
          article={article}
        />
      </div>
    </div>
  );
};
