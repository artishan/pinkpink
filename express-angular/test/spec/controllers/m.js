'use strict';

describe('Controller: MCtrl', function () {

  // load the controller's module
  beforeEach(module('expressAngularApp'));

  var MCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MCtrl = $controller('MCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
