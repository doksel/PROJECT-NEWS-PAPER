import React from "react";
import { Link, useHistory } from "react-router-dom";

import { WrapArticle } from "./styles";

type FullArticleType = {};

const FullArticle: React.FC<FullArticleType> = () => {
  let history = useHistory();

  return <WrapArticle></WrapArticle>;
};

export default FullArticle;
