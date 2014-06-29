(function() {
  'use strict';
  angular.module('admin', [
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
        templateUrl: '/templates/admin/dashboard.html'
      }).when('/ui/typography', {
        templateUrl: '/templates/admin/ui/typography.html'
      }).when('/ui/buttons', {
        templateUrl: '/templates/admin/ui/buttons.html'
      }).when('/ui/icons', {
        templateUrl: '/templates/admin/ui/icons.html'
      }).when('/ui/grids', {
        templateUrl: '/templates/admin/ui/grids.html'
      }).when('/ui/widgets', {
        templateUrl: '/templates/admin/ui/widgets.html'
      }).when('/ui/components', {
        templateUrl: '/templates/admin/ui/components.html'
      }).when('/ui/timeline', {
        templateUrl: '/templates/admin/ui/timeline.html'
      }).when('/ui/nested-lists', {
        templateUrl: '/templates/admin/ui/nested-lists.html'
      }).when('/ui/pricing-tables', {
        templateUrl: '/templates/admin/ui/pricing-tables.html'
      }).when('/forms/elements', {
        templateUrl: '/templates/admin/forms/elements.html'
      }).when('/forms/layouts', {
        templateUrl: '/templates/admin/forms/layouts.html'
      }).when('/forms/validation', {
        templateUrl: '/templates/admin/forms/validation.html'
      }).when('/forms/wizard', {
        templateUrl: '/templates/admin/forms/wizard.html'
      }).when('/maps/gmap', {
        templateUrl: '/templates/admin/maps/gmap.html'
      }).when('/maps/jqvmap', {
        templateUrl: '/templates/admin/maps/jqvmap.html'
      }).when('/tables/static', {
        templateUrl: '/templates/admin/tables/static.html'
      }).when('/tables/responsive', {
        templateUrl: '/templates/admin/tables/responsive.html'
      }).when('/tables/dynamic', {
        templateUrl: '/templates/admin/tables/dynamic.html'
      }).when('/charts/others', {
        templateUrl: '/templates/admin/charts/charts.html'
      }).when('/charts/morris', {
        templateUrl: '/templates/admin/charts/morris.html'
      }).when('/charts/flot', {
        templateUrl: '/templates/admin/charts/flot.html'
      }).when('/mail/inbox', {
        templateUrl: '/templates/admin/mail/inbox.html'
      }).when('/mail/compose', {
        templateUrl: '/templates/admin/mail/compose.html'
      }).when('/mail/single', {
        templateUrl: '/templates/admin/mail/single.html'
      }).when('/pages/features', {
        templateUrl: '/templates/admin/pages/features.html'
      }).when('/pages/signin', {
        templateUrl: '/templates/admin/pages/signin.html'
      }).when('/pages/signup', {
        templateUrl: '/templates/admin/pages/signup.html'
      }).when('/pages/forgot', {
        templateUrl: '/templates/admin/pages/forgot-password.html'
      }).when('/pages/lock-screen', {
        templateUrl: '/templates/admin/pages/lock-screen.html'
      }).when('/pages/profile', {
        templateUrl: '/templates/admin/pages/profile.html'
      }).when('/404', {
        templateUrl: '/templates/admin/pages/404.html'
      }).when('/pages/500', {
        templateUrl: '/templates/admin/pages/500.html'
      }).when('/pages/blank', {
        templateUrl: '/templates/admin/pages/blank.html'
      }).when('/pages/invoice', {
        templateUrl: '/templates/admin/pages/invoice.html'
      }).when('/pages/services', {
        templateUrl: '/templates/admin/pages/services.html'
      }).when('/pages/about', {
        templateUrl: '/templates/admin/pages/about.html'
      }).when('/pages/contact', {
        templateUrl: '/templates/admin/pages/contact.html'
      }).when('/tasks', {
        templateUrl: '/templates/admin/tasks/tasks.html'
      }).otherwise({
        redirectTo: '/404'
      });

  });

}).call(this);
