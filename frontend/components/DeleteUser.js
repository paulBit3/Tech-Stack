/* this component will handled method to delete a user via profile component */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import auth from './../client/helpers/auth-helpers';
import {remove} from './../client/api-fetching/api-user.js';
import { IconButton } from '@material-ui/core';
import { Redirect } from 'react-router-dom';


/* our delete user function. this component will receive props from the parent component.
props will contain the userId that was sent from profile component */
export default function DeleteUser(props) {
    //initialize the state with open set to false
    const [open, setOpen] = useState(false)
    //set redirect to false so that it is not rendered 1st
    const [redirect, setRedirect] = useState(false)

    const jwt = auth.isAuthenticated()

    //handler method to open and close the dialog button.
    const clickButton = () => {
        setOpen(true)
    }


    //this function calls the remove fetch method with the user Id
    const deleteAccount = () => {
        remove({
            userId: props.userId
        }, {t: jwt.token}).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                //if successfully deleted, signo out user and redirect to Header
                auth.clearJWT(() => console.log('deleted'))
                setRedirect(true)
            }
        })
    }

    //handler method to close the dialog button
    const handlerDialogClose = () => {
        setOpen(false)
    }

    //redirecting the current user to header page
    if (redirect) {
        return <Redirect to='/'/>
    }

    return (<span>
        <IconButton aria-label="Delete" onClick={ clickButton } color="secondary">
            <DeleteIcon />
        </IconButton>
        <Dialog open={open} onClose={ handlerDialogClose}>
            <DialogTitle>{" Delete Account "}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Confirm to delete your account
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={ handlerDialogClose } color="primary">
                    Cancel
                </Button>
                <Button onClick={ deleteAccount } color="secondary" autoFocus="autoFocus">
                    Confirm
                </Button>
            </DialogActions>
        </Dialog>
    </span>)
}

//validating props with PropTypes
DeleteUser.propTypes = {
    userId: PropTypes.string.isRequired
}