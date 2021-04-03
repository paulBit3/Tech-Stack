/* This is a root template file which will render the HTML with React components.
This template will be rendered in the browser when the server receives a request
to the URL, and the div element with ID "root" will contains our React component.
We added the html markup and the css that we generated on the server
*/

export default ({html, css}) => {
    return `<!doctype html>
    <html lang="en">
     <head>
      <meta charset="utf-8">
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">

       <title>MERN TechStack</title>
       <base href="/" />
       <!--Load the default Roboto font-->
       <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

       <!--Font Icons-->
       <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
       <style>
           a{
             text-decoration: none;
             color: #987079;
           }
       </style>
       <style id="jss-server-side">${css}</style>
     </head>
     <body>
      <div id="root">${html}</div>
      <script src="dist/bundle.js"></script>
     </body>
    </html>`
}