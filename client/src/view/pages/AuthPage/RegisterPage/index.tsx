import React, { FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { signUp } from "../../../../store/createSlices/account";

import { WrapForm } from "../styles";

interface CustomProps {}

export type SignUpTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  re_password?: string;
};

type RootState = {
  account: any;
};

let RegisterPage: React.FC<InjectedFormProps<SignUpTypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.account.isLoading);
  const error = useTypedSelector(state => state.account.error);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: SignUpTypes) => {
      dispatch(signUp(values));
      history.push("/auth/sign-in");
    })();
  };

  useEffect(() => {
    dispatch({ type: "RESET_FORM" });
  }, []);

  return (
    <WrapForm>
      <Form onSubmit={formSubmit} loading={isLoading} error={error} />
    </WrapForm>
  );
};

export default reduxForm<SignUpTypes, CustomProps>({
  form: "RegisterForm"
})(RegisterPage);
