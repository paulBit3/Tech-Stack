/* this compoment will containt our home page view. */
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import backImg from './../client/assets/images/showcase4.jpg'






/* Style declaration to define css styles(CSS-in-JS) for the component.
    makeStyles is a custom React hook API */

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 750,
        margin: 'auto',
        marginTop: theme.spacing(5)
    },
    title: {
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.openTitle
    },
    media: {
        minHeight: 500
    }
}))


// our functional component defintion
export default function Header() {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <Typography variant="h3" className={classes.title}>
                TechStack
            </Typography>
            <CardMedia className={classes.media} image={backImg} title="Home Image"/>
            <Typography variant="body1" component="p" className={classes.credit} color="textSecondary"></Typography>
            <CardContent>
                <Typography variant="body1" component="p">
                    Welcome to  TechStack
                </Typography>
            </CardContent>
            
        </Card>
    )
}