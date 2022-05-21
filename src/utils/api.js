import axios from "axios";

const shrellyApi = axios.create({
  baseURL: "https://shrelly-mail-online.herokuapp.com/api",
});

export const getArticles = (topic, sort_by, order) => {
  return shrellyApi
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sort_by,
        order: order,
      },
    })
    .then(({ data }) => {
      return data.articles;
    });
};

export const getTopics = () => {
  return shrellyApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getSingleArticle = (article_id) => {
  return shrellyApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const patchOnions = (article_id, increment) => {
  return shrellyApi
    .patch(`/articles/${article_id}`, {
      inc_votes: increment,
    })
    .then((res) => {
      return res.data;
    });
};

export const getComments = (article_id) => {
  return shrellyApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const getUsers = () => {
  return shrellyApi.get("/users").then(({ data }) => {
    return data.users;
  });
};

export const postCommentById = (article_id, body, username) => {
  return shrellyApi.post(`/articles/${article_id}/comments`, {
    body,
    username,
  });
};

export const deleteComment = (comment_id) => {
  console.log(comment_id);
  return shrellyApi.delete(`/comments/${comment_id}`);
};
