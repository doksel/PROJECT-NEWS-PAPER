import axios, { AxiosRequestConfig } from "axios";
import { setHeader } from "./index";

export type FileTypes = {
  email: string;
  password: string;
};

export default {
  uploadFile: async (value: any) => {
    let config: AxiosRequestConfig = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/upload/avatar`,
      headers: setHeader(),
      data: value
    };

    const data = await axios(config);

    return data;
  },

  removeFile: async (id: any) => {
    let config: AxiosRequestConfig = {
      method: "DELETE",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/upload/${id}`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  },

  uploadPhotos: async (value: any) => {
    let config: AxiosRequestConfig = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/upload/photos`,
      headers: setHeader(),
      data: value
    };

    const data = await axios(config);

    return data;
  }
};
