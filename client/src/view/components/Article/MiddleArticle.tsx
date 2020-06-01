import React from "react";
import { Link, useHistory } from "react-router-dom";

import { WrapArticle } from "./styles";

type MiddleArticleType = {};

const MiddleArticle: React.FC<MiddleArticleType> = () => {
  let history = useHistory();

  return <WrapArticle></WrapArticle>;
};

export default MiddleArticle;
