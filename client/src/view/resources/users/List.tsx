import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../../../store/createSlices/users";

import { Wrapper } from "./styles";

const List: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  });
  return <Wrapper>List Users</Wrapper>;
};

export default List;
