import { createSlice } from "@reduxjs/toolkit";
import { SignInTypes } from "../../view/pages/AuthPage/LoginPage";
import { SignUpTypes } from "../../view/pages/AuthPage/RegisterPage";
import { UserTypes } from "../../view/resources/users/types";
import api from "../../api";

import { AppDispatchType } from "..";

export type ProfileType = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
};

export type AccountType = {
  profile: ProfileType | null;
  token: string | null;
  isLoading: boolean;
  error: string;
};

const initialState: AccountType = {
  profile: null,
  token: null,
  isLoading: false,
  error: ""
};

const authSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setStateValue(state, { payload }) {
      return {
        ...state,
        [payload.type]: payload.data
      };
    },
    signInSuccess(state, { payload }) {
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        token: payload.token
      };
    },
    signUpSuccess(state, { payload }) {
      return {
        ...state,
        token: { ...payload.token }
      };
    },
    getMeSuccess(state, { payload }) {
      return {
        ...state,
        profile: payload.profile
      };
    },
    signOut(state) {
      localStorage.removeItem("token");
      return {
        ...state,
        ...initialState
      };
    }
  }
});

export const {
  setStateValue,
  signInSuccess,
  signUpSuccess,
  getMeSuccess,
  signOut
} = authSlice.actions;

export default authSlice.reducer;

export const signIn = (value: SignInTypes) => async (
  dispatch: AppDispatchType
) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.signIn(value);

    dispatch(signInSuccess(data));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(setStateValue({ type: "error", data: false }));
  }
  dispatch(setStateValue({ type: "isLoading", data: false }));
};

export const signUp = (value: SignUpTypes) => async (
  dispatch: AppDispatchType
) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.signUp(value);

    dispatch(signUpSuccess(data));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(setStateValue({ type: "error", data: false }));
  }
  dispatch(setStateValue({ type: "isLoading", data: false }));
};

export const getMe = () => async (dispatch: AppDispatchType) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.me();

    dispatch(getMeSuccess(data));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(setStateValue({ type: "error", data: false }));
  }
  dispatch(setStateValue({ type: "isLoading", data: false }));
};

export const updateMe = (value: UserTypes) => async (
  dispatch: AppDispatchType
) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.updateProfile(value);

    dispatch(getMeSuccess(data));
  } catch (error) {
    localStorage.removeItem("token");
    dispatch(setStateValue({ type: "error", data: false }));
  }
  dispatch(setStateValue({ type: "isLoading", data: false }));
};
