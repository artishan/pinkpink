'use strict';

var express = require('express'),
      path = require('path'),
      fs = require('fs'),
      mongoose = require('mongoose');

/**
 * Main application file
 */

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config/config');
var db = mongoose.connect(config.mongo.uri, config.mongo.options);

// Bootstrap mongodb models
var mongooseModelsPath = path.join(__dirname, './models/mongoose');
fs.readdirSync(mongooseModelsPath).forEach(function (file) {
  if (/(.*)\.(js$|coffee$)/.test(file)) {
    require(mongooseModelsPath + '/' + file);
  }
});

// Populate empty DB with sample data
require('./config/dummydata');

// Passport Configuration
var passport = require('./config/passport');

// Setup Express
var app = express();
require('./config/express')(app);
require('./routes')(app);

// Start server
app.listen(config.port, config.ip, function () {
  console.log('Express server listening on %s:%d, in %s mode', config.ip, config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
