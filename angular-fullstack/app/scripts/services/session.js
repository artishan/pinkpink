'use strict';

angular.module('angularFullstackApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
