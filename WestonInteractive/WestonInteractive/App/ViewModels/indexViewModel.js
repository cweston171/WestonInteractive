(function () {
    'use strict';

    angular
        .module('westonInteractive')
        .controller('app.index', ['$scope', '$http', 'slidesService', function ($scope, $http, slidesService) {
            $scope.cInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.slider = slidesService.getSlider(1);
        }]);
})();