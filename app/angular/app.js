'use strict';

angular.module('pinkpinkApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {

    $routeProvider.when("/vote/hi", {templateUrl: 'page/login', controller: 'LoginCtrl'});

    $routeProvider
      .when('/', {
          redirectTo: 'vote'
      })
      // .when('/', {
      //   templateUrl: 'partials/main',
      //   controller: 'MainCtrl'
      // })
      .when('/vote', {
        templateUrl: 'templates/vote/index.html',
        controller: 'VoteCtrl'
      })
      .when('/vote/board', {
        templateUrl: 'templates/vote/board.html',
        controller: 'VoteBoardCtrl'
      })
      .when('/login', {
        templateUrl: 'templates/page/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'templates/page/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'templates/page/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .otherwise({
        redirectTo: '/404'
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

