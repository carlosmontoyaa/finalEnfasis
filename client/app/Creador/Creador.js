'use strict';

angular.module('parcialApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('Creador', {
        url: '/Creador',
        templateUrl: 'app/Creador/Creador.html',
        controller: 'CreadorCtrl'
      });
  });