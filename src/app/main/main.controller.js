(function() {
  'use strict';

  angular
    .module('angularGulpTest')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, ngDialog, geocoding) {
    $scope.markers = [];
    $scope.openModal = function () {
        var dialog = ngDialog.open({ 
          template: 'app/partials/add_new_marker.html',
          scope: $scope
        });
    };
    $scope.addNewMarker = function (address_str) {
      geocoding.getPosition(address_str).then(function (data) {
        var new_marker = $scope.markers.push({
          position: {latitude: data.G, longitude: data.K}, 
          title: address_str,
          not_confirmed: true
        });
        console.log(new_marker);
      },function (error) {
        alert(error);
      });
      console.log($scope.markers);
    };
    geocoding.getPosition("Argentina").then(function (data) {
      $scope.map = { center: {latitude: data.G, longitude: data.K}, zoom: 5 };
    },function (error) {
      alert(error);
    });
  }
})();
