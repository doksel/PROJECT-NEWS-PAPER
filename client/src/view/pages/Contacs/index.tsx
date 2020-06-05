import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm, InjectedFormProps } from "redux-form";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";
import Breadcrumbs from "../../components/Breadcrumbs";

import Button from "../../common/Button";
import FileUploader from "../../common/FileUploader";

import api from "../../../api";
import { required } from "../../../helpers/validate";

import { MainTitle } from "./styles";

interface CustomProps {}
export type ValuesTypes = {};

const AboutUsPage: React.FC<InjectedFormProps<ValuesTypes, CustomProps> &
  CustomProps> = ({ handleSubmit }) => {
  const dispatch = useDispatch();
  const crumbs = [
    {
      name: "Contacts",
      to: "/contacts"
    }
  ];

  const formSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    handleSubmit((values: ValuesTypes) => {
      console.log("values", values);
    })();
  };

  return (
    <>
      <Header />
      <Breadcrumbs crumbs={crumbs} />

      <Content>
        <MainTitle>Contacts Page</MainTitle>
        <form onSubmit={formSubmit}>
          <Field
            name="avatar"
            component={FileUploader}
            label="Avatar"
            validate={[required]}
            icon="far fa-user"
            uploadReq={api.fileUpload.uploadFile}
          />

          <Button htmlType="submit" type="primary" text="Send" />
        </form>
      </Content>

      <Footer />
    </>
  );
};

export default reduxForm<ValuesTypes, CustomProps>({
  form: "authForm"
})(AboutUsPage);
