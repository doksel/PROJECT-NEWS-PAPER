import axios, { AxiosRequestConfig } from "axios";
import { setHeader } from "./index";

export type SignInTypes = {
  email: string;
  password: string;
};

export type SignUpTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default {
  signIn: async (value: SignInTypes) => {
    let config: AxiosRequestConfig = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/auth/sign-in`,
      headers: setHeader(),
      data: value
    };

    const data = await axios(config);

    return data;
  },

  signUp: async (value: SignUpTypes) => {
    let config: AxiosRequestConfig = {
      method: "POST",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/auth/sign-up`,
      headers: setHeader(),
      data: value
    };

    const data = await axios(config);

    return data;
  },

  me: async () => {
    let config: AxiosRequestConfig = {
      method: "GET",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/me`,
      headers: setHeader()
    };

    const data = await axios(config);

    return data;
  }
};
