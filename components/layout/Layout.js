import React, { Fragment } from "react";
import MainHeader from "./Main-header";

const layout = (props) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default layout;
