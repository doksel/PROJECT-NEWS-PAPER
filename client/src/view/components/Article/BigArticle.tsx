import React from "react";
import { Link, useHistory } from "react-router-dom";

import Info from "./Info";

import {
  WrapArticle,
  WrapImage,
  TitleCategory,
  TitleArticle,
  Author,
  Article
} from "./styles";

type BigArticleType = {};

const BigArticle: React.FC<BigArticleType> = () => {
  let history = useHistory();

  return (
    <WrapArticle>
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

      <Author>
        By <Link to={"/"}>Christinne Williams</Link>
      </Author>

      <Article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus
        sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu
        cursus nunc maximus. Integer convallis nisi nibh, et ornare neque
        ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo
        libero, vulputate vel nunc id, blandit feugiat sem.
      </Article>

      <Info>Info</Info>
    </WrapArticle>
  );
};

export default BigArticle;
