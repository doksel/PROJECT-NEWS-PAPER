import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "../view/pages/MainPage";
import UserPage from "../view/pages/UserPage";

const App: React.FC = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/users/:id?/:action?" exact component={UserPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
