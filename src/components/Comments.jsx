import { useEffect, useState } from "react";
import { getComments } from "../utils/api";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getComments(article_id)
      .then((commentsFromApi) => {
        setIsLoading(false);
        setComments(commentsFromApi);
      })
      .catch((err) => {
        setErr(err);
      });
  });

  if (err) return <p>{err}</p>;

  if (isLoading)
    return (
      <h2 className="article-head">
        Well my stomach aches and my palms just got sweaty; must be loading
        comments...
      </h2>
    );

  return (
    <div>
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li className="comment-card" key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>🧅🧅🧅 = {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
