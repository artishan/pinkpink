(function() {
  'use strict';
  angular.module('reveal.controller', [])
  .controller('revealCtrl', [
    '$scope', 'Restangular', function($scope, Restangular) {
      console.log("revealCtrl");
      $scope.scope_test = 'hello';
      return $scope.tags = ['foo', 'bar'];
    }
  ]).controller('revealPreviewCtrl', [
    '$scope', '$routeParams', '$timeout', 'Restangular', function($scope, $routeParams, $timeout, Restangular) {
      var init;
      var route = $routeParams;
      var slides = Restangular.all("reveal/slides");
      $scope.slides = {};
      $scope.load = true;
      init = function() {
        slides.one(route.deckId).getList().then(function(slides) {
          $scope.slides = slides;
          $timeout(function() {
            $scope.load = false;
            Reveal.initialize({
              loop: false,
              transition: Reveal.getQueryHash().transition || 'cube'
            });
          }, 3000);

        })
      };
      return init();
    }
  ]).controller('revealDashboardCtrl', [
    '$scope', 'Restangular', function($scope, Restangular) {
      var init;
      var revealApi = Restangular.all("reveal");
      var decks = revealApi.one("decks");
      var slides = revealApi.one("slides");
      $scope.preview;
      $scope.decks = {};
      $scope.slides = {};
      $scope.view = function(slide){
        $scope.preview = slide;
      };
      $scope.change = function(deckId){
        slides.one(deckId).getList().then(function(slides) {
          $scope.slides.steps = slides;
          $scope.preview = slides[0];
        });
      };
      init = function() {
        decks.getList().then(function(decks) {
          $scope.decks = decks;
          slides.one(decks[0]._id).getList().then(function(slides) {
            $scope.slides = slides;
            $scope.preview = $scope.slides[0];
          });
        });
      };
      return init();
    }
  ]).controller('revealDeckCtrl', [
    '$scope', '$modal', function($scope, $modal) {
      console.log('loadede');
      $scope.api = "http://api.pinkpink.hanshr.kr";
      $scope.putSlide = function(data){
        console.log(data);
        Restangular.all("reveal/slide").getList().then(function(decks) {
          $scope.decks = decks;
          $scope.search();
          return $scope.select($scope.currentPage);
        });
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
    '$scope', '$routeParams', 'Restangular', function($scope, $routeParams, Restangular) {
      var restDeck;
      var route = $routeParams;
      console.log($routeParams);
      $scope.slide_id = route.slideId;
      $scope.deck_id = route.deckId;
      $scope.editor ={};
      if(route.slideId === undefined){
        restDeck =  Restangular.all("reveal").one('slide');
        $scope.editor.name = 'Slide1';
      }else{
        restDeck =  Restangular.all("reveal").one('slide/'+route.slideId);
        restDeck.getList().then(function(response){
          $scope.editor = response[0];
        });
      }
      $scope.putSlide = function(data){
        restDeck.deck_id = $scope.deck_id;
        restDeck.name = data.name;
        restDeck.content = data.content;
        restDeck.put().then(function(response) {
          var message = "Update";
          if(route.slideId === undefined){
            message = "Create";
            route.slideId = response.slideId;
            restDeck = restDeck.one(route.slideId);
          }
          console.log(message);
        }, function(response) {
          console.log("Error with status code", response.status);
        });
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
  ]).controller('revealModalDeckCtrl', [
    '$scope', '$modalInstance', 'Restangular', 'revealApi',
    function($scope, $modalInstance, Restangular, revealApi) {
      var original;
      $scope.add = {
        name: '',
        content: ''
      }
      $scope.ok = function() {
        $modalInstance.close($scope.selected.item);
      };
      $scope.cancel = function() {
        $modalInstance.dismiss("cancel");
      };
      $scope.showInfoOnSubmit = false;
      original = angular.copy($scope.add);
      $scope.revert = function() {
        // $scope.user = angular.copy(original);
        // $scope.form_signup.$setPristine();
        // return $scope.form_signup.confirmPassword.$setPristine();
      };
      $scope.canRevert = function() {
        return !angular.equals($scope.add, original) || !$scope.form_signup.$pristine;
      };
      $scope.canSubmit = function() {
        return true;
        // console.log($scope.add.$valid);
        // return $scope.add.$valid && !angular.equals($scope.add, original);
      };
      return $scope.submitForm = function(data) {
        // $scope.showInfoOnSubmit = true;
        var test = function() {
          console.log('성공');
          $modalInstance.dismiss("cancel");
        };

        revealApi.createDeck(data, test, function(){
          console.log('error');
        });
        // var putDeck = Restangular.all("reveal").one('deck');
        // putDeck.name = data.name;
        // putDeck.content = data.content;
        // putDeck.put();

        // logger.logSuccess(data.name + ' 덱을 추가하였습니다.');
        return $scope.revert();
      };
    }
  ]).controller('revealDecksCtrl', [
    '$scope', '$filter', '$modal', 'Restangular', 'logger',
    function($scope, $filter, $modal, Restangular, logger) {
      var init;
      $scope.searchKeywords = '';
      $scope.filteredDecks = [];
      $scope.row = '';
      $scope.notify = function(text) {
        logger.log("Heads up! This alert needs your attention, but it's not super important.");
        console.log(text);
      }
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
      $scope.delete = function(deckId) {
        var deckApi = Restangular.all("reveal").one('deck');
        deckApi.one(deckId).remove();
        logger.log('덱을 삭제하였습니다.');
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
      $scope.items = ["item1", "item2", "item3"];
      $scope.open = function() {
        var modalInstance;
        modalInstance = $modal.open({
          templateUrl: "templates/reveal/add_deck_modal.html",
          controller: 'revealModalDeckCtrl',
          resolve: {
            items: function() {
              return $scope.items;
            }
          }
        });
        modalInstance.result.then((function(selectedItem) {
          $scope.selected = selectedItem;
        }), function() {
          // $log.info("Modal dismissed at: " + new Date());
        });
      };
      $scope.edit = function() {
        var modalInstance;
        modalInstance = $modal.open({
          templateUrl: "templates/reveal/edit_deck_modal.html",
          controller: 'revealModalDeckCtrl',
          resolve: {
            items: function() {
              return $scope.items;
            }
          }
        });
        modalInstance.result.then((function(selectedItem) {
          $scope.selected = selectedItem;
        }), function() {
          // $log.info("Modal dismissed at: " + new Date());
        });
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
    '$scope', '$filter', '$routeParams', 'Restangular', 'logger',
    function($scope, $filter, $routeParams, Restangular, logger) {
      var init;
      var deckId = $routeParams.deckId;
      $scope.deckId = deckId;
      $scope.searchKeywords = '';
      $scope.filtered = [];
      $scope.row = '';
      $scope.select = function(page) {
        var end, start;
        start = (page - 1) * $scope.numPerPage;
        end = start + $scope.numPerPage;
        return $scope.currentPage = $scope.filtered.slice(start, end);
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
      $scope.delete = function(slide) {
        var deckApi = Restangular.all("reveal").one('slide');
        deckApi.one(slide._id).remove().then(function() {
          console.log("Object saved OK");
          logger.logWarning(slide.name + ' 슬라이드를 삭제하였습니다.');
          init();
        }, function() {
          logger.logWarning(slide.name + ' 슬라이드를 삭제에 실패하였습니다.');
        });
      };
      $scope.copy = function(slide) {
        var deckApi = Restangular.all("reveal").one('slide');
        deckApi.deck_id = slide.deck_id;
        deckApi.name = slide.name;
        deckApi.content = slide.content;
        deckApi.put().then(function() {
          console.log("Object saved OK");
          logger.logSuccess(slide.name + ' 슬라이드를 복제하였습니다.');
          init();
        }, function() {
          logger.logWarning(slide.name + ' 슬라이드를 복에 실패하였습니다.');
        });
      };
      $scope.search = function() {
        $scope.filtered = $filter('filter')($scope.slides, $scope.searchKeywords);
        return $scope.onFilterChange();
      };
      $scope.order = function(rowName) {
        if ($scope.row === rowName) {
          return;
        }
        $scope.row = rowName;
        $scope.filtered = $filter('orderBy')($scope.slides, rowName);
        return $scope.onOrderChange();
      };
      $scope.numPerPageOpt = [3, 5, 10, 20];
      $scope.numPerPage = $scope.numPerPageOpt[2];
      $scope.currentPage = 1;
      $scope.currentPageStores = [];
      init = function() {
        Restangular.all("reveal/slides/" + deckId).getList().then(function(slides) {
          $scope.slides = slides;
          $scope.search();
          return $scope.select($scope.currentPage);
        })
      };
      return init();
    }
  ]);

}).call(this);


