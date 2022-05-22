import { useContext, useState } from "react";
import { UserContext } from "../Context/User";
import { deleteComment } from "../utils/api";
import ErrorPage from "./ErrorPage";

export const DeleteComment = ({
  author,
  comment_id,
  comments,
  setComments,
}) => {
  const { isLoggedIn } = useContext(UserContext);
  const [error, setError] = useState(null);

  const handleDelete = () => {
    deleteComment(comment_id);
    const remainingComments = comments.filter((comment) => {
      return comment.comment_id !== comment_id;
    });
    setComments(remainingComments).catch((err) => {
      setError(err);
    });
  };

  if (error) return <ErrorPage error={error} />;

  if (isLoggedIn && author === isLoggedIn.username) {
    return (
      <button
        className="user-button"
        onClick={() => {
          handleDelete();
        }}
      >
        ❌
      </button>
    );
  }
};
