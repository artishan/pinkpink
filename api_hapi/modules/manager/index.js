var _ = require('lodash');
var db = require("./lib/nedb");
var server = require("../../server");
var reveal = require("../reveal");

exports.getServerRoutes = function(request, reply) {
  var routes = [];
  var table = server.table();
  _(table).forEach(function(data) {
    routes.push(data.settings);
  })
  routes = _.mapValues(routes, 'path');
  reply(routes);
};

exports.getServerRoute = function(request, reply) {
  var routes = server.routes();
  // _.keys({ 'one': 1, 'two': 2, 'three': 3 });
  reply(routes);
}

exports.getServerInfo = function(request, reply) {
  reply(server.info);
}

exports.getSettings = function(request, reply) {
  db.setting.find({}, function(err, data){
    return reply(data);
  });
}

exports.getSetting = function(request, reply) {
  var data = {
    name: request.payload.name,
    content: request.payload.content
  }
  db.slide.insert(data, function(err, data){
    if(err){
      console.log(err);
      reply(data);
    }
    reply(data);
  });
}
