import React from "react";
import { useHistory } from "react-router-dom";

import Icon from "../../common/Icon";
import Logo from "../../../images/logo.png";

import { WrapFooter, WrapLogo } from "./styles";

const Footer: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");

  return (
    <WrapFooter>
      <WrapLogo>
        <img src={Logo} alt="logo" />
      </WrapLogo>
    </WrapFooter>
  );
};

export default Footer;
