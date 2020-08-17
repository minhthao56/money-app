import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRouter({
  component: Component,
  layout: Layout,
  ...rest
}) {
  const token = localStorage.getItem("token");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!token) {
          return <Redirect to={{ pathname: "/user/login" }} />;
        }
        return (
          <Layout>
            <Component {...props} />
          </Layout>
        );
      }}
    />
  );
}
