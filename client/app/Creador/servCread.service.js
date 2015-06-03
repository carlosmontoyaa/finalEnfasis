'use strict';

angular.module('parcialApp')
  .service('servCread', function ($http) {

    var self = this;

    self.getCreador = function(callback){

      $http.get('http://greatsource.co/futuro/API/getAll?cedula=1152444257').
        success(function(data, status, headers, config) {
          callback(data);
        }).
        error(function(data, status, headers, config) {
          callback('No se pudo :(');
        });

    }

  });
