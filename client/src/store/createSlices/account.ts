import { createSlice } from "@reduxjs/toolkit";
import { SignInTypes, SignUpTypes } from "../../api/auth";
import api from "../../api";

import { AppDispatchType } from "..";

type AccountType = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
};

type InitialStateType = {
  profile: AccountType | null;
  token: string | null;
  isLoading: boolean;
  error: string;
};

const initialState: InitialStateType = {
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
    setInputValue(state, { payload }) {
      return {
        ...state,
        [payload.name]: payload.value
      };
    },
    signInSuccess(state, { payload }) {
      return {
        ...state,
        profile: { ...payload.profile }
      };
    },
    signUpSuccess(state, { payload }) {
      return {
        ...state,
        token: { ...payload.token }
      };
    }
  }
});

export const {
  setStateValue,
  setInputValue,
  signInSuccess,
  signUpSuccess
} = authSlice.actions;

export default authSlice.reducer;

export const signIn = (value: SignInTypes) => async (
  dispatch: AppDispatchType
) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.signIn(value);
    dispatch(setStateValue({ type: "isLoading", data: false }));

    dispatch(signInSuccess(data));
  } catch (error) {
    dispatch(setStateValue({ type: "error", data: false }));
  }
};

export const signUp = (value: SignUpTypes) => async (
  dispatch: AppDispatchType
) => {
  try {
    dispatch(setStateValue({ type: "isLoading", data: true }));
    const { data } = await api.auth.signUp(value);
    dispatch(setStateValue({ type: "isLoading", data: false }));

    dispatch(signUpSuccess(data));
  } catch (error) {
    dispatch(setStateValue({ type: "error", data: false }));
  }
};
