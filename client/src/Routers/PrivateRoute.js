import React from "react";
import { Route } from "react-router-dom";

export default function PrivateRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
}
