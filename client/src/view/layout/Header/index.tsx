import React from "react";
import { useHistory } from "react-router-dom";

import Icon from "../../common/Icon";
import Logo from "../../../images/logo.png";
import ExitIcon from "../../../images/icons/exit.svg";
import EnterIcon from "../../../images/icons/enter.svg";
import UserIcon from "../../../images/icons/user.svg";

import { WrapHeader, Profile, WrapLogo } from "./styles";

type RootState = {
  authStore: any;
};

const Header: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");

  return (
    <WrapHeader>
      <WrapLogo>
        <img src={Logo} alt="logo" />
      </WrapLogo>

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
  );
};

export default Header;
