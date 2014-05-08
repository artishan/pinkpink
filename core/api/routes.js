'use strict';

var vote = require('./controllers/vote');

/**
 * Application routes
 */
module.exports = function(app) {

  // vote API Routes
  app.route('/api/vote/:score')
    .post(vote.postVote);
  app.route('/api/vote/view')
    .get(vote.getView);
  app.route('/api/vote/board')
    .get(vote.getBoard);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

};
