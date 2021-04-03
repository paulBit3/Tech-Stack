/* this component will display the names of all users fetched from the db 
   and we will use the built-in React Hook useState to add state to our function */
import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import List from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import ListItemText from "@material-ui/core/ListItemText"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import ArrowForward from "@material-ui/icons/ArrowForward"
import Person from "@material-ui/icons/Person"
import {Link} from "react-router-dom"
import {list} from "./../client/api-fetching/api-user.js"



/* Style declaration to define css styles(CSS-in-JS) for the component.
    makeStyles is a custom React hook API */
const useStyles = makeStyles(theme => ({
    root: theme.mixins.gutters({
        padding: theme.spacing(1),
        margin: theme.spacing(5)
    }),
    title: {
        margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    }
}))

//we define and export a function component 
export default function Users() {
    const classes = useStyles()
    const [users, setUsers] = useState([])
    
    //calling the list method
    useEffect(() => {
        //using abortcontroller web API to associate a signal with the fetch call
        //abortcontroller allows us to abort DOM requests
        const abortController = new AbortController()
        const signal = abortController.signal
        list(signal).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                setUsers(data)
            }
        })
        
        // using the cleanup function to abort the fetch call when the component unmounts
        return function cleanup() {
            abortController.abort()
        }
    }, [])

        return (
            <Paper className={classes.root} elevation={4}>
                <Typography variant="h3" className={classes.title}>
                    All Users
                </Typography>
                <List dense>
                 
                    {/* iterate the array of users in the state using map funcion */}
                    {users.map((item, i) => {
                        return <Link to={"/user/" + item._id} key={i}>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar>
                                        <Person/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={item.name}/>
                                <ListItemSecondaryAction>
                                    <IconButton>
                                        <ArrowForward/>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Link>
                    })
                    }
                </List>
            </Paper>
        )
}