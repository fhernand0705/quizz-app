const express = require('express');
const app = express();
const path = require('path');

// Run the app by serving the static files
// in the dist directory
//app.use(express.static(__dirname + '/dist/quizapp'));
app.use(express.static(`${__dirname}/front-end/dist/`));

// ...
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(`./front-end/dist/quizapp/index.html`);
});

//res.sendFile(path.join(`./front-end/dist/quizapp/index.html`));

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
