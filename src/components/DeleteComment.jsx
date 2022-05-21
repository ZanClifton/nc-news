import { useState, useContext } from "react";
import { UserContext } from "../Context/User";
import { deleteComment } from "../utils/api";

export const DeleteComment = ({
  author,
  comment_id,
  comments,
  setComments,
}) => {
  const { isLoggedIn } = useContext(UserContext);

  const handleDelete = () => {
    deleteComment(comment_id);
    const remainingComments = comments.filter((comment) => {
      return comment.comment_id !== comment_id;
    });
    setComments(remainingComments);
  };

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
