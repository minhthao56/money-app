import React from "react";
import { Route } from "react-router-dom";

export default function PublicRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}
