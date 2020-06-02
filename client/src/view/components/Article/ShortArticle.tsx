import React from "react";
import { Link, useHistory } from "react-router-dom";

import Info from "./Info";

import { WrapArticle, WrapImage, TitleCategory, TitleArticle } from "./styles";
import { Row } from "../../../styles/theme";

type ShortArticleType = {};

const ShortArticle: React.FC<ShortArticleType> = () => {
  let history = useHistory();

  return (
    <WrapArticle>
      <Row>
        <WrapImage>
          <Link to={"/"}>
            <img src="https://colorlib.com/preview/theme/newspaper/img/bg-img/16.jpg" />
          </Link>
        </WrapImage>

        <TitleCategory>
          <Link to={"/"}>Finance</Link>
        </TitleCategory>

        <TitleArticle>
          <Link to={"/"}>
            Financial news: A new company is born today at the stock market
          </Link>
        </TitleArticle>

        <Info />
      </Row>
    </WrapArticle>
  );
};

export default ShortArticle;
