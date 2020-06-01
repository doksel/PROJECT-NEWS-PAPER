import React from "react";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import { MainTitle } from "./styles";

const AboutUsPage: React.FC = () => {
  const crumbs = [
    {
      name: "Contacts",
      to: "/contacts"
    }
  ];

  return (
    <>
      <Header />
      <Breadcrumbs crumbs={crumbs} />

      <Content>
        <MainTitle>Contacts Page</MainTitle>
      </Content>

      <Footer />
    </>
  );
};

export default AboutUsPage;
