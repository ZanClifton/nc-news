import axios from "axios";

const shrellyApi = axios.create({
  baseURL: "https://shrelly-mail-online.herokuapp.com/api",
});

export const getArticles = () => {
  return shrellyApi.get("/articles").then(({ data }) => {
    return data.articles;
  })
}