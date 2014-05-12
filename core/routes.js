'use strict';

var lib = {
      session: require('./controllers/lib/session'),
      users: require('./controllers/lib/users'),
      view: require('./controllers/lib/view'),
    },
    vote = require('./controllers/vote'),
    auth = require('./middleware/auth');

/**
 * Application routes
 */
function routes(app) {

  // Index Route
  app.route('/')
    .get( auth.setUserCookie, lib.view.index);

  // layout Route
  app.route('/admin')
    .get(lib.view.admin);

  // API Routes
  app.route('/api/vote/:score')
    .post(vote.score);
  app.route('/api/vote/view')
    .get(vote.view);
  app.route('/api/vote/board')
    .get(vote.board);
  app.route('/api/*')
    .get(lib.view.error404);

  // Default API Routes
  app.route('/lib/users')
    .post(lib.users.create)
    .put(lib.users.changePassword );
  app.route('/lib/users/me')
    .get(lib.users.me );
  app.route('/lib/users/:id')
    .get(lib.users.show );
  app.route('/lib/session')
    .post(lib.session.login)
    .delete(lib.session.logout);
  app.route('/lib/*')
    .get(lib.view.error404);

  // Request angular view
  // app.route('/templates/*')
  //   .get( lib.view.template );

  // Not Found action
  app.route('/images/*')
    .get(lib.view.error404);
  app.route('/bower_components/*')
    .get(lib.view.error404);
  app.route('/scripts/*')
    .get(lib.view.error404);
  app.route('/styles/*')
    .get(lib.view.error404);

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/*')
    .get( lib.view.error404);

};

exports = module.exports = routes;
