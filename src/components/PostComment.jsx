import { useState, useContext } from "react";
import { postCommentById } from "../utils/api";
import { UserContext } from "../Context/User";

const PostComment = ({ article_id, comments, setComments }) => {
  const { isLoggedIn } = useContext(UserContext);
  const [comment, setComment] = useState({
    username: isLoggedIn,
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    postCommentById(article_id, comment.body, comment.username.username);
    setComment((currentComment) => ({
      ...currentComment,
      body: "",
    }));
    setComments((currComments) => {
      return [
        {
          author: comment.username.username,
          body: comment.body,
          votes: 0,
          comment_id: -1,
        },
        ...currComments,
      ];
    });
  };

  return (
    <>
      <form className="comment-form" onSubmit={handleSubmit}>
        <input
          disabled={!isLoggedIn}
          className="comment-input"
          placeholder="Share your thoughts..."
          onChange={(event) => {
            setComment((currentComment) => ({
              ...currentComment,
              body: event.target.value,
            }));
          }}
          value={comment.body}
        />
        <button disabled={!isLoggedIn} type="submit" className="comment-button">
          Post Comment
        </button>
      </form>
    </>
  );
};

export default PostComment;
