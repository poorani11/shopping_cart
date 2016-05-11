'use strict';
 
 
var shoppingCart = angular.module('shoppingCart', [
    'ngRoute',
    'cart',
    'checkout'
])

shoppingCart.config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({
        redirectTo: '/cart'
    });
}]);