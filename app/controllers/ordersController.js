(function () {

    var OrdersController = function ($scope, $routeParams) {
        
        var customerId = $routeParams.customerId;
        $scope.orders = null;
        
        function init(){
            //Search the customers for the customerId
            for(var i=0, len=$scope.customers.length;i<len;i++){
                if($scope.customers[i].id === parseInt(customerId)) {
                    $scope.orders = $scope.customers[i].orders;
                    break;
                }
            }
        }
        
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
            }
        ];
        
        init();
    }

    OrdersController.$inject = ['$scope', '$routeParams'];

    angular.module('customersApp').controller('OrdersController', OrdersController);

}());