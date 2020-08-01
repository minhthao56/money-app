import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import { Home, SignUp, Login, Profile } from "../Containers/index";
import PubliceRote from "./PublicRoute";
import PrivateRouter from "./PrivateRoute";

export default function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRouter exact path={`/`} component={Home} />
          <PubliceRote exact path={`/user/signup`} component={SignUp} />
          <PubliceRote exact path={`/user/login`} component={Login} />
          <PrivateRouter exact path={`/user/profile`} component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}
