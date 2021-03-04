import React from 'react';
import CoreRouter from '../components/CoreRouter';

/* wrapping root component with themeprovider and browserrouter */
 
//enabling frontend routing with react router
import { BrowserRouter } from 'react-router-dom';

 //acessing to material-ui theme
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './Theme';

//marking the root component as hot-eported
import { hot } from 'react-hot-loader'







const App = () => {
    return (
        <BrowserRouter>
          <ThemeProvider theme={theme}>
              <CoreRouter/>
          </ThemeProvider>
        </BrowserRouter>
    )
}


// mark the root component as hot
export default hot(module) (App);


