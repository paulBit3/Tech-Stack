/* edit profile component. This component authorized user to edit their own profile */
import React, { useState, useEffect } from 'react';
import { Redirect, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Card';
import List from '@material-ui/core/CardActions';
import ListItem from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Icon';
import Person from '@material-ui/icons/Person';
import Divider from '@material-ui/core/Divider';
import auth from './../client/helpers/auth-helpers';
import {read, update} from './../client/api-fetching/api-user.js'
import { CssBaseline, TextField } from '@material-ui/core';


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
            abortController.abort
        }

    }, [match.params.userId])



   /*  The component will call the update fetch method with the userId,
   JWT and updated user data */
   const clickSubmit = () => {
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

   //redirect user to the updated Profile
   if(values.redirectToProfile) {
       return (<Redirect to={'/user/' + values.userId}/>)
   }
   return (
       <Container component="main" maxWidth="xs">
           <CssBaseline/>
           <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                   <LockOpenOutlined />
               </Avatar>
               <Typography component="h1" variant="h5" className={classes.title}>
                   Edit your Profile
               </Typography>
               <form className={classes.form}>
                   <Grid container spacing={2}>
                       <Grid item xs={12} sm={6}>
                           <TextField 
                           autoComplete="fname"
                           name="fullName"
                           variant="outlined"
                           required
                           fullWidth
                           id="name"
                           className={classes.textField}
                           label="Full Name"
                           value={values.name}
                           onChange={handleChange('name')}
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
                            className={classes.textField}
                            label="Email Address"
                            value={values.email}
                            onChange={handleChange('email')}
                            autoFocus />
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
                        onClick={clickSubmit}
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