'use strict';

angular.module('pinkpinkApp')
  .factory('User', function ($resource) {
    return $resource('/admin/users/:id', {
      id: '@id'
    }, { //parameters default
      update: {
        method: 'PUT',
        params: {}
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      }
	  });
  });
