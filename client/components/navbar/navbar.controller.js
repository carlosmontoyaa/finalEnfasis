'use strict';

angular.module('parcialApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [{
      'title': 'Paises',
      'link': '/'
    },
      {
        'title': 'Creador',
        'link': '/Creador'
      }];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
