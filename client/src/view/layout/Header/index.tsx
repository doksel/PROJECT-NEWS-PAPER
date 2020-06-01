import React from "react";
import { useHistory } from "react-router-dom";

import Icon from "../../common/Icon";
import ExitIcon from "../../../images/icons/exit.svg";
import EnterIcon from "../../../images/icons/enter.svg";
import UserIcon from "../../../images/icons/user.svg";

import { WrapHeader, Profile } from "./styles";

type RootState = {
  authStore: any;
};

const Header: React.FC = () => {
  let history = useHistory();
  const titles = history.location.pathname.split("/");

  return (
    <WrapHeader>
      <h2>
        Header : {titles.length === 2 ? "Main page" : titles[titles.length - 1]}
      </h2>

      <Profile>
        {false ? (
          <>
            <div>UserName</div>
            <Icon
              onClick={() => history.push("/admin/account/profile")}
              icon={UserIcon}
            />
            <Icon onClick={() => {}} icon={ExitIcon} />
          </>
        ) : (
          <Icon onClick={() => console.log("enter")} icon={EnterIcon} />
        )}
      </Profile>
    </WrapHeader>
  );
};

export default Header;
