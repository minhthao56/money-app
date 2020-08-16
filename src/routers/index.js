import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import {
  Home,
  SignUp,
  Login,
  Profile,
  PageNotFound,
} from "../containers/index";

import { BlankLayout, MainLayout } from "../components/Layout";

import PubliceRoute from "./PublicRoute";
import PrivateRouter from "./PrivateRoute";

export default function Routers() {
  return (
    <Router>
      <Switch>
        <PrivateRouter exact path={`/`} component={Home} layout={MainLayout} />
        <PubliceRoute
          exact
          path={`/user/signup`}
          component={SignUp}
          layout={BlankLayout}
        />
        <PubliceRoute
          exact
          path={`/user/login`}
          component={Login}
          layout={BlankLayout}
        />
        <PrivateRouter
          exact
          path={`/user/profile`}
          component={Profile}
          layout={MainLayout}
        />
        <PrivateRouter component={PageNotFound} />
      </Switch>
    </Router>
  );
}
