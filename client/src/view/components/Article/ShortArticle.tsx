import React from "react";
import { Link, useHistory } from "react-router-dom";

import { WrapArticle } from "./styles";

type ShortArticleType = {};

const ShortArticle: React.FC<ShortArticleType> = () => {
  let history = useHistory();

  return <WrapArticle></WrapArticle>;
};

export default ShortArticle;
