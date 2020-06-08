import React from "react";
import { Route, useHistory, useParams } from "react-router-dom";

import Categories from "../../resources/categories";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import { MainTitle } from "./styles";

type paramsType = {
  id: string;
  action: any;
};

const CategoriesPage: React.FC = () => {
  let history = useHistory();
  let params = useParams<paramsType>();
  const titlePage = params.id;

  const crumbs = titlePage
    ? [
        {
          name: "Categories",
          to: "/categories"
        },
        {
          name: params.id,
          to: `/categories/${params.id}`
        }
      ]
    : [
        {
          name: "Categories",
          to: "/categories"
        }
      ];

  return (
    <>
      <Header />
      <Breadcrumbs crumbs={crumbs} />

      <Content>
        <Route path="/categories" exact component={Categories.list} />
        <Route path="/categories/:name" exact component={Categories.review} />
      </Content>

      <Footer />
    </>
  );
};

export default CategoriesPage;
