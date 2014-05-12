'use strict';

var path = require('path');

/**
 * Send our single page app
 */
exports.index = function(req, res) {
  res.sendfile(path.join(__rootDir + '/client/layouts/index.html'));
};

/**
 * Send template url, or 404 if it doesn't exist
 */
// exports.template = function(req, res) {
//   var stripped = req.url.split('.')[0];
//   var requestedView = path.join('./', stripped);
//   res.render(requestedView, function(err, html) {
//     if(err) {
//       console.log("Error rendering page '" + requestedView + "'\n", err);
//       res.status(404);
//       res.send(404);
//     } else {
//       res.send(html);
//     }
//   });
// };

/**
 * Admin page
 */
exports.admin = function(req, res) {
  res.sendfile(path.join(__rootDir + '/client/layouts/_admin/index.html'));
};

/**
 * Layout page
 */
exports.layout = function(req, res) {
  var stripped = req.url.split('.');
  console.log(req.url);
  var layoutView = path.join(__rootDir, '/client/layouts', stripped + '.html');
  res.sendfile(layoutView, function(err, html) {
    if(err) {
      console.log("Error rendering page '" + layoutView + "'\n", err);
      res.status(404);
      res.send(404);
    } else {
      res.send(html);
    }
  });
};

/**
 * Error page
 */
exports.error404 = function(req, res) {
  res.status(404);
  // respond with html page
  if (req.accepts('html')) {
    res.sendfile(path.join(__rootDir + '/client/404.html'));
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({
      "status" : "error",
      "message" : "not supported",
      "data" : null
    });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
}
