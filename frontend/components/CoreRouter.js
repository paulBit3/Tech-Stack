/* our CoreRouter component will keep all of the 
   custom views and help render our custom react component */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Users from './Users';




/* hint: the Switch component in react route,  renders a route exclusively. 
   A request at '/' also matches a route at 'about' */




const CoreRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Header} />
                <Route path="/users" component={Users}/>
            </Switch>
        </div>
    )
}

export default CoreRouter;