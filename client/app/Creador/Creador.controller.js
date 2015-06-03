'use strict';

angular.module('parcialApp')
  .controller('CreadorCtrl', function ($scope, servCread) {

    $scope.creador;

    var init = function(){
      servCread.getCreador(callback);

    }

    var callback = function(data){
      $scope.creador = data;
    }

    init();


  });
