(function() {
  'use strict';
  angular.module('admin', [
    'app.chart.ctrls',
    'app.chart.directives',
    'app.controllers',
    'app.directives',
    'app.form.validation',
    'app.localization',
    'app.map',
    'app.page.ctrls',
    'app.tables',
    'app.task',
    'app.ui.ctrls',
    'app.ui.directives',
    'app.ui.form.ctrls',
    'app.ui.form.directives',
    'app.ui.services',
    'easypiechart',
    'hc.marked',
    'mgo-angular-wizard',
    'ngAnimate',
    'ngMap',
    'ngRoute',
    'ngTagsInput',
    'restangular',
    'textAngular',
    'ui.ace',
    'ui.bootstrap',
    'ui.tree',
    'admin.ui.reveal.ctrls'
]).config(function($routeProvider, $locationProvider, RestangularProvider) {
      $locationProvider.hashPrefix('!');
      $routeProvider
      .when('/', {
        redirectTo: '/dashboard',
        authenticate: true
      }).when('/dashboard', {
        templateUrl: '/templates/dashboard.html'
      }).when('/swagger', {
        templateUrl: '/templates/swagger/list.html'
      }).when('/reveal/dashboard', {
        templateUrl: '/templates/reveal/dashboard.html'
      }).when('/reveal/slide/edit/:slideId', {
        templateUrl: '/templates/reveal/edit_slide.html'
      }).when('/reveal/deck/edit/:deckId', {
        templateUrl: '/templates/reveal/edit_deck.html'
      }).when('/reveal/deck/list', {
        templateUrl: '/templates/reveal/list_deck.html'
      }).when('/reveal/slide/list/:deckId', {
        templateUrl: '/templates/reveal/list_slide.html'
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

      RestangularProvider.setBaseUrl('http://api.pinkpink.hansh.kr');
      // RestangularProvider.setDefaultRequestParams({ apiKey: 'qweqweqweqwe' })
      // RestangularProvider.setRestangularFields({
      //   id: '_id.$oid'
      // });
      // RestangularProvider.setRequestInterceptor(function(elem, operation, what) {
      //   if (operation === 'put') {
      //     elem._id = undefined;
      //     return elem;
      //   }
      //   return elem;
      // })
  });

}).call(this);
