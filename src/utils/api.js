import axios from "axios";

const shrellyApi = axios.create({
  baseURL: "https://shrelly-mail-online.herokuapp.com/api",
});

export const getArticles = (topic) => {
  return shrellyApi
    .get("/articles", {
      params: {
        topic: topic,
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
      inc_votes: increment
    })
    .then((res) => {
      return res.data;
    });
};

export const getComments = (article_id) => {
  return shrellyApi
  .get(`/articles/${article_id}/comments`)
  .then(({ data }) => {
    console.log(data, "<< data")
    console.log(data.comments, "<< data.data")
    return data.comments;
  })
}