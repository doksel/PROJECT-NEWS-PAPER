import React from "react";
import { Route } from "react-router-dom";

import Categories from "../../resources/categories";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import { MainTitle } from "./styles";

const CategoriesPage: React.FC = () => {
  return (
    <>
      <Header />
      <Breadcrumbs crumbs={[]} />

      <Content>
        <Route path="/categories" exact component={Categories.list} />
        <Route path="/categories/:name" exact component={Categories.review} />
      </Content>

      <Footer />
    </>
  );
};

export default CategoriesPage;
