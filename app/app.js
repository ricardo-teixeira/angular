(function () {

    var demoApp = angular.module('customersApp', ['ngRoute']);

    demoApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'CustomerController',
                templateUrl: 'app/views/customers.html'
            })
            .when('/orders/:customerId', {
                controller: 'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

}());