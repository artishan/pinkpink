'use strict';

angular.module('pinkpinkAdmin', [
    // Angular modules
    'ngRoute'
    'ngAnimate'

    // 3rd Party Modules
    'ui.bootstrap'
    'easypiechart'
    'mgo-angular-wizard'
    'textAngular'
    'ui.tree'
    'ngMap'
    'ngTagsInput'

    // Custom modules
    'app.ui.ctrls'
    'app.ui.directives'
    'app.ui.services'
    'app.controllers'
    'app.directives'
    'app.form.validation'
    'app.ui.form.ctrls'
    'app.ui.form.directives'
    'app.tables'
    'app.map'
    'app.task'
    'app.localization'
    'app.chart.ctrls'
    'app.chart.directives'
    'app.page.ctrls'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when("/vote/hi", {templateUrl: 'page/login', controller: 'LoginCtrl'});

    $routeProvider
      .when('/', {
          redirectTo: '/dashboard'
      })
      .when('/dashboard', {
        templateUrl: 'templates/admin/dashboard.html',
        controller: 'VoteCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {

      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });

// angular.forEach(jsonRoutes, function(r) {
//     $routeProvider.when(r.url, {template: r.template, controller: r.controller});
// });

