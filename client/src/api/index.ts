import axios from "axios";

import auth from "./auth";
import users from "./users";
import fileUpload from "./fileUpload";

import store from "../store";

export const CancelToken = axios.CancelToken;

export const setHeader = () => {
  const state = store.getState();
  const token =
    // (state.users && state.users.user && state.users.user.token) ||
    localStorage.getItem("token");

  return {
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : ""
  };
};

export default {
  auth,
  users,
  fileUpload
};
