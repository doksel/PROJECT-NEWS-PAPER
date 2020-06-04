import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../../../store/createSlices/users";

import { Wrapper, MainTitle } from "./styles";

const List: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Wrapper>
      <MainTitle>List Users page</MainTitle>
    </Wrapper>
  );
};

export default List;
