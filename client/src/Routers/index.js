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

import PubliceRote from "./PublicRoute";
import PrivateRouter from "./PrivateRoute";

export default function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRouter
            exact
            path={`/`}
            component={Home}
            layout={MainLayout}
          />
          <PubliceRote
            exact
            path={`/user/signup`}
            component={SignUp}
            layout={BlankLayout}
          />
          <PubliceRote
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
      </div>
    </Router>
  );
}
