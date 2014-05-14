'use strict';

angular.module('app')
  .factory('Session', function ($resource) {
    return $resource('/lib/session/');
  });
