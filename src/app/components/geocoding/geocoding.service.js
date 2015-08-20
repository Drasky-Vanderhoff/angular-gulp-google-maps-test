(function() {
  'use strict';

  angular
    .module('angularGulpTest')
    .factory('geocoding', geocoding);

  /** @ngInject */
  function geocoding($q) {
    var geocoder = new google.maps.Geocoder();
    var service = {
      getPosition: getPosition
    };
    return service;

    function getPosition(address_str) {
      return $q(function (resolve, reject) {
        geocoder.geocode({'address': address_str}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            resolve(results[0].geometry.location);
          } else {
            reject('Geocode was not successful for the following reason: ' + status);
          }
        });
      });
    }
  }
})();
