'use strict';

angular.module('pinkpinkApp', [
  'ngDraggable',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'reveal.controller',
  'reveal.directives',
  'reveal.services',
  'ui.ace',
  'hc.marked',
  'restangular',
  'ui.bootstrap'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider, RestangularProvider) {

    $routeProvider.when("/vote/hi", {templateUrl: 'page/login', controller: 'LoginCtrl'});

    $routeProvider
      .when('/', {
          redirectTo: 'vote'
      }).when('/reveal/dashboard', {
        templateUrl: '/templates/reveal/dashboard.html'
      }).when('/reveal/decks', {
        templateUrl: '/templates/reveal/list_deck.html'
      }).when('/reveal/decks/:deckId/slides', {
        templateUrl: '/templates/reveal/list_slide.html'
      }).when('/reveal/decks/:deckId/slide', {
        templateUrl: '/templates/reveal/edit_slide.html'
      }).when('/reveal/decks/:deckId/slides/:slideId', {
        templateUrl: '/templates/reveal/edit_slide.html'
      }).when('/reveal/decks/:deckId/preview', {
        templateUrl: '/templates/reveal/preview.html'
      }).when('/vote', {
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

    $locationProvider.html5Mode(true).hashPrefix('!');

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
    RestangularProvider.setBaseUrl('http://api.pinkpink.hansh.kr');
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

