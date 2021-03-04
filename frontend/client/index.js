/* this file will renders the top-level entry React component 
   in the div element in the HTML document */
import React from 'react';
import { render } from 'react-dom';

// importing components
import App from '../components/App';
import HelloPage from '../components/HelloPage';




render(
    <App/>,
    document.getElementById('root')
)