(function () {
    'use strict';

    angular
        .module('westonInteractive')
        .controller('app.shared', ['$scope', function($scope) {
            $scope.app = {
                title: "Weston Interactive",
                actions: [
                    { text: "Home", link: "/" },
                    { text: "Projects", link: "/Projects" },
                    { text: "About", link: "/About" },
                    { text: "Contact", link: "/Contact" }
                ]
            };
        }]);
})();