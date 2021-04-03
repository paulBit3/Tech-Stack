/* this file will renders the top-level entry React component 
   in the div element in the HTML document */
import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';

//using hydrate instead of render. the hydrate function
//hydrates a container that already has 
//HTMLcontent rendered by ReactDOMServer
import { hydrate } from 'react-dom';

// importing components
import App from '../components/App';
//import HelloPage from '../components/HelloPage';




ReactDOM.hydrate(<App/>,
    document.getElementById('root')
);
