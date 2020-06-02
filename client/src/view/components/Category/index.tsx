import React from "react";
import { useHistory } from "react-router-dom";

import BigArticle from "../Article/BigArticle";

import { WrapCategory } from "./styles";

type CategoryType = {};

const Category: React.FC<CategoryType> = () => {
  let history = useHistory();

  return (
    <WrapCategory>
      <BigArticle />
    </WrapCategory>
  );
};

export default Category;
