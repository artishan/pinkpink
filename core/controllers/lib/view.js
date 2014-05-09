'use strict';

var path = require('path');

/**
 * Send partial, or 404 if it doesn't exist
 */
exports.page = function(req, res) {
  var stripped = req.url.split('.')[0];
  var requestedView = path.join('./', stripped);
  res.render(requestedView, function(err, html) {
    if(err) {
      console.log("Error rendering page '" + requestedView + "'\n", err);
      res.status(404);
      res.send(404);
    } else {
      res.send(html);
    }
  });
};

/**
 * Send our single page app
 */
exports.index = function(req, res) {
  res.render('index');
};

/**
 * Error page
 */
exports.error = function(req, res) {
  res.render('404');
};

exports.error404 = function(req, res) {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
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
