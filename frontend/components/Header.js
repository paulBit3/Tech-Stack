/* Our menu component will function as  a navigation bar at the frontend app */


import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import auth from './../client/helpers/auth-helpers';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';


/* Style declaration to define css styles(CSS-in-JS) for the component.
    makeStyles is a custom React hook API */
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


/* highlight the link that matches the 
current location path by changing the color */
const isActive = (history, path) => {
    if (history.location.pathname == path)
      return { color: '#27bcba'}
    else
      return { color: '#258d8c' }
}



export default function Header() {
    const classes = useStyles();

    // set the position of the menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    // profile menu handler function
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // account menu handler function
    const handleAccountMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
      // mobile menu close handler function
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    
    // menu handler function
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
    
    // mobile menu open handler function
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };


    const menuId = 'primary-search-account-menu';

 /* We'll use the HOC withRouter from React Router 
to get access to the history object properties */
    const renderMenu = withRouter(({history}) => (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
         {/* if user is authenticated, display profile page */}
         {
             auth.isAuthenticated() && (<span>
                 <MenuItem
                 containerElement={<Link to={"/user/" + auth.isAuthenticated().user._id} 
                   style={isActive(history, "/user/" + auth.isAuthenticated().user._id)} />}>My Profile</MenuItem>
                 {/* <MenuItem onClick={handleMenuClose}>Profile</MenuItem> */}
                 <Button color="inherit" onClick={() => {
                     auth.clearJWT(() => history.push('/'))
                 }}>Logout</Button>
             </span>)
         }


        {/* if user not authenticated, display signup or login menu */}
        {
            !auth.isAuthenticated() && (<span>
               <MenuItem 
                 containerElement={<Link to="/signup"
                   style={isActive(history, "/signup")} />}>Sign Up</MenuItem>
               <MenuItem
                  containerElement={<Link to="/signin"
                    style={isActive(history, "/signin")} />}>Login</MenuItem>
               </span>)
               
        }
        <MenuItem onClick={handleAccountMenuOpen}>
            <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
            >
            {/* <AccountCircle /> */}
          </IconButton>
          <p>Account</p>
        </MenuItem>
      </Menu>
    ));

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = withRouter(({hsitory}) => (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    ));

    return (
        <div className={classes.grow}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
                    edge="start"
                    className={classes.menuButton}
                    clor="inherit"
                    aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        TechStack
                    </Typography>
                    <Link to="/">
                        <IconButton aria-label="Home" style={isActive(history, "/")}>
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <Link to="/users"><Button style={isActive(history, "/users")}>Users</Button>
                    </Link>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase 
                        placeholder=" Search"
                        classes= {{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-lable': 'search' }}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                        <Badge badgeContent={17} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                        </IconButton>
                        <IconButton
                          edge="end"
                          aria-label="account of current user"
                          aria-controls={menuId}
                          aria-haspopup="true"
                          onClick={handleProfileMenuOpen}
                          color="inherit"
                        >
                        <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                      <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                      >
                        <MoreIcon />
                     </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </div>
    )
}