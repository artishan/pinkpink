(function() {
  'use strict';
  angular.module('reveal.services', []).factory('logger', [
    function() {
      var logIt;
      toastr.options = {
        "closeButton": true,
        "positionClass": "toast-bottom-right",
        "timeOut": "3000"
      };
      logIt = function(message, type) {
        return toastr[type](message);
      };
      return {
        log: function(message) {
          logIt(message, 'info');
        },
        logWarning: function(message) {
          logIt(message, 'warning');
        },
        logSuccess: function(message) {
          logIt(message, 'success');
        },
        logError: function(message) {
          logIt(message, 'error');
        }
      };
    }
  ]).factory('revealApi', [
    'Restangular',
    function(Restangular) {
      var logIt;
      var api = Restangular.service('users');
      toastr.options = {
        "closeButton": true,
        "positionClass": "toast-bottom-right",
        "timeOut": "3000"
      };
      logIt = function(message, type) {
        return toastr[type](message);
      };
      return {
        deckCreate: function(data, sucessCallback, errorCallback) {
          var deck = api.one('deck');
          deck.name = data.name;
          deck.content = data.content;
          deck.put().then(
            function(){
              logIt(data.name + ' 덱을 추가하였습니다.', 'warning');
              sucessCallback();
            },function(){
              logIt(data.name + ' 덱을 추가하였습니다.', 'warning');
              errorCallback();
            }
          );
        },
        logWarning: function(message) {
          logIt(message, 'warning');
        },
        logSuccess: function(message) {
          logIt(message, 'success');
        },
        logError: function(message) {
          logIt(message, 'error');
        }
      };
    }
  ]);

}).call(this);
