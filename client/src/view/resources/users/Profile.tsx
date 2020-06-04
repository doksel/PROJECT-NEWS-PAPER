import React, { useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useHistory } from "react-router-dom";

import Icon from "../../common/Icon";
import EditIcon from "../../../images/icons/edit-tools.svg";

import { Wrapper, MainTitle } from "./styles";

type RootState = {
  account: any;
};

const Profile: React.FC = () => {
  let history = useHistory();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { profile } = useTypedSelector(state => state.account);

  return (
    <Wrapper>
      <MainTitle>
        Profile page{" "}
        <Icon onClick={() => history.push("profile/edit")} icon={EditIcon} />
      </MainTitle>
      <div>First Name: {profile && profile.firstName}</div>
      <div>Last Name: {profile && profile.lastName}</div>
      <div>Email: {profile && profile.email}</div>
    </Wrapper>
  );
};

export default Profile;
