import React from "react";
import { Route } from "react-router-dom";

import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const AuthPage: React.FC = () => {
  return (
    <>
      <Route path="/auth/sign-in" exact render={() => <LoginPage />} />
      <Route path="/auth/sign-up" exact render={() => <RegisterPage />} />
    </>
  );
};

export default AuthPage;
