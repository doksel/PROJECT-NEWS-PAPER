import React, { FormEvent, useEffect } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Form from "./Form";

import { signIn, AccountType } from "../../../../store/createSlices/account";

import { WrapForm } from "../styles";

interface CustomProps {}

export type SignInTypes = {
  email: string;
  password: string;
};

type RootState = {
  account: AccountType;
};

let LoginPage: React.FC<InjectedFormProps<SignInTypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

  const isLoading = useTypedSelector(state => state.account.isLoading);
  const error = useTypedSelector(state => state.account.error);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: SignInTypes) => {
      dispatch(signIn(values));
    })();
  };

  useEffect(() => {
    return () => {
      dispatch({ type: "RESET_FORM" });
    };
  }, []);

  return (
    <WrapForm>
      <Form onSubmit={formSubmit} loading={isLoading} error={error} />
      />
    </WrapForm>
  );
};

export default reduxForm<SignInTypes, CustomProps>({
  form: "authForm"
})(LoginPage);
