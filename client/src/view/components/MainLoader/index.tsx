import React from "react";
import Loadable from "react-loadable";

import { WrapLoader, Loader } from "./styles";

type MainLoaderType = {
  loading?: boolean;
};

const MainLoader: React.FC<MainLoaderType & Loadable.LoadingComponentProps> = ({
  loading
}) => (
  <WrapLoader loading={loading}>
    <Loader />
  </WrapLoader>
);

export default MainLoader;
