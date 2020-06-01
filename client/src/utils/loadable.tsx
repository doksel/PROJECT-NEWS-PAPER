import React from "react";
import store from "../store";
import Loadable from "react-loadable";
import MainLoader from "../view/components/MainLoader";

export const loadable = (component: any, params = {}) =>
  Loadable({
    loader: () => {
      store.dispatch({ type: "start-loading" });
      return component();
    },
    loading: MainLoader,
    render(loaded: any, props) {
      let Component = loaded.default;
      store.dispatch({ type: "stop-loading" });

      return <Component {...props} {...params} />;
    }
  });
