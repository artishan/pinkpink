'use strict';

angular.module('pinkpinkApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
    // {
    //   'title': 'Home',
    //   'link': '/'
    // }
    , {
      'title': 'Photogenic',
      'link': '/#!/vote'
    }, {
      'title': 'Result',
      'link': '/#!/vote/board'
    }
    ,{
      'title': 'Settings',
      'link': '/#!/settings'
    }
    ,{
      'title': 'Admin',
      'link': '/admin'
    }
    ];

    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/login');
      });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
