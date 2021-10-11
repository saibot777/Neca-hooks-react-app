import React from "react";
import { Route, Redirect } from "react-router";
import AuthService from "../../services/auth.service";

const AdminRoute = ({ component: Component, handleChildFuncs, ...rest }) => {
    const user = AuthService.getCurrentUser();
    console.log(user, 'ADMIN CHECK')
    return <Route {...rest} render={(props) => (
        user !== undefined && user.role === 'admin'
            ? <Component/>
            : <Redirect to="/login" />
    )} />
}

export default AdminRoute;