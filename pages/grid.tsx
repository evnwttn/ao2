import React from "react";
import { withRouter } from "next/router";

const Grid = (props) => {
  return <>{console.log(props.router.query)}</>;
};

export default withRouter(Grid);
