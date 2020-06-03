import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";

import NavMenu from "./NavMenu";

import Icon from "../../common/Icon";
import Logo from "../../../images/logo.png";
import ExitIcon from "../../../images/icons/exit.svg";
import EnterIcon from "../../../images/icons/enter.svg";
import UserIcon from "../../../images/icons/user.svg";

import { signOut } from "../../../store/createSlices/account";

import { WrapHeader, Profile, WrapLogo } from "./styles";

const token = localStorage.getItem("token");

const Header: React.FC = () => {
  let history = useHistory();
  const dispatch = useDispatch();

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
          {token ? (
            <>
              <div>UserName</div>
              <Icon
                onClick={() => history.push("/users/profile")}
                icon={UserIcon}
              />
              <Icon onClick={() => dispatch(signOut())} icon={ExitIcon} />
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
