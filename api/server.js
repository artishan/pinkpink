module.name = "pinkpink";

var _ = require('lodash');
var path = require('path');
var Hapi = require('hapi');
var pack = require('../package');
var swagger = require('hapi-swagger');
var requireDirectory = require('require-directory');
var config = requireDirectory(module, './config');
var server = Hapi.createServer(config.api.host, config.api.port, config.hapi.options);
exports = module.exports = server;

// Bootstrap Hapi Server Plugins, passes the server object to the plugins
config.hapi.plugin(server);
var whitelist = {include: "/index.js$/" };
var libs = requireDirectory(module, __dirname + "/lib", whitelist);
var modules = requireDirectory(module, __dirname + "/modules", whitelist);

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

// setup swagger options
var swaggerOptions = {
    basePath: 'http://localhost:3000',
    apiVersion: pack.version
};

// adds swagger self documentation plugin
server.pack.register({plugin: require('hapi-swagger'), options: swaggerOptions}, function (err) {
    if (err) {
        console.log(['error'], 'plugin "hapi-swagger" load error: ' + err)
    }else{
        console.log(['start'], 'swagger interface loaded')

        server.start(function(){
            console.log(['start'], pack.name + ' - web interface: ' + server.info.uri);
        });
    }
});
