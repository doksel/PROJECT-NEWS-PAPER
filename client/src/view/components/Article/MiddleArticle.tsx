import React from "react";
import { Link, useHistory } from "react-router-dom";

import Info from "./Info";

import { WrapArticle, WrapImage, TitleCategory, Article } from "./styles";

type MiddleArticleType = {};

const MiddleArticle: React.FC<MiddleArticleType> = () => {
  let history = useHistory();

  return (
    <WrapArticle>
      <WrapArticle>
        <WrapImage>
          <Link to={"/"}>
            <img src="https://colorlib.com/preview/theme/newspaper/img/bg-img/16.jpg" />
          </Link>
        </WrapImage>

        <TitleCategory>
          <Link to={"/"}>Finance</Link>
        </TitleCategory>

        <Article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus
          sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu
          cursus nunc maximus. Integer convallis nisi nibh, et ornare neque
          ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas
          justo libero, vulputate vel nunc id, blandit feugiat sem.
        </Article>

        <Info>Info</Info>
      </WrapArticle>
    </WrapArticle>
  );
};

export default MiddleArticle;
