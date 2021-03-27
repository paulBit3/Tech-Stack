import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Container from '@material-ui/core/Container';
import {create} from '../client/api-fetching/api-user.js';









/* Style declaration to define css styles(CSS-in-JS) for the component.
    makeStyles is a custom React hook API */
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    error: {
        verticalAlign: 'middle'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
      },
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        
    },
    checked: {
        '&, & + $label': {
            color: 'blue',
        },
    },
    label: {},
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    //checked: {},
}));

const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  

//our copyright function
function Copyright(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright ©'}
            <Link color="inherit" href="/">Oficy Inc.
            </Link>{''}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};





//our component definition
export default function Signup() {
    const classes = useStyles();
    //initializing the state using the useState hook
    const [state, setState] = useState({
        name: '',
        password: '',
        email: '',
        open: false,
        error: '',
        checkedA: true,
    });
   
    /* defining our handler functions to be called */

    //this function takes the new value in the input and sets it as the state
   /*  */
    const handleInputChange =  (event) => {
        const {name, value } = event.target;
        setState({ 
            ...state, 
            [name]: value,
        });
    };
    

    const handleChange = (event) => {
        const { name, value } = event.target;
        setState({ 
            ...state, 
            [name]: value.checked, 
        });
    };
    

    //this function takes the input value from the state and calls the 
    // create fetch method to signup the user with the backend
    const clickSubmit = () => {
        const user = {
            name: state.name || undefined,
            email: state.email || undefined,
            password: state.password || undefined
        }
        create(user).then((data) => {
            if (data.error) {
                setState({ ...state, error: data.error})
            } else {
                setState({ ...state, error: '', open: true})
            }
        });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Sign up
                </Typography>
                <form className={classes.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="name"
                            label="Full Name"
                            value={state.name}
                            onChange={handleInputChange}
                            name="fullName"
                            autoComplete="fname"
                            InputLabelProps={{ shrink: true }}
                            autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            value={state.email}
                            onChange={handleInputChange}
                            name="email"
                            autoComplete="email"
                            InputLabelProps={{ shrink: true }} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            required
                            fullWidth
                            type="password"
                            id="password"
                            label="Password"
                            value={state.password}
                            onChange={handleInputChange}
                            name="password"
                            autoComplete="current-password"
                            InputLabelProps={{ shrink: true }} 
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                              value="agree"
                              control={
                                <Checkbox  
                                 color="primary" 
                                 checked={state.checkedA}
                                 onChange={handleChange}
                                 name="checkedA"
                                />
                              } 
                              label="I agree with Oficy Inc.'s terms of service and privacy policy" 
                            />
                        </Grid>
                        <br/>
                        {
                        state.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {state.error}</Typography>)
                        }
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={clickSubmit}
                        className={classes.submit}
                    >
                        Sign Up
                        </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            Already have an account?
                            <Link href="/signin" variant="body2">
                              Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <Dialog open={state.open} disableBackdropClick={true}>
                    <DialogTitle>New Account</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            New account successfully created.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Link to="/signin">
                            <Button color="primary" autoFocus="autoFocus" variant="contained">
                                Sign In
                            </Button>
                        </Link>
                    </DialogActions>
                </Dialog>
            </div>
            {/* calling copyright function here */}
            <Box mt={5}><Copyright /></Box>
        </Container>
    );
}