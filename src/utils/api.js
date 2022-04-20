import axios from "axios";

const shrellyApi = axios.create({
  baseURL: "https://shrelly-mail-online.herokuapp.com/api",
});

export const getArticles = () => {
  return shrellyApi.get("/articles").then(({ data }) => {
    return data.articles;
  })
}

export const getTopics = () => {
  return shrellyApi.get("/topics").then(({ data }) => {
    // console.log(data.topics)
    return data.topics
  })
}