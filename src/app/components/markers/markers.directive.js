(function() {
  'use strict';

  angular
    .module('angularGulpTest')
    .directive('markers', markers);

  /** @ngInject */
  function markers() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/markers/markers.html',
      scope: {
        info: "="
      },
      link: function($scope) {
        $scope.remove = function($index){ 
          $scope.info.splice($index,1);     
        };
        $scope.confirm = function($index){
          var data = {
            position: $scope.info[$index].position,
            title: $scope.info[$index].title,
            not_confirmed: false
          };
          $scope.info.splice($index,1);  
          $scope.info.push(data);     
        };
      }
    };

    return directive;
  }

})();
