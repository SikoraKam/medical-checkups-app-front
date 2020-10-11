import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAllowed } from "./auth.js";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAllowed() ? <Component {...props} /> : <Redirect to="TODO" />
            }
        />
    );
};

export default PrivateRoute;
