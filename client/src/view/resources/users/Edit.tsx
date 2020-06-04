import React, { useEffect, FormEvent } from "react";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { useHistory } from "react-router-dom";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import Button from "../../common/Button";
import Input from "../../common/Input";

import { UserTypes, CustomProps } from "./types";
import { required, email } from "../../../helpers/validate";

import { Wrapper, MainTitle } from "./styles";

type RootState = {
  account: any;
};

const Edit: React.FC<InjectedFormProps<UserTypes, CustomProps> &
  CustomProps> = ({ handleSubmit, initialize }) => {
  const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { profile, isLoading } = useTypedSelector(state => state.account);

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: UserTypes) => {
      console.log("values", values);
    })();
  };

  useEffect(() => {
    initialize(profile);
  }, []);

  return (
    <Wrapper>
      <MainTitle>Edit page</MainTitle>
      <form onSubmit={formSubmit} autoComplete="off">
        <Field
          name="firstName"
          component={Input}
          label="name"
          placeholder="Enter your name"
          validate={[required]}
        />

        <Field
          name="lastName"
          component={Input}
          label="last name"
          placeholder="Enter your last name"
          validate={[required]}
        />

        <Field
          name="email"
          component={Input}
          label="email"
          placeholder="Enter your email"
          validate={[required, email]}
        />

        <Button
          htmlType="submit"
          type="primary"
          loading={isLoading}
          text="Save"
        />
      </form>
    </Wrapper>
  );
};

export default reduxForm<UserTypes, CustomProps>({
  form: "create"
})(Edit);
