(function() {
  'use strict';

  angular
    .module('angularGulpTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
