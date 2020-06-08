import { createSlice } from "@reduxjs/toolkit";
import { ParamsUsersType } from "../../api/users";
import api from "../../api";

import { AppDispatchType } from "..";

type UserType = {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
};

type InitialStateType = {
  users: Array<UserType>;
  user: UserType | null;
  token: string | null;
  error: string;
};

const initialState: InitialStateType = {
  users: [],
  user: null,
  token: null,
  error: ""
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersSuccess(state, { payload }) {
      return {
        ...state,
        users: [...payload.users]
      };
    },
    getUsersFailed(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  }
});

export const { getUsersSuccess, getUsersFailed } = usersSlice.actions;

export default usersSlice.reducer;

export const fetchUsers = (params?: ParamsUsersType) => async (
  dispatch: AppDispatchType
) => {
  try {
    const { data } = await api.users.getUsers(params);
    dispatch(getUsersSuccess(data));
  } catch (error) {
    dispatch(getUsersFailed(error.response && error.response.data.error));
  }
};

export const fetchUserById = (id: number) => async (
  dispatch: AppDispatchType
) => {
  try {
    const { data } = await api.users.getUserById(id);
    dispatch(getUsersSuccess(data));
  } catch (error) {
    dispatch(getUsersFailed(error.response.data.error));
  }
};
