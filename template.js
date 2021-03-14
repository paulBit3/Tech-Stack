/* This is a root template file which will render the HTML with React components.
This template will be rendered in the browser when the server receives a request
to the URL, and the div element with ID "root" will contains our React component */

export default () => {
    return `<!doctype html>
    <html lang="en">
     <head>
      <meta charset="utf-8">
       <title>MERN CRUD</title>
       <!--Load the default Roboto font-->
       <link  rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

       <!--Font Icons-->
       <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
     </head>
     <body>
      <div id="root">Welcome to CRUD Web Application!</div>
      <script src="/dist/bundle.js"></script>
     </body>
    </html>`
}