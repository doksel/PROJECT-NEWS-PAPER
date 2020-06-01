import React from "react";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";

import { MainTitle } from "./styles";

const MainPage: React.FC = () => {
  return (
    <>
      <Header />

      <Content>
        <MainTitle>Main page</MainTitle>
      </Content>

      <Footer />
    </>
  );
};

export default MainPage;
