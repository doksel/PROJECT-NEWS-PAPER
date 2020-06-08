import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { Field } from "redux-form";

import Button from "../../../common/Button";
import Input from "../../../common/Input";
import Logo from "../../../../images/logo.png";

import { required } from "../../../../helpers/validate";

import { WrapLogo } from "../styles";

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

      <h1>Sing in</h1>

      <Field
        name="email"
        component={Input}
        label="email"
        placeholder=""
        validate={[required]}
        icon="far fa-user"
      />

      <Field
        name="password"
        type="password"
        component={Input}
        label="password"
        placeholder=""
        validate={[required]}
        icon="far fa-user"
      />

      {error && <div className="error">{error}</div>}

      <Button htmlType="submit" type="primary" loading={loading} text="Enter" />

      <Link to="/auth/reset-password">
        <span>Reset password</span>
      </Link>

      <Link to="/auth/sign-up">
        <span>Sign up</span>
      </Link>
    </form>
  );
};

export default Form;
