(function () {

    var CustomerController = function CustomerController($scope) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };

        $scope.customers = [
            {
                id: 1,
                joined: '2000-07-02',
                name: 'Dave',
                city: 'Orlando',
                orderTotal: 9.991,
                orders: [
                    {
                        id: 1,
                        product: 'Shoes',
                        total: 9.991
                    }
                ]
            },
            {
                id: 2,
                joined: '2003-03-12',
                name: 'Rick',
                city: 'Dallas',
                orderTotal: 19.99,
                orders: [
                    {
                        id: 2,
                        product: 'Baseball',
                        total: 19.99
                    },
                    {
                        id: 3,
                        product: 'Bat',
                        total: 19.99
                    }
                ]
            }, {
                id: 3,
                joined: '2006-20-02',
                name: 'Mark',
                city: 'Boston',
                orderTotal: 14.99,
                orders: [
                    {
                        id: 3,
                        product: 'Shirt',
                        total: 14.99
                    }
                ]
            }, {
                id: 4,
                joined: '2010-17-04',
                name: 'John',
                city: 'Porcupine',
                orderTotal: 16.995,
                orders: [
                    {
                        id: 4,
                        product: 'Pant',
                        total: 16.995
                    }
                ]
            }];
    };
    
    CustomerController.$inject = ['$scope'];

    angular.module('customersApp')
        .controller('CustomerController', CustomerController)
    
}());


//app.controller('bairroController', function($scope, $http){
//    $http.get('data/bairros.json').
//    success(function(data, status, headers, config) {
//      $scope.bairros = data;
//    }).
//    error(function(data, status, headers, config) {
//      // log error
//    });
//});