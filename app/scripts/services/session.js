'use strict';

angular.module('pinkpinkApp')
  .factory('Session', function ($resource) {
    return $resource('/lib/session/');
  });
