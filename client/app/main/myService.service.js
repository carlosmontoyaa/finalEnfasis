'use strict';

angular.module('parcialApp')
  .service('myService', function ($http) {

    var self = this;

    self.getCountries = function(callback){

      $http.get('https://restcountries.eu/rest/v1/all').
        success(function(data, status, headers, config) {
          callback(data);
        }).
        error(function(data, status, headers, config) {
          callback('No se pudo :(');
        });

    }


  });
