/*------------ configuring express ----------------*/

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
// import config from '../../config/config'

//importing our template
import Template from '../../template';
//import { Template } from 'webpack';

//importing routes
import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
// import { UnauthorizedError } from 'express-jwt/lib';


/* modules for server side rendering */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CoreRouter from '../../frontend/components/CoreRouter';

//a stateless router, will take the request url to match
import { StaticRouter } from 'react-router-dom';



//module to generate the CSS styles for the frontend component
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import theme from '../../frontend/components/Theme';

/* End modules for server side rendering */

//for devmode only. Comment out in production
import devBundle from './devBundle';



// const expressJwt =  require('express-jwt');

//serving static file with express
const CURRENT_WORKING_DIR= process.cwd()

//express app
const app = express();


//for devmode only. Comment out in production
//devBundle.compile(app)


//parse body params
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())

//secure apps
app.use(helmet())

//enable Crossing Origin Resource Sharing CORS
app.use(cors())


//serving static file with express
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')));

//mounting our routes to be accessed from the client-side
app.use('/', userRoutes)
app.use('/', authRoutes)


/* sending the template in the reponse to a GET requests for the'/' route */
app.get('*', (req, res) => {
    /* generating css markup using material-ui ServerStyleSheets and renderToString */

    //creating a ServerStyleSheets instance
    const sheets = new ServerStyleSheets()
    //This context object contains the results of the render
    const context = {}
    //calling renderToString to return HTML string of react view
    const markup = ReactDOMServer.renderToString(
        sheets.collect(
            <StaticRouter location={req.url} context={context}>
                <ThemeProvider theme={theme}>
                    <CoreRouter/>
                </ThemeProvider>
            </StaticRouter>
        )
    )

    //check if there was a redirect rendered
    if (context.url) {
        return res.redirect(303, context.url)
    }

    //if there was no redirect, then we get the css string
    const css = sheets.toString()
    res.status(200).send(Template({
        markup: markup,
        css: css
    }))
})


// Catch unauthorized errors
/* express-jwt throws an error named UnauthorizedError when a token cannot be validated for some reason */
app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ":" + err.message})
    } else if (err) {
        res.status(400).json({"error" : err.name + ":" + err.message})
        console.log(err)
    }
})


export default app