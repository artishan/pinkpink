module.name = "pinkpink";

var _ = require('lodash');
var Hapi = require('hapi');
var requireDirectory = require('require-directory');
var config = requireDirectory(module, './config');
var server = Hapi.createServer(config.api.host, config.api.port, config.hapi.options);
exports = module.exports = server;

// Bootstrap Hapi Server Plugins, passes the server object to the plugins
config.hapi.plugin(server);

var libs = requireDirectory(module, __dirname + "/lib", "/index.js$/");
var modules = requireDirectory(module, __dirname + "/modules", "/index.js$/");

// Require the routes and pass the server object.
// Add the server routes
_(modules).forEach(function(module) {
  _.isArray(module.route) ? server.route(module.route) : undefined;
});

//Start the server
server.start(function() {
  //Log to the console the host and port info
  console.log('Server started at: ' + server.info.uri);
});
