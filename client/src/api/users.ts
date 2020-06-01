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
  getUsers: async (params: ParamsUsersType = defaultParams) => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/users/all?${qs.stringify(
        params
      )}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  getUserById: async (id: number) => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/users/user/${id}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  }
};
