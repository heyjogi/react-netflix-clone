import axios from "axios";
import { API_URL } from "../api/config";

const instance = axios.create({
  baseURL: API_URL,
  params: {
    api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
    language: "ko-KR",
  },
});

export default instance;
