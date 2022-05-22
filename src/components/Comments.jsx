import { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import { DeleteComment } from "./DeleteComment";
import PostComment from "./PostComment";
import ErrorPage from "./ErrorPage";

export const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getComments(article_id)
      .then((commentsFromApi) => {
        setIsLoading(false);
        setComments(commentsFromApi);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id, comments]);

  if (error) return <ErrorPage error={error} />;

  if (isLoading)
    return (
      <h2 className="article-head">
        Well my stomach aches and my palms just got sweaty; must be loading
        comments...
      </h2>
    );

  return (
    <div>
      <PostComment
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
      <ul className="comments-list">
        {comments.map((comment) => {
          return (
            <li className="comment-card" key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>{comment.body}</p>
              <p>🧅🧅🧅 = {comment.votes}</p>
              <DeleteComment
                author={comment.author}
                comment_id={comment.comment_id}
                comments={comments}
                setComments={setComments}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
