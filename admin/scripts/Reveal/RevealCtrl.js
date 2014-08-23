(function() {
  'use strict';
  angular.module('admin.ui.reveal.ctrls', [])
  .controller('revealCtrl', [
    '$scope', function($scope) {
      console.log("revealCtrl");
      return $scope.tags = ['foo', 'bar'];
    }
  ]).controller('revealDashboardCtrl', [
    '$scope', function($scope) {
      $scope.today = function() {
        return $scope.dt = new Date();
      };
      $scope.today();
      $scope.showWeeks = true;
      $scope.toggleWeeks = function() {
        return $scope.showWeeks = !$scope.showWeeks;
      };
      $scope.clear = function() {
        return $scope.dt = null;
      };
      $scope.disabled = function(date, mode) {
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      };
      $scope.toggleMin = function() {
        var _ref;
        return $scope.minDate = (_ref = $scope.minDate) != null ? _ref : {
          "null": new Date()
        };
      };
      $scope.toggleMin();
      $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        return $scope.opened = true;
      };
      $scope.dateOptions = {
        'year-format': "'yy'",
        'starting-day': 1
      };
      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'shortDate'];
      return $scope.format = $scope.formats[0];
    }
  ]).controller('revealDeckCtrl', [
    '$scope', function($scope) {
      console.log('loadede');
      $scope.api = "http://api.pinkpink.hanshr.kr";
      $scope.putSlide = function(data){
        console.log(data);
      }
      $scope.aceLoaded = function(_editor){
        // Editor part
        var _session = _editor.getSession();
        var _renderer = _editor.renderer;

        // Options
        _editor.setReadOnly(true);
        _session.setUndoManager(new ace.UndoManager());
        _renderer.setShowGutter(false);

        // Events
        _editor.on("changeSession", function(){ console.log('changeSession') });
        _session.on("change", function(){ console.log('chANGE') });
      };
    }
  ]).controller('revealSlideCtrl', [
    '$scope', function($scope) {
      console.log('loadede');
      $scope.putSlide = function(data){
        console.log(data);
      }
      $scope.aceLoaded = function(_editor){
        // Editor part
        var _session = _editor.getSession();
        var _renderer = _editor.renderer;

        // Options
        _editor.setReadOnly(true);
        _session.setUndoManager(new ace.UndoManager());
        _renderer.setShowGutter(false);

        // Events
        _editor.on("changeSession", function(){ console.log('changeSession') });
        _session.on("change", function(){ console.log('chANGE') });
      };
    }
  ]).controller('revealDecksCtrl', [
    '$scope', '$filter', 'Restangular', function($scope, $filter, Restangular) {
      var init;
      // $scope.decks = Restangular.all("reveal/decks").getList().$object;
      $scope.searchKeywords = '';
      $scope.filteredDecks = [];
      $scope.row = '';
      $scope.select = function(page) {
        var end, start;
        start = (page - 1) * $scope.numPerPage;
        end = start + $scope.numPerPage;
        return $scope.currentPageDecks = $scope.filteredDecks.slice(start, end);
      };
      $scope.onFilterChange = function() {
        $scope.select(1);
        $scope.currentPage = 1;
        return $scope.row = '';
      };
      $scope.onNumPerPageChange = function() {
        $scope.select(1);
        return $scope.currentPage = 1;
      };
      $scope.onOrderChange = function() {
        $scope.select(1);
        return $scope.currentPage = 1;
      };
      $scope.search = function() {
        $scope.filteredDecks = $filter('filter')($scope.decks, $scope.searchKeywords);
        return $scope.onFilterChange();
      };
      $scope.order = function(rowName) {
        if ($scope.row === rowName) {
          return;
        }
        $scope.row = rowName;
        $scope.filteredDecks = $filter('orderBy')($scope.decks, rowName);
        return $scope.onOrderChange();
      };
      $scope.numPerPageOpt = [3, 5, 10, 20];
      $scope.numPerPage = $scope.numPerPageOpt[2];
      $scope.currentPage = 1;
      $scope.currentPageStores = [];
      init = function() {
        Restangular.all("reveal/decks").getList().then(function(decks) {
          $scope.decks = decks;
          $scope.search();
          return $scope.select($scope.currentPage);

        })
      };
      return init();
    }
  ]).controller('revealSlidesCtrl', [
    '$scope', '$filter', function($scope, $filter) {
      var init;
      $scope.stores = [
        {
          name: '안녕 고구마 ',
          price: '$$',
          sales: 292,
          rating: 4.0
        }, {
          name: 'Eat On Monday Truck',
          price: '$',
          sales: 119,
          rating: 4.3
        }, {
          name: 'Tea Era',
          price: '$',
          sales: 874,
          rating: 4.0
        }, {
          name: 'Rogers Deli',
          price: '$',
          sales: 347,
          rating: 4.2
        }
      ];
      $scope.searchKeywords = '';
      $scope.filteredStores = [];
      $scope.row = '';
      $scope.select = function(page) {
        var end, start;
        start = (page - 1) * $scope.numPerPage;
        end = start + $scope.numPerPage;
        return $scope.currentPageStores = $scope.filteredStores.slice(start, end);
      };
      $scope.onFilterChange = function() {
        $scope.select(1);
        $scope.currentPage = 1;
        return $scope.row = '';
      };
      $scope.onNumPerPageChange = function() {
        $scope.select(1);
        return $scope.currentPage = 1;
      };
      $scope.onOrderChange = function() {
        $scope.select(1);
        return $scope.currentPage = 1;
      };
      $scope.search = function() {
        $scope.filteredStores = $filter('filter')($scope.stores, $scope.searchKeywords);
        return $scope.onFilterChange();
      };
      $scope.order = function(rowName) {
        if ($scope.row === rowName) {
          return;
        }
        $scope.row = rowName;
        $scope.filteredStores = $filter('orderBy')($scope.stores, rowName);
        return $scope.onOrderChange();
      };
      $scope.numPerPageOpt = [3, 5, 10, 20];
      $scope.numPerPage = $scope.numPerPageOpt[2];
      $scope.currentPage = 1;
      $scope.currentPageStores = [];
      init = function() {
        $scope.search();
        return $scope.select($scope.currentPage);
      };
      return init();
    }
  ]);

}).call(this);


