/* This component will display a single user inforation in the view 
 */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Person from '@material-ui/icons/Person';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import DeleteUser from './DeleteUser';
import auth from './../client/helpers/auth-helpers';
import {read} from './../client/api-fetching/api-user.js';
import { Redirect, Link} from 'react-router-dom';



/* Style declaration to define css styles(CSS-in-JS) for the component.
    makeStyles is a custom React hook API */
const useStyles = makeStyles((theme) => ({
    root: theme.mixins.gutters({
        maxWidth: 600,
        margin: 'auto',
        padding: theme.spacing(3),
        marginTop: theme.spacing(3)
    }),
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
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle,
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


//our profile function
export default function Profile({ match }){
    const classes = useStyles()
    // initialize state an empty user and set redirectToSignin to false
    const [user, setUser] = useState({})
    const [redirectToSignin, setRedirectToSignin] = useState(false)
    
    //get jwt from sessionstorage with isauthenicated method
    const jwt = auth.isAuthenticated()

    //fetch user information by using useEffect hook
    useEffect(() => {
        const abortController = new AbortController()
        const signal = abortController.signal

        //calling read method
        read({
            userId: match.params.userId
        }, {t: jwt.token}, signal).then((data) => {
            if (data && data.error){
                setRedirectToSignin(true)
            } else {
                setUser(data)
            }
        })

        return function cleanup(){
            abortController.abort()
        }
        //reruns when user value updated
    }, [match.params.userId])

     //if the current user is not authenticated, redirect
     if (redirectToSignin) {
        return <Redirect to ='/signin'/>
     }
     
     return (
         <Paper className={classes.root} elevation={4}>
             <Typography variant="h5" className={classes.title}>
                 User Profile
             </Typography>
             <List dense>
                 <ListItem>
                     <ListItemAvatar>
                         <Avatar className={classes.avatar}>
                             <Person/>
                         </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary={user.name} secondary={user.email} /> {
                         auth.isAuthenticated().user && auth.isAuthenticated().user._id == user._id &&
                         (<ListItemSecondaryAction>
                             <Link to={"/user/edit/" + user._id}>
                                 <IconButton aria-label="Edit" color="primary">
                                     <Edit/>
                                 </IconButton>
                             </Link>
                             <DeleteUser userId={user._id}/>
                         </ListItemSecondaryAction>)
                     }
                 </ListItem>
                 <Divider/>
                 <ListItem>
                     <ListItemText primary={"Joined: " + (
                        new Date(user.created)).toDateString()}/>
                 </ListItem>
             </List>
            {/* calling copyright function here */}
            <Box mt={5}><Copyright /></Box>
         </Paper>
     )
}