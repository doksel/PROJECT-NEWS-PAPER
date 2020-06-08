import axios, { AxiosRequestConfig } from "axios";
import qs from "qs";
import { setHeader } from "./index";

type ArticleType = any;

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
  getAll: async (params: ParamsUsersType = defaultParams) => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/posts?${qs.stringify(
        params
      )}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  getAllByUserId: async (
    userId: number,
    params: ParamsUsersType = defaultParams
  ) => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${
        process.env.REACT_APP_SERVER_HOST
      }/users/${userId}/posts?${qs.stringify(params)}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  getAllByCategoryId: async (
    categoryId: number,
    params: ParamsUsersType = defaultParams
  ) => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${
        process.env.REACT_APP_SERVER_HOST
      }/categories/${categoryId}/posts?${qs.stringify(params)}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  getById: async (id: number) => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/posts/${id}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  create: async (id: number, values: ArticleType) => {
    let config: AxiosRequestConfig = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/posts/${id}`,
      headers: setHeader(),
      data: values
    };

    const data = await axios(config);

    return data;
  },

  update: async (id: number, values: ArticleType) => {
    let config: AxiosRequestConfig = {
      method: "PATCH",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/posts/${id}`,
      headers: setHeader(),
      data: values
    };

    const data = await axios(config);

    return data;
  },

  delete: async (id: number) => {
    let config: AxiosRequestConfig = {
      method: "DELETE",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/posts/${id}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  }
};
