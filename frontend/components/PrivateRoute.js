/* this private route component will allow us to declare protected 
   routes for the frontend to restrict view access based on user auth.*/

/*the component load when the user is authenticated by calling 
  isAuthenticated method otherwise we redirect the user login component*/

import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../client/helpers/auth-helpers';


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>(
        auth.isAuthenticated() ? (
        <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/signin',
          state: { from: props.location }
        }}/>
    )
  )}/>
)

export default PrivateRoute;