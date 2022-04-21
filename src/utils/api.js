import axios from "axios";

const shrellyApi = axios.create({
  baseURL: "https://shrelly-mail-online.herokuapp.com/api",
});

export const getArticles = (topic) => {

  return shrellyApi
  .get("/articles", {
    params: {
      topic: topic
    }
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