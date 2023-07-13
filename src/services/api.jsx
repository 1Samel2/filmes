import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "f41859a04595a109d24417c3255ba418",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
