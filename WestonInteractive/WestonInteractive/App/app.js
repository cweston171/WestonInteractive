(function () {
    'use strict';

    // route configs
    angular
        .module('westonInteractive')
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.
                when('/TickiTicki', {
                    templateUrl: '~/App/Views/indexView.cshtml',
                    controller: 'indexController'
                }).
                when('/TickiTickiTickiTicki/', {
                    templateUrl: '~/App/Views/projectView.cshtml',
                    controller: 'projectController'
                });
        }]);

    // run
    angular
        .module('westonInteractive')
        .run(['$rootScope', function ($rootScope) { }]);
})();