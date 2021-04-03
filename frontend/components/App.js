import React from 'react';
import CoreRouter from './CoreRouter';


//enabling frontend routing with react router
import { BrowserRouter as Router } from 'react-router-dom';

 //acessing to material-ui theme
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './Theme';

//marking the root component as hot-eported
import { hot } from 'react-hot-loader'







const App = () => {
    //removing the server-side injected CSS when the root React component mounts
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }, [])
    return (
        <Router>
          <ThemeProvider theme={theme}>
              <CoreRouter/>
          </ThemeProvider>
        </Router>
    )
}


// mark the root component as hot
export default hot(module) (App);


