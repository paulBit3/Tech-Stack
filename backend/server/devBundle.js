/* compiling the React code using Webpack configurations while in dev mode */
import config from '../../config/config'
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config.client.js';


//setting up the compile method
const compile = (app) => {
    if(config.env.NODE_ENV === "development") {
        const compiler = webpack(webpackConfig)
        const middleware = webpackMiddleware(compiler, {
            publicPath: webpackConfig.output.publicPath
        })
        app.use(middleware)
        app.use(webpackHotMiddleware(compiler))
    }
}

export default {
    compile
}