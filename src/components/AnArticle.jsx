import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnArticle } from "../utils/api";
import { Onions } from "./Onions";

export const AnArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [err, setErr] = useState(null);

  useEffect(() => {
    getAnArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi);
      })
      .catch((err) => {
        setErr(err);
      });
  }, [article_id]);

  if (err) return <p>{err}</p>;

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
