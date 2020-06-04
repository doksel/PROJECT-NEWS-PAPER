import axios, { AxiosRequestConfig } from "axios";
import { setHeader } from "./index";

import { SignInTypes } from "../view/pages/AuthPage/LoginPage";
import { SignUpTypes } from "../view/pages/AuthPage/RegisterPage";
import { UserTypes } from "../view/resources/users/types";

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
  },

  updateProfile: async (value: UserTypes) => {
    let config: AxiosRequestConfig = {
      method: "PUT",
      baseURL: `${process.env.REACT_APP_SERVER_HOST}/me/edit`,
      headers: setHeader(),
      data: value
    };

    const data = await axios(config);

    return data;
  }
};
