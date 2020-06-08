import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Field } from "redux-form";

import Button from "../../../common/Button";
import Input from "../../../common/Input";
import Logo from "../../../../images/logo.png";

import { WrapLogo } from "../styles";

import {
  required,
  email,
  hardpassword,
  checkPasswords
} from "../../../../helpers/validate";

type CustomPropsType = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: string;
};

const Form: React.FC<{} & CustomPropsType> = ({ loading, onSubmit, error }) => {
  return (
    <form onSubmit={onSubmit} autoComplete="off">
      <WrapLogo>
        <img src={Logo} alt="logo" />
      </WrapLogo>

      <h1>Sign up</h1>

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
        placeholder=""
        validate={[required, email]}
      />

      <Field
        name="password"
        type="password"
        component={Input}
        label="password"
        placeholder=""
        validate={[required, hardpassword]}
      />

      <Field
        name="re_password"
        type="password"
        component={Input}
        label="password Confirm"
        placeholder=""
        validate={[required, checkPasswords]}
      />

      {error && <div className="error">{error}</div>}

      <Button htmlType="submit" type="primary" loading={loading} text="Enter" />

      <Link to="/auth/sign-in">
        <span>Sign in</span>
      </Link>
    </form>
  );
};

export default Form;
