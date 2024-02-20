import axios from "axios";

const instance = axios.create({
  baseURL: "...", // api (cloud function) url
});

export default instance;
