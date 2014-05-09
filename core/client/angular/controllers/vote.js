'use strict';

angular.module('pinkpinkApp')
  .controller('VoteCtrl', function ($http, $scope, $location) {

  $scope.singleModel = 1;

  $scope.radioModel = 'Middle';

  $scope.checkModel = {
    left: false,
    middle: true,
    right: false
  };

    $http.get('/api/vote/view').success(function(photo) {
      console.log(photo);
      $scope.photo = photo;
    });

    $scope.user = {};
    $scope.errors = {};

    $scope.vote = function(form) {
      console.log(form);
    };

  })
.controller('VoteBoardCtrl', function ($http, $scope, $location) {

    $http.get('/api/vote/board').success(function(photos) {
      console.log(photos);
      $scope.photos = photos;
    });

    $scope.user = {};
    $scope.errors = {};

    $scope.vote = function(form) {
      console.log(form);
    };

  });
