import React from "react";
import { Link, useHistory } from "react-router-dom";

import {
  WrapCategory,
  TitleCategory,
  TitleArticle,
  Author,
  Article,
  Info
} from "./styles";

type CategoryType = {};

const Category: React.FC<CategoryType> = () => {
  let history = useHistory();

  return (
    <WrapCategory>
      <Link to={"/"}>
        <img src="../../../images/default/16.jpg" />
      </Link>
      <Link to={"/"}>
        <TitleCategory>Finance</TitleCategory>
      </Link>

      <Link to={"/"}>
        <TitleArticle>
          Financial news: A new company is born today at the stock market
        </TitleArticle>
      </Link>

      <Link to={"/"}>
        <Author>
          By <Link to={"/"}>Christinne Williams</Link>
        </Author>
      </Link>

      <Article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu metus
        sit amet odio sodales placerat. Sed varius leo ac leo fermentum, eu
        cursus nunc maximus. Integer convallis nisi nibh, et ornare neque
        ullamcorper ac. Nam id congue lectus, a venenatis massa. Maecenas justo
        libero, vulputate vel nunc id, blandit feugiat sem.
      </Article>

      <Info>Info</Info>
    </WrapCategory>
  );
};

export default Category;
