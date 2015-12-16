'use strict';

/**
 * @ngdoc function
 * @name realEstateApp.controller:login
 * @description
 * # login
 * Controller of the realEstateApp
 */
app.controller('login', function ($scope,$state) {
  $scope.authorizeLogin = function(){
    $state.go('dashboard');
  };
});
