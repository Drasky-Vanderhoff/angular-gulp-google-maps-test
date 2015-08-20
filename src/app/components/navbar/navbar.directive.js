(function() {
  'use strict';

  angular
    .module('angularGulpTest')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {}
    };

    return directive;
  }

})();
