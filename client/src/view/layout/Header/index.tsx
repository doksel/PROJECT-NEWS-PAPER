import React from "react";
import { useHistory, Link } from "react-router-dom";

import NavMenu from "./NavMenu";

import Icon from "../../common/Icon";
import Logo from "../../../images/logo.png";
import ExitIcon from "../../../images/icons/exit.svg";
import EnterIcon from "../../../images/icons/enter.svg";
import UserIcon from "../../../images/icons/user.svg";

import { WrapHeader, Profile, WrapLogo } from "./styles";

const Header: React.FC = () => {
  let history = useHistory();

  return (
    <>
      <WrapHeader>
        {history.location.pathname === "/" ? (
          <WrapLogo>
            <img src={Logo} alt="logo" />
          </WrapLogo>
        ) : (
          <Link to="/">
            <WrapLogo>
              <img src={Logo} alt="logo" />
            </WrapLogo>
          </Link>
        )}

        <Profile>
          {false ? (
            <>
              <div>UserName</div>
              <Icon onClick={() => console.log("exit")} icon={UserIcon} />
              <Icon onClick={() => {}} icon={ExitIcon} />
            </>
          ) : (
            <Icon
              onClick={() => history.push("/auth/sign-in")}
              icon={EnterIcon}
            />
          )}
        </Profile>
      </WrapHeader>
      <NavMenu />
    </>
  );
};

export default Header;
