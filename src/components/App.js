import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from "../history";

import Login from "./login/Login";
import AdminDashboard from "./adminDashboard/AdminDashboard";
import AdminRoute from "./privateRoutes/AdminRoute";
import UserRoute from "./privateRoutes/UserRoute";
import UserDashboard from "./userDashboard/UserDashboard";
import Header from "./header/Header";
import AddItem from "./adminDashboard/add/AddItem";

export default () => {
  return (
    <div>
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path="/login" exact component={Login} />
          {/* <Route path="/dashboard/new" exact component={AddItem} />
          <Route path="/dashboard/edit/:id" exact component={EditItem} />
          <Route path="/dashboard/delete/:id" exact component={Delete} /> */}
        </Switch>
        <Switch>
          <AdminRoute path="/admin_dashboard" exact component={AdminDashboard} />
        </Switch>
        <Switch>
          <AdminRoute path="/add" exact component={AddItem} />
        </Switch>
        {/* <Switch>
          <AdminRoute path="/add" exact component={AdminDashboard} />
        </Switch> */}
        <Switch>
          <UserRoute path="/user_dashboard" exact component={UserDashboard}  />
        </Switch>
      </Router>
    </div>
  );
};
