import _ from "lodash";

import { fetchUsers, fetchUserById } from "../store/createSlices/users";

const INIT = "init";
const SET_USERS = "users";
const SET_USER = "user";

type FetchDataType = {
  dispatch?: any;
  getState?: any;
};

//! This middleware only for additional data fetching !!!
const fetchData = ({ dispatch, getState }: FetchDataType) => (next: any) => (
  action: any
) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }

  const { users } = getState();

  const { type } = Reflect.has(action.payload || {}, "type") && action.payload;
  console.log(action, type);

  switch (type) {
    case INIT:
      if (_.isEmpty(users)) {
        dispatch(fetchUsers());
      }
      return next(action);
    case SET_USERS:
      dispatch(fetchUsers());
      return next(action.payload);
    case SET_USER:
      dispatch(fetchUserById(action.payload.id));
      return next(action);

    default:
      return next(action);
  }
};

export default fetchData;
