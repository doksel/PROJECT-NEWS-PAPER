import React, { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { reduxForm, InjectedFormProps } from "redux-form";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Footer from "../../layout/Footer";

import Button from "../../common/Button";
import Breadcrumbs from "../../components/Breadcrumbs";

import api from "../../../api";

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

  const onChange = (e: any) => {
    let formData = new FormData();

    for (let i = 0; i < e.target.files.length; i++) {
      formData.append(`avatar`, e.target.files[i]);
    }

    api.fileUpload.uploadFile(formData);
  };

  return (
    <>
      <Header />
      <Breadcrumbs crumbs={crumbs} />

      <Content>
        <MainTitle>Contacts Page</MainTitle>
        <form onSubmit={formSubmit}>
          <label>Файл</label>
          <input type="file" name="filedata" onChange={onChange} />
          <Button htmlType="submit" type="primary" text="Enter" />
        </form>
      </Content>

      <Footer />
    </>
  );
};

export default reduxForm<ValuesTypes, CustomProps>({
  form: "authForm"
})(AboutUsPage);
