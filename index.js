/**
 * This is the main file of the application. Run it with the
 * `node index.js` command from your terminal
 *
 * Remember to run `npm install` in the project folder, so 
 * all the required libraries are downloaded and installed.
 */ 

var express = require('express'),
	handlebars = require('express3-handlebars');

// Create a new express.js web app:

var app = express();

// Register and configure the handlebars templating engine
app.engine('html', handlebars({ 
    defaultLayout: 'main',
    extname: ".html",
    layoutsDir: __dirname + '/views/layouts'
}));

// Set .html as the default template extension 
app.set('view engine', 'html');

// Tell express where it can find the templates
app.set('views', __dirname + '/views');

// Make the files in the public folder available to the world
app.use(express.static(__dirname + '/public'));

// Parse POST request data. It will be available in the req.body object
app.use(express.urlencoded());

// Add the routes that the app will react to,
// as defined in our routes.js file

require('./routes')(app);

// This file has been called directly with 
// `node index.js`. Start the server!

app.listen(3000);
console.log('Your application is running on http://localhost:3000');