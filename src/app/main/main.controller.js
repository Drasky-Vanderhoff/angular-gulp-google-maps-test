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
          position: {latitude: data.H, longitude: data.L}, 
          title: address_str,
          not_confirmed: true
        });
      },function (error) {
        alert(error);
      });
    };
    geocoding.getPosition("Argentina").then(function (data) {
      console.log(data);
      $scope.map = { center: {latitude: data.H, longitude: data.L}, zoom: 5 };
    },function (error) {
      alert(error);
    });
  }
})();
