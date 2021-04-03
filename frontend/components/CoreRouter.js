/* our CoreRouter component will keep all of the 
   custom views and help render our custom react component */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import Signup from './Signup';
import Signin from './Signin';
import Profile from './Profile';
import EditProfile from './EditProfile';
import PrivateRoute from './PrivateRoute';
import Header from './Header';





/* hint: the Switch component in react route,  renders a route exclusively. 
   A request at '/' also matches a route at 'about' */




const CoreRouter = () => {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />

                {/* to add the User component to the App */}
                <Route path="/users" component={Users} />

                {/* to add the Signup component to the App */}
                <Route path="/signup" component={Signup} />

                {/* to add the Signin component to the App */}
                <Route path="/signin" component={Signin} />

                {/* to add the Edit Profile component to the App. edit path is matched 1st */}
                <PrivateRoute path="/user/edit/:userId" component={EditProfile} />

                {/* to add the Profile component to the App */}
                <Route path="/user/:userId" component={Profile} />
                
            </Switch>
        </div>
    )
}

export default CoreRouter;