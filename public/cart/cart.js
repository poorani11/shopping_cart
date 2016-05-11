'use strict';
 
var cart = angular.module('cart', ['ngRoute'])
 
cart.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cart', {
    templateUrl: 'public/cart/cart.html',
    controller: 'CartCtrl'
  });
}])
 
cart.controller('CartCtrl', [function() {
     
}]);