(function() {
  'use strict';
  angular.module('app', [
    'ngRoute',
    'ngAnimate',
    'ui.bootstrap',
    'easypiechart',
    'mgo-angular-wizard',
    'textAngular',
    'ui.tree',
    'ngMap',
    'ngTagsInput',
    'app.ui.ctrls',
    'app.ui.directives',
    'app.ui.services',
    'app.controllers',
    'app.directives',
    'app.form.validation',
    'app.ui.form.ctrls',
    'app.ui.form.directives',
    'app.tables',
    'app.map',
    'app.task',
    'app.localization',
    'app.chart.ctrls',
    'app.chart.directives',
    'app.page.ctrls'
]).config(function($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
      .when('/', {
        redirectTo: '/dashboard',
        authenticate: true
      }).when('/dashboard', {
        templateUrl: '/templates/_admin/dashboard.html'
      }).when('/ui/typography', {
        templateUrl: '/templates/_admin/ui/typography.html'
      }).when('/ui/buttons', {
        templateUrl: '/templates/_admin/ui/buttons.html'
      }).when('/ui/icons', {
        templateUrl: '/templates/_admin/ui/icons.html'
      }).when('/ui/grids', {
        templateUrl: '/templates/_admin/ui/grids.html'
      }).when('/ui/widgets', {
        templateUrl: '/templates/_admin/ui/widgets.html'
      }).when('/ui/components', {
        templateUrl: '/templates/_admin/ui/components.html'
      }).when('/ui/timeline', {
        templateUrl: '/templates/_admin/ui/timeline.html'
      }).when('/ui/nested-lists', {
        templateUrl: '/templates/_admin/ui/nested-lists.html'
      }).when('/ui/pricing-tables', {
        templateUrl: '/templates/_admin/ui/pricing-tables.html'
      }).when('/forms/elements', {
        templateUrl: '/templates/_admin/forms/elements.html'
      }).when('/forms/layouts', {
        templateUrl: '/templates/_admin/forms/layouts.html'
      }).when('/forms/validation', {
        templateUrl: '/templates/_admin/forms/validation.html'
      }).when('/forms/wizard', {
        templateUrl: '/templates/_admin/forms/wizard.html'
      }).when('/maps/gmap', {
        templateUrl: '/templates/_admin/maps/gmap.html'
      }).when('/maps/jqvmap', {
        templateUrl: '/templates/_admin/maps/jqvmap.html'
      }).when('/tables/static', {
        templateUrl: '/templates/_admin/tables/static.html'
      }).when('/tables/responsive', {
        templateUrl: '/templates/_admin/tables/responsive.html'
      }).when('/tables/dynamic', {
        templateUrl: '/templates/_admin/tables/dynamic.html'
      }).when('/charts/others', {
        templateUrl: '/templates/_admin/charts/charts.html'
      }).when('/charts/morris', {
        templateUrl: '/templates/_admin/charts/morris.html'
      }).when('/charts/flot', {
        templateUrl: '/templates/_admin/charts/flot.html'
      }).when('/mail/inbox', {
        templateUrl: '/templates/_admin/mail/inbox.html'
      }).when('/mail/compose', {
        templateUrl: '/templates/_admin/mail/compose.html'
      }).when('/mail/single', {
        templateUrl: '/templates/_admin/mail/single.html'
      }).when('/pages/features', {
        templateUrl: '/templates/_admin/pages/features.html'
      }).when('/pages/signin', {
        templateUrl: '/templates/_admin/pages/signin.html'
      }).when('/pages/signup', {
        templateUrl: '/templates/_admin/pages/signup.html'
      }).when('/pages/forgot', {
        templateUrl: '/templates/_admin/pages/forgot-password.html'
      }).when('/pages/lock-screen', {
        templateUrl: '/templates/_admin/pages/lock-screen.html'
      }).when('/pages/profile', {
        templateUrl: '/templates/_admin/pages/profile.html'
      }).when('/404', {
        templateUrl: '/templates/_admin/pages/404.html'
      }).when('/pages/500', {
        templateUrl: '/templates/_admin/pages/500.html'
      }).when('/pages/blank', {
        templateUrl: '/templates/_admin/pages/blank.html'
      }).when('/pages/invoice', {
        templateUrl: '/templates/_admin/pages/invoice.html'
      }).when('/pages/services', {
        templateUrl: '/templates/_admin/pages/services.html'
      }).when('/pages/about', {
        templateUrl: '/templates/_admin/pages/about.html'
      }).when('/pages/contact', {
        templateUrl: '/templates/_admin/pages/contact.html'
      }).when('/tasks', {
        templateUrl: '/templates/_admin/tasks/tasks.html'
      }).otherwise({
        redirectTo: '/404'
      });

  });

}).call(this);
