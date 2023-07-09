import axiosAuth from "axios";

const instance = axiosAuth.create({
  baseURL: process.env.REACT_APP_API_PUB_AUTH,
  withCredentials: true,
});

export default instance;
