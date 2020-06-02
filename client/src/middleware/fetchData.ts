import _ from "lodash";

import { fetchUsers } from "../store/createSlices/users";

const INIT = "init";
const SET_USERS = "users";

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

  const { type } =
    Reflect.has(
      (typeof action.payload === "object" && action.payload) || {},
      "type"
    ) && action.payload;
  console.log({ action, payload: action.payload, type });

  switch (type) {
    case INIT:
      if (_.isEmpty(users)) {
        dispatch(fetchUsers());
      }
      return next(action);
    case SET_USERS:
      dispatch(fetchUsers());
      return next(action);

    default:
      return next(action);
  }
};

export default fetchData;
