import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnArticle } from "../utils/api";

export const AnArticle = () => {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    getAnArticle(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
    });
  }, [article_id]);

  console.log(article_id, "<< article_id");

  return (
    <div className="an-article">
      <h1 className="an-article-head">{article.title}</h1>
      <p>{article.author}</p>
      <p>{article.topic}</p>
      <p>{article.body}</p>
    </div>
  );
};
