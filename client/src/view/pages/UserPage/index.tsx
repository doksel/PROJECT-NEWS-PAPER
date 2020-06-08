import React from "react";
import { Route, useHistory } from "react-router-dom";

import Users from "../../resources/users";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";

const UserPage: React.FC = () => {
  return (
    <>
      <Header />

      <Content>
        <Route path="/users" exact component={Users.list} />
        <Route path="/users/user/:id?" exact component={Users.review} />
        <Route path="/users/profile" exact component={Users.profile} />
        <Route path="/users/profile/edit" exact component={Users.edit} />
      </Content>

      <Footer />
    </>
  );
};

export default UserPage;
