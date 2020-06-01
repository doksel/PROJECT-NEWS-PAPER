import React from "react";
import { Link } from "react-router-dom";

import Icon from "../../common/Icon";
import Arrow from "../../../images/logo.png";

import { WrapNavMenu, WrapLink } from "./styles";
import { menuLinks } from "../../../helpers/values";

type RootState = {
  authStore: any;
};

const NavMenu: React.FC = () => {
  return (
    <WrapNavMenu>
      {menuLinks.map(link => {
        return (
          <WrapLink>
            <Link to={link.to}>{link.name}</Link>
          </WrapLink>
        );
      })}
    </WrapNavMenu>
  );
};

export default NavMenu;
