'use strict';

var apiUrl = "http://api.pinkpink.hansh.kr";

angular.module('pinkpinkApp')
  .controller('VoteCtrl', function($http, $scope, $location) {

    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
      left: false,
      middle: true,
      right: false
    };

    $http.get(apiUrl + '/photo/vote').success(function(photo) {
      $scope.photo = photo;
    });

    $scope.user = {};
    $scope.errors = {};

    $scope.vote = function(form) {
      console.log(form);
    };

  })
  .controller('VoteBoardCtrl', function($http, $scope, $location) {

    $http.get(apiUrl + '/photo/votes').success(function(photos) {
      console.log(photos);
      $scope.photos = photos;
    });

    $scope.user = {};
    $scope.errors = {};

    $scope.vote = function(form) {
      console.log(form);
    };

  });
