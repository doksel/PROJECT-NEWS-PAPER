import React, { Fragment } from "react";
import { Link, useHistory } from "react-router-dom";

import { WrapBreadcrumb } from "./styles";

type CrumbType = {
  name: string;
  to: string;
};

type BreadcrumbType = {
  crumbs: Array<CrumbType>;
};

const Breadcrumbs: React.FC<BreadcrumbType> = ({ crumbs }) => {
  let history = useHistory();

  return (
    <WrapBreadcrumb>
      <Link to="/">
        <span>Main</span>
      </Link>
      {crumbs && crumbs[0] && <span>/</span>}

      {crumbs.map((crumb, index) => (
        <Fragment key={index}>
          {history.location.pathname === crumb.to ? (
            <span>{crumb.name}</span>
          ) : (
            <Link to="/">
              <span>{crumb.name}</span>
            </Link>
          )}

          {crumbs.length - 1 !== index && <span>/</span>}
        </Fragment>
      ))}
    </WrapBreadcrumb>
  );
};

export default Breadcrumbs;
