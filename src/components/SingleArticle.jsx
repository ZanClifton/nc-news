import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";
import { Onions } from "./Onions";
import { Comments } from "./Comments";
import ErrorPage from "./ErrorPage";

export const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getSingleArticle(article_id)
      .then((articleFromApi) => {
        setIsLoading(false);
        setArticle(articleFromApi);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  if (error) return <ErrorPage error={error} />;

  if (isLoading)
    return <h2 className="article-head">Fetching the good stuff...</h2>;

  return (
    <div className="an-article">
      <h1 className="an-article-head">{article.title}</h1>
      <p className="article-topic">
        Posted in {article.topic} by {article.author}
      </p>
      <p className="article-body">{article.body}</p>
      <div className="article-onions">
        <Onions
          votes={article.votes}
          article_id={article_id}
          setArticle={setArticle}
          article={article}
        />
      </div>
      <div className="comments">
        <Comments article_id={article_id} />
      </div>
    </div>
  );
};
