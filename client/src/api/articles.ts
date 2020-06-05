import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { setHeader } from "./index";

export type ParamsUsersType = {
  order?: string;
  offset?: number;
  limit?: number;
};

const defaultParams = {
  order: "name",
  offset: 0,
  limit: 10
};

export default {
  getAllPosts: async () => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/posts`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  getPostsUserById: async (userId: number) => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/users/${userId}/posts`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  getPostById: async (id: number) => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/posts/${id}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  }
};
