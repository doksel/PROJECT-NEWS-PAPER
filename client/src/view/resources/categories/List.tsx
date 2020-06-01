import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Category from "../../components/Category";

import { fetchUsers } from "../../../store/createSlices/users";

import { Wrapper } from "./styles";

const List: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Welcom to List Categories");
  }, []);
  return (
    <>
      <Wrapper>List Categories</Wrapper>
      <Category />
    </>
  );
};

export default List;
