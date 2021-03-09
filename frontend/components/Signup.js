import { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Icon from '@material-ui/core/Icon'
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import Box from '@material-ui/core/Box';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from "@material-ui/core/styles";


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
    title: {
        marginTop: theme.spacing(2),
        color: theme.palette.openTitle,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300
    },
    submit: {
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
export default function Signup() {
    const classes = useStyles()
    //initializing the state using the useState hook
    const [values, setValues] = useState({
        name: '',
        password: '',
        email: '',
        open: false,
        error: ''
    })
   
    /* defining our handler functions to be called */

    //this function takes the new value in the input and sets it as the state
    const handleChange= name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    //this function takes the input value from the state and calls the 
    // create fetch method to signup the user with the backend
    const clickSubmit = () => {
        const user = {
            name: values.name || undefined,
            email: values.email || undefined,
            password: values.password || undefined
        }
        create(user).then((data) => {
            if (data.error) {
                setValues({ ...values, error: data.error})
            } else {
                setValues({ ...values, error: '', open: true})
            }
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOpenOutlined />
                </Avatar>
                <Typography component="h1" variant="h5" className={classes.title}>
                    Sign up
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
                            autoFocus />
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
                        <Grid item xs={12}>
                            <TextField
                            autoComplete="current-password"
                            name="password"
                            variant="outlined"
                            required
                            fullWidth
                            type="password"
                            id="password"
                            className={classes.textField}
                            label="Password"
                            value={values.password}
                            onChange={handleChange('password')}
                            autoFocus />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<Checkbox value="agree" color="primary" />} 
                            label=" I agree with Oficy Inc.'s terms of service and privacy policy" 
                        />
                        </Grid>
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
                        Sign Up
                        </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                        Already have an account?
                            <Link href="#" variant="body2">
                              Login
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <Dialog open={values.open} disableBackdropClick={true}>
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
    )
}