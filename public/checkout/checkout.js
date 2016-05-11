'use strict';
 
var checkout = angular.module('checkout', ['ngRoute'])
 
checkout.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/checkout', {
        templateUrl: 'public/checkout/checkout.html',
        controller: 'CheckoutCtrl'
    });
}]);

 checkout.service('CommonProp', function() {
    var Items = '';
    var Total = 0;
  
    return {
        getItems: function() {
            return Items;
        },
        setItem: function(value) {
            Items = value;
        },
        getTotal: function(){
            return Total;
        },
        setTotal: function(value){
            Total = value;
        }
    };
});

checkout.controller('CheckoutCtrl', ['$scope','CommonProp', function($scope,CommonProp) {
    $scope.items = CommonProp.getItems();   
    $scope.total = CommonProp.getTotal();
    
}]);