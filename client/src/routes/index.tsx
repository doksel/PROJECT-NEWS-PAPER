import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthPage from "../view/pages/AuthPage";
import MainPage from "../view/pages/Main";
import CategoriesPage from "../view/pages/Categories";
import AboutUsPage from "../view/pages/AboutUs";
import ContacsPage from "../view/pages/Contacs";
import UserPage from "../view/pages/UserPage";

import { getMe } from "../store/createSlices/account";

const App: React.FC = () => {
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      getMe();
    }
  }, []);

  console.log("token", token);

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
