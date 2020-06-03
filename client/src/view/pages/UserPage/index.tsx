import React from "react";
import { Route } from "react-router-dom";

import Users from "../../resources/users";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import { MainTitle } from "./styles";

const UserPage: React.FC = () => {
  return (
    <>
      <Header />
      <Breadcrumbs crumbs={[]} />

      <Content>
        <MainTitle>User page</MainTitle>
        <Route path="/users" exact component={Users.list} />
        <Route path="/users/user/:id?" exact component={Users.review} />
        <Route path="/users/profile" exact component={Users.profile} />
      </Content>

      <Footer />
    </>
  );
};

export default UserPage;
