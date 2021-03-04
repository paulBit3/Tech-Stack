// This will configure the webpack to bundle the React code to be used in production mode

//requiring  objects
const path = require('path');
const CURRENT_WORKING_DIR = process.cwd();


// let's create the config object
const config = {
    mode: "production",
    entry: [
        path.join(CURRENT_WORKING_DIR , 'frontend/client/index.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR , '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test:/\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    }
}

module.exports = config