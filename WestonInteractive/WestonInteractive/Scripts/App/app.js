(function () {
    var wiApp = angular.module('westonInteractive', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

    // route config
    wiApp.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'IndexCntrl',
                templateUrl: 'Scripts/App/Views/indexView.html'
            })
            .when('/projects', {
                controller: 'ProjectsCntrl',
                templateUrl: 'Views/ProjectList.html'
            })
            .when('/web/:id', {
                controller: 'ProjectViewCntrl',
                templateUrl: 'Views/WebProject.html'
            })
            .when('/film/:id', {
                controller: 'FilmProjectCntrl',
                templateUrl: 'Views/FilmProject.html'
            })
            .otherwise({ redirectTo: '/' });
    })

    .service('slidesService', ['$http', function ($http) {
        this.getSlides = function () {
            return slides;
        };
        this.getSlider = function (num) {
            return slider;
        };
        this.getAllSkillz = function () {
            return allSkillz();
        }
    }])

    /////////////////////////////
    ////     DIRECTIVES     ////
    .directive('mainNavigation', ['$scope', '$rootScope', function ($scope, $rootScope) {
        return {
            restrict: 'AE',
            scope: {
                menus: '='
            },
            templateUrl: 'Views/MainNavigation.html',
            controller: function ($scope) {

            }
        }
    }])

    ///////////////////////////
    ////  APP CONTROLLERS ////

    // APP LEVEL CONTROLLER
    .controller('AppCntrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.loading = true;
        $scope.menus = [
            {
                title: 'Home',
                url: '#/',
                active: false,
                activeClass: this.isActive ? "active" : ""
            },
            {
                title: 'Projects',
                url: '#/Projects',
                active: false,
                activeClass: this.isActive ? "active" : ""
            },
            {
                title: 'About',
                url: '#/About',
                active: false,
                activeClass: this.isActive ? "active" : ""
            },
        ];
    }])

    // Index
    .controller('IndexCntrl', ['$scope', '$rootScope', 'slidesService', function ($scope, $rootScope, slidesService) {
        $rootScope.loading = true;

        $scope.slider = slidesService.getSlider();
    }])
    .controller('ProjectsCntrl', ['$scope', '$rootScope', 'slidesService', function ($scope, $rootScope, slidesService) {
        $rootScope.loading = true;
    }]);
})();