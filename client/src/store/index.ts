import { configureStore } from "@reduxjs/toolkit";
import { reducer as formReducer } from "redux-form";
import { combineReducers } from "redux";
import middleware from "../middleware";
import * as reducers from "./createSlices";

const store = configureStore({
  middleware,
  reducer: combineReducers({ ...reducers, form: formReducer })
});

export type AppDispatchType = typeof store.dispatch;

export default store;
