/* Our menu component will function as  a navigation bar at the frontend app */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import auth from './../client/helpers/auth-helpers';
import { Link, withRouter } from 'react-router-dom';
//import { createMemoryHistory } from 'history';


//higher-order component
// import { withRouter } from 'react-router';



//const history = createMemoryHistory();


/* highlight the link that matches the 
current location path by changing the color */
const isActive = (history, path) => {
    // let history = useHistory()
    if (history.location.pathname == path)
      return { color: '#ffff'}
    else
      return { color: '#ffff' }
}


/* We'll use the HOC withRouter from React Router 
to get access to the history object properties */
const Header = withRouter(({history}) => (

            <AppBar position='fixed'>
                <Toolbar>
                    <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        TechStack
                    </Typography>
                    <Link to="/">
                        <IconButton aria-label="Home" style={isActive(history, "/")}>
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <Link to="/users"><Button style={isActive(history, "/users")}>Users</Button>
                    </Link>
                    
                    
                    {/* if user not authenticated, display signup or login menu */}
                    {
                        !auth.isAuthenticated() && (<span>
                            <Link to="/signup">
                                <Button color="inherit" style={isActive(history, "/signup")}>Sign Up</Button>
                            </Link>
                            <Link to="/signin">
                                <Button color="inherit" style={isActive(history, "/signin")}>Login</Button>
                            </Link>
                           
                        </span>)
                        
                    }
                    {/* if user is authenticated, display profile page */}
                    {
                        auth.isAuthenticated() && (<span>
                            <Link to={"/user/" + auth.isAuthenticated().user._id}>
                                <Button 
                                  color="inherit" 
                                  style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
                            </Link>

                            {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
                            <Button color="inherit" onClick={() => {
                                auth.clearJWT(() => history.push('/'))
                            }}>Logout</Button>
                        </span>)
                    }
                
                </Toolbar>
            </AppBar>
         
          
        
))
export default Header;