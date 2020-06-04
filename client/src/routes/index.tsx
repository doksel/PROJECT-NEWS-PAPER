import React, { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthPage from "../view/pages/AuthPage";
import MainPage from "../view/pages/Main";
import CategoriesPage from "../view/pages/Categories";
import AboutUsPage from "../view/pages/AboutUs";
import ContacsPage from "../view/pages/Contacs";
import UserPage from "../view/pages/UserPage";

import { getMe } from "../store/createSlices/account";

type RootState = {
  account: any;
};

const App: React.FC = () => {
  const tokenLocal = localStorage.getItem("token");
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { profile, token } = useTypedSelector(state => state.account);

  useEffect(() => {
    if (tokenLocal) {
      dispatch(getMe());
    }
  }, []);

  useEffect(() => {
    if (tokenLocal) {
      !profile && token && dispatch(getMe());
    }
  }, [profile, token]);

  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route
          path="/categories/:id?/:action?"
          exact
          component={CategoriesPage}
        />
        <Route path="/about-us" exact component={AboutUsPage} />
        <Route path="/contacts" exact component={ContacsPage} />
        {token ? (
          <Route path="/users/:type?/:id?/" exact component={UserPage} />
        ) : (
          <Route path="/auth/:action?" exact component={AuthPage} />
        )}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
