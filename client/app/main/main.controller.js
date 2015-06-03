'use strict';

angular.module('parcialApp')
  .controller('MainCtrl', function ($scope,myService,$modal,$log) {
    $scope.countries = [];
    $scope.animationsEnabled = true;

    var init = function(){
      myService.getCountries(callback);

    }

    var callback = function(data){
      $scope.countries = data;
    }

    init();

    $scope.show = function(id){

      $scope.items = ['hola']
        var modalInstance = $modal.open({
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });

    }

  });
