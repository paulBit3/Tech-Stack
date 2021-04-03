/* edit profile component. This component authorized user to edit their own profile */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import auth from './../client/helpers/auth-helpers';
import {read, update} from './../client/api-fetching/api-user.js'
import { Redirect, Link} from 'react-router-dom';


/* Style declaration to define css styles(CSS-in-JS) for the component.
    makeStyles is a custom React hook API */
    const useStyles = makeStyles((theme) => ({
        card:{
            maxWidth: 600,
            margin: 'auto',
            marginTop: theme.spacing(3),
            paddingBottom: theme.spacing(2)
        },

        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
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
            color: theme.palette.protectedTitle,
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: 300
        },
        error: {
            verticalAlign: 'middle'
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        }
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


/* our edit profile function. 
 */
export default function EditProfile({ match }) {
    const classes = useStyles()
    const [values, setValues] = useState({
        name: '', 
        password: '',
        email: '',
        open: false,
        error: '',
        redirectToProfile: false
    })
    const jwt = auth.isAuthenticated()

    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        read({
            //gather credentials from auth.isAuthenticated
            userId: match.params.userId
        }, {t: jwt.token}, signal).then((data) => {
            if (data && data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, name: data.name, email: data.email})
            }
        })
        return function cleanup(){
            abortController.abort()
        }

    }, [match.params.userId])
    
    const onSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        } 
        update({
            userId: match.params.userId
        }, {
            t: jwt.token
        }, user).then((data) => {
            if (data && data.error) {
                setValues({...values, error: data.error})
            } else {
                setValues({...values, userId: data._id, redirectToProfile: true})
            }
        })
    }
    const handleChange = name => event => {
        setValues({...values, [name]: event.target.value})
    }
    
    if(values.redirectToProfile) { 
        return (<Redirect to={'/user/' + values.userId}/>)
    }
    
    return (
       <Container component="main" maxWidth="xs">
           <CssBaseline/>
           <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                   <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5" className={classes.title}>
                   Edit your Profile
               </Typography>
               <form className={classes.form} onSubmit={ onSubmit }>
                   <Grid container spacing={2}>
                       <Grid item xs={12}>
                           <TextField 
                           autoComplete="fname"
                           name="fullName"
                           variant="outlined"
                           required
                           fullWidth
                           id="name"
                           label="Full Name"
                           value={values.name}
                           onChange={handleChange('name')}
                           InputLabelProps={{ shrink: true }}
                           autoFocus/>
                       </Grid>
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
                            />
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
                        <br/>
                        {
                        values.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>error</Icon>
                            {values.error}</Typography>)
                        }
                   </Grid>
                   <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Save
                    </Button>
               </form>
           </div>
           {/* calling copyright function here */}
           <Box mt={5}><Copyright /></Box>
       </Container>
   )
}