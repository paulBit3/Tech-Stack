/* this component will render at the /signin path */ 

import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Button from "@material-ui/core/Button";
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';

import auth from '../client/helpers/auth-helpers.js';
import { Redirect } from 'react-router-dom';
import {signin} from '../client/api-fetching/api-auth.js';









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
    button: {
        margin: theme.spacing(3, 0, 2),
    },
}));


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
}


//our component definition
export default function Signin(props) {
    const classes = useStyles()
    const [values, setValues] = useState({
        email:'',
        password:'',
        error: '',
        redirectToReferrer: false
    })

     //this function takes the input value from the state and calls the 
    // create fetch method to signup the user with the backend
    const onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: values.email || undefined,
            password: values.password || undefined
        }

        signin(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                auth.authenticate(data, () => {
                    setValues({ ...values, error: '', redirectToReferrer: true })
                })
            }
        })
    }

    //this function takes the new value in the input and sets it as the state
    const handleChange= name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const {from} = props.location.state || {
        from: {
            pathname:'/'
        }
    }
    const {redirectToReferrer} = values
    if (redirectToReferrer) {
        return (<Redirect to={from}/>)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            
            <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                   <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                   Sign in
               </Typography>
               <form className={classes.form} onSubmit={ onSubmit } >
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                            autoComplete="email"
                            name="email"
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            value={values.email}
                            onChange={handleChange('email')}
                            InputLabelProps={{ shrink: true }}
                            autoFocus />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            autoComplete="current-password"
                            name="password"
                            variant="outlined"
                            required
                            fullWidth
                            type="password"
                            id="password"
                            label="Password"
                            value={values.password}
                            onChange={handleChange('password')}
                            InputLabelProps={{ shrink: true }}
                            />
                        </Grid>

                        {
                            values.error && (<Typography component="p" color="error">
                                <Icon color="error" className={classes.error}>error</Icon>
                                {values.error}</Typography>)
                        }
                    </Grid>
                    <Grid container item justify="flex-end">
                        <Button 
                            fullWidth 
                            variant="contained" 
                            color="primary" 
                            className={classes.button} 
                            type="submit" >
                            Sign In
                        </Button>
                    </Grid>
                        
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                              Forgot password?
                            </Link>
                        </Grid>
                        <Grid item xs>
                            Don't have an account?
                            <Link href="/signup" variant="body2">
                              Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/* calling copyright function here */}
            <Box mt={5}><Copyright /></Box>
        </Container>
    );


}