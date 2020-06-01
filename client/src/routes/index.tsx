import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import AuthPage from "../view/pages/AuthPage";
import MainPage from "../view/pages/Main";
import CategoriesPage from "../view/pages/Categories";
import AboutUsPage from "../view/pages/AboutUs";
import ContacsPage from "../view/pages/Contacs";
import UserPage from "../view/pages/UserPage";

const App: React.FC = () => {
  const token = localStorage.getItem("token");

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
        <Route path="/users/:id?/:action?" exact component={UserPage} />
        {!token && <Route path="/auth/:action?" exact component={AuthPage} />}
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
