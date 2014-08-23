(function() {
  'use strict';
  angular.module('admin', [
    'ngRoute',
    'ngAnimate',
    'ui.ace',
    'ui.bootstrap',
    'easypiechart',
    'mgo-angular-wizard',
    'textAngular',
    'ui.tree',
    'ngMap',
    'ngTagsInput',
    'hc.marked',
    'app.ui.ctrls',
    'app.ui.directives',
    'app.ui.services',
    'app.controllers',
    'admin.ui.reveal.ctrls',
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
        templateUrl: '/templates/dashboard.html'
      }).when('/reveal/dashboard', {
        templateUrl: '/templates/reveal/dashboard.html'
      }).when('/reveal/slide/:slideId', {
        templateUrl: '/templates/reveal/slide.html'
      }).when('/reveal/slides/:deckId', {
        templateUrl: '/templates/reveal/deck_editor.html'
      }).when('/reveal/decks', {
        templateUrl: '/templates/reveal/decks.html'
      }).when('/reveal/deck', {
        templateUrl: '/templates/reveal/deck.html'
      }).when('/reveal/deck/:deckId', {
        templateUrl: '/templates/reveal/deck.html'
      }).when('/ui/typography', {
        templateUrl: '/templates/ui/typography.html'
      }).when('/ui/buttons', {
        templateUrl: '/templates/ui/buttons.html'
      }).when('/ui/icons', {
        templateUrl: '/templates/ui/icons.html'
      }).when('/ui/grids', {
        templateUrl: '/templates/ui/grids.html'
      }).when('/ui/widgets', {
        templateUrl: '/templates/ui/widgets.html'
      }).when('/ui/components', {
        templateUrl: '/templates/ui/components.html'
      }).when('/ui/timeline', {
        templateUrl: '/templates/ui/timeline.html'
      }).when('/ui/nested-lists', {
        templateUrl: '/templates/ui/nested-lists.html'
      }).when('/ui/pricing-tables', {
        templateUrl: '/templates/ui/pricing-tables.html'
      }).when('/forms/elements', {
        templateUrl: '/templates/forms/elements.html'
      }).when('/forms/layouts', {
        templateUrl: '/templates/forms/layouts.html'
      }).when('/forms/validation', {
        templateUrl: '/templates/forms/validation.html'
      }).when('/forms/wizard', {
        templateUrl: '/templates/forms/wizard.html'
      }).when('/maps/gmap', {
        templateUrl: '/templates/maps/gmap.html'
      }).when('/maps/jqvmap', {
        templateUrl: '/templates/maps/jqvmap.html'
      }).when('/tables/static', {
        templateUrl: '/templates/tables/static.html'
      }).when('/tables/responsive', {
        templateUrl: '/templates/tables/responsive.html'
      }).when('/tables/dynamic', {
        templateUrl: '/templates/tables/dynamic.html'
      }).when('/charts/others', {
        templateUrl: '/templates/charts/charts.html'
      }).when('/charts/morris', {
        templateUrl: '/templates/charts/morris.html'
      }).when('/charts/flot', {
        templateUrl: '/templates/charts/flot.html'
      }).when('/mail/inbox', {
        templateUrl: '/templates/mail/inbox.html'
      }).when('/mail/compose', {
        templateUrl: '/templates/mail/compose.html'
      }).when('/mail/single', {
        templateUrl: '/templates/mail/single.html'
      }).when('/pages/features', {
        templateUrl: '/templates/pages/features.html'
      }).when('/pages/signin', {
        templateUrl: '/templates/pages/signin.html'
      }).when('/pages/signup', {
        templateUrl: '/templates/pages/signup.html'
      }).when('/pages/forgot', {
        templateUrl: '/templates/pages/forgot-password.html'
      }).when('/pages/lock-screen', {
        templateUrl: '/templates/pages/lock-screen.html'
      }).when('/pages/profile', {
        templateUrl: '/templates/pages/profile.html'
      }).when('/404', {
        templateUrl: '/templates/pages/404.html'
      }).when('/pages/500', {
        templateUrl: '/templates/pages/500.html'
      }).when('/pages/blank', {
        templateUrl: '/templates/pages/blank.html'
      }).when('/pages/invoice', {
        templateUrl: '/templates/pages/invoice.html'
      }).when('/pages/services', {
        templateUrl: '/templates/pages/services.html'
      }).when('/pages/about', {
        templateUrl: '/templates/pages/about.html'
      }).when('/pages/contact', {
        templateUrl: '/templates/pages/contact.html'
      }).when('/tasks', {
        templateUrl: '/templates/tasks/tasks.html'
      }).otherwise({
        redirectTo: '/404'
      });

  });

}).call(this);
