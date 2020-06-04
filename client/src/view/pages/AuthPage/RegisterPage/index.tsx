import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { signUp } from "../../../../store/createSlices/account";

import { WrapForm } from "../styles";

interface CustomProps {}

export type ValuesSignUpTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  re_password: string;
};

type RootState = {
  account: any;
};

let RegisterPage: React.FC<InjectedFormProps<ValuesSignUpTypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.account.isLoading);
  const error = useTypedSelector(state => state.account.error);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesSignUpTypes) => {
      dispatch(signUp(values));
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

export default reduxForm<ValuesSignUpTypes, CustomProps>({
  form: "RegisterForm"
})(RegisterPage);
