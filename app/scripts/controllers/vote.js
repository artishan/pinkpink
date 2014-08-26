'use strict';

var apiUrl = "http://api.pinkpink.hansh.kr";

angular.module('pinkpinkApp')
  .controller('VoteCtrl', function($http, $scope, $location, $modal, $log) {

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

    $scope.items = ['item1', 'item2', 'item3'];

     $scope.open = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'components/modal.html',
        controller: ModalInstanceCtrl,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

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

var ModalInstanceCtrl = function ($scope, $modalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
