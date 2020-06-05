import React from "react";
import { useHistory } from "react-router-dom";

import Category from "../../components/Category";

import { Wrapper, MainTitle } from "./styles";

const View: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");
  const titlePage = titles[titles.length - 1].toUpperCase();

  return (
    <Wrapper>
      <MainTitle>{titlePage}</MainTitle>

      {/* <Category /> */}
    </Wrapper>
  );
};

export default View;
