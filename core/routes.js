'use strict';

var admin = {
        session: require('./controllers/admin/session'),
        users: require('./controllers/admin/users'),
        view: require('./controllers/admin/view'),
      },
      vote = require('./controllers/vote'),
      auth = require('./middleware/auth');

/**
 * Application routes
 */
function routes(app) {

  // API Routes
  app.route('/api/vote/:score')
    .post(vote.score);
  app.route('/api/vote/view')
    .get(vote.view);
  app.route('/api/vote/board')
    .get(vote.board);

  app.route('/api/*')
    .get(function(req, res) {
      res.status(404).json({
        "status" : "error",
        "message" : "not supported",
        "data" : null
      });
  });

  // Admin Routes
  app.route('/admin/users')
    .post( admin.users.create )
    .put( admin.users.changePassword );
  app.route('/admin/users/me')
    .get( admin.users.me );
  app.route('/admin/users/:id')
    .get( admin.users.show );
  app.route('/admin/session')
    .post( admin.session.login)
    .delete( admin.session.logout );

  // All undefined api routes should return a 404
  app.route('/admin/*')
    .get(function(req, res) {
      res.render(404);
  });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/page/*')
    .get( admin.view.page );
  app.route('/')
    .get( auth.setUserCookie, admin.view.index);
  app.route('/*')
    .get( auth.setUserCookie, admin.view.error);
};

exports = module.exports = routes;
